# Projects

### Available Operations

* [TranslateProjectsLocationsBatchTranslateDocument](#translateprojectslocationsbatchtranslatedocument) - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [TranslateProjectsLocationsBatchTranslateText](#translateprojectslocationsbatchtranslatetext) - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [TranslateProjectsLocationsDetectLanguage](#translateprojectslocationsdetectlanguage) - Detects the language of text within a request.
* [TranslateProjectsLocationsGetSupportedLanguages](#translateprojectslocationsgetsupportedlanguages) - Returns a list of supported languages for translation.
* [TranslateProjectsLocationsGlossariesCreate](#translateprojectslocationsglossariescreate) - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* [TranslateProjectsLocationsGlossariesList](#translateprojectslocationsglossarieslist) - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* [TranslateProjectsLocationsList](#translateprojectslocationslist) - Lists information about the supported locations for this service.
* [TranslateProjectsLocationsOperationsCancel](#translateprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [TranslateProjectsLocationsOperationsDelete](#translateprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [TranslateProjectsLocationsOperationsGet](#translateprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [TranslateProjectsLocationsOperationsList](#translateprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [TranslateProjectsLocationsOperationsWait](#translateprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [TranslateProjectsLocationsTranslateDocument](#translateprojectslocationstranslatedocument) - Translates documents in synchronous mode.
* [TranslateProjectsLocationsTranslateText](#translateprojectslocationstranslatetext) - Translates input text and returns translated text.

## TranslateProjectsLocationsBatchTranslateDocument

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

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
    res, err := s.Projects.TranslateProjectsLocationsBatchTranslateDocument(ctx, operations.TranslateProjectsLocationsBatchTranslateDocumentRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchTranslateDocumentRequest: &shared.BatchTranslateDocumentRequest{
            CustomizedAttribution: sdk.String("totam"),
            EnableShadowRemovalNativePdf: sdk.Bool(false),
            FormatConversions: map[string]string{
                "dolorum": "dicta",
                "nam": "officia",
                "occaecati": "fugit",
                "deleniti": "hic",
            },
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "totam": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("beatae"),
                    IgnoreCase: sdk.Bool(false),
                },
                "commodi": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("molestiae"),
                    IgnoreCase: sdk.Bool(false),
                },
                "modi": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("qui"),
                    IgnoreCase: sdk.Bool(false),
                },
                "impedit": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("cum"),
                    IgnoreCase: sdk.Bool(false),
                },
            },
            InputConfigs: []shared.BatchDocumentInputConfig{
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: sdk.String("ipsum"),
                    },
                },
                shared.BatchDocumentInputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: sdk.String("excepturi"),
                    },
                },
            },
            Models: map[string]string{
                "perferendis": "ad",
            },
            OutputConfig: &shared.BatchDocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: sdk.String("natus"),
                },
            },
            SourceLanguageCode: sdk.String("sed"),
            TargetLanguageCodes: []string{
                "dolor",
                "natus",
                "laboriosam",
            },
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("fuga"),
        Fields: sdk.String("in"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("iste"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsBatchTranslateText

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

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
    res, err := s.Projects.TranslateProjectsLocationsBatchTranslateText(ctx, operations.TranslateProjectsLocationsBatchTranslateTextRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchTranslateTextRequest: &shared.BatchTranslateTextRequest{
            Glossaries: map[string]shared.TranslateTextGlossaryConfig{
                "est": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("mollitia"),
                    IgnoreCase: sdk.Bool(false),
                },
                "laborum": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("dolores"),
                    IgnoreCase: sdk.Bool(false),
                },
                "dolorem": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("corporis"),
                    IgnoreCase: sdk.Bool(false),
                },
                "explicabo": shared.TranslateTextGlossaryConfig{
                    Glossary: sdk.String("nobis"),
                    IgnoreCase: sdk.Bool(false),
                },
            },
            InputConfigs: []shared.InputConfig{
                shared.InputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: sdk.String("omnis"),
                    },
                    MimeType: sdk.String("nemo"),
                },
                shared.InputConfig{
                    GcsSource: &shared.GcsSource{
                        InputURI: sdk.String("minima"),
                    },
                    MimeType: sdk.String("excepturi"),
                },
            },
            Labels: map[string]string{
                "iure": "culpa",
            },
            Models: map[string]string{
                "sapiente": "architecto",
                "mollitia": "dolorem",
                "culpa": "consequuntur",
                "repellat": "mollitia",
            },
            OutputConfig: &shared.OutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: sdk.String("occaecati"),
                },
            },
            SourceLanguageCode: sdk.String("numquam"),
            TargetLanguageCodes: []string{
                "quam",
                "molestiae",
            },
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        Fields: sdk.String("quis"),
        Key: sdk.String("vitae"),
        OauthToken: sdk.String("laborum"),
        Parent: "animi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("quo"),
    }, operations.TranslateProjectsLocationsBatchTranslateTextSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsDetectLanguage

Detects the language of text within a request.

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
    res, err := s.Projects.TranslateProjectsLocationsDetectLanguage(ctx, operations.TranslateProjectsLocationsDetectLanguageRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DetectLanguageRequest: &shared.DetectLanguageRequest{
            Content: sdk.String("tenetur"),
            Labels: map[string]string{
                "id": "possimus",
                "aut": "quasi",
            },
            MimeType: sdk.String("error"),
            Model: sdk.String("temporibus"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("vero"),
        OauthToken: sdk.String("nihil"),
        Parent: "praesentium",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.TranslateProjectsLocationsDetectLanguageSecurity{
        Option1: &operations.TranslateProjectsLocationsDetectLanguageSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetectLanguageResponse != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsGetSupportedLanguages

Returns a list of supported languages for translation.

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
    res, err := s.Projects.TranslateProjectsLocationsGetSupportedLanguages(ctx, operations.TranslateProjectsLocationsGetSupportedLanguagesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("doloremque"),
        DisplayLanguageCode: sdk.String("reprehenderit"),
        Fields: sdk.String("ut"),
        Key: sdk.String("maiores"),
        Model: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        Parent: "dolore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("dicta"),
        UploadProtocol: sdk.String("harum"),
    }, operations.TranslateProjectsLocationsGetSupportedLanguagesSecurity{
        Option1: &operations.TranslateProjectsLocationsGetSupportedLanguagesSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SupportedLanguages != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsGlossariesCreate

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

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
    res, err := s.Projects.TranslateProjectsLocationsGlossariesCreate(ctx, operations.TranslateProjectsLocationsGlossariesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GlossaryInput: &shared.GlossaryInput{
            InputConfig: &shared.GlossaryInputConfig{
                GcsSource: &shared.GcsSource{
                    InputURI: sdk.String("accusamus"),
                },
            },
            LanguageCodesSet: &shared.LanguageCodesSet{
                LanguageCodes: []string{
                    "repudiandae",
                    "quae",
                },
            },
            LanguagePair: &shared.LanguageCodePair{
                SourceLanguageCode: sdk.String("ipsum"),
                TargetLanguageCode: sdk.String("quidem"),
            },
            Name: sdk.String("Andy Streich"),
        },
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("veritatis"),
        Parent: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("consequatur"),
    }, operations.TranslateProjectsLocationsGlossariesCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsGlossariesList

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

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
    res, err := s.Projects.TranslateProjectsLocationsGlossariesList(ctx, operations.TranslateProjectsLocationsGlossariesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Filter: sdk.String("quibusdam"),
        Key: sdk.String("labore"),
        OauthToken: sdk.String("modi"),
        PageSize: sdk.Int64(183191),
        PageToken: sdk.String("aliquid"),
        Parent: "cupiditate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("magni"),
    }, operations.TranslateProjectsLocationsGlossariesListSecurity{
        Option1: &operations.TranslateProjectsLocationsGlossariesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGlossariesResponse != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsList

Lists information about the supported locations for this service.

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
    res, err := s.Projects.TranslateProjectsLocationsList(ctx, operations.TranslateProjectsLocationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("dolorum"),
        Filter: sdk.String("excepturi"),
        Key: sdk.String("tempora"),
        Name: "Geoffrey Green",
        OauthToken: sdk.String("non"),
        PageSize: sdk.Int64(756107),
        PageToken: sdk.String("sint"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.TranslateProjectsLocationsListSecurity{
        Option1: &operations.TranslateProjectsLocationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListLocationsResponse != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

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
    res, err := s.Projects.TranslateProjectsLocationsOperationsCancel(ctx, operations.TranslateProjectsLocationsOperationsCancelRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "dolor": "debitis",
            "a": "dolorum",
            "in": "in",
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("magnam"),
        Name: "Irving Jenkins",
        OauthToken: sdk.String("accusamus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("non"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("enim"),
    }, operations.TranslateProjectsLocationsOperationsCancelSecurity{
        Option1: &operations.TranslateProjectsLocationsOperationsCancelSecurityOption1{
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

## TranslateProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

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
    res, err := s.Projects.TranslateProjectsLocationsOperationsDelete(ctx, operations.TranslateProjectsLocationsOperationsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nam"),
        Key: sdk.String("id"),
        Name: "Jaime Will",
        OauthToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.TranslateProjectsLocationsOperationsDeleteSecurity{
        Option1: &operations.TranslateProjectsLocationsOperationsDeleteSecurityOption1{
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

## TranslateProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.TranslateProjectsLocationsOperationsGet(ctx, operations.TranslateProjectsLocationsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magnam"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("id"),
        Name: "Jamie Hoppe",
        OauthToken: sdk.String("eum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("architecto"),
    }, operations.TranslateProjectsLocationsOperationsGetSecurity{
        Option1: &operations.TranslateProjectsLocationsOperationsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

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
    res, err := s.Projects.TranslateProjectsLocationsOperationsList(ctx, operations.TranslateProjectsLocationsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("provident"),
        Filter: sdk.String("quos"),
        Key: sdk.String("sint"),
        Name: "Angie Wisozk",
        OauthToken: sdk.String("eum"),
        PageSize: sdk.Int64(221262),
        PageToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("quasi"),
    }, operations.TranslateProjectsLocationsOperationsListSecurity{
        Option1: &operations.TranslateProjectsLocationsOperationsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOperationsResponse != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

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
    res, err := s.Projects.TranslateProjectsLocationsOperationsWait(ctx, operations.TranslateProjectsLocationsOperationsWaitRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        WaitOperationRequest: &shared.WaitOperationRequest{
            Timeout: sdk.String("doloribus"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("maxime"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("facilis"),
        Name: "Alice Bradtke",
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nihil"),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("quibusdam"),
    }, operations.TranslateProjectsLocationsOperationsWaitSecurity{
        Option1: &operations.TranslateProjectsLocationsOperationsWaitSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsTranslateDocument

Translates documents in synchronous mode.

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
    res, err := s.Projects.TranslateProjectsLocationsTranslateDocument(ctx, operations.TranslateProjectsLocationsTranslateDocumentRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        TranslateDocumentRequest: &shared.TranslateDocumentRequest{
            CustomizedAttribution: sdk.String("saepe"),
            DocumentInputConfig: &shared.DocumentInputConfig{
                Content: sdk.String("pariatur"),
                GcsSource: &shared.GcsSource{
                    InputURI: sdk.String("accusantium"),
                },
                MimeType: sdk.String("consequuntur"),
            },
            DocumentOutputConfig: &shared.DocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: sdk.String("praesentium"),
                },
                MimeType: sdk.String("natus"),
            },
            EnableRotationCorrection: sdk.Bool(false),
            EnableShadowRemovalNativePdf: sdk.Bool(false),
            GlossaryConfig: &shared.TranslateTextGlossaryConfig{
                Glossary: sdk.String("magni"),
                IgnoreCase: sdk.Bool(false),
            },
            IsTranslateNativePdfOnly: sdk.Bool(false),
            Labels: map[string]string{
                "quo": "illum",
            },
            Model: sdk.String("pariatur"),
            SourceLanguageCode: sdk.String("maxime"),
            TargetLanguageCode: sdk.String("ea"),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ea"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("maiores"),
        Parent: "quidem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("autem"),
    }, operations.TranslateProjectsLocationsTranslateDocumentSecurity{
        Option1: &operations.TranslateProjectsLocationsTranslateDocumentSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslateDocumentResponse != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsTranslateText

Translates input text and returns translated text.

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
    res, err := s.Projects.TranslateProjectsLocationsTranslateText(ctx, operations.TranslateProjectsLocationsTranslateTextRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TranslateTextRequest: &shared.TranslateTextRequest{
            Contents: []string{
                "pariatur",
            },
            GlossaryConfig: &shared.TranslateTextGlossaryConfig{
                Glossary: sdk.String("nemo"),
                IgnoreCase: sdk.Bool(false),
            },
            Labels: map[string]string{
                "perferendis": "fugiat",
                "amet": "aut",
                "cumque": "corporis",
                "hic": "libero",
            },
            MimeType: sdk.String("nobis"),
            Model: sdk.String("dolores"),
            SourceLanguageCode: sdk.String("quis"),
            TargetLanguageCode: sdk.String("totam"),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quis"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("eos"),
        OauthToken: sdk.String("perferendis"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolor"),
    }, operations.TranslateProjectsLocationsTranslateTextSecurity{
        Option1: &operations.TranslateProjectsLocationsTranslateTextSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TranslateTextResponse != nil {
        // handle response
    }
}
```
