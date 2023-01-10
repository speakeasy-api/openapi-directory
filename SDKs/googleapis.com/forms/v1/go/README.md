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
            FormID: "excepturi",
        },
        QueryParams: operations.FormsFormsBatchUpdateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nam",
            Alt: "proto",
            Callback: "nam",
            Fields: "eaque",
            Key: "eos",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "repudiandae",
            UploadType: "tempora",
            UploadProtocol: "iusto",
        },
        Request: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: false,
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "culpa",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "illo",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 5957235253040447645,
                                    },
                                    SourceURI: "enim",
                                },
                            },
                            ItemID: "sint",
                            PageBreakItem: map[string]interface{}{
                                "totam": "numquam",
                                "sunt": "placeat",
                                "reprehenderit": "et",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "possimus",
                                                Image: &shared.ImageInput{
                                                    AltText: "ipsa",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 5216207456531997314,
                                                    },
                                                    SourceURI: "facilis",
                                                },
                                                IsOther: false,
                                                Value: "voluptatem",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "incidunt",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 5904184528855340306,
                                    },
                                    SourceURI: "quia",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "cum",
                                                    Image: &shared.ImageInput{
                                                        AltText: "exercitationem",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 6763426041370573843,
                                                        },
                                                        SourceURI: "rem",
                                                    },
                                                    IsOther: false,
                                                    Value: "et",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHECKBOX",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "qui",
                                            MaxFileSize: "ipsum",
                                            MaxFiles: 6209797462097021572,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "dolorum",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "optio",
                                                            URI: "est",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "doloribus",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "fuga",
                                                            URI: "occaecati",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolores",
                                                            YoutubeURI: "dolores",
                                                        },
                                                    },
                                                },
                                                Text: "voluptatibus",
                                            },
                                            PointValue: 1666936004246765880,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quo",
                                                            URI: "voluptatum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "autem",
                                                            YoutubeURI: "dolorem",
                                                        },
                                                    },
                                                },
                                                Text: "ullam",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "est",
                                                            URI: "assumenda",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ducimus",
                                                            YoutubeURI: "alias",
                                                        },
                                                    },
                                                },
                                                Text: "quia",
                                            },
                                        },
                                        QuestionID: "nemo",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "molestiae",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 3820748145283803134,
                                            HighLabel: "eveniet",
                                            Low: 7675516864857828933,
                                            LowLabel: "velit",
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
                                                    GoToSectionID: "vitae",
                                                    Image: &shared.ImageInput{
                                                        AltText: "repellendus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 8395489463148176251,
                                                        },
                                                        SourceURI: "dolorem",
                                                    },
                                                    IsOther: false,
                                                    Value: "quibusdam",
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
                                            FolderID: "dolor",
                                            MaxFileSize: "accusantium",
                                            MaxFiles: 3817978110620240451,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "ANY",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "temporibus",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eaque",
                                                            URI: "necessitatibus",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ut",
                                                            YoutubeURI: "aliquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "illo",
                                                            URI: "eveniet",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolore",
                                                            YoutubeURI: "assumenda",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "molestiae",
                                                            URI: "accusantium",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "saepe",
                                                            YoutubeURI: "harum",
                                                        },
                                                    },
                                                },
                                                Text: "ipsum",
                                            },
                                            PointValue: 2915901289068470124,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "velit",
                                                            URI: "aliquid",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nesciunt",
                                                            YoutubeURI: "ipsum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "voluptatem",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sunt",
                                                            YoutubeURI: "rerum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "adipisci",
                                                            URI: "nobis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quaerat",
                                                            YoutubeURI: "itaque",
                                                        },
                                                    },
                                                },
                                                Text: "magni",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatem",
                                                            URI: "numquam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "modi",
                                                        },
                                                    },
                                                },
                                                Text: "quo",
                                            },
                                        },
                                        QuestionID: "qui",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "est",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 5865443877907118803,
                                            HighLabel: "odit",
                                            Low: 1986826379788998642,
                                            LowLabel: "nesciunt",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "odit",
                                                    Image: &shared.ImageInput{
                                                        AltText: "eaque",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 7990513867378522665,
                                                        },
                                                        SourceURI: "pariatur",
                                                    },
                                                    IsOther: false,
                                                    Value: "occaecati",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "magnam",
                                                    Image: &shared.ImageInput{
                                                        AltText: "officia",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 162448567943149512,
                                                        },
                                                        SourceURI: "nulla",
                                                    },
                                                    IsOther: true,
                                                    Value: "mollitia",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "rerum",
                                            MaxFileSize: "iusto",
                                            MaxFiles: 6633480755866894140,
                                            Types: []shared.FileUploadQuestionTypesEnum{
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
                                                            DisplayText: "est",
                                                            URI: "possimus",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "a",
                                                            YoutubeURI: "quia",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "illum",
                                                            URI: "aut",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "id",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sit",
                                                            URI: "autem",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequatur",
                                                            YoutubeURI: "ex",
                                                        },
                                                    },
                                                },
                                                Text: "ut",
                                            },
                                            PointValue: 5480375390911046644,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "consequuntur",
                                                            URI: "maxime",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "enim",
                                                            YoutubeURI: "reprehenderit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "pariatur",
                                                            URI: "quidem",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nesciunt",
                                                            YoutubeURI: "voluptatum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatem",
                                                            URI: "quo",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "officia",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                },
                                                Text: "molestiae",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "sunt",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eaque",
                                                            YoutubeURI: "a",
                                                        },
                                                    },
                                                },
                                                Text: "eum",
                                            },
                                        },
                                        QuestionID: "dolor",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "quibusdam",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 5761866984619171230,
                                            HighLabel: "qui",
                                            Low: 5137159008829106321,
                                            LowLabel: "illum",
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
                                    AltText: "voluptas",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 7246159010282780364,
                                    },
                                    SourceURI: "explicabo",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "repudiandae",
                                                Image: &shared.ImageInput{
                                                    AltText: "aut",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 1044388166266659590,
                                                    },
                                                    SourceURI: "est",
                                                },
                                                IsOther: false,
                                                Value: "saepe",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "RADIO",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: true,
                                        IncludeYear: true,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "laudantium",
                                        MaxFileSize: "voluptas",
                                        MaxFiles: 5614125164593907723,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "aut",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "corrupti",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quia",
                                                        URI: "expedita",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aliquam",
                                                        YoutubeURI: "omnis",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "inventore",
                                                        URI: "molestiae",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "provident",
                                                        YoutubeURI: "omnis",
                                                    },
                                                },
                                            },
                                            Text: "in",
                                        },
                                        PointValue: 3226251313657051547,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "similique",
                                                        URI: "vitae",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "sed",
                                                    },
                                                },
                                            },
                                            Text: "et",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "occaecati",
                                                        URI: "sit",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "qui",
                                                        YoutubeURI: "ab",
                                                    },
                                                },
                                            },
                                            Text: "molestiae",
                                        },
                                    },
                                    QuestionID: "temporibus",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "est",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 6870934446930668172,
                                        HighLabel: "nihil",
                                        Low: 4185226959274560889,
                                        LowLabel: "et",
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
                                "consequuntur": "harum",
                            },
                            Title: "quia",
                            VideoItem: &shared.VideoItem{
                                Caption: "et",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 2056511701185686311,
                                    },
                                    YoutubeURI: "molestiae",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 4484629303885010162,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 7549812975827625294,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 946926892329068097,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 786010621093031029,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "iusto",
                            Title: "cumque",
                        },
                        UpdateMask: "doloribus",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "et",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "excepturi",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 3903123008775225897,
                                    },
                                    SourceURI: "quia",
                                },
                            },
                            ItemID: "quibusdam",
                            PageBreakItem: map[string]interface{}{
                                "placeat": "itaque",
                                "impedit": "placeat",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "sapiente",
                                                Image: &shared.ImageInput{
                                                    AltText: "non",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 7367726222752759855,
                                                    },
                                                    SourceURI: "fuga",
                                                },
                                                IsOther: true,
                                                Value: "itaque",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "ex",
                                                Image: &shared.ImageInput{
                                                    AltText: "nulla",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 4572307398381366198,
                                                    },
                                                    SourceURI: "voluptatem",
                                                },
                                                IsOther: false,
                                                Value: "odit",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: true,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "qui",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 6962205432734655004,
                                    },
                                    SourceURI: "unde",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "consequuntur",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 8197701673791452827,
                                                        },
                                                        SourceURI: "et",
                                                    },
                                                    IsOther: false,
                                                    Value: "ratione",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "quaerat",
                                                    Image: &shared.ImageInput{
                                                        AltText: "architecto",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 3587361837763582304,
                                                        },
                                                        SourceURI: "officiis",
                                                    },
                                                    IsOther: false,
                                                    Value: "sed",
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
                                            FolderID: "voluptate",
                                            MaxFileSize: "quo",
                                            MaxFiles: 2055354745482287093,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DRAWING",
                                                "PDF",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "exercitationem",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "exercitationem",
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
                                                            DisplayText: "nobis",
                                                            URI: "sit",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "commodi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "deserunt",
                                                            URI: "in",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eos",
                                                            YoutubeURI: "veritatis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vel",
                                                            URI: "est",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "id",
                                                            YoutubeURI: "aliquid",
                                                        },
                                                    },
                                                },
                                                Text: "et",
                                            },
                                            PointValue: 7410477207101213861,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vel",
                                                            URI: "est",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "minus",
                                                            YoutubeURI: "dolores",
                                                        },
                                                    },
                                                },
                                                Text: "ea",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nulla",
                                                            URI: "voluptatem",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequatur",
                                                            YoutubeURI: "nihil",
                                                        },
                                                    },
                                                },
                                                Text: "reprehenderit",
                                            },
                                        },
                                        QuestionID: "et",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "quis",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 8953467996875231721,
                                            HighLabel: "incidunt",
                                            Low: 9050574501002808175,
                                            LowLabel: "et",
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
                                    AltText: "qui",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 1417670661413372909,
                                    },
                                    SourceURI: "et",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "vero",
                                                Image: &shared.ImageInput{
                                                    AltText: "quod",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 4897836300033647809,
                                                    },
                                                    SourceURI: "vitae",
                                                },
                                                IsOther: true,
                                                Value: "ipsa",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "deleniti",
                                                Image: &shared.ImageInput{
                                                    AltText: "et",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 5325954453643726336,
                                                    },
                                                    SourceURI: "omnis",
                                                },
                                                IsOther: true,
                                                Value: "voluptas",
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
                                        FolderID: "quisquam",
                                        MaxFileSize: "deleniti",
                                        MaxFiles: 5074577177741311407,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "PDF",
                                            "DOCUMENT",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "ea",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ipsum",
                                                        URI: "qui",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "culpa",
                                                        YoutubeURI: "fugit",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "eaque",
                                                        URI: "dolorem",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "in",
                                                        YoutubeURI: "voluptas",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "suscipit",
                                                        URI: "hic",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "qui",
                                                        YoutubeURI: "eaque",
                                                    },
                                                },
                                            },
                                            Text: "hic",
                                        },
                                        PointValue: 3496638185594162888,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "inventore",
                                                        URI: "molestias",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quisquam",
                                                        YoutubeURI: "et",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "in",
                                                        URI: "eveniet",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "excepturi",
                                                        YoutubeURI: "ea",
                                                    },
                                                },
                                            },
                                            Text: "incidunt",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "itaque",
                                                        URI: "voluptatem",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ut",
                                                        YoutubeURI: "assumenda",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "consequatur",
                                                        URI: "voluptas",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ipsum",
                                                        YoutubeURI: "perferendis",
                                                    },
                                                },
                                            },
                                            Text: "ipsa",
                                        },
                                    },
                                    QuestionID: "ad",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "et",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 688601391891949515,
                                        HighLabel: "deleniti",
                                        Low: 366547234416597184,
                                        LowLabel: "dignissimos",
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
                                "dolores": "voluptatem",
                                "sed": "quo",
                                "et": "enim",
                            },
                            Title: "sunt",
                            VideoItem: &shared.VideoItem{
                                Caption: "vero",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 9044678696486910108,
                                    },
                                    YoutubeURI: "qui",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 6323061704059267708,
                        },
                        UpdateMask: "voluptatum",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "corporis",
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "fugiat",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "dolor",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 88593726215372726,
                                    },
                                    SourceURI: "quo",
                                },
                            },
                            ItemID: "aliquid",
                            PageBreakItem: map[string]interface{}{
                                "veniam": "hic",
                                "id": "neque",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "suscipit",
                                                Image: &shared.ImageInput{
                                                    AltText: "dolores",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 5180088980873498341,
                                                    },
                                                    SourceURI: "non",
                                                },
                                                IsOther: true,
                                                Value: "enim",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "nihil",
                                                Image: &shared.ImageInput{
                                                    AltText: "sit",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 6117250528098108154,
                                                    },
                                                    SourceURI: "est",
                                                },
                                                IsOther: true,
                                                Value: "eius",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "non",
                                                Image: &shared.ImageInput{
                                                    AltText: "et",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 7563239524073315732,
                                                    },
                                                    SourceURI: "reprehenderit",
                                                },
                                                IsOther: true,
                                                Value: "voluptatum",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHECKBOX",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "suscipit",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 5439376411238478891,
                                    },
                                    SourceURI: "quis",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "perferendis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nihil",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 7545576744530829002,
                                                        },
                                                        SourceURI: "sint",
                                                    },
                                                    IsOther: true,
                                                    Value: "cupiditate",
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
                                            FolderID: "illo",
                                            MaxFileSize: "quos",
                                            MaxFiles: 2899654982963752788,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "aliquid",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "perspiciatis",
                                                            URI: "vitae",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "praesentium",
                                                            YoutubeURI: "dolorum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "fugit",
                                                            URI: "molestiae",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quisquam",
                                                            YoutubeURI: "soluta",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "incidunt",
                                                            URI: "dolorum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "accusamus",
                                                        },
                                                    },
                                                },
                                                Text: "asperiores",
                                            },
                                            PointValue: 4106289850966672887,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "doloremque",
                                                            URI: "rerum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptas",
                                                            YoutubeURI: "placeat",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "non",
                                                            URI: "sit",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quasi",
                                                            YoutubeURI: "est",
                                                        },
                                                    },
                                                },
                                                Text: "rerum",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "error",
                                                            URI: "distinctio",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "veritatis",
                                                            YoutubeURI: "quia",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "sunt",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "voluptates",
                                                        },
                                                    },
                                                },
                                                Text: "quas",
                                            },
                                        },
                                        QuestionID: "laudantium",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "ut",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 3263690433409999503,
                                            HighLabel: "voluptatum",
                                            Low: 6361659954382257494,
                                            LowLabel: "dolores",
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
                                                    GoToSectionID: "aut",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nihil",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 3103391951678280545,
                                                        },
                                                        SourceURI: "voluptatibus",
                                                    },
                                                    IsOther: false,
                                                    Value: "placeat",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "dicta",
                                                    Image: &shared.ImageInput{
                                                        AltText: "saepe",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 4356673887652401753,
                                                        },
                                                        SourceURI: "ad",
                                                    },
                                                    IsOther: false,
                                                    Value: "assumenda",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "necessitatibus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ipsam",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 2856014996737323438,
                                                        },
                                                        SourceURI: "minima",
                                                    },
                                                    IsOther: true,
                                                    Value: "et",
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
                                            FolderID: "ut",
                                            MaxFileSize: "sapiente",
                                            MaxFiles: 1514036909471249240,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "consequuntur",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "cumque",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatibus",
                                                            URI: "dignissimos",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "explicabo",
                                                            YoutubeURI: "qui",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "illo",
                                                            URI: "qui",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "saepe",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "est",
                                                            URI: "cupiditate",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fugiat",
                                                            YoutubeURI: "hic",
                                                        },
                                                    },
                                                },
                                                Text: "dolore",
                                            },
                                            PointValue: 761681772947384450,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "cumque",
                                                            URI: "at",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "enim",
                                                            YoutubeURI: "blanditiis",
                                                        },
                                                    },
                                                },
                                                Text: "nobis",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "est",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatum",
                                                            YoutubeURI: "numquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "accusamus",
                                                            URI: "ipsum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nulla",
                                                            YoutubeURI: "beatae",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "repellat",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "laboriosam",
                                                            YoutubeURI: "id",
                                                        },
                                                    },
                                                },
                                                Text: "nesciunt",
                                            },
                                        },
                                        QuestionID: "et",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "rerum",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 7741424580029192409,
                                            HighLabel: "maiores",
                                            Low: 8928639399317573263,
                                            LowLabel: "voluptatibus",
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
                                    AltText: "voluptas",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 7242125167972479197,
                                    },
                                    SourceURI: "ipsam",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "animi",
                                                Image: &shared.ImageInput{
                                                    AltText: "tempora",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 2502422371121148578,
                                                    },
                                                    SourceURI: "enim",
                                                },
                                                IsOther: false,
                                                Value: "eligendi",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHECKBOX",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: true,
                                        IncludeYear: true,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "amet",
                                        MaxFileSize: "iure",
                                        MaxFiles: 8908933058541040043,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                            "FILE_TYPE_UNSPECIFIED",
                                            "ANY",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "vel",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "nulla",
                                                        URI: "ut",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "distinctio",
                                                        YoutubeURI: "vero",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "odit",
                                                        URI: "ullam",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "aperiam",
                                                        YoutubeURI: "magnam",
                                                    },
                                                },
                                            },
                                            Text: "placeat",
                                        },
                                        PointValue: 2120445231226701489,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "id",
                                                        URI: "molestias",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "qui",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                            },
                                            Text: "rerum",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "officia",
                                                        URI: "est",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quis",
                                                        YoutubeURI: "atque",
                                                    },
                                                },
                                            },
                                            Text: "facilis",
                                        },
                                    },
                                    QuestionID: "dolor",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "est",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 4711560240118737073,
                                        HighLabel: "voluptates",
                                        Low: 7230506922334944628,
                                        LowLabel: "quae",
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
                                "qui": "voluptatem",
                                "aliquam": "in",
                                "voluptatem": "quidem",
                            },
                            Title: "enim",
                            VideoItem: &shared.VideoItem{
                                Caption: "reiciendis",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 889544995983468983,
                                    },
                                    YoutubeURI: "voluptatem",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 2223047520548567431,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 3348966372786221659,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 2749871343573526204,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 4879057540074143363,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "officiis",
                            Title: "in",
                        },
                        UpdateMask: "pariatur",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "ipsam",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "voluptatibus",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 8684346162108043215,
                                    },
                                    SourceURI: "rerum",
                                },
                            },
                            ItemID: "eos",
                            PageBreakItem: map[string]interface{}{
                                "nisi": "dolorum",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "molestiae",
                                                Image: &shared.ImageInput{
                                                    AltText: "consequatur",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 7039557166284870016,
                                                    },
                                                    SourceURI: "nesciunt",
                                                },
                                                IsOther: true,
                                                Value: "iste",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHECKBOX",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "mollitia",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 9142426412757149730,
                                    },
                                    SourceURI: "sed",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "sunt",
                                                    Image: &shared.ImageInput{
                                                        AltText: "qui",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 8170578607294733011,
                                                        },
                                                        SourceURI: "est",
                                                    },
                                                    IsOther: false,
                                                    Value: "rerum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "et",
                                                    Image: &shared.ImageInput{
                                                        AltText: "voluptas",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 5105243335541987909,
                                                        },
                                                        SourceURI: "nostrum",
                                                    },
                                                    IsOther: false,
                                                    Value: "nostrum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "eveniet",
                                                    Image: &shared.ImageInput{
                                                        AltText: "mollitia",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 3128172611915983385,
                                                        },
                                                        SourceURI: "aperiam",
                                                    },
                                                    IsOther: false,
                                                    Value: "culpa",
                                                },
                                            },
                                            Shuffle: true,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "error",
                                            MaxFileSize: "magnam",
                                            MaxFiles: 8276063308289136081,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "AUDIO",
                                                "AUDIO",
                                                "ANY",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "vero",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "eligendi",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "rerum",
                                                            URI: "aspernatur",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "est",
                                                            YoutubeURI: "placeat",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "pariatur",
                                                            URI: "corrupti",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cumque",
                                                            YoutubeURI: "enim",
                                                        },
                                                    },
                                                },
                                                Text: "quisquam",
                                            },
                                            PointValue: 182088582836242343,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsam",
                                                            URI: "non",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sed",
                                                            YoutubeURI: "reprehenderit",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vero",
                                                            URI: "facilis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "debitis",
                                                            YoutubeURI: "animi",
                                                        },
                                                    },
                                                },
                                                Text: "ut",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "expedita",
                                                            URI: "sunt",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "animi",
                                                            YoutubeURI: "unde",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "maiores",
                                                            URI: "cupiditate",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "labore",
                                                            YoutubeURI: "illo",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "laboriosam",
                                                            URI: "laboriosam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "necessitatibus",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                },
                                                Text: "veritatis",
                                            },
                                        },
                                        QuestionID: "suscipit",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "pariatur",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 8546715417534629051,
                                            HighLabel: "velit",
                                            Low: 1563571726729279920,
                                            LowLabel: "quia",
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
                                                    GoToSectionID: "odio",
                                                    Image: &shared.ImageInput{
                                                        AltText: "possimus",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 6097213320097576614,
                                                        },
                                                        SourceURI: "nostrum",
                                                    },
                                                    IsOther: false,
                                                    Value: "ut",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "commodi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quas",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 1600523615376828944,
                                                        },
                                                        SourceURI: "eaque",
                                                    },
                                                    IsOther: true,
                                                    Value: "nostrum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "commodi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "vel",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 7074246751230988091,
                                                        },
                                                        SourceURI: "provident",
                                                    },
                                                    IsOther: false,
                                                    Value: "ab",
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
                                            FolderID: "amet",
                                            MaxFileSize: "qui",
                                            MaxFiles: 5386515303982219896,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "FILE_TYPE_UNSPECIFIED",
                                                "SPREADSHEET",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "explicabo",
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
                                                            DisplayText: "iste",
                                                            URI: "accusantium",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "similique",
                                                            YoutubeURI: "corrupti",
                                                        },
                                                    },
                                                },
                                                Text: "quasi",
                                            },
                                            PointValue: 3522719736874828776,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "omnis",
                                                            URI: "ipsam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quis",
                                                            YoutubeURI: "maiores",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "fugiat",
                                                            URI: "ut",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "tenetur",
                                                            YoutubeURI: "aspernatur",
                                                        },
                                                    },
                                                },
                                                Text: "sit",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quaerat",
                                                            URI: "omnis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "quia",
                                                        },
                                                    },
                                                },
                                                Text: "ducimus",
                                            },
                                        },
                                        QuestionID: "sed",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "nobis",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 3617057307217831165,
                                            HighLabel: "quam",
                                            Low: 5463472236838707364,
                                            LowLabel: "ut",
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
                                    AltText: "dolores",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 7048387579217796344,
                                    },
                                    SourceURI: "vitae",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "est",
                                                Image: &shared.ImageInput{
                                                    AltText: "nulla",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 1467499827457805916,
                                                    },
                                                    SourceURI: "ut",
                                                },
                                                IsOther: true,
                                                Value: "enim",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "a",
                                                Image: &shared.ImageInput{
                                                    AltText: "enim",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 6880590033955052934,
                                                    },
                                                    SourceURI: "aut",
                                                },
                                                IsOther: false,
                                                Value: "modi",
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
                                        FolderID: "et",
                                        MaxFileSize: "sed",
                                        MaxFiles: 7613510986129691238,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "IMAGE",
                                            "SPREADSHEET",
                                            "AUDIO",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "voluptatem",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "molestias",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "dolorem",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "neque",
                                                        URI: "ea",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "at",
                                                        YoutubeURI: "aut",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "dolores",
                                                        URI: "omnis",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "minima",
                                                        YoutubeURI: "non",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "expedita",
                                                        URI: "quaerat",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ex",
                                                        YoutubeURI: "dicta",
                                                    },
                                                },
                                            },
                                            Text: "minus",
                                        },
                                        PointValue: 2643189024539766149,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "et",
                                                        URI: "unde",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "corrupti",
                                                        YoutubeURI: "vitae",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "sapiente",
                                                        URI: "eos",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "omnis",
                                                        YoutubeURI: "sit",
                                                    },
                                                },
                                            },
                                            Text: "aliquam",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "qui",
                                                        URI: "aut",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "voluptates",
                                                        YoutubeURI: "id",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "atque",
                                                        URI: "velit",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quo",
                                                        YoutubeURI: "consectetur",
                                                    },
                                                },
                                            },
                                            Text: "qui",
                                        },
                                    },
                                    QuestionID: "quis",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "fugit",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 374777448867330334,
                                        HighLabel: "alias",
                                        Low: 5337615963840977653,
                                        LowLabel: "delectus",
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
                                "nostrum": "corporis",
                            },
                            Title: "itaque",
                            VideoItem: &shared.VideoItem{
                                Caption: "esse",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 4559575525210067934,
                                    },
                                    YoutubeURI: "omnis",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 8988803565249739725,
                        },
                        UpdateMask: "consequatur",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "enim",
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "nam",
                TargetRevisionID: "eligendi",
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
