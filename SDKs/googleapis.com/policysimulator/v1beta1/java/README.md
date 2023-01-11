# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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
                    parent = "molestiae";
                }};
                queryParams = new PolicysimulatorProjectsLocationsReplaysCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "dolor";
                    alt = "proto";
                    callback = "saepe";
                    fields = "nesciunt";
                    key = "qui";
                    oauthToken = "nesciunt";
                    prettyPrint = true;
                    quotaUser = "sint";
                    uploadType = "dignissimos";
                    uploadProtocol = "esse";
                }};
                request = new GoogleCloudPolicysimulatorV1beta1ReplayInput() {{
                    config = new GoogleCloudPolicysimulatorV1beta1ReplayConfig() {{
                        logSource = "LOG_SOURCE_UNSPECIFIED";
                        policyOverlay = new java.util.HashMap<String, openapisdk.models.shared.GoogleIamV1Policy>() {{
                            put("et", new GoogleIamV1Policy() {{
                                auditConfigs = new openapisdk.models.shared.GoogleIamV1AuditConfig[]() {{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new openapisdk.models.shared.GoogleIamV1AuditLogConfig[]() {{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("numquam"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                        }};
                                        service = "pariatur";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new openapisdk.models.shared.GoogleIamV1AuditLogConfig[]() {{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("officiis"),
                                                    add("adipisci"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("saepe"),
                                                    add("ut"),
                                                    add("eligendi"),
                                                }};
                                                logType = "DATA_WRITE";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("omnis"),
                                                }};
                                                logType = "ADMIN_READ";
                                            }}),
                                        }};
                                        service = "sed";
                                    }}),
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new openapisdk.models.shared.GoogleIamV1AuditLogConfig[]() {{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("officia"),
                                                    add("pariatur"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("aut"),
                                                }};
                                                logType = "DATA_READ";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("id"),
                                                    add("enim"),
                                                }};
                                                logType = "DATA_READ";
                                            }}),
                                        }};
                                        service = "repudiandae";
                                    }}),
                                }};
                                bindings = new openapisdk.models.shared.GoogleIamV1Binding[]() {{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "nam";
                                            expression = "aut";
                                            location = "cumque";
                                            title = "sint";
                                        }};
                                        members = new String[]() {{
                                            add("cumque"),
                                        }};
                                        role = "iste";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "asperiores";
                                            expression = "ut";
                                            location = "quia";
                                            title = "tenetur";
                                        }};
                                        members = new String[]() {{
                                            add("aut"),
                                            add("sit"),
                                        }};
                                        role = "ullam";
                                    }}),
                                }};
                                etag = "voluptas";
                                version = 7150973822353686579;
                            }});
                        }};
                    }};
                    resultsSummary = new GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary() {{
                        differenceCount = 1628527606899237611;
                        errorCount = 3058354816017878840;
                        logCount = 8362895356312789164;
                        newestDate = new GoogleTypeDate() {{
                            day = 2757993331165963246;
                            month = 9151673206230924978;
                            year = 4820931152249105109;
                        }};
                        oldestDate = new GoogleTypeDate() {{
                            day = 1279224704358646056;
                            month = 8958268820725205446;
                            year = 7927319276414715170;
                        }};
                        unchangedCount = 4434233723135237494;
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
* `policysimulatorProjectsLocationsReplaysOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `policysimulatorProjectsLocationsReplaysResultsList` - Lists the results of running a Replay.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
