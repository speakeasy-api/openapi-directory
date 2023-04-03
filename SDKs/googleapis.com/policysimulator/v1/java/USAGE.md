<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateRequest;
import org.openapis.openapi.models.operations.PolicysimulatorProjectsLocationsReplaysCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PolicysimulatorProjectsLocationsReplaysCreateRequest req = new PolicysimulatorProjectsLocationsReplaysCreateRequest() {{
                dollarXgafv = "2";
                googleCloudPolicysimulatorV1ReplayInput = new GoogleCloudPolicysimulatorV1ReplayInput() {{
                    config = new GoogleCloudPolicysimulatorV1ReplayConfig() {{
                        logSource = "RECENT_ACCESSES";
                        policyOverlay = new java.util.HashMap<String, org.openapis.openapi.models.shared.GoogleIamV1Policy>() {{
                            put("quibusdam", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("illum"),
                                                    add("vel"),
                                                    add("error"),
                                                }};
                                                logType = "DATA_WRITE";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("iure"),
                                                    add("magnam"),
                                                }};
                                                logType = "DATA_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("delectus"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
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
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "beatae";
                                            expression = "commodi";
                                            location = "molestiae";
                                            title = "Mrs.";
                                        }};
                                        members = new String[]{{
                                            add("impedit"),
                                        }};
                                        role = "cum";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "esse";
                                            expression = "ipsum";
                                            location = "excepturi";
                                            title = "Mr.";
                                        }};
                                        members = new String[]{{
                                            add("ad"),
                                        }};
                                        role = "natus";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "sed";
                                            expression = "iste";
                                            location = "dolor";
                                            title = "Miss";
                                        }};
                                        members = new String[]{{
                                            add("hic"),
                                            add("saepe"),
                                        }};
                                        role = "fuga";
                                    }}),
                                }};
                                etag = "in";
                                version = 359508;
                            }});
                            put("iste", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("architecto"),
                                                    add("ipsa"),
                                                    add("reiciendis"),
                                                }};
                                                logType = "DATA_WRITE";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("laborum"),
                                                    add("dolores"),
                                                    add("dolorem"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
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
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("sapiente"),
                                                    add("architecto"),
                                                    add("mollitia"),
                                                    add("dolorem"),
                                                }};
                                                logType = "DATA_WRITE";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("repellat"),
                                                }};
                                                logType = "DATA_WRITE";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("numquam"),
                                                    add("commodi"),
                                                    add("quam"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
                                        }};
                                        service = "velit";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "quia";
                                            expression = "quis";
                                            location = "vitae";
                                            title = "Miss";
                                        }};
                                        members = new String[]{{
                                            add("enim"),
                                            add("odit"),
                                            add("quo"),
                                        }};
                                        role = "sequi";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "tenetur";
                                            expression = "ipsam";
                                            location = "id";
                                            title = "Dr.";
                                        }};
                                        members = new String[]{{
                                            add("quasi"),
                                        }};
                                        role = "error";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "temporibus";
                                            expression = "laborum";
                                            location = "quasi";
                                            title = "Dr.";
                                        }};
                                        members = new String[]{{
                                            add("vero"),
                                            add("nihil"),
                                            add("praesentium"),
                                            add("voluptatibus"),
                                        }};
                                        role = "ipsa";
                                    }}),
                                }};
                                etag = "omnis";
                                version = 451159;
                            }});
                            put("cum", new GoogleIamV1Policy() {{
                                auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]{{
                                                    add("ut"),
                                                    add("maiores"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                        }};
                                        service = "corporis";
                                    }}),
                                }};
                                bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "iusto";
                                            expression = "dicta";
                                            location = "harum";
                                            title = "Mrs.";
                                        }};
                                        members = new String[]{{
                                            add("commodi"),
                                            add("repudiandae"),
                                            add("quae"),
                                            add("ipsum"),
                                        }};
                                        role = "quidem";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "molestias";
                                            expression = "excepturi";
                                            location = "pariatur";
                                            title = "Mrs.";
                                        }};
                                        members = new String[]{{
                                            add("rem"),
                                            add("voluptates"),
                                            add("quasi"),
                                        }};
                                        role = "repudiandae";
                                    }}),
                                }};
                                etag = "sint";
                                version = 83112;
                            }});
                        }};
                    }};
                    resultsSummary = new GoogleCloudPolicysimulatorV1ReplayResultsSummary() {{
                        differenceCount = 929297;
                        errorCount = 277718;
                        logCount = 318569;
                        newestDate = new GoogleTypeDate() {{
                            day = 9356;
                            month = 667411;
                            year = 842342;
                        }};
                        oldestDate = new GoogleTypeDate() {{
                            day = 131797;
                            month = 647174;
                            year = 716327;
                        }};
                        unchangedCount = 841386;
                    }};
                }};
                accessToken = "labore";
                alt = "json";
                callback = "qui";
                fields = "aliquid";
                key = "cupiditate";
                oauthToken = "quos";
                parent = "perferendis";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "assumenda";
                uploadProtocol = "ipsam";
            }}            

            PolicysimulatorProjectsLocationsReplaysCreateResponse res = sdk.projects.policysimulatorProjectsLocationsReplaysCreate(req, new PolicysimulatorProjectsLocationsReplaysCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->