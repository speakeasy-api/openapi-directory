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
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateRequest;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateResponse;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudPolicysimulatorV1ReplayConfig;
import org.openapis.openapi.models.shared.GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum;
import org.openapis.openapi.models.shared.GoogleCloudPolicysimulatorV1ReplayInput;
import org.openapis.openapi.models.shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicysimulatorProjectsLocationsReplaysCreateRequest req = new PolicysimulatorProjectsLocationsReplaysCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPolicysimulatorV1ReplayInput = new GoogleCloudPolicysimulatorV1ReplayInput() {{
                    config = new GoogleCloudPolicysimulatorV1ReplayConfig() {{
                        logSource = GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum.RECENT_ACCESSES;
                        policyOverlay = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleIamV1Policy>() {{
                            put("unde", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("vel"),
                                                    add("error"),
                                                    add("deserunt"),
                                                    add("suscipit"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("debitis"),
                                                    add("ipsa"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("suscipit"),
                                                    add("molestiae"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                        }};
                                        service = "placeat";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("excepturi"),
                                                    add("nisi"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("ab"),
                                                    add("quis"),
                                                    add("veritatis"),
                                                    add("deserunt"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("repellendus"),
                                                    add("sapiente"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                        }};
                                        service = "odit";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("maiores"),
                                                    add("molestiae"),
                                                    add("quod"),
                                                    add("quod"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("porro"),
                                                    add("dolorum"),
                                                    add("dicta"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("occaecati"),
                                                    add("fugit"),
                                                    add("deleniti"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("totam"),
                                                    add("beatae"),
                                                    add("commodi"),
                                                    add("molestiae"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                        }};
                                        service = "qui";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("esse"),
                                                    add("ipsum"),
                                                    add("excepturi"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("ad"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("iste"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("laboriosam"),
                                                    add("hic"),
                                                    add("saepe"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                        }};
                                        service = "in";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "iste";
                                            expression = "iure";
                                            location = "saepe";
                                            title = "Miss";
                                        }};
                                        members = new String[]{{
                                            add("ipsa"),
                                        }};
                                        role = "reiciendis";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "est";
                                            expression = "mollitia";
                                            location = "laborum";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("corporis"),
                                        }};
                                        role = "explicabo";
                                    }}),
                                }};
                                etag = "nobis";
                                version = 315428;
                            }});
                            put("omnis", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("accusantium"),
                                                    add("iure"),
                                                    add("culpa"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("architecto"),
                                                    add("mollitia"),
                                                    add("dolorem"),
                                                    add("culpa"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                        }};
                                        service = "repellat";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("numquam"),
                                                    add("commodi"),
                                                    add("quam"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("error"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("vitae"),
                                                    add("laborum"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                        }};
                                        service = "enim";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "quo";
                                            expression = "sequi";
                                            location = "tenetur";
                                            title = "Mrs.";
                                        }};
                                        members = new String[]{{
                                            add("possimus"),
                                            add("aut"),
                                            add("quasi"),
                                        }};
                                        role = "error";
                                    }}),
                                }};
                                etag = "temporibus";
                                version = 673660;
                            }});
                            put("quasi", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("nihil"),
                                                    add("praesentium"),
                                                    add("voluptatibus"),
                                                    add("ipsa"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("cum"),
                                                    add("perferendis"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("ut"),
                                                    add("maiores"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("dolore"),
                                                    add("iusto"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                        }};
                                        service = "harum";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("commodi"),
                                                    add("repudiandae"),
                                                    add("quae"),
                                                    add("ipsum"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("excepturi"),
                                                    add("pariatur"),
                                                    add("modi"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                        }};
                                        service = "rem";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("repudiandae"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("itaque"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("consequatur"),
                                                    add("est"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("deserunt"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                        }};
                                        service = "quibusdam";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("qui"),
                                                    add("aliquid"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("perferendis"),
                                                    add("magni"),
                                                    add("assumenda"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                        }};
                                        service = "alias";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "dolorum";
                                            expression = "excepturi";
                                            location = "tempora";
                                            title = "Miss";
                                        }};
                                        members = new String[]{{
                                            add("labore"),
                                            add("delectus"),
                                            add("eum"),
                                        }};
                                        role = "non";
                                    }}),
                                }};
                                etag = "eligendi";
                                version = 576157;
                            }});
                            put("aliquid", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("officia"),
                                                    add("dolor"),
                                                    add("debitis"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("in"),
                                                    add("in"),
                                                    add("illum"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("dicta"),
                                                    add("magnam"),
                                                    add("cumque"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("aliquid"),
                                                    add("laborum"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                        }};
                                        service = "non";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("accusamus"),
                                                    add("delectus"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("nam"),
                                                    add("id"),
                                                    add("blanditiis"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("amet"),
                                                    add("deserunt"),
                                                    add("nisi"),
                                                    add("vel"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                        }};
                                        service = "omnis";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("nihil"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("id"),
                                                    add("labore"),
                                                    add("labore"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                        }};
                                        service = "natus";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "eum";
                                            expression = "vero";
                                            location = "aspernatur";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("et"),
                                            add("excepturi"),
                                        }};
                                        role = "ullam";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "provident";
                                            expression = "quos";
                                            location = "sint";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("reiciendis"),
                                            add("mollitia"),
                                            add("ad"),
                                        }};
                                        role = "eum";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "dolor";
                                            expression = "necessitatibus";
                                            location = "odit";
                                            title = "Mrs.";
                                        }};
                                        members = new String[]{{
                                            add("iure"),
                                        }};
                                        role = "doloribus";
                                    }}),
                                }};
                                etag = "debitis";
                                version = 260341;
                            }});
                        }};
                    }};;
                    resultsSummary = new GoogleCloudPolicysimulatorV1ReplayResultsSummary() {{
                        differenceCount = 806194;
                        errorCount = 537023;
                        logCount = 703889;
                        newestDate = new GoogleTypeDate() {{
                            day = 447926;
                            month = 100226;
                            year = 99569;
                        }};;
                        oldestDate = new GoogleTypeDate() {{
                            day = 919483;
                            month = 352312;
                            year = 714242;
                        }};;
                        unchangedCount = 469249;
                    }};;
                }};;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "saepe";
                key = "pariatur";
                oauthToken = "accusantium";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "praesentium";
                uploadProtocol = "natus";
            }};            

            PolicysimulatorProjectsLocationsReplaysCreateResponse res = sdk.projects.policysimulatorProjectsLocationsReplaysCreate(req, new PolicysimulatorProjectsLocationsReplaysCreateSecurity("magni", "sunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [policysimulatorProjectsLocationsReplaysCreate](docs/projects/README.md#policysimulatorprojectslocationsreplayscreate) - Creates and starts a Replay using the given ReplayConfig.
* [policysimulatorProjectsLocationsReplaysOperationsList](docs/projects/README.md#policysimulatorprojectslocationsreplaysoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [policysimulatorProjectsLocationsReplaysResultsList](docs/projects/README.md#policysimulatorprojectslocationsreplaysresultslist) - Lists the results of running a Replay.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
