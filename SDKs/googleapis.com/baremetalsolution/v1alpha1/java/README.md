# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse;
import org.openapis.openapi.models.shared.SubmitProvisioningConfigRequest;
import org.openapis.openapi.models.shared.ProvisioningConfig;
import org.openapis.openapi.models.shared.VolumeConfigProtocolEnum;
import org.openapis.openapi.models.shared.VolumeConfigTypeEnum;
import org.openapis.openapi.models.shared.VolumeConfig;
import org.openapis.openapi.models.shared.NfsExportPermissionsEnum;
import org.openapis.openapi.models.shared.NfsExport;
import org.openapis.openapi.models.shared.LunRange;
import org.openapis.openapi.models.shared.NetworkConfigBandwidthEnum;
import org.openapis.openapi.models.shared.NetworkConfigServiceCidrEnum;
import org.openapis.openapi.models.shared.NetworkConfigTypeEnum;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.VlanAttachment;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.NetworkAddress;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    location = "corrupti";
                    project = "provident";
                }};
                queryParams = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "quibusdam";
                    alt = "media";
                    callback = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    uploadType = "deserunt";
                    uploadProtocol = "suscipit";
                }};
                request = new SubmitProvisioningConfigRequest() {{
                    email = "Eli96@yahoo.com";
                    provisioningConfig = new ProvisioningConfig() {{
                        instances = new org.openapis.openapi.models.shared.InstanceConfig[]{{
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "4785 Kenyon Hollow";
                                    existingNetworkId = "recusandae";
                                    networkId = "temporibus";
                                }};
                                hyperthreading = false;
                                id = "ab";
                                instanceType = "quis";
                                location = "veritatis";
                                osImage = "deserunt";
                                privateNetwork = new NetworkAddress() {{
                                    address = "38971 Strosin Wall";
                                    existingNetworkId = "molestiae";
                                    networkId = "quod";
                                }};
                                userNote = "quod";
                            }}),
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "5761 Nikolaus Orchard";
                                    existingNetworkId = "fugit";
                                    networkId = "deleniti";
                                }};
                                hyperthreading = false;
                                id = "hic";
                                instanceType = "optio";
                                location = "totam";
                                osImage = "beatae";
                                privateNetwork = new NetworkAddress() {{
                                    address = "4217 Klocko Extension";
                                    existingNetworkId = "excepturi";
                                    networkId = "aspernatur";
                                }};
                                userNote = "perferendis";
                            }}),
                        }};
                        networks = new org.openapis.openapi.models.shared.NetworkConfig[]{{
                            add(new NetworkConfig() {{
                                bandwidth = "BW_5_GBPS";
                                cidr = "sed";
                                id = "iste";
                                location = "dolor";
                                serviceCidr = "HIGH_27";
                                type = "CLIENT";
                                userNote = "hic";
                                vlanAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                    add(new VlanAttachment() {{
                                        id = "fuga";
                                        pairingKey = "in";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "corporis";
                                        pairingKey = "iste";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "iure";
                                        pairingKey = "saepe";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "quidem";
                                        pairingKey = "architecto";
                                    }}),
                                }};
                            }}),
                            add(new NetworkConfig() {{
                                bandwidth = "BANDWIDTH_UNSPECIFIED";
                                cidr = "reiciendis";
                                id = "est";
                                location = "mollitia";
                                serviceCidr = "HIGH_27";
                                type = "TYPE_UNSPECIFIED";
                                userNote = "dolorem";
                                vlanAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                    add(new VlanAttachment() {{
                                        id = "explicabo";
                                        pairingKey = "nobis";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "enim";
                                        pairingKey = "omnis";
                                    }}),
                                }};
                            }}),
                        }};
                        ticketId = "nemo";
                        volumes = new org.openapis.openapi.models.shared.VolumeConfig[]{{
                            add(new VolumeConfig() {{
                                id = "excepturi";
                                location = "accusantium";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 634274;
                                        sizeGb = 988374;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 958950;
                                        sizeGb = 102044;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("dolorem"),
                                    add("culpa"),
                                    add("consequuntur"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "mollitia";
                                        machineId = "occaecati";
                                        networkId = "numquam";
                                        noRootSquash = false;
                                        permissions = "READ_ONLY";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "quam";
                                        machineId = "molestiae";
                                        networkId = "velit";
                                        noRootSquash = false;
                                        permissions = "READ_ONLY";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "quia";
                                        machineId = "quis";
                                        networkId = "vitae";
                                        noRootSquash = false;
                                        permissions = "READ_WRITE";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "animi";
                                        machineId = "enim";
                                        networkId = "odit";
                                        noRootSquash = false;
                                        permissions = "READ_WRITE";
                                    }}),
                                }};
                                protocol = "PROTOCOL_UNSPECIFIED";
                                sizeGb = 949572;
                                snapshotsEnabled = false;
                                type = "FLASH";
                                userNote = "id";
                            }}),
                            add(new VolumeConfig() {{
                                id = "possimus";
                                location = "aut";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 622846;
                                        sizeGb = 837945;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("quasi"),
                                    add("reiciendis"),
                                    add("voluptatibus"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "nihil";
                                        machineId = "praesentium";
                                        networkId = "voluptatibus";
                                        noRootSquash = false;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "omnis";
                                        machineId = "voluptate";
                                        networkId = "cum";
                                        noRootSquash = false;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "doloremque";
                                        machineId = "reprehenderit";
                                        networkId = "ut";
                                        noRootSquash = false;
                                        permissions = "READ_WRITE";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "dicta";
                                        machineId = "corporis";
                                        networkId = "dolore";
                                        noRootSquash = false;
                                        permissions = "READ_ONLY";
                                    }}),
                                }};
                                protocol = "PROTOCOL_UNSPECIFIED";
                                sizeGb = 688661;
                                snapshotsEnabled = false;
                                type = "TYPE_UNSPECIFIED";
                                userNote = "accusamus";
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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
