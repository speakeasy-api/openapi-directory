# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
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
            FormID: "quo",
        },
        QueryParams: operations.FormsFormsBatchUpdateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ipsa",
            Alt: "proto",
            Callback: "sit",
            Fields: "debitis",
            Key: "sapiente",
            OauthToken: "est",
            PrettyPrint: false,
            QuotaUser: "est",
            UploadType: "dolor",
            UploadProtocol: "libero",
        },
        Request: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: true,
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "incidunt",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "porro",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 3630820796482480949,
                                    },
                                    SourceURI: "quae",
                                },
                            },
                            ItemID: "distinctio",
                            PageBreakItem: map[string]interface{}{
                                "omnis": "dolores",
                                "architecto": "labore",
                                "sit": "placeat",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "et",
                                                Image: &shared.ImageInput{
                                                    AltText: "laborum",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 8014451700944505660,
                                                    },
                                                    SourceURI: "nihil",
                                                },
                                                IsOther: false,
                                                Value: "itaque",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "sit",
                                                Image: &shared.ImageInput{
                                                    AltText: "esse",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 8244631715819070539,
                                                    },
                                                    SourceURI: "voluptates",
                                                },
                                                IsOther: true,
                                                Value: "quis",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "RADIO",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "repudiandae",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 5287675374053131560,
                                    },
                                    SourceURI: "sit",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "corporis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ipsum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 8911911697589176650,
                                                        },
                                                        SourceURI: "provident",
                                                    },
                                                    IsOther: false,
                                                    Value: "temporibus",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "incidunt",
                                                    Image: &shared.ImageInput{
                                                        AltText: "fugit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 4066235596836583176,
                                                        },
                                                        SourceURI: "sunt",
                                                    },
                                                    IsOther: false,
                                                    Value: "ab",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "ut",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quaerat",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 1561017435673571789,
                                                        },
                                                        SourceURI: "dolorum",
                                                    },
                                                    IsOther: false,
                                                    Value: "dolorem",
                                                },
                                            },
                                            Shuffle: true,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "odio",
                                            MaxFileSize: "dignissimos",
                                            MaxFiles: 2023607408878162296,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PRESENTATION",
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "deserunt",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "at",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quaerat",
                                                            URI: "ut",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "id",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "dolor",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ipsa",
                                                            YoutubeURI: "placeat",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "cumque",
                                                            URI: "facilis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "veniam",
                                                            YoutubeURI: "minima",
                                                        },
                                                    },
                                                },
                                                Text: "suscipit",
                                            },
                                            PointValue: 5002935656122311302,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quae",
                                                            URI: "et",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "similique",
                                                            YoutubeURI: "molestiae",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "at",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatibus",
                                                            YoutubeURI: "repellendus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sequi",
                                                            URI: "inventore",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "corporis",
                                                        },
                                                    },
                                                },
                                                Text: "omnis",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vel",
                                                            URI: "nostrum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quis",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                },
                                                Text: "molestiae",
                                            },
                                        },
                                        QuestionID: "odio",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "et",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 4297911971083918044,
                                            HighLabel: "ducimus",
                                            Low: 5812092376282296392,
                                            LowLabel: "adipisci",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "sed",
                                                    Image: &shared.ImageInput{
                                                        AltText: "cum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 2043501743664261460,
                                                        },
                                                        SourceURI: "consequatur",
                                                    },
                                                    IsOther: true,
                                                    Value: "tempora",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "sed",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dolor",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 6434467997201954437,
                                                        },
                                                        SourceURI: "est",
                                                    },
                                                    IsOther: true,
                                                    Value: "ipsa",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "voluptatem",
                                            MaxFileSize: "sit",
                                            MaxFiles: 1884345172318855561,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "ANY",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "eligendi",
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
                                                            DisplayText: "enim",
                                                            URI: "laudantium",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "occaecati",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "sit",
                                            },
                                            PointValue: 6843381929732803078,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "ullam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequuntur",
                                                            YoutubeURI: "aperiam",
                                                        },
                                                    },
                                                },
                                                Text: "accusamus",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "natus",
                                                            URI: "consectetur",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "unde",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                },
                                                Text: "tempora",
                                            },
                                        },
                                        QuestionID: "ut",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "aspernatur",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 2279341170733245843,
                                            HighLabel: "quas",
                                            Low: 6829211620401579544,
                                            LowLabel: "saepe",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
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
                                                    GoToSectionID: "nesciunt",
                                                    Image: &shared.ImageInput{
                                                        AltText: "rem",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 4702586369876889904,
                                                        },
                                                        SourceURI: "placeat",
                                                    },
                                                    IsOther: true,
                                                    Value: "odit",
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
                                            FolderID: "dicta",
                                            MaxFileSize: "nulla",
                                            MaxFiles: 631905891670371020,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "SPREADSHEET",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "modi",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "consequuntur",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "ducimus",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptas",
                                                            URI: "facilis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nemo",
                                                            YoutubeURI: "modi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aspernatur",
                                                            URI: "quasi",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "necessitatibus",
                                                            YoutubeURI: "sunt",
                                                        },
                                                    },
                                                },
                                                Text: "officia",
                                            },
                                            PointValue: 687191420613903797,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "nobis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "numquam",
                                                            YoutubeURI: "autem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quod",
                                                            URI: "aperiam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quo",
                                                            YoutubeURI: "accusantium",
                                                        },
                                                    },
                                                },
                                                Text: "aperiam",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quam",
                                                            URI: "corrupti",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eius",
                                                            YoutubeURI: "provident",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "alias",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "odio",
                                                            YoutubeURI: "dolores",
                                                        },
                                                    },
                                                },
                                                Text: "fugiat",
                                            },
                                        },
                                        QuestionID: "tempora",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "in",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 1666153750274152179,
                                            HighLabel: "reiciendis",
                                            Low: 4258518424644989889,
                                            LowLabel: "laudantium",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "qui",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 6715313884224218097,
                                    },
                                    SourceURI: "unde",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "nihil",
                                                Image: &shared.ImageInput{
                                                    AltText: "repellat",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 592679315148855932,
                                                    },
                                                    SourceURI: "enim",
                                                },
                                                IsOther: false,
                                                Value: "non",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "eligendi",
                                                Image: &shared.ImageInput{
                                                    AltText: "odio",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 6262303426533235854,
                                                    },
                                                    SourceURI: "modi",
                                                },
                                                IsOther: true,
                                                Value: "rem",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: true,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "iusto",
                                        MaxFileSize: "quis",
                                        MaxFiles: 3468532859112313402,
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
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "commodi",
                                                        URI: "dolores",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aut",
                                                        YoutubeURI: "necessitatibus",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "nesciunt",
                                                        URI: "magni",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "non",
                                                        YoutubeURI: "distinctio",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "minima",
                                                        URI: "ut",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aperiam",
                                                        YoutubeURI: "nisi",
                                                    },
                                                },
                                            },
                                            Text: "autem",
                                        },
                                        PointValue: 5771079949451887337,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "mollitia",
                                                        URI: "excepturi",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "est",
                                                        YoutubeURI: "ut",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ex",
                                                        URI: "ad",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "assumenda",
                                                        YoutubeURI: "eaque",
                                                    },
                                                },
                                            },
                                            Text: "consequatur",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "cupiditate",
                                                        URI: "velit",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "est",
                                                        YoutubeURI: "in",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "veritatis",
                                                        URI: "sunt",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "modi",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                            },
                                            Text: "sit",
                                        },
                                    },
                                    QuestionID: "cumque",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "ipsum",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 1451091349492642453,
                                        HighLabel: "temporibus",
                                        Low: 6355424678358416363,
                                        LowLabel: "dolorem",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: true,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "ducimus": "cupiditate",
                            },
                            Title: "consequatur",
                            VideoItem: &shared.VideoItem{
                                Caption: "exercitationem",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 658590805086506068,
                                    },
                                    YoutubeURI: "culpa",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 8175015999967088442,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 4318442819721475892,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 2050197845825300030,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 5940271303006253420,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "quia",
                            Title: "dolores",
                        },
                        UpdateMask: "illum",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "distinctio",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "deserunt",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 9003303310241104653,
                                    },
                                    SourceURI: "nemo",
                                },
                            },
                            ItemID: "et",
                            PageBreakItem: map[string]interface{}{
                                "asperiores": "ratione",
                                "ipsa": "blanditiis",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "molestiae",
                                                Image: &shared.ImageInput{
                                                    AltText: "provident",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 4615118447353420632,
                                                    },
                                                    SourceURI: "necessitatibus",
                                                },
                                                IsOther: true,
                                                Value: "assumenda",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "quo",
                                                Image: &shared.ImageInput{
                                                    AltText: "porro",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 7367225356131983915,
                                                    },
                                                    SourceURI: "voluptatem",
                                                },
                                                IsOther: true,
                                                Value: "animi",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "blanditiis",
                                                Image: &shared.ImageInput{
                                                    AltText: "vero",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 8923859297648267097,
                                                    },
                                                    SourceURI: "ea",
                                                },
                                                IsOther: false,
                                                Value: "aut",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "RADIO",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "doloribus",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 2898747962963177434,
                                    },
                                    SourceURI: "quis",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "voluptatem",
                                                    Image: &shared.ImageInput{
                                                        AltText: "minima",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 2634828089961606880,
                                                        },
                                                        SourceURI: "sunt",
                                                    },
                                                    IsOther: true,
                                                    Value: "aliquam",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHOICE_TYPE_UNSPECIFIED",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "esse",
                                            MaxFileSize: "sed",
                                            MaxFiles: 880666548939974456,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PDF",
                                                "DRAWING",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "odio",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "est",
                                                            URI: "ipsam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "molestiae",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eos",
                                                            URI: "vel",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nihil",
                                                            YoutubeURI: "qui",
                                                        },
                                                    },
                                                },
                                                Text: "dignissimos",
                                            },
                                            PointValue: 1008958498184798333,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "minus",
                                                            URI: "nihil",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "totam",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sit",
                                                            URI: "ea",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "temporibus",
                                                            YoutubeURI: "rerum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "illum",
                                                            URI: "ullam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorum",
                                                            YoutubeURI: "repellat",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "atque",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nulla",
                                                            YoutubeURI: "alias",
                                                        },
                                                    },
                                                },
                                                Text: "qui",
                                            },
                                        },
                                        QuestionID: "occaecati",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "est",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 3974416258590992717,
                                            HighLabel: "voluptates",
                                            Low: 9000542554862430637,
                                            LowLabel: "porro",
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
                                        Width: 1123397320954655833,
                                    },
                                    SourceURI: "laboriosam",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "aut",
                                                Image: &shared.ImageInput{
                                                    AltText: "molestiae",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 1468685925352177134,
                                                    },
                                                    SourceURI: "blanditiis",
                                                },
                                                IsOther: false,
                                                Value: "harum",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "inventore",
                                                Image: &shared.ImageInput{
                                                    AltText: "et",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 3011449431901264882,
                                                    },
                                                    SourceURI: "illo",
                                                },
                                                IsOther: false,
                                                Value: "dolorem",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "quas",
                                                Image: &shared.ImageInput{
                                                    AltText: "nesciunt",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 1104134121406139527,
                                                    },
                                                    SourceURI: "iste",
                                                },
                                                IsOther: false,
                                                Value: "ut",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "DROP_DOWN",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: true,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "aperiam",
                                        MaxFileSize: "adipisci",
                                        MaxFiles: 7682658908912769310,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "FILE_TYPE_UNSPECIFIED",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "provident",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "rerum",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "placeat",
                                                        URI: "recusandae",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "repudiandae",
                                                    },
                                                },
                                            },
                                            Text: "autem",
                                        },
                                        PointValue: 2942077215474613867,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "numquam",
                                                        URI: "repudiandae",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "sed",
                                                        YoutubeURI: "non",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "iusto",
                                                        URI: "ea",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "vel",
                                                        YoutubeURI: "non",
                                                    },
                                                },
                                            },
                                            Text: "corrupti",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "error",
                                                        URI: "enim",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quis",
                                                        YoutubeURI: "mollitia",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "odio",
                                                        URI: "distinctio",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "omnis",
                                                        YoutubeURI: "enim",
                                                    },
                                                },
                                            },
                                            Text: "hic",
                                        },
                                    },
                                    QuestionID: "earum",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "temporibus",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 2200291720393842806,
                                        HighLabel: "dignissimos",
                                        Low: 4587433823586408886,
                                        LowLabel: "dolorem",
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
                                "quis": "corrupti",
                                "impedit": "ipsum",
                                "ex": "est",
                            },
                            Title: "voluptatem",
                            VideoItem: &shared.VideoItem{
                                Caption: "et",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 9127535368733635777,
                                    },
                                    YoutubeURI: "natus",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 2548457878720010381,
                        },
                        UpdateMask: "minus",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "harum",
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "autem",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "recusandae",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 879668874296385114,
                                    },
                                    SourceURI: "eaque",
                                },
                            },
                            ItemID: "quaerat",
                            PageBreakItem: map[string]interface{}{
                                "quasi": "praesentium",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "qui",
                                                Image: &shared.ImageInput{
                                                    AltText: "dicta",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 8594896889358178281,
                                                    },
                                                    SourceURI: "atque",
                                                },
                                                IsOther: false,
                                                Value: "consequatur",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "culpa",
                                                Image: &shared.ImageInput{
                                                    AltText: "et",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 5068595119456469239,
                                                    },
                                                    SourceURI: "et",
                                                },
                                                IsOther: false,
                                                Value: "nisi",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "beatae",
                                                Image: &shared.ImageInput{
                                                    AltText: "quaerat",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 7550036204190908704,
                                                    },
                                                    SourceURI: "laudantium",
                                                },
                                                IsOther: true,
                                                Value: "doloribus",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "sint",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 6120400998384955720,
                                    },
                                    SourceURI: "laborum",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "accusamus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "voluptatum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 4583001456234461531,
                                                        },
                                                        SourceURI: "consequatur",
                                                    },
                                                    IsOther: false,
                                                    Value: "voluptatem",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "facere",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 5978532359315575194,
                                                        },
                                                        SourceURI: "iusto",
                                                    },
                                                    IsOther: false,
                                                    Value: "aspernatur",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "qui",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quo",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 7846539339723018612,
                                                        },
                                                        SourceURI: "veritatis",
                                                    },
                                                    IsOther: true,
                                                    Value: "facere",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHOICE_TYPE_UNSPECIFIED",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "odit",
                                            MaxFileSize: "qui",
                                            MaxFiles: 3534653403228930262,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PRESENTATION",
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "quaerat",
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
                                                            DisplayText: "debitis",
                                                            URI: "nihil",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "possimus",
                                                            YoutubeURI: "sunt",
                                                        },
                                                    },
                                                },
                                                Text: "laborum",
                                            },
                                            PointValue: 911900236897932294,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "autem",
                                                            URI: "ea",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolore",
                                                            YoutubeURI: "velit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "doloremque",
                                                            URI: "non",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fugiat",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                },
                                                Text: "animi",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatem",
                                                            URI: "ut",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "rerum",
                                                            YoutubeURI: "quaerat",
                                                        },
                                                    },
                                                },
                                                Text: "nemo",
                                            },
                                        },
                                        QuestionID: "quibusdam",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "dolorum",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 5961301090206738356,
                                            HighLabel: "ipsa",
                                            Low: 7244249552732261975,
                                            LowLabel: "unde",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "illo",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 5214086191323758055,
                                    },
                                    SourceURI: "repellendus",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "ab",
                                                Image: &shared.ImageInput{
                                                    AltText: "non",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 668163604386184861,
                                                    },
                                                    SourceURI: "dolorem",
                                                },
                                                IsOther: false,
                                                Value: "itaque",
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
                                        FolderID: "atque",
                                        MaxFileSize: "et",
                                        MaxFiles: 4647472136798671778,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "DRAWING",
                                            "VIDEO",
                                            "SPREADSHEET",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "amet",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "suscipit",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "doloremque",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quasi",
                                                        URI: "aut",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "unde",
                                                    },
                                                },
                                            },
                                            Text: "aperiam",
                                        },
                                        PointValue: 3910509906804393824,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "hic",
                                                        URI: "quidem",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quis",
                                                        YoutubeURI: "dolor",
                                                    },
                                                },
                                            },
                                            Text: "ut",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ut",
                                                        URI: "tenetur",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ut",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "voluptatem",
                                                        URI: "repellendus",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "at",
                                                        YoutubeURI: "autem",
                                                    },
                                                },
                                            },
                                            Text: "corporis",
                                        },
                                    },
                                    QuestionID: "voluptatum",
                                    Required: true,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "et",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 9107539606537357740,
                                        HighLabel: "id",
                                        Low: 6871135047302558994,
                                        LowLabel: "dolore",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: true,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: false,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "minima": "possimus",
                                "praesentium": "nihil",
                            },
                            Title: "iusto",
                            VideoItem: &shared.VideoItem{
                                Caption: "quisquam",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 4706621266712107037,
                                    },
                                    YoutubeURI: "voluptates",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 4516163747119219783,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 2760021102166825170,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 5321302804771847654,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 268006812484760631,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "soluta",
                            Title: "assumenda",
                        },
                        UpdateMask: "aut",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "autem",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "laudantium",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 1425992158626304486,
                                    },
                                    SourceURI: "architecto",
                                },
                            },
                            ItemID: "quasi",
                            PageBreakItem: map[string]interface{}{
                                "ut": "ut",
                                "dolorum": "ea",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "alias",
                                                Image: &shared.ImageInput{
                                                    AltText: "autem",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 6959881770071366324,
                                                    },
                                                    SourceURI: "assumenda",
                                                },
                                                IsOther: false,
                                                Value: "et",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "quia",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptatum",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 246881247005364253,
                                                    },
                                                    SourceURI: "ducimus",
                                                },
                                                IsOther: true,
                                                Value: "laboriosam",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "modi",
                                                Image: &shared.ImageInput{
                                                    AltText: "dolores",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 3022471904391699674,
                                                    },
                                                    SourceURI: "eaque",
                                                },
                                                IsOther: false,
                                                Value: "tempore",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: true,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "error",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 4395246744911652640,
                                    },
                                    SourceURI: "ducimus",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "nulla",
                                                    Image: &shared.ImageInput{
                                                        AltText: "sint",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 5104456016565448762,
                                                        },
                                                        SourceURI: "rem",
                                                    },
                                                    IsOther: false,
                                                    Value: "necessitatibus",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "eum",
                                                    Image: &shared.ImageInput{
                                                        AltText: "asperiores",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 3227356070076760218,
                                                        },
                                                        SourceURI: "odio",
                                                    },
                                                    IsOther: true,
                                                    Value: "ad",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "sint",
                                                    Image: &shared.ImageInput{
                                                        AltText: "excepturi",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 173107187707484677,
                                                        },
                                                        SourceURI: "ipsa",
                                                    },
                                                    IsOther: true,
                                                    Value: "minus",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHOICE_TYPE_UNSPECIFIED",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "ullam",
                                            MaxFileSize: "optio",
                                            MaxFiles: 4281910046110631526,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DRAWING",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "consectetur",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "minima",
                                                            URI: "rerum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aut",
                                                            YoutubeURI: "voluptas",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolorem",
                                                            URI: "perspiciatis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorem",
                                                            YoutubeURI: "laboriosam",
                                                        },
                                                    },
                                                },
                                                Text: "ipsam",
                                            },
                                            PointValue: 5345214796347075057,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quam",
                                                            URI: "vero",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorum",
                                                            YoutubeURI: "pariatur",
                                                        },
                                                    },
                                                },
                                                Text: "sed",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "temporibus",
                                                            URI: "officia",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aut",
                                                            YoutubeURI: "corporis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corporis",
                                                            URI: "eligendi",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quo",
                                                            YoutubeURI: "qui",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "earum",
                                                            URI: "consequatur",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aspernatur",
                                                            YoutubeURI: "commodi",
                                                        },
                                                    },
                                                },
                                                Text: "perferendis",
                                            },
                                        },
                                        QuestionID: "fugiat",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "tempore",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 6844696964773683269,
                                            HighLabel: "ut",
                                            Low: 5017862106035123046,
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
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "omnis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "voluptatem",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 3326629396759772516,
                                                        },
                                                        SourceURI: "porro",
                                                    },
                                                    IsOther: false,
                                                    Value: "dolore",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "magnam",
                                            MaxFileSize: "fuga",
                                            MaxFiles: 6257490489374766035,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "non",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "necessitatibus",
                                                            URI: "ut",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "tenetur",
                                                        },
                                                    },
                                                },
                                                Text: "occaecati",
                                            },
                                            PointValue: 1147785157744264551,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "officiis",
                                                            URI: "quis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "enim",
                                                            YoutubeURI: "repudiandae",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "labore",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "commodi",
                                                            YoutubeURI: "enim",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "rerum",
                                                            URI: "cum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quo",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                },
                                                Text: "sit",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsam",
                                                            URI: "ut",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolores",
                                                            YoutubeURI: "cum",
                                                        },
                                                    },
                                                },
                                                Text: "sed",
                                            },
                                        },
                                        QuestionID: "iusto",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "magnam",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 5236450376235299714,
                                            HighLabel: "accusamus",
                                            Low: 5267402672884233298,
                                            LowLabel: "corporis",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
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
                                                    GoToSectionID: "repellat",
                                                    Image: &shared.ImageInput{
                                                        AltText: "libero",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 254687288976390973,
                                                        },
                                                        SourceURI: "itaque",
                                                    },
                                                    IsOther: true,
                                                    Value: "enim",
                                                },
                                            },
                                            Shuffle: true,
                                            Type: "CHECKBOX",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "adipisci",
                                            MaxFileSize: "laudantium",
                                            MaxFiles: 3973700287072915749,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "SPREADSHEET",
                                                "VIDEO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "recusandae",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "soluta",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "error",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatum",
                                                            URI: "aperiam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "temporibus",
                                                            YoutubeURI: "quisquam",
                                                        },
                                                    },
                                                },
                                                Text: "ab",
                                            },
                                            PointValue: 337527056420911146,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eum",
                                                            URI: "soluta",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolore",
                                                            YoutubeURI: "excepturi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "animi",
                                                            URI: "in",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ex",
                                                            YoutubeURI: "eum",
                                                        },
                                                    },
                                                },
                                                Text: "odit",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "molestiae",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "itaque",
                                                            YoutubeURI: "occaecati",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sapiente",
                                                            URI: "voluptate",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "harum",
                                                            YoutubeURI: "cumque",
                                                        },
                                                    },
                                                },
                                                Text: "voluptas",
                                            },
                                        },
                                        QuestionID: "repellendus",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "id",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 1738548481938466151,
                                            HighLabel: "occaecati",
                                            Low: 5096019015472726540,
                                            LowLabel: "alias",
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
                                    AltText: "placeat",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 3593090534609337542,
                                    },
                                    SourceURI: "sit",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "at",
                                                Image: &shared.ImageInput{
                                                    AltText: "et",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 4098085473974544025,
                                                    },
                                                    SourceURI: "nulla",
                                                },
                                                IsOther: true,
                                                Value: "commodi",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "eligendi",
                                                Image: &shared.ImageInput{
                                                    AltText: "laboriosam",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 6331676889764876026,
                                                    },
                                                    SourceURI: "impedit",
                                                },
                                                IsOther: true,
                                                Value: "accusamus",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "quas",
                                                Image: &shared.ImageInput{
                                                    AltText: "autem",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 5868474017902316615,
                                                    },
                                                    SourceURI: "debitis",
                                                },
                                                IsOther: false,
                                                Value: "sint",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: true,
                                        IncludeYear: false,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "in",
                                        MaxFileSize: "cumque",
                                        MaxFiles: 1288883652997697435,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "VIDEO",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "minima",
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
                                                        DisplayText: "nemo",
                                                        URI: "doloribus",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "veritatis",
                                                        YoutubeURI: "dolor",
                                                    },
                                                },
                                            },
                                            Text: "autem",
                                        },
                                        PointValue: 1687147051519508417,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "consequatur",
                                                        URI: "quia",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aliquid",
                                                        YoutubeURI: "quisquam",
                                                    },
                                                },
                                            },
                                            Text: "rerum",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "vero",
                                                        URI: "est",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "velit",
                                                        YoutubeURI: "enim",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "optio",
                                                        URI: "aut",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "laboriosam",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                            },
                                            Text: "asperiores",
                                        },
                                    },
                                    QuestionID: "deleniti",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "sunt",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 393991222479720239,
                                        HighLabel: "ut",
                                        Low: 3055778637122387538,
                                        LowLabel: "architecto",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: true,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: false,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "maiores": "optio",
                                "in": "occaecati",
                            },
                            Title: "quis",
                            VideoItem: &shared.VideoItem{
                                Caption: "recusandae",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 3206623483201512443,
                                    },
                                    YoutubeURI: "minima",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 2092346121893842034,
                        },
                        UpdateMask: "laudantium",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: true,
                            },
                        },
                        UpdateMask: "animi",
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "perferendis",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "itaque",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 4287503374296563607,
                                    },
                                    SourceURI: "sint",
                                },
                            },
                            ItemID: "delectus",
                            PageBreakItem: map[string]interface{}{
                                "ut": "est",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "tempora",
                                                Image: &shared.ImageInput{
                                                    AltText: "hic",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 7337796208623104211,
                                                    },
                                                    SourceURI: "fuga",
                                                },
                                                IsOther: false,
                                                Value: "corrupti",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHECKBOX",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "deserunt",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 6190008357654128489,
                                    },
                                    SourceURI: "voluptas",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "ut",
                                                    Image: &shared.ImageInput{
                                                        AltText: "possimus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 6949423696513698146,
                                                        },
                                                        SourceURI: "consequatur",
                                                    },
                                                    IsOther: true,
                                                    Value: "aliquid",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "iure",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 3917651441298516601,
                                                        },
                                                        SourceURI: "saepe",
                                                    },
                                                    IsOther: true,
                                                    Value: "possimus",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHOICE_TYPE_UNSPECIFIED",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "et",
                                            MaxFileSize: "et",
                                            MaxFiles: 8706274537045256300,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "SPREADSHEET",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "consectetur",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "enim",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nam",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "atque",
                                                            URI: "adipisci",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "similique",
                                                            YoutubeURI: "omnis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nesciunt",
                                                            URI: "non",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "reprehenderit",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "reprehenderit",
                                            },
                                            PointValue: 8382549417488267366,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolor",
                                                            URI: "voluptas",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "sequi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "magni",
                                                            URI: "odit",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "suscipit",
                                                        },
                                                    },
                                                },
                                                Text: "corrupti",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "harum",
                                                            URI: "occaecati",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quos",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "id",
                                                            URI: "asperiores",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "architecto",
                                                            YoutubeURI: "omnis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quaerat",
                                                            URI: "in",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quae",
                                                            YoutubeURI: "quas",
                                                        },
                                                    },
                                                },
                                                Text: "omnis",
                                            },
                                        },
                                        QuestionID: "incidunt",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "molestiae",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 8863528157143312908,
                                            HighLabel: "voluptates",
                                            Low: 6168228613146364733,
                                            LowLabel: "odit",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
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
                                                    GoToSectionID: "maiores",
                                                    Image: &shared.ImageInput{
                                                        AltText: "alias",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 3515159222562670435,
                                                        },
                                                        SourceURI: "a",
                                                    },
                                                    IsOther: true,
                                                    Value: "quo",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "consectetur",
                                                    Image: &shared.ImageInput{
                                                        AltText: "corporis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 1059495043031655110,
                                                        },
                                                        SourceURI: "quaerat",
                                                    },
                                                    IsOther: true,
                                                    Value: "non",
                                                },
                                            },
                                            Shuffle: true,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "et",
                                            MaxFileSize: "ut",
                                            MaxFiles: 1161023893901157982,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "et",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "ducimus",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aspernatur",
                                                            URI: "aut",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolor",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "a",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quo",
                                                            YoutubeURI: "vero",
                                                        },
                                                    },
                                                },
                                                Text: "dolorem",
                                            },
                                            PointValue: 1353409533170459717,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "hic",
                                                            URI: "et",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "sed",
                                                        },
                                                    },
                                                },
                                                Text: "est",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "soluta",
                                                            URI: "at",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "vitae",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corrupti",
                                                            URI: "ut",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cupiditate",
                                                            YoutubeURI: "sit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corporis",
                                                            URI: "non",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "rerum",
                                                            YoutubeURI: "quasi",
                                                        },
                                                    },
                                                },
                                                Text: "sed",
                                            },
                                        },
                                        QuestionID: "perspiciatis",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "officia",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 4644861563379839032,
                                            HighLabel: "officia",
                                            Low: 8919849979411473129,
                                            LowLabel: "aut",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "molestiae",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 6889419941503769410,
                                    },
                                    SourceURI: "odit",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "ut",
                                                Image: &shared.ImageInput{
                                                    AltText: "id",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 5954847658887122489,
                                                    },
                                                    SourceURI: "harum",
                                                },
                                                IsOther: false,
                                                Value: "aspernatur",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "eveniet",
                                                Image: &shared.ImageInput{
                                                    AltText: "officiis",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 3541754826954132570,
                                                    },
                                                    SourceURI: "assumenda",
                                                },
                                                IsOther: false,
                                                Value: "libero",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "consequuntur",
                                                Image: &shared.ImageInput{
                                                    AltText: "ea",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 321684065591043905,
                                                    },
                                                    SourceURI: "atque",
                                                },
                                                IsOther: false,
                                                Value: "consequuntur",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "RADIO",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: false,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "necessitatibus",
                                        MaxFileSize: "perspiciatis",
                                        MaxFiles: 7474216361331592065,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "ANY",
                                            "DOCUMENT",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "a",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "eum",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "debitis",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quia",
                                                        URI: "quia",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "fugiat",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "dolorem",
                                                        URI: "nihil",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "dolorem",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "molestias",
                                                        URI: "adipisci",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "esse",
                                                        YoutubeURI: "inventore",
                                                    },
                                                },
                                            },
                                            Text: "velit",
                                        },
                                        PointValue: 7175246512155706163,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "fuga",
                                                        URI: "et",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "nobis",
                                                        YoutubeURI: "odio",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quasi",
                                                        URI: "ea",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "asperiores",
                                                        YoutubeURI: "distinctio",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "fugit",
                                                        URI: "ipsa",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "odit",
                                                        YoutubeURI: "officiis",
                                                    },
                                                },
                                            },
                                            Text: "sed",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quasi",
                                                        URI: "alias",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "sequi",
                                                        YoutubeURI: "dolore",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ut",
                                                        URI: "aliquam",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "est",
                                                        YoutubeURI: "quis",
                                                    },
                                                },
                                            },
                                            Text: "aut",
                                        },
                                    },
                                    QuestionID: "magni",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "et",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 7989566266070693398,
                                        HighLabel: "aut",
                                        Low: 3578839472490561508,
                                        LowLabel: "nam",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: true,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "delectus": "libero",
                            },
                            Title: "alias",
                            VideoItem: &shared.VideoItem{
                                Caption: "rerum",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 1429242156592359518,
                                    },
                                    YoutubeURI: "eaque",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 1664562514961750333,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 1416854397329128566,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 633191294028068721,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 1106445836439259671,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "dolorum",
                            Title: "quia",
                        },
                        UpdateMask: "fugiat",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "est",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "maxime",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 5261877718968934275,
                                    },
                                    SourceURI: "omnis",
                                },
                            },
                            ItemID: "deleniti",
                            PageBreakItem: map[string]interface{}{
                                "veritatis": "ut",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "laboriosam",
                                                Image: &shared.ImageInput{
                                                    AltText: "velit",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 3847644765164323532,
                                                    },
                                                    SourceURI: "voluptatem",
                                                },
                                                IsOther: true,
                                                Value: "voluptatem",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "tenetur",
                                                Image: &shared.ImageInput{
                                                    AltText: "aspernatur",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 6968993539790339935,
                                                    },
                                                    SourceURI: "possimus",
                                                },
                                                IsOther: false,
                                                Value: "dignissimos",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "placeat",
                                                Image: &shared.ImageInput{
                                                    AltText: "illo",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 1944151082460247840,
                                                    },
                                                    SourceURI: "corrupti",
                                                },
                                                IsOther: true,
                                                Value: "asperiores",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHECKBOX",
                                    },
                                    ShuffleQuestions: true,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "ipsa",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 4973066229511119308,
                                    },
                                    SourceURI: "cumque",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "distinctio",
                                                    Image: &shared.ImageInput{
                                                        AltText: "tenetur",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 289690413690871532,
                                                        },
                                                        SourceURI: "aut",
                                                    },
                                                    IsOther: false,
                                                    Value: "eum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "officiis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "sunt",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 5163603264569209191,
                                                        },
                                                        SourceURI: "voluptas",
                                                    },
                                                    IsOther: false,
                                                    Value: "est",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "autem",
                                                    Image: &shared.ImageInput{
                                                        AltText: "est",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 9137982009395199675,
                                                        },
                                                        SourceURI: "placeat",
                                                    },
                                                    IsOther: true,
                                                    Value: "alias",
                                                },
                                            },
                                            Shuffle: true,
                                            Type: "CHOICE_TYPE_UNSPECIFIED",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "consequatur",
                                            MaxFileSize: "molestiae",
                                            MaxFiles: 5836363067191062363,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "unde",
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
                                                            DisplayText: "et",
                                                            URI: "rerum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ut",
                                                            YoutubeURI: "aspernatur",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "impedit",
                                                            URI: "eius",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "adipisci",
                                                            YoutubeURI: "ducimus",
                                                        },
                                                    },
                                                },
                                                Text: "assumenda",
                                            },
                                            PointValue: 7116118191347901698,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ut",
                                                            URI: "cumque",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cupiditate",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vel",
                                                            URI: "harum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "id",
                                                            YoutubeURI: "iste",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "tempore",
                                                            URI: "ex",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "distinctio",
                                                            YoutubeURI: "architecto",
                                                        },
                                                    },
                                                },
                                                Text: "quibusdam",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "laboriosam",
                                                            URI: "et",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "placeat",
                                                            YoutubeURI: "qui",
                                                        },
                                                    },
                                                },
                                                Text: "odio",
                                            },
                                        },
                                        QuestionID: "aliquid",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "quas",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 8683637002828215879,
                                            HighLabel: "et",
                                            Low: 5573665413929073458,
                                            LowLabel: "nemo",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
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
                                                    GoToSectionID: "ut",
                                                    Image: &shared.ImageInput{
                                                        AltText: "asperiores",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 4588962380590594717,
                                                        },
                                                        SourceURI: "omnis",
                                                    },
                                                    IsOther: false,
                                                    Value: "dicta",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "ut",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 2275211971830285298,
                                                        },
                                                        SourceURI: "asperiores",
                                                    },
                                                    IsOther: false,
                                                    Value: "et",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "ut",
                                            MaxFileSize: "facere",
                                            MaxFiles: 651801269327434472,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "voluptate",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "minima",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "totam",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "incidunt",
                                                            URI: "dolorem",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quo",
                                                            YoutubeURI: "culpa",
                                                        },
                                                    },
                                                },
                                                Text: "ratione",
                                            },
                                            PointValue: 3485231417256697628,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "perferendis",
                                                            URI: "possimus",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nisi",
                                                            YoutubeURI: "aliquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sunt",
                                                            URI: "sed",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nihil",
                                                            YoutubeURI: "sint",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reiciendis",
                                                            URI: "nostrum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ut",
                                                            YoutubeURI: "atque",
                                                        },
                                                    },
                                                },
                                                Text: "similique",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "inventore",
                                                            URI: "recusandae",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sint",
                                                            YoutubeURI: "ex",
                                                        },
                                                    },
                                                },
                                                Text: "laboriosam",
                                            },
                                        },
                                        QuestionID: "est",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "placeat",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 6322450015257319138,
                                            HighLabel: "magni",
                                            Low: 7148379799823940905,
                                            LowLabel: "accusantium",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
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
                                                    GoToSectionID: "officiis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "veniam",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 5621261771286112477,
                                                        },
                                                        SourceURI: "ea",
                                                    },
                                                    IsOther: false,
                                                    Value: "dolorem",
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
                                            FolderID: "aut",
                                            MaxFileSize: "maxime",
                                            MaxFiles: 1795701770637866744,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "omnis",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reprehenderit",
                                                            URI: "corrupti",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "ad",
                                                        },
                                                    },
                                                },
                                                Text: "ea",
                                            },
                                            PointValue: 6914012838756528487,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "debitis",
                                                            URI: "omnis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "id",
                                                            YoutubeURI: "dolores",
                                                        },
                                                    },
                                                },
                                                Text: "ullam",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "porro",
                                                            URI: "dolor",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "pariatur",
                                                            YoutubeURI: "pariatur",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatem",
                                                            URI: "itaque",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "explicabo",
                                                            YoutubeURI: "placeat",
                                                        },
                                                    },
                                                },
                                                Text: "quos",
                                            },
                                        },
                                        QuestionID: "id",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "veniam",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 7896066356198397140,
                                            HighLabel: "quae",
                                            Low: 3159250917121709378,
                                            LowLabel: "ut",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "dolorum",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 5205447003474305335,
                                    },
                                    SourceURI: "quo",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "voluptatem",
                                                Image: &shared.ImageInput{
                                                    AltText: "et",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 4699253386294682349,
                                                    },
                                                    SourceURI: "vel",
                                                },
                                                IsOther: false,
                                                Value: "tenetur",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHECKBOX",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: false,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "voluptate",
                                        MaxFileSize: "et",
                                        MaxFiles: 4184376927909698154,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "AUDIO",
                                            "ANY",
                                            "PDF",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "et",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "provident",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "consequuntur",
                                                        URI: "nihil",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "natus",
                                                        YoutubeURI: "ut",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "fuga",
                                                        URI: "quas",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "at",
                                                        YoutubeURI: "error",
                                                    },
                                                },
                                            },
                                            Text: "odit",
                                        },
                                        PointValue: 2872417149627322778,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ad",
                                                        URI: "cupiditate",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quia",
                                                        YoutubeURI: "aut",
                                                    },
                                                },
                                            },
                                            Text: "at",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "qui",
                                                        URI: "rerum",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "voluptas",
                                                        YoutubeURI: "recusandae",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ut",
                                                        URI: "quis",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "culpa",
                                                        YoutubeURI: "ipsa",
                                                    },
                                                },
                                            },
                                            Text: "iste",
                                        },
                                    },
                                    QuestionID: "iste",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "autem",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 6488115048459184192,
                                        HighLabel: "sed",
                                        Low: 1914903948005926446,
                                        LowLabel: "consequatur",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: true,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "nisi": "libero",
                            },
                            Title: "quae",
                            VideoItem: &shared.VideoItem{
                                Caption: "voluptatem",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 3721972092181065211,
                                    },
                                    YoutubeURI: "dolorem",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 1771640771906141741,
                        },
                        UpdateMask: "aspernatur",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "quis",
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "nobis",
                TargetRevisionID: "exercitationem",
            },
        },
    }
    
    res, err := s.Forms.FormsFormsBatchUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateFormResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### forms

* `FormsFormsBatchUpdate` - Change the form with a batch of updates.
* `FormsFormsCreate` - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* `FormsFormsGet` - Get a form.
* `FormsFormsResponsesGet` - Get one response from the form.
* `FormsFormsResponsesList` - List a form's responses.
* `FormsFormsWatchesCreate` - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* `FormsFormsWatchesDelete` - Delete a watch.
* `FormsFormsWatchesList` - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* `FormsFormsWatchesRenew` - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
