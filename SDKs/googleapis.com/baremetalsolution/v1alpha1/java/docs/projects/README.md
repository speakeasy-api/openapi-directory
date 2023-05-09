# projects

### Available Operations

* [baremetalsolutionProjectsLocationsSubmitProvisioningConfig](#baremetalsolutionprojectslocationssubmitprovisioningconfig) - Submit a provisiong configuration for a given project.
* [baremetalsolutionProjectsProvisioningQuotasList](#baremetalsolutionprojectsprovisioningquotaslist) - List the budget details to provision resources on a given project.

## baremetalsolutionProjectsLocationsSubmitProvisioningConfig

Submit a provisiong configuration for a given project.

### Example Usage

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

            BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest req = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest("rerum", "adipisci") {{
                dollarXgafv = XgafvEnum.TWO;
                submitProvisioningConfigRequest = new SubmitProvisioningConfigRequest() {{
                    email = "Dolly_Morar86@hotmail.com";
                    provisioningConfig = new ProvisioningConfig() {{
                        instances = new org.openapis.openapi.models.shared.InstanceConfig[]{{
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "793 Jacobi Expressway";
                                    existingNetworkId = "dolorem";
                                    networkId = "dolor";
                                }};
                                hyperthreading = false;
                                id = "23f9b77f-3a41-4006-b4eb-f69280d1ba77";
                                instanceType = "dolorum";
                                location = "deleniti";
                                osImage = "omnis";
                                privateNetwork = new NetworkAddress() {{
                                    address = "794 Jacky Plaza";
                                    existingNetworkId = "saepe";
                                    networkId = "eius";
                                }};
                                userNote = "aspernatur";
                            }}),
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "27839 Luna Oval";
                                    existingNetworkId = "minima";
                                    networkId = "repellendus";
                                }};
                                hyperthreading = false;
                                id = "8a0d446c-e2af-47a7-bcf3-be453f870b32";
                                instanceType = "vel";
                                location = "libero";
                                osImage = "voluptas";
                                privateNetwork = new NetworkAddress() {{
                                    address = "4221 Schoen Throughway";
                                    existingNetworkId = "soluta";
                                    networkId = "dicta";
                                }};
                                userNote = "laborum";
                            }}),
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "2117 Hyatt Landing";
                                    existingNetworkId = "molestias";
                                    networkId = "temporibus";
                                }};
                                hyperthreading = false;
                                id = "2322715b-f0cb-4b1e-b1b8-b90f3443a110";
                                instanceType = "quas";
                                location = "itaque";
                                osImage = "consequatur";
                                privateNetwork = new NetworkAddress() {{
                                    address = "879 Mckayla Oval";
                                    existingNetworkId = "qui";
                                    networkId = "quae";
                                }};
                                userNote = "laudantium";
                            }}),
                        }};
                        networks = new org.openapis.openapi.models.shared.NetworkConfig[]{{
                            add(new NetworkConfig() {{
                                bandwidth = NetworkConfigBandwidthEnum.BW2_GBPS;
                                cidr = "voluptatibus";
                                id = "ce953f73-ef7f-4bc7-abd7-4dd39c0f5d2c";
                                location = "maiores";
                                serviceCidr = NetworkConfigServiceCidrEnum.HIGH28;
                                type = NetworkConfigTypeEnum.CLIENT;
                                userNote = "eligendi";
                                vlanAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                    add(new VlanAttachment() {{
                                        id = "0a45626d-4368-413f-96d9-f5fce6c55614";
                                        pairingKey = "ea";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "c3e250fb-008c-442e-941a-ac366c8dd6b1";
                                        pairingKey = "tempora";
                                    }}),
                                }};
                            }}),
                            add(new NetworkConfig() {{
                                bandwidth = NetworkConfigBandwidthEnum.BW1_GBPS;
                                cidr = "explicabo";
                                id = "90747477-8a7b-4d46-ad28-c10ab3cdca42";
                                location = "voluptas";
                                serviceCidr = NetworkConfigServiceCidrEnum.SERVICE_CIDR_UNSPECIFIED;
                                type = NetworkConfigTypeEnum.CLIENT;
                                userNote = "consequatur";
                                vlanAttachments = new org.openapis.openapi.models.shared.VlanAttachment[]{{
                                    add(new VlanAttachment() {{
                                        id = "e523c7e0-bc71-478e-8796-f2a70c688282";
                                        pairingKey = "fuga";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "a482562f-222e-4981-bee1-7cbe61e6b7b9";
                                        pairingKey = "minima";
                                    }}),
                                }};
                            }}),
                        }};
                        ticketId = "distinctio";
                        volumes = new org.openapis.openapi.models.shared.VolumeConfig[]{{
                            add(new VolumeConfig() {{
                                id = "0ab3c20c-4f37-489f-9871-f99dd2efd121";
                                location = "similique";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 398434;
                                        sizeGb = 949298;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 62713;
                                        sizeGb = 936747;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 424032;
                                        sizeGb = 447378;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("libero"),
                                    add("illum"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "accusantium";
                                        machineId = "aliquam";
                                        networkId = "sapiente";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "ullam";
                                        machineId = "reprehenderit";
                                        networkId = "ullam";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_ONLY;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "aut";
                                        machineId = "voluptatum";
                                        networkId = "qui";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_WRITE;
                                    }}),
                                }};
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_FC;
                                sizeGb = 536275;
                                snapshotsEnabled = false;
                                type = VolumeConfigTypeEnum.DISK;
                                userNote = "dolorum";
                            }}),
                            add(new VolumeConfig() {{
                                id = "19f1d170-5133-49d0-8086-a1840394c260";
                                location = "dignissimos";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 981640;
                                        sizeGb = 618480;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("voluptatibus"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "asperiores";
                                        machineId = "aperiam";
                                        networkId = "ea";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "consequuntur";
                                        machineId = "repellendus";
                                        networkId = "officia";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_WRITE;
                                    }}),
                                }};
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_FC;
                                sizeGb = 640024;
                                snapshotsEnabled = false;
                                type = VolumeConfigTypeEnum.DISK;
                                userNote = "nemo";
                            }}),
                            add(new VolumeConfig() {{
                                id = "15cc413a-a63a-4ae8-9678-64dbb675fd5e";
                                location = "aliquid";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 738683;
                                        sizeGb = 232627;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("exercitationem"),
                                    add("earum"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "numquam";
                                        machineId = "doloribus";
                                        networkId = "suscipit";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_WRITE;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "quidem";
                                        machineId = "saepe";
                                        networkId = "necessitatibus";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "sunt";
                                        machineId = "asperiores";
                                        networkId = "adipisci";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "amet";
                                        machineId = "beatae";
                                        networkId = "dignissimos";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_WRITE;
                                    }}),
                                }};
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_NFS;
                                sizeGb = 233420;
                                snapshotsEnabled = false;
                                type = VolumeConfigTypeEnum.FLASH;
                                userNote = "harum";
                            }}),
                            add(new VolumeConfig() {{
                                id = "60eb1ea4-2655-45ba-bc28-744ed53b88f3";
                                location = "culpa";
                                lunRanges = new org.openapis.openapi.models.shared.LunRange[]{{
                                    add(new LunRange() {{
                                        quantity = 867290;
                                        sizeGb = 519643;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 940210;
                                        sizeGb = 348783;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 750765;
                                        sizeGb = 24619;
                                    }}),
                                }};
                                machineIds = new String[]{{
                                    add("sed"),
                                    add("reiciendis"),
                                    add("explicabo"),
                                }};
                                nfsExports = new org.openapis.openapi.models.shared.NfsExport[]{{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "facilis";
                                        machineId = "voluptate";
                                        networkId = "expedita";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "iste";
                                        machineId = "dolore";
                                        networkId = "laborum";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "in";
                                        machineId = "commodi";
                                        networkId = "quidem";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.PERMISSIONS_UNSPECIFIED;
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = false;
                                        cidr = "voluptas";
                                        machineId = "unde";
                                        networkId = "architecto";
                                        noRootSquash = false;
                                        permissions = NfsExportPermissionsEnum.READ_ONLY;
                                    }}),
                                }};
                                protocol = VolumeConfigProtocolEnum.PROTOCOL_NFS;
                                sizeGb = 895386;
                                snapshotsEnabled = false;
                                type = VolumeConfigTypeEnum.TYPE_UNSPECIFIED;
                                userNote = "reiciendis";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "maiores";
                fields = "incidunt";
                key = "sed";
                oauthToken = "provident";
                prettyPrint = false;
                quotaUser = "eius";
                uploadType = "necessitatibus";
                uploadProtocol = "ipsum";
            }};            

            BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse res = sdk.projects.baremetalsolutionProjectsLocationsSubmitProvisioningConfig(req, new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity("ea", "occaecati") {{
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

## baremetalsolutionProjectsProvisioningQuotasList

List the budget details to provision resources on a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsProvisioningQuotasListRequest;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsProvisioningQuotasListResponse;
import org.openapis.openapi.models.operations.BaremetalsolutionProjectsProvisioningQuotasListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BaremetalsolutionProjectsProvisioningQuotasListRequest req = new BaremetalsolutionProjectsProvisioningQuotasListRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "tempora";
                alt = AltEnum.JSON;
                callback = "voluptate";
                fields = "reiciendis";
                key = "ex";
                oauthToken = "sit";
                pageSize = 248413L;
                pageToken = "officiis";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "facilis";
                uploadProtocol = "quaerat";
            }};            

            BaremetalsolutionProjectsProvisioningQuotasListResponse res = sdk.projects.baremetalsolutionProjectsProvisioningQuotasList(req, new BaremetalsolutionProjectsProvisioningQuotasListSecurity("incidunt", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listProvisioningQuotasResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
