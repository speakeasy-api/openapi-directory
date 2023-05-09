# invitation

### Available Operations

* [getInvitationVendors](#getinvitationvendors) - Get vendor list for compiled invitation needs

## getInvitationVendors

Get vendor list for compiled invitation needs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInvitationVendorsResponse;
import org.openapis.openapi.models.shared.FileNeedsVendor;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.FileNeedsVendor[]{{
                add(new FileNeedsVendor() {{
                    fileId = 606476L;
                    guid = "quis";
                    projectId = 218403L;
                    reason = "delectus";
                    targetLanguage = new String[]{{
                        add("consectetur"),
                        add("vero"),
                    }};
                    taskType = new String[]{{
                        add("dignissimos"),
                        add("hic"),
                        add("distinctio"),
                        add("quod"),
                    }};
                }}),
                add(new FileNeedsVendor() {{
                    fileId = 486160L;
                    guid = "similique";
                    projectId = 708548L;
                    reason = "vero";
                    targetLanguage = new String[]{{
                        add("dolore"),
                        add("quibusdam"),
                    }};
                    taskType = new String[]{{
                        add("sequi"),
                        add("natus"),
                        add("impedit"),
                        add("aut"),
                    }};
                }}),
                add(new FileNeedsVendor() {{
                    fileId = 974259L;
                    guid = "exercitationem";
                    projectId = 862310L;
                    reason = "fugit";
                    targetLanguage = new String[]{{
                        add("maiores"),
                        add("doloribus"),
                        add("iusto"),
                        add("eligendi"),
                    }};
                    taskType = new String[]{{
                        add("alias"),
                        add("officia"),
                    }};
                }}),
                add(new FileNeedsVendor() {{
                    fileId = 269479L;
                    guid = "ipsam";
                    projectId = 410492L;
                    reason = "aspernatur";
                    targetLanguage = new String[]{{
                        add("possimus"),
                        add("magnam"),
                    }};
                    taskType = new String[]{{
                        add("ex"),
                    }};
                }}),
            }}            

            GetInvitationVendorsResponse res = sdk.invitation.getInvitationVendors(req);

            if (res.vendorInvitationList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
