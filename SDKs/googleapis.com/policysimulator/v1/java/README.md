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

import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreatePathParams;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateRequest;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudPolicysimulatorV1ReplayInput;
import org.openapis.openapi.models.shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum;
import org.openapis.openapi.models.shared.GoogleCloudPolicysimulatorV1ReplayConfig;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicysimulatorProjectsLocationsReplaysCreateRequest req = new PolicysimulatorProjectsLocationsReplaysCreateRequest() {{
                security = new PolicysimulatorProjectsLocationsReplaysCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new PolicysimulatorProjectsLocationsReplaysCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new PolicysimulatorProjectsLocationsReplaysCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudPolicysimulatorV1ReplayInput() {{
                    config = new GoogleCloudPolicysimulatorV1ReplayConfig() {{
                        logSource = "LOG_SOURCE_UNSPECIFIED";
                        policyOverlay = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleIamV1Policy>() {{
                            put("magnam", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("tempora"),
                                                    add("suscipit"),
                                                    add("molestiae"),
                                                    add("minus"),
                                                }};
                                                logType = "DATA_READ";
                                            }}),
                                        }};
                                        service = "voluptatum";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("nisi"),
                                                    add("recusandae"),
                                                    add("temporibus"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("veritatis"),
                                                    add("deserunt"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                        }};
                                        service = "ipsam";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("quo"),
                                                    add("odit"),
                                                    add("at"),
                                                    add("at"),
                                                }};
                                                logType = "DATA_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("quod"),
                                                    add("quod"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("porro"),
                                                    add("dolorum"),
                                                    add("dicta"),
                                                }};
                                                logType = "DATA_WRITE";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("occaecati"),
                                                    add("fugit"),
                                                    add("deleniti"),
                                                }};
                                                logType = "DATA_READ";
                                            }}),
                                        }};
                                        service = "optio";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("commodi"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("qui"),
                                                    add("impedit"),
                                                }};
                                                logType = "DATA_WRITE";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("ipsum"),
                                                    add("excepturi"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                        }};
                                        service = "perferendis";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "natus";
                                            expression = "sed";
                                            location = "iste";
                                            title = "Mrs.";
                                        }};
                                        members = new String[]{{
                                            add("laboriosam"),
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                        role = "fuga";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "in";
                                            expression = "corporis";
                                            location = "iste";
                                            title = "Ms.";
                                        }};
                                        members = new String[]{{
                                            add("quidem"),
                                            add("architecto"),
                                            add("ipsa"),
                                            add("reiciendis"),
                                        }};
                                        role = "est";
                                    }}),
                                }};
                                etag = "mollitia";
                                version = 670638;
                            }});
                            put("dolores", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("nobis"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("nemo"),
                                                    add("minima"),
                                                    add("excepturi"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                        }};
                                        service = "iure";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "doloribus";
                                            expression = "sapiente";
                                            location = "architecto";
                                            title = "Miss";
                                        }};
                                        members = new String[]{{
                                            add("culpa"),
                                        }};
                                        role = "consequuntur";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "repellat";
                                            expression = "mollitia";
                                            location = "occaecati";
                                            title = "Mrs.";
                                        }};
                                        members = new String[]{{
                                            add("quam"),
                                            add("molestiae"),
                                        }};
                                        role = "velit";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "error";
                                            expression = "quia";
                                            location = "quis";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("animi"),
                                            add("enim"),
                                            add("odit"),
                                        }};
                                        role = "quo";
                                    }}),
                                }};
                                etag = "sequi";
                                version = 949572;
                            }});
                        }};
                    }};
                    resultsSummary = new GoogleCloudPolicysimulatorV1ReplayResultsSummary() {{
                        differenceCount = 368725;
                        errorCount = 662527;
                        logCount = 820994;
                        newestDate = new GoogleTypeDate() {{
                            day = 13571;
                            month = 97101;
                            year = 622846;
                        }};
                        oldestDate = new GoogleTypeDate() {{
                            day = 837945;
                            month = 673660;
                            year = 96098;
                        }};
                        unchangedCount = 971945;
                    }};
                }};
            }};            

            PolicysimulatorProjectsLocationsReplaysCreateResponse res = sdk.projects.policysimulatorProjectsLocationsReplaysCreate(req);

            if (res.googleLongrunningOperation.isPresent()) {
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

* `policysimulatorProjectsLocationsReplaysCreate` - Creates and starts a Replay using the given ReplayConfig.
* `policysimulatorProjectsLocationsReplaysOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `policysimulatorProjectsLocationsReplaysResultsList` - Lists the results of running a Replay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
