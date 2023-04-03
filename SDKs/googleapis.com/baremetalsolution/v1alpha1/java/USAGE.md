<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest req = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest() {{
                dollarXgafv = "2";
                submitProvisioningConfigRequest = new SubmitProvisioningConfigRequest() {{
                    email = "Micheal_Sporer@yahoo.com";
                    provisioningConfig = new ProvisioningConfig() {{
                        instances = new org.openapis.openapi.models.shared.InstanceConfig[]{{
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "466 Hunter Fort";
                                    existingNetworkId = "debitis";
                                    networkId = "ipsa";
                                }};
                                hyperthreading = false;
                                id = "delectus";
                                instanceType = "tempora";
                                location = "suscipit";
                                osImage = "molestiae";
                                privateNetwork = new NetworkAddress() {{
                                    address = "854 Huel Via";
                                    existingNetworkId = "temporibus";
                                    networkId = "ab";
                                }};
                                userNote = "quis";
                            }}),
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "60389 Connelly Trace";
                                    existingNetworkId = "at";
                                    networkId = "maiores";
                                }};
                                hyperthreading = false;
                                id = "molestiae";
                                instanceType = "quod";
                                location = "quod";
                                osImage = "esse";
                                privateNetwork = new NetworkAddress() {{
                                    address = "7617 McCullough Coves";
                                    existingNetworkId = "deleniti";
                                    networkId = "hic";
                                }};
                                userNote = "optio";
                            }}),
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "1442 Ona River";
                                    existingNetworkId = "esse";
                                    networkId = "ipsum";
                                }};
                                hyperthreading = false;
                                id = "excepturi";
                                instanceType = "aspernatur";
                                location = "perferendis";
                                osImage = "ad";
                                privateNetwork = new NetworkAddress() {{
                                    address = "1626 Tyra Union";
                                    existingNetworkId = "fuga";
                                    networkId = "in";
                                }};
                                userNote = "corporis";
                            }}),
                        }};
                        networks = new org.openapis.openapi.models.shared.NetworkConfig[]{{
                            add(new NetworkConfig() {{
                                bandwidth = "BW_2_GBPS";
                                cidr = "saepe";
                                id = "quidem";
                                location = "architecto";
                                serviceCidr = "SERVICE_CIDR_UNSPECIFIED";
                                type = "PRIVATE";
                                userNote = "est";
                                vlanAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                    add(new VlanAttachment() {{
                                        id = "laborum";
                                        pairingKey = "dolores";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "dolorem";
                                        pairingKey = "corporis";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "explicabo";
                                        pairingKey = "nobis";
                                    }}),
                                }};
                            }}),
                            add(new NetworkConfig() {{
                                bandwidth = "BW_1_GBPS";
                                cidr = "omnis";
                                id = "nemo";
                                location = "minima";
                                serviceCidr = "HIGH_26";
                                type = "TYPE_UNSPECIFIED";
                                userNote = "iure";
                                vlanAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                    add(new VlanAttachment() {{
                                        id = "doloribus";
                                        pairingKey = "sapiente";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "architecto";
                                        pairingKey = "mollitia";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "dolorem";
                                        pairingKey = "culpa";
                                    }}),
                                }};
                            }}),
                            add(new NetworkConfig() {{
                                bandwidth = "BANDWIDTH_UNSPECIFIED";
                                cidr = "repellat";
                                id = "mollitia";
                                location = "occaecati";
                                serviceCidr = "DISABLED";
                                type = "CLIENT";
                                userNote = "quam";
                                vlanAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                    add(new VlanAttachment() {{
                                        id = "velit";
                                        pairingKey = "error";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "quia";
                                        pairingKey = "quis";
                                    }}),
                                }};
                            }}),
                        }};
                        ticketId = "vitae";
                        volumes = new org.openapis.openapi.models.shared.VolumeConfig[]{{
                            add(new VolumeConfig() {{
                                id = "animi";
                                location = "enim";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 778346;
                                        sizeGb = 196582;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("ipsam"),
                                    add("id"),
                                    add("possimus"),
                                    add("aut"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "error";
                                        machineId = "temporibus";
                                        networkId = "laborum";
                                        noRootSquash = false;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                }};
                                protocol = "PROTOCOL_NFS";
                                sizeGb = 976460;
                                snapshotsEnabled = false;
                                type = "DISK";
                                userNote = "nihil";
                            }}),
                            add(new VolumeConfig() {{
                                id = "praesentium";
                                location = "voluptatibus";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 604846;
                                        sizeGb = 451159;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("perferendis"),
                                    add("doloremque"),
                                    add("reprehenderit"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "maiores";
                                        machineId = "dicta";
                                        networkId = "corporis";
                                        noRootSquash = false;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "iusto";
                                        machineId = "dicta";
                                        networkId = "harum";
                                        noRootSquash = false;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                }};
                                protocol = "PROTOCOL_NFS";
                                sizeGb = 414263;
                                snapshotsEnabled = false;
                                type = "DISK";
                                userNote = "quae";
                            }}),
                            add(new VolumeConfig() {{
                                id = "ipsum";
                                location = "quidem";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 566602;
                                        sizeGb = 865103;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 265389;
                                        sizeGb = 508969;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 523248;
                                        sizeGb = 916723;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("repudiandae"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "veritatis";
                                        machineId = "itaque";
                                        networkId = "incidunt";
                                        noRootSquash = false;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "consequatur";
                                        machineId = "est";
                                        networkId = "quibusdam";
                                        noRootSquash = false;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "deserunt";
                                        machineId = "distinctio";
                                        networkId = "quibusdam";
                                        noRootSquash = false;
                                        permissions = "PERMISSIONS_UNSPECIFIED";
                                    }}),
                                }};
                                protocol = "PROTOCOL_UNSPECIFIED";
                                sizeGb = 183191;
                                snapshotsEnabled = false;
                                type = "FLASH";
                                userNote = "cupiditate";
                            }}),
                        }};
                    }};
                }};
                accessToken = "quos";
                alt = "json";
                callback = "magni";
                fields = "assumenda";
                key = "ipsam";
                location = "alias";
                oauthToken = "fugit";
                prettyPrint = false;
                project = "dolorum";
                quotaUser = "excepturi";
                uploadType = "tempora";
                uploadProtocol = "facilis";
            }}            

            BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse res = sdk.projects.baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req, new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.provisioningConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->