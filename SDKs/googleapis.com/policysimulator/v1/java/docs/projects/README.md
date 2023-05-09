# projects

### Available Operations

* [policysimulatorProjectsLocationsReplaysCreate](#policysimulatorprojectslocationsreplayscreate) - Creates and starts a Replay using the given ReplayConfig.
* [policysimulatorProjectsLocationsReplaysOperationsList](#policysimulatorprojectslocationsreplaysoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [policysimulatorProjectsLocationsReplaysResultsList](#policysimulatorprojectslocationsreplaysresultslist) - Lists the results of running a Replay.

## policysimulatorProjectsLocationsReplaysCreate

Creates and starts a Replay using the given ReplayConfig.

### Example Usage

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

            PolicysimulatorProjectsLocationsReplaysCreateRequest req = new PolicysimulatorProjectsLocationsReplaysCreateRequest("quo") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudPolicysimulatorV1ReplayInput = new GoogleCloudPolicysimulatorV1ReplayInput() {{
                    config = new GoogleCloudPolicysimulatorV1ReplayConfig() {{
                        logSource = GoogleCloudPolicysimulatorV1ReplayConfigLogSourceEnum.RECENT_ACCESSES;
                        policyOverlay = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleIamV1Policy>() {{
                            put("ea", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("accusantium"),
                                                    add("ab"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                        }};
                                        service = "quidem";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("autem"),
                                                    add("nam"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("nemo"),
                                                    add("voluptatibus"),
                                                    add("perferendis"),
                                                    add("fugiat"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                        }};
                                        service = "aut";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("hic"),
                                                    add("libero"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("quis"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("eaque"),
                                                    add("quis"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("perferendis"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                        }};
                                        service = "minus";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "dolor";
                                            expression = "vero";
                                            location = "nostrum";
                                            title = "Dr.";
                                        }};
                                        members = new String[]{{
                                            add("omnis"),
                                            add("facilis"),
                                            add("perspiciatis"),
                                            add("voluptatem"),
                                        }};
                                        role = "porro";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "consequuntur";
                                            expression = "blanditiis";
                                            location = "error";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("rerum"),
                                            add("adipisci"),
                                            add("asperiores"),
                                        }};
                                        role = "earum";
                                    }}),
                                }};
                                etag = "modi";
                                version = 613966;
                            }});
                            put("dolorum", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("nobis"),
                                                    add("libero"),
                                                    add("delectus"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("aliquid"),
                                                    add("dolorem"),
                                                    add("dolorem"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("ipsum"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("cum"),
                                                    add("voluptate"),
                                                    add("dignissimos"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                        }};
                                        service = "amet";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("veritatis"),
                                                    add("ipsa"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("odio"),
                                                    add("quaerat"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("voluptatibus"),
                                                    add("voluptas"),
                                                    add("natus"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                        }};
                                        service = "atque";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("ab"),
                                                    add("soluta"),
                                                    add("dolorum"),
                                                    add("iusto"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                        }};
                                        service = "dolorum";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "omnis";
                                            expression = "necessitatibus";
                                            location = "distinctio";
                                            title = "Dr.";
                                        }};
                                        members = new String[]{{
                                            add("ipsum"),
                                            add("voluptate"),
                                        }};
                                        role = "id";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "saepe";
                                            expression = "eius";
                                            location = "aspernatur";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("optio"),
                                        }};
                                        role = "accusamus";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "ad";
                                            expression = "saepe";
                                            location = "suscipit";
                                            title = "Miss";
                                        }};
                                        members = new String[]{{
                                            add("minima"),
                                            add("repellendus"),
                                            add("totam"),
                                        }};
                                        role = "similique";
                                    }}),
                                }};
                                etag = "alias";
                                version = 872651;
                            }});
                            put("quaerat", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("officiis"),
                                                    add("qui"),
                                                    add("dolorum"),
                                                    add("a"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("iusto"),
                                                    add("ipsum"),
                                                    add("quisquam"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                            }}),
                                        }};
                                        service = "amet";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("numquam"),
                                                    add("enim"),
                                                    add("dolorem"),
                                                    add("sapiente"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("sit"),
                                                    add("expedita"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("vel"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                        }};
                                        service = "voluptas";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "quam";
                                            expression = "ipsum";
                                            location = "incidunt";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("maxime"),
                                            add("pariatur"),
                                            add("soluta"),
                                        }};
                                        role = "dicta";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "laborum";
                                            expression = "totam";
                                            location = "incidunt";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("distinctio"),
                                        }};
                                        role = "facilis";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "aliquid";
                                            expression = "quam";
                                            location = "molestias";
                                            title = "Dr.";
                                        }};
                                        members = new String[]{{
                                            add("neque"),
                                        }};
                                        role = "fugit";
                                    }}),
                                }};
                                etag = "magni";
                                version = 488056;
                            }});
                            put("sunt", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("voluptatem"),
                                                    add("cumque"),
                                                    add("soluta"),
                                                    add("nobis"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("ipsum"),
                                                    add("veritatis"),
                                                    add("nobis"),
                                                    add("quos"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("aperiam"),
                                                    add("delectus"),
                                                    add("dolorem"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.ADMIN_READ;
                                            }}),
                                        }};
                                        service = "labore";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("architecto"),
                                                    add("quae"),
                                                    add("aut"),
                                                }};
                                                logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                            }}),
                                        }};
                                        service = "itaque";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "est";
                                            expression = "repellendus";
                                            location = "porro";
                                            title = "Dr.";
                                        }};
                                        members = new String[]{{
                                            add("facilis"),
                                            add("cupiditate"),
                                        }};
                                        role = "qui";
                                    }}),
                                }};
                                etag = "quae";
                                version = 512393;
                            }});
                        }};
                    }};;
                    resultsSummary = new GoogleCloudPolicysimulatorV1ReplayResultsSummary() {{
                        differenceCount = 485628;
                        errorCount = 580447;
                        logCount = 977496;
                        newestDate = new GoogleTypeDate() {{
                            day = 787542;
                            month = 876506;
                            year = 606476;
                        }};;
                        oldestDate = new GoogleTypeDate() {{
                            day = 338159;
                            month = 218403;
                            year = 961571;
                        }};;
                        unchangedCount = 455169;
                    }};;
                }};;
                accessToken = "consectetur";
                alt = AltEnum.PROTO;
                callback = "tenetur";
                fields = "dignissimos";
                key = "hic";
                oauthToken = "distinctio";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "odio";
                uploadProtocol = "similique";
            }};            

            PolicysimulatorProjectsLocationsReplaysCreateResponse res = sdk.projects.policysimulatorProjectsLocationsReplaysCreate(req, new PolicysimulatorProjectsLocationsReplaysCreateSecurity("facilis", "vero") {{
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

## policysimulatorProjectsLocationsReplaysOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysOperationsListRequest;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysOperationsListResponse;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicysimulatorProjectsLocationsReplaysOperationsListRequest req = new PolicysimulatorProjectsLocationsReplaysOperationsListRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "natus";
                filter = "impedit";
                key = "aut";
                oauthToken = "voluptatibus";
                pageSize = 347233L;
                pageToken = "nulla";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "porro";
                uploadProtocol = "maiores";
            }};            

            PolicysimulatorProjectsLocationsReplaysOperationsListResponse res = sdk.projects.policysimulatorProjectsLocationsReplaysOperationsList(req, new PolicysimulatorProjectsLocationsReplaysOperationsListSecurity("doloribus", "iusto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## policysimulatorProjectsLocationsReplaysResultsList

Lists the results of running a Replay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysResultsListRequest;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysResultsListResponse;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysResultsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicysimulatorProjectsLocationsReplaysResultsListRequest req = new PolicysimulatorProjectsLocationsReplaysResultsListRequest("eligendi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "tempora";
                fields = "ipsam";
                key = "ea";
                oauthToken = "aspernatur";
                pageSize = 428224L;
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "ratione";
                uploadProtocol = "ex";
            }};            

            PolicysimulatorProjectsLocationsReplaysResultsListResponse res = sdk.projects.policysimulatorProjectsLocationsReplaysResultsList(req, new PolicysimulatorProjectsLocationsReplaysResultsListSecurity("laudantium", "dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudPolicysimulatorV1ListReplayResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
