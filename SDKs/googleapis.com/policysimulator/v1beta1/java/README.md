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
                    parent = "sit";
                }};
                queryParams = new PolicysimulatorProjectsLocationsReplaysCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new GoogleCloudPolicysimulatorV1beta1ReplayInput() {{
                    config = new GoogleCloudPolicysimulatorV1beta1ReplayConfig() {{
                        logSource = "RECENT_ACCESSES";
                        policyOverlay = new java.util.HashMap<String, openapisdk.models.shared.GoogleIamV1Policy>() {{
                            put("voluptatum", new GoogleIamV1Policy() {{
                                auditConfigs = new openapisdk.models.shared.GoogleIamV1AuditConfig[]() {{
                                    add(new GoogleIamV1AuditConfig() {{
                                        auditLogConfigs = new openapisdk.models.shared.GoogleIamV1AuditLogConfig[]() {{
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("et"),
                                                    add("voluptate"),
                                                    add("iste"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("dolores"),
                                                    add("illum"),
                                                    add("debitis"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                            add(new GoogleIamV1AuditLogConfig() {{
                                                exemptedMembers = new String[]() {{
                                                    add("dolore"),
                                                }};
                                                logType = "LOG_TYPE_UNSPECIFIED";
                                            }}),
                                        }};
                                        service = "aspernatur";
                                    }}),
                                }};
                                bindings = new openapisdk.models.shared.GoogleIamV1Binding[]() {{
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "totam";
                                            expression = "commodi";
                                            location = "quis";
                                            title = "est";
                                        }};
                                        members = new String[]() {{
                                            add("odit"),
                                            add("non"),
                                            add("voluptas"),
                                        }};
                                        role = "omnis";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "aut";
                                            expression = "illo";
                                            location = "sed";
                                            title = "officiis";
                                        }};
                                        members = new String[]() {{
                                            add("consectetur"),
                                            add("nobis"),
                                        }};
                                        role = "odio";
                                    }}),
                                    add(new GoogleIamV1Binding() {{
                                        condition = new GoogleTypeExpr() {{
                                            description = "qui";
                                            expression = "recusandae";
                                            location = "at";
                                            title = "ipsum";
                                        }};
                                        members = new String[]() {{
                                            add("modi"),
                                            add("sint"),
                                        }};
                                        role = "inventore";
                                    }}),
                                }};
                                etag = "ut";
                                version = 406703151708498928;
                            }});
                        }};
                    }};
                    resultsSummary = new GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary() {{
                        differenceCount = 4756106358532488297;
                        errorCount = 5837486892148644279;
                        logCount = 4736217237333769909;
                        newestDate = new GoogleTypeDate() {{
                            day = 2264299874001785192;
                            month = 1061380815263676471;
                            year = 7242748068272024738;
                        }};
                        oldestDate = new GoogleTypeDate() {{
                            day = 7719717197379695442;
                            month = 4112921325496946042;
                            year = 2671030200101705776;
                        }};
                        unchangedCount = 3508963237347473586;
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
