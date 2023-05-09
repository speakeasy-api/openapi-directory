# projects

### Available Operations

* [firebaserulesProjectsReleasesCreate](#firebaserulesprojectsreleasescreate) - Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.
* [firebaserulesProjectsReleasesGetExecutable](#firebaserulesprojectsreleasesgetexecutable) - Get the `Release` executable to use when enforcing rules.
* [firebaserulesProjectsReleasesList](#firebaserulesprojectsreleaseslist) - List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.
* [firebaserulesProjectsReleasesPatch](#firebaserulesprojectsreleasespatch) - Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.
* [firebaserulesProjectsRulesetsCreate](#firebaserulesprojectsrulesetscreate) - Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.
* [firebaserulesProjectsRulesetsDelete](#firebaserulesprojectsrulesetsdelete) - Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.
* [firebaserulesProjectsRulesetsGet](#firebaserulesprojectsrulesetsget) - Get a `Ruleset` by name including the full `Source` contents.
* [firebaserulesProjectsRulesetsList](#firebaserulesprojectsrulesetslist) - List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
* [firebaserulesProjectsTest](#firebaserulesprojectstest) - Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

## firebaserulesProjectsReleasesCreate

Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReleaseInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsReleasesCreateRequest req = new FirebaserulesProjectsReleasesCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.TWO;
                releaseInput = new ReleaseInput() {{
                    name = "Ken Kshlerin";
                    rulesetName = "recusandae";
                }};;
                accessToken = "temporibus";
                alt = AltEnum.JSON;
                callback = "quis";
                fields = "veritatis";
                key = "deserunt";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "repellendus";
                uploadProtocol = "sapiente";
            }};            

            FirebaserulesProjectsReleasesCreateResponse res = sdk.projects.firebaserulesProjectsReleasesCreate(req, new FirebaserulesProjectsReleasesCreateSecurity() {{
                option1 = new FirebaserulesProjectsReleasesCreateSecurityOption1("quo", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaserulesProjectsReleasesGetExecutable

Get the `Release` executable to use when enforcing rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesGetExecutableRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesGetExecutableResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesGetExecutableSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesGetExecutableSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesGetExecutableSecurityOption2;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesGetExecutableSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsReleasesGetExecutableRequest req = new FirebaserulesProjectsReleasesGetExecutableRequest("at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                alt = AltEnum.MEDIA;
                callback = "quod";
                executableVersion = FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnum.FIREBASE_RULES_EXECUTABLE_V2;
                fields = "esse";
                key = "totam";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "dicta";
                uploadProtocol = "nam";
            }};            

            FirebaserulesProjectsReleasesGetExecutableResponse res = sdk.projects.firebaserulesProjectsReleasesGetExecutable(req, new FirebaserulesProjectsReleasesGetExecutableSecurity() {{
                option1 = new FirebaserulesProjectsReleasesGetExecutableSecurityOption1("officia", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getReleaseExecutableResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaserulesProjectsReleasesList

List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesListRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesListResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesListSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsReleasesListRequest req = new FirebaserulesProjectsReleasesListRequest("fugit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "beatae";
                filter = "commodi";
                key = "molestiae";
                oauthToken = "modi";
                pageSize = 186332L;
                pageToken = "impedit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "esse";
                uploadProtocol = "ipsum";
            }};            

            FirebaserulesProjectsReleasesListResponse res = sdk.projects.firebaserulesProjectsReleasesList(req, new FirebaserulesProjectsReleasesListSecurity() {{
                option1 = new FirebaserulesProjectsReleasesListSecurityOption1("excepturi", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listReleasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaserulesProjectsReleasesPatch

Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesPatchRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesPatchResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesPatchSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesPatchSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsReleasesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReleaseInput;
import org.openapis.openapi.models.shared.UpdateReleaseRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsReleasesPatchRequest req = new FirebaserulesProjectsReleasesPatchRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                updateReleaseRequestInput = new UpdateReleaseRequestInput() {{
                    release = new ReleaseInput() {{
                        name = "Louis Moore";
                        rulesetName = "laboriosam";
                    }};;
                    updateMask = "hic";
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "corporis";
                key = "iste";
                oauthToken = "iure";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "quidem";
                uploadProtocol = "architecto";
            }};            

            FirebaserulesProjectsReleasesPatchResponse res = sdk.projects.firebaserulesProjectsReleasesPatch(req, new FirebaserulesProjectsReleasesPatchSecurity() {{
                option1 = new FirebaserulesProjectsReleasesPatchSecurityOption1("ipsa", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.release != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaserulesProjectsRulesetsCreate

Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsCreateRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsCreateResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsCreateSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsCreateSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.File;
import org.openapis.openapi.models.shared.Metadata;
import org.openapis.openapi.models.shared.RulesetInput;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsRulesetsCreateRequest req = new FirebaserulesProjectsRulesetsCreateRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                rulesetInput = new RulesetInput() {{
                    metadata = new Metadata() {{
                        services = new String[]{{
                            add("dolores"),
                            add("dolorem"),
                            add("corporis"),
                        }};
                    }};;
                    source = new Source() {{
                        files = new org.openapis.openapi.models.shared.File[]{{
                            add(new File() {{
                                content = "nobis";
                                fingerprint = "enim";
                                name = "Corey Hane III";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "consequuntur";
                uploadProtocol = "repellat";
            }};            

            FirebaserulesProjectsRulesetsCreateResponse res = sdk.projects.firebaserulesProjectsRulesetsCreate(req, new FirebaserulesProjectsRulesetsCreateSecurity() {{
                option1 = new FirebaserulesProjectsRulesetsCreateSecurityOption1("mollitia", "occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.ruleset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaserulesProjectsRulesetsDelete

Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsDeleteRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsDeleteResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsDeleteSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsRulesetsDeleteRequest req = new FirebaserulesProjectsRulesetsDeleteRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quam";
                alt = AltEnum.MEDIA;
                callback = "velit";
                fields = "error";
                key = "quia";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "vitae";
                uploadType = "laborum";
                uploadProtocol = "animi";
            }};            

            FirebaserulesProjectsRulesetsDeleteResponse res = sdk.projects.firebaserulesProjectsRulesetsDelete(req, new FirebaserulesProjectsRulesetsDeleteSecurity() {{
                option1 = new FirebaserulesProjectsRulesetsDeleteSecurityOption1("enim", "odit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaserulesProjectsRulesetsGet

Get a `Ruleset` by name including the full `Source` contents.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsGetRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsGetResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsGetSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsGetSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsGetSecurityOption2;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsRulesetsGetRequest req = new FirebaserulesProjectsRulesetsGetRequest("quo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "tenetur";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "possimus";
                key = "aut";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "error";
                uploadType = "temporibus";
                uploadProtocol = "laborum";
            }};            

            FirebaserulesProjectsRulesetsGetResponse res = sdk.projects.firebaserulesProjectsRulesetsGet(req, new FirebaserulesProjectsRulesetsGetSecurity() {{
                option1 = new FirebaserulesProjectsRulesetsGetSecurityOption1("quasi", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.ruleset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaserulesProjectsRulesetsList

List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsListRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsListResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsListSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsListSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsListSecurityOption2;
import org.openapis.openapi.models.operations.FirebaserulesProjectsRulesetsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsRulesetsListRequest req = new FirebaserulesProjectsRulesetsListRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "ipsa";
                filter = "omnis";
                key = "voluptate";
                oauthToken = "cum";
                pageSize = 19987L;
                pageToken = "doloremque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                uploadType = "ut";
                uploadProtocol = "maiores";
            }};            

            FirebaserulesProjectsRulesetsListResponse res = sdk.projects.firebaserulesProjectsRulesetsList(req, new FirebaserulesProjectsRulesetsListSecurity() {{
                option1 = new FirebaserulesProjectsRulesetsListSecurityOption1("dicta", "corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listRulesetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## firebaserulesProjectsTest

Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FirebaserulesProjectsTestRequest;
import org.openapis.openapi.models.operations.FirebaserulesProjectsTestResponse;
import org.openapis.openapi.models.operations.FirebaserulesProjectsTestSecurity;
import org.openapis.openapi.models.operations.FirebaserulesProjectsTestSecurityOption1;
import org.openapis.openapi.models.operations.FirebaserulesProjectsTestSecurityOption2;
import org.openapis.openapi.models.operations.FirebaserulesProjectsTestSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Arg;
import org.openapis.openapi.models.shared.File;
import org.openapis.openapi.models.shared.FunctionMock;
import org.openapis.openapi.models.shared.Result;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.TestCase;
import org.openapis.openapi.models.shared.TestCaseExpectationEnum;
import org.openapis.openapi.models.shared.TestCaseExpressionReportLevelEnum;
import org.openapis.openapi.models.shared.TestCasePathEncodingEnum;
import org.openapis.openapi.models.shared.TestRulesetRequest;
import org.openapis.openapi.models.shared.TestSuite;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FirebaserulesProjectsTestRequest req = new FirebaserulesProjectsTestRequest("dolore") {{
                dollarXgafv = XgafvEnum.ONE;
                testRulesetRequest = new TestRulesetRequest() {{
                    source = new Source() {{
                        files = new org.openapis.openapi.models.shared.File[]{{
                            add(new File() {{
                                content = "harum";
                                fingerprint = "enim";
                                name = "Mrs. Leslie VonRueden";
                            }}),
                        }};
                    }};;
                    testSuite = new TestSuite() {{
                        testCases = new org.openapis.openapi.models.shared.TestCase[]{{
                            add(new TestCase() {{
                                expectation = TestCaseExpectationEnum.ALLOW;
                                expressionReportLevel = TestCaseExpressionReportLevelEnum.VISITED;
                                functionMocks = new org.openapis.openapi.models.shared.FunctionMock[]{{
                                    add(new FunctionMock() {{
                                        args = new org.openapis.openapi.models.shared.Arg[]{{
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("voluptates", "quasi");
                                                    put("repudiandae", "sint");
                                                    put("veritatis", "itaque");
                                                }};
                                                exactValue = "incidunt";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("consequatur", "est");
                                                    put("quibusdam", "explicabo");
                                                }};
                                                exactValue = "deserunt";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("quibusdam", "labore");
                                                    put("modi", "qui");
                                                    put("aliquid", "cupiditate");
                                                }};
                                                exactValue = "quos";
                                            }}),
                                        }};
                                        function = "perferendis";
                                        result = new Result() {{
                                            undefined = new java.util.HashMap<String, Object>() {{
                                                put("assumenda", "ipsam");
                                            }};
                                            value = "alias";
                                        }};
                                    }}),
                                    add(new FunctionMock() {{
                                        args = new org.openapis.openapi.models.shared.Arg[]{{
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("excepturi", "tempora");
                                                    put("facilis", "tempore");
                                                    put("labore", "delectus");
                                                }};
                                                exactValue = "eum";
                                            }}),
                                        }};
                                        function = "non";
                                        result = new Result() {{
                                            undefined = new java.util.HashMap<String, Object>() {{
                                                put("sint", "aliquid");
                                                put("provident", "necessitatibus");
                                                put("sint", "officia");
                                                put("dolor", "debitis");
                                            }};
                                            value = "a";
                                        }};
                                    }}),
                                }};
                                pathEncoding = TestCasePathEncodingEnum.PLAIN;
                                request = "in";
                                resource = "in";
                            }}),
                            add(new TestCase() {{
                                expectation = TestCaseExpectationEnum.DENY;
                                expressionReportLevel = TestCaseExpressionReportLevelEnum.VISITED;
                                functionMocks = new org.openapis.openapi.models.shared.FunctionMock[]{{
                                    add(new FunctionMock() {{
                                        args = new org.openapis.openapi.models.shared.Arg[]{{
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("cumque", "facere");
                                                    put("ea", "aliquid");
                                                }};
                                                exactValue = "laborum";
                                            }}),
                                        }};
                                        function = "accusamus";
                                        result = new Result() {{
                                            undefined = new java.util.HashMap<String, Object>() {{
                                                put("occaecati", "enim");
                                            }};
                                            value = "accusamus";
                                        }};
                                    }}),
                                    add(new FunctionMock() {{
                                        args = new org.openapis.openapi.models.shared.Arg[]{{
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("provident", "nam");
                                                    put("id", "blanditiis");
                                                    put("deleniti", "sapiente");
                                                }};
                                                exactValue = "amet";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("nisi", "vel");
                                                    put("natus", "omnis");
                                                    put("molestiae", "perferendis");
                                                }};
                                                exactValue = "nihil";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("distinctio", "id");
                                                    put("labore", "labore");
                                                }};
                                                exactValue = "suscipit";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("nobis", "eum");
                                                    put("vero", "aspernatur");
                                                    put("architecto", "magnam");
                                                }};
                                                exactValue = "et";
                                            }}),
                                        }};
                                        function = "excepturi";
                                        result = new Result() {{
                                            undefined = new java.util.HashMap<String, Object>() {{
                                                put("provident", "quos");
                                                put("sint", "accusantium");
                                            }};
                                            value = "mollitia";
                                        }};
                                    }}),
                                    add(new FunctionMock() {{
                                        args = new org.openapis.openapi.models.shared.Arg[]{{
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("ad", "eum");
                                                    put("dolor", "necessitatibus");
                                                    put("odit", "nemo");
                                                }};
                                                exactValue = "quasi";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("doloribus", "debitis");
                                                    put("eius", "maxime");
                                                }};
                                                exactValue = "deleniti";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("in", "architecto");
                                                    put("architecto", "repudiandae");
                                                    put("ullam", "expedita");
                                                }};
                                                exactValue = "nihil";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("quibusdam", "sed");
                                                    put("saepe", "pariatur");
                                                    put("accusantium", "consequuntur");
                                                    put("praesentium", "natus");
                                                }};
                                                exactValue = "magni";
                                            }}),
                                        }};
                                        function = "sunt";
                                        result = new Result() {{
                                            undefined = new java.util.HashMap<String, Object>() {{
                                                put("illum", "pariatur");
                                                put("maxime", "ea");
                                                put("excepturi", "odit");
                                                put("ea", "accusantium");
                                            }};
                                            value = "ab";
                                        }};
                                    }}),
                                }};
                                pathEncoding = TestCasePathEncodingEnum.PLAIN;
                                request = "quidem";
                                resource = "ipsam";
                            }}),
                            add(new TestCase() {{
                                expectation = TestCaseExpectationEnum.ALLOW;
                                expressionReportLevel = TestCaseExpressionReportLevelEnum.NONE;
                                functionMocks = new org.openapis.openapi.models.shared.FunctionMock[]{{
                                    add(new FunctionMock() {{
                                        args = new org.openapis.openapi.models.shared.Arg[]{{
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("nemo", "voluptatibus");
                                                    put("perferendis", "fugiat");
                                                    put("amet", "aut");
                                                    put("cumque", "corporis");
                                                }};
                                                exactValue = "hic";
                                            }}),
                                        }};
                                        function = "libero";
                                        result = new Result() {{
                                            undefined = new java.util.HashMap<String, Object>() {{
                                                put("dolores", "quis");
                                                put("totam", "dignissimos");
                                                put("eaque", "quis");
                                            }};
                                            value = "nesciunt";
                                        }};
                                    }}),
                                    add(new FunctionMock() {{
                                        args = new org.openapis.openapi.models.shared.Arg[]{{
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("dolores", "minus");
                                                }};
                                                exactValue = "quam";
                                            }}),
                                        }};
                                        function = "dolor";
                                        result = new Result() {{
                                            undefined = new java.util.HashMap<String, Object>() {{
                                                put("nostrum", "hic");
                                                put("recusandae", "omnis");
                                                put("facilis", "perspiciatis");
                                                put("voluptatem", "porro");
                                            }};
                                            value = "consequuntur";
                                        }};
                                    }}),
                                    add(new FunctionMock() {{
                                        args = new org.openapis.openapi.models.shared.Arg[]{{
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("eaque", "occaecati");
                                                    put("rerum", "adipisci");
                                                    put("asperiores", "earum");
                                                }};
                                                exactValue = "modi";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("dolorum", "deleniti");
                                                    put("pariatur", "provident");
                                                    put("nobis", "libero");
                                                }};
                                                exactValue = "delectus";
                                            }}),
                                            add(new Arg() {{
                                                anyValue = new java.util.HashMap<String, Object>() {{
                                                    put("quos", "aliquid");
                                                    put("dolorem", "dolorem");
                                                }};
                                                exactValue = "dolor";
                                            }}),
                                        }};
                                        function = "qui";
                                        result = new Result() {{
                                            undefined = new java.util.HashMap<String, Object>() {{
                                                put("hic", "excepturi");
                                            }};
                                            value = "cum";
                                        }};
                                    }}),
                                }};
                                pathEncoding = TestCasePathEncodingEnum.URL_ENCODED;
                                request = "dignissimos";
                                resource = "reiciendis";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "numquam";
                fields = "veritatis";
                key = "ipsa";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "iure";
                uploadType = "odio";
                uploadProtocol = "quaerat";
            }};            

            FirebaserulesProjectsTestResponse res = sdk.projects.firebaserulesProjectsTest(req, new FirebaserulesProjectsTestSecurity() {{
                option1 = new FirebaserulesProjectsTestSecurityOption1("accusamus", "quidem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testRulesetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
