# prepare

### Available Operations

* [createOrganizationInventoryOnboardingCloudMonitoringPrepare](#createorganizationinventoryonboardingcloudmonitoringprepare) - Initiates or updates an import session

## createOrganizationInventoryOnboardingCloudMonitoringPrepare

Initiates or updates an import session. An import ID will be generated and used when you are ready to commit the import.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup;
import org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    merakiApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest req = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest(                new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBody(                new org.openapis.openapi.models.operations.CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices[]{{
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices("voluptas") {{
                                                    sudi = "voluptatum";
                                                    tunnel = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel() {{
                                                        certificateName = "quis";
                                                        localInterface = 520290L;
                                                        loopbackNumber = 532239L;
                                                        name = "Douglas Lehner";
                                                    }};
                                                    user = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser() {{
                                                        username = "Shanel65";
                                                    }};
                                                    vty = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty() {{
                                                        accessList = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList() {{
                                                            vtyIn = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn() {{
                                                                name = "Sally Huel";
                                                            }};
                                                            vtyOut = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut() {{
                                                                name = "Leroy Kilback";
                                                            }};
                                                        }};
                                                        authentication = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup() {{
                                                                name = "Pete Hartmann";
                                                            }};
                                                        }};
                                                        authorization = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup() {{
                                                                name = "Marty Carroll";
                                                            }};
                                                        }};
                                                        endLineNumber = 526868L;
                                                        rotaryNumber = 859453L;
                                                        startLineNumber = 521909L;
                                                    }};
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices("similique") {{
                                                    sudi = "hic";
                                                    tunnel = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel() {{
                                                        certificateName = "praesentium";
                                                        localInterface = 881735L;
                                                        loopbackNumber = 990417L;
                                                        name = "Toby Heidenreich";
                                                    }};
                                                    user = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser() {{
                                                        username = "Josefa62";
                                                    }};
                                                    vty = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty() {{
                                                        accessList = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList() {{
                                                            vtyIn = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn() {{
                                                                name = "Timothy Gulgowski";
                                                            }};
                                                            vtyOut = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut() {{
                                                                name = "Justin Jacobs";
                                                            }};
                                                        }};
                                                        authentication = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup() {{
                                                                name = "Julie Wolff";
                                                            }};
                                                        }};
                                                        authorization = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup() {{
                                                                name = "Preston Greenholt";
                                                            }};
                                                        }};
                                                        endLineNumber = 276704L;
                                                        rotaryNumber = 937958L;
                                                        startLineNumber = 575757L;
                                                    }};
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices("hic") {{
                                                    sudi = "porro";
                                                    tunnel = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel() {{
                                                        certificateName = "animi";
                                                        localInterface = 929496L;
                                                        loopbackNumber = 924696L;
                                                        name = "Ms. Jimmie Kuvalis";
                                                    }};
                                                    user = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser() {{
                                                        username = "Nia.Welch21";
                                                    }};
                                                    vty = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty() {{
                                                        accessList = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList() {{
                                                            vtyIn = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn() {{
                                                                name = "Jackie Lemke";
                                                            }};
                                                            vtyOut = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut() {{
                                                                name = "Gilberto Abernathy";
                                                            }};
                                                        }};
                                                        authentication = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup() {{
                                                                name = "Mercedes Abbott DDS";
                                                            }};
                                                        }};
                                                        authorization = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup() {{
                                                                name = "Tonya Tillman";
                                                            }};
                                                        }};
                                                        endLineNumber = 183171L;
                                                        rotaryNumber = 135020L;
                                                        startLineNumber = 737812L;
                                                    }};
                                                }}),
                                                add(new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevices("accusamus") {{
                                                    sudi = "voluptatem";
                                                    tunnel = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesTunnel() {{
                                                        certificateName = "fuga";
                                                        localInterface = 625265L;
                                                        loopbackNumber = 416274L;
                                                        name = "Cesar Beahan";
                                                    }};
                                                    user = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesUser() {{
                                                        username = "Charley_Dach";
                                                    }};
                                                    vty = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVty() {{
                                                        accessList = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessList() {{
                                                            vtyIn = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyIn() {{
                                                                name = "Rafael Wuckert";
                                                            }};
                                                            vtyOut = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAccessListVtyOut() {{
                                                                name = "Tamara Abbott";
                                                            }};
                                                        }};
                                                        authentication = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthentication() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthenticationGroup() {{
                                                                name = "Kyle Larkin";
                                                            }};
                                                        }};
                                                        authorization = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorization() {{
                                                            group = new CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestBodyDevicesVtyAuthorizationGroup() {{
                                                                name = "Lena Dare";
                                                            }};
                                                        }};
                                                        endLineNumber = 442837L;
                                                        rotaryNumber = 87628L;
                                                        startLineNumber = 171475L;
                                                    }};
                                                }}),
                                            }});, "dolorem");            

            CreateOrganizationInventoryOnboardingCloudMonitoringPrepareResponse res = sdk.prepare.createOrganizationInventoryOnboardingCloudMonitoringPrepare(req);

            if (res.createOrganizationInventoryOnboardingCloudMonitoringPrepare201ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
