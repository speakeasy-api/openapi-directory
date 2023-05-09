<!-- Start SDK Example Usage -->
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
    res, err := s.Forms.FormsFormsBatchUpdate(ctx, operations.FormsFormsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchUpdateFormRequestInput: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: sdk.Bool(false),
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: sdk.String("distinctio"),
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("quibusdam"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(857946),
                                    },
                                    SourceURI: sdk.String("corrupti"),
                                },
                            },
                            ItemID: sdk.String("illum"),
                            PageBreakItem: map[string]interface{}{
                                "error": "deserunt",
                                "suscipit": "iure",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                GoToSectionID: sdk.String("ipsa"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("delectus"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(383441),
                                                    },
                                                    SourceURI: sdk.String("molestiae"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("minus"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                GoToSectionID: sdk.String("voluptatum"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("iusto"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                        Width: sdk.Int(392785),
                                                    },
                                                    SourceURI: sdk.String("recusandae"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("temporibus"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumChoiceTypeUnspecified.ToPointer(),
                                    },
                                    ShuffleQuestions: sdk.Bool(false),
                                },
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("quis"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                        Width: sdk.Int(648172),
                                    },
                                    SourceURI: sdk.String("perferendis"),
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("quo"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("odit"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(870088),
                                                        },
                                                        SourceURI: sdk.String("maiores"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("molestiae"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("quod"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("esse"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(780529),
                                                        },
                                                        SourceURI: sdk.String("dolorum"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("dicta"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("officia"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("occaecati"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(537373),
                                                        },
                                                        SourceURI: sdk.String("hic"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("optio"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("beatae"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("commodi"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(264555),
                                                        },
                                                        SourceURI: sdk.String("qui"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("impedit"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumCheckbox.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("esse"),
                                            MaxFileSize: sdk.String("ipsum"),
                                            MaxFiles: sdk.Int(568434),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("natus"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("sed"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("dolor"),
                                                            URI: sdk.String("https://hoarse-upper.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("fuga"),
                                                            YoutubeURI: sdk.String("in"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("corporis"),
                                                            URI: sdk.String("https://innocent-thinking.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("architecto"),
                                                            YoutubeURI: sdk.String("ipsa"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            URI: sdk.String("https://prize-plier.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("dolorem"),
                                                            YoutubeURI: sdk.String("corporis"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("explicabo"),
                                            },
                                            PointValue: sdk.Int(750686),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("omnis"),
                                                            URI: sdk.String("http://general-mobster.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("iure"),
                                                            YoutubeURI: sdk.String("culpa"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("doloribus"),
                                                            URI: sdk.String("https://buttery-petitioner.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("culpa"),
                                                            YoutubeURI: sdk.String("consequuntur"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("repellat"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("occaecati"),
                                                            URI: sdk.String("http://immediate-instructor.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("velit"),
                                                            YoutubeURI: sdk.String("error"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("quia"),
                                                            URI: sdk.String("http://cautious-poker.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("enim"),
                                                            YoutubeURI: sdk.String("odit"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("quo"),
                                                            URI: sdk.String("http://weary-fright.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("possimus"),
                                                            YoutubeURI: sdk.String("aut"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("quasi"),
                                            },
                                        },
                                        QuestionID: sdk.String("error"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Dr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(673660),
                                            HighLabel: sdk.String("quasi"),
                                            Low: sdk.Int(971945),
                                            LowLabel: sdk.String("voluptatibus"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("praesentium"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("voluptatibus"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(604846),
                                                        },
                                                        SourceURI: sdk.String("voluptate"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("cum"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("doloremque"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("reprehenderit"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(979587),
                                                        },
                                                        SourceURI: sdk.String("dicta"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("corporis"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("iusto"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("dicta"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(317983),
                                                        },
                                                        SourceURI: sdk.String("accusamus"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("commodi"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("quae"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("ipsum"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(565189),
                                                        },
                                                        SourceURI: sdk.String("excepturi"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("pariatur"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumRadio.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("praesentium"),
                                            MaxFileSize: sdk.String("rem"),
                                            MaxFiles: sdk.Int(916723),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumAudio,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("veritatis"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("itaque"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("incidunt"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("consequatur"),
                                                            URI: sdk.String("https://tender-carload.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("distinctio"),
                                                            YoutubeURI: sdk.String("quibusdam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("labore"),
                                                            URI: sdk.String("http://delightful-graph.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("quos"),
                                                            YoutubeURI: sdk.String("perferendis"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("magni"),
                                            },
                                            PointValue: sdk.Int(828940),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("alias"),
                                                            URI: sdk.String("http://rapid-moat.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("facilis"),
                                                            YoutubeURI: sdk.String("tempore"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("labore"),
                                                            URI: sdk.String("https://infantile-demur.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("sint"),
                                                            YoutubeURI: sdk.String("aliquid"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("provident"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sint"),
                                                            URI: sdk.String("https://edible-tectonics.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("dolorum"),
                                                            YoutubeURI: sdk.String("in"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("in"),
                                                            URI: sdk.String("https://wonderful-proof-reader.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("magnam"),
                                                            YoutubeURI: sdk.String("cumque"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("facere"),
                                                            URI: sdk.String("http://humming-police.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("non"),
                                                            YoutubeURI: sdk.String("occaecati"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("enim"),
                                                            URI: sdk.String("https://white-printing.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("nam"),
                                                            YoutubeURI: sdk.String("id"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("blanditiis"),
                                            },
                                        },
                                        QuestionID: sdk.String("deleniti"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Dr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(230533),
                                            HighLabel: sdk.String("deserunt"),
                                            Low: sdk.Int(394869),
                                            LowLabel: sdk.String("vel"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("natus"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(474867),
                                    },
                                    SourceURI: sdk.String("perferendis"),
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("distinctio"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("id"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(290077),
                                                    },
                                                    SourceURI: sdk.String("suscipit"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("natus"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("eum"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("vero"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(102863),
                                                    },
                                                    SourceURI: sdk.String("magnam"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("et"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumCheckbox.ToPointer(),
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: sdk.Bool(false),
                                        IncludeYear: sdk.Bool(false),
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: sdk.String("ullam"),
                                        MaxFileSize: sdk.String("provident"),
                                        MaxFiles: sdk.Int(551816),
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                            shared.FileUploadQuestionTypesEnumPdf,
                                            shared.FileUploadQuestionTypesEnumAudio,
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("ad"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("eum"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("dolor"),
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("odit"),
                                                        URI: sdk.String("http://bumpy-hosiery.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("debitis"),
                                                        YoutubeURI: sdk.String("eius"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("maxime"),
                                                        URI: sdk.String("https://rotating-identification.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("architecto"),
                                                        YoutubeURI: sdk.String("repudiandae"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("ullam"),
                                                        URI: sdk.String("https://knobby-zither.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("sed"),
                                                        YoutubeURI: sdk.String("saepe"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("pariatur"),
                                                        URI: sdk.String("http://cute-lens.name"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("magni"),
                                                        YoutubeURI: sdk.String("sunt"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("quo"),
                                        },
                                        PointValue: sdk.Int(848009),
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("maxime"),
                                                        URI: sdk.String("http://nimble-caution.info"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("accusantium"),
                                                        YoutubeURI: sdk.String("ab"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("maiores"),
                                                        URI: sdk.String("https://harmonious-in-joke.info"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("nam"),
                                                        YoutubeURI: sdk.String("eaque"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("pariatur"),
                                                        URI: sdk.String("http://wise-airbag.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("amet"),
                                                        YoutubeURI: sdk.String("aut"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("cumque"),
                                                        URI: sdk.String("http://wasteful-rectangle.net"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("dolores"),
                                                        YoutubeURI: sdk.String("quis"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("totam"),
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("eaque"),
                                                        URI: sdk.String("http://disfigured-collapse.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("dolores"),
                                                        YoutubeURI: sdk.String("minus"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("quam"),
                                                        URI: sdk.String("http://trusty-filter.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("recusandae"),
                                                        YoutubeURI: sdk.String("omnis"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("facilis"),
                                        },
                                    },
                                    QuestionID: sdk.String("perspiciatis"),
                                    Required: sdk.Bool(false),
                                    RowQuestion: &shared.RowQuestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: sdk.Int(783645),
                                        HighLabel: sdk.String("consequuntur"),
                                        Low: sdk.Int(500026),
                                        LowLabel: sdk.String("error"),
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: sdk.Bool(false),
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: sdk.Bool(false),
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "occaecati": "rerum",
                            },
                            Title: sdk.String("Mrs."),
                            VideoItem: &shared.VideoItem{
                                Caption: sdk.String("asperiores"),
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                        Width: sdk.Int(267262),
                                    },
                                    YoutubeURI: sdk.String("iste"),
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(679091),
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: sdk.Int(535633),
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: sdk.Int(864282),
                        },
                        OriginalLocation: &shared.Location{
                            Index: sdk.Int(589910),
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: sdk.String("nobis"),
                            Title: sdk.String("Miss"),
                        },
                        UpdateMask: sdk.String("delectus"),
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: sdk.String("quaerat"),
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("quos"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(212390),
                                    },
                                    SourceURI: sdk.String("dolorem"),
                                },
                            },
                            ItemID: sdk.String("dolor"),
                            PageBreakItem: map[string]interface{}{
                                "ipsum": "hic",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("voluptate"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("dignissimos"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(227414),
                                                    },
                                                    SourceURI: sdk.String("dolorum"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("numquam"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                GoToSectionID: sdk.String("ipsa"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("ipsa"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(487838),
                                                    },
                                                    SourceURI: sdk.String("quaerat"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("accusamus"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("voluptatibus"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("voluptas"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                        Width: sdk.Int(179603),
                                                    },
                                                    SourceURI: sdk.String("atque"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("sit"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                    },
                                    ShuffleQuestions: sdk.Bool(false),
                                },
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("ab"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(679393),
                                    },
                                    SourceURI: sdk.String("iusto"),
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("omnis"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("necessitatibus"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(990339),
                                                        },
                                                        SourceURI: sdk.String("nihil"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("ipsum"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("id"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("saepe"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(137220),
                                                        },
                                                        SourceURI: sdk.String("perferendis"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("amet"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("accusamus"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("ad"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(383464),
                                                        },
                                                        SourceURI: sdk.String("deserunt"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("provident"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumRadio.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("repellendus"),
                                            MaxFileSize: sdk.String("totam"),
                                            MaxFiles: sdk.Int(628982),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumVideo,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("tempora"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("vel"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("officiis"),
                                                            URI: sdk.String("http://raw-venue.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("harum"),
                                                            YoutubeURI: sdk.String("iusto"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("ipsum"),
                                                            URI: sdk.String("https://wavy-cuisine.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("accusamus"),
                                                            YoutubeURI: sdk.String("numquam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("enim"),
                                                            URI: sdk.String("http://well-lit-literature.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("sit"),
                                                            YoutubeURI: sdk.String("expedita"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("neque"),
                                                            URI: sdk.String("http://improbable-redhead.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("deserunt"),
                                                            YoutubeURI: sdk.String("quam"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("ipsum"),
                                            },
                                            PointValue: sdk.Int(277628),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("cupiditate"),
                                                            URI: sdk.String("https://tough-reunion.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("laborum"),
                                                            YoutubeURI: sdk.String("totam"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("incidunt"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("dolores"),
                                                            URI: sdk.String("https://rotten-grandfather.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("molestias"),
                                                            YoutubeURI: sdk.String("temporibus"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("qui"),
                                            },
                                        },
                                        QuestionID: sdk.String("neque"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Mr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(164959),
                                            HighLabel: sdk.String("odio"),
                                            Low: sdk.Int(124833),
                                            LowLabel: sdk.String("ullam"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("voluptatem"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("cumque"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(748664),
                                                        },
                                                        SourceURI: sdk.String("et"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("saepe"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("veritatis"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("nobis"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(731694),
                                                        },
                                                        SourceURI: sdk.String("cupiditate"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("aperiam"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("dolorem"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("dolore"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(240829),
                                                        },
                                                        SourceURI: sdk.String("dolorum"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("architecto"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumChoiceTypeUnspecified.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("aut"),
                                            MaxFileSize: sdk.String("quas"),
                                            MaxFiles: sdk.Int(929530),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumPdf,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("porro"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("doloribus"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("ut"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("facilis"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("qui"),
                                                            URI: sdk.String("http://magnificent-kangaroo.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("voluptatibus"),
                                                            YoutubeURI: sdk.String("quisquam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("vero"),
                                                            URI: sdk.String("https://glorious-crash.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("voluptate"),
                                                            YoutubeURI: sdk.String("consectetur"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("vero"),
                                                            URI: sdk.String("https://liquid-underweight.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("quod"),
                                                            YoutubeURI: sdk.String("odio"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("similique"),
                                            },
                                            PointValue: sdk.Int(708548),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("ducimus"),
                                                            URI: sdk.String("http://terrible-status.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("natus"),
                                                            YoutubeURI: sdk.String("impedit"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aut"),
                                                            URI: sdk.String("https://grateful-stumbling.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("porro"),
                                                            YoutubeURI: sdk.String("maiores"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("doloribus"),
                                                            URI: sdk.String("http://silver-lanai.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("officia"),
                                                            YoutubeURI: sdk.String("tempora"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("ipsam"),
                                                            URI: sdk.String("http://concrete-hill.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("magnam"),
                                                            YoutubeURI: sdk.String("ratione"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("ex"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("dicta"),
                                                            URI: sdk.String("http://wordy-bother.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("nulla"),
                                                            YoutubeURI: sdk.String("excepturi"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("voluptatibus"),
                                                            URI: sdk.String("http://well-worn-sequence.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("ea"),
                                                            YoutubeURI: sdk.String("impedit"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("corporis"),
                                                            URI: sdk.String("http://husky-bid.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("ea"),
                                                            YoutubeURI: sdk.String("quo"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("consectetur"),
                                            },
                                        },
                                        QuestionID: sdk.String("recusandae"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Mr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(325310),
                                            HighLabel: sdk.String("eaque"),
                                            Low: sdk.Int(952871),
                                            LowLabel: sdk.String("libero"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("aut"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                        Width: sdk.Int(533466),
                                    },
                                    SourceURI: sdk.String("impedit"),
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                GoToSectionID: sdk.String("accusamus"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("inventore"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(89603),
                                                    },
                                                    SourceURI: sdk.String("dolorum"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("laborum"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                GoToSectionID: sdk.String("velit"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("eum"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(752135),
                                                    },
                                                    SourceURI: sdk.String("quas"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("assumenda"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: sdk.Bool(false),
                                        IncludeYear: sdk.Bool(false),
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: sdk.String("voluptas"),
                                        MaxFileSize: sdk.String("libero"),
                                        MaxFiles: sdk.Int(96549),
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            shared.FileUploadQuestionTypesEnumDocument,
                                            shared.FileUploadQuestionTypesEnumAny,
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("ipsa"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("molestiae"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("magnam"),
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("eius"),
                                                        URI: sdk.String("http://jolly-lord.net"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("reprehenderit"),
                                                        YoutubeURI: sdk.String("quidem"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("fugiat"),
                                                        URI: sdk.String("http://infantile-geek.net"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("eos"),
                                                        YoutubeURI: sdk.String("praesentium"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("quisquam"),
                                        },
                                        PointValue: sdk.Int(86377),
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("id"),
                                                        URI: sdk.String("https://dishonest-screw.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("quo"),
                                                        YoutubeURI: sdk.String("fuga"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("eius"),
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("voluptas"),
                                                        URI: sdk.String("http://official-admin.biz"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("debitis"),
                                                        YoutubeURI: sdk.String("ipsam"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("aspernatur"),
                                        },
                                    },
                                    QuestionID: sdk.String("sequi"),
                                    Required: sdk.Bool(false),
                                    RowQuestion: &shared.RowQuestion{
                                        Title: sdk.String("Miss"),
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: sdk.Int(459856),
                                        HighLabel: sdk.String("recusandae"),
                                        Low: sdk.Int(44612),
                                        LowLabel: sdk.String("distinctio"),
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: sdk.Bool(false),
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: sdk.Bool(false),
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "dignissimos": "inventore",
                                "nihil": "totam",
                                "accusamus": "aliquam",
                                "odio": "occaecati",
                            },
                            Title: sdk.String("Ms."),
                            VideoItem: &shared.VideoItem{
                                Caption: sdk.String("sapiente"),
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                        Width: sdk.Int(645570),
                                    },
                                    YoutubeURI: sdk.String("molestiae"),
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(35362),
                        },
                        UpdateMask: sdk.String("porro"),
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: sdk.Bool(false),
                            },
                        },
                        UpdateMask: sdk.String("eum"),
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: sdk.String("quas"),
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("praesentium"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                        Width: sdk.Int(536178),
                                    },
                                    SourceURI: sdk.String("fugit"),
                                },
                            },
                            ItemID: sdk.String("fuga"),
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
                                                GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                GoToSectionID: sdk.String("ratione"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("explicabo"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(578922),
                                                    },
                                                    SourceURI: sdk.String("atque"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("et"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("eveniet"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("accusamus"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(458604),
                                                    },
                                                    SourceURI: sdk.String("quod"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("nam"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                GoToSectionID: sdk.String("aliquid"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("quasi"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(426306),
                                                    },
                                                    SourceURI: sdk.String("harum"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("molestiae"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("occaecati"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("minima"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                        Width: sdk.Int(756779),
                                                    },
                                                    SourceURI: sdk.String("sit"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("culpa"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumCheckbox.ToPointer(),
                                    },
                                    ShuffleQuestions: sdk.Bool(false),
                                },
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("adipisci"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                        Width: sdk.Int(160538),
                                    },
                                    SourceURI: sdk.String("consequatur"),
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("consectetur"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("esse"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(590984),
                                                        },
                                                        SourceURI: sdk.String("a"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("nulla"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("esse"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("quasi"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(621679),
                                                        },
                                                        SourceURI: sdk.String("sint"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("pariatur"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("quia"),
                                            MaxFileSize: sdk.String("eveniet"),
                                            MaxFiles: sdk.Int(992430),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                                shared.FileUploadQuestionTypesEnumAny,
                                                shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                                shared.FileUploadQuestionTypesEnumPdf,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("aliquid"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("tenetur"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("quae"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("vel"),
                                                            URI: sdk.String("http://extra-small-recession.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("soluta"),
                                                            YoutubeURI: sdk.String("accusantium"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aliquam"),
                                                            URI: sdk.String("https://clear-fly.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("ullam"),
                                                            YoutubeURI: sdk.String("nisi"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aut"),
                                                            URI: sdk.String("https://dense-stallion.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("deleniti"),
                                                            YoutubeURI: sdk.String("itaque"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("dolorum"),
                                                            URI: sdk.String("http://paltry-utensil.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("at"),
                                                            YoutubeURI: sdk.String("et"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("voluptate"),
                                            },
                                            PointValue: sdk.Int(55965),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("veritatis"),
                                                            URI: sdk.String("http://enormous-orator.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("accusantium"),
                                                            YoutubeURI: sdk.String("rem"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aut"),
                                                            URI: sdk.String("https://inconsequential-performance.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("corrupti"),
                                                            YoutubeURI: sdk.String("non"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("voluptatem"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("occaecati"),
                                                            URI: sdk.String("http://sneaky-cardigan.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("aut"),
                                                            YoutubeURI: sdk.String("dignissimos"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("dicta"),
                                            },
                                        },
                                        QuestionID: sdk.String("maiores"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Miss"),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(244651),
                                            HighLabel: sdk.String("voluptatibus"),
                                            Low: sdk.Int(374323),
                                            LowLabel: sdk.String("asperiores"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("quaerat"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("consequuntur"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(638762),
                                                        },
                                                        SourceURI: sdk.String("maxime"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("dignissimos"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumCheckbox.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("asperiores"),
                                            MaxFileSize: sdk.String("nemo"),
                                            MaxFiles: sdk.Int(65304),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumImage,
                                                shared.FileUploadQuestionTypesEnumVideo,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("ab"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("adipisci"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("id"),
                                                            URI: sdk.String("http://everlasting-parking.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("recusandae"),
                                                            YoutubeURI: sdk.String("totam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("fugiat"),
                                                            URI: sdk.String("http://lonely-mentor.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("labore"),
                                                            YoutubeURI: sdk.String("possimus"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("facilis"),
                                                            URI: sdk.String("https://immense-icing.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            YoutubeURI: sdk.String("assumenda"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("nemo"),
                                            },
                                            PointValue: sdk.Int(924967),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aperiam"),
                                                            URI: sdk.String("https://emotional-ignorant.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("earum"),
                                                            YoutubeURI: sdk.String("facere"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("numquam"),
                                                            URI: sdk.String("https://helpless-warming.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("saepe"),
                                                            YoutubeURI: sdk.String("necessitatibus"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("dolore"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("asperiores"),
                                                            URI: sdk.String("http://excellent-crystal.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("dignissimos"),
                                                            YoutubeURI: sdk.String("a"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("debitis"),
                                            },
                                        },
                                        QuestionID: sdk.String("consectetur"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Mrs."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(689768),
                                            HighLabel: sdk.String("laboriosam"),
                                            Low: sdk.Int(58356),
                                            LowLabel: sdk.String("voluptates"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("accusamus"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("similique"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(132815),
                                                        },
                                                        SourceURI: sdk.String("voluptas"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("voluptas"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("minima"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("nobis"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(237807),
                                                        },
                                                        SourceURI: sdk.String("minus"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("dolores"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("in"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("dolore"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(885963),
                                                        },
                                                        SourceURI: sdk.String("temporibus"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("ullam"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumChoiceTypeUnspecified.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("cum"),
                                            MaxFileSize: sdk.String("blanditiis"),
                                            MaxFiles: sdk.Int(555361),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumDocument,
                                                shared.FileUploadQuestionTypesEnumPdf,
                                                shared.FileUploadQuestionTypesEnumDrawing,
                                                shared.FileUploadQuestionTypesEnumVideo,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("hic"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("exercitationem"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("nobis"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("rerum"),
                                                            URI: sdk.String("http://wide-carnation.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("facilis"),
                                                            YoutubeURI: sdk.String("voluptate"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("expedita"),
                                            },
                                            PointValue: sdk.Int(70869),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("dolore"),
                                                            URI: sdk.String("https://criminal-id.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("quidem"),
                                                            YoutubeURI: sdk.String("explicabo"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("voluptas"),
                                                            URI: sdk.String("https://burly-geometry.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("debitis"),
                                                            YoutubeURI: sdk.String("illo"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            URI: sdk.String("http://motionless-whisker.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("sed"),
                                                            YoutubeURI: sdk.String("provident"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("eius"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("ipsum"),
                                                            URI: sdk.String("http://obedient-medicine.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("tempora"),
                                                            YoutubeURI: sdk.String("tempora"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("voluptate"),
                                                            URI: sdk.String("https://ideal-amendment.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("officiis"),
                                                            YoutubeURI: sdk.String("praesentium"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("facilis"),
                                                            URI: sdk.String("http://feline-futon.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("rem"),
                                                            YoutubeURI: sdk.String("sit"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nobis"),
                                                            URI: sdk.String("https://glass-eyelid.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            YoutubeURI: sdk.String("nulla"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("magni"),
                                            },
                                        },
                                        QuestionID: sdk.String("aperiam"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Dr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(253642),
                                            HighLabel: sdk.String("veniam"),
                                            Low: sdk.Int(446135),
                                            LowLabel: sdk.String("officiis"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("exercitationem"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("praesentium"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(386827),
                                                        },
                                                        SourceURI: sdk.String("dolorum"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("voluptatum"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumCheckbox.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("hic"),
                                            MaxFileSize: sdk.String("expedita"),
                                            MaxFiles: sdk.Int(892863),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumPdf,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("officia"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("dolorum"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("accusamus"),
                                                            URI: sdk.String("http://monthly-chapter.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("fugiat"),
                                                            YoutubeURI: sdk.String("voluptatem"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("culpa"),
                                                            URI: sdk.String("https://forceful-activity.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("ipsam"),
                                                            YoutubeURI: sdk.String("sit"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("voluptatum"),
                                                            URI: sdk.String("https://valid-forestry.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("blanditiis"),
                                                            YoutubeURI: sdk.String("ex"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("sed"),
                                            },
                                            PointValue: sdk.Int(24313),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nostrum"),
                                                            URI: sdk.String("https://phony-ad.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            YoutubeURI: sdk.String("dolorem"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("harum"),
                                                            URI: sdk.String("http://burly-morsel.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("quidem"),
                                                            YoutubeURI: sdk.String("atque"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("laborum"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("tenetur"),
                                                            URI: sdk.String("http://adorable-cruelty.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("voluptate"),
                                                            YoutubeURI: sdk.String("unde"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            URI: sdk.String("https://talkative-volcano.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("perferendis"),
                                                            YoutubeURI: sdk.String("est"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("quidem"),
                                                            URI: sdk.String("http://stupendous-pray.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("mollitia"),
                                                            YoutubeURI: sdk.String("veniam"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("voluptatem"),
                                            },
                                        },
                                        QuestionID: sdk.String("quisquam"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Dr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(97243),
                                            HighLabel: sdk.String("atque"),
                                            Low: sdk.Int(442036),
                                            LowLabel: sdk.String("asperiores"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("totam"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(693957),
                                    },
                                    SourceURI: sdk.String("maxime"),
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("amet"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("assumenda"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(539118),
                                                    },
                                                    SourceURI: sdk.String("error"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("officiis"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: sdk.Bool(false),
                                        IncludeYear: sdk.Bool(false),
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: sdk.String("accusamus"),
                                        MaxFileSize: sdk.String("natus"),
                                        MaxFiles: sdk.Int(328303),
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            shared.FileUploadQuestionTypesEnumSpreadsheet,
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("corrupti"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("at"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("error"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("blanditiis"),
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("repudiandae"),
                                                        URI: sdk.String("https://modest-cactus.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("dolorum"),
                                                        YoutubeURI: sdk.String("repellendus"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("labore"),
                                                        URI: sdk.String("https://arctic-tracking.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("accusantium"),
                                                        YoutubeURI: sdk.String("beatae"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("dolores"),
                                        },
                                        PointValue: sdk.Int(316488),
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("velit"),
                                                        URI: sdk.String("https://negative-election.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("consequuntur"),
                                                        YoutubeURI: sdk.String("occaecati"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("officiis"),
                                                        URI: sdk.String("https://international-dame.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("occaecati"),
                                                        YoutubeURI: sdk.String("consequuntur"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("fugit"),
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("quis"),
                                                        URI: sdk.String("http://pitiful-beginner.info"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("quidem"),
                                                        YoutubeURI: sdk.String("eveniet"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("non"),
                                                        URI: sdk.String("https://any-hope.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("totam"),
                                                        YoutubeURI: sdk.String("quae"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("molestiae"),
                                                        URI: sdk.String("https://delirious-representation.info"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("necessitatibus"),
                                                        YoutubeURI: sdk.String("ratione"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("laborum"),
                                        },
                                    },
                                    QuestionID: sdk.String("distinctio"),
                                    Required: sdk.Bool(false),
                                    RowQuestion: &shared.RowQuestion{
                                        Title: sdk.String("Ms."),
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: sdk.Int(523006),
                                        HighLabel: sdk.String("aliquam"),
                                        Low: sdk.Int(320565),
                                        LowLabel: sdk.String("repellat"),
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: sdk.Bool(false),
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: sdk.Bool(false),
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "corporis": "perspiciatis",
                            },
                            Title: sdk.String("Ms."),
                            VideoItem: &shared.VideoItem{
                                Caption: sdk.String("mollitia"),
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(5189),
                                    },
                                    YoutubeURI: sdk.String("maiores"),
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(970222),
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: sdk.Int(174658),
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: sdk.Int(663866),
                        },
                        OriginalLocation: &shared.Location{
                            Index: sdk.Int(327988),
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: sdk.String("dolore"),
                            Title: sdk.String("Miss"),
                        },
                        UpdateMask: sdk.String("nesciunt"),
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: sdk.String("quae"),
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("recusandae"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(309251),
                                    },
                                    SourceURI: sdk.String("molestiae"),
                                },
                            },
                            ItemID: sdk.String("ex"),
                            PageBreakItem: map[string]interface{}{
                                "culpa": "adipisci",
                                "debitis": "laudantium",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("recusandae"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("esse"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                        Width: sdk.Int(337477),
                                                    },
                                                    SourceURI: sdk.String("eum"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("reiciendis"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("aspernatur"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("ullam"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(657020),
                                                    },
                                                    SourceURI: sdk.String("nostrum"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("mollitia"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumCheckbox.ToPointer(),
                                    },
                                    ShuffleQuestions: sdk.Bool(false),
                                },
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("possimus"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(402767),
                                    },
                                    SourceURI: sdk.String("aliquid"),
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("ullam"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("in"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(937636),
                                                        },
                                                        SourceURI: sdk.String("officia"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("laborum"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("modi"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("voluptatibus"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(889794),
                                                        },
                                                        SourceURI: sdk.String("sapiente"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("cumque"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("rerum"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("tempora"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(82057),
                                                        },
                                                        SourceURI: sdk.String("fugit"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("cumque"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("perferendis"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("velit"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(432281),
                                                        },
                                                        SourceURI: sdk.String("eius"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("rem"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("impedit"),
                                            MaxFileSize: sdk.String("eos"),
                                            MaxFiles: sdk.Int(958741),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumAny,
                                                shared.FileUploadQuestionTypesEnumPresentation,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("cupiditate"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("earum"),
                                                            URI: sdk.String("https://warlike-station.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("earum"),
                                                            YoutubeURI: sdk.String("perspiciatis"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("maiores"),
                                                            URI: sdk.String("https://icky-seal.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("dolorem"),
                                                            YoutubeURI: sdk.String("fugit"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("cumque"),
                                                            URI: sdk.String("https://deserted-piano.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("nulla"),
                                                            YoutubeURI: sdk.String("consequatur"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("quasi"),
                                            },
                                            PointValue: sdk.Int(90233),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("natus"),
                                                            URI: sdk.String("https://hidden-deal.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("magni"),
                                                            YoutubeURI: sdk.String("doloribus"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nulla"),
                                                            URI: sdk.String("https://babyish-dissemination.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("molestiae"),
                                                            YoutubeURI: sdk.String("dicta"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("iusto"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("praesentium"),
                                                            URI: sdk.String("https://wicked-hellcat.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("fugiat"),
                                                            YoutubeURI: sdk.String("doloremque"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("dicta"),
                                                            URI: sdk.String("http://fat-infant.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("consectetur"),
                                                            YoutubeURI: sdk.String("aliquid"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("ipsa"),
                                            },
                                        },
                                        QuestionID: sdk.String("laborum"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Mr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(344718),
                                            HighLabel: sdk.String("fugiat"),
                                            Low: sdk.Int(713767),
                                            LowLabel: sdk.String("aliquid"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("officia"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(399161),
                                    },
                                    SourceURI: sdk.String("perferendis"),
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("iste"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("id"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(625358),
                                                    },
                                                    SourceURI: sdk.String("possimus"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("voluptates"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("laborum"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("libero"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(536923),
                                                    },
                                                    SourceURI: sdk.String("enim"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("vitae"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: sdk.Bool(false),
                                        IncludeYear: sdk.Bool(false),
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: sdk.String("ex"),
                                        MaxFileSize: sdk.String("quo"),
                                        MaxFiles: sdk.Int(405373),
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            shared.FileUploadQuestionTypesEnumPresentation,
                                            shared.FileUploadQuestionTypesEnumImage,
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("molestias"),
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("aliquid"),
                                                        URI: sdk.String("http://messy-occupation.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("rerum"),
                                                        YoutubeURI: sdk.String("est"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("culpa"),
                                                        URI: sdk.String("http://well-off-tax.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("fuga"),
                                                        YoutubeURI: sdk.String("pariatur"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("debitis"),
                                                        URI: sdk.String("http://able-makeup.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("ex"),
                                                        YoutubeURI: sdk.String("sapiente"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("rem"),
                                        },
                                        PointValue: sdk.Int(796320),
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("asperiores"),
                                                        URI: sdk.String("http://gross-album.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("totam"),
                                                        YoutubeURI: sdk.String("impedit"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("quibusdam"),
                                                        URI: sdk.String("https://harmonious-parenthesis.biz"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("aliquam"),
                                                        YoutubeURI: sdk.String("inventore"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("deleniti"),
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("tempora"),
                                                        URI: sdk.String("http://acidic-bower.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("modi"),
                                                        YoutubeURI: sdk.String("fugit"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("ab"),
                                        },
                                    },
                                    QuestionID: sdk.String("laudantium"),
                                    Required: sdk.Bool(false),
                                    RowQuestion: &shared.RowQuestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: sdk.Int(222658),
                                        HighLabel: sdk.String("fugiat"),
                                        Low: sdk.Int(369490),
                                        LowLabel: sdk.String("consequuntur"),
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: sdk.Bool(false),
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: sdk.Bool(false),
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "quas": "eveniet",
                            },
                            Title: sdk.String("Miss"),
                            VideoItem: &shared.VideoItem{
                                Caption: sdk.String("officiis"),
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(897277),
                                    },
                                    YoutubeURI: sdk.String("sed"),
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(332191),
                        },
                        UpdateMask: sdk.String("nesciunt"),
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: sdk.Bool(false),
                            },
                        },
                        UpdateMask: sdk.String("expedita"),
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: sdk.String("eum"),
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("vel"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(301692),
                                    },
                                    SourceURI: sdk.String("exercitationem"),
                                },
                            },
                            ItemID: sdk.String("ab"),
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
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("at"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("vero"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                        Width: sdk.Int(690785),
                                                    },
                                                    SourceURI: sdk.String("sequi"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("doloribus"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                    },
                                    ShuffleQuestions: sdk.Bool(false),
                                },
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("optio"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(364544),
                                    },
                                    SourceURI: sdk.String("voluptate"),
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("numquam"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("nemo"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(260904),
                                                        },
                                                        SourceURI: sdk.String("aspernatur"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("ducimus"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("fuga"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("laudantium"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(97493),
                                                        },
                                                        SourceURI: sdk.String("rem"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("fugiat"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("nisi"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("consequuntur"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(46806),
                                                        },
                                                        SourceURI: sdk.String("cupiditate"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("reiciendis"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumCheckbox.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("alias"),
                                            MaxFileSize: sdk.String("omnis"),
                                            MaxFiles: sdk.Int(178580),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumPdf,
                                                shared.FileUploadQuestionTypesEnumAny,
                                                shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("accusamus"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("voluptatibus"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("distinctio"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("delectus"),
                                                            URI: sdk.String("http://lumbering-sibling.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("temporibus"),
                                                            YoutubeURI: sdk.String("quos"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("commodi"),
                                                            URI: sdk.String("https://impassioned-local.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("modi"),
                                                            YoutubeURI: sdk.String("nam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("vero"),
                                                            URI: sdk.String("http://harmful-heron.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("quasi"),
                                                            YoutubeURI: sdk.String("non"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("maiores"),
                                            },
                                            PointValue: sdk.Int(318233),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nulla"),
                                                            URI: sdk.String("https://joyous-fourths.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("est"),
                                                            YoutubeURI: sdk.String("quis"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sint"),
                                                            URI: sdk.String("https://soggy-usher.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("asperiores"),
                                                            YoutubeURI: sdk.String("ex"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("voluptas"),
                                                            URI: sdk.String("https://whole-banyan.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("fuga"),
                                                            YoutubeURI: sdk.String("laborum"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("consectetur"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("atque"),
                                                            URI: sdk.String("http://sociable-class.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("repudiandae"),
                                                            YoutubeURI: sdk.String("nam"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("dolore"),
                                            },
                                        },
                                        QuestionID: sdk.String("iusto"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Ms."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(194023),
                                            HighLabel: sdk.String("dignissimos"),
                                            Low: sdk.Int(205566),
                                            LowLabel: sdk.String("quo"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("iure"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("odit"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(426904),
                                                        },
                                                        SourceURI: sdk.String("magnam"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("quibusdam"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("facere"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("libero"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(975425),
                                                        },
                                                        SourceURI: sdk.String("quia"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("porro"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("velit"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("illo"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(424663),
                                                        },
                                                        SourceURI: sdk.String("ea"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("beatae"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("excepturi"),
                                            MaxFileSize: sdk.String("eum"),
                                            MaxFiles: sdk.Int(246557),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumDrawing,
                                                shared.FileUploadQuestionTypesEnumAudio,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("impedit"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("iste"),
                                                            URI: sdk.String("https://adorable-goodbye.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("velit"),
                                                            YoutubeURI: sdk.String("laborum"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("non"),
                                                            URI: sdk.String("http://left-amber.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("consequatur"),
                                                            YoutubeURI: sdk.String("officia"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("recusandae"),
                                                            URI: sdk.String("http://required-gasket.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("placeat"),
                                                            YoutubeURI: sdk.String("perspiciatis"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("expedita"),
                                                            URI: sdk.String("https://weird-income.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("unde"),
                                                            YoutubeURI: sdk.String("necessitatibus"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("animi"),
                                            },
                                            PointValue: sdk.Int(769967),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("corporis"),
                                                            URI: sdk.String("https://petty-indication.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("veritatis"),
                                                            YoutubeURI: sdk.String("vero"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("consectetur"),
                                                            URI: sdk.String("http://bogus-counsel.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("qui"),
                                                            YoutubeURI: sdk.String("iste"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("ex"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("soluta"),
                                                            URI: sdk.String("https://mellow-pony.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("fugit"),
                                                            YoutubeURI: sdk.String("alias"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("magni"),
                                                            URI: sdk.String("http://belated-bandolier.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("neque"),
                                                            YoutubeURI: sdk.String("exercitationem"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("itaque"),
                                            },
                                        },
                                        QuestionID: sdk.String("et"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Mrs."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(602229),
                                            HighLabel: sdk.String("nulla"),
                                            Low: sdk.Int(714376),
                                            LowLabel: sdk.String("maxime"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("nostrum"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("omnis"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(115661),
                                                        },
                                                        SourceURI: sdk.String("id"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("libero"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("officia"),
                                            MaxFileSize: sdk.String("quos"),
                                            MaxFiles: sdk.Int(811939),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumSpreadsheet,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("voluptates"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aperiam"),
                                                            URI: sdk.String("https://flippant-robotics.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("voluptatem"),
                                                            YoutubeURI: sdk.String("autem"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("esse"),
                                            },
                                            PointValue: sdk.Int(172951),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("beatae"),
                                                            URI: sdk.String("https://submissive-masterpiece.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("provident"),
                                                            YoutubeURI: sdk.String("accusamus"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("necessitatibus"),
                                                            URI: sdk.String("https://noteworthy-halt.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("ipsam"),
                                                            YoutubeURI: sdk.String("rerum"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("laudantium"),
                                                            URI: sdk.String("http://unhappy-waterspout.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("at"),
                                                            YoutubeURI: sdk.String("alias"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("quia"),
                                                            URI: sdk.String("https://realistic-trachoma.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("expedita"),
                                                            YoutubeURI: sdk.String("officiis"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("eos"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("odio"),
                                                            URI: sdk.String("https://constant-cap.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("error"),
                                                            YoutubeURI: sdk.String("earum"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("adipisci"),
                                                            URI: sdk.String("https://pleasing-drapes.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("quis"),
                                                            YoutubeURI: sdk.String("beatae"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("unde"),
                                                            URI: sdk.String("http://whimsical-mystery.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("numquam"),
                                                            YoutubeURI: sdk.String("numquam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nesciunt"),
                                                            URI: sdk.String("https://popular-kitty.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("necessitatibus"),
                                                            YoutubeURI: sdk.String("corporis"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("qui"),
                                            },
                                        },
                                        QuestionID: sdk.String("expedita"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Ms."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(587375),
                                            HighLabel: sdk.String("minima"),
                                            Low: sdk.Int(809594),
                                            LowLabel: sdk.String("enim"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("neque"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(796397),
                                    },
                                    SourceURI: sdk.String("eum"),
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("magnam"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("voluptates"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(731744),
                                                    },
                                                    SourceURI: sdk.String("aperiam"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("libero"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                GoToSectionID: sdk.String("labore"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("totam"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                        Width: sdk.Int(375994),
                                                    },
                                                    SourceURI: sdk.String("quo"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("velit"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: sdk.Bool(false),
                                        IncludeYear: sdk.Bool(false),
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: sdk.String("fuga"),
                                        MaxFileSize: sdk.String("nostrum"),
                                        MaxFiles: sdk.Int(669237),
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            shared.FileUploadQuestionTypesEnumAudio,
                                            shared.FileUploadQuestionTypesEnumImage,
                                            shared.FileUploadQuestionTypesEnumVideo,
                                            shared.FileUploadQuestionTypesEnumAny,
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("pariatur"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("nemo"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("reprehenderit"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("aperiam"),
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("minima"),
                                                        URI: sdk.String("http://lone-mission.biz"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("error"),
                                                        YoutubeURI: sdk.String("veritatis"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("ducimus"),
                                                        URI: sdk.String("http://tragic-tuba.name"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("optio"),
                                                        YoutubeURI: sdk.String("ex"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("quaerat"),
                                        },
                                        PointValue: sdk.Int(416692),
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("placeat"),
                                                        URI: sdk.String("https://gray-innovation.biz"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("modi"),
                                                        YoutubeURI: sdk.String("ipsa"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("sint"),
                                                        URI: sdk.String("https://diligent-tower.net"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("dicta"),
                                                        YoutubeURI: sdk.String("earum"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("veniam"),
                                                        URI: sdk.String("https://decisive-real.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("consequuntur"),
                                                        YoutubeURI: sdk.String("necessitatibus"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("nobis"),
                                                        URI: sdk.String("http://lone-wholesale.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("quasi"),
                                                        YoutubeURI: sdk.String("laboriosam"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("pariatur"),
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("excepturi"),
                                                        URI: sdk.String("https://handy-encirclement.info"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("doloribus"),
                                                        YoutubeURI: sdk.String("eligendi"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("sint"),
                                                        URI: sdk.String("http://watchful-pickaxe.name"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("totam"),
                                                        YoutubeURI: sdk.String("molestias"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("odio"),
                                                        URI: sdk.String("http://unselfish-breadfruit.name"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("iste"),
                                                        YoutubeURI: sdk.String("assumenda"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("tempore"),
                                        },
                                    },
                                    QuestionID: sdk.String("libero"),
                                    Required: sdk.Bool(false),
                                    RowQuestion: &shared.RowQuestion{
                                        Title: sdk.String("Mrs."),
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: sdk.Int(38557),
                                        HighLabel: sdk.String("delectus"),
                                        Low: sdk.Int(773110),
                                        LowLabel: sdk.String("cum"),
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: sdk.Bool(false),
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: sdk.Bool(false),
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "adipisci": "saepe",
                            },
                            Title: sdk.String("Miss"),
                            VideoItem: &shared.VideoItem{
                                Caption: sdk.String("doloremque"),
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(333072),
                                    },
                                    YoutubeURI: sdk.String("libero"),
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(99733),
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: sdk.Int(584593),
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: sdk.Int(475589),
                        },
                        OriginalLocation: &shared.Location{
                            Index: sdk.Int(756654),
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: sdk.String("possimus"),
                            Title: sdk.String("Mrs."),
                        },
                        UpdateMask: sdk.String("magnam"),
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: sdk.String("itaque"),
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("sed"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                        Width: sdk.Int(330267),
                                    },
                                    SourceURI: sdk.String("consequuntur"),
                                },
                            },
                            ItemID: sdk.String("facere"),
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
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("nisi"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("voluptatibus"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(503748),
                                                    },
                                                    SourceURI: sdk.String("distinctio"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("nisi"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("nisi"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("libero"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(815200),
                                                    },
                                                    SourceURI: sdk.String("facilis"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("ipsum"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("voluptatibus"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("voluptatibus"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(891581),
                                                    },
                                                    SourceURI: sdk.String("labore"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("rerum"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumChoiceTypeUnspecified.ToPointer(),
                                    },
                                    ShuffleQuestions: sdk.Bool(false),
                                },
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("reprehenderit"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(207296),
                                    },
                                    SourceURI: sdk.String("iusto"),
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("fugiat"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("unde"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(495617),
                                                        },
                                                        SourceURI: sdk.String("dolor"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("dicta"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("porro"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("vitae"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(458970),
                                                        },
                                                        SourceURI: sdk.String("fugiat"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("ad"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                    GoToSectionID: sdk.String("enim"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("delectus"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(491201),
                                                        },
                                                        SourceURI: sdk.String("libero"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("illo"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumChoiceTypeUnspecified.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("incidunt"),
                                            MaxFileSize: sdk.String("accusamus"),
                                            MaxFiles: sdk.Int(902581),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumPresentation,
                                                shared.FileUploadQuestionTypesEnumAny,
                                                shared.FileUploadQuestionTypesEnumAudio,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("reprehenderit"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("praesentium"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("nemo"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("repellat"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sequi"),
                                                            URI: sdk.String("http://minor-beech.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("assumenda"),
                                                            YoutubeURI: sdk.String("aliquam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("quisquam"),
                                                            URI: sdk.String("https://male-trailpatrol.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("maxime"),
                                                            YoutubeURI: sdk.String("aspernatur"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nam"),
                                                            URI: sdk.String("https://nautical-nest.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("rerum"),
                                                            YoutubeURI: sdk.String("dignissimos"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("corporis"),
                                                            URI: sdk.String("https://pleasant-spectrograph.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("dolorem"),
                                                            YoutubeURI: sdk.String("commodi"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("impedit"),
                                            },
                                            PointValue: sdk.Int(415033),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("voluptatem"),
                                                            URI: sdk.String("http://baggy-cultivar.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("praesentium"),
                                                            YoutubeURI: sdk.String("quidem"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("cum"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("quasi"),
                                                            URI: sdk.String("http://male-argument.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("iusto"),
                                                            YoutubeURI: sdk.String("amet"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("provident"),
                                            },
                                        },
                                        QuestionID: sdk.String("dolorum"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Dr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(592880),
                                            HighLabel: sdk.String("repudiandae"),
                                            Low: sdk.Int(10063),
                                            LowLabel: sdk.String("nemo"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("facilis"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("corrupti"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(574092),
                                                        },
                                                        SourceURI: sdk.String("accusamus"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("eos"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("dicta"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("voluptatem"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(224413),
                                                        },
                                                        SourceURI: sdk.String("sunt"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("a"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumChoiceTypeUnspecified.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("occaecati"),
                                            MaxFileSize: sdk.String("atque"),
                                            MaxFiles: sdk.Int(107472),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumDocument,
                                                shared.FileUploadQuestionTypesEnumImage,
                                                shared.FileUploadQuestionTypesEnumSpreadsheet,
                                                shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("rerum"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aperiam"),
                                                            URI: sdk.String("http://zealous-decision-making.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("provident"),
                                                            YoutubeURI: sdk.String("consectetur"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("eligendi"),
                                                            URI: sdk.String("http://energetic-response.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("temporibus"),
                                                            YoutubeURI: sdk.String("officia"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("amet"),
                                            },
                                            PointValue: sdk.Int(948541),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("quo"),
                                                            URI: sdk.String("https://these-pliers.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("vero"),
                                                            YoutubeURI: sdk.String("qui"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("consectetur"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("explicabo"),
                                                            URI: sdk.String("http://green-interviewer.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("ab"),
                                                            YoutubeURI: sdk.String("illo"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("hic"),
                                                            URI: sdk.String("https://white-depth.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("in"),
                                                            YoutubeURI: sdk.String("exercitationem"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("labore"),
                                                            URI: sdk.String("http://vain-dirt.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("explicabo"),
                                                            YoutubeURI: sdk.String("accusamus"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("rem"),
                                                            URI: sdk.String("http://conventional-mallet.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("voluptate"),
                                                            YoutubeURI: sdk.String("similique"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("minima"),
                                            },
                                        },
                                        QuestionID: sdk.String("libero"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Mrs."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(24272),
                                            HighLabel: sdk.String("modi"),
                                            Low: sdk.Int(430116),
                                            LowLabel: sdk.String("nesciunt"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("fugiat"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("nostrum"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(330600),
                                                        },
                                                        SourceURI: sdk.String("reiciendis"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("ab"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("aut"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("aut"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(483753),
                                                        },
                                                        SourceURI: sdk.String("commodi"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("numquam"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("possimus"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("voluptate"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(200637),
                                                        },
                                                        SourceURI: sdk.String("quaerat"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("itaque"),
                                                },
                                            },
                                            Shuffle: sdk.Bool(false),
                                            Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: sdk.Bool(false),
                                            IncludeYear: sdk.Bool(false),
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: sdk.String("sunt"),
                                            MaxFileSize: sdk.String("distinctio"),
                                            MaxFiles: sdk.Int(481375),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                                shared.FileUploadQuestionTypesEnumImage,
                                                shared.FileUploadQuestionTypesEnumDocument,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("fuga"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("alias"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aut"),
                                                            URI: sdk.String("https://mad-speaker.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("quae"),
                                                            YoutubeURI: sdk.String("eaque"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("saepe"),
                                                            URI: sdk.String("https://prime-strawman.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("sed"),
                                                            YoutubeURI: sdk.String("voluptatem"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("alias"),
                                                            URI: sdk.String("https://warm-ancestor.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("qui"),
                                                            YoutubeURI: sdk.String("qui"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("necessitatibus"),
                                            },
                                            PointValue: sdk.Int(691508),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("beatae"),
                                                            URI: sdk.String("http://familiar-ruckus.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("molestias"),
                                                            YoutubeURI: sdk.String("officia"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("libero"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sequi"),
                                                            URI: sdk.String("http://imaginative-schema.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("odit"),
                                                            YoutubeURI: sdk.String("velit"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            URI: sdk.String("https://tired-plot.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("accusamus"),
                                                            YoutubeURI: sdk.String("doloremque"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nisi"),
                                                            URI: sdk.String("https://vast-tomorrow.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("rem"),
                                                            YoutubeURI: sdk.String("quia"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("ullam"),
                                            },
                                        },
                                        QuestionID: sdk.String("quisquam"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Mr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(973017),
                                            HighLabel: sdk.String("eligendi"),
                                            Low: sdk.Int(62035),
                                            LowLabel: sdk.String("officiis"),
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: sdk.Bool(false),
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: sdk.Bool(false),
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("architecto"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                        Width: sdk.Int(317898),
                                    },
                                    SourceURI: sdk.String("optio"),
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                GoToSectionID: sdk.String("facilis"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("reiciendis"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(615058),
                                                    },
                                                    SourceURI: sdk.String("dicta"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("quos"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                GoToSectionID: sdk.String("dolore"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("modi"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(807419),
                                                    },
                                                    SourceURI: sdk.String("modi"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("consequuntur"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                GoToSectionID: sdk.String("vero"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("doloribus"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(783397),
                                                    },
                                                    SourceURI: sdk.String("accusamus"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("totam"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumDropDown.ToPointer(),
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: sdk.Bool(false),
                                        IncludeYear: sdk.Bool(false),
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: sdk.String("ab"),
                                        MaxFileSize: sdk.String("sint"),
                                        MaxFiles: sdk.Int(472414),
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            shared.FileUploadQuestionTypesEnumSpreadsheet,
                                            shared.FileUploadQuestionTypesEnumSpreadsheet,
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("debitis"),
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("neque"),
                                                        URI: sdk.String("http://hateful-citron.name"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("reprehenderit"),
                                                        YoutubeURI: sdk.String("distinctio"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("eius"),
                                                        URI: sdk.String("http://measly-whack.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("veniam"),
                                                        YoutubeURI: sdk.String("saepe"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("neque"),
                                        },
                                        PointValue: sdk.Int(816365),
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("quos"),
                                                        URI: sdk.String("https://this-platform.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("velit"),
                                                        YoutubeURI: sdk.String("vitae"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("nesciunt"),
                                                        URI: sdk.String("https://blank-zen.info"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("doloribus"),
                                                        YoutubeURI: sdk.String("possimus"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("unde"),
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("explicabo"),
                                                        URI: sdk.String("http://obvious-rum.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("quidem"),
                                                        YoutubeURI: sdk.String("nesciunt"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("commodi"),
                                                        URI: sdk.String("https://damp-face.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("officia"),
                                                        YoutubeURI: sdk.String("sint"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("ut"),
                                        },
                                    },
                                    QuestionID: sdk.String("numquam"),
                                    Required: sdk.Bool(false),
                                    RowQuestion: &shared.RowQuestion{
                                        Title: sdk.String("Dr."),
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: sdk.Int(236790),
                                        HighLabel: sdk.String("libero"),
                                        Low: sdk.Int(448386),
                                        LowLabel: sdk.String("minima"),
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: sdk.Bool(false),
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: sdk.Bool(false),
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "minus": "ab",
                                "beatae": "hic",
                            },
                            Title: sdk.String("Mrs."),
                            VideoItem: &shared.VideoItem{
                                Caption: sdk.String("quisquam"),
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                        Width: sdk.Int(496548),
                                    },
                                    YoutubeURI: sdk.String("fuga"),
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(326903),
                        },
                        UpdateMask: sdk.String("architecto"),
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: sdk.Bool(false),
                            },
                        },
                        UpdateMask: sdk.String("qui"),
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: sdk.String("aliquid"),
                TargetRevisionID: sdk.String("magni"),
            },
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("dolor"),
        FormID: "exercitationem",
        Key: sdk.String("expedita"),
        OauthToken: sdk.String("facilis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("impedit"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.FormsFormsBatchUpdateSecurity{
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