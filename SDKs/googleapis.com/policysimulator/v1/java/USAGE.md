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
                    parent = "ut";
                }};
                queryParams = new PolicysimulatorProjectsLocationsReplaysCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "sed";
                    alt = "proto";
                    callback = "reprehenderit";
                    fields = "est";
                    key = "velit";
                    oauthToken = "dolores";
                    prettyPrint = false;
                    quotaUser = "consequatur";
                    uploadType = "et";
                    uploadProtocol = "aut";
                }};
                request = new GoogleCloudPolicysimulatorV1ReplayInput() {{
                    config = new GoogleCloudPolicysimulatorV1ReplayConfig() {{
                        logSource = "LOG_SOURCE_UNSPECIFIED";
                        policyOverlay = new java.util.HashMap<String, openapisdk.models.shared.GoogleIamV1Policy>() {{
                            put("voluptatem", new GoogleIamV1Policy() {{
                                auditConfigs = new openapisdk.models.shared.GoogleIamV1AuditConfig[]() {{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new openapisdk.models.shared.GoogleIamV1AuditLogConfig[]() {{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("totam"),
                                                }};
                                                logType = "DATA_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("dicta"),
                                                    add("provident"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
                                        }};
                                        service = "omnis";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new openapisdk.models.shared.GoogleIamV1AuditLogConfig[]() {{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("mollitia"),
                                                    add("accusamus"),
                                                    add("perferendis"),
                                                }};
                                                logType = "DATA_WRITE";
                                            }}),
                                        }};
                                        service = "et";
                                    }}),
                                }};
                                bindings = new openapisdk.models.shared.GoogleIamV1Binding[]() {{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "reprehenderit";
                                            expression = "sequi";
                                            location = "at";
                                            title = "ea";
                                        }};
                                        members = new String[]() {{
                                            add("facere"),
                                        }};
                                        role = "veritatis";
                                    }}),
                                }};
                                etag = "aspernatur";
                                version = 5638053685360360092;
                            }});
                        }};
                    }};
                    resultsSummary = new GoogleCloudPolicysimulatorV1ReplayResultsSummary() {{
                        differenceCount = 2999964869494708014;
                        errorCount = 4826182052644680625;
                        logCount = 2881533865494325728;
                        newestDate = new GoogleTypeDate() {{
                            day = 7503700433260446754;
                            month = 3691715334341988325;
                            year = 1775038298363354387;
                        }};
                        oldestDate = new GoogleTypeDate() {{
                            day = 2197112340475767931;
                            month = 208036272845837806;
                            year = 5596031056950248798;
                        }};
                        unchangedCount = 5403411173451075903;
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