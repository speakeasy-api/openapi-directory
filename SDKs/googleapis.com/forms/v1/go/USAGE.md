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
        DollarXgafv: "2",
        BatchUpdateFormRequestInput: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: false,
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "distinctio",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "quibusdam",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 857946,
                                    },
                                    SourceURI: "corrupti",
                                },
                            },
                            ItemID: "illum",
                            PageBreakItem: map[string]interface{}{
                                "error": "deserunt",
                                "suscipit": "iure",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "ipsa",
                                                Image: &shared.ImageInput{
                                                    AltText: "delectus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 383441,
                                                    },
                                                    SourceURI: "molestiae",
                                                },
                                                IsOther: false,
                                                Value: "minus",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "voluptatum",
                                                Image: &shared.ImageInput{
                                                    AltText: "iusto",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 392785,
                                                    },
                                                    SourceURI: "recusandae",
                                                },
                                                IsOther: false,
                                                Value: "temporibus",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "quis",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 648172,
                                    },
                                    SourceURI: "perferendis",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "quo",
                                                    Image: &shared.ImageInput{
                                                        AltText: "odit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 870088,
                                                        },
                                                        SourceURI: "maiores",
                                                    },
                                                    IsOther: false,
                                                    Value: "molestiae",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "quod",
                                                    Image: &shared.ImageInput{
                                                        AltText: "esse",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 780529,
                                                        },
                                                        SourceURI: "dolorum",
                                                    },
                                                    IsOther: false,
                                                    Value: "dicta",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "officia",
                                                    Image: &shared.ImageInput{
                                                        AltText: "occaecati",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 537373,
                                                        },
                                                        SourceURI: "hic",
                                                    },
                                                    IsOther: false,
                                                    Value: "optio",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "beatae",
                                                    Image: &shared.ImageInput{
                                                        AltText: "commodi",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 264555,
                                                        },
                                                        SourceURI: "qui",
                                                    },
                                                    IsOther: false,
                                                    Value: "impedit",
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
                                            FolderID: "esse",
                                            MaxFileSize: "ipsum",
                                            MaxFiles: 568434,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "natus",
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
                                                            DisplayText: "dolor",
                                                            URI: "https://hoarse-upper.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fuga",
                                                            YoutubeURI: "in",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corporis",
                                                            URI: "https://innocent-thinking.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "architecto",
                                                            YoutubeURI: "ipsa",
                                                        },
                                                    },
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
                                            PointValue: 750686,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "omnis",
                                                            URI: "http://general-mobster.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "iure",
                                                            YoutubeURI: "culpa",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "doloribus",
                                                            URI: "https://buttery-petitioner.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "culpa",
                                                            YoutubeURI: "consequuntur",
                                                        },
                                                    },
                                                },
                                                Text: "repellat",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "occaecati",
                                                            URI: "http://immediate-instructor.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "velit",
                                                            YoutubeURI: "error",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "http://cautious-poker.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "enim",
                                                            YoutubeURI: "odit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quo",
                                                            URI: "http://weary-fright.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "possimus",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "quasi",
                                            },
                                        },
                                        QuestionID: "error",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Dr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 673660,
                                            HighLabel: "quasi",
                                            Low: 971945,
                                            LowLabel: "voluptatibus",
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
                                                        AltText: "voluptatibus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 604846,
                                                        },
                                                        SourceURI: "voluptate",
                                                    },
                                                    IsOther: false,
                                                    Value: "cum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "doloremque",
                                                    Image: &shared.ImageInput{
                                                        AltText: "reprehenderit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 979587,
                                                        },
                                                        SourceURI: "dicta",
                                                    },
                                                    IsOther: false,
                                                    Value: "corporis",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "iusto",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dicta",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 317983,
                                                        },
                                                        SourceURI: "accusamus",
                                                    },
                                                    IsOther: false,
                                                    Value: "commodi",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "quae",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ipsum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 565189,
                                                        },
                                                        SourceURI: "excepturi",
                                                    },
                                                    IsOther: false,
                                                    Value: "pariatur",
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
                                            FolderID: "praesentium",
                                            MaxFileSize: "rem",
                                            MaxFiles: 916723,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "veritatis",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "itaque",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "incidunt",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "consequatur",
                                                            URI: "https://tender-carload.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "distinctio",
                                                            YoutubeURI: "quibusdam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "labore",
                                                            URI: "http://delightful-graph.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quos",
                                                            YoutubeURI: "perferendis",
                                                        },
                                                    },
                                                },
                                                Text: "magni",
                                            },
                                            PointValue: 828940,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "alias",
                                                            URI: "http://rapid-moat.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "facilis",
                                                            YoutubeURI: "tempore",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "labore",
                                                            URI: "https://infantile-demur.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sint",
                                                            YoutubeURI: "aliquid",
                                                        },
                                                    },
                                                },
                                                Text: "provident",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sint",
                                                            URI: "https://edible-tectonics.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorum",
                                                            YoutubeURI: "in",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "in",
                                                            URI: "https://wonderful-proof-reader.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "magnam",
                                                            YoutubeURI: "cumque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "facere",
                                                            URI: "http://humming-police.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "occaecati",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "https://white-printing.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nam",
                                                            YoutubeURI: "id",
                                                        },
                                                    },
                                                },
                                                Text: "blanditiis",
                                            },
                                        },
                                        QuestionID: "deleniti",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Dr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 230533,
                                            HighLabel: "deserunt",
                                            Low: 394869,
                                            LowLabel: "vel",
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
                                    AltText: "natus",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 474867,
                                    },
                                    SourceURI: "perferendis",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
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
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "eum",
                                                Image: &shared.ImageInput{
                                                    AltText: "vero",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 102863,
                                                    },
                                                    SourceURI: "magnam",
                                                },
                                                IsOther: false,
                                                Value: "et",
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
                                        FolderID: "ullam",
                                        MaxFileSize: "provident",
                                        MaxFiles: 551816,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "FILE_TYPE_UNSPECIFIED",
                                            "PDF",
                                            "AUDIO",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "ad",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "eum",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "dolor",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "odit",
                                                        URI: "http://bumpy-hosiery.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "debitis",
                                                        YoutubeURI: "eius",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "maxime",
                                                        URI: "https://rotating-identification.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "architecto",
                                                        YoutubeURI: "repudiandae",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ullam",
                                                        URI: "https://knobby-zither.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "sed",
                                                        YoutubeURI: "saepe",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "pariatur",
                                                        URI: "http://cute-lens.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "magni",
                                                        YoutubeURI: "sunt",
                                                    },
                                                },
                                            },
                                            Text: "quo",
                                        },
                                        PointValue: 848009,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "maxime",
                                                        URI: "http://nimble-caution.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "accusantium",
                                                        YoutubeURI: "ab",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "maiores",
                                                        URI: "https://harmonious-in-joke.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "nam",
                                                        YoutubeURI: "eaque",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "pariatur",
                                                        URI: "http://wise-airbag.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "amet",
                                                        YoutubeURI: "aut",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "cumque",
                                                        URI: "http://wasteful-rectangle.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "dolores",
                                                        YoutubeURI: "quis",
                                                    },
                                                },
                                            },
                                            Text: "totam",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "eaque",
                                                        URI: "http://disfigured-collapse.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "dolores",
                                                        YoutubeURI: "minus",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quam",
                                                        URI: "http://trusty-filter.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "recusandae",
                                                        YoutubeURI: "omnis",
                                                    },
                                                },
                                            },
                                            Text: "facilis",
                                        },
                                    },
                                    QuestionID: "perspiciatis",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Mr.",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 783645,
                                        HighLabel: "consequuntur",
                                        Low: 500026,
                                        LowLabel: "error",
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
                                "occaecati": "rerum",
                            },
                            Title: "Mrs.",
                            VideoItem: &shared.VideoItem{
                                Caption: "asperiores",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 267262,
                                    },
                                    YoutubeURI: "iste",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 679091,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 535633,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 864282,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 589910,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "nobis",
                            Title: "Miss",
                        },
                        UpdateMask: "delectus",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "quaerat",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "quos",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 212390,
                                    },
                                    SourceURI: "dolorem",
                                },
                            },
                            ItemID: "dolor",
                            PageBreakItem: map[string]interface{}{
                                "ipsum": "hic",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "voluptate",
                                                Image: &shared.ImageInput{
                                                    AltText: "dignissimos",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 227414,
                                                    },
                                                    SourceURI: "dolorum",
                                                },
                                                IsOther: false,
                                                Value: "numquam",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "ipsa",
                                                Image: &shared.ImageInput{
                                                    AltText: "ipsa",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 487838,
                                                    },
                                                    SourceURI: "quaerat",
                                                },
                                                IsOther: false,
                                                Value: "accusamus",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "voluptatibus",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptas",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 179603,
                                                    },
                                                    SourceURI: "atque",
                                                },
                                                IsOther: false,
                                                Value: "sit",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "ab",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 679393,
                                    },
                                    SourceURI: "iusto",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "omnis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "necessitatibus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 990339,
                                                        },
                                                        SourceURI: "nihil",
                                                    },
                                                    IsOther: false,
                                                    Value: "ipsum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "id",
                                                    Image: &shared.ImageInput{
                                                        AltText: "saepe",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 137220,
                                                        },
                                                        SourceURI: "perferendis",
                                                    },
                                                    IsOther: false,
                                                    Value: "amet",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "accusamus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ad",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 383464,
                                                        },
                                                        SourceURI: "deserunt",
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
                                            FolderID: "repellendus",
                                            MaxFileSize: "totam",
                                            MaxFiles: 628982,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "tempora",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "vel",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "officiis",
                                                            URI: "http://raw-venue.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "harum",
                                                            YoutubeURI: "iusto",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsum",
                                                            URI: "https://wavy-cuisine.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "accusamus",
                                                            YoutubeURI: "numquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "http://well-lit-literature.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "expedita",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "neque",
                                                            URI: "http://improbable-redhead.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "deserunt",
                                                            YoutubeURI: "quam",
                                                        },
                                                    },
                                                },
                                                Text: "ipsum",
                                            },
                                            PointValue: 277628,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "cupiditate",
                                                            URI: "https://tough-reunion.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "laborum",
                                                            YoutubeURI: "totam",
                                                        },
                                                    },
                                                },
                                                Text: "incidunt",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolores",
                                                            URI: "https://rotten-grandfather.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "molestias",
                                                            YoutubeURI: "temporibus",
                                                        },
                                                    },
                                                },
                                                Text: "qui",
                                            },
                                        },
                                        QuestionID: "neque",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 164959,
                                            HighLabel: "odio",
                                            Low: 124833,
                                            LowLabel: "ullam",
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
                                                    GoToSectionID: "voluptatem",
                                                    Image: &shared.ImageInput{
                                                        AltText: "cumque",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 748664,
                                                        },
                                                        SourceURI: "et",
                                                    },
                                                    IsOther: false,
                                                    Value: "saepe",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "veritatis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nobis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 731694,
                                                        },
                                                        SourceURI: "cupiditate",
                                                    },
                                                    IsOther: false,
                                                    Value: "aperiam",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "dolorem",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dolore",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 240829,
                                                        },
                                                        SourceURI: "dolorum",
                                                    },
                                                    IsOther: false,
                                                    Value: "architecto",
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
                                            FolderID: "aut",
                                            MaxFileSize: "quas",
                                            MaxFiles: 929530,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PDF",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "porro",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "doloribus",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "ut",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "facilis",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "http://magnificent-kangaroo.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatibus",
                                                            YoutubeURI: "quisquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vero",
                                                            URI: "https://glorious-crash.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptate",
                                                            YoutubeURI: "consectetur",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vero",
                                                            URI: "https://liquid-underweight.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quod",
                                                            YoutubeURI: "odio",
                                                        },
                                                    },
                                                },
                                                Text: "similique",
                                            },
                                            PointValue: 708548,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ducimus",
                                                            URI: "http://terrible-status.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "natus",
                                                            YoutubeURI: "impedit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "https://grateful-stumbling.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "porro",
                                                            YoutubeURI: "maiores",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "doloribus",
                                                            URI: "http://silver-lanai.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "officia",
                                                            YoutubeURI: "tempora",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsam",
                                                            URI: "http://concrete-hill.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "magnam",
                                                            YoutubeURI: "ratione",
                                                        },
                                                    },
                                                },
                                                Text: "ex",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dicta",
                                                            URI: "http://wordy-bother.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nulla",
                                                            YoutubeURI: "excepturi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatibus",
                                                            URI: "http://well-worn-sequence.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ea",
                                                            YoutubeURI: "impedit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corporis",
                                                            URI: "http://husky-bid.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ea",
                                                            YoutubeURI: "quo",
                                                        },
                                                    },
                                                },
                                                Text: "consectetur",
                                            },
                                        },
                                        QuestionID: "recusandae",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 325310,
                                            HighLabel: "eaque",
                                            Low: 952871,
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
                                    AltText: "aut",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 533466,
                                    },
                                    SourceURI: "impedit",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "accusamus",
                                                Image: &shared.ImageInput{
                                                    AltText: "inventore",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 89603,
                                                    },
                                                    SourceURI: "dolorum",
                                                },
                                                IsOther: false,
                                                Value: "laborum",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "velit",
                                                Image: &shared.ImageInput{
                                                    AltText: "eum",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 752135,
                                                    },
                                                    SourceURI: "quas",
                                                },
                                                IsOther: false,
                                                Value: "assumenda",
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
                                        FolderID: "voluptas",
                                        MaxFileSize: "libero",
                                        MaxFiles: 96549,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "DOCUMENT",
                                            "ANY",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "ipsa",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "molestiae",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "magnam",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "eius",
                                                        URI: "http://jolly-lord.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "reprehenderit",
                                                        YoutubeURI: "quidem",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "fugiat",
                                                        URI: "http://infantile-geek.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "eos",
                                                        YoutubeURI: "praesentium",
                                                    },
                                                },
                                            },
                                            Text: "quisquam",
                                        },
                                        PointValue: 86377,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "id",
                                                        URI: "https://dishonest-screw.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quo",
                                                        YoutubeURI: "fuga",
                                                    },
                                                },
                                            },
                                            Text: "eius",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "voluptas",
                                                        URI: "http://official-admin.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "debitis",
                                                        YoutubeURI: "ipsam",
                                                    },
                                                },
                                            },
                                            Text: "aspernatur",
                                        },
                                    },
                                    QuestionID: "sequi",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Miss",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 459856,
                                        HighLabel: "recusandae",
                                        Low: 44612,
                                        LowLabel: "distinctio",
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
                                "dignissimos": "inventore",
                                "nihil": "totam",
                                "accusamus": "aliquam",
                                "odio": "occaecati",
                            },
                            Title: "Ms.",
                            VideoItem: &shared.VideoItem{
                                Caption: "sapiente",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 645570,
                                    },
                                    YoutubeURI: "molestiae",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 35362,
                        },
                        UpdateMask: "porro",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "eum",
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "quas",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "praesentium",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 536178,
                                    },
                                    SourceURI: "fugit",
                                },
                            },
                            ItemID: "fuga",
                            PageBreakItem: map[string]interface{}{
                                "incidunt": "atque",
                                "explicabo": "minima",
                                "nisi": "fugit",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "ratione",
                                                Image: &shared.ImageInput{
                                                    AltText: "explicabo",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 578922,
                                                    },
                                                    SourceURI: "atque",
                                                },
                                                IsOther: false,
                                                Value: "et",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "eveniet",
                                                Image: &shared.ImageInput{
                                                    AltText: "accusamus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 458604,
                                                    },
                                                    SourceURI: "quod",
                                                },
                                                IsOther: false,
                                                Value: "nam",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "aliquid",
                                                Image: &shared.ImageInput{
                                                    AltText: "quasi",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 426306,
                                                    },
                                                    SourceURI: "harum",
                                                },
                                                IsOther: false,
                                                Value: "molestiae",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "occaecati",
                                                Image: &shared.ImageInput{
                                                    AltText: "minima",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 756779,
                                                    },
                                                    SourceURI: "sit",
                                                },
                                                IsOther: false,
                                                Value: "culpa",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHECKBOX",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "adipisci",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 160538,
                                    },
                                    SourceURI: "consequatur",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "consectetur",
                                                    Image: &shared.ImageInput{
                                                        AltText: "esse",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 590984,
                                                        },
                                                        SourceURI: "a",
                                                    },
                                                    IsOther: false,
                                                    Value: "nulla",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "esse",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quasi",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 621679,
                                                        },
                                                        SourceURI: "sint",
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
                                            FolderID: "quia",
                                            MaxFileSize: "eveniet",
                                            MaxFiles: 992430,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                                "ANY",
                                                "FILE_TYPE_UNSPECIFIED",
                                                "PDF",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "aliquid",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "tenetur",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "quae",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vel",
                                                            URI: "http://extra-small-recession.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "soluta",
                                                            YoutubeURI: "accusantium",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aliquam",
                                                            URI: "https://clear-fly.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ullam",
                                                            YoutubeURI: "nisi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "https://dense-stallion.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "deleniti",
                                                            YoutubeURI: "itaque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolorum",
                                                            URI: "http://paltry-utensil.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "at",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                },
                                                Text: "voluptate",
                                            },
                                            PointValue: 55965,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "veritatis",
                                                            URI: "http://enormous-orator.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "accusantium",
                                                            YoutubeURI: "rem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "https://inconsequential-performance.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "corrupti",
                                                            YoutubeURI: "non",
                                                        },
                                                    },
                                                },
                                                Text: "voluptatem",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "occaecati",
                                                            URI: "http://sneaky-cardigan.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aut",
                                                            YoutubeURI: "dignissimos",
                                                        },
                                                    },
                                                },
                                                Text: "dicta",
                                            },
                                        },
                                        QuestionID: "maiores",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Miss",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 244651,
                                            HighLabel: "voluptatibus",
                                            Low: 374323,
                                            LowLabel: "asperiores",
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
                                                    GoToSectionID: "quaerat",
                                                    Image: &shared.ImageInput{
                                                        AltText: "consequuntur",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 638762,
                                                        },
                                                        SourceURI: "maxime",
                                                    },
                                                    IsOther: false,
                                                    Value: "dignissimos",
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
                                            FolderID: "asperiores",
                                            MaxFileSize: "nemo",
                                            MaxFiles: 65304,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "IMAGE",
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "ab",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "adipisci",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "id",
                                                            URI: "http://everlasting-parking.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "recusandae",
                                                            YoutubeURI: "totam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "fugiat",
                                                            URI: "http://lonely-mentor.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "labore",
                                                            YoutubeURI: "possimus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "facilis",
                                                            URI: "https://immense-icing.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "reiciendis",
                                                            YoutubeURI: "assumenda",
                                                        },
                                                    },
                                                },
                                                Text: "nemo",
                                            },
                                            PointValue: 924967,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aperiam",
                                                            URI: "https://emotional-ignorant.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "earum",
                                                            YoutubeURI: "facere",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "numquam",
                                                            URI: "https://helpless-warming.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "saepe",
                                                            YoutubeURI: "necessitatibus",
                                                        },
                                                    },
                                                },
                                                Text: "dolore",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "asperiores",
                                                            URI: "http://excellent-crystal.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dignissimos",
                                                            YoutubeURI: "a",
                                                        },
                                                    },
                                                },
                                                Text: "debitis",
                                            },
                                        },
                                        QuestionID: "consectetur",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mrs.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 689768,
                                            HighLabel: "laboriosam",
                                            Low: 58356,
                                            LowLabel: "voluptates",
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
                                                    GoToSectionID: "accusamus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "similique",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 132815,
                                                        },
                                                        SourceURI: "voluptas",
                                                    },
                                                    IsOther: false,
                                                    Value: "voluptas",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "minima",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nobis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 237807,
                                                        },
                                                        SourceURI: "minus",
                                                    },
                                                    IsOther: false,
                                                    Value: "dolores",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "in",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dolore",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 885963,
                                                        },
                                                        SourceURI: "temporibus",
                                                    },
                                                    IsOther: false,
                                                    Value: "ullam",
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
                                            FolderID: "cum",
                                            MaxFileSize: "blanditiis",
                                            MaxFiles: 555361,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                                "PDF",
                                                "DRAWING",
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
                                                        Value: "exercitationem",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "nobis",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "rerum",
                                                            URI: "http://wide-carnation.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "facilis",
                                                            YoutubeURI: "voluptate",
                                                        },
                                                    },
                                                },
                                                Text: "expedita",
                                            },
                                            PointValue: 70869,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolore",
                                                            URI: "https://criminal-id.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quidem",
                                                            YoutubeURI: "explicabo",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptas",
                                                            URI: "https://burly-geometry.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "debitis",
                                                            YoutubeURI: "illo",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reiciendis",
                                                            URI: "http://motionless-whisker.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sed",
                                                            YoutubeURI: "provident",
                                                        },
                                                    },
                                                },
                                                Text: "eius",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsum",
                                                            URI: "http://obedient-medicine.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "tempora",
                                                            YoutubeURI: "tempora",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptate",
                                                            URI: "https://ideal-amendment.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "officiis",
                                                            YoutubeURI: "praesentium",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "facilis",
                                                            URI: "http://feline-futon.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "rem",
                                                            YoutubeURI: "sit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nobis",
                                                            URI: "https://glass-eyelid.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "reiciendis",
                                                            YoutubeURI: "nulla",
                                                        },
                                                    },
                                                },
                                                Text: "magni",
                                            },
                                        },
                                        QuestionID: "aperiam",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Dr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 253642,
                                            HighLabel: "veniam",
                                            Low: 446135,
                                            LowLabel: "officiis",
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
                                                    GoToSectionID: "exercitationem",
                                                    Image: &shared.ImageInput{
                                                        AltText: "praesentium",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 386827,
                                                        },
                                                        SourceURI: "dolorum",
                                                    },
                                                    IsOther: false,
                                                    Value: "voluptatum",
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
                                            FolderID: "hic",
                                            MaxFileSize: "expedita",
                                            MaxFiles: 892863,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PDF",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "officia",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "dolorum",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "accusamus",
                                                            URI: "http://monthly-chapter.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fugiat",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "culpa",
                                                            URI: "https://forceful-activity.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ipsam",
                                                            YoutubeURI: "sit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatum",
                                                            URI: "https://valid-forestry.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "blanditiis",
                                                            YoutubeURI: "ex",
                                                        },
                                                    },
                                                },
                                                Text: "sed",
                                            },
                                            PointValue: 24313,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nostrum",
                                                            URI: "https://phony-ad.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "reiciendis",
                                                            YoutubeURI: "dolorem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "harum",
                                                            URI: "http://burly-morsel.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quidem",
                                                            YoutubeURI: "atque",
                                                        },
                                                    },
                                                },
                                                Text: "laborum",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "tenetur",
                                                            URI: "http://adorable-cruelty.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptate",
                                                            YoutubeURI: "unde",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reiciendis",
                                                            URI: "https://talkative-volcano.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "perferendis",
                                                            YoutubeURI: "est",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quidem",
                                                            URI: "http://stupendous-pray.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "mollitia",
                                                            YoutubeURI: "veniam",
                                                        },
                                                    },
                                                },
                                                Text: "voluptatem",
                                            },
                                        },
                                        QuestionID: "quisquam",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Dr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 97243,
                                            HighLabel: "atque",
                                            Low: 442036,
                                            LowLabel: "asperiores",
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
                                    AltText: "totam",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 693957,
                                    },
                                    SourceURI: "maxime",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "amet",
                                                Image: &shared.ImageInput{
                                                    AltText: "assumenda",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 539118,
                                                    },
                                                    SourceURI: "error",
                                                },
                                                IsOther: false,
                                                Value: "officiis",
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
                                        FolderID: "accusamus",
                                        MaxFileSize: "natus",
                                        MaxFiles: 328303,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "corrupti",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "at",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "error",
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
                                                        DisplayText: "repudiandae",
                                                        URI: "https://modest-cactus.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "dolorum",
                                                        YoutubeURI: "repellendus",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "labore",
                                                        URI: "https://arctic-tracking.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "accusantium",
                                                        YoutubeURI: "beatae",
                                                    },
                                                },
                                            },
                                            Text: "dolores",
                                        },
                                        PointValue: 316488,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "velit",
                                                        URI: "https://negative-election.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "consequuntur",
                                                        YoutubeURI: "occaecati",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "officiis",
                                                        URI: "https://international-dame.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "occaecati",
                                                        YoutubeURI: "consequuntur",
                                                    },
                                                },
                                            },
                                            Text: "fugit",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quis",
                                                        URI: "http://pitiful-beginner.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quidem",
                                                        YoutubeURI: "eveniet",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "non",
                                                        URI: "https://any-hope.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "totam",
                                                        YoutubeURI: "quae",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "molestiae",
                                                        URI: "https://delirious-representation.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "necessitatibus",
                                                        YoutubeURI: "ratione",
                                                    },
                                                },
                                            },
                                            Text: "laborum",
                                        },
                                    },
                                    QuestionID: "distinctio",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Ms.",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 523006,
                                        HighLabel: "aliquam",
                                        Low: 320565,
                                        LowLabel: "repellat",
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
                                "corporis": "perspiciatis",
                            },
                            Title: "Ms.",
                            VideoItem: &shared.VideoItem{
                                Caption: "mollitia",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 5189,
                                    },
                                    YoutubeURI: "maiores",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 970222,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 174658,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 663866,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 327988,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "dolore",
                            Title: "Miss",
                        },
                        UpdateMask: "nesciunt",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "quae",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "recusandae",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 309251,
                                    },
                                    SourceURI: "molestiae",
                                },
                            },
                            ItemID: "ex",
                            PageBreakItem: map[string]interface{}{
                                "culpa": "adipisci",
                                "debitis": "laudantium",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "recusandae",
                                                Image: &shared.ImageInput{
                                                    AltText: "esse",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 337477,
                                                    },
                                                    SourceURI: "eum",
                                                },
                                                IsOther: false,
                                                Value: "reiciendis",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "aspernatur",
                                                Image: &shared.ImageInput{
                                                    AltText: "ullam",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 657020,
                                                    },
                                                    SourceURI: "nostrum",
                                                },
                                                IsOther: false,
                                                Value: "mollitia",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHECKBOX",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "possimus",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 402767,
                                    },
                                    SourceURI: "aliquid",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "ullam",
                                                    Image: &shared.ImageInput{
                                                        AltText: "in",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 937636,
                                                        },
                                                        SourceURI: "officia",
                                                    },
                                                    IsOther: false,
                                                    Value: "laborum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "modi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "voluptatibus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 889794,
                                                        },
                                                        SourceURI: "sapiente",
                                                    },
                                                    IsOther: false,
                                                    Value: "cumque",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "rerum",
                                                    Image: &shared.ImageInput{
                                                        AltText: "tempora",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 82057,
                                                        },
                                                        SourceURI: "fugit",
                                                    },
                                                    IsOther: false,
                                                    Value: "cumque",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "perferendis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "velit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 432281,
                                                        },
                                                        SourceURI: "eius",
                                                    },
                                                    IsOther: false,
                                                    Value: "rem",
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
                                            FolderID: "impedit",
                                            MaxFileSize: "eos",
                                            MaxFiles: 958741,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "ANY",
                                                "PRESENTATION",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "cupiditate",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "earum",
                                                            URI: "https://warlike-station.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "earum",
                                                            YoutubeURI: "perspiciatis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "maiores",
                                                            URI: "https://icky-seal.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorem",
                                                            YoutubeURI: "fugit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "cumque",
                                                            URI: "https://deserted-piano.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nulla",
                                                            YoutubeURI: "consequatur",
                                                        },
                                                    },
                                                },
                                                Text: "quasi",
                                            },
                                            PointValue: 90233,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "natus",
                                                            URI: "https://hidden-deal.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "magni",
                                                            YoutubeURI: "doloribus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nulla",
                                                            URI: "https://babyish-dissemination.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "molestiae",
                                                            YoutubeURI: "dicta",
                                                        },
                                                    },
                                                },
                                                Text: "iusto",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "praesentium",
                                                            URI: "https://wicked-hellcat.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fugiat",
                                                            YoutubeURI: "doloremque",
                                                        },
                                                    },
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
                                        },
                                        QuestionID: "laborum",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 344718,
                                            HighLabel: "fugiat",
                                            Low: 713767,
                                            LowLabel: "aliquid",
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
                                    AltText: "officia",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 399161,
                                    },
                                    SourceURI: "perferendis",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "iste",
                                                Image: &shared.ImageInput{
                                                    AltText: "id",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 625358,
                                                    },
                                                    SourceURI: "possimus",
                                                },
                                                IsOther: false,
                                                Value: "voluptates",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "laborum",
                                                Image: &shared.ImageInput{
                                                    AltText: "libero",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 536923,
                                                    },
                                                    SourceURI: "enim",
                                                },
                                                IsOther: false,
                                                Value: "vitae",
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
                                        FolderID: "ex",
                                        MaxFileSize: "quo",
                                        MaxFiles: 405373,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "PRESENTATION",
                                            "IMAGE",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "molestias",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "aliquid",
                                                        URI: "http://messy-occupation.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "rerum",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "culpa",
                                                        URI: "http://well-off-tax.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "fuga",
                                                        YoutubeURI: "pariatur",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "debitis",
                                                        URI: "http://able-makeup.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ex",
                                                        YoutubeURI: "sapiente",
                                                    },
                                                },
                                            },
                                            Text: "rem",
                                        },
                                        PointValue: 796320,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "asperiores",
                                                        URI: "http://gross-album.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "totam",
                                                        YoutubeURI: "impedit",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quibusdam",
                                                        URI: "https://harmonious-parenthesis.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aliquam",
                                                        YoutubeURI: "inventore",
                                                    },
                                                },
                                            },
                                            Text: "deleniti",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "tempora",
                                                        URI: "http://acidic-bower.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "modi",
                                                        YoutubeURI: "fugit",
                                                    },
                                                },
                                            },
                                            Text: "ab",
                                        },
                                    },
                                    QuestionID: "laudantium",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Mr.",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 222658,
                                        HighLabel: "fugiat",
                                        Low: 369490,
                                        LowLabel: "consequuntur",
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
                                "quas": "eveniet",
                            },
                            Title: "Miss",
                            VideoItem: &shared.VideoItem{
                                Caption: "officiis",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 897277,
                                    },
                                    YoutubeURI: "sed",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 332191,
                        },
                        UpdateMask: "nesciunt",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "expedita",
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "eum",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "vel",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 301692,
                                    },
                                    SourceURI: "exercitationem",
                                },
                            },
                            ItemID: "ab",
                            PageBreakItem: map[string]interface{}{
                                "autem": "nobis",
                                "laboriosam": "recusandae",
                                "consequuntur": "voluptatem",
                                "exercitationem": "necessitatibus",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "at",
                                                Image: &shared.ImageInput{
                                                    AltText: "vero",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 690785,
                                                    },
                                                    SourceURI: "sequi",
                                                },
                                                IsOther: false,
                                                Value: "doloribus",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "optio",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 364544,
                                    },
                                    SourceURI: "voluptate",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "numquam",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nemo",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 260904,
                                                        },
                                                        SourceURI: "aspernatur",
                                                    },
                                                    IsOther: false,
                                                    Value: "ducimus",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "fuga",
                                                    Image: &shared.ImageInput{
                                                        AltText: "laudantium",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 97493,
                                                        },
                                                        SourceURI: "rem",
                                                    },
                                                    IsOther: false,
                                                    Value: "fugiat",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "nisi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "consequuntur",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 46806,
                                                        },
                                                        SourceURI: "cupiditate",
                                                    },
                                                    IsOther: false,
                                                    Value: "reiciendis",
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
                                            FolderID: "alias",
                                            MaxFileSize: "omnis",
                                            MaxFiles: 178580,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PDF",
                                                "ANY",
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "accusamus",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "voluptatibus",
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
                                                            DisplayText: "delectus",
                                                            URI: "http://lumbering-sibling.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "temporibus",
                                                            YoutubeURI: "quos",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "commodi",
                                                            URI: "https://impassioned-local.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "modi",
                                                            YoutubeURI: "nam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vero",
                                                            URI: "http://harmful-heron.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quasi",
                                                            YoutubeURI: "non",
                                                        },
                                                    },
                                                },
                                                Text: "maiores",
                                            },
                                            PointValue: 318233,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nulla",
                                                            URI: "https://joyous-fourths.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "est",
                                                            YoutubeURI: "quis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sint",
                                                            URI: "https://soggy-usher.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "asperiores",
                                                            YoutubeURI: "ex",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptas",
                                                            URI: "https://whole-banyan.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fuga",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                },
                                                Text: "consectetur",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "atque",
                                                            URI: "http://sociable-class.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "repudiandae",
                                                            YoutubeURI: "nam",
                                                        },
                                                    },
                                                },
                                                Text: "dolore",
                                            },
                                        },
                                        QuestionID: "iusto",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Ms.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 194023,
                                            HighLabel: "dignissimos",
                                            Low: 205566,
                                            LowLabel: "quo",
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
                                                    GoToSectionID: "iure",
                                                    Image: &shared.ImageInput{
                                                        AltText: "odit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 426904,
                                                        },
                                                        SourceURI: "magnam",
                                                    },
                                                    IsOther: false,
                                                    Value: "quibusdam",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "facere",
                                                    Image: &shared.ImageInput{
                                                        AltText: "libero",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 975425,
                                                        },
                                                        SourceURI: "quia",
                                                    },
                                                    IsOther: false,
                                                    Value: "porro",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "velit",
                                                    Image: &shared.ImageInput{
                                                        AltText: "illo",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 424663,
                                                        },
                                                        SourceURI: "ea",
                                                    },
                                                    IsOther: false,
                                                    Value: "beatae",
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
                                            FolderID: "excepturi",
                                            MaxFileSize: "eum",
                                            MaxFiles: 246557,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DRAWING",
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "impedit",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "iste",
                                                            URI: "https://adorable-goodbye.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "velit",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "non",
                                                            URI: "http://left-amber.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequatur",
                                                            YoutubeURI: "officia",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "recusandae",
                                                            URI: "http://required-gasket.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "placeat",
                                                            YoutubeURI: "perspiciatis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "expedita",
                                                            URI: "https://weird-income.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "unde",
                                                            YoutubeURI: "necessitatibus",
                                                        },
                                                    },
                                                },
                                                Text: "animi",
                                            },
                                            PointValue: 769967,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corporis",
                                                            URI: "https://petty-indication.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "veritatis",
                                                            YoutubeURI: "vero",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "consectetur",
                                                            URI: "http://bogus-counsel.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "iste",
                                                        },
                                                    },
                                                },
                                                Text: "ex",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "soluta",
                                                            URI: "https://mellow-pony.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fugit",
                                                            YoutubeURI: "alias",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "magni",
                                                            URI: "http://belated-bandolier.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "neque",
                                                            YoutubeURI: "exercitationem",
                                                        },
                                                    },
                                                },
                                                Text: "itaque",
                                            },
                                        },
                                        QuestionID: "et",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mrs.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 602229,
                                            HighLabel: "nulla",
                                            Low: 714376,
                                            LowLabel: "maxime",
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
                                                    GoToSectionID: "nostrum",
                                                    Image: &shared.ImageInput{
                                                        AltText: "omnis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 115661,
                                                        },
                                                        SourceURI: "id",
                                                    },
                                                    IsOther: false,
                                                    Value: "libero",
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
                                            FolderID: "officia",
                                            MaxFileSize: "quos",
                                            MaxFiles: 811939,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "SPREADSHEET",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "voluptates",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aperiam",
                                                            URI: "https://flippant-robotics.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatem",
                                                            YoutubeURI: "autem",
                                                        },
                                                    },
                                                },
                                                Text: "esse",
                                            },
                                            PointValue: 172951,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "beatae",
                                                            URI: "https://submissive-masterpiece.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "provident",
                                                            YoutubeURI: "accusamus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "necessitatibus",
                                                            URI: "https://noteworthy-halt.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ipsam",
                                                            YoutubeURI: "rerum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "laudantium",
                                                            URI: "http://unhappy-waterspout.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "at",
                                                            YoutubeURI: "alias",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "https://realistic-trachoma.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "expedita",
                                                            YoutubeURI: "officiis",
                                                        },
                                                    },
                                                },
                                                Text: "eos",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "odio",
                                                            URI: "https://constant-cap.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "error",
                                                            YoutubeURI: "earum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "adipisci",
                                                            URI: "https://pleasing-drapes.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quis",
                                                            YoutubeURI: "beatae",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "unde",
                                                            URI: "http://whimsical-mystery.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "numquam",
                                                            YoutubeURI: "numquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nesciunt",
                                                            URI: "https://popular-kitty.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "necessitatibus",
                                                            YoutubeURI: "corporis",
                                                        },
                                                    },
                                                },
                                                Text: "qui",
                                            },
                                        },
                                        QuestionID: "expedita",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Ms.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 587375,
                                            HighLabel: "minima",
                                            Low: 809594,
                                            LowLabel: "enim",
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
                                    AltText: "neque",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 796397,
                                    },
                                    SourceURI: "eum",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "magnam",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptates",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 731744,
                                                    },
                                                    SourceURI: "aperiam",
                                                },
                                                IsOther: false,
                                                Value: "libero",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "labore",
                                                Image: &shared.ImageInput{
                                                    AltText: "totam",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 375994,
                                                    },
                                                    SourceURI: "quo",
                                                },
                                                IsOther: false,
                                                Value: "velit",
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
                                        FolderID: "fuga",
                                        MaxFileSize: "nostrum",
                                        MaxFiles: 669237,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "AUDIO",
                                            "IMAGE",
                                            "VIDEO",
                                            "ANY",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "pariatur",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "nemo",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "reprehenderit",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "aperiam",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "minima",
                                                        URI: "http://lone-mission.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "error",
                                                        YoutubeURI: "veritatis",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ducimus",
                                                        URI: "http://tragic-tuba.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "optio",
                                                        YoutubeURI: "ex",
                                                    },
                                                },
                                            },
                                            Text: "quaerat",
                                        },
                                        PointValue: 416692,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "placeat",
                                                        URI: "https://gray-innovation.biz",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "modi",
                                                        YoutubeURI: "ipsa",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "sint",
                                                        URI: "https://diligent-tower.net",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "dicta",
                                                        YoutubeURI: "earum",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "veniam",
                                                        URI: "https://decisive-real.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "consequuntur",
                                                        YoutubeURI: "necessitatibus",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "nobis",
                                                        URI: "http://lone-wholesale.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quasi",
                                                        YoutubeURI: "laboriosam",
                                                    },
                                                },
                                            },
                                            Text: "pariatur",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "excepturi",
                                                        URI: "https://handy-encirclement.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "doloribus",
                                                        YoutubeURI: "eligendi",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "sint",
                                                        URI: "http://watchful-pickaxe.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "totam",
                                                        YoutubeURI: "molestias",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "odio",
                                                        URI: "http://unselfish-breadfruit.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "iste",
                                                        YoutubeURI: "assumenda",
                                                    },
                                                },
                                            },
                                            Text: "tempore",
                                        },
                                    },
                                    QuestionID: "libero",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Mrs.",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 38557,
                                        HighLabel: "delectus",
                                        Low: 773110,
                                        LowLabel: "cum",
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
                                "adipisci": "saepe",
                            },
                            Title: "Miss",
                            VideoItem: &shared.VideoItem{
                                Caption: "doloremque",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 333072,
                                    },
                                    YoutubeURI: "libero",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 99733,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 584593,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 475589,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 756654,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "possimus",
                            Title: "Mrs.",
                        },
                        UpdateMask: "magnam",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "itaque",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "sed",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 330267,
                                    },
                                    SourceURI: "consequuntur",
                                },
                            },
                            ItemID: "facere",
                            PageBreakItem: map[string]interface{}{
                                "odit": "pariatur",
                                "amet": "exercitationem",
                                "ab": "velit",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "nisi",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptatibus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 503748,
                                                    },
                                                    SourceURI: "distinctio",
                                                },
                                                IsOther: false,
                                                Value: "nisi",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "nisi",
                                                Image: &shared.ImageInput{
                                                    AltText: "libero",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 815200,
                                                    },
                                                    SourceURI: "facilis",
                                                },
                                                IsOther: false,
                                                Value: "ipsum",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "voluptatibus",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptatibus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 891581,
                                                    },
                                                    SourceURI: "labore",
                                                },
                                                IsOther: false,
                                                Value: "rerum",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "reprehenderit",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 207296,
                                    },
                                    SourceURI: "iusto",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "fugiat",
                                                    Image: &shared.ImageInput{
                                                        AltText: "unde",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 495617,
                                                        },
                                                        SourceURI: "dolor",
                                                    },
                                                    IsOther: false,
                                                    Value: "dicta",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "porro",
                                                    Image: &shared.ImageInput{
                                                        AltText: "vitae",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 458970,
                                                        },
                                                        SourceURI: "fugiat",
                                                    },
                                                    IsOther: false,
                                                    Value: "ad",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "enim",
                                                    Image: &shared.ImageInput{
                                                        AltText: "delectus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 491201,
                                                        },
                                                        SourceURI: "libero",
                                                    },
                                                    IsOther: false,
                                                    Value: "illo",
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
                                            FolderID: "incidunt",
                                            MaxFileSize: "accusamus",
                                            MaxFiles: 902581,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PRESENTATION",
                                                "ANY",
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "reprehenderit",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "praesentium",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "nemo",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "repellat",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sequi",
                                                            URI: "http://minor-beech.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "assumenda",
                                                            YoutubeURI: "aliquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quisquam",
                                                            URI: "https://male-trailpatrol.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "maxime",
                                                            YoutubeURI: "aspernatur",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nam",
                                                            URI: "https://nautical-nest.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "rerum",
                                                            YoutubeURI: "dignissimos",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corporis",
                                                            URI: "https://pleasant-spectrograph.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorem",
                                                            YoutubeURI: "commodi",
                                                        },
                                                    },
                                                },
                                                Text: "impedit",
                                            },
                                            PointValue: 415033,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatem",
                                                            URI: "http://baggy-cultivar.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "praesentium",
                                                            YoutubeURI: "quidem",
                                                        },
                                                    },
                                                },
                                                Text: "cum",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quasi",
                                                            URI: "http://male-argument.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "iusto",
                                                            YoutubeURI: "amet",
                                                        },
                                                    },
                                                },
                                                Text: "provident",
                                            },
                                        },
                                        QuestionID: "dolorum",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Dr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 592880,
                                            HighLabel: "repudiandae",
                                            Low: 10063,
                                            LowLabel: "nemo",
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
                                                    GoToSectionID: "facilis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "corrupti",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 574092,
                                                        },
                                                        SourceURI: "accusamus",
                                                    },
                                                    IsOther: false,
                                                    Value: "eos",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "dicta",
                                                    Image: &shared.ImageInput{
                                                        AltText: "voluptatem",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 224413,
                                                        },
                                                        SourceURI: "sunt",
                                                    },
                                                    IsOther: false,
                                                    Value: "a",
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
                                            FolderID: "occaecati",
                                            MaxFileSize: "atque",
                                            MaxFiles: 107472,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                                "IMAGE",
                                                "SPREADSHEET",
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "rerum",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aperiam",
                                                            URI: "http://zealous-decision-making.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "provident",
                                                            YoutubeURI: "consectetur",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eligendi",
                                                            URI: "http://energetic-response.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "temporibus",
                                                            YoutubeURI: "officia",
                                                        },
                                                    },
                                                },
                                                Text: "amet",
                                            },
                                            PointValue: 948541,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quo",
                                                            URI: "https://these-pliers.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "vero",
                                                            YoutubeURI: "qui",
                                                        },
                                                    },
                                                },
                                                Text: "consectetur",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "explicabo",
                                                            URI: "http://green-interviewer.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ab",
                                                            YoutubeURI: "illo",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "hic",
                                                            URI: "https://white-depth.net",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "in",
                                                            YoutubeURI: "exercitationem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "labore",
                                                            URI: "http://vain-dirt.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "explicabo",
                                                            YoutubeURI: "accusamus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "rem",
                                                            URI: "http://conventional-mallet.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptate",
                                                            YoutubeURI: "similique",
                                                        },
                                                    },
                                                },
                                                Text: "minima",
                                            },
                                        },
                                        QuestionID: "libero",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mrs.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 24272,
                                            HighLabel: "modi",
                                            Low: 430116,
                                            LowLabel: "nesciunt",
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
                                                    GoToSectionID: "fugiat",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nostrum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 330600,
                                                        },
                                                        SourceURI: "reiciendis",
                                                    },
                                                    IsOther: false,
                                                    Value: "ab",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "aut",
                                                    Image: &shared.ImageInput{
                                                        AltText: "aut",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 483753,
                                                        },
                                                        SourceURI: "commodi",
                                                    },
                                                    IsOther: false,
                                                    Value: "numquam",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "possimus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "voluptate",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 200637,
                                                        },
                                                        SourceURI: "quaerat",
                                                    },
                                                    IsOther: false,
                                                    Value: "itaque",
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
                                            FolderID: "sunt",
                                            MaxFileSize: "distinctio",
                                            MaxFiles: 481375,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                                "IMAGE",
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "fuga",
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
                                                            DisplayText: "aut",
                                                            URI: "https://mad-speaker.com",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quae",
                                                            YoutubeURI: "eaque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "saepe",
                                                            URI: "https://prime-strawman.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sed",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "alias",
                                                            URI: "https://warm-ancestor.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "qui",
                                                        },
                                                    },
                                                },
                                                Text: "necessitatibus",
                                            },
                                            PointValue: 691508,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "beatae",
                                                            URI: "http://familiar-ruckus.org",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "molestias",
                                                            YoutubeURI: "officia",
                                                        },
                                                    },
                                                },
                                                Text: "libero",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sequi",
                                                            URI: "http://imaginative-schema.info",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "odit",
                                                            YoutubeURI: "velit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reiciendis",
                                                            URI: "https://tired-plot.name",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "accusamus",
                                                            YoutubeURI: "doloremque",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nisi",
                                                            URI: "https://vast-tomorrow.biz",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "rem",
                                                            YoutubeURI: "quia",
                                                        },
                                                    },
                                                },
                                                Text: "ullam",
                                            },
                                        },
                                        QuestionID: "quisquam",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "Mr.",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 973017,
                                            HighLabel: "eligendi",
                                            Low: 62035,
                                            LowLabel: "officiis",
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
                                    AltText: "architecto",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 317898,
                                    },
                                    SourceURI: "optio",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "facilis",
                                                Image: &shared.ImageInput{
                                                    AltText: "reiciendis",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 615058,
                                                    },
                                                    SourceURI: "dicta",
                                                },
                                                IsOther: false,
                                                Value: "quos",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "dolore",
                                                Image: &shared.ImageInput{
                                                    AltText: "modi",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 807419,
                                                    },
                                                    SourceURI: "modi",
                                                },
                                                IsOther: false,
                                                Value: "consequuntur",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "vero",
                                                Image: &shared.ImageInput{
                                                    AltText: "doloribus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 783397,
                                                    },
                                                    SourceURI: "accusamus",
                                                },
                                                IsOther: false,
                                                Value: "totam",
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
                                        FolderID: "ab",
                                        MaxFileSize: "sint",
                                        MaxFiles: 472414,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                            "SPREADSHEET",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "debitis",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "neque",
                                                        URI: "http://hateful-citron.name",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "reprehenderit",
                                                        YoutubeURI: "distinctio",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "eius",
                                                        URI: "http://measly-whack.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "veniam",
                                                        YoutubeURI: "saepe",
                                                    },
                                                },
                                            },
                                            Text: "neque",
                                        },
                                        PointValue: 816365,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quos",
                                                        URI: "https://this-platform.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "velit",
                                                        YoutubeURI: "vitae",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "nesciunt",
                                                        URI: "https://blank-zen.info",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "doloribus",
                                                        YoutubeURI: "possimus",
                                                    },
                                                },
                                            },
                                            Text: "unde",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "explicabo",
                                                        URI: "http://obvious-rum.com",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quidem",
                                                        YoutubeURI: "nesciunt",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "commodi",
                                                        URI: "https://damp-face.org",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "officia",
                                                        YoutubeURI: "sint",
                                                    },
                                                },
                                            },
                                            Text: "ut",
                                        },
                                    },
                                    QuestionID: "numquam",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "Dr.",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 236790,
                                        HighLabel: "libero",
                                        Low: 448386,
                                        LowLabel: "minima",
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
                                "minus": "ab",
                                "beatae": "hic",
                            },
                            Title: "Mrs.",
                            VideoItem: &shared.VideoItem{
                                Caption: "quisquam",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 496548,
                                    },
                                    YoutubeURI: "fuga",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 326903,
                        },
                        UpdateMask: "architecto",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "qui",
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "aliquid",
                TargetRevisionID: "magni",
            },
        },
        AccessToken: "incidunt",
        Alt: "json",
        Callback: "praesentium",
        Fields: "dolor",
        FormID: "exercitationem",
        Key: "expedita",
        OauthToken: "facilis",
        PrettyPrint: false,
        QuotaUser: "impedit",
        UploadType: "sit",
        UploadProtocol: "nemo",
    }

    ctx := context.Background()
    res, err := s.Forms.FormsFormsBatchUpdate(ctx, req, operations.FormsFormsBatchUpdateSecurity{
        Option1: &operations.FormsFormsBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateFormResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->