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
                    location = "sit";
                    project = "voluptas";
                }};
                queryParams = new BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "expedita";
                    alt = "proto";
                    callback = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    uploadType = "rerum";
                    uploadProtocol = "dicta";
                }};
                request = new SubmitProvisioningConfigRequest() {{
                    email = "debitis";
                    provisioningConfig = new ProvisioningConfig() {{
                        instances = new openapisdk.models.shared.InstanceConfig[]() {{
                            add(new InstanceConfig() {{
                                clientNetwork = new NetworkAddress() {{
                                    address = "et";
                                    existingNetworkId = "ut";
                                    networkId = "dolorem";
                                }};
                                hyperthreading = false;
                                id = "voluptate";
                                instanceType = "iste";
                                location = "vitae";
                                osImage = "totam";
                                privateNetwork = new NetworkAddress() {{
                                    address = "dolores";
                                    existingNetworkId = "illum";
                                    networkId = "debitis";
                                }};
                                userNote = "vel";
                            }}),
                        }};
                        networks = new openapisdk.models.shared.NetworkConfig[]() {{
                            add(new NetworkConfig() {{
                                bandwidth = "BW_1_GBPS";
                                cidr = "id";
                                id = "aspernatur";
                                location = "accusantium";
                                serviceCidr = "SERVICE_CIDR_UNSPECIFIED";
                                type = "CLIENT";
                                userNote = "quis";
                                vlanAttachments = new openapisdk.models.shared.VlanAttachment[]() {{
                                    add(new VlanAttachment() {{
                                        id = "aut";
                                        pairingKey = "odit";
                                    }}),
                                    add(new VlanAttachment() {{
                                        id = "non";
                                        pairingKey = "voluptas";
                                    }}),
                                }};
                            }}),
                        }};
                        ticketId = "omnis";
                        volumes = new openapisdk.models.shared.VolumeConfig[]() {{
                            add(new VolumeConfig() {{
                                id = "illo";
                                location = "sed";
                                lunRanges = new openapisdk.models.shared.LunRange[]() {{
                                    add(new LunRange() {{
                                        quantity = 771642788862502430;
                                        sizeGb = 8514850266767180993;
                                    }}),
                                    add(new LunRange() {{
                                        quantity = 8683452355129068124;
                                        sizeGb = 4345851588384648695;
                                    }}),
                                }};
                                machineIds = new String[]() {{
                                    add("recusandae"),
                                }};
                                nfsExports = new openapisdk.models.shared.NfsExport[]() {{
                                    add(new NfsExport() {{
                                        allowDev = false;
                                        allowSuid = true;
                                        cidr = "modi";
                                        machineId = "sint";
                                        networkId = "inventore";
                                        noRootSquash = true;
                                        permissions = "READ_WRITE";
                                    }}),
                                    add(new NfsExport() {{
                                        allowDev = true;
                                        allowSuid = false;
                                        cidr = "tempore";
                                        machineId = "maiores";
                                        networkId = "incidunt";
                                        noRootSquash = false;
                                        permissions = "READ_WRITE";
                                    }}),
                                }};
                                protocol = "PROTOCOL_FC";
                                sizeGb = 2671030200101705776;
                                snapshotsEnabled = false;
                                type = "FLASH";
                                userNote = "ipsum";
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