# Projects

### Available Operations

* [FirebaserulesProjectsReleasesCreate](#firebaserulesprojectsreleasescreate) - Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.
* [FirebaserulesProjectsReleasesGetExecutable](#firebaserulesprojectsreleasesgetexecutable) - Get the `Release` executable to use when enforcing rules.
* [FirebaserulesProjectsReleasesList](#firebaserulesprojectsreleaseslist) - List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.
* [FirebaserulesProjectsReleasesPatch](#firebaserulesprojectsreleasespatch) - Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.
* [FirebaserulesProjectsRulesetsCreate](#firebaserulesprojectsrulesetscreate) - Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.
* [FirebaserulesProjectsRulesetsDelete](#firebaserulesprojectsrulesetsdelete) - Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.
* [FirebaserulesProjectsRulesetsGet](#firebaserulesprojectsrulesetsget) - Get a `Ruleset` by name including the full `Source` contents.
* [FirebaserulesProjectsRulesetsList](#firebaserulesprojectsrulesetslist) - List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.
* [FirebaserulesProjectsTest](#firebaserulesprojectstest) - Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

## FirebaserulesProjectsReleasesCreate

Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsReleasesCreate(ctx, operations.FirebaserulesProjectsReleasesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ReleaseInput: &shared.ReleaseInput{
            Name: sdk.String("Miriam Huel"),
            RulesetName: sdk.String("ab"),
        },
        AccessToken: sdk.String("quis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("ipsam"),
        Name: "Timmy Satterfield",
        OauthToken: sdk.String("at"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("quod"),
    }, operations.FirebaserulesProjectsReleasesCreateSecurity{
        Option1: &operations.FirebaserulesProjectsReleasesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## FirebaserulesProjectsReleasesGetExecutable

Get the `Release` executable to use when enforcing rules.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsReleasesGetExecutable(ctx, operations.FirebaserulesProjectsReleasesGetExecutableRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("esse"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        ExecutableVersion: operations.FirebaserulesProjectsReleasesGetExecutableExecutableVersionEnumFirebaseRulesExecutableV2.ToPointer(),
        Fields: sdk.String("dicta"),
        Key: sdk.String("nam"),
        Name: "Seth Conroy",
        OauthToken: sdk.String("optio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("totam"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("commodi"),
    }, operations.FirebaserulesProjectsReleasesGetExecutableSecurity{
        Option1: &operations.FirebaserulesProjectsReleasesGetExecutableSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReleaseExecutableResponse != nil {
        // handle response
    }
}
```

## FirebaserulesProjectsReleasesList

List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsReleasesList(ctx, operations.FirebaserulesProjectsReleasesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("cum"),
        Filter: sdk.String("esse"),
        Key: sdk.String("ipsum"),
        Name: "Brandon Auer",
        OauthToken: sdk.String("sed"),
        PageSize: sdk.Int64(612096),
        PageToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("natus"),
        UploadType: sdk.String("laboriosam"),
        UploadProtocol: sdk.String("hic"),
    }, operations.FirebaserulesProjectsReleasesListSecurity{
        Option1: &operations.FirebaserulesProjectsReleasesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReleasesResponse != nil {
        // handle response
    }
}
```

## FirebaserulesProjectsReleasesPatch

Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsReleasesPatch(ctx, operations.FirebaserulesProjectsReleasesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateReleaseRequestInput: &shared.UpdateReleaseRequestInput{
            Release: &shared.ReleaseInput{
                Name: sdk.String("Harvey Hessel"),
                RulesetName: sdk.String("saepe"),
            },
            UpdateMask: sdk.String("quidem"),
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        Name: "Ernest Ebert",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.FirebaserulesProjectsReleasesPatchSecurity{
        Option1: &operations.FirebaserulesProjectsReleasesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Release != nil {
        // handle response
    }
}
```

## FirebaserulesProjectsRulesetsCreate

Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsRulesetsCreate(ctx, operations.FirebaserulesProjectsRulesetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RulesetInput: &shared.RulesetInput{
            Metadata: &shared.Metadata{
                Services: []string{
                    "accusantium",
                    "iure",
                    "culpa",
                },
            },
            Source: &shared.Source{
                Files: []shared.File{
                    shared.File{
                        Content: sdk.String("sapiente"),
                        Fingerprint: sdk.String("architecto"),
                        Name: sdk.String("Mike Nicolas"),
                    },
                    shared.File{
                        Content: sdk.String("mollitia"),
                        Fingerprint: sdk.String("occaecati"),
                        Name: sdk.String("Lucy Konopelski"),
                    },
                    shared.File{
                        Content: sdk.String("error"),
                        Fingerprint: sdk.String("quia"),
                        Name: sdk.String("Gloria Padberg"),
                    },
                    shared.File{
                        Content: sdk.String("odit"),
                        Fingerprint: sdk.String("quo"),
                        Name: sdk.String("Mandy Hills"),
                    },
                },
            },
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("temporibus"),
        Key: sdk.String("laborum"),
        Name: "Johanna Wolf",
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.FirebaserulesProjectsRulesetsCreateSecurity{
        Option1: &operations.FirebaserulesProjectsRulesetsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Ruleset != nil {
        // handle response
    }
}
```

## FirebaserulesProjectsRulesetsDelete

Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsRulesetsDelete(ctx, operations.FirebaserulesProjectsRulesetsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("ut"),
        Name: "Willie Hessel",
        OauthToken: sdk.String("dicta"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.FirebaserulesProjectsRulesetsDeleteSecurity{
        Option1: &operations.FirebaserulesProjectsRulesetsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## FirebaserulesProjectsRulesetsGet

Get a `Ruleset` by name including the full `Source` contents.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsRulesetsGet(ctx, operations.FirebaserulesProjectsRulesetsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("quidem"),
        Key: sdk.String("molestias"),
        Name: "Ervin Gleason",
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("repudiandae"),
        UploadProtocol: sdk.String("sint"),
    }, operations.FirebaserulesProjectsRulesetsGetSecurity{
        Option1: &operations.FirebaserulesProjectsRulesetsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Ruleset != nil {
        // handle response
    }
}
```

## FirebaserulesProjectsRulesetsList

List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsRulesetsList(ctx, operations.FirebaserulesProjectsRulesetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("consequatur"),
        Filter: sdk.String("est"),
        Key: sdk.String("quibusdam"),
        Name: "Joanna Rau",
        OauthToken: sdk.String("modi"),
        PageSize: sdk.Int64(183191),
        PageToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("perferendis"),
    }, operations.FirebaserulesProjectsRulesetsListSecurity{
        Option1: &operations.FirebaserulesProjectsRulesetsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRulesetsResponse != nil {
        // handle response
    }
}
```

## FirebaserulesProjectsTest

Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.FirebaserulesProjectsTest(ctx, operations.FirebaserulesProjectsTestRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TestRulesetRequest: &shared.TestRulesetRequest{
            Source: &shared.Source{
                Files: []shared.File{
                    shared.File{
                        Content: sdk.String("ipsam"),
                        Fingerprint: sdk.String("alias"),
                        Name: sdk.String("Sonya Marks"),
                    },
                    shared.File{
                        Content: sdk.String("tempore"),
                        Fingerprint: sdk.String("labore"),
                        Name: sdk.String("Andre Franey"),
                    },
                    shared.File{
                        Content: sdk.String("aliquid"),
                        Fingerprint: sdk.String("provident"),
                        Name: sdk.String("Perry Nikolaus"),
                    },
                    shared.File{
                        Content: sdk.String("a"),
                        Fingerprint: sdk.String("dolorum"),
                        Name: sdk.String("Arlene Stamm"),
                    },
                },
            },
            TestSuite: &shared.TestSuite{
                TestCases: []shared.TestCase{
                    shared.TestCase{
                        Expectation: shared.TestCaseExpectationEnumExpectationUnspecified.ToPointer(),
                        ExpressionReportLevel: shared.TestCaseExpressionReportLevelEnumVisited.ToPointer(),
                        FunctionMocks: []shared.FunctionMock{
                            shared.FunctionMock{
                                Args: []shared.Arg{
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "laborum": "accusamus",
                                            "non": "occaecati",
                                        },
                                        ExactValue: sdk.String("enim"),
                                    },
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "delectus": "quidem",
                                            "provident": "nam",
                                            "id": "blanditiis",
                                            "deleniti": "sapiente",
                                        },
                                        ExactValue: sdk.String("amet"),
                                    },
                                },
                                Function: sdk.String("deserunt"),
                                Result: &shared.Result{
                                    Undefined: map[string]interface{}{
                                        "vel": "natus",
                                        "omnis": "molestiae",
                                    },
                                    Value: sdk.String("perferendis"),
                                },
                            },
                            shared.FunctionMock{
                                Args: []shared.Arg{
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "distinctio": "id",
                                            "labore": "labore",
                                        },
                                        ExactValue: sdk.String("suscipit"),
                                    },
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "nobis": "eum",
                                            "vero": "aspernatur",
                                            "architecto": "magnam",
                                        },
                                        ExactValue: sdk.String("et"),
                                    },
                                },
                                Function: sdk.String("excepturi"),
                                Result: &shared.Result{
                                    Undefined: map[string]interface{}{
                                        "provident": "quos",
                                        "sint": "accusantium",
                                    },
                                    Value: sdk.String("mollitia"),
                                },
                            },
                            shared.FunctionMock{
                                Args: []shared.Arg{
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "ad": "eum",
                                            "dolor": "necessitatibus",
                                            "odit": "nemo",
                                        },
                                        ExactValue: sdk.String("quasi"),
                                    },
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "doloribus": "debitis",
                                            "eius": "maxime",
                                        },
                                        ExactValue: sdk.String("deleniti"),
                                    },
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "in": "architecto",
                                            "architecto": "repudiandae",
                                            "ullam": "expedita",
                                        },
                                        ExactValue: sdk.String("nihil"),
                                    },
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "quibusdam": "sed",
                                            "saepe": "pariatur",
                                            "accusantium": "consequuntur",
                                            "praesentium": "natus",
                                        },
                                        ExactValue: sdk.String("magni"),
                                    },
                                },
                                Function: sdk.String("sunt"),
                                Result: &shared.Result{
                                    Undefined: map[string]interface{}{
                                        "illum": "pariatur",
                                        "maxime": "ea",
                                        "excepturi": "odit",
                                        "ea": "accusantium",
                                    },
                                    Value: sdk.String("ab"),
                                },
                            },
                            shared.FunctionMock{
                                Args: []shared.Arg{
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "ipsam": "voluptate",
                                            "autem": "nam",
                                            "eaque": "pariatur",
                                        },
                                        ExactValue: sdk.String("nemo"),
                                    },
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "perferendis": "fugiat",
                                            "amet": "aut",
                                            "cumque": "corporis",
                                            "hic": "libero",
                                        },
                                        ExactValue: sdk.String("nobis"),
                                    },
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "quis": "totam",
                                        },
                                        ExactValue: sdk.String("dignissimos"),
                                    },
                                    shared.Arg{
                                        AnyValue: map[string]interface{}{
                                            "quis": "nesciunt",
                                        },
                                        ExactValue: sdk.String("eos"),
                                    },
                                },
                                Function: sdk.String("perferendis"),
                                Result: &shared.Result{
                                    Undefined: map[string]interface{}{
                                        "minus": "quam",
                                    },
                                    Value: sdk.String("dolor"),
                                },
                            },
                        },
                        PathEncoding: shared.TestCasePathEncodingEnumPlain.ToPointer(),
                        Request: sdk.String("nostrum"),
                        Resource: sdk.String("hic"),
                    },
                },
            },
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("perspiciatis"),
        Key: sdk.String("voluptatem"),
        Name: "Bobby Kutch V",
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("earum"),
    }, operations.FirebaserulesProjectsTestSecurity{
        Option1: &operations.FirebaserulesProjectsTestSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestRulesetResponse != nil {
        // handle response
    }
}
```
