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
            FormID: "sit",
        },
        QueryParams: operations.FormsFormsBatchUpdateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: false,
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "voluptatum",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "et",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 161231572858529631,
                                    },
                                    SourceURI: "et",
                                },
                            },
                            ItemID: "voluptate",
                            PageBreakItem: map[string]interface{}{
                                "vitae": "totam",
                                "dolores": "illum",
                                "debitis": "vel",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "id",
                                                Image: &shared.ImageInput{
                                                    AltText: "aspernatur",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 1395437218309923052,
                                                    },
                                                    SourceURI: "commodi",
                                                },
                                                IsOther: true,
                                                Value: "est",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHECKBOX",
                                    },
                                    ShuffleQuestions: true,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "voluptas",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 1059542851699319360,
                                    },
                                    SourceURI: "illo",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "consectetur",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nobis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 7699391924090763411,
                                                        },
                                                        SourceURI: "recusandae",
                                                    },
                                                    IsOther: true,
                                                    Value: "ipsum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "modi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "sint",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 7847956203786849690,
                                                        },
                                                        SourceURI: "exercitationem",
                                                    },
                                                    IsOther: true,
                                                    Value: "reprehenderit",
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
                                            FolderID: "beatae",
                                            MaxFileSize: "veritatis",
                                            MaxFiles: 2671030200101705776,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "ANY",
                                                "PRESENTATION",
                                                "PDF",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "placeat",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "vel",
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
                                                            DisplayText: "voluptas",
                                                            URI: "quam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "reprehenderit",
                                                            YoutubeURI: "qui",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "unde",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "in",
                                                            YoutubeURI: "autem",
                                                        },
                                                    },
                                                },
                                                Text: "qui",
                                            },
                                            PointValue: 35604086129376003,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ab",
                                                            URI: "neque",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ullam",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "accusantium",
                                                            URI: "esse",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "architecto",
                                                            YoutubeURI: "quam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "velit",
                                                            URI: "cumque",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "soluta",
                                                            YoutubeURI: "sunt",
                                                        },
                                                    },
                                                },
                                                Text: "voluptates",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "optio",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "earum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "illo",
                                                            URI: "omnis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ut",
                                                            YoutubeURI: "consequatur",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolor",
                                                            URI: "commodi",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "error",
                                                            YoutubeURI: "reprehenderit",
                                                        },
                                                    },
                                                },
                                                Text: "consectetur",
                                            },
                                        },
                                        QuestionID: "nostrum",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "laboriosam",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 1937101031588528881,
                                            HighLabel: "a",
                                            Low: 1836598054518427835,
                                            LowLabel: "aut",
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
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "ipsa",
                                                    Image: &shared.ImageInput{
                                                        AltText: "expedita",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 4234137922270959652,
                                                        },
                                                        SourceURI: "atque",
                                                    },
                                                    IsOther: true,
                                                    Value: "quisquam",
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
                                            FolderID: "perferendis",
                                            MaxFileSize: "et",
                                            MaxFiles: 2037591971392316788,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "AUDIO",
                                                "IMAGE",
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "est",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "quis",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "labore",
                                                            URI: "et",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "impedit",
                                                            YoutubeURI: "ad",
                                                        },
                                                    },
                                                },
                                                Text: "expedita",
                                            },
                                            PointValue: 4540487686588600123,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "modi",
                                                            URI: "nihil",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "tempora",
                                                            YoutubeURI: "deserunt",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eaque",
                                                            URI: "sunt",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "autem",
                                                        },
                                                    },
                                                },
                                                Text: "quis",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vel",
                                                            URI: "placeat",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "qui",
                                                            YoutubeURI: "nisi",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quis",
                                                            URI: "adipisci",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "porro",
                                                            YoutubeURI: "rerum",
                                                        },
                                                    },
                                                },
                                                Text: "et",
                                            },
                                        },
                                        QuestionID: "accusamus",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "laborum",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 8958290475970215309,
                                            HighLabel: "ut",
                                            Low: 4400124260933614083,
                                            LowLabel: "fugit",
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
                                                    GoToSectionID: "consequuntur",
                                                    Image: &shared.ImageInput{
                                                        AltText: "excepturi",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 1377327594979300801,
                                                        },
                                                        SourceURI: "delectus",
                                                    },
                                                    IsOther: false,
                                                    Value: "animi",
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
                                            FolderID: "sed",
                                            MaxFileSize: "sed",
                                            MaxFiles: 6464511094049078446,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                                "DOCUMENT",
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "pariatur",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "quasi",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "qui",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "possimus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "modi",
                                                            URI: "neque",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequuntur",
                                                            YoutubeURI: "quia",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "est",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "occaecati",
                                                            YoutubeURI: "ex",
                                                        },
                                                    },
                                                },
                                                Text: "voluptatem",
                                            },
                                            PointValue: 7646345395863209143,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "velit",
                                                            URI: "quae",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "est",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "necessitatibus",
                                                            URI: "in",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "possimus",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolorum",
                                                            URI: "doloribus",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "saepe",
                                                            YoutubeURI: "sunt",
                                                        },
                                                    },
                                                },
                                                Text: "earum",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ut",
                                                            URI: "asperiores",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "est",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ipsum",
                                                            URI: "quam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptas",
                                                            YoutubeURI: "nihil",
                                                        },
                                                    },
                                                },
                                                Text: "dolores",
                                            },
                                        },
                                        QuestionID: "suscipit",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "non",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 2991421044203248760,
                                            HighLabel: "ut",
                                            Low: 3357930257403748968,
                                            LowLabel: "illo",
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
                                    AltText: "ipsam",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 9105358522635467874,
                                    },
                                    SourceURI: "blanditiis",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "rerum",
                                                Image: &shared.ImageInput{
                                                    AltText: "dolore",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 7796777083842162182,
                                                    },
                                                    SourceURI: "officia",
                                                },
                                                IsOther: true,
                                                Value: "sunt",
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
                                        FolderID: "qui",
                                        MaxFileSize: "excepturi",
                                        MaxFiles: 6315628527077982941,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "PDF",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "doloremque",
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
                                                        DisplayText: "recusandae",
                                                        URI: "qui",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "minus",
                                                        YoutubeURI: "et",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "rerum",
                                                        URI: "ut",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "rem",
                                                        YoutubeURI: "eos",
                                                    },
                                                },
                                            },
                                            Text: "et",
                                        },
                                        PointValue: 1176850203168067696,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "praesentium",
                                                        URI: "porro",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "nihil",
                                                        YoutubeURI: "adipisci",
                                                    },
                                                },
                                            },
                                            Text: "consequatur",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "accusantium",
                                                        URI: "atque",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "amet",
                                                        YoutubeURI: "nisi",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quidem",
                                                        URI: "est",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quo",
                                                        YoutubeURI: "vero",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "alias",
                                                        URI: "totam",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "deserunt",
                                                        YoutubeURI: "eius",
                                                    },
                                                },
                                            },
                                            Text: "repellat",
                                        },
                                    },
                                    QuestionID: "beatae",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "totam",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 6110482739283003758,
                                        HighLabel: "et",
                                        Low: 7167106058699817943,
                                        LowLabel: "necessitatibus",
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
                                "voluptas": "ut",
                            },
                            Title: "veniam",
                            VideoItem: &shared.VideoItem{
                                Caption: "architecto",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 4841391702283203193,
                                    },
                                    YoutubeURI: "quo",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 7465719782626729327,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 5065591635656109736,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 1215184329252422444,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 4178331056796501958,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "quibusdam",
                            Title: "asperiores",
                        },
                        UpdateMask: "quo",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "ea",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "soluta",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 5850174490929081658,
                                    },
                                    SourceURI: "blanditiis",
                                },
                            },
                            ItemID: "facere",
                            PageBreakItem: map[string]interface{}{
                                "et": "odit",
                                "est": "id",
                                "ipsum": "aut",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "vero",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptatem",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 1253678802066634880,
                                                    },
                                                    SourceURI: "vero",
                                                },
                                                IsOther: true,
                                                Value: "cumque",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "non",
                                                Image: &shared.ImageInput{
                                                    AltText: "non",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 8411630060280462350,
                                                    },
                                                    SourceURI: "quae",
                                                },
                                                IsOther: false,
                                                Value: "magni",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "neque",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 5401654515258649126,
                                    },
                                    SourceURI: "repudiandae",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "enim",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ut",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 4671696214766305422,
                                                        },
                                                        SourceURI: "laborum",
                                                    },
                                                    IsOther: true,
                                                    Value: "nihil",
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
                                            FolderID: "autem",
                                            MaxFileSize: "hic",
                                            MaxFiles: 262877386996496551,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "AUDIO",
                                                "DRAWING",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "minus",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "nostrum",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sit",
                                                            URI: "repellat",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quo",
                                                            YoutubeURI: "dolorum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "laboriosam",
                                                            URI: "velit",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ea",
                                                            YoutubeURI: "tempore",
                                                        },
                                                    },
                                                },
                                                Text: "fugit",
                                            },
                                            PointValue: 2128339608861509852,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aliquid",
                                                            URI: "mollitia",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "magni",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "recusandae",
                                                            URI: "illum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequatur",
                                                            YoutubeURI: "dolores",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "hic",
                                                            URI: "nihil",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "explicabo",
                                                            YoutubeURI: "ex",
                                                        },
                                                    },
                                                },
                                                Text: "iure",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quos",
                                                            URI: "et",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "explicabo",
                                                            YoutubeURI: "necessitatibus",
                                                        },
                                                    },
                                                },
                                                Text: "veniam",
                                            },
                                        },
                                        QuestionID: "qui",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "odit",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 2552826169751964368,
                                            HighLabel: "corporis",
                                            Low: 6502696439032783967,
                                            LowLabel: "esse",
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
                                    AltText: "id",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 153570803637391025,
                                    },
                                    SourceURI: "maiores",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "aperiam",
                                                Image: &shared.ImageInput{
                                                    AltText: "repellendus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 6179772165467236447,
                                                    },
                                                    SourceURI: "earum",
                                                },
                                                IsOther: false,
                                                Value: "officia",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "dolor",
                                                Image: &shared.ImageInput{
                                                    AltText: "quia",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 8724673710750471494,
                                                    },
                                                    SourceURI: "et",
                                                },
                                                IsOther: false,
                                                Value: "recusandae",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "qui",
                                                Image: &shared.ImageInput{
                                                    AltText: "aut",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 3417054809625618671,
                                                    },
                                                    SourceURI: "temporibus",
                                                },
                                                IsOther: false,
                                                Value: "sed",
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
                                        FolderID: "et",
                                        MaxFileSize: "qui",
                                        MaxFiles: 5749655769367477879,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "DOCUMENT",
                                            "SPREADSHEET",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "vero",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "aut",
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
                                                        DisplayText: "sunt",
                                                        URI: "quae",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "placeat",
                                                        YoutubeURI: "vitae",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "rerum",
                                                        URI: "officiis",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "commodi",
                                                        YoutubeURI: "sed",
                                                    },
                                                },
                                            },
                                            Text: "voluptates",
                                        },
                                        PointValue: 1987095690814515857,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ipsa",
                                                        URI: "cum",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "sint",
                                                        YoutubeURI: "aut",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "eaque",
                                                        URI: "facilis",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "et",
                                                        YoutubeURI: "ut",
                                                    },
                                                },
                                            },
                                            Text: "et",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "sit",
                                                        URI: "voluptate",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "eaque",
                                                        YoutubeURI: "consequuntur",
                                                    },
                                                },
                                            },
                                            Text: "et",
                                        },
                                    },
                                    QuestionID: "amet",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "in",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 6612358853391904586,
                                        HighLabel: "minima",
                                        Low: 8742852710189167914,
                                        LowLabel: "et",
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
                                "cupiditate": "quam",
                            },
                            Title: "repellendus",
                            VideoItem: &shared.VideoItem{
                                Caption: "dolores",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 703460223791086499,
                                    },
                                    YoutubeURI: "architecto",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 3689647184521680189,
                        },
                        UpdateMask: "beatae",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: true,
                            },
                        },
                        UpdateMask: "veniam",
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "hic",
                TargetRevisionID: "beatae",
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
