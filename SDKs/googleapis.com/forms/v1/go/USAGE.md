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
            FormID: "corrupti",
        },
        QueryParams: operations.FormsFormsBatchUpdateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: false,
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "iure",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "magnam",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 56713,
                                    },
                                    SourceURI: "delectus",
                                },
                            },
                            ItemID: "tempora",
                            PageBreakItem: map[string]interface{}{
                                "molestiae": "minus",
                                "placeat": "voluptatum",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "nisi",
                                                Image: &shared.ImageInput{
                                                    AltText: "recusandae",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 71036,
                                                    },
                                                    SourceURI: "quis",
                                                },
                                                IsOther: false,
                                                Value: "veritatis",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "perferendis",
                                                Image: &shared.ImageInput{
                                                    AltText: "ipsam",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 957156,
                                                    },
                                                    SourceURI: "quo",
                                                },
                                                IsOther: false,
                                                Value: "odit",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "at",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 473608,
                                    },
                                    SourceURI: "quod",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "porro",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dolorum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 720633,
                                                        },
                                                        SourceURI: "officia",
                                                    },
                                                    IsOther: false,
                                                    Value: "occaecati",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "deleniti",
                                                    Image: &shared.ImageInput{
                                                        AltText: "hic",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 521848,
                                                        },
                                                        SourceURI: "beatae",
                                                    },
                                                    IsOther: false,
                                                    Value: "commodi",
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
                                            FolderID: "modi",
                                            MaxFileSize: "qui",
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
                                                        Value: "perferendis",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "natus",
                                                            URI: "http://passionate-crewman.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "laboriosam",
                                                            YoutubeURI: "hic",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "saepe",
                                                            URI: "https://itchy-forager.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "iure",
                                                            YoutubeURI: "saepe",
                                                        },
                                                    },
                                                },
                                                Text: "quidem",
                                            },
                                            PointValue: 99280,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reiciendis",
                                                            URI: "https://prize-plier.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorem",
                                                            YoutubeURI: "corporis",
                                                        },
                                                    },
                                                },
                                                Text: "explicabo",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "https://gummy-expedition.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "accusantium",
                                                            YoutubeURI: "iure",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "culpa",
                                                            URI: "https://well-off-brace.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorem",
                                                            YoutubeURI: "culpa",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "consequuntur",
                                                            URI: "https://prize-mud.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "commodi",
                                                            YoutubeURI: "quam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "molestiae",
                                                            URI: "http://physical-chord.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "vitae",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                },
                                                Text: "animi",
                                            },
                                        },
                                        QuestionID: "enim",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 778346,
                                            HighLabel: "sequi",
                                            Low: 949572,
                                            LowLabel: "ipsam",
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
                                                    GoToSectionID: "aut",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quasi",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 837945,
                                                        },
                                                        SourceURI: "laborum",
                                                    },
                                                    IsOther: false,
                                                    Value: "quasi",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "voluptatibus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "vero",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 509624,
                                                        },
                                                        SourceURI: "voluptatibus",
                                                    },
                                                    IsOther: false,
                                                    Value: "ipsa",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "voluptate",
                                                    Image: &shared.ImageInput{
                                                        AltText: "cum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 39187,
                                                        },
                                                        SourceURI: "reprehenderit",
                                                    },
                                                    IsOther: false,
                                                    Value: "ut",
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
                                            MaxFileSize: "corporis",
                                            MaxFiles: 296140,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "ANY",
                                                "PDF",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "accusamus",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "commodi",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quae",
                                                            URI: "http://repentant-minnow.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "pariatur",
                                                            YoutubeURI: "modi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "praesentium",
                                                            URI: "https://useful-bonnet.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sint",
                                                            YoutubeURI: "veritatis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "itaque",
                                                            URI: "http://fruitful-adjective.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quibusdam",
                                                            YoutubeURI: "explicabo",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "deserunt",
                                                            URI: "https://tempting-durian.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "aliquid",
                                                        },
                                                    },
                                                },
                                                Text: "cupiditate",
                                            },
                                            PointValue: 552822,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "magni",
                                                            URI: "https://hard-accordion.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorum",
                                                            YoutubeURI: "excepturi",
                                                        },
                                                    },
                                                },
                                                Text: "tempora",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "tempore",
                                                            URI: "http://which-honor.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eligendi",
                                                            YoutubeURI: "sint",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aliquid",
                                                            URI: "https://unlined-mole.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolor",
                                                            YoutubeURI: "debitis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "a",
                                                            URI: "https://intrepid-ikebana.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "maiores",
                                                            YoutubeURI: "rerum",
                                                        },
                                                    },
                                                },
                                                Text: "dicta",
                                            },
                                        },
                                        QuestionID: "magnam",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Miss",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 813798,
                                            HighLabel: "ea",
                                            Low: 396506,
                                            LowLabel: "laborum",
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
                                                    GoToSectionID: "occaecati",
                                                    Image: &shared.ImageInput{
                                                        AltText: "enim",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 965417,
                                                        },
                                                        SourceURI: "quidem",
                                                    },
                                                    IsOther: false,
                                                    Value: "provident",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "id",
                                                    Image: &shared.ImageInput{
                                                        AltText: "blanditiis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 956084,
                                                        },
                                                        SourceURI: "amet",
                                                    },
                                                    IsOther: false,
                                                    Value: "deserunt",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "vel",
                                                    Image: &shared.ImageInput{
                                                        AltText: "natus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 474867,
                                                        },
                                                        SourceURI: "perferendis",
                                                    },
                                                    IsOther: false,
                                                    Value: "nihil",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "distinctio",
                                                    Image: &shared.ImageInput{
                                                        AltText: "id",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 290077,
                                                        },
                                                        SourceURI: "suscipit",
                                                    },
                                                    IsOther: false,
                                                    Value: "natus",
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
                                            FolderID: "eum",
                                            MaxFileSize: "vero",
                                            MaxFiles: 135474,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "excepturi",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "provident",
                                                            URI: "https://noted-antling.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "reiciendis",
                                                            YoutubeURI: "mollitia",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ad",
                                                            URI: "http://easy-going-term.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nemo",
                                                            YoutubeURI: "quasi",
                                                        },
                                                    },
                                                },
                                                Text: "iure",
                                            },
                                            PointValue: 984043,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eius",
                                                            URI: "https://miserly-pruner.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "architecto",
                                                            YoutubeURI: "architecto",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "repudiandae",
                                                            URI: "http://safe-interconnection.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quibusdam",
                                                            YoutubeURI: "sed",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "saepe",
                                                            URI: "https://another-circuit.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "natus",
                                                            YoutubeURI: "magni",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sunt",
                                                            URI: "https://these-subroutine.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ea",
                                                            YoutubeURI: "excepturi",
                                                        },
                                                    },
                                                },
                                                Text: "odit",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "accusantium",
                                                            URI: "http://worn-programme.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptate",
                                                            YoutubeURI: "autem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nam",
                                                            URI: "http://tragic-framework.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "perferendis",
                                                            YoutubeURI: "fugiat",
                                                        },
                                                    },
                                                },
                                                Text: "amet",
                                            },
                                        },
                                        QuestionID: "aut",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Miss",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 359978,
                                            HighLabel: "hic",
                                            Low: 729991,
                                            LowLabel: "nobis",
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
                                                    GoToSectionID: "totam",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dignissimos",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 338985,
                                                        },
                                                        SourceURI: "nesciunt",
                                                    },
                                                    IsOther: false,
                                                    Value: "eos",
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
                                            FolderID: "dolores",
                                            MaxFileSize: "minus",
                                            MaxFiles: 463451,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "hic",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "recusandae",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "facilis",
                                                            URI: "https://amusing-sediment.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "blanditiis",
                                                            YoutubeURI: "error",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eaque",
                                                            URI: "https://right-damage.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "earum",
                                                            YoutubeURI: "modi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "iste",
                                                            URI: "https://minty-subgroup.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nobis",
                                                            YoutubeURI: "libero",
                                                        },
                                                    },
                                                },
                                                Text: "delectus",
                                            },
                                            PointValue: 311945,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aliquid",
                                                            URI: "http://dopey-crewmate.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ipsum",
                                                            YoutubeURI: "hic",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "excepturi",
                                                            URI: "https://jam-packed-kingdom.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "amet",
                                                            YoutubeURI: "dolorum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "numquam",
                                                            URI: "http://awkward-azimuth.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "odio",
                                                            YoutubeURI: "quaerat",
                                                        },
                                                    },
                                                },
                                                Text: "accusamus",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatibus",
                                                            URI: "http://perky-collar.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "fugiat",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ab",
                                                            URI: "https://rash-jeans.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorum",
                                                            YoutubeURI: "deleniti",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "omnis",
                                                            URI: "https://safe-world.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ipsum",
                                                            YoutubeURI: "voluptate",
                                                        },
                                                    },
                                                },
                                                Text: "id",
                                            },
                                        },
                                        QuestionID: "saepe",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mrs.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 137220,
                                            HighLabel: "perferendis",
                                            Low: 229219,
                                            LowLabel: "optio",
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
                                    AltText: "accusamus",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 904425,
                                    },
                                    SourceURI: "suscipit",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "minima",
                                                Image: &shared.ImageInput{
                                                    AltText: "repellendus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 628982,
                                                    },
                                                    SourceURI: "alias",
                                                },
                                                IsOther: false,
                                                Value: "at",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "tempora",
                                                Image: &shared.ImageInput{
                                                    AltText: "vel",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 885338,
                                                    },
                                                    SourceURI: "qui",
                                                },
                                                IsOther: false,
                                                Value: "dolorum",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "esse",
                                                Image: &shared.ImageInput{
                                                    AltText: "harum",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 215507,
                                                    },
                                                    SourceURI: "quisquam",
                                                },
                                                IsOther: false,
                                                Value: "tenetur",
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
                                        FolderID: "tempore",
                                        MaxFileSize: "accusamus",
                                        MaxFiles: 253941,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "DOCUMENT",
                                            "AUDIO",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "nihil",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "sit",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "expedita",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "sed",
                                                        URI: "http://self-assured-gale.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quam",
                                                        YoutubeURI: "ipsum",
                                                    },
                                                },
                                            },
                                            Text: "incidunt",
                                        },
                                        PointValue: 186458,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "maxime",
                                                        URI: "https://short-business.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "totam",
                                                        YoutubeURI: "incidunt",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "aspernatur",
                                                        URI: "http://sandy-psychoanalyst.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quam",
                                                        YoutubeURI: "molestias",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "temporibus",
                                                        URI: "http://dirty-chain.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "odio",
                                                        YoutubeURI: "sunt",
                                                    },
                                                },
                                            },
                                            Text: "ullam",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "hic",
                                                        URI: "http://slushy-return.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "saepe",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ipsum",
                                                        URI: "http://shrill-medium.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "cupiditate",
                                                        YoutubeURI: "aperiam",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "delectus",
                                                        URI: "http://flimsy-duck.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "dolorum",
                                                        YoutubeURI: "architecto",
                                                    },
                                                },
                                            },
                                            Text: "quae",
                                        },
                                    },
                                    QuestionID: "aut",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Ms.",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 929530,
                                        HighLabel: "consequatur",
                                        Low: 669917,
                                        LowLabel: "repellendus",
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
                                "doloribus": "ut",
                                "facilis": "cupiditate",
                                "qui": "quae",
                                "laudantium": "odio",
                            },
                            Title: "Ms.",
                            VideoItem: &shared.VideoItem{
                                Caption: "voluptatibus",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 876506,
                                    },
                                    YoutubeURI: "omnis",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 338159,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 218403,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 961571,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 455169,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "consectetur",
                            Title: "Dr.",
                        },
                        UpdateMask: "tenetur",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "dignissimos",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "hic",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 799203,
                                    },
                                    SourceURI: "odio",
                                },
                            },
                            ItemID: "similique",
                            PageBreakItem: map[string]interface{}{
                                "vero": "ducimus",
                                "dolore": "quibusdam",
                                "illum": "sequi",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "aut",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptatibus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 862310,
                                                    },
                                                    SourceURI: "fugit",
                                                },
                                                IsOther: false,
                                                Value: "porro",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "doloribus",
                                                Image: &shared.ImageInput{
                                                    AltText: "iusto",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 497391,
                                                    },
                                                    SourceURI: "alias",
                                                },
                                                IsOther: false,
                                                Value: "officia",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "ipsam",
                                                Image: &shared.ImageInput{
                                                    AltText: "ea",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 428224,
                                                    },
                                                    SourceURI: "possimus",
                                                },
                                                IsOther: false,
                                                Value: "magnam",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "ex",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 120657,
                                    },
                                    SourceURI: "dolor",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "nulla",
                                                    Image: &shared.ImageInput{
                                                        AltText: "excepturi",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 343605,
                                                        },
                                                        SourceURI: "sapiente",
                                                    },
                                                    IsOther: false,
                                                    Value: "quisquam",
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
                                            FolderID: "ea",
                                            MaxFileSize: "impedit",
                                            MaxFiles: 359271,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PRESENTATION",
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "ea",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "quo",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "recusandae",
                                                            URI: "http://general-authentication.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "libero",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "aut",
                                            },
                                            PointValue: 533466,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aliquam",
                                                            URI: "http://unconscious-benefit.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "dolorum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "laborum",
                                                            URI: "https://evergreen-homogenate.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nobis",
                                                            YoutubeURI: "quas",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "assumenda",
                                                            URI: "https://heavenly-receipt.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "tempora",
                                                            YoutubeURI: "numquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "explicabo",
                                                            URI: "https://aware-jackal.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "odio",
                                                            YoutubeURI: "eius",
                                                        },
                                                    },
                                                },
                                                Text: "esse",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "rem",
                                                            URI: "https://insubstantial-produce.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ut",
                                                            YoutubeURI: "eum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "suscipit",
                                                            URI: "https://delayed-letter.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "veritatis",
                                                            YoutubeURI: "ipsa",
                                                        },
                                                    },
                                                },
                                                Text: "id",
                                            },
                                        },
                                        QuestionID: "quidem",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mrs.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 778696,
                                            HighLabel: "illum",
                                            Low: 777408,
                                            LowLabel: "fuga",
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
                                                    GoToSectionID: "voluptas",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ab",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 9688,
                                                        },
                                                        SourceURI: "tempora",
                                                    },
                                                    IsOther: false,
                                                    Value: "debitis",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "aspernatur",
                                                    Image: &shared.ImageInput{
                                                        AltText: "sequi",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 459856,
                                                        },
                                                        SourceURI: "recusandae",
                                                    },
                                                    IsOther: false,
                                                    Value: "aperiam",
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
                                            FolderID: "quod",
                                            MaxFileSize: "dignissimos",
                                            MaxFiles: 76956,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DRAWING",
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "odio",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "occaecati",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sapiente",
                                                            URI: "http://present-island.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "porro",
                                                            YoutubeURI: "eum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quas",
                                                            URI: "https://cumbersome-mama.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fuga",
                                                            YoutubeURI: "mollitia",
                                                        },
                                                    },
                                                },
                                                Text: "incidunt",
                                            },
                                            PointValue: 539224,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "minima",
                                                            URI: "http://costly-vicinity.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ratione",
                                                            YoutubeURI: "explicabo",
                                                        },
                                                    },
                                                },
                                                Text: "saepe",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "atque",
                                                            URI: "http://jovial-toaster.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "veritatis",
                                                            YoutubeURI: "esse",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quod",
                                                            URI: "https://turbulent-gravitas.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "saepe",
                                                            YoutubeURI: "vel",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "harum",
                                                            URI: "http://right-mouse.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "distinctio",
                                                            YoutubeURI: "eligendi",
                                                        },
                                                    },
                                                },
                                                Text: "sit",
                                            },
                                        },
                                        QuestionID: "culpa",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Miss",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 240020,
                                            HighLabel: "cumque",
                                            Low: 160538,
                                            LowLabel: "consequatur",
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
                                                    GoToSectionID: "sapiente",
                                                    Image: &shared.ImageInput{
                                                        AltText: "consectetur",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 503427,
                                                        },
                                                        SourceURI: "provident",
                                                    },
                                                    IsOther: false,
                                                    Value: "a",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "quas",
                                                    Image: &shared.ImageInput{
                                                        AltText: "esse",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 951875,
                                                        },
                                                        SourceURI: "error",
                                                    },
                                                    IsOther: false,
                                                    Value: "sint",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "possimus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quia",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 992430,
                                                        },
                                                        SourceURI: "facere",
                                                    },
                                                    IsOther: false,
                                                    Value: "veritatis",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "quasi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "similique",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 398434,
                                                        },
                                                        SourceURI: "tenetur",
                                                    },
                                                    IsOther: false,
                                                    Value: "quae",
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
                                            FolderID: "vel",
                                            MaxFileSize: "in",
                                            MaxFiles: 258684,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "VIDEO",
                                                "IMAGE",
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "sapiente",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "dicta",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reprehenderit",
                                                            URI: "http://horrible-aide.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "quibusdam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ex",
                                                            URI: "https://vicious-port.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "omnis",
                                                            YoutubeURI: "tenetur",
                                                        },
                                                    },
                                                },
                                                Text: "quasi",
                                            },
                                            PointValue: 869489,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptate",
                                                            URI: "http://gentle-bladder.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "adipisci",
                                                            YoutubeURI: "iste",
                                                        },
                                                    },
                                                },
                                                Text: "temporibus",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "rem",
                                                            URI: "http://majestic-hippopotamus.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ab",
                                                            YoutubeURI: "corrupti",
                                                        },
                                                    },
                                                },
                                                Text: "non",
                                            },
                                        },
                                        QuestionID: "voluptatem",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mrs.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 580152,
                                            HighLabel: "numquam",
                                            Low: 771089,
                                            LowLabel: "explicabo",
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
                                                    GoToSectionID: "dignissimos",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dicta",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 618480,
                                                        },
                                                        SourceURI: "velit",
                                                    },
                                                    IsOther: false,
                                                    Value: "voluptatibus",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "asperiores",
                                                    Image: &shared.ImageInput{
                                                        AltText: "aperiam",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 310067,
                                                        },
                                                        SourceURI: "consequuntur",
                                                    },
                                                    IsOther: false,
                                                    Value: "repellendus",
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
                                            FolderID: "maxime",
                                            MaxFileSize: "dignissimos",
                                            MaxFiles: 640024,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PRESENTATION",
                                                "FILE_TYPE_UNSPECIFIED",
                                                "PRESENTATION",
                                                "IMAGE",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "labore",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "ab",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "adipisci",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "fuga",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "suscipit",
                                                            URI: "http://polite-placement.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "totam",
                                                            YoutubeURI: "fugiat",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vel",
                                                            URI: "http://mysterious-highway.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "possimus",
                                                            YoutubeURI: "facilis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "cum",
                                                            URI: "http://intrepid-forehead.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "assumenda",
                                                            YoutubeURI: "nemo",
                                                        },
                                                    },
                                                },
                                                Text: "recusandae",
                                            },
                                            PointValue: 397533,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "cum",
                                                            URI: "http://irritating-fishbone.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "facere",
                                                            YoutubeURI: "numquam",
                                                        },
                                                    },
                                                },
                                                Text: "doloribus",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reiciendis",
                                                            URI: "https://untimely-termite.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sunt",
                                                            YoutubeURI: "asperiores",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "adipisci",
                                                            URI: "http://elegant-brick.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "a",
                                                            YoutubeURI: "debitis",
                                                        },
                                                    },
                                                },
                                                Text: "consectetur",
                                            },
                                        },
                                        QuestionID: "corporis",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Miss",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 385237,
                                            HighLabel: "ipsa",
                                            Low: 916727,
                                            LowLabel: "libero",
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
                                    AltText: "vitae",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 631126,
                                    },
                                    SourceURI: "tempora",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "voluptas",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptas",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 748789,
                                                    },
                                                    SourceURI: "dolorum",
                                                },
                                                IsOther: false,
                                                Value: "adipisci",
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
                                        FolderID: "dolores",
                                        MaxFileSize: "blanditiis",
                                        MaxFiles: 449292,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "PRESENTATION",
                                            "VIDEO",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "ullam",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "adipisci",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "cum",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "blanditiis",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "hic",
                                                        URI: "http://polite-maybe.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "totam",
                                                        YoutubeURI: "hic",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "exercitationem",
                                                        URI: "https://alarming-propaganda.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "reiciendis",
                                                        YoutubeURI: "explicabo",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "asperiores",
                                                        URI: "https://jagged-purchase.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "iste",
                                                        YoutubeURI: "dolore",
                                                    },
                                                },
                                            },
                                            Text: "laborum",
                                        },
                                        PointValue: 152354,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "commodi",
                                                        URI: "https://common-gather.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "architecto",
                                                        YoutubeURI: "suscipit",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "sapiente",
                                                        URI: "https://bitter-want.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "corrupti",
                                                        YoutubeURI: "maiores",
                                                    },
                                                },
                                            },
                                            Text: "incidunt",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "provident",
                                                        URI: "http://unlucky-cousin.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "occaecati",
                                                        YoutubeURI: "quos",
                                                    },
                                                },
                                            },
                                            Text: "voluptatibus",
                                        },
                                    },
                                    QuestionID: "tempora",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Mrs.",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 455444,
                                        HighLabel: "reiciendis",
                                        Low: 401713,
                                        LowLabel: "sit",
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
                                "officiis": "praesentium",
                            },
                            Title: "Miss",
                            VideoItem: &shared.VideoItem{
                                Caption: "quaerat",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 373035,
                                    },
                                    YoutubeURI: "debitis",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 524970,
                        },
                        UpdateMask: "sit",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "nobis",
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "error",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "veniam",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 924159,
                                    },
                                    SourceURI: "reiciendis",
                                },
                            },
                            ItemID: "nulla",
                            PageBreakItem: map[string]interface{}{
                                "aperiam": "saepe",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "in",
                                                Image: &shared.ImageInput{
                                                    AltText: "officiis",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 512452,
                                                    },
                                                    SourceURI: "exercitationem",
                                                },
                                                IsOther: false,
                                                Value: "praesentium",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "laboriosam",
                                                Image: &shared.ImageInput{
                                                    AltText: "dolorum",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 622385,
                                                    },
                                                    SourceURI: "hic",
                                                },
                                                IsOther: false,
                                                Value: "expedita",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "neque",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 341698,
                                    },
                                    SourceURI: "officia",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "tempora",
                                                    Image: &shared.ImageInput{
                                                        AltText: "atque",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 282699,
                                                        },
                                                        SourceURI: "fugiat",
                                                    },
                                                    IsOther: false,
                                                    Value: "voluptatem",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "expedita",
                                                    Image: &shared.ImageInput{
                                                        AltText: "magnam",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 460220,
                                                        },
                                                        SourceURI: "ipsam",
                                                    },
                                                    IsOther: false,
                                                    Value: "sit",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "quas",
                                                    Image: &shared.ImageInput{
                                                        AltText: "repudiandae",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 89494,
                                                        },
                                                        SourceURI: "blanditiis",
                                                    },
                                                    IsOther: false,
                                                    Value: "ex",
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
                                            FolderID: "sit",
                                            MaxFileSize: "vel",
                                            MaxFiles: 342611,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PDF",
                                                "FILE_TYPE_UNSPECIFIED",
                                                "DOCUMENT",
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "harum",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "architecto",
                                                            URI: "https://flawed-proctor.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "laborum",
                                                            YoutubeURI: "nam",
                                                        },
                                                    },
                                                },
                                                Text: "tenetur",
                                            },
                                            PointValue: 388867,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "amet",
                                                            URI: "https://joint-novel.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "provident",
                                                            YoutubeURI: "repellendus",
                                                        },
                                                    },
                                                },
                                                Text: "delectus",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "perferendis",
                                                            URI: "https://revolving-humidity.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fuga",
                                                            YoutubeURI: "praesentium",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "mollitia",
                                                            URI: "http://amazing-setback.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quasi",
                                                            YoutubeURI: "atque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reprehenderit",
                                                            URI: "https://meager-gerbil.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "maxime",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "esse",
                                                            URI: "http://surprised-hammock.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "error",
                                                            YoutubeURI: "officiis",
                                                        },
                                                    },
                                                },
                                                Text: "officiis",
                                            },
                                        },
                                        QuestionID: "accusamus",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Miss",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 328303,
                                            HighLabel: "aspernatur",
                                            Low: 404425,
                                            LowLabel: "maiores",
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
                                                    GoToSectionID: "error",
                                                    Image: &shared.ImageInput{
                                                        AltText: "blanditiis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 922348,
                                                        },
                                                        SourceURI: "atque",
                                                    },
                                                    IsOther: false,
                                                    Value: "atque",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "recusandae",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dolorum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 287119,
                                                        },
                                                        SourceURI: "reiciendis",
                                                    },
                                                    IsOther: false,
                                                    Value: "doloremque",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "dicta",
                                                    Image: &shared.ImageInput{
                                                        AltText: "accusantium",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 174772,
                                                        },
                                                        SourceURI: "enim",
                                                    },
                                                    IsOther: false,
                                                    Value: "laboriosam",
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
                                            FolderID: "a",
                                            MaxFileSize: "molestias",
                                            MaxFiles: 300029,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "ANY",
                                                "DRAWING",
                                                "VIDEO",
                                                "DRAWING",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "adipisci",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "eveniet",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "consequuntur",
                                                            URI: "http://pure-fashion.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "error",
                                                            YoutubeURI: "illo",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corporis",
                                                            URI: "https://unwitting-degree.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "doloremque",
                                                            YoutubeURI: "iure",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsa",
                                                            URI: "https://baggy-iron.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "cum",
                                                        },
                                                    },
                                                },
                                                Text: "iure",
                                            },
                                            PointValue: 898063,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "laborum",
                                                            URI: "https://menacing-logo.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ad",
                                                            YoutubeURI: "repellat",
                                                        },
                                                    },
                                                },
                                                Text: "alias",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "perspiciatis",
                                                            URI: "http://prickly-gateway.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "maiores",
                                                            YoutubeURI: "reiciendis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolores",
                                                            URI: "https://giant-earthquake.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nesciunt",
                                                            YoutubeURI: "quae",
                                                        },
                                                    },
                                                },
                                                Text: "recusandae",
                                            },
                                        },
                                        QuestionID: "omnis",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mrs.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 477646,
                                            HighLabel: "ex",
                                            Low: 284000,
                                            LowLabel: "culpa",
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
                                                    GoToSectionID: "laudantium",
                                                    Image: &shared.ImageInput{
                                                        AltText: "eum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 928219,
                                                        },
                                                        SourceURI: "esse",
                                                    },
                                                    IsOther: false,
                                                    Value: "provident",
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
                                            FolderID: "eum",
                                            MaxFileSize: "reiciendis",
                                            MaxFiles: 592780,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PRESENTATION",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "animi",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "mollitia",
                                                            URI: "https://sunny-pigeon.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aliquid",
                                                            YoutubeURI: "accusantium",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "repellat",
                                                            URI: "https://grim-identity.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "earum",
                                                            YoutubeURI: "officia",
                                                        },
                                                    },
                                                },
                                                Text: "laborum",
                                            },
                                            PointValue: 813054,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatibus",
                                                            URI: "https://unhealthy-view.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "vitae",
                                                            YoutubeURI: "rerum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "tempora",
                                                            URI: "http://boiling-chaos.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quae",
                                                            YoutubeURI: "perferendis",
                                                        },
                                                    },
                                                },
                                                Text: "velit",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eum",
                                                            URI: "http://mean-sunrise.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eos",
                                                            YoutubeURI: "sapiente",
                                                        },
                                                    },
                                                },
                                                Text: "eum",
                                            },
                                        },
                                        QuestionID: "dicta",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mrs.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 107004,
                                            HighLabel: "cupiditate",
                                            Low: 589695,
                                            LowLabel: "earum",
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
                                    AltText: "soluta",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 848151,
                                    },
                                    SourceURI: "eaque",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "maiores",
                                                Image: &shared.ImageInput{
                                                    AltText: "debitis",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 780931,
                                                    },
                                                    SourceURI: "suscipit",
                                                },
                                                IsOther: false,
                                                Value: "dolorem",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "cumque",
                                                Image: &shared.ImageInput{
                                                    AltText: "fuga",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 656762,
                                                    },
                                                    SourceURI: "necessitatibus",
                                                },
                                                IsOther: false,
                                                Value: "nulla",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "quasi",
                                                Image: &shared.ImageInput{
                                                    AltText: "et",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 619183,
                                                    },
                                                    SourceURI: "occaecati",
                                                },
                                                IsOther: false,
                                                Value: "suscipit",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "quasi",
                                                Image: &shared.ImageInput{
                                                    AltText: "magni",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 859581,
                                                    },
                                                    SourceURI: "necessitatibus",
                                                },
                                                IsOther: false,
                                                Value: "ipsa",
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
                                        FolderID: "nihil",
                                        MaxFileSize: "molestiae",
                                        MaxFiles: 115834,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                            "DRAWING",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "reiciendis",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "vel",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "architecto",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "fugiat",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "dicta",
                                                        URI: "http://fat-infant.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "consectetur",
                                                        YoutubeURI: "aliquid",
                                                    },
                                                },
                                            },
                                            Text: "ipsa",
                                        },
                                        PointValue: 671384,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "nostrum",
                                                        URI: "https://sad-great-grandfather.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "suscipit",
                                                        YoutubeURI: "aliquid",
                                                    },
                                                },
                                            },
                                            Text: "perferendis",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "voluptas",
                                                        URI: "https://pure-bassoon.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "possimus",
                                                        YoutubeURI: "voluptates",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "mollitia",
                                                        URI: "https://scratchy-existence.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "enim",
                                                        YoutubeURI: "vitae",
                                                    },
                                                },
                                            },
                                            Text: "repellendus",
                                        },
                                    },
                                    QuestionID: "ex",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Miss",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 405373,
                                        HighLabel: "ut",
                                        Low: 321043,
                                        LowLabel: "expedita",
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
                                "molestias": "cum",
                            },
                            Title: "Mrs.",
                            VideoItem: &shared.VideoItem{
                                Caption: "beatae",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 606308,
                                    },
                                    YoutubeURI: "veritatis",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 703218,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 665678,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 634786,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 29634,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "sapiente",
                            Title: "Dr.",
                        },
                        UpdateMask: "architecto",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "fuga",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "pariatur",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 29190,
                                    },
                                    SourceURI: "alias",
                                },
                            },
                            ItemID: "deleniti",
                            PageBreakItem: map[string]interface{}{
                                "ex": "sapiente",
                                "rem": "minus",
                                "nemo": "asperiores",
                                "ratione": "ullam",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "totam",
                                                Image: &shared.ImageInput{
                                                    AltText: "impedit",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 720528,
                                                    },
                                                    SourceURI: "ipsam",
                                                },
                                                IsOther: false,
                                                Value: "culpa",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "aliquam",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 537279,
                                    },
                                    SourceURI: "veritatis",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "architecto",
                                                    Image: &shared.ImageInput{
                                                        AltText: "sit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 144286,
                                                        },
                                                        SourceURI: "ab",
                                                    },
                                                    IsOther: false,
                                                    Value: "laudantium",
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
                                            FolderID: "dolor",
                                            MaxFileSize: "fugiat",
                                            MaxFiles: 369490,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "eveniet",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "impedit",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "officiis",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "necessitatibus",
                                                            URI: "http://glamorous-constraint.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eum",
                                                            YoutubeURI: "vel",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatum",
                                                            URI: "http://great-bath.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "autem",
                                                            YoutubeURI: "nobis",
                                                        },
                                                    },
                                                },
                                                Text: "laboriosam",
                                            },
                                            PointValue: 927212,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatem",
                                                            URI: "http://unlined-boom.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "at",
                                                            YoutubeURI: "vero",
                                                        },
                                                    },
                                                },
                                                Text: "est",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sequi",
                                                            URI: "https://utilized-rowing.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nemo",
                                                            YoutubeURI: "voluptate",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "blanditiis",
                                                            URI: "https://haunting-destroyer.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quos",
                                                            YoutubeURI: "eius",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aspernatur",
                                                            URI: "http://disgusting-post.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "incidunt",
                                                            YoutubeURI: "quasi",
                                                        },
                                                    },
                                                },
                                                Text: "rem",
                                            },
                                        },
                                        QuestionID: "fugiat",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 395544,
                                            HighLabel: "consequuntur",
                                            Low: 233078,
                                            LowLabel: "aperiam",
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
                                                    GoToSectionID: "soluta",
                                                    Image: &shared.ImageInput{
                                                        AltText: "alias",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 178580,
                                                        },
                                                        SourceURI: "occaecati",
                                                    },
                                                    IsOther: false,
                                                    Value: "iste",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "inventore",
                                                    Image: &shared.ImageInput{
                                                        AltText: "fuga",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 976802,
                                                        },
                                                        SourceURI: "distinctio",
                                                    },
                                                    IsOther: false,
                                                    Value: "omnis",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "minima",
                                                    Image: &shared.ImageInput{
                                                        AltText: "praesentium",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 300403,
                                                        },
                                                        SourceURI: "temporibus",
                                                    },
                                                    IsOther: false,
                                                    Value: "quos",
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
                                            FolderID: "itaque",
                                            MaxFileSize: "commodi",
                                            MaxFiles: 520761,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                                "IMAGE",
                                                "VIDEO",
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "vel",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "alias",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "non",
                                                            URI: "https://fruitful-moody.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "deserunt",
                                                            YoutubeURI: "esse",
                                                        },
                                                    },
                                                },
                                                Text: "nemo",
                                            },
                                            PointValue: 444587,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quis",
                                                            URI: "https://unaware-scheme.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "necessitatibus",
                                                            YoutubeURI: "asperiores",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ex",
                                                            URI: "http://unlawful-wake.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "minus",
                                                            YoutubeURI: "fuga",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "laborum",
                                                            URI: "http://even-mankind.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "impedit",
                                                            YoutubeURI: "magni",
                                                        },
                                                    },
                                                },
                                                Text: "soluta",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nam",
                                                            URI: "http://leafy-improvement.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dignissimos",
                                                            YoutubeURI: "neque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quo",
                                                            URI: "https://terrible-hourglass.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatibus",
                                                            YoutubeURI: "vel",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "magnam",
                                                            URI: "https://blond-snake.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "architecto",
                                                            YoutubeURI: "voluptatibus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "https://fragrant-definition.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "accusantium",
                                                            YoutubeURI: "vel",
                                                        },
                                                    },
                                                },
                                                Text: "ea",
                                            },
                                        },
                                        QuestionID: "beatae",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Dr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 568218,
                                            HighLabel: "eum",
                                            Low: 246557,
                                            LowLabel: "ut",
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
                                    AltText: "perspiciatis",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 117525,
                                    },
                                    SourceURI: "impedit",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "itaque",
                                                Image: &shared.ImageInput{
                                                    AltText: "alias",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 931505,
                                                    },
                                                    SourceURI: "velit",
                                                },
                                                IsOther: false,
                                                Value: "laborum",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "dolor",
                                                Image: &shared.ImageInput{
                                                    AltText: "iusto",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 39992,
                                                    },
                                                    SourceURI: "consequatur",
                                                },
                                                IsOther: false,
                                                Value: "officia",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "ea",
                                                Image: &shared.ImageInput{
                                                    AltText: "quidem",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 705148,
                                                    },
                                                    SourceURI: "placeat",
                                                },
                                                IsOther: false,
                                                Value: "perspiciatis",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "deleniti",
                                                Image: &shared.ImageInput{
                                                    AltText: "a",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 351936,
                                                    },
                                                    SourceURI: "unde",
                                                },
                                                IsOther: false,
                                                Value: "necessitatibus",
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
                                        FolderID: "impedit",
                                        MaxFileSize: "ipsam",
                                        MaxFiles: 357425,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "PDF",
                                            "SPREADSHEET",
                                            "DOCUMENT",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "vero",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "vitae",
                                                        URI: "http://drafty-exchange.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "iste",
                                                        YoutubeURI: "ex",
                                                    },
                                                },
                                            },
                                            Text: "nemo",
                                        },
                                        PointValue: 745233,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "rem",
                                                        URI: "https://likable-chafe.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "magni",
                                                        YoutubeURI: "vel",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quae",
                                                        URI: "http://false-corner.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "itaque",
                                                        YoutubeURI: "et",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ipsum",
                                                        URI: "https://tight-quit.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quia",
                                                        YoutubeURI: "quia",
                                                    },
                                                },
                                            },
                                            Text: "nostrum",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "libero",
                                                        URI: "http://putrid-recipe.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "officia",
                                                        YoutubeURI: "quos",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "placeat",
                                                        URI: "http://lavish-back.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "inventore",
                                                        YoutubeURI: "aperiam",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "totam",
                                                        URI: "http://simple-rabbi.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "autem",
                                                        YoutubeURI: "esse",
                                                    },
                                                },
                                            },
                                            Text: "dolores",
                                        },
                                    },
                                    QuestionID: "assumenda",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Mr.",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 668606,
                                        HighLabel: "facere",
                                        Low: 545918,
                                        LowLabel: "molestiae",
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
                                "accusamus": "necessitatibus",
                                "tempore": "sint",
                                "ea": "autem",
                            },
                            Title: "Mrs.",
                            VideoItem: &shared.VideoItem{
                                Caption: "rerum",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 357207,
                                    },
                                    YoutubeURI: "officiis",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 972912,
                        },
                        UpdateMask: "cum",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "at",
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "alias",
                TargetRevisionID: "quia",
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