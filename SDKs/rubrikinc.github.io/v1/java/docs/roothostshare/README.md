# rootHostShare

## Overview

Network shares.

### Available Operations

* [bulkAddHostShares](#bulkaddhostshares) - Add NAS shares in bulk
* [bulkUpdateHostShare](#bulkupdatehostshare) - Update network shares

## bulkAddHostShares

Add NAS shares for a NAS host to the Rubrik cluster in bulk. This operation does not validate share credentials. If the default share credentials are incorrect, the share status on shares UI displays as "Wrong credential". Use the PATCH /v1/host/share/bulk endpoint to enter the correct credentials when this status displays.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkAddHostSharesResponse;
import org.openapis.openapi.models.shared.DiscoveredNasShare;
import org.openapis.openapi.models.shared.DiscoveredNasShareShareTypeEnum;
import org.openapis.openapi.models.shared.NasSharesToAdd;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("maiores", "enim") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.NasSharesToAdd req = new NasSharesToAdd("sint",                 new org.openapis.openapi.models.shared.DiscoveredNasShare[]{{
                                add(new DiscoveredNasShare("nemo", DiscoveredNasShareShareTypeEnum.NFS) {{
                                    exportPoint = "deserunt";
                                    shareType = DiscoveredNasShareShareTypeEnum.NFS;
                                }}),
                                add(new DiscoveredNasShare("sint", DiscoveredNasShareShareTypeEnum.SMB) {{
                                    exportPoint = "est";
                                    shareType = DiscoveredNasShareShareTypeEnum.NFS;
                                }}),
                                add(new DiscoveredNasShare("necessitatibus", DiscoveredNasShareShareTypeEnum.SMB) {{
                                    exportPoint = "impedit";
                                    shareType = DiscoveredNasShareShareTypeEnum.SMB;
                                }}),
                                add(new DiscoveredNasShare("debitis", DiscoveredNasShareShareTypeEnum.SMB) {{
                                    exportPoint = "ex";
                                    shareType = DiscoveredNasShareShareTypeEnum.NFS;
                                }}),
                            }});            

            BulkAddHostSharesResponse res = sdk.rootHostShare.bulkAddHostShares(req);

            if (res.bulkShareAddResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## bulkUpdateHostShare

Update the properties of the objects that represent the specified network share.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkUpdateHostShareResponse;
import org.openapis.openapi.models.shared.HostShareParameters;
import org.openapis.openapi.models.shared.HostSharePatch;
import org.openapis.openapi.models.shared.HostShareUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quae", "minus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.HostShareUpdate[]{{
                add(new HostShareUpdate("repudiandae",                 new HostSharePatch() {{
                                    domain = "nam";
                                    exportPoint = "dolore";
                                    hostShareParameters = new HostShareParameters() {{
                                        isIsilonChangelistEnabled = false;
                                        isNetAppSnapDiffEnabled = false;
                                        isOnNetAppSnapMirrorDestVolume = false;
                                    }};;
                                    password = "iusto";
                                    username = "Jace.Dickinson";
                                }};) {{
                    shareId = "laborum";
                    updateProperties = new HostSharePatch() {{
                        domain = "consectetur";
                        exportPoint = "velit";
                        hostShareParameters = new HostShareParameters() {{
                            isIsilonChangelistEnabled = false;
                            isNetAppSnapDiffEnabled = false;
                            isOnNetAppSnapMirrorDestVolume = false;
                        }};
                        password = "atque";
                        username = "Cullen74";
                    }};
                }}),
                add(new HostShareUpdate("quibusdam",                 new HostSharePatch() {{
                                    domain = "inventore";
                                    exportPoint = "facere";
                                    hostShareParameters = new HostShareParameters() {{
                                        isIsilonChangelistEnabled = false;
                                        isNetAppSnapDiffEnabled = false;
                                        isOnNetAppSnapMirrorDestVolume = false;
                                    }};;
                                    password = "libero";
                                    username = "Bartholome78";
                                }};) {{
                    shareId = "quo";
                    updateProperties = new HostSharePatch() {{
                        domain = "deleniti";
                        exportPoint = "quibusdam";
                        hostShareParameters = new HostShareParameters() {{
                            isIsilonChangelistEnabled = false;
                            isNetAppSnapDiffEnabled = false;
                            isOnNetAppSnapMirrorDestVolume = false;
                        }};
                        password = "iure";
                        username = "Brock.Wolf";
                    }};
                }}),
                add(new HostShareUpdate("excepturi",                 new HostSharePatch() {{
                                    domain = "eum";
                                    exportPoint = "velit";
                                    hostShareParameters = new HostShareParameters() {{
                                        isIsilonChangelistEnabled = false;
                                        isNetAppSnapDiffEnabled = false;
                                        isOnNetAppSnapMirrorDestVolume = false;
                                    }};;
                                    password = "ut";
                                    username = "Lauryn77";
                                }};) {{
                    shareId = "aliquam";
                    updateProperties = new HostSharePatch() {{
                        domain = "velit";
                        exportPoint = "illo";
                        hostShareParameters = new HostShareParameters() {{
                            isIsilonChangelistEnabled = false;
                            isNetAppSnapDiffEnabled = false;
                            isOnNetAppSnapMirrorDestVolume = false;
                        }};
                        password = "accusantium";
                        username = "Hermann87";
                    }};
                }}),
            }}            

            BulkUpdateHostShareResponse res = sdk.rootHostShare.bulkUpdateHostShare(req);

            if (res.hostShareDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
