<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InstanceConfig;
import org.openapis.openapi.models.shared.LunRange;
import org.openapis.openapi.models.shared.NetworkAddress;
import org.openapis.openapi.models.shared.NetworkConfig;
import org.openapis.openapi.models.shared.NetworkConfigBandwidthEnum;
import org.openapis.openapi.models.shared.NetworkConfigServiceCidrEnum;
import org.openapis.openapi.models.shared.NetworkConfigTypeEnum;
import org.openapis.openapi.models.shared.NfsExport;
import org.openapis.openapi.models.shared.NfsExportPermissionsEnum;
import org.openapis.openapi.models.shared.ProvisioningConfig;
import org.openapis.openapi.models.shared.SubmitProvisioningConfigRequest;
import org.openapis.openapi.models.shared.VlanAttachment;
import org.openapis.openapi.models.shared.VolumeConfig;
import org.openapis.openapi.models.shared.VolumeConfigProtocolEnum;
import org.openapis.openapi.models.shared.VolumeConfigTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest req = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest("corrupti", "provident") {{
                dollarXgafv = XgafvEnum.TWO;
                submitProvisioningConfigRequest = new SubmitProvisioningConfigRequest() {{
                    email = "Leda_Stiedemann@hotmail.com";
                    provisioningConfig = new ProvisioningConfig() {{
                        instances = new org.openapis.openapi.models.shared.InstanceConfig[]{{
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "6342 Bednar Vista";
                                    existingNetworkId = "tempora";
                                    networkId = "suscipit";
                                }};
                                hyperthreading = false;
                                id = "7cc8796e-d151-4a05-9fc2-ddf7cc78ca1b";
                                instanceType = "officia";
                                location = "occaecati";
                                osImage = "fugit";
                                privateNetwork = new NetworkAddress() {{
                                    address = "9751 Jaren Ford";
                                    existingNetworkId = "qui";
                                    networkId = "impedit";
                                }};
                                userNote = "cum";
                            }}),
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "2510 Lia Crescent";
                                    existingNetworkId = "iste";
                                    networkId = "dolor";
                                }};
                                hyperthreading = false;
                                id = "96fea759-6eb1-40fa-aa23-52c5955907af";
                                instanceType = "sapiente";
                                location = "architecto";
                                osImage = "mollitia";
                                privateNetwork = new NetworkAddress() {{
                                    address = "61965 Harvey Landing";
                                    existingNetworkId = "molestiae";
                                    networkId = "velit";
                                }};
                                userNote = "error";
                            }}),
                        }};
                        networks = new org.openapis.openapi.models.shared.NetworkConfig[]{{
                            add(new NetworkConfig() {{
                                bandwidth = NetworkConfigBandwidthEnum.BW1_GBPS;
                                cidr = "vitae";
                                id = "aa52c3f5-ad01-49da-9ffe-78f097b0074f";
                                location = "dicta";
                                serviceCidr = NetworkConfigServiceCidrEnum.DISABLED;
                                type = NetworkConfigTypeEnum.TYPE_UNSPECIFIED;
                                userNote = "iusto";
                                vlanAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                    add(new VlanAttachment() {{
                                        id = "b5e6e13b-99d4-488e-9e91-e450ad2abd44";
                                        pairingKey = "qui";
                                    }}),
                                }};
                            }}),
                        }};
                        ticketId = "aliquid";
                        volumes = new org.openapis.openapi.models.shared.VolumeConfig[]{{
                            add(new VolumeConfig() {{
                                id = "802d502a-94bb-44f6-bc96-9e9a3efa77df";
                                location = "rerum";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 297437;
                                        sizeGb = 767024;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("ea"),
                                    add("aliquid"),
                                    add("laborum"),
                                    add("accusamus"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "occaecati";
                                        machineId = "enim";
                                        networkId = "accusamus";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_WRITE;
                                    }}),
                                }};
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_NFS;
                                sizeGb = 588465;
                                snapshotsEnabled = false;
                                type = VolumeConfigTypeEnum.DISK;
                                userNote = "id";
                            }}),
                            add(new VolumeConfig() {{
                                id = "88f3a669-9707-44ba-8469-b6e214195989";
                                location = "accusantium";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 968962;
                                        sizeGb = 652103;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 320997;
                                        sizeGb = 431418;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 221262;
                                        sizeGb = 896547;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("nemo"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "iure";
                                        machineId = "doloribus";
                                        networkId = "debitis";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                }};
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_NFS;
                                sizeGb = 537023;
                                snapshotsEnabled = false;
                                type = VolumeConfigTypeEnum.DISK;
                                userNote = "in";
                            }}),
                            add(new VolumeConfig() {{
                                id = "11e5b7fd-2ed0-4289-a1cd-dc692601fb57";
                                location = "autem";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 50588;
                                        sizeGb = 866383;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 365496;
                                        sizeGb = 975522;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 16627;
                                        sizeGb = 855804;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("aut"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "corporis";
                                        machineId = "hic";
                                        networkId = "libero";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_WRITE;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "dolores";
                                        machineId = "quis";
                                        networkId = "totam";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_ONLY;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "eaque";
                                        machineId = "quis";
                                        networkId = "nesciunt";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "perferendis";
                                        machineId = "dolores";
                                        networkId = "minus";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_ONLY;
                                    }}),
                                }};
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_UNSPECIFIED;
                                sizeGb = 874573;
                                snapshotsEnabled = false;
                                type = VolumeConfigTypeEnum.FLASH;
                                userNote = "hic";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "facilis";
                fields = "perspiciatis";
                key = "voluptatem";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "blanditiis";
                uploadProtocol = "error";
            }};            

            BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse res = sdk.projects.baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req, new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity("eaque", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.provisioningConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->