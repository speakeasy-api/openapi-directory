# Projects

### Available Operations

* [TranslateProjectsLocationsBatchTranslateDocument](#translateprojectslocationsbatchtranslatedocument) - Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [TranslateProjectsLocationsBatchTranslateText](#translateprojectslocationsbatchtranslatetext) - Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.
* [TranslateProjectsLocationsDatasetsCreate](#translateprojectslocationsdatasetscreate) - Creates a Dataset.
* [TranslateProjectsLocationsDatasetsExamplesList](#translateprojectslocationsdatasetsexampleslist) - Lists sentence pairs in the dataset.
* [TranslateProjectsLocationsDatasetsExportData](#translateprojectslocationsdatasetsexportdata) - Exports dataset's data to the provided output location.
* [TranslateProjectsLocationsDatasetsImportData](#translateprojectslocationsdatasetsimportdata) - Import sentence pairs into translation Dataset.
* [TranslateProjectsLocationsDatasetsList](#translateprojectslocationsdatasetslist) - Lists datasets.
* [TranslateProjectsLocationsDetectLanguage](#translateprojectslocationsdetectlanguage) - Detects the language of text within a request.
* [TranslateProjectsLocationsGetSupportedLanguages](#translateprojectslocationsgetsupportedlanguages) - Returns a list of supported languages for translation.
* [TranslateProjectsLocationsGlossariesCreate](#translateprojectslocationsglossariescreate) - Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.
* [TranslateProjectsLocationsGlossariesGlossaryEntriesCreate](#translateprojectslocationsglossariesglossaryentriescreate) - Creates a glossary entry.
* [TranslateProjectsLocationsGlossariesGlossaryEntriesList](#translateprojectslocationsglossariesglossaryentrieslist) - List the entries for the glossary.
* [TranslateProjectsLocationsGlossariesGlossaryEntriesPatch](#translateprojectslocationsglossariesglossaryentriespatch) - Updates a glossary entry.
* [TranslateProjectsLocationsGlossariesList](#translateprojectslocationsglossarieslist) - Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.
* [TranslateProjectsLocationsList](#translateprojectslocationslist) - Lists information about the supported locations for this service.
* [TranslateProjectsLocationsModelsCreate](#translateprojectslocationsmodelscreate) - Creates a Model.
* [TranslateProjectsLocationsModelsList](#translateprojectslocationsmodelslist) - Lists models.
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

## TranslateProjectsLocationsDatasetsCreate

Creates a Dataset.

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
    res, err := s.Projects.TranslateProjectsLocationsDatasetsCreate(ctx, operations.TranslateProjectsLocationsDatasetsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        DatasetInput: &shared.DatasetInput{
            DisplayName: sdk.String("tenetur"),
            Name: sdk.String("Mr. Alberta Schuster"),
            SourceLanguageCode: sdk.String("temporibus"),
            TargetLanguageCode: sdk.String("laborum"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("vero"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("praesentium"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.TranslateProjectsLocationsDatasetsCreateSecurity{
        Option1: &operations.TranslateProjectsLocationsDatasetsCreateSecurityOption1{
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

## TranslateProjectsLocationsDatasetsExamplesList

Lists sentence pairs in the dataset.

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
    res, err := s.Projects.TranslateProjectsLocationsDatasetsExamplesList(ctx, operations.TranslateProjectsLocationsDatasetsExamplesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("ut"),
        Filter: sdk.String("maiores"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("corporis"),
        PageSize: sdk.Int64(296140),
        PageToken: sdk.String("iusto"),
        Parent: "dicta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.TranslateProjectsLocationsDatasetsExamplesListSecurity{
        Option1: &operations.TranslateProjectsLocationsDatasetsExamplesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExamplesResponse != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsDatasetsExportData

Exports dataset's data to the provided output location.

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
    res, err := s.Projects.TranslateProjectsLocationsDatasetsExportData(ctx, operations.TranslateProjectsLocationsDatasetsExportDataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ExportDataRequest: &shared.ExportDataRequest{
            OutputConfig: &shared.DatasetOutputConfig{
                GcsDestination: &shared.GcsOutputDestination{
                    OutputURIPrefix: sdk.String("repudiandae"),
                },
            },
        },
        AccessToken: sdk.String("quae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quidem"),
        Dataset: "molestias",
        Fields: sdk.String("excepturi"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("praesentium"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("voluptates"),
    }, operations.TranslateProjectsLocationsDatasetsExportDataSecurity{
        Option1: &operations.TranslateProjectsLocationsDatasetsExportDataSecurityOption1{
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

## TranslateProjectsLocationsDatasetsImportData

Import sentence pairs into translation Dataset.

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
    res, err := s.Projects.TranslateProjectsLocationsDatasetsImportData(ctx, operations.TranslateProjectsLocationsDatasetsImportDataRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ImportDataRequest: &shared.ImportDataRequest{
            InputConfig: &shared.DatasetInputConfig{
                InputFiles: []shared.InputFile{
                    shared.InputFile{
                        GcsSource: &shared.GcsInputSource{
                            InputURI: sdk.String("sint"),
                        },
                        Usage: sdk.String("veritatis"),
                    },
                    shared.InputFile{
                        GcsSource: &shared.GcsInputSource{
                            InputURI: sdk.String("itaque"),
                        },
                        Usage: sdk.String("incidunt"),
                    },
                    shared.InputFile{
                        GcsSource: &shared.GcsInputSource{
                            InputURI: sdk.String("enim"),
                        },
                        Usage: sdk.String("consequatur"),
                    },
                    shared.InputFile{
                        GcsSource: &shared.GcsInputSource{
                            InputURI: sdk.String("est"),
                        },
                        Usage: sdk.String("quibusdam"),
                    },
                },
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("distinctio"),
        Dataset: "quibusdam",
        Fields: sdk.String("labore"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("cupiditate"),
        UploadProtocol: sdk.String("quos"),
    }, operations.TranslateProjectsLocationsDatasetsImportDataSecurity{
        Option1: &operations.TranslateProjectsLocationsDatasetsImportDataSecurityOption1{
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

## TranslateProjectsLocationsDatasetsList

Lists datasets.

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
    res, err := s.Projects.TranslateProjectsLocationsDatasetsList(ctx, operations.TranslateProjectsLocationsDatasetsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorum"),
        PageSize: sdk.Int64(569618),
        PageToken: sdk.String("tempora"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tempore"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.TranslateProjectsLocationsDatasetsListSecurity{
        Option1: &operations.TranslateProjectsLocationsDatasetsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDatasetsResponse != nil {
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
            Content: sdk.String("non"),
            Labels: map[string]string{
                "sint": "aliquid",
                "provident": "necessitatibus",
                "sint": "officia",
                "dolor": "debitis",
            },
            MimeType: sdk.String("a"),
            Model: sdk.String("dolorum"),
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("rerum"),
        OauthToken: sdk.String("dicta"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UploadType: sdk.String("facere"),
        UploadProtocol: sdk.String("ea"),
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
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("non"),
        DisplayLanguageCode: sdk.String("occaecati"),
        Fields: sdk.String("enim"),
        Key: sdk.String("accusamus"),
        Model: sdk.String("delectus"),
        OauthToken: sdk.String("quidem"),
        Parent: "provident",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nam"),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("blanditiis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GlossaryInput: &shared.GlossaryInput{
            DisplayName: sdk.String("sapiente"),
            InputConfig: &shared.GlossaryInputConfig{
                GcsSource: &shared.GcsSource{
                    InputURI: sdk.String("amet"),
                },
            },
            LanguageCodesSet: &shared.LanguageCodesSet{
                LanguageCodes: []string{
                    "nisi",
                    "vel",
                    "natus",
                },
            },
            LanguagePair: &shared.LanguageCodePair{
                SourceLanguageCode: sdk.String("omnis"),
                TargetLanguageCode: sdk.String("molestiae"),
            },
            Name: sdk.String("Marcia Gutkowski"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("natus"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("eum"),
        Parent: "vero",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aspernatur"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("magnam"),
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

## TranslateProjectsLocationsGlossariesGlossaryEntriesCreate

Creates a glossary entry.

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
    res, err := s.Projects.TranslateProjectsLocationsGlossariesGlossaryEntriesCreate(ctx, operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GlossaryEntry: &shared.GlossaryEntry{
            Description: sdk.String("excepturi"),
            Name: sdk.String("Ramona Lueilwitz MD"),
            TermsPair: &shared.GlossaryTermsPair{
                SourceTerm: &shared.GlossaryTerm{
                    LanguageCode: sdk.String("reiciendis"),
                    Text: sdk.String("mollitia"),
                },
                TargetTerm: &shared.GlossaryTerm{
                    LanguageCode: sdk.String("ad"),
                    Text: sdk.String("eum"),
                },
            },
            TermsSet: &shared.GlossaryTermsSet{
                Terms: []shared.GlossaryTerm{
                    shared.GlossaryTerm{
                        LanguageCode: sdk.String("necessitatibus"),
                        Text: sdk.String("odit"),
                    },
                },
            },
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("eius"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("in"),
    }, operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity{
        Option1: &operations.TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlossaryEntry != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsGlossariesGlossaryEntriesList

List the entries for the glossary.

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
    res, err := s.Projects.TranslateProjectsLocationsGlossariesGlossaryEntriesList(ctx, operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("expedita"),
        Key: sdk.String("nihil"),
        OauthToken: sdk.String("repellat"),
        PageSize: sdk.Int64(841140),
        PageToken: sdk.String("sed"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("pariatur"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurity{
        Option1: &operations.TranslateProjectsLocationsGlossariesGlossaryEntriesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGlossaryEntriesResponse != nil {
        // handle response
    }
}
```

## TranslateProjectsLocationsGlossariesGlossaryEntriesPatch

Updates a glossary entry.

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
    res, err := s.Projects.TranslateProjectsLocationsGlossariesGlossaryEntriesPatch(ctx, operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GlossaryEntry: &shared.GlossaryEntry{
            Description: sdk.String("natus"),
            Name: sdk.String("Joan Satterfield"),
            TermsPair: &shared.GlossaryTermsPair{
                SourceTerm: &shared.GlossaryTerm{
                    LanguageCode: sdk.String("maxime"),
                    Text: sdk.String("ea"),
                },
                TargetTerm: &shared.GlossaryTerm{
                    LanguageCode: sdk.String("excepturi"),
                    Text: sdk.String("odit"),
                },
            },
            TermsSet: &shared.GlossaryTermsSet{
                Terms: []shared.GlossaryTerm{
                    shared.GlossaryTerm{
                        LanguageCode: sdk.String("accusantium"),
                        Text: sdk.String("ab"),
                    },
                    shared.GlossaryTerm{
                        LanguageCode: sdk.String("maiores"),
                        Text: sdk.String("quidem"),
                    },
                },
            },
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("autem"),
        Fields: sdk.String("nam"),
        Key: sdk.String("eaque"),
        Name: "Dr. Herman Wolf",
        OauthToken: sdk.String("aut"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cumque"),
        UpdateMask: sdk.String("corporis"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("libero"),
    }, operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity{
        Option1: &operations.TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GlossaryEntry != nil {
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
        AccessToken: sdk.String("dolores"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("dignissimos"),
        Filter: sdk.String("eaque"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("nesciunt"),
        PageSize: sdk.Int64(179490),
        PageToken: sdk.String("perferendis"),
        Parent: "dolores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("quam"),
        UploadProtocol: sdk.String("dolor"),
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
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("omnis"),
        Filter: sdk.String("facilis"),
        Key: sdk.String("perspiciatis"),
        Name: "Robyn Cruickshank",
        OauthToken: sdk.String("eaque"),
        PageSize: sdk.Int64(577229),
        PageToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("asperiores"),
        UploadProtocol: sdk.String("earum"),
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

## TranslateProjectsLocationsModelsCreate

Creates a Model.

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
    res, err := s.Projects.TranslateProjectsLocationsModelsCreate(ctx, operations.TranslateProjectsLocationsModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        ModelInput: &shared.ModelInput{
            Dataset: sdk.String("iste"),
            DisplayName: sdk.String("dolorum"),
            Name: sdk.String("Ervin McLaughlin"),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quos"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("dolorem"),
        OauthToken: sdk.String("dolorem"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("ipsum"),
        UploadProtocol: sdk.String("hic"),
    }, operations.TranslateProjectsLocationsModelsCreateSecurity{
        Option1: &operations.TranslateProjectsLocationsModelsCreateSecurityOption1{
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

## TranslateProjectsLocationsModelsList

Lists models.

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
    res, err := s.Projects.TranslateProjectsLocationsModelsList(ctx, operations.TranslateProjectsLocationsModelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("cum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("reiciendis"),
        Filter: sdk.String("amet"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("numquam"),
        PageSize: sdk.Int64(85295),
        PageToken: sdk.String("ipsa"),
        Parent: "ipsa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("quaerat"),
    }, operations.TranslateProjectsLocationsModelsListSecurity{
        Option1: &operations.TranslateProjectsLocationsModelsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListModelsResponse != nil {
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
            "voluptatibus": "voluptas",
            "natus": "eos",
            "atque": "sit",
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("iusto"),
        Name: "Sonya Leuschke",
        OauthToken: sdk.String("distinctio"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("ipsum"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("perferendis"),
        Name: "Marianne Thompson",
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("provident"),
        UploadProtocol: sdk.String("minima"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("at"),
        Key: sdk.String("quaerat"),
        Name: "Gina Schmeler",
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("harum"),
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
        AccessToken: sdk.String("ipsum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("amet"),
        Filter: sdk.String("tempore"),
        Key: sdk.String("accusamus"),
        Name: "Darlene Effertz",
        OauthToken: sdk.String("nihil"),
        PageSize: sdk.Int64(25662),
        PageToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("neque"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("vel"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        WaitOperationRequest: &shared.WaitOperationRequest{
            Timeout: sdk.String("voluptas"),
        },
        AccessToken: sdk.String("deserunt"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ipsum"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("qui"),
        Name: "Simon Stracke MD",
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        UploadType: sdk.String("aspernatur"),
        UploadProtocol: sdk.String("dolores"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        TranslateDocumentRequest: &shared.TranslateDocumentRequest{
            CustomizedAttribution: sdk.String("facilis"),
            DocumentInputConfig: &shared.DocumentInputConfig{
                Content: sdk.String("aliquid"),
                GcsSource: &shared.GcsSource{
                    InputURI: sdk.String("quam"),
                },
                MimeType: sdk.String("molestias"),
            },
            DocumentOutputConfig: &shared.DocumentOutputConfig{
                GcsDestination: &shared.GcsDestination{
                    OutputURIPrefix: sdk.String("temporibus"),
                },
                MimeType: sdk.String("qui"),
            },
            EnableRotationCorrection: sdk.Bool(false),
            EnableShadowRemovalNativePdf: sdk.Bool(false),
            GlossaryConfig: &shared.TranslateTextGlossaryConfig{
                Glossary: sdk.String("neque"),
                IgnoreCase: sdk.Bool(false),
            },
            IsTranslateNativePdfOnly: sdk.Bool(false),
            Labels: map[string]string{
                "magni": "odio",
            },
            Model: sdk.String("sunt"),
            SourceLanguageCode: sdk.String("ullam"),
            TargetLanguageCode: sdk.String("nam"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("nobis"),
        OauthToken: sdk.String("et"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("veritatis"),
        UploadProtocol: sdk.String("nobis"),
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
                "cupiditate",
                "aperiam",
                "delectus",
            },
            GlossaryConfig: &shared.TranslateTextGlossaryConfig{
                Glossary: sdk.String("dolorem"),
                IgnoreCase: sdk.Bool(false),
            },
            Labels: map[string]string{
                "labore": "adipisci",
                "dolorum": "architecto",
            },
            MimeType: sdk.String("quae"),
            Model: sdk.String("aut"),
            SourceLanguageCode: sdk.String("quas"),
            TargetLanguageCode: sdk.String("itaque"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("repellendus"),
        Fields: sdk.String("porro"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("ut"),
        Parent: "facilis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cupiditate"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("quae"),
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
