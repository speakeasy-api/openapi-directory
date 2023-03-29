<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FormsFormsBatchUpdateRequest{
        Security: operations.FormsFormsBatchUpdateSecurity{
            Option1: &operations.FormsFormsBatchUpdateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                },
            },
        },
        PathParams: operations.FormsFormsBatchUpdatePathParams{
            FormID: "unde",
        },
        QueryParams: operations.FormsFormsBatchUpdateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: false,
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "iusto",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "ullam",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 56713,
                                    },
                                    SourceURI: "sapiente",
                                },
                            },
                            ItemID: "enim",
                            PageBreakItem: map[string]interface{}{
                                "voluptatum": "autem",
                                "vel": "non",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "reprehenderit",
                                                Image: &shared.ImageInput{
                                                    AltText: "molestiae",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 71036,
                                                    },
                                                    SourceURI: "laboriosam",
                                                },
                                                IsOther: false,
                                                Value: "dicta",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "voluptatem",
                                                Image: &shared.ImageInput{
                                                    AltText: "consequatur",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 957156,
                                                    },
                                                    SourceURI: "omnis",
                                                },
                                                IsOther: false,
                                                Value: "eos",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "accusamus",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 473608,
                                    },
                                    SourceURI: "quibusdam",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "dolor",
                                                    Image: &shared.ImageInput{
                                                        AltText: "soluta",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 720633,
                                                        },
                                                        SourceURI: "rerum",
                                                    },
                                                    IsOther: false,
                                                    Value: "culpa",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "sed",
                                                    Image: &shared.ImageInput{
                                                        AltText: "rerum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 521848,
                                                        },
                                                        SourceURI: "odit",
                                                    },
                                                    IsOther: false,
                                                    Value: "esse",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "voluptatem",
                                            MaxFileSize: "amet",
                                            MaxFiles: 774234,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "SPREADSHEET",
                                                "DOCUMENT",
                                                "DRAWING",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "sit",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "http://leopoldo.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "iure",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "earum",
                                                            URI: "https://marisa.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ea",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                },
                                                Text: "iusto",
                                            },
                                            PointValue: 902349,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aspernatur",
                                                            URI: "http://waino.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "libero",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsum",
                                                            URI: "http://florian.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "placeat",
                                                            YoutubeURI: "ipsam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "est",
                                                            URI: "http://eriberto.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eaque",
                                                            YoutubeURI: "odio",
                                                        },
                                                    },
                                                },
                                                Text: "harum",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "a",
                                                            URI: "http://mackenzie.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quidem",
                                                            YoutubeURI: "neque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "asperiores",
                                                            URI: "https://kristin.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "esse",
                                                            YoutubeURI: "totam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatum",
                                                            URI: "http://lincoln.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "laboriosam",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "cum",
                                                            URI: "https://emilia.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "omnis",
                                                            YoutubeURI: "adipisci",
                                                        },
                                                    },
                                                },
                                                Text: "hic",
                                            },
                                        },
                                        QuestionID: "consequatur",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Dynamic Creative Supervisor",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 97101,
                                            HighLabel: "fuga",
                                            Low: 837945,
                                            LowLabel: "tempore",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "reiciendis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "debitis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 509624,
                                                        },
                                                        SourceURI: "reiciendis",
                                                    },
                                                    IsOther: false,
                                                    Value: "illo",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHECKBOX",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "qui",
                                            MaxFileSize: "quod",
                                            MaxFiles: 19987,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "SPREADSHEET",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "reiciendis",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "sed",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "exercitationem",
                                                            URI: "http://blair.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatem",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "esse",
                                                            URI: "https://anissa.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eligendi",
                                                            YoutubeURI: "error",
                                                        },
                                                    },
                                                },
                                                Text: "similique",
                                            },
                                            PointValue: 865103,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "molestias",
                                                            URI: "https://terence.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "in",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vitae",
                                                            URI: "https://duane.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aut",
                                                            YoutubeURI: "libero",
                                                        },
                                                    },
                                                },
                                                Text: "voluptas",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "est",
                                                            URI: "https://ron.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatem",
                                                            YoutubeURI: "sit",
                                                        },
                                                    },
                                                },
                                                Text: "in",
                                            },
                                        },
                                        QuestionID: "officia",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Customer Solutions Officer",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 828940,
                                            HighLabel: "quis",
                                            Low: 4695,
                                            LowLabel: "ratione",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "enim",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nihil",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 288476,
                                                        },
                                                        SourceURI: "sapiente",
                                                    },
                                                    IsOther: false,
                                                    Value: "et",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "possimus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "in",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 592042,
                                                        },
                                                        SourceURI: "eveniet",
                                                    },
                                                    IsOther: false,
                                                    Value: "sunt",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "modi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "necessitatibus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 680056,
                                                        },
                                                        SourceURI: "ducimus",
                                                    },
                                                    IsOther: false,
                                                    Value: "ducimus",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "reiciendis",
                                            MaxFileSize: "cumque",
                                            MaxFiles: 116202,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "IMAGE",
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "qui",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "cum",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "magnam",
                                                            URI: "https://elyssa.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "delectus",
                                                            YoutubeURI: "eligendi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "officia",
                                                            URI: "https://magdalen.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "provident",
                                                            YoutubeURI: "a",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "incidunt",
                                                            URI: "https://godfrey.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorum",
                                                            YoutubeURI: "id",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatum",
                                                            URI: "http://janet.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "porro",
                                                            YoutubeURI: "distinctio",
                                                        },
                                                    },
                                                },
                                                Text: "quis",
                                            },
                                            PointValue: 290077,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "https://hilda.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolores",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ullam",
                                                            URI: "http://kevin.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "deserunt",
                                                            YoutubeURI: "omnis",
                                                        },
                                                    },
                                                },
                                                Text: "in",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "https://macie.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "modi",
                                                        },
                                                    },
                                                },
                                                Text: "eveniet",
                                            },
                                        },
                                        QuestionID: "qui",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Regional Security Administrator",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 984043,
                                            HighLabel: "saepe",
                                            Low: 260341,
                                            LowLabel: "aut",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "ducimus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "aspernatur",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 919483,
                                                        },
                                                        SourceURI: "aliquid",
                                                    },
                                                    IsOther: false,
                                                    Value: "quo",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "repellat",
                                                    Image: &shared.ImageInput{
                                                        AltText: "voluptas",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 904648,
                                                        },
                                                        SourceURI: "accusamus",
                                                    },
                                                    IsOther: false,
                                                    Value: "eaque",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "molestias",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 123820,
                                                        },
                                                        SourceURI: "omnis",
                                                    },
                                                    IsOther: false,
                                                    Value: "pariatur",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "consequatur",
                                            MaxFileSize: "velit",
                                            MaxFiles: 569101,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "SPREADSHEET",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "quasi",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "optio",
                                                            URI: "http://jace.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quisquam",
                                                            YoutubeURI: "ab",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "http://wendy.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "vero",
                                                            YoutubeURI: "incidunt",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "https://ford.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "placeat",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsum",
                                                            URI: "http://jovan.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "illo",
                                                            YoutubeURI: "laboriosam",
                                                        },
                                                    },
                                                },
                                                Text: "velit",
                                            },
                                            PointValue: 179490,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsum",
                                                            URI: "https://jalon.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "officiis",
                                                            YoutubeURI: "nisi",
                                                        },
                                                    },
                                                },
                                                Text: "rerum",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "est",
                                                            URI: "https://lauryn.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "repellendus",
                                                            YoutubeURI: "dolorem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "https://amber.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cumque",
                                                            YoutubeURI: "labore",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "asperiores",
                                                            URI: "https://dolly.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "soluta",
                                                            YoutubeURI: "sed",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "https://nestor.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "delectus",
                                                            YoutubeURI: "enim",
                                                        },
                                                    },
                                                },
                                                Text: "iste",
                                            },
                                        },
                                        QuestionID: "in",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Dynamic Implementation Manager",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 186193,
                                            HighLabel: "eius",
                                            Low: 944373,
                                            LowLabel: "similique",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "quod",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 490459,
                                    },
                                    SourceURI: "ut",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "aliquam",
                                                Image: &shared.ImageInput{
                                                    AltText: "dicta",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 56418,
                                                    },
                                                    SourceURI: "iusto",
                                                },
                                                IsOther: false,
                                                Value: "corrupti",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "RADIO",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: false,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "aut",
                                        MaxFileSize: "optio",
                                        MaxFiles: 976405,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "PDF",
                                            "ANY",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "accusantium",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "at",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "et",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "soluta",
                                                        URI: "http://jacey.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "sed",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "eveniet",
                                                        URI: "https://yessenia.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "eius",
                                                        YoutubeURI: "blanditiis",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "nam",
                                                        URI: "https://diamond.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "voluptatem",
                                                        YoutubeURI: "incidunt",
                                                    },
                                                },
                                            },
                                            Text: "possimus",
                                        },
                                        PointValue: 881586,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "et",
                                                        URI: "http://lulu.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quia",
                                                        YoutubeURI: "eum",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "occaecati",
                                                        URI: "https://aaliyah.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "enim",
                                                        YoutubeURI: "ad",
                                                    },
                                                },
                                            },
                                            Text: "nihil",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "rerum",
                                                        URI: "http://marilie.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "blanditiis",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "atque",
                                                        URI: "http://pasquale.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "incidunt",
                                                        YoutubeURI: "qui",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "aut",
                                                        URI: "http://emanuel.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "a",
                                                        YoutubeURI: "occaecati",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "rem",
                                                        URI: "http://merle.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "sequi",
                                                        YoutubeURI: "nihil",
                                                    },
                                                },
                                            },
                                            Text: "qui",
                                        },
                                    },
                                    QuestionID: "autem",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Dynamic Applications Manager",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 277628,
                                        HighLabel: "amet",
                                        Low: 586784,
                                        LowLabel: "consequatur",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: false,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "placeat": "sed",
                                "cum": "sint",
                                "ad": "magni",
                                "quia": "porro",
                            },
                            Title: "International Markets Architect",
                            VideoItem: &shared.VideoItem{
                                Caption: "error",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 183280,
                                    },
                                    YoutubeURI: "quia",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 144847,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 164959,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 488056,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 124833,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "ex",
                            Title: "International Factors Supervisor",
                        },
                        UpdateMask: "voluptas",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "placeat",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "placeat",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 903720,
                                    },
                                    SourceURI: "eius",
                                },
                            },
                            ItemID: "vitae",
                            PageBreakItem: map[string]interface{}{
                                "omnis": "minus",
                                "qui": "quae",
                                "sapiente": "non",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "labore",
                                                Image: &shared.ImageInput{
                                                    AltText: "cum",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 63038,
                                                    },
                                                    SourceURI: "sit",
                                                },
                                                IsOther: false,
                                                Value: "iste",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "aut",
                                                Image: &shared.ImageInput{
                                                    AltText: "libero",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 785153,
                                                    },
                                                    SourceURI: "maiores",
                                                },
                                                IsOther: false,
                                                Value: "veniam",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHECKBOX",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "officia",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 63955,
                                    },
                                    SourceURI: "excepturi",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "temporibus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "debitis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 338159,
                                                        },
                                                        SourceURI: "eius",
                                                    },
                                                    IsOther: false,
                                                    Value: "sapiente",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "incidunt",
                                                    Image: &shared.ImageInput{
                                                        AltText: "debitis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 492268,
                                                        },
                                                        SourceURI: "earum",
                                                    },
                                                    IsOther: false,
                                                    Value: "porro",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "corrupti",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 874288,
                                                        },
                                                        SourceURI: "et",
                                                    },
                                                    IsOther: false,
                                                    Value: "nostrum",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "pariatur",
                                            MaxFileSize: "adipisci",
                                            MaxFiles: 617877,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                                "AUDIO",
                                                "PRESENTATION",
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "dolor",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "maiores",
                                                            URI: "http://nichole.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequatur",
                                                            YoutubeURI: "rerum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "http://halle.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "molestiae",
                                                            YoutubeURI: "qui",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ullam",
                                                            URI: "http://gregory.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quia",
                                                            YoutubeURI: "modi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatibus",
                                                            URI: "http://gust.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "similique",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "nisi",
                                            },
                                            PointValue: 960835,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "http://omer.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "in",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vitae",
                                                            URI: "http://gwen.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "incidunt",
                                                            YoutubeURI: "molestiae",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "magni",
                                                            URI: "http://amir.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "est",
                                                            YoutubeURI: "perferendis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "https://olaf.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ratione",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "beatae",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sunt",
                                                            URI: "https://margarete.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolore",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quam",
                                                            URI: "https://keagan.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eos",
                                                            YoutubeURI: "vel",
                                                        },
                                                    },
                                                },
                                                Text: "qui",
                                            },
                                        },
                                        QuestionID: "aspernatur",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Future Functionality Liaison",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 591935,
                                            HighLabel: "illo",
                                            Low: 476477,
                                            LowLabel: "corporis",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "praesentium",
                                                    Image: &shared.ImageInput{
                                                        AltText: "blanditiis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 683282,
                                                        },
                                                        SourceURI: "dignissimos",
                                                    },
                                                    IsOther: false,
                                                    Value: "optio",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "veniam",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 826871,
                                                        },
                                                        SourceURI: "sit",
                                                    },
                                                    IsOther: false,
                                                    Value: "molestias",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "dicta",
                                            MaxFileSize: "inventore",
                                            MaxFiles: 660040,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                                "IMAGE",
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "soluta",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "quaerat",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "dolor",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "autem",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "officia",
                                                            URI: "http://dora.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quis",
                                                            YoutubeURI: "dolores",
                                                        },
                                                    },
                                                },
                                                Text: "velit",
                                            },
                                            PointValue: 779192,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "molestiae",
                                                            URI: "http://michale.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quos",
                                                            YoutubeURI: "beatae",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "totam",
                                                            URI: "https://shany.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "corrupti",
                                                            YoutubeURI: "in",
                                                        },
                                                    },
                                                },
                                                Text: "esse",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "https://jarrell.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "repellendus",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "iste",
                                                            URI: "https://carol.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "soluta",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "est",
                                                            URI: "http://kallie.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptas",
                                                            YoutubeURI: "reprehenderit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ratione",
                                                            URI: "https://carol.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "magni",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                },
                                                Text: "culpa",
                                            },
                                        },
                                        QuestionID: "perspiciatis",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Direct Division Agent",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 882042,
                                            HighLabel: "vitae",
                                            Low: 458604,
                                            LowLabel: "et",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "est",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 399025,
                                    },
                                    SourceURI: "explicabo",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "est",
                                                Image: &shared.ImageInput{
                                                    AltText: "rem",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 580197,
                                                    },
                                                    SourceURI: "voluptas",
                                                },
                                                IsOther: false,
                                                Value: "porro",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "accusantium",
                                                Image: &shared.ImageInput{
                                                    AltText: "quidem",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 240020,
                                                    },
                                                    SourceURI: "voluptas",
                                                },
                                                IsOther: false,
                                                Value: "nesciunt",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "quibusdam",
                                                Image: &shared.ImageInput{
                                                    AltText: "nemo",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 232865,
                                                    },
                                                    SourceURI: "praesentium",
                                                },
                                                IsOther: false,
                                                Value: "quas",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "tenetur",
                                                Image: &shared.ImageInput{
                                                    AltText: "vero",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 457223,
                                                    },
                                                    SourceURI: "aspernatur",
                                                },
                                                IsOther: false,
                                                Value: "tenetur",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHECKBOX",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: false,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "in",
                                        MaxFileSize: "eos",
                                        MaxFiles: 820767,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "AUDIO",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "illum",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "dicta",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "nesciunt",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "explicabo",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "harum",
                                                        URI: "http://ursula.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "itaque",
                                                        YoutubeURI: "nihil",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ducimus",
                                                        URI: "http://monique.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quod",
                                                        YoutubeURI: "aperiam",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "nemo",
                                                        URI: "https://blanca.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "dignissimos",
                                                        YoutubeURI: "ex",
                                                    },
                                                },
                                            },
                                            Text: "reprehenderit",
                                        },
                                        PointValue: 16328,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "amet",
                                                        URI: "https://gregory.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "non",
                                                        YoutubeURI: "soluta",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "aspernatur",
                                                        URI: "https://tyrese.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "accusamus",
                                                        YoutubeURI: "sunt",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "blanditiis",
                                                        URI: "http://ericka.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "incidunt",
                                                        YoutubeURI: "labore",
                                                    },
                                                },
                                            },
                                            Text: "et",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "aperiam",
                                                        URI: "https://adrienne.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "molestiae",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "et",
                                                        URI: "https://demond.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "modi",
                                                        YoutubeURI: "culpa",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "aliquam",
                                                        URI: "https://brendan.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aut",
                                                        YoutubeURI: "quos",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "fugit",
                                                        URI: "https://liana.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aut",
                                                        YoutubeURI: "autem",
                                                    },
                                                },
                                            },
                                            Text: "doloribus",
                                        },
                                    },
                                    QuestionID: "quae",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Regional Paradigm Officer",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 831520,
                                        HighLabel: "rerum",
                                        Low: 807023,
                                        LowLabel: "quos",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: false,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "doloribus": "consequatur",
                                "et": "enim",
                                "repellendus": "et",
                            },
                            Title: "Product Brand Engineer",
                            VideoItem: &shared.VideoItem{
                                Caption: "nobis",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 380729,
                                    },
                                    YoutubeURI: "dolore",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 633931,
                        },
                        UpdateMask: "nam",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "molestiae",
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "sint",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "at",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 497678,
                                    },
                                    SourceURI: "iste",
                                },
                            },
                            ItemID: "molestiae",
                            PageBreakItem: map[string]interface{}{
                                "qui": "nihil",
                                "id": "esse",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "ut",
                                                Image: &shared.ImageInput{
                                                    AltText: "eum",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 924967,
                                                    },
                                                    SourceURI: "qui",
                                                },
                                                IsOther: false,
                                                Value: "quae",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "incidunt",
                                                Image: &shared.ImageInput{
                                                    AltText: "ducimus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 937285,
                                                    },
                                                    SourceURI: "vel",
                                                },
                                                IsOther: false,
                                                Value: "quaerat",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "eum",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 697142,
                                    },
                                    SourceURI: "et",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "asperiores",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 228263,
                                                        },
                                                        SourceURI: "odit",
                                                    },
                                                    IsOther: false,
                                                    Value: "corrupti",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "necessitatibus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ut",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 689768,
                                                        },
                                                        SourceURI: "eum",
                                                    },
                                                    IsOther: false,
                                                    Value: "inventore",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "qui",
                                            MaxFileSize: "fugit",
                                            MaxFiles: 881721,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                                "ANY",
                                                "PRESENTATION",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "autem",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "quia",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "soluta",
                                                            URI: "http://pete.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quas",
                                                            YoutubeURI: "ducimus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "exercitationem",
                                                            URI: "http://sheldon.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aliquid",
                                                            YoutubeURI: "labore",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "id",
                                                            URI: "https://kaylah.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sed",
                                                            YoutubeURI: "harum",
                                                        },
                                                    },
                                                },
                                                Text: "unde",
                                            },
                                            PointValue: 867290,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "earum",
                                                            URI: "http://nestor.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cumque",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ut",
                                                            URI: "http://zane.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "impedit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quasi",
                                                            URI: "https://elda.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatem",
                                                            YoutubeURI: "ducimus",
                                                        },
                                                    },
                                                },
                                                Text: "esse",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "magni",
                                                            URI: "http://leila.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eum",
                                                            YoutubeURI: "sapiente",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "saepe",
                                                            URI: "http://viviane.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "unde",
                                                            YoutubeURI: "reiciendis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ad",
                                                            URI: "http://larissa.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eveniet",
                                                            YoutubeURI: "numquam",
                                                        },
                                                    },
                                                },
                                                Text: "voluptate",
                                            },
                                        },
                                        QuestionID: "culpa",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Customer Metrics Engineer",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 273009,
                                            HighLabel: "blanditiis",
                                            Low: 970076,
                                            LowLabel: "ea",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "necessitatibus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quas",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 310381,
                                                        },
                                                        SourceURI: "minima",
                                                    },
                                                    IsOther: false,
                                                    Value: "quis",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "cupiditate",
                                            MaxFileSize: "accusantium",
                                            MaxFiles: 750595,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PRESENTATION",
                                                "PRESENTATION",
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "eos",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "dolorem",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "ab",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "ut",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sit",
                                                            URI: "http://sid.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "excepturi",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "excepturi",
                                                            URI: "https://gertrude.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "dolorum",
                                                        },
                                                    },
                                                },
                                                Text: "rerum",
                                            },
                                            PointValue: 710529,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "https://evans.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cum",
                                                            YoutubeURI: "unde",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "debitis",
                                                            URI: "http://karianne.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "veniam",
                                                            YoutubeURI: "vero",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "doloremque",
                                                            URI: "https://melyssa.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequatur",
                                                            YoutubeURI: "praesentium",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quis",
                                                            URI: "http://justina.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "ea",
                                                        },
                                                    },
                                                },
                                                Text: "sunt",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptate",
                                                            URI: "http://alberto.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nisi",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolorum",
                                                            URI: "http://durward.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "eligendi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "fugit",
                                                            URI: "http://kirstin.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "optio",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                },
                                                Text: "tempore",
                                            },
                                        },
                                        QuestionID: "est",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Chief Markets Supervisor",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 227084,
                                            HighLabel: "est",
                                            Low: 454860,
                                            LowLabel: "animi",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "fugiat",
                                                    Image: &shared.ImageInput{
                                                        AltText: "sapiente",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 16871,
                                                        },
                                                        SourceURI: "libero",
                                                    },
                                                    IsOther: false,
                                                    Value: "optio",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "vel",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nobis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 648598,
                                                        },
                                                        SourceURI: "suscipit",
                                                    },
                                                    IsOther: false,
                                                    Value: "doloremque",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "sint",
                                                    Image: &shared.ImageInput{
                                                        AltText: "aspernatur",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 442036,
                                                        },
                                                        SourceURI: "doloribus",
                                                    },
                                                    IsOther: false,
                                                    Value: "occaecati",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "eligendi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "aut",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 461007,
                                                        },
                                                        SourceURI: "tempora",
                                                    },
                                                    IsOther: false,
                                                    Value: "dolorem",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "ut",
                                            MaxFileSize: "fuga",
                                            MaxFiles: 887265,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "VIDEO",
                                                "PDF",
                                                "PRESENTATION",
                                                "ANY",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "voluptatibus",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "perspiciatis",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolorum",
                                                            URI: "https://genesis.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ut",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "https://marilyne.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quis",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsa",
                                                            URI: "https://bettye.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "odit",
                                                            YoutubeURI: "quia",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsam",
                                                            URI: "http://delfina.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "error",
                                                            YoutubeURI: "ullam",
                                                        },
                                                    },
                                                },
                                                Text: "et",
                                            },
                                            PointValue: 160467,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "rerum",
                                                            URI: "https://isabella.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptates",
                                                            YoutubeURI: "culpa",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nesciunt",
                                                            URI: "http://magnus.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "odio",
                                                            YoutubeURI: "fuga",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "beatae",
                                                            URI: "http://maurine.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolore",
                                                            YoutubeURI: "debitis",
                                                        },
                                                    },
                                                },
                                                Text: "eaque",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "inventore",
                                                            URI: "https://angelica.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptates",
                                                            YoutubeURI: "sit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quod",
                                                            URI: "http://stan.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "tempore",
                                                            YoutubeURI: "porro",
                                                        },
                                                    },
                                                },
                                                Text: "non",
                                            },
                                        },
                                        QuestionID: "cupiditate",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Product Paradigm Strategist",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 3099,
                                            HighLabel: "commodi",
                                            Low: 597303,
                                            LowLabel: "rem",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "consequatur",
                                                    Image: &shared.ImageInput{
                                                        AltText: "reiciendis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 174658,
                                                        },
                                                        SourceURI: "nam",
                                                    },
                                                    IsOther: false,
                                                    Value: "voluptas",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "soluta",
                                                    Image: &shared.ImageInput{
                                                        AltText: "velit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 925703,
                                                        },
                                                        SourceURI: "est",
                                                    },
                                                    IsOther: false,
                                                    Value: "enim",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "ea",
                                                    Image: &shared.ImageInput{
                                                        AltText: "veniam",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 238413,
                                                        },
                                                        SourceURI: "necessitatibus",
                                                    },
                                                    IsOther: false,
                                                    Value: "sint",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "consequatur",
                                            MaxFileSize: "non",
                                            MaxFiles: 456520,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PRESENTATION",
                                                "SPREADSHEET",
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "dolores",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "ex",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "aspernatur",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nisi",
                                                            URI: "https://landen.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "distinctio",
                                                            YoutubeURI: "ea",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "http://zola.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aliquid",
                                                            YoutubeURI: "ducimus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quisquam",
                                                            URI: "https://louvenia.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "vel",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                },
                                                Text: "reiciendis",
                                            },
                                            PointValue: 564064,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "a",
                                                            URI: "https://bessie.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "enim",
                                                            YoutubeURI: "suscipit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vitae",
                                                            URI: "http://nova.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatem",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eos",
                                                            URI: "http://deven.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "accusamus",
                                                            YoutubeURI: "est",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolor",
                                                            URI: "https://hope.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quia",
                                                            YoutubeURI: "odit",
                                                        },
                                                    },
                                                },
                                                Text: "qui",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "itaque",
                                                            URI: "https://tristin.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "illo",
                                                            YoutubeURI: "itaque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "mollitia",
                                                            URI: "https://sim.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolor",
                                                            YoutubeURI: "vel",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "non",
                                                            URI: "http://norwood.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consectetur",
                                                            YoutubeURI: "expedita",
                                                        },
                                                    },
                                                },
                                                Text: "eveniet",
                                            },
                                        },
                                        QuestionID: "eos",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Lead Security Executive",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 497777,
                                            HighLabel: "dolorum",
                                            Low: 581082,
                                            LowLabel: "eum",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "et",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 169025,
                                    },
                                    SourceURI: "maiores",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "inventore",
                                                Image: &shared.ImageInput{
                                                    AltText: "enim",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 473190,
                                                    },
                                                    SourceURI: "fugit",
                                                },
                                                IsOther: false,
                                                Value: "deleniti",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "molestias",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptatibus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 423706,
                                                    },
                                                    SourceURI: "aspernatur",
                                                },
                                                IsOther: false,
                                                Value: "vero",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "sed",
                                                Image: &shared.ImageInput{
                                                    AltText: "atque",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 458259,
                                                    },
                                                    SourceURI: "ea",
                                                },
                                                IsOther: false,
                                                Value: "ut",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "inventore",
                                                Image: &shared.ImageInput{
                                                    AltText: "tempore",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 344718,
                                                    },
                                                    SourceURI: "vero",
                                                },
                                                IsOther: false,
                                                Value: "quo",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "RADIO",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: false,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "rerum",
                                        MaxFileSize: "vel",
                                        MaxFiles: 399161,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "et",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "distinctio",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "fuga",
                                                        URI: "https://tatyana.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "tempore",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                            },
                                            Text: "quia",
                                        },
                                        PointValue: 536923,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "aut",
                                                        URI: "https://gunnar.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ea",
                                                        YoutubeURI: "veniam",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "voluptatem",
                                                        URI: "https://alexa.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "id",
                                                        YoutubeURI: "in",
                                                    },
                                                },
                                            },
                                            Text: "aut",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "id",
                                                        URI: "http://mayra.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quidem",
                                                        YoutubeURI: "doloremque",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "a",
                                                        URI: "https://beatrice.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "necessitatibus",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "doloremque",
                                                        URI: "http://kaela.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ea",
                                                        YoutubeURI: "a",
                                                    },
                                                },
                                            },
                                            Text: "cupiditate",
                                        },
                                    },
                                    QuestionID: "quibusdam",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Regional Metrics Officer",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 355225,
                                        HighLabel: "sit",
                                        Low: 848341,
                                        LowLabel: "occaecati",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: false,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "voluptas": "quisquam",
                                "quis": "harum",
                                "modi": "nemo",
                                "vitae": "sed",
                            },
                            Title: "Senior Response Manager",
                            VideoItem: &shared.VideoItem{
                                Caption: "aut",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 24944,
                                    },
                                    YoutubeURI: "voluptatem",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 144286,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 66149,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 513760,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 65604,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "modi",
                            Title: "Internal Identity Officer",
                        },
                        UpdateMask: "illo",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "natus",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "voluptates",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 884952,
                                    },
                                    SourceURI: "blanditiis",
                                },
                            },
                            ItemID: "eveniet",
                            PageBreakItem: map[string]interface{}{
                                "sit": "velit",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "molestiae",
                                                Image: &shared.ImageInput{
                                                    AltText: "non",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 349440,
                                                    },
                                                    SourceURI: "quasi",
                                                },
                                                IsOther: false,
                                                Value: "dolor",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "facere",
                                                Image: &shared.ImageInput{
                                                    AltText: "iure",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 160393,
                                                    },
                                                    SourceURI: "doloremque",
                                                },
                                                IsOther: false,
                                                Value: "aliquid",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "explicabo",
                                                Image: &shared.ImageInput{
                                                    AltText: "reprehenderit",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 878373,
                                                    },
                                                    SourceURI: "libero",
                                                },
                                                IsOther: false,
                                                Value: "eligendi",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "maiores",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 759283,
                                    },
                                    SourceURI: "culpa",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "rerum",
                                                    Image: &shared.ImageInput{
                                                        AltText: "autem",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 364912,
                                                        },
                                                        SourceURI: "omnis",
                                                    },
                                                    IsOther: false,
                                                    Value: "quaerat",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "dolores",
                                                    Image: &shared.ImageInput{
                                                        AltText: "velit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 514054,
                                                        },
                                                        SourceURI: "minima",
                                                    },
                                                    IsOther: false,
                                                    Value: "aspernatur",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHECKBOX",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "at",
                                            MaxFileSize: "sed",
                                            MaxFiles: 395544,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "qui",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "maxime",
                                                            URI: "http://leon.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "culpa",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsum",
                                                            URI: "http://marlon.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "reiciendis",
                                                            YoutubeURI: "quisquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "est",
                                                            URI: "https://erna.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "ullam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quo",
                                                            URI: "https://haskell.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "esse",
                                                            YoutubeURI: "occaecati",
                                                        },
                                                    },
                                                },
                                                Text: "itaque",
                                            },
                                            PointValue: 267207,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "debitis",
                                                            URI: "http://gaetano.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "alias",
                                                            YoutubeURI: "explicabo",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolore",
                                                            URI: "https://emilio.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "vero",
                                                            YoutubeURI: "facilis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "praesentium",
                                                            URI: "http://irma.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "suscipit",
                                                            YoutubeURI: "sunt",
                                                        },
                                                    },
                                                },
                                                Text: "aut",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "rerum",
                                                            URI: "https://zachariah.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "autem",
                                                            YoutubeURI: "saepe",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "delectus",
                                                            URI: "http://paxton.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cum",
                                                            YoutubeURI: "incidunt",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "https://cullen.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorem",
                                                            YoutubeURI: "maxime",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "https://eldridge.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "adipisci",
                                                        },
                                                    },
                                                },
                                                Text: "quos",
                                            },
                                        },
                                        QuestionID: "quia",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Forward Operations Facilitator",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 437814,
                                            HighLabel: "eos",
                                            Low: 974990,
                                            LowLabel: "molestiae",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "beatae",
                                                    Image: &shared.ImageInput{
                                                        AltText: "illum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 102413,
                                                        },
                                                        SourceURI: "aut",
                                                    },
                                                    IsOther: false,
                                                    Value: "sequi",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "corporis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dolore",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 36561,
                                                        },
                                                        SourceURI: "nihil",
                                                    },
                                                    IsOther: false,
                                                    Value: "voluptate",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHOICE_TYPE_UNSPECIFIED",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "debitis",
                                            MaxFileSize: "similique",
                                            MaxFiles: 431994,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "recusandae",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "sed",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "est",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "laborum",
                                                            URI: "https://abdul.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "tempore",
                                                            URI: "http://dana.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "accusantium",
                                                            YoutubeURI: "eaque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "consequatur",
                                                            URI: "https://timmothy.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eligendi",
                                                            YoutubeURI: "autem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nihil",
                                                            URI: "https://laurine.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sed",
                                                            YoutubeURI: "tenetur",
                                                        },
                                                    },
                                                },
                                                Text: "blanditiis",
                                            },
                                            PointValue: 351936,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eveniet",
                                                            URI: "https://okey.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ex",
                                                            YoutubeURI: "libero",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolorum",
                                                            URI: "http://edwin.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "officiis",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "http://coy.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                },
                                                Text: "ea",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "maxime",
                                                            URI: "https://julianne.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "corrupti",
                                                            YoutubeURI: "ratione",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "alias",
                                                            URI: "http://hermina.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "veritatis",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                },
                                                Text: "quia",
                                            },
                                        },
                                        QuestionID: "ut",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Chief Security Manager",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 602229,
                                            HighLabel: "vero",
                                            Low: 714376,
                                            LowLabel: "et",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "nesciunt",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 342137,
                                    },
                                    SourceURI: "id",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "nam",
                                                Image: &shared.ImageInput{
                                                    AltText: "qui",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 637462,
                                                    },
                                                    SourceURI: "iste",
                                                },
                                                IsOther: false,
                                                Value: "vel",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "deleniti",
                                                Image: &shared.ImageInput{
                                                    AltText: "inventore",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 80061,
                                                    },
                                                    SourceURI: "ab",
                                                },
                                                IsOther: false,
                                                Value: "sint",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "possimus",
                                                Image: &shared.ImageInput{
                                                    AltText: "porro",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 418109,
                                                    },
                                                    SourceURI: "blanditiis",
                                                },
                                                IsOther: false,
                                                Value: "quia",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: false,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "odit",
                                        MaxFileSize: "libero",
                                        MaxFiles: 817339,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                            "DRAWING",
                                            "VIDEO",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "minus",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "in",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "velit",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "nihil",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "nihil",
                                                        URI: "https://florence.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aut",
                                                        YoutubeURI: "id",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "officiis",
                                                        URI: "http://carlo.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "nobis",
                                                        YoutubeURI: "sint",
                                                    },
                                                },
                                            },
                                            Text: "aperiam",
                                        },
                                        PointValue: 710456,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "dolor",
                                                        URI: "https://jayme.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "eos",
                                                        YoutubeURI: "consequuntur",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ea",
                                                        URI: "https://trenton.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "harum",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "veniam",
                                                        URI: "https://eunice.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "animi",
                                                        YoutubeURI: "voluptatum",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "sapiente",
                                                        URI: "https://caleb.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aliquam",
                                                        YoutubeURI: "sed",
                                                    },
                                                },
                                            },
                                            Text: "officiis",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quos",
                                                        URI: "https://stanton.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "amet",
                                                        YoutubeURI: "impedit",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "provident",
                                                        URI: "https://erick.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ipsam",
                                                        YoutubeURI: "sed",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ducimus",
                                                        URI: "https://hope.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ex",
                                                        YoutubeURI: "ullam",
                                                    },
                                                },
                                            },
                                            Text: "repudiandae",
                                        },
                                    },
                                    QuestionID: "reiciendis",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Legacy Program Producer",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 189753,
                                        HighLabel: "nostrum",
                                        Low: 520875,
                                        LowLabel: "in",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: false,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "dolor": "et",
                                "quibusdam": "nobis",
                            },
                            Title: "National Branding Consultant",
                            VideoItem: &shared.VideoItem{
                                Caption: "sapiente",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 878601,
                                    },
                                    YoutubeURI: "qui",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 997437,
                        },
                        UpdateMask: "et",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "commodi",
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "odio",
                TargetRevisionID: "quae",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Forms.FormsFormsBatchUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateFormResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->