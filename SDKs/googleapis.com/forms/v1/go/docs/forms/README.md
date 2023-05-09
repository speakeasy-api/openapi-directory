# Forms

### Available Operations

* [FormsFormsBatchUpdate](#formsformsbatchupdate) - Change the form with a batch of updates.
* [FormsFormsCreate](#formsformscreate) - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* [FormsFormsGet](#formsformsget) - Get a form.
* [FormsFormsResponsesGet](#formsformsresponsesget) - Get one response from the form.
* [FormsFormsResponsesList](#formsformsresponseslist) - List a form's responses.
* [FormsFormsWatchesCreate](#formsformswatchescreate) - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* [FormsFormsWatchesDelete](#formsformswatchesdelete) - Delete a watch.
* [FormsFormsWatchesList](#formsformswatcheslist) - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* [FormsFormsWatchesRenew](#formsformswatchesrenew) - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

## FormsFormsBatchUpdate

Change the form with a batch of updates.

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
    res, err := s.Forms.FormsFormsBatchUpdate(ctx, operations.FormsFormsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchUpdateFormRequestInput: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: sdk.Bool(false),
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: sdk.String("amet"),
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("deserunt"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(332831),
                                    },
                                    SourceURI: sdk.String("quod"),
                                },
                            },
                            ItemID: sdk.String("itaque"),
                            PageBreakItem: map[string]interface{}{
                                "quisquam": "enim",
                                "doloribus": "assumenda",
                                "officiis": "architecto",
                                "alias": "culpa",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                GoToSectionID: sdk.String("necessitatibus"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("quia"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(426002),
                                                    },
                                                    SourceURI: sdk.String("perspiciatis"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("debitis"),
                                            },
                                        },
                                        Shuffle: sdk.Bool(false),
                                        Type: shared.ChoiceQuestionTypeEnumRadio.ToPointer(),
                                    },
                                    ShuffleQuestions: sdk.Bool(false),
                                },
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("architecto"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                        Width: sdk.Int(18096),
                                    },
                                    SourceURI: sdk.String("veritatis"),
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("quibusdam"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("quod"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(923456),
                                                        },
                                                        SourceURI: sdk.String("velit"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("magnam"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("laboriosam"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("sed"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(616941),
                                                        },
                                                        SourceURI: sdk.String("provident"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("cum"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                    GoToSectionID: sdk.String("facilis"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("quidem"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(389548),
                                                        },
                                                        SourceURI: sdk.String("unde"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("modi"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("hic"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("cum"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                            Width: sdk.Int(725784),
                                                        },
                                                        SourceURI: sdk.String("nam"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("incidunt"),
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
                                            FolderID: sdk.String("quod"),
                                            MaxFileSize: sdk.String("id"),
                                            MaxFiles: sdk.Int(904440),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumImage,
                                                shared.FileUploadQuestionTypesEnumAny,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("nemo"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("illum"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("facilis"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("non"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("assumenda"),
                                                            URI: sdk.String("https://sardonic-succotash.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("facere"),
                                                            YoutubeURI: sdk.String("laborum"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("eveniet"),
                                                            URI: sdk.String("https://feisty-shrimp.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("alias"),
                                                            YoutubeURI: sdk.String("suscipit"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("deserunt"),
                                                            URI: sdk.String("https://quiet-plate.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("labore"),
                                                            YoutubeURI: sdk.String("quo"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("perferendis"),
                                            },
                                            PointValue: sdk.Int(143528),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("magnam"),
                                                            URI: sdk.String("http://simplistic-uniformity.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("officiis"),
                                                            YoutubeURI: sdk.String("unde"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nulla"),
                                                            URI: sdk.String("https://prize-egg.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("esse"),
                                                            YoutubeURI: sdk.String("corrupti"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("fuga"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("impedit"),
                                                            URI: sdk.String("http://pretty-shot.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("doloremque"),
                                                            YoutubeURI: sdk.String("voluptatem"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("facere"),
                                                            URI: sdk.String("https://steel-adjective.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("architecto"),
                                                            YoutubeURI: sdk.String("similique"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("porro"),
                                                            URI: sdk.String("https://baggy-clinic.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("sed"),
                                                            YoutubeURI: sdk.String("necessitatibus"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("impedit"),
                                                            URI: sdk.String("http://nice-vein.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("laudantium"),
                                                            YoutubeURI: sdk.String("maiores"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("alias"),
                                            },
                                        },
                                        QuestionID: sdk.String("asperiores"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Ms."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(118615),
                                            HighLabel: sdk.String("suscipit"),
                                            Low: sdk.Int(938257),
                                            LowLabel: sdk.String("doloribus"),
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
                                                    GoToSectionID: sdk.String("esse"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("in"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(94697),
                                                        },
                                                        SourceURI: sdk.String("neque"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("vero"),
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
                                            FolderID: sdk.String("accusantium"),
                                            MaxFileSize: sdk.String("qui"),
                                            MaxFiles: sdk.Int(771241),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumDocument,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("odit"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("rerum"),
                                                            URI: sdk.String("http://pink-hepatitis.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("id"),
                                                            YoutubeURI: sdk.String("laboriosam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("ex"),
                                                            URI: sdk.String("https://both-fold.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("similique"),
                                                            YoutubeURI: sdk.String("incidunt"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("quam"),
                                            },
                                            PointValue: sdk.Int(169312),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("delectus"),
                                                            URI: sdk.String("https://creative-container.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("quis"),
                                                            YoutubeURI: sdk.String("cupiditate"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("aliquam"),
                                                            URI: sdk.String("https://woozy-life.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            YoutubeURI: sdk.String("amet"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nemo"),
                                                            URI: sdk.String("http://spiffy-variability.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("molestiae"),
                                                            YoutubeURI: sdk.String("aliquid"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("asperiores"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nobis"),
                                                            URI: sdk.String("https://angelic-buy.net"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("commodi"),
                                                            YoutubeURI: sdk.String("eveniet"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("porro"),
                                                            URI: sdk.String("https://required-disappointment.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("fugit"),
                                                            YoutubeURI: sdk.String("eius"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sequi"),
                                                            URI: sdk.String("https://yearly-information.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("sint"),
                                                            YoutubeURI: sdk.String("repellat"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("a"),
                                                            URI: sdk.String("https://wooden-trophy.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("deserunt"),
                                                            YoutubeURI: sdk.String("corporis"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("velit"),
                                            },
                                        },
                                        QuestionID: sdk.String("officiis"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Mrs."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(638609),
                                            HighLabel: sdk.String("saepe"),
                                            Low: sdk.Int(429997),
                                            LowLabel: sdk.String("repudiandae"),
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
                                                    GoToSectionID: sdk.String("impedit"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("quasi"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(260911),
                                                        },
                                                        SourceURI: sdk.String("quisquam"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("eos"),
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
                                            FolderID: sdk.String("natus"),
                                            MaxFileSize: sdk.String("minus"),
                                            MaxFiles: sdk.Int(154389),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumSpreadsheet,
                                                shared.FileUploadQuestionTypesEnumVideo,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("corrupti"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("amet"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("molestiae"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("laborum"),
                                                            URI: sdk.String("http://agonizing-termite.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("molestias"),
                                                            YoutubeURI: sdk.String("dolore"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("sunt"),
                                            },
                                            PointValue: sdk.Int(982991),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("odit"),
                                                            URI: sdk.String("https://gifted-futon.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("exercitationem"),
                                                            YoutubeURI: sdk.String("veniam"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("nihil"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nisi"),
                                                            URI: sdk.String("https://glorious-stalk.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("suscipit"),
                                                            YoutubeURI: sdk.String("pariatur"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sit"),
                                                            URI: sdk.String("https://sweltering-airmail.name"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("sapiente"),
                                                            YoutubeURI: sdk.String("sed"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("possimus"),
                                            },
                                        },
                                        QuestionID: sdk.String("repellat"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Dr."),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(100233),
                                            HighLabel: sdk.String("adipisci"),
                                            Low: sdk.Int(867115),
                                            LowLabel: sdk.String("harum"),
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
                                    AltText: sdk.String("dolore"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                        Width: sdk.Int(435353),
                                    },
                                    SourceURI: sdk.String("explicabo"),
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("dolorum"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("velit"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(510020),
                                                    },
                                                    SourceURI: sdk.String("error"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("non"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                GoToSectionID: sdk.String("mollitia"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("accusamus"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                        Width: sdk.Int(769156),
                                                    },
                                                    SourceURI: sdk.String("doloremque"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("expedita"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("eaque"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("deserunt"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(570423),
                                                    },
                                                    SourceURI: sdk.String("magni"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("tempora"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                GoToSectionID: sdk.String("dolor"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("rerum"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(883078),
                                                    },
                                                    SourceURI: sdk.String("optio"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("delectus"),
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
                                        FolderID: sdk.String("quo"),
                                        MaxFileSize: sdk.String("quos"),
                                        MaxFiles: sdk.Int(994234),
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            shared.FileUploadQuestionTypesEnumPdf,
                                            shared.FileUploadQuestionTypesEnumPresentation,
                                            shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("aut"),
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("nostrum"),
                                                        URI: sdk.String("https://superb-coonskin.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("vel"),
                                                        YoutubeURI: sdk.String("sapiente"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("mollitia"),
                                                        URI: sdk.String("http://mushy-artificer.biz"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("voluptates"),
                                                        YoutubeURI: sdk.String("ad"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("aliquam"),
                                                        URI: sdk.String("https://naughty-circuit.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("inventore"),
                                                        YoutubeURI: sdk.String("aliquid"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("laudantium"),
                                                        URI: sdk.String("https://easy-going-grey.biz"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("cumque"),
                                                        YoutubeURI: sdk.String("rem"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("voluptatum"),
                                        },
                                        PointValue: sdk.Int(498534),
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("recusandae"),
                                                        URI: sdk.String("http://lovely-dialect.biz"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("voluptatum"),
                                                        YoutubeURI: sdk.String("sit"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("rerum"),
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("tenetur"),
                                                        URI: sdk.String("http://respectful-liquid.net"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("deserunt"),
                                                        YoutubeURI: sdk.String("magni"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("nihil"),
                                        },
                                    },
                                    QuestionID: sdk.String("voluptas"),
                                    Required: sdk.Bool(false),
                                    RowQuestion: &shared.RowQuestion{
                                        Title: sdk.String("Miss"),
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: sdk.Int(413780),
                                        HighLabel: sdk.String("alias"),
                                        Low: sdk.Int(686380),
                                        LowLabel: sdk.String("aut"),
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
                                "maxime": "aliquam",
                                "iste": "ullam",
                            },
                            Title: sdk.String("Miss"),
                            VideoItem: &shared.VideoItem{
                                Caption: sdk.String("placeat"),
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(577590),
                                    },
                                    YoutubeURI: sdk.String("unde"),
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(75277),
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: sdk.Int(469170),
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: sdk.Int(78246),
                        },
                        OriginalLocation: &shared.Location{
                            Index: sdk.Int(725316),
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: sdk.String("ipsam"),
                            Title: sdk.String("Mr."),
                        },
                        UpdateMask: sdk.String("cumque"),
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: sdk.String("dicta"),
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: sdk.String("harum"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                        Width: sdk.Int(707983),
                                    },
                                    SourceURI: sdk.String("beatae"),
                                },
                            },
                            ItemID: sdk.String("cumque"),
                            PageBreakItem: map[string]interface{}{
                                "labore": "expedita",
                                "corrupti": "rem",
                                "atque": "officiis",
                                "cum": "pariatur",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                                GoToSectionID: sdk.String("incidunt"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("quod"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(781491),
                                                    },
                                                    SourceURI: sdk.String("id"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("excepturi"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("libero"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("quo"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(944033),
                                                    },
                                                    SourceURI: sdk.String("maxime"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("accusantium"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("fugit"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("pariatur"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(927490),
                                                    },
                                                    SourceURI: sdk.String("veritatis"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("aut"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("iusto"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("dolor"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                        Width: sdk.Int(274295),
                                                    },
                                                    SourceURI: sdk.String("magni"),
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
                                    AltText: sdk.String("voluptatem"),
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                        Width: sdk.Int(873320),
                                    },
                                    SourceURI: sdk.String("eum"),
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("nihil"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("atque"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                            Width: sdk.Int(645544),
                                                        },
                                                        SourceURI: sdk.String("atque"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("nostrum"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("architecto"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("est"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(522390),
                                                        },
                                                        SourceURI: sdk.String("magni"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("quae"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("placeat"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("enim"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(958068),
                                                        },
                                                        SourceURI: sdk.String("saepe"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("delectus"),
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
                                            FolderID: sdk.String("natus"),
                                            MaxFileSize: sdk.String("cumque"),
                                            MaxFiles: sdk.Int(617497),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumAudio,
                                                shared.FileUploadQuestionTypesEnumAny,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("mollitia"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("cumque"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("quis"),
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("enim"),
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("nemo"),
                                                            URI: sdk.String("https://disloyal-almighty.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("minus"),
                                                            YoutubeURI: sdk.String("asperiores"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("recusandae"),
                                                            URI: sdk.String("https://loyal-butler.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("sit"),
                                                            YoutubeURI: sdk.String("aliquid"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("necessitatibus"),
                                            },
                                            PointValue: sdk.Int(148975),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sunt"),
                                                            URI: sdk.String("http://whirlwind-poem.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("deserunt"),
                                                            YoutubeURI: sdk.String("modi"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sunt"),
                                                            URI: sdk.String("https://fabulous-lychee.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("at"),
                                                            YoutubeURI: sdk.String("dolorem"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("repellat"),
                                                            URI: sdk.String("http://blushing-condition.com"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("fuga"),
                                                            YoutubeURI: sdk.String("hic"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("eaque"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("architecto"),
                                                            URI: sdk.String("http://complex-strip.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("illo"),
                                                            YoutubeURI: sdk.String("magnam"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("delectus"),
                                            },
                                        },
                                        QuestionID: sdk.String("numquam"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Miss"),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(750537),
                                            HighLabel: sdk.String("ex"),
                                            Low: sdk.Int(998023),
                                            LowLabel: sdk.String("quae"),
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
                                                    GoToSectionID: sdk.String("hic"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("excepturi"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                            Width: sdk.Int(151385),
                                                        },
                                                        SourceURI: sdk.String("beatae"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("similique"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                                    GoToSectionID: sdk.String("animi"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("dolore"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(493407),
                                                        },
                                                        SourceURI: sdk.String("esse"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("animi"),
                                                },
                                                shared.OptionInput{
                                                    GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                    GoToSectionID: sdk.String("esse"),
                                                    Image: &shared.ImageInput{
                                                        AltText: sdk.String("eveniet"),
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                            Width: sdk.Int(246402),
                                                        },
                                                        SourceURI: sdk.String("officiis"),
                                                    },
                                                    IsOther: sdk.Bool(false),
                                                    Value: sdk.String("eius"),
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
                                            FolderID: sdk.String("itaque"),
                                            MaxFileSize: sdk.String("dignissimos"),
                                            MaxFiles: sdk.Int(373449),
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                shared.FileUploadQuestionTypesEnumImage,
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: sdk.String("quis"),
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
                                                            DisplayText: sdk.String("ut"),
                                                            URI: sdk.String("http://calm-legitimacy.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("dolor"),
                                                            YoutubeURI: sdk.String("expedita"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("libero"),
                                            },
                                            PointValue: sdk.Int(615277),
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("minus"),
                                                            URI: sdk.String("https://tan-morbidity.info"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("enim"),
                                                            YoutubeURI: sdk.String("accusamus"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("aperiam"),
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("laudantium"),
                                                            URI: sdk.String("http://beautiful-octopus.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("rem"),
                                                            YoutubeURI: sdk.String("tenetur"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("deleniti"),
                                                            URI: sdk.String("http://vivacious-boycott.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("labore"),
                                                            YoutubeURI: sdk.String("maiores"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("sequi"),
                                                            URI: sdk.String("https://acidic-infiltration.org"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("facere"),
                                                            YoutubeURI: sdk.String("quisquam"),
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: sdk.String("cumque"),
                                                            URI: sdk.String("http://rapid-pecan.biz"),
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: sdk.String("reiciendis"),
                                                            YoutubeURI: sdk.String("sequi"),
                                                        },
                                                    },
                                                },
                                                Text: sdk.String("porro"),
                                            },
                                        },
                                        QuestionID: sdk.String("laborum"),
                                        Required: sdk.Bool(false),
                                        RowQuestion: &shared.RowQuestion{
                                            Title: sdk.String("Miss"),
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: sdk.Int(842974),
                                            HighLabel: sdk.String("omnis"),
                                            Low: sdk.Int(16252),
                                            LowLabel: sdk.String("ipsam"),
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
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(442873),
                                    },
                                    SourceURI: sdk.String("quia"),
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                GoToSectionID: sdk.String("ad"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("nisi"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                        Width: sdk.Int(154130),
                                                    },
                                                    SourceURI: sdk.String("laudantium"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("sed"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                                GoToSectionID: sdk.String("iusto"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("expedita"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(830477),
                                                    },
                                                    SourceURI: sdk.String("nesciunt"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("ipsa"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("dolore"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("esse"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                        Width: sdk.Int(718119),
                                                    },
                                                    SourceURI: sdk.String("sapiente"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("quam"),
                                            },
                                            shared.OptionInput{
                                                GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                                GoToSectionID: sdk.String("aliquam"),
                                                Image: &shared.ImageInput{
                                                    AltText: sdk.String("delectus"),
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                        Width: sdk.Int(531494),
                                                    },
                                                    SourceURI: sdk.String("iusto"),
                                                },
                                                IsOther: sdk.Bool(false),
                                                Value: sdk.String("quod"),
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
                                        MaxFileSize: sdk.String("non"),
                                        MaxFiles: sdk.Int(353819),
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            shared.FileUploadQuestionTypesEnumPresentation,
                                            shared.FileUploadQuestionTypesEnumAudio,
                                            shared.FileUploadQuestionTypesEnumPdf,
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("corporis"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("non"),
                                                },
                                                shared.CorrectAnswer{
                                                    Value: sdk.String("necessitatibus"),
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
                                                        DisplayText: sdk.String("laboriosam"),
                                                        URI: sdk.String("http://skeletal-condominium.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("vitae"),
                                                        YoutubeURI: sdk.String("voluptatibus"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("doloremque"),
                                                        URI: sdk.String("http://electric-propaganda.info"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("nostrum"),
                                                        YoutubeURI: sdk.String("temporibus"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("ratione"),
                                                        URI: sdk.String("http://hopeful-koala.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("itaque"),
                                                        YoutubeURI: sdk.String("vitae"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("est"),
                                                        URI: sdk.String("http://stale-sherry.name"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("possimus"),
                                                        YoutubeURI: sdk.String("maiores"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("odio"),
                                        },
                                        PointValue: sdk.Int(588662),
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("aperiam"),
                                                        URI: sdk.String("https://disastrous-nestling.info"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("repellendus"),
                                                        YoutubeURI: sdk.String("unde"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("alias"),
                                                        URI: sdk.String("https://dimwitted-harbour.biz"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("expedita"),
                                                        YoutubeURI: sdk.String("in"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("quisquam"),
                                                        URI: sdk.String("http://frozen-stress.org"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("distinctio"),
                                                        YoutubeURI: sdk.String("mollitia"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("impedit"),
                                                        URI: sdk.String("https://brilliant-mess.name"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("cum"),
                                                        YoutubeURI: sdk.String("dicta"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("impedit"),
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("eveniet"),
                                                        URI: sdk.String("https://creamy-scallops.name"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("impedit"),
                                                        YoutubeURI: sdk.String("vel"),
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: sdk.String("eligendi"),
                                                        URI: sdk.String("https://idiotic-breastplate.com"),
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: sdk.String("maiores"),
                                                        YoutubeURI: sdk.String("itaque"),
                                                    },
                                                },
                                            },
                                            Text: sdk.String("vero"),
                                        },
                                    },
                                    QuestionID: sdk.String("quidem"),
                                    Required: sdk.Bool(false),
                                    RowQuestion: &shared.RowQuestion{
                                        Title: sdk.String("Mr."),
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: sdk.Int(778242),
                                        HighLabel: sdk.String("dignissimos"),
                                        Low: sdk.Int(791615),
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
                                "cum": "suscipit",
                                "saepe": "earum",
                                "quod": "nihil",
                                "quaerat": "ipsum",
                            },
                            Title: sdk.String("Ms."),
                            VideoItem: &shared.VideoItem{
                                Caption: sdk.String("laudantium"),
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                        Width: sdk.Int(643997),
                                    },
                                    YoutubeURI: sdk.String("odit"),
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: sdk.Int(319419),
                        },
                        UpdateMask: sdk.String("sequi"),
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: sdk.Bool(false),
                            },
                        },
                        UpdateMask: sdk.String("beatae"),
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: sdk.String("iusto"),
                TargetRevisionID: sdk.String("esse"),
            },
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("impedit"),
        FormID: "cupiditate",
        Key: sdk.String("illo"),
        OauthToken: sdk.String("exercitationem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("fugit"),
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

## FormsFormsCreate

Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.

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
    res, err := s.Forms.FormsFormsCreate(ctx, operations.FormsFormsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FormInput: &shared.FormInput{
            Info: &shared.InfoInput{
                Description: sdk.String("dolorum"),
                Title: sdk.String("Dr."),
            },
            Items: []shared.ItemInput{
                shared.ItemInput{
                    Description: sdk.String("illum"),
                    ImageItem: &shared.ImageItemInput{
                        Image: &shared.ImageInput{
                            AltText: sdk.String("quibusdam"),
                            Properties: &shared.MediaProperties{
                                Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                Width: sdk.Int(456371),
                            },
                            SourceURI: sdk.String("explicabo"),
                        },
                    },
                    ItemID: sdk.String("consectetur"),
                    PageBreakItem: map[string]interface{}{
                        "optio": "ipsa",
                        "maiores": "exercitationem",
                        "culpa": "repudiandae",
                        "aspernatur": "sapiente",
                    },
                    QuestionGroupItem: &shared.QuestionGroupItemInput{
                        Grid: &shared.GridInput{
                            Columns: &shared.ChoiceQuestionInput{
                                Options: []shared.OptionInput{
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                        GoToSectionID: sdk.String("suscipit"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("harum"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                Width: sdk.Int(42454),
                                            },
                                            SourceURI: sdk.String("perferendis"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("laudantium"),
                                    },
                                },
                                Shuffle: sdk.Bool(false),
                                Type: shared.ChoiceQuestionTypeEnumRadio.ToPointer(),
                            },
                            ShuffleQuestions: sdk.Bool(false),
                        },
                        Image: &shared.ImageInput{
                            AltText: sdk.String("corrupti"),
                            Properties: &shared.MediaProperties{
                                Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                Width: sdk.Int(340101),
                            },
                            SourceURI: sdk.String("iure"),
                        },
                        Questions: []shared.QuestionInput{
                            shared.QuestionInput{
                                ChoiceQuestion: &shared.ChoiceQuestionInput{
                                    Options: []shared.OptionInput{
                                        shared.OptionInput{
                                            GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                            GoToSectionID: sdk.String("sapiente"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("corporis"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                    Width: sdk.Int(435142),
                                                },
                                                SourceURI: sdk.String("quisquam"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("provident"),
                                        },
                                        shared.OptionInput{
                                            GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                            GoToSectionID: sdk.String("nam"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("nemo"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                    Width: sdk.Int(371213),
                                                },
                                                SourceURI: sdk.String("minima"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("tempora"),
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
                                    FolderID: sdk.String("corrupti"),
                                    MaxFileSize: sdk.String("doloremque"),
                                    MaxFiles: sdk.Int(854137),
                                    Types: []shared.FileUploadQuestionTypesEnum{
                                        shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                        shared.FileUploadQuestionTypesEnumImage,
                                    },
                                },
                                Grading: &shared.Grading{
                                    CorrectAnswers: &shared.CorrectAnswers{
                                        Answers: []shared.CorrectAnswer{
                                            shared.CorrectAnswer{
                                                Value: sdk.String("similique"),
                                            },
                                            shared.CorrectAnswer{
                                                Value: sdk.String("porro"),
                                            },
                                            shared.CorrectAnswer{
                                                Value: sdk.String("impedit"),
                                            },
                                            shared.CorrectAnswer{
                                                Value: sdk.String("nisi"),
                                            },
                                        },
                                    },
                                    GeneralFeedback: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("soluta"),
                                                    URI: sdk.String("https://honorable-ramen.biz"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("maiores"),
                                                    YoutubeURI: sdk.String("consectetur"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("necessitatibus"),
                                                    URI: sdk.String("https://offensive-angina.name"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("adipisci"),
                                                    YoutubeURI: sdk.String("accusantium"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("magnam"),
                                                    URI: sdk.String("https://palatable-caribou.info"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("cum"),
                                                    YoutubeURI: sdk.String("id"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("possimus"),
                                                    URI: sdk.String("http://harmonious-fiesta.biz"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("voluptatum"),
                                                    YoutubeURI: sdk.String("quasi"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("error"),
                                    },
                                    PointValue: sdk.Int(748606),
                                    WhenRight: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("voluptate"),
                                                    URI: sdk.String("http://sad-ass.org"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("possimus"),
                                                    YoutubeURI: sdk.String("fugit"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("voluptatem"),
                                                    URI: sdk.String("https://grubby-handlebar.biz"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("aliquam"),
                                                    YoutubeURI: sdk.String("blanditiis"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("hic"),
                                    },
                                    WhenWrong: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("asperiores"),
                                                    URI: sdk.String("http://discrete-mystery.name"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("provident"),
                                                    YoutubeURI: sdk.String("beatae"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("ipsa"),
                                                    URI: sdk.String("https://scarce-sorghum.net"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("fuga"),
                                                    YoutubeURI: sdk.String("tempore"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("commodi"),
                                                    URI: sdk.String("http://hidden-inability.info"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("aliquid"),
                                                    YoutubeURI: sdk.String("provident"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("laboriosam"),
                                                    URI: sdk.String("https://bewitched-trim.net"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("eaque"),
                                                    YoutubeURI: sdk.String("alias"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("qui"),
                                    },
                                },
                                QuestionID: sdk.String("consequuntur"),
                                Required: sdk.Bool(false),
                                RowQuestion: &shared.RowQuestion{
                                    Title: sdk.String("Mr."),
                                },
                                ScaleQuestion: &shared.ScaleQuestion{
                                    High: sdk.Int(696828),
                                    HighLabel: sdk.String("sequi"),
                                    Low: sdk.Int(227431),
                                    LowLabel: sdk.String("exercitationem"),
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
                            AltText: sdk.String("illum"),
                            Properties: &shared.MediaProperties{
                                Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                Width: sdk.Int(601626),
                            },
                            SourceURI: sdk.String("similique"),
                        },
                        Question: &shared.QuestionInput{
                            ChoiceQuestion: &shared.ChoiceQuestionInput{
                                Options: []shared.OptionInput{
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                        GoToSectionID: sdk.String("amet"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("debitis"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                Width: sdk.Int(989089),
                                            },
                                            SourceURI: sdk.String("temporibus"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("id"),
                                    },
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                        GoToSectionID: sdk.String("quibusdam"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("sit"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                Width: sdk.Int(329973),
                                            },
                                            SourceURI: sdk.String("aliquam"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("provident"),
                                    },
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                        GoToSectionID: sdk.String("earum"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("doloremque"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                Width: sdk.Int(367),
                                            },
                                            SourceURI: sdk.String("doloremque"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("tempora"),
                                    },
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                        GoToSectionID: sdk.String("quam"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("atque"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                Width: sdk.Int(406493),
                                            },
                                            SourceURI: sdk.String("architecto"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("a"),
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
                                FolderID: sdk.String("veritatis"),
                                MaxFileSize: sdk.String("quod"),
                                MaxFiles: sdk.Int(951103),
                                Types: []shared.FileUploadQuestionTypesEnum{
                                    shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                },
                            },
                            Grading: &shared.Grading{
                                CorrectAnswers: &shared.CorrectAnswers{
                                    Answers: []shared.CorrectAnswer{
                                        shared.CorrectAnswer{
                                            Value: sdk.String("atque"),
                                        },
                                        shared.CorrectAnswer{
                                            Value: sdk.String("totam"),
                                        },
                                    },
                                },
                                GeneralFeedback: &shared.Feedback{
                                    Material: []shared.ExtraMaterial{
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("voluptate"),
                                                URI: sdk.String("http://starchy-browser.org"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("reiciendis"),
                                                YoutubeURI: sdk.String("quod"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("voluptate"),
                                                URI: sdk.String("http://stylish-signal.net"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("ab"),
                                                YoutubeURI: sdk.String("ex"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("consectetur"),
                                                URI: sdk.String("https://criminal-pick.biz"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("eligendi"),
                                                YoutubeURI: sdk.String("voluptatum"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("perferendis"),
                                                URI: sdk.String("https://paltry-interloper.org"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("sapiente"),
                                                YoutubeURI: sdk.String("velit"),
                                            },
                                        },
                                    },
                                    Text: sdk.String("adipisci"),
                                },
                                PointValue: sdk.Int(250298),
                                WhenRight: &shared.Feedback{
                                    Material: []shared.ExtraMaterial{
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("illum"),
                                                URI: sdk.String("https://watchful-millet.info"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("esse"),
                                                YoutubeURI: sdk.String("laborum"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("perspiciatis"),
                                                URI: sdk.String("https://inconsequential-booklet.name"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("odio"),
                                                YoutubeURI: sdk.String("commodi"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("porro"),
                                                URI: sdk.String("http://pricey-proctor.com"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("et"),
                                                YoutubeURI: sdk.String("nulla"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("magni"),
                                                URI: sdk.String("https://thirsty-vehicle.net"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("unde"),
                                                YoutubeURI: sdk.String("ut"),
                                            },
                                        },
                                    },
                                    Text: sdk.String("facere"),
                                },
                                WhenWrong: &shared.Feedback{
                                    Material: []shared.ExtraMaterial{
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("doloribus"),
                                                URI: sdk.String("https://spicy-snake.info"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("iste"),
                                                YoutubeURI: sdk.String("provident"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("dolor"),
                                                URI: sdk.String("https://aromatic-asymmetry.info"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("laboriosam"),
                                                YoutubeURI: sdk.String("laborum"),
                                            },
                                        },
                                    },
                                    Text: sdk.String("autem"),
                                },
                            },
                            QuestionID: sdk.String("assumenda"),
                            Required: sdk.Bool(false),
                            RowQuestion: &shared.RowQuestion{
                                Title: sdk.String("Mr."),
                            },
                            ScaleQuestion: &shared.ScaleQuestion{
                                High: sdk.Int(852689),
                                HighLabel: sdk.String("doloremque"),
                                Low: sdk.Int(32775),
                                LowLabel: sdk.String("alias"),
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
                        "ullam": "quis",
                    },
                    Title: sdk.String("Mrs."),
                    VideoItem: &shared.VideoItem{
                        Caption: sdk.String("ratione"),
                        Video: &shared.Video{
                            Properties: &shared.MediaProperties{
                                Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                Width: sdk.Int(802976),
                            },
                            YoutubeURI: sdk.String("recusandae"),
                        },
                    },
                },
                shared.ItemInput{
                    Description: sdk.String("cumque"),
                    ImageItem: &shared.ImageItemInput{
                        Image: &shared.ImageInput{
                            AltText: sdk.String("doloremque"),
                            Properties: &shared.MediaProperties{
                                Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                Width: sdk.Int(435266),
                            },
                            SourceURI: sdk.String("maiores"),
                        },
                    },
                    ItemID: sdk.String("est"),
                    PageBreakItem: map[string]interface{}{
                        "veritatis": "necessitatibus",
                    },
                    QuestionGroupItem: &shared.QuestionGroupItemInput{
                        Grid: &shared.GridInput{
                            Columns: &shared.ChoiceQuestionInput{
                                Options: []shared.OptionInput{
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                        GoToSectionID: sdk.String("ipsam"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("consequuntur"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                Width: sdk.Int(696219),
                                            },
                                            SourceURI: sdk.String("non"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("beatae"),
                                    },
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                        GoToSectionID: sdk.String("molestias"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("beatae"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                Width: sdk.Int(494765),
                                            },
                                            SourceURI: sdk.String("libero"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("molestias"),
                                    },
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                        GoToSectionID: sdk.String("ipsum"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("impedit"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                Width: sdk.Int(849690),
                                            },
                                            SourceURI: sdk.String("distinctio"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("voluptatem"),
                                    },
                                },
                                Shuffle: sdk.Bool(false),
                                Type: shared.ChoiceQuestionTypeEnumChoiceTypeUnspecified.ToPointer(),
                            },
                            ShuffleQuestions: sdk.Bool(false),
                        },
                        Image: &shared.ImageInput{
                            AltText: sdk.String("quaerat"),
                            Properties: &shared.MediaProperties{
                                Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                Width: sdk.Int(515433),
                            },
                            SourceURI: sdk.String("repellendus"),
                        },
                        Questions: []shared.QuestionInput{
                            shared.QuestionInput{
                                ChoiceQuestion: &shared.ChoiceQuestionInput{
                                    Options: []shared.OptionInput{
                                        shared.OptionInput{
                                            GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                            GoToSectionID: sdk.String("voluptas"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("quaerat"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                    Width: sdk.Int(945431),
                                                },
                                                SourceURI: sdk.String("assumenda"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("dolore"),
                                        },
                                        shared.OptionInput{
                                            GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                            GoToSectionID: sdk.String("ullam"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("perspiciatis"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                                    Width: sdk.Int(404121),
                                                },
                                                SourceURI: sdk.String("quibusdam"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("dicta"),
                                        },
                                        shared.OptionInput{
                                            GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                            GoToSectionID: sdk.String("commodi"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("neque"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                    Width: sdk.Int(255264),
                                                },
                                                SourceURI: sdk.String("rem"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("officiis"),
                                        },
                                        shared.OptionInput{
                                            GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                            GoToSectionID: sdk.String("neque"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("corporis"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                    Width: sdk.Int(175803),
                                                },
                                                SourceURI: sdk.String("placeat"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("excepturi"),
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
                                    FolderID: sdk.String("quos"),
                                    MaxFileSize: sdk.String("dicta"),
                                    MaxFiles: sdk.Int(956130),
                                    Types: []shared.FileUploadQuestionTypesEnum{
                                        shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                    },
                                },
                                Grading: &shared.Grading{
                                    CorrectAnswers: &shared.CorrectAnswers{
                                        Answers: []shared.CorrectAnswer{
                                            shared.CorrectAnswer{
                                                Value: sdk.String("necessitatibus"),
                                            },
                                            shared.CorrectAnswer{
                                                Value: sdk.String("sequi"),
                                            },
                                            shared.CorrectAnswer{
                                                Value: sdk.String("recusandae"),
                                            },
                                        },
                                    },
                                    GeneralFeedback: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("adipisci"),
                                                    URI: sdk.String("http://ashamed-cloudburst.org"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("iusto"),
                                                    YoutubeURI: sdk.String("magni"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("beatae"),
                                                    URI: sdk.String("http://funny-improvement.info"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("minima"),
                                                    YoutubeURI: sdk.String("sit"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("vel"),
                                    },
                                    PointValue: sdk.Int(388333),
                                    WhenRight: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("quasi"),
                                                    URI: sdk.String("https://little-architect.net"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("provident"),
                                                    YoutubeURI: sdk.String("facere"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("sed"),
                                                    URI: sdk.String("http://witty-number.name"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("repellendus"),
                                                    YoutubeURI: sdk.String("consequatur"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("adipisci"),
                                    },
                                    WhenWrong: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("optio"),
                                                    URI: sdk.String("http://uniform-safe.net"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("et"),
                                                    YoutubeURI: sdk.String("beatae"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("id"),
                                    },
                                },
                                QuestionID: sdk.String("consequatur"),
                                Required: sdk.Bool(false),
                                RowQuestion: &shared.RowQuestion{
                                    Title: sdk.String("Ms."),
                                },
                                ScaleQuestion: &shared.ScaleQuestion{
                                    High: sdk.Int(191724),
                                    HighLabel: sdk.String("iure"),
                                    Low: sdk.Int(270477),
                                    LowLabel: sdk.String("eos"),
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
                                            GoToSectionID: sdk.String("suscipit"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("laudantium"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                    Width: sdk.Int(514609),
                                                },
                                                SourceURI: sdk.String("ullam"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("aut"),
                                        },
                                        shared.OptionInput{
                                            GoToAction: shared.OptionGoToActionEnumGoToActionUnspecified.ToPointer(),
                                            GoToSectionID: sdk.String("officia"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("quaerat"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumLeft.ToPointer(),
                                                    Width: sdk.Int(884325),
                                                },
                                                SourceURI: sdk.String("iusto"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("sapiente"),
                                        },
                                        shared.OptionInput{
                                            GoToAction: shared.OptionGoToActionEnumNextSection.ToPointer(),
                                            GoToSectionID: sdk.String("neque"),
                                            Image: &shared.ImageInput{
                                                AltText: sdk.String("quidem"),
                                                Properties: &shared.MediaProperties{
                                                    Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                    Width: sdk.Int(506245),
                                                },
                                                SourceURI: sdk.String("tempora"),
                                            },
                                            IsOther: sdk.Bool(false),
                                            Value: sdk.String("ipsam"),
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
                                    FolderID: sdk.String("sequi"),
                                    MaxFileSize: sdk.String("magni"),
                                    MaxFiles: sdk.Int(29881),
                                    Types: []shared.FileUploadQuestionTypesEnum{
                                        shared.FileUploadQuestionTypesEnumDocument,
                                        shared.FileUploadQuestionTypesEnumFileTypeUnspecified,
                                        shared.FileUploadQuestionTypesEnumPdf,
                                    },
                                },
                                Grading: &shared.Grading{
                                    CorrectAnswers: &shared.CorrectAnswers{
                                        Answers: []shared.CorrectAnswer{
                                            shared.CorrectAnswer{
                                                Value: sdk.String("numquam"),
                                            },
                                            shared.CorrectAnswer{
                                                Value: sdk.String("rerum"),
                                            },
                                            shared.CorrectAnswer{
                                                Value: sdk.String("dolorum"),
                                            },
                                            shared.CorrectAnswer{
                                                Value: sdk.String("quibusdam"),
                                            },
                                        },
                                    },
                                    GeneralFeedback: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("excepturi"),
                                                    URI: sdk.String("http://last-scene.name"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("animi"),
                                                    YoutubeURI: sdk.String("voluptatum"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("aliquid"),
                                                    URI: sdk.String("http://round-rubber.biz"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("eos"),
                                                    YoutubeURI: sdk.String("magnam"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("dolores"),
                                                    URI: sdk.String("http://indolent-hellcat.biz"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("quos"),
                                                    YoutubeURI: sdk.String("illo"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("suscipit"),
                                                    URI: sdk.String("https://threadbare-saviour.name"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("atque"),
                                                    YoutubeURI: sdk.String("voluptates"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("maiores"),
                                    },
                                    PointValue: sdk.Int(366275),
                                    WhenRight: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("doloribus"),
                                                    URI: sdk.String("https://runny-discharge.net"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("ipsam"),
                                                    YoutubeURI: sdk.String("occaecati"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("ipsum"),
                                    },
                                    WhenWrong: &shared.Feedback{
                                        Material: []shared.ExtraMaterial{
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("quisquam"),
                                                    URI: sdk.String("http://coordinated-scrutiny.org"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("mollitia"),
                                                    YoutubeURI: sdk.String("id"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("quibusdam"),
                                                    URI: sdk.String("http://ultimate-skin.info"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("similique"),
                                                    YoutubeURI: sdk.String("delectus"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("saepe"),
                                                    URI: sdk.String("https://showy-summary.name"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("aut"),
                                                    YoutubeURI: sdk.String("temporibus"),
                                                },
                                            },
                                            shared.ExtraMaterial{
                                                Link: &shared.TextLink{
                                                    DisplayText: sdk.String("tenetur"),
                                                    URI: sdk.String("http://expensive-material.name"),
                                                },
                                                Video: &shared.VideoLink{
                                                    DisplayText: sdk.String("dolore"),
                                                    YoutubeURI: sdk.String("esse"),
                                                },
                                            },
                                        },
                                        Text: sdk.String("reiciendis"),
                                    },
                                },
                                QuestionID: sdk.String("iste"),
                                Required: sdk.Bool(false),
                                RowQuestion: &shared.RowQuestion{
                                    Title: sdk.String("Mrs."),
                                },
                                ScaleQuestion: &shared.ScaleQuestion{
                                    High: sdk.Int(581019),
                                    HighLabel: sdk.String("aut"),
                                    Low: sdk.Int(771289),
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
                    },
                    QuestionItem: &shared.QuestionItemInput{
                        Image: &shared.ImageInput{
                            AltText: sdk.String("quos"),
                            Properties: &shared.MediaProperties{
                                Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                Width: sdk.Int(559937),
                            },
                            SourceURI: sdk.String("voluptatem"),
                        },
                        Question: &shared.QuestionInput{
                            ChoiceQuestion: &shared.ChoiceQuestionInput{
                                Options: []shared.OptionInput{
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                        GoToSectionID: sdk.String("ipsum"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("vero"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumRight.ToPointer(),
                                                Width: sdk.Int(704732),
                                            },
                                            SourceURI: sdk.String("maiores"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("error"),
                                    },
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumSubmitForm.ToPointer(),
                                        GoToSectionID: sdk.String("a"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("consectetur"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                Width: sdk.Int(977641),
                                            },
                                            SourceURI: sdk.String("assumenda"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("repellendus"),
                                    },
                                    shared.OptionInput{
                                        GoToAction: shared.OptionGoToActionEnumRestartForm.ToPointer(),
                                        GoToSectionID: sdk.String("delectus"),
                                        Image: &shared.ImageInput{
                                            AltText: sdk.String("odio"),
                                            Properties: &shared.MediaProperties{
                                                Alignment: shared.MediaPropertiesAlignmentEnumCenter.ToPointer(),
                                                Width: sdk.Int(13316),
                                            },
                                            SourceURI: sdk.String("quam"),
                                        },
                                        IsOther: sdk.Bool(false),
                                        Value: sdk.String("omnis"),
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
                                MaxFileSize: sdk.String("modi"),
                                MaxFiles: sdk.Int(818101),
                                Types: []shared.FileUploadQuestionTypesEnum{
                                    shared.FileUploadQuestionTypesEnumPresentation,
                                },
                            },
                            Grading: &shared.Grading{
                                CorrectAnswers: &shared.CorrectAnswers{
                                    Answers: []shared.CorrectAnswer{
                                        shared.CorrectAnswer{
                                            Value: sdk.String("sed"),
                                        },
                                        shared.CorrectAnswer{
                                            Value: sdk.String("non"),
                                        },
                                    },
                                },
                                GeneralFeedback: &shared.Feedback{
                                    Material: []shared.ExtraMaterial{
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("fugiat"),
                                                URI: sdk.String("https://babyish-wallet.biz"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("vero"),
                                                YoutubeURI: sdk.String("eos"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("quas"),
                                                URI: sdk.String("http://busy-lever.info"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("fugiat"),
                                                YoutubeURI: sdk.String("enim"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("iure"),
                                                URI: sdk.String("https://famous-elimination.org"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("nulla"),
                                                YoutubeURI: sdk.String("repudiandae"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("quibusdam"),
                                                URI: sdk.String("https://front-picture.name"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("quae"),
                                                YoutubeURI: sdk.String("eum"),
                                            },
                                        },
                                    },
                                    Text: sdk.String("nostrum"),
                                },
                                PointValue: sdk.Int(909093),
                                WhenRight: &shared.Feedback{
                                    Material: []shared.ExtraMaterial{
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("ratione"),
                                                URI: sdk.String("https://rich-statistics.org"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("placeat"),
                                                YoutubeURI: sdk.String("dolores"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("consequatur"),
                                                URI: sdk.String("http://crowded-prize.info"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("quo"),
                                                YoutubeURI: sdk.String("laudantium"),
                                            },
                                        },
                                    },
                                    Text: sdk.String("dignissimos"),
                                },
                                WhenWrong: &shared.Feedback{
                                    Material: []shared.ExtraMaterial{
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("omnis"),
                                                URI: sdk.String("http://drafty-productivity.info"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("debitis"),
                                                YoutubeURI: sdk.String("vitae"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("dolor"),
                                                URI: sdk.String("http://mixed-drinking.org"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("reprehenderit"),
                                                YoutubeURI: sdk.String("deserunt"),
                                            },
                                        },
                                        shared.ExtraMaterial{
                                            Link: &shared.TextLink{
                                                DisplayText: sdk.String("itaque"),
                                                URI: sdk.String("http://delayed-scarf.info"),
                                            },
                                            Video: &shared.VideoLink{
                                                DisplayText: sdk.String("praesentium"),
                                                YoutubeURI: sdk.String("natus"),
                                            },
                                        },
                                    },
                                    Text: sdk.String("vitae"),
                                },
                            },
                            QuestionID: sdk.String("tenetur"),
                            Required: sdk.Bool(false),
                            RowQuestion: &shared.RowQuestion{
                                Title: sdk.String("Ms."),
                            },
                            ScaleQuestion: &shared.ScaleQuestion{
                                High: sdk.Int(133148),
                                HighLabel: sdk.String("eligendi"),
                                Low: sdk.Int(917877),
                                LowLabel: sdk.String("dicta"),
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
                        "ullam": "iusto",
                    },
                    Title: sdk.String("Mr."),
                    VideoItem: &shared.VideoItem{
                        Caption: sdk.String("voluptate"),
                        Video: &shared.Video{
                            Properties: &shared.MediaProperties{
                                Alignment: shared.MediaPropertiesAlignmentEnumAlignmentUnspecified.ToPointer(),
                                Width: sdk.Int(209602),
                            },
                            YoutubeURI: sdk.String("eaque"),
                        },
                    },
                },
            },
            Settings: &shared.FormSettings{
                QuizSettings: &shared.QuizSettings{
                    IsQuiz: sdk.Bool(false),
                },
            },
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("voluptate"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("totam"),
    }, operations.FormsFormsCreateSecurity{
        Option1: &operations.FormsFormsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Form != nil {
        // handle response
    }
}
```

## FormsFormsGet

Get a form.

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
    res, err := s.Forms.FormsFormsGet(ctx, operations.FormsFormsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("quam"),
        FormID: "exercitationem",
        Key: sdk.String("voluptates"),
        OauthToken: sdk.String("sequi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quis"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("vel"),
    }, operations.FormsFormsGetSecurity{
        Option1: &operations.FormsFormsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Form != nil {
        // handle response
    }
}
```

## FormsFormsResponsesGet

Get one response from the form.

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
    res, err := s.Forms.FormsFormsResponsesGet(ctx, operations.FormsFormsResponsesGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("fugit"),
        FormID: "itaque",
        Key: sdk.String("unde"),
        OauthToken: sdk.String("cumque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        ResponseID: "repellendus",
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("minus"),
    }, operations.FormsFormsResponsesGetSecurity{
        Option1: &operations.FormsFormsResponsesGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FormResponse != nil {
        // handle response
    }
}
```

## FormsFormsResponsesList

List a form's responses.

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
    res, err := s.Forms.FormsFormsResponsesList(ctx, operations.FormsFormsResponsesListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("a"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vitae"),
        Fields: sdk.String("veritatis"),
        Filter: sdk.String("facere"),
        FormID: "earum",
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("dicta"),
        PageSize: sdk.Int64(32737),
        PageToken: sdk.String("odit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("enim"),
    }, operations.FormsFormsResponsesListSecurity{
        Option1: &operations.FormsFormsResponsesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFormResponsesResponse != nil {
        // handle response
    }
}
```

## FormsFormsWatchesCreate

Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).

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
    res, err := s.Forms.FormsFormsWatchesCreate(ctx, operations.FormsFormsWatchesCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateWatchRequestInput: &shared.CreateWatchRequestInput{
            Watch: &shared.WatchInput{
                EventType: shared.WatchEventTypeEnumEventTypeUnspecified.ToPointer(),
                Target: &shared.WatchTarget{
                    Topic: &shared.CloudPubsubTopic{
                        TopicName: sdk.String("est"),
                    },
                },
            },
            WatchID: sdk.String("quaerat"),
        },
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("alias"),
        FormID: "sapiente",
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quia"),
        UploadType: sdk.String("vitae"),
        UploadProtocol: sdk.String("odio"),
    }, operations.FormsFormsWatchesCreateSecurity{
        Option1: &operations.FormsFormsWatchesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Watch != nil {
        // handle response
    }
}
```

## FormsFormsWatchesDelete

Delete a watch.

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
    res, err := s.Forms.FormsFormsWatchesDelete(ctx, operations.FormsFormsWatchesDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("quod"),
        FormID: "eligendi",
        Key: sdk.String("sit"),
        OauthToken: sdk.String("possimus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("assumenda"),
        WatchID: "illum",
    }, operations.FormsFormsWatchesDeleteSecurity{
        Option1: &operations.FormsFormsWatchesDeleteSecurityOption1{
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

## FormsFormsWatchesList

Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.

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
    res, err := s.Forms.FormsFormsWatchesList(ctx, operations.FormsFormsWatchesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tempora"),
        Fields: sdk.String("esse"),
        FormID: "doloremque",
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("reiciendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.FormsFormsWatchesListSecurity{
        Option1: &operations.FormsFormsWatchesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWatchesResponse != nil {
        // handle response
    }
}
```

## FormsFormsWatchesRenew

Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

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
    res, err := s.Forms.FormsFormsWatchesRenew(ctx, operations.FormsFormsWatchesRenewRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "ab": "officiis",
            "eum": "rerum",
            "placeat": "ab",
        },
        AccessToken: sdk.String("ad"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("labore"),
        FormID: "impedit",
        Key: sdk.String("ut"),
        OauthToken: sdk.String("earum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ullam"),
        UploadType: sdk.String("numquam"),
        UploadProtocol: sdk.String("enim"),
        WatchID: "cupiditate",
    }, operations.FormsFormsWatchesRenewSecurity{
        Option1: &operations.FormsFormsWatchesRenewSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Watch != nil {
        // handle response
    }
}
```
