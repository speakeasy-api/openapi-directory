# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest req = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest() {{
                security = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams() {{
                    location = "corporis";
                    project = "at";
                }};
                queryParams = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "recusandae";
                    alt = "proto";
                    callback = "at";
                    fields = "qui";
                    key = "fugit";
                    oauthToken = "repellat";
                    prettyPrint = false;
                    quotaUser = "blanditiis";
                    uploadType = "omnis";
                    uploadProtocol = "magni";
                }};
                request = new SubmitProvisioningConfigRequest() {{
                    email = "nemo";
                    provisioningConfig = new ProvisioningConfig() {{
                        instances = new openapisdk.models.shared.InstanceConfig[]() {{
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "cupiditate";
                                    existingNetworkId = "soluta";
                                    networkId = "voluptatibus";
                                }};
                                hyperthreading = false;
                                id = "corrupti";
                                instanceType = "expedita";
                                location = "nisi";
                                osImage = "quibusdam";
                                privateNetwork = new NetworkAddress() {{
                                    address = "magni";
                                    existingNetworkId = "quia";
                                    networkId = "earum";
                                }};
                                userNote = "a";
                            }}),
                        }};
                        networks = new openapisdk.models.shared.NetworkConfig[]() {{
                            add(new NetworkConfig() {{
                                bandwidth = "BW_1_GBPS";
                                cidr = "rerum";
                                id = "maxime";
                                location = "qui";
                                serviceCidr = "DISABLED";
                                type = "PRIVATE";
                                userNote = "iusto";
                                vlanAttachments = new openapisdk.models.shared.VlanAttachment[]() {{
                                    add(new VlanAttachment() {{
                                        id = "provident";
                                        pairingKey = "voluptatem";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "veniam";
                                        pairingKey = "aspernatur";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "sed";
                                        pairingKey = "voluptatem";
                                    }}),
                                }};
                            }}),
                        }};
                        ticketId = "numquam";
                        volumes = new openapisdk.models.shared.VolumeConfig[]() {{
                            add(new VolumeConfig() {{
                                id = "et";
                                location = "nulla";
                                lunRanges = new openapisdk.models.shared.LunRange[]() {{
                                    add(new LunRange() {{
                                        quantity = 8361513412454442989;
                                        sizeGb = 177910529029143534;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 6895181443492226283;
                                        sizeGb = 8137267475074113375;
                                    }}),
                                }};
                                machineIds = new String[]() {{
                                    add("hic"),
                                    add("perferendis"),
                                    add("cupiditate"),
                                }};
                                nfsExports = new openapisdk.models.shared.NfsExport[]() {{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = true;
                                        cidr = "qui";
                                        machineId = "qui";
                                        networkId = "eius";
                                        noRootSquash = true;
                                        permissions = "READ_WRITE";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = true;
                                        cidr = "aliquid";
                                        machineId = "natus";
                                        networkId = "voluptate";
                                        noRootSquash = false;
                                        permissions = "READ_WRITE";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = true;
                                        allowSuid = false;
                                        cidr = "velit";
                                        machineId = "maiores";
                                        networkId = "sunt";
                                        noRootSquash = true;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                }};
                                protocol = "PROTOCOL_UNSPECIFIED";
                                sizeGb = 9089297782211299111;
                                snapshotsEnabled = true;
                                type = "TYPE_UNSPECIFIED";
                                userNote = "illo";
                            }}),
                            add(new VolumeConfig() {{
                                id = "consequatur";
                                location = "veritatis";
                                lunRanges = new openapisdk.models.shared.LunRange[]() {{
                                    add(new LunRange() {{
                                        quantity = 6545601966413333913;
                                        sizeGb = 2617424492518683871;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 8903029501216635624;
                                        sizeGb = 3572128461528097481;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 1955662514273187341;
                                        sizeGb = 4990110785778232803;
                                    }}),
                                }};
                                machineIds = new String[]() {{
                                    add("quo"),
                                    add("nulla"),
                                }};
                                nfsExports = new openapisdk.models.shared.NfsExport[]() {{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "vel";
                                        machineId = "qui";
                                        networkId = "ut";
                                        noRootSquash = true;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "qui";
                                        machineId = "a";
                                        networkId = "totam";
                                        noRootSquash = true;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                }};
                                protocol = "PROTOCOL_NFS";
                                sizeGb = 6026832288918041536;
                                snapshotsEnabled = false;
                                type = "TYPE_UNSPECIFIED";
                                userNote = "cumque";
                            }}),
                            add(new VolumeConfig() {{
                                id = "fugit";
                                location = "qui";
                                lunRanges = new openapisdk.models.shared.LunRange[]() {{
                                    add(new LunRange() {{
                                        quantity = 158155743570349394;
                                        sizeGb = 964892110588986553;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 7644729130951826223;
                                        sizeGb = 8176356009201989955;
                                    }}),
                                }};
                                machineIds = new String[]() {{
                                    add("tempore"),
                                }};
                                nfsExports = new openapisdk.models.shared.NfsExport[]() {{
                                    add(new NfsExport() {{
                                        allowDev = true;
                                        allowSuid = true;
                                        cidr = "reprehenderit";
                                        machineId = "explicabo";
                                        networkId = "aut";
                                        noRootSquash = false;
                                        permissions = "READ_WRITE";
                                    }}),
                                }};
                                protocol = "PROTOCOL_UNSPECIFIED";
                                sizeGb = 3889834450408349734;
                                snapshotsEnabled = true;
                                type = "DISK";
                                userNote = "libero";
                            }}),
                        }};
                    }};
                }};
            }};

            BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse res = sdk.projects.baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req);

            if (res.provisioningConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `baremetalsolutionProjectsLocationsSubmitProvisioningConfig` - Submit a provisiong configuration for a given project.
* `baremetalsolutionProjectsProvisioningQuotasList` - List the budget details to provision resources on a given project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
