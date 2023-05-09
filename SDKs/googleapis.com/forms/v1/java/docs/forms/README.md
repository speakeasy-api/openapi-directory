# forms

### Available Operations

* [formsFormsBatchUpdate](#formsformsbatchupdate) - Change the form with a batch of updates.
* [formsFormsCreate](#formsformscreate) - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* [formsFormsGet](#formsformsget) - Get a form.
* [formsFormsResponsesGet](#formsformsresponsesget) - Get one response from the form.
* [formsFormsResponsesList](#formsformsresponseslist) - List a form's responses.
* [formsFormsWatchesCreate](#formsformswatchescreate) - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* [formsFormsWatchesDelete](#formsformswatchesdelete) - Delete a watch.
* [formsFormsWatchesList](#formsformswatcheslist) - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* [formsFormsWatchesRenew](#formsformswatchesrenew) - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

## formsFormsBatchUpdate

Change the form with a batch of updates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateRequest;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateResponse;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUpdateFormRequestInput;
import org.openapis.openapi.models.shared.ChoiceQuestionInput;
import org.openapis.openapi.models.shared.ChoiceQuestionTypeEnum;
import org.openapis.openapi.models.shared.CorrectAnswer;
import org.openapis.openapi.models.shared.CorrectAnswers;
import org.openapis.openapi.models.shared.CreateItemRequestInput;
import org.openapis.openapi.models.shared.DateQuestion;
import org.openapis.openapi.models.shared.DeleteItemRequest;
import org.openapis.openapi.models.shared.ExtraMaterial;
import org.openapis.openapi.models.shared.Feedback;
import org.openapis.openapi.models.shared.FileUploadQuestion;
import org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum;
import org.openapis.openapi.models.shared.FormSettings;
import org.openapis.openapi.models.shared.Grading;
import org.openapis.openapi.models.shared.GridInput;
import org.openapis.openapi.models.shared.ImageInput;
import org.openapis.openapi.models.shared.ImageItemInput;
import org.openapis.openapi.models.shared.InfoInput;
import org.openapis.openapi.models.shared.ItemInput;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.MediaProperties;
import org.openapis.openapi.models.shared.MediaPropertiesAlignmentEnum;
import org.openapis.openapi.models.shared.MoveItemRequest;
import org.openapis.openapi.models.shared.OptionGoToActionEnum;
import org.openapis.openapi.models.shared.OptionInput;
import org.openapis.openapi.models.shared.QuestionGroupItemInput;
import org.openapis.openapi.models.shared.QuestionInput;
import org.openapis.openapi.models.shared.QuestionItemInput;
import org.openapis.openapi.models.shared.QuizSettings;
import org.openapis.openapi.models.shared.RequestInput;
import org.openapis.openapi.models.shared.RowQuestion;
import org.openapis.openapi.models.shared.ScaleQuestion;
import org.openapis.openapi.models.shared.TextLink;
import org.openapis.openapi.models.shared.TextQuestion;
import org.openapis.openapi.models.shared.TimeQuestion;
import org.openapis.openapi.models.shared.UpdateFormInfoRequestInput;
import org.openapis.openapi.models.shared.UpdateItemRequestInput;
import org.openapis.openapi.models.shared.UpdateSettingsRequest;
import org.openapis.openapi.models.shared.Video;
import org.openapis.openapi.models.shared.VideoItem;
import org.openapis.openapi.models.shared.VideoLink;
import org.openapis.openapi.models.shared.WriteControl;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsBatchUpdateRequest req = new FormsFormsBatchUpdateRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                batchUpdateFormRequestInput = new BatchUpdateFormRequestInput() {{
                    includeFormInResponse = false;
                    requests = new org.openapis.openapi.models.shared.RequestInput[]{{
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "quas";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "veritatis";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 62688;
                                            }};
                                            sourceUri = "similique";
                                        }};
                                    }};
                                    itemId = "incidunt";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("magni", "deserunt");
                                        put("delectus", "omnis");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "maxime";
                                                        image = new ImageInput() {{
                                                            altText = "quis";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                width = 303253;
                                                            }};
                                                            sourceUri = "excepturi";
                                                        }};
                                                        isOther = false;
                                                        value = "maiores";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHECKBOX;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "velit";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 230305;
                                            }};
                                            sourceUri = "nemo";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "quas";
                                                            image = new ImageInput() {{
                                                                altText = "molestiae";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 989033;
                                                                }};
                                                                sourceUri = "a";
                                                            }};
                                                            isOther = false;
                                                            value = "nobis";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "accusantium";
                                                            image = new ImageInput() {{
                                                                altText = "dicta";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 417539;
                                                                }};
                                                                sourceUri = "eveniet";
                                                            }};
                                                            isOther = false;
                                                            value = "porro";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "quidem";
                                                            image = new ImageInput() {{
                                                                altText = "modi";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 145435;
                                                                }};
                                                                sourceUri = "eius";
                                                            }};
                                                            isOther = false;
                                                            value = "sequi";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "asperiores";
                                                            image = new ImageInput() {{
                                                                altText = "esse";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 573610;
                                                                }};
                                                                sourceUri = "repellat";
                                                            }};
                                                            isOther = false;
                                                            value = "a";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = ChoiceQuestionTypeEnum.CHECKBOX;
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "maiores";
                                                    maxFileSize = "itaque";
                                                    maxFiles = 861591;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                        add(FileUploadQuestionTypesEnum.DOCUMENT),
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "officia";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "saepe";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "repudiandae";
                                                                    uri = "http://popular-satisfaction.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "blanditiis";
                                                                    youtubeUri = "eius";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quisquam";
                                                                    uri = "http://short-term-outrage.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quia";
                                                                    youtubeUri = "magnam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "reprehenderit";
                                                    }};
                                                    pointValue = 800799;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "corrupti";
                                                                    uri = "http://kooky-cruelty.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "modi";
                                                                    youtubeUri = "perferendis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "necessitatibus";
                                                                    uri = "http://neighboring-eardrum.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "maiores";
                                                                    youtubeUri = "neque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "odit";
                                                                    uri = "https://gifted-futon.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "exercitationem";
                                                                    youtubeUri = "veniam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "nihil";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nisi";
                                                                    uri = "https://glorious-stalk.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "suscipit";
                                                                    youtubeUri = "pariatur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sit";
                                                                    uri = "https://sweltering-airmail.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sapiente";
                                                                    youtubeUri = "sed";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "possimus";
                                                    }};
                                                }};
                                                questionId = "repellat";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 100233;
                                                    highLabel = "adipisci";
                                                    low = 867115;
                                                    lowLabel = "harum";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "dolore";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 435353;
                                            }};
                                            sourceUri = "explicabo";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "dolorum";
                                                        image = new ImageInput() {{
                                                            altText = "velit";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 510020;
                                                            }};
                                                            sourceUri = "error";
                                                        }};
                                                        isOther = false;
                                                        value = "non";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "mollitia";
                                                        image = new ImageInput() {{
                                                            altText = "accusamus";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                width = 769156;
                                                            }};
                                                            sourceUri = "doloremque";
                                                        }};
                                                        isOther = false;
                                                        value = "expedita";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "eaque";
                                                        image = new ImageInput() {{
                                                            altText = "deserunt";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                width = 570423;
                                                            }};
                                                            sourceUri = "magni";
                                                        }};
                                                        isOther = false;
                                                        value = "tempora";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "dolor";
                                                        image = new ImageInput() {{
                                                            altText = "rerum";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 883078;
                                                            }};
                                                            sourceUri = "optio";
                                                        }};
                                                        isOther = false;
                                                        value = "delectus";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.DROP_DOWN;
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "quo";
                                                maxFileSize = "quos";
                                                maxFiles = 994234;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.PDF),
                                                    add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                    add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "aut";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "nostrum";
                                                                uri = "https://superb-coonskin.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "vel";
                                                                youtubeUri = "sapiente";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "mollitia";
                                                                uri = "http://mushy-artificer.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "voluptates";
                                                                youtubeUri = "ad";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "aliquam";
                                                                uri = "https://naughty-circuit.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "inventore";
                                                                youtubeUri = "aliquid";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "laudantium";
                                                                uri = "https://easy-going-grey.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "cumque";
                                                                youtubeUri = "rem";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "voluptatum";
                                                }};
                                                pointValue = 498534;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "recusandae";
                                                                uri = "http://lovely-dialect.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "voluptatum";
                                                                youtubeUri = "sit";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "rerum";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "tenetur";
                                                                uri = "http://respectful-liquid.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "deserunt";
                                                                youtubeUri = "magni";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "nihil";
                                                }};
                                            }};
                                            questionId = "voluptas";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Miss";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 413780;
                                                highLabel = "alias";
                                                low = 686380;
                                                lowLabel = "aut";
                                            }};
                                            textQuestion = new TextQuestion() {{
                                                paragraph = false;
                                            }};
                                            timeQuestion = new TimeQuestion() {{
                                                duration = false;
                                            }};
                                        }};
                                    }};
                                    textItem = new java.util.HashMap<String, Object>() {{
                                        put("maxime", "aliquam");
                                        put("iste", "ullam");
                                    }};
                                    title = "Miss";
                                    videoItem = new VideoItem() {{
                                        caption = "placeat";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 577590;
                                            }};
                                            youtubeUri = "unde";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 75277;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 469170;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 78246;
                                }};
                                originalLocation = new Location() {{
                                    index = 725316;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "ipsam";
                                    title = "Mr.";
                                }};
                                updateMask = "cumque";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "dicta";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "harum";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 707983;
                                            }};
                                            sourceUri = "beatae";
                                        }};
                                    }};
                                    itemId = "cumque";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("labore", "expedita");
                                        put("corrupti", "rem");
                                        put("atque", "officiis");
                                        put("cum", "pariatur");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "incidunt";
                                                        image = new ImageInput() {{
                                                            altText = "quod";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 781491;
                                                            }};
                                                            sourceUri = "id";
                                                        }};
                                                        isOther = false;
                                                        value = "excepturi";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "libero";
                                                        image = new ImageInput() {{
                                                            altText = "quo";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                width = 944033;
                                                            }};
                                                            sourceUri = "maxime";
                                                        }};
                                                        isOther = false;
                                                        value = "accusantium";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "fugit";
                                                        image = new ImageInput() {{
                                                            altText = "pariatur";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 927490;
                                                            }};
                                                            sourceUri = "veritatis";
                                                        }};
                                                        isOther = false;
                                                        value = "aut";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "iusto";
                                                        image = new ImageInput() {{
                                                            altText = "dolor";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 274295;
                                                            }};
                                                            sourceUri = "magni";
                                                        }};
                                                        isOther = false;
                                                        value = "rerum";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHOICE_TYPE_UNSPECIFIED;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "voluptatem";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 873320;
                                            }};
                                            sourceUri = "eum";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "nihil";
                                                            image = new ImageInput() {{
                                                                altText = "atque";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 645544;
                                                                }};
                                                                sourceUri = "atque";
                                                            }};
                                                            isOther = false;
                                                            value = "nostrum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "architecto";
                                                            image = new ImageInput() {{
                                                                altText = "est";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 522390;
                                                                }};
                                                                sourceUri = "magni";
                                                            }};
                                                            isOther = false;
                                                            value = "quae";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "placeat";
                                                            image = new ImageInput() {{
                                                                altText = "enim";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 958068;
                                                                }};
                                                                sourceUri = "saepe";
                                                            }};
                                                            isOther = false;
                                                            value = "delectus";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = ChoiceQuestionTypeEnum.CHECKBOX;
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "natus";
                                                    maxFileSize = "cumque";
                                                    maxFiles = 617497;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.AUDIO),
                                                        add(FileUploadQuestionTypesEnum.ANY),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "mollitia";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "cumque";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "quis";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "enim";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nemo";
                                                                    uri = "https://disloyal-almighty.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "minus";
                                                                    youtubeUri = "asperiores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "recusandae";
                                                                    uri = "https://loyal-butler.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sit";
                                                                    youtubeUri = "aliquid";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "necessitatibus";
                                                    }};
                                                    pointValue = 148975;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sunt";
                                                                    uri = "http://whirlwind-poem.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "deserunt";
                                                                    youtubeUri = "modi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sunt";
                                                                    uri = "https://fabulous-lychee.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "at";
                                                                    youtubeUri = "dolorem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "repellat";
                                                                    uri = "http://blushing-condition.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fuga";
                                                                    youtubeUri = "hic";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "eaque";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "architecto";
                                                                    uri = "http://complex-strip.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "illo";
                                                                    youtubeUri = "magnam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "delectus";
                                                    }};
                                                }};
                                                questionId = "numquam";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Miss";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 750537;
                                                    highLabel = "ex";
                                                    low = 998023;
                                                    lowLabel = "quae";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "hic";
                                                            image = new ImageInput() {{
                                                                altText = "excepturi";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 151385;
                                                                }};
                                                                sourceUri = "beatae";
                                                            }};
                                                            isOther = false;
                                                            value = "similique";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "animi";
                                                            image = new ImageInput() {{
                                                                altText = "dolore";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 493407;
                                                                }};
                                                                sourceUri = "esse";
                                                            }};
                                                            isOther = false;
                                                            value = "animi";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "esse";
                                                            image = new ImageInput() {{
                                                                altText = "eveniet";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 246402;
                                                                }};
                                                                sourceUri = "officiis";
                                                            }};
                                                            isOther = false;
                                                            value = "eius";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = ChoiceQuestionTypeEnum.CHECKBOX;
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "itaque";
                                                    maxFileSize = "dignissimos";
                                                    maxFiles = 373449;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.IMAGE),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "quis";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "facilis";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ut";
                                                                    uri = "http://calm-legitimacy.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolor";
                                                                    youtubeUri = "expedita";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "libero";
                                                    }};
                                                    pointValue = 615277;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "minus";
                                                                    uri = "https://tan-morbidity.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "enim";
                                                                    youtubeUri = "accusamus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "aperiam";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laudantium";
                                                                    uri = "http://beautiful-octopus.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rem";
                                                                    youtubeUri = "tenetur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "deleniti";
                                                                    uri = "http://vivacious-boycott.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "labore";
                                                                    youtubeUri = "maiores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sequi";
                                                                    uri = "https://acidic-infiltration.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "facere";
                                                                    youtubeUri = "quisquam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cumque";
                                                                    uri = "http://rapid-pecan.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "sequi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "porro";
                                                    }};
                                                }};
                                                questionId = "laborum";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Miss";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 842974;
                                                    highLabel = "omnis";
                                                    low = 16252;
                                                    lowLabel = "ipsam";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "officia";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 442873;
                                            }};
                                            sourceUri = "quia";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "ad";
                                                        image = new ImageInput() {{
                                                            altText = "nisi";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                width = 154130;
                                                            }};
                                                            sourceUri = "laudantium";
                                                        }};
                                                        isOther = false;
                                                        value = "sed";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "iusto";
                                                        image = new ImageInput() {{
                                                            altText = "expedita";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 830477;
                                                            }};
                                                            sourceUri = "nesciunt";
                                                        }};
                                                        isOther = false;
                                                        value = "ipsa";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "dolore";
                                                        image = new ImageInput() {{
                                                            altText = "esse";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 718119;
                                                            }};
                                                            sourceUri = "sapiente";
                                                        }};
                                                        isOther = false;
                                                        value = "quam";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "aliquam";
                                                        image = new ImageInput() {{
                                                            altText = "delectus";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                width = 531494;
                                                            }};
                                                            sourceUri = "iusto";
                                                        }};
                                                        isOther = false;
                                                        value = "quod";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.DROP_DOWN;
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "voluptas";
                                                maxFileSize = "non";
                                                maxFiles = 353819;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                    add(FileUploadQuestionTypesEnum.AUDIO),
                                                    add(FileUploadQuestionTypesEnum.PDF),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "corporis";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "non";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "necessitatibus";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "distinctio";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "laboriosam";
                                                                uri = "http://skeletal-condominium.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "vitae";
                                                                youtubeUri = "voluptatibus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "doloremque";
                                                                uri = "http://electric-propaganda.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "nostrum";
                                                                youtubeUri = "temporibus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ratione";
                                                                uri = "http://hopeful-koala.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "itaque";
                                                                youtubeUri = "vitae";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "est";
                                                                uri = "http://stale-sherry.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "possimus";
                                                                youtubeUri = "maiores";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "odio";
                                                }};
                                                pointValue = 588662;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "aperiam";
                                                                uri = "https://disastrous-nestling.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "repellendus";
                                                                youtubeUri = "unde";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "alias";
                                                                uri = "https://dimwitted-harbour.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "expedita";
                                                                youtubeUri = "in";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quisquam";
                                                                uri = "http://frozen-stress.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "distinctio";
                                                                youtubeUri = "mollitia";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "impedit";
                                                                uri = "https://brilliant-mess.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "cum";
                                                                youtubeUri = "dicta";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "impedit";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "eveniet";
                                                                uri = "https://creamy-scallops.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "impedit";
                                                                youtubeUri = "vel";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "eligendi";
                                                                uri = "https://idiotic-breastplate.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "maiores";
                                                                youtubeUri = "itaque";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "vero";
                                                }};
                                            }};
                                            questionId = "quidem";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 778242;
                                                highLabel = "dignissimos";
                                                low = 791615;
                                                lowLabel = "distinctio";
                                            }};
                                            textQuestion = new TextQuestion() {{
                                                paragraph = false;
                                            }};
                                            timeQuestion = new TimeQuestion() {{
                                                duration = false;
                                            }};
                                        }};
                                    }};
                                    textItem = new java.util.HashMap<String, Object>() {{
                                        put("cum", "suscipit");
                                        put("saepe", "earum");
                                        put("quod", "nihil");
                                        put("quaerat", "ipsum");
                                    }};
                                    title = "Ms.";
                                    videoItem = new VideoItem() {{
                                        caption = "laudantium";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 643997;
                                            }};
                                            youtubeUri = "odit";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 319419;
                                }};
                                updateMask = "sequi";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "beatae";
                            }};
                        }}),
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "iusto";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "esse";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 487799;
                                            }};
                                            sourceUri = "nulla";
                                        }};
                                    }};
                                    itemId = "impedit";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("illo", "exercitationem");
                                        put("laborum", "illum");
                                        put("fugit", "maxime");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "nostrum";
                                                        image = new ImageInput() {{
                                                            altText = "illum";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 414456;
                                                            }};
                                                            sourceUri = "esse";
                                                        }};
                                                        isOther = false;
                                                        value = "explicabo";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "temporibus";
                                                        image = new ImageInput() {{
                                                            altText = "optio";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 978655;
                                                            }};
                                                            sourceUri = "exercitationem";
                                                        }};
                                                        isOther = false;
                                                        value = "culpa";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "aspernatur";
                                                        image = new ImageInput() {{
                                                            altText = "sapiente";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 640565;
                                                            }};
                                                            sourceUri = "suscipit";
                                                        }};
                                                        isOther = false;
                                                        value = "harum";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.RADIO;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "doloremque";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                width = 514480;
                                            }};
                                            sourceUri = "iusto";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "iure";
                                                            image = new ImageInput() {{
                                                                altText = "ab";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 228907;
                                                                }};
                                                                sourceUri = "sapiente";
                                                            }};
                                                            isOther = false;
                                                            value = "corporis";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "iure";
                                                            image = new ImageInput() {{
                                                                altText = "quisquam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 515595;
                                                                }};
                                                                sourceUri = "nam";
                                                            }};
                                                            isOther = false;
                                                            value = "nemo";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = ChoiceQuestionTypeEnum.RADIO;
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "ipsam";
                                                    maxFileSize = "minima";
                                                    maxFiles = 273383;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.DRAWING),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "fugiat";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "doloremque";
                                                                    uri = "https://sick-panel.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "impedit";
                                                                    youtubeUri = "nisi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cumque";
                                                                    uri = "https://thrifty-goal.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "enim";
                                                                    youtubeUri = "maiores";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "consectetur";
                                                    }};
                                                    pointValue = 898826;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cupiditate";
                                                                    uri = "http://old-dare.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "magnam";
                                                                    youtubeUri = "repellat";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "omnis";
                                                                    uri = "http://inborn-republic.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "possimus";
                                                                    youtubeUri = "fugit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ipsam";
                                                                    uri = "http://dimwitted-lyrics.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "error";
                                                                    youtubeUri = "nobis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "tempora";
                                                                    uri = "http://faint-quill.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptates";
                                                                    youtubeUri = "possimus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "fugit";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "repudiandae";
                                                                    uri = "http://imaginative-collateral.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "blanditiis";
                                                                    youtubeUri = "hic";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "maiores";
                                                    }};
                                                }};
                                                questionId = "asperiores";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Ms.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 198892;
                                                    highLabel = "cupiditate";
                                                    low = 656839;
                                                    lowLabel = "provident";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                            goToSectionId = "mollitia";
                                                            image = new ImageInput() {{
                                                                altText = "nam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 776421;
                                                                }};
                                                                sourceUri = "fuga";
                                                            }};
                                                            isOther = false;
                                                            value = "tempore";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = ChoiceQuestionTypeEnum.RADIO;
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "fugit";
                                                    maxFileSize = "suscipit";
                                                    maxFiles = 453880;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                        add(FileUploadQuestionTypesEnum.DRAWING),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "accusamus";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "ab";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quisquam";
                                                                    uri = "http://acceptable-colonisation.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "vitae";
                                                                    youtubeUri = "quidem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sequi";
                                                                    uri = "http://grateful-standpoint.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "unde";
                                                                    youtubeUri = "similique";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "eligendi";
                                                                    uri = "https://elated-teaching.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "asperiores";
                                                                    youtubeUri = "temporibus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "id";
                                                                    uri = "https://terrific-analytics.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "veniam";
                                                                    youtubeUri = "aliquam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "provident";
                                                    }};
                                                    pointValue = 875693;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "doloremque";
                                                                    uri = "http://abandoned-artery.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "perspiciatis";
                                                                    youtubeUri = "quam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "atque";
                                                                    uri = "https://ill-boysenberry.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "laborum";
                                                                    youtubeUri = "veritatis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quod";
                                                                    uri = "https://dense-apology.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "atque";
                                                                    youtubeUri = "totam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "tenetur";
                                                                    uri = "http://junior-shop.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sapiente";
                                                                    youtubeUri = "reiciendis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quod";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "inventore";
                                                                    uri = "https://stingy-possible.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ex";
                                                                    youtubeUri = "consectetur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "maiores";
                                                                    uri = "http://proper-consequence.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptatum";
                                                                    youtubeUri = "perferendis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "laborum";
                                                    }};
                                                }};
                                                questionId = "omnis";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Ms.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 945190;
                                                    highLabel = "sapiente";
                                                    low = 242013;
                                                    lowLabel = "adipisci";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "illum";
                                                            image = new ImageInput() {{
                                                                altText = "at";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 562066;
                                                                }};
                                                                sourceUri = "ipsam";
                                                            }};
                                                            isOther = false;
                                                            value = "esse";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "perspiciatis";
                                                            image = new ImageInput() {{
                                                                altText = "voluptates";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 95123;
                                                                }};
                                                                sourceUri = "quas";
                                                            }};
                                                            isOther = false;
                                                            value = "odio";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = ChoiceQuestionTypeEnum.RADIO;
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "porro";
                                                    maxFileSize = "aliquid";
                                                    maxFiles = 648497;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.ANY),
                                                        add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "natus";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "a";
                                                                    uri = "https://outlandish-drag.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptas";
                                                                    youtubeUri = "doloribus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "recusandae";
                                                                    uri = "https://substantial-kite.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "provident";
                                                                    youtubeUri = "dolor";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sint";
                                                                    uri = "http://attentive-home.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "laborum";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "assumenda";
                                                                    uri = "http://thorough-arm-rest.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "alias";
                                                                    youtubeUri = "velit";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ullam";
                                                    }};
                                                    pointValue = 339094;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ratione";
                                                                    uri = "https://stiff-transmission.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "doloremque";
                                                                    youtubeUri = "totam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "iure";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "est";
                                                                    uri = "http://boring-thanks.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dicta";
                                                                    youtubeUri = "ipsam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequuntur";
                                                                    uri = "https://revolving-delay.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sunt";
                                                                    youtubeUri = "molestias";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "beatae";
                                                                    uri = "http://lively-recliner.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "necessitatibus";
                                                                    youtubeUri = "ipsum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "impedit";
                                                                    uri = "https://thin-rail.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "non";
                                                                    youtubeUri = "quaerat";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "consequatur";
                                                    }};
                                                }};
                                                questionId = "laudantium";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 415953;
                                                    highLabel = "quibusdam";
                                                    low = 231255;
                                                    lowLabel = "voluptas";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "quaerat";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 945431;
                                            }};
                                            sourceUri = "assumenda";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                        goToSectionId = "ullam";
                                                        image = new ImageInput() {{
                                                            altText = "perspiciatis";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 404121;
                                                            }};
                                                            sourceUri = "quibusdam";
                                                        }};
                                                        isOther = false;
                                                        value = "dicta";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "commodi";
                                                        image = new ImageInput() {{
                                                            altText = "neque";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 255264;
                                                            }};
                                                            sourceUri = "rem";
                                                        }};
                                                        isOther = false;
                                                        value = "officiis";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHECKBOX;
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "neque";
                                                maxFileSize = "corporis";
                                                maxFiles = 797527;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.VIDEO),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "recusandae";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "quos";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "dicta";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ipsum";
                                                                uri = "http://sharp-terrorism.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "recusandae";
                                                                youtubeUri = "labore";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "adipisci";
                                                                uri = "http://ashamed-cloudburst.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "iusto";
                                                                youtubeUri = "magni";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "beatae";
                                                                uri = "http://funny-improvement.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "minima";
                                                                youtubeUri = "sit";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "vel";
                                                                uri = "http://frightened-bonsai.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dignissimos";
                                                                youtubeUri = "doloremque";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "assumenda";
                                                }};
                                                pointValue = 590969;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sed";
                                                                uri = "http://witty-number.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "repellendus";
                                                                youtubeUri = "consequatur";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "adipisci";
                                                                uri = "http://slim-dispatch.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "cumque";
                                                                youtubeUri = "maxime";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "et";
                                                                uri = "http://purple-addition.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ratione";
                                                                youtubeUri = "iure";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "tempora";
                                                                uri = "http://perfumed-anticipation.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "laudantium";
                                                                youtubeUri = "facilis";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "laudantium";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "aut";
                                                                uri = "http://powerful-epithelium.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "accusamus";
                                                                youtubeUri = "iusto";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sapiente";
                                                                uri = "http://distinct-programming.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "praesentium";
                                                                youtubeUri = "tempora";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "ipsam";
                                                }};
                                            }};
                                            questionId = "officiis";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 165545;
                                                highLabel = "voluptatem";
                                                low = 665960;
                                                lowLabel = "amet";
                                            }};
                                            textQuestion = new TextQuestion() {{
                                                paragraph = false;
                                            }};
                                            timeQuestion = new TimeQuestion() {{
                                                duration = false;
                                            }};
                                        }};
                                    }};
                                    textItem = new java.util.HashMap<String, Object>() {{
                                        put("error", "voluptatibus");
                                    }};
                                    title = "Mrs.";
                                    videoItem = new VideoItem() {{
                                        caption = "rerum";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 841816;
                                            }};
                                            youtubeUri = "earum";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 566669;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 256567;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 476801;
                                }};
                                originalLocation = new Location() {{
                                    index = 773833;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "error";
                                    title = "Miss";
                                }};
                                updateMask = "voluptatum";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "aliquid";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "nihil";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 759451;
                                            }};
                                            sourceUri = "incidunt";
                                        }};
                                    }};
                                    itemId = "eos";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("dolores", "aliquid");
                                        put("eum", "vel");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "illo";
                                                        image = new ImageInput() {{
                                                            altText = "suscipit";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 855484;
                                                            }};
                                                            sourceUri = "impedit";
                                                        }};
                                                        isOther = false;
                                                        value = "culpa";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "voluptates";
                                                        image = new ImageInput() {{
                                                            altText = "maiores";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                width = 72600;
                                                            }};
                                                            sourceUri = "doloribus";
                                                        }};
                                                        isOther = false;
                                                        value = "cumque";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHECKBOX;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "modi";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 368599;
                                            }};
                                            sourceUri = "occaecati";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "quasi";
                                                            image = new ImageInput() {{
                                                                altText = "fugit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 840017;
                                                                }};
                                                                sourceUri = "mollitia";
                                                            }};
                                                            isOther = false;
                                                            value = "id";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "ipsa";
                                                            image = new ImageInput() {{
                                                                altText = "accusamus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 464878;
                                                                }};
                                                                sourceUri = "similique";
                                                            }};
                                                            isOther = false;
                                                            value = "delectus";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "facere";
                                                            image = new ImageInput() {{
                                                                altText = "nobis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 561121;
                                                                }};
                                                                sourceUri = "aut";
                                                            }};
                                                            isOther = false;
                                                            value = "temporibus";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "incidunt";
                                                            image = new ImageInput() {{
                                                                altText = "numquam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 630237;
                                                                }};
                                                                sourceUri = "dolore";
                                                            }};
                                                            isOther = false;
                                                            value = "esse";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = ChoiceQuestionTypeEnum.DROP_DOWN;
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "iste";
                                                    maxFileSize = "amet";
                                                    maxFiles = 581019;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.IMAGE),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "quos";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "blanditiis";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatem";
                                                                    uri = "https://nautical-crash.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fuga";
                                                                    youtubeUri = "facilis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "maiores";
                                                                    uri = "https://venerated-vibration.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sapiente";
                                                                    youtubeUri = "voluptatibus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "assumenda";
                                                                    uri = "https://palatable-walkway.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptatibus";
                                                                    youtubeUri = "aut";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quam";
                                                    }};
                                                    pointValue = 606262;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "asperiores";
                                                                    uri = "http://substantial-cornet.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "in";
                                                                    youtubeUri = "sed";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "non";
                                                                    uri = "https://thorough-respite.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "labore";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vero";
                                                                    uri = "http://narrow-boudoir.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "praesentium";
                                                                    youtubeUri = "iusto";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "fugiat";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "iure";
                                                                    uri = "https://famous-elimination.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nulla";
                                                                    youtubeUri = "repudiandae";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quibusdam";
                                                                    uri = "https://front-picture.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quae";
                                                                    youtubeUri = "eum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "nostrum";
                                                    }};
                                                }};
                                                questionId = "eveniet";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 187361;
                                                    highLabel = "blanditiis";
                                                    low = 697729;
                                                    lowLabel = "illum";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "reiciendis";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 175275;
                                            }};
                                            sourceUri = "consequatur";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "quidem";
                                                        image = new ImageInput() {{
                                                            altText = "voluptas";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 512017;
                                                            }};
                                                            sourceUri = "dignissimos";
                                                        }};
                                                        isOther = false;
                                                        value = "omnis";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHECKBOX;
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "fugit";
                                                maxFileSize = "dolorem";
                                                maxFiles = 696291;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.VIDEO),
                                                    add(FileUploadQuestionTypesEnum.ANY),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "ad";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ut";
                                                                uri = "https://interesting-peak.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "et";
                                                                youtubeUri = "eos";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "impedit";
                                                                uri = "http://luminous-oregano.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "tenetur";
                                                                youtubeUri = "laudantium";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "aspernatur";
                                                                uri = "https://utilized-bus.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ullam";
                                                                youtubeUri = "iusto";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "inventore";
                                                }};
                                                pointValue = 454590;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "dolorem";
                                                                uri = "http://grave-crotch.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "voluptate";
                                                                youtubeUri = "pariatur";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "minus";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "fuga";
                                                                uri = "https://official-sunday.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "omnis";
                                                                youtubeUri = "quam";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "exercitationem";
                                                                uri = "https://diligent-faucet.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "vel";
                                                                youtubeUri = "rem";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "aliquid";
                                                                uri = "http://ordinary-chalet.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "unde";
                                                                youtubeUri = "cumque";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "dolor";
                                                                uri = "https://tasty-shackle.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "a";
                                                                youtubeUri = "beatae";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "vitae";
                                                }};
                                            }};
                                            questionId = "veritatis";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Dr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 937123;
                                                highLabel = "laborum";
                                                low = 118020;
                                                lowLabel = "voluptatem";
                                            }};
                                            textQuestion = new TextQuestion() {{
                                                paragraph = false;
                                            }};
                                            timeQuestion = new TimeQuestion() {{
                                                duration = false;
                                            }};
                                        }};
                                    }};
                                    textItem = new java.util.HashMap<String, Object>() {{
                                        put("aliquid", "pariatur");
                                    }};
                                    title = "Mrs.";
                                    videoItem = new VideoItem() {{
                                        caption = "numquam";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                width = 665952;
                                            }};
                                            youtubeUri = "quaerat";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 816726;
                                }};
                                updateMask = "vitae";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "omnis";
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "alias";
                        targetRevisionId = "sapiente";
                    }};;
                }};;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "quia";
                fields = "vitae";
                key = "odio";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "distinctio";
                uploadProtocol = "placeat";
            }};            

            FormsFormsBatchUpdateResponse res = sdk.forms.formsFormsBatchUpdate(req, new FormsFormsBatchUpdateSecurity() {{
                option1 = new FormsFormsBatchUpdateSecurityOption1("quod", "eligendi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchUpdateFormResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## formsFormsCreate

Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsCreateRequest;
import org.openapis.openapi.models.operations.FormsFormsCreateResponse;
import org.openapis.openapi.models.operations.FormsFormsCreateSecurity;
import org.openapis.openapi.models.operations.FormsFormsCreateSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsCreateSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ChoiceQuestionInput;
import org.openapis.openapi.models.shared.ChoiceQuestionTypeEnum;
import org.openapis.openapi.models.shared.CorrectAnswer;
import org.openapis.openapi.models.shared.CorrectAnswers;
import org.openapis.openapi.models.shared.DateQuestion;
import org.openapis.openapi.models.shared.ExtraMaterial;
import org.openapis.openapi.models.shared.Feedback;
import org.openapis.openapi.models.shared.FileUploadQuestion;
import org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum;
import org.openapis.openapi.models.shared.FormInput;
import org.openapis.openapi.models.shared.FormSettings;
import org.openapis.openapi.models.shared.Grading;
import org.openapis.openapi.models.shared.GridInput;
import org.openapis.openapi.models.shared.ImageInput;
import org.openapis.openapi.models.shared.ImageItemInput;
import org.openapis.openapi.models.shared.InfoInput;
import org.openapis.openapi.models.shared.ItemInput;
import org.openapis.openapi.models.shared.MediaProperties;
import org.openapis.openapi.models.shared.MediaPropertiesAlignmentEnum;
import org.openapis.openapi.models.shared.OptionGoToActionEnum;
import org.openapis.openapi.models.shared.OptionInput;
import org.openapis.openapi.models.shared.QuestionGroupItemInput;
import org.openapis.openapi.models.shared.QuestionInput;
import org.openapis.openapi.models.shared.QuestionItemInput;
import org.openapis.openapi.models.shared.QuizSettings;
import org.openapis.openapi.models.shared.RowQuestion;
import org.openapis.openapi.models.shared.ScaleQuestion;
import org.openapis.openapi.models.shared.TextLink;
import org.openapis.openapi.models.shared.TextQuestion;
import org.openapis.openapi.models.shared.TimeQuestion;
import org.openapis.openapi.models.shared.Video;
import org.openapis.openapi.models.shared.VideoItem;
import org.openapis.openapi.models.shared.VideoLink;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsCreateRequest req = new FormsFormsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                formInput = new FormInput() {{
                    info = new InfoInput() {{
                        description = "possimus";
                        title = "Miss";
                    }};;
                    items = new org.openapis.openapi.models.shared.ItemInput[]{{
                        add(new ItemInput() {{
                            description = "assumenda";
                            imageItem = new ImageItemInput() {{
                                image = new ImageInput() {{
                                    altText = "illum";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                        width = 297325;
                                    }};
                                    sourceUri = "laudantium";
                                }};
                            }};
                            itemId = "tempora";
                            pageBreakItem = new java.util.HashMap<String, Object>() {{
                                put("doloremque", "corrupti");
                                put("reiciendis", "facilis");
                            }};
                            questionGroupItem = new QuestionGroupItemInput() {{
                                grid = new GridInput() {{
                                    columns = new ChoiceQuestionInput() {{
                                        options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                goToSectionId = "amet";
                                                image = new ImageInput() {{
                                                    altText = "natus";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                        width = 887835;
                                                    }};
                                                    sourceUri = "eum";
                                                }};
                                                isOther = false;
                                                value = "rerum";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                goToSectionId = "ab";
                                                image = new ImageInput() {{
                                                    altText = "ad";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                        width = 780370;
                                                    }};
                                                    sourceUri = "labore";
                                                }};
                                                isOther = false;
                                                value = "impedit";
                                            }}),
                                        }};
                                        shuffle = false;
                                        type = ChoiceQuestionTypeEnum.RADIO;
                                    }};
                                    shuffleQuestions = false;
                                }};
                                image = new ImageInput() {{
                                    altText = "earum";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.LEFT;
                                        width = 256813;
                                    }};
                                    sourceUri = "enim";
                                }};
                                questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                    add(new QuestionInput() {{
                                        choiceQuestion = new ChoiceQuestionInput() {{
                                            options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                    goToSectionId = "fuga";
                                                    image = new ImageInput() {{
                                                        altText = "consectetur";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                            width = 134832;
                                                        }};
                                                        sourceUri = "explicabo";
                                                    }};
                                                    isOther = false;
                                                    value = "suscipit";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                    goToSectionId = "eveniet";
                                                    image = new ImageInput() {{
                                                        altText = "sint";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                            width = 186130;
                                                        }};
                                                        sourceUri = "accusantium";
                                                    }};
                                                    isOther = false;
                                                    value = "consequatur";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                    goToSectionId = "recusandae";
                                                    image = new ImageInput() {{
                                                        altText = "voluptate";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                            width = 666321;
                                                        }};
                                                        sourceUri = "et";
                                                    }};
                                                    isOther = false;
                                                    value = "expedita";
                                                }}),
                                            }};
                                            shuffle = false;
                                            type = ChoiceQuestionTypeEnum.DROP_DOWN;
                                        }};
                                        dateQuestion = new DateQuestion() {{
                                            includeTime = false;
                                            includeYear = false;
                                        }};
                                        fileUploadQuestion = new FileUploadQuestion() {{
                                            folderId = "quos";
                                            maxFileSize = "maiores";
                                            maxFiles = 696678;
                                            types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                add(FileUploadQuestionTypesEnum.PDF),
                                                add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                            }};
                                        }};
                                        grading = new Grading() {{
                                            correctAnswers = new CorrectAnswers() {{
                                                answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                    add(new CorrectAnswer() {{
                                                        value = "dicta";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "architecto";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "suscipit";
                                                    }}),
                                                }};
                                            }};
                                            generalFeedback = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "officiis";
                                                            uri = "http://courteous-complaint.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "quaerat";
                                                            youtubeUri = "aut";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "natus";
                                                            uri = "http://whirlwind-pear.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "ipsa";
                                                            youtubeUri = "debitis";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "iste";
                                                            uri = "https://wasteful-lanai.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "ipsam";
                                                            youtubeUri = "libero";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "quia";
                                                            uri = "https://clear-cut-commerce.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "consequatur";
                                                            youtubeUri = "amet";
                                                        }};
                                                    }}),
                                                }};
                                                text = "consequatur";
                                            }};
                                            pointValue = 852634;
                                            whenRight = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "velit";
                                                            uri = "https://grouchy-peanut.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "distinctio";
                                                            youtubeUri = "iusto";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "dignissimos";
                                                            uri = "https://oily-sourwood.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "odit";
                                                            youtubeUri = "vero";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "deleniti";
                                                            uri = "https://burdensome-zephyr.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "magnam";
                                                            youtubeUri = "perspiciatis";
                                                        }};
                                                    }}),
                                                }};
                                                text = "amet";
                                            }};
                                            whenWrong = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "sunt";
                                                            uri = "http://whispered-station-wagon.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "quaerat";
                                                            youtubeUri = "magni";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "cumque";
                                                            uri = "https://irresponsible-hardening.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "sed";
                                                            youtubeUri = "minus";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "consequuntur";
                                                            uri = "https://whirlwind-pride.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "eligendi";
                                                            youtubeUri = "hic";
                                                        }};
                                                    }}),
                                                }};
                                                text = "quo";
                                            }};
                                        }};
                                        questionId = "illo";
                                        required = false;
                                        rowQuestion = new RowQuestion() {{
                                            title = "Miss";
                                        }};
                                        scaleQuestion = new ScaleQuestion() {{
                                            high = 460803;
                                            highLabel = "nisi";
                                            low = 129619;
                                            lowLabel = "sequi";
                                        }};
                                        textQuestion = new TextQuestion() {{
                                            paragraph = false;
                                        }};
                                        timeQuestion = new TimeQuestion() {{
                                            duration = false;
                                        }};
                                    }}),
                                    add(new QuestionInput() {{
                                        choiceQuestion = new ChoiceQuestionInput() {{
                                            options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                    goToSectionId = "quos";
                                                    image = new ImageInput() {{
                                                        altText = "numquam";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                            width = 980376;
                                                        }};
                                                        sourceUri = "nam";
                                                    }};
                                                    isOther = false;
                                                    value = "architecto";
                                                }}),
                                            }};
                                            shuffle = false;
                                            type = ChoiceQuestionTypeEnum.CHECKBOX;
                                        }};
                                        dateQuestion = new DateQuestion() {{
                                            includeTime = false;
                                            includeYear = false;
                                        }};
                                        fileUploadQuestion = new FileUploadQuestion() {{
                                            folderId = "assumenda";
                                            maxFileSize = "eos";
                                            maxFiles = 211518;
                                            types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                add(FileUploadQuestionTypesEnum.VIDEO),
                                                add(FileUploadQuestionTypesEnum.IMAGE),
                                                add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                                add(FileUploadQuestionTypesEnum.DOCUMENT),
                                            }};
                                        }};
                                        grading = new Grading() {{
                                            correctAnswers = new CorrectAnswers() {{
                                                answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                    add(new CorrectAnswer() {{
                                                        value = "expedita";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "autem";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "tempore";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "recusandae";
                                                    }}),
                                                }};
                                            }};
                                            generalFeedback = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "officia";
                                                            uri = "http://married-footstool.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "natus";
                                                            youtubeUri = "deleniti";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "necessitatibus";
                                                            uri = "http://dearest-plow.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "eos";
                                                            youtubeUri = "voluptatem";
                                                        }};
                                                    }}),
                                                }};
                                                text = "temporibus";
                                            }};
                                            pointValue = 660339;
                                            whenRight = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "commodi";
                                                            uri = "https://spotless-charge.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "quia";
                                                            youtubeUri = "iusto";
                                                        }};
                                                    }}),
                                                }};
                                                text = "ab";
                                            }};
                                            whenWrong = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "sed";
                                                            uri = "https://notable-skullduggery.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "molestiae";
                                                            youtubeUri = "itaque";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "rem";
                                                            uri = "http://exhausted-treasury.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "ipsa";
                                                            youtubeUri = "aliquam";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "dolor";
                                                            uri = "https://tense-climb.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "consequuntur";
                                                            youtubeUri = "eius";
                                                        }};
                                                    }}),
                                                }};
                                                text = "commodi";
                                            }};
                                        }};
                                        questionId = "ipsam";
                                        required = false;
                                        rowQuestion = new RowQuestion() {{
                                            title = "Ms.";
                                        }};
                                        scaleQuestion = new ScaleQuestion() {{
                                            high = 584199;
                                            highLabel = "modi";
                                            low = 392311;
                                            lowLabel = "explicabo";
                                        }};
                                        textQuestion = new TextQuestion() {{
                                            paragraph = false;
                                        }};
                                        timeQuestion = new TimeQuestion() {{
                                            duration = false;
                                        }};
                                    }}),
                                    add(new QuestionInput() {{
                                        choiceQuestion = new ChoiceQuestionInput() {{
                                            options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                    goToSectionId = "odio";
                                                    image = new ImageInput() {{
                                                        altText = "sit";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                            width = 271550;
                                                        }};
                                                        sourceUri = "delectus";
                                                    }};
                                                    isOther = false;
                                                    value = "quam";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                    goToSectionId = "libero";
                                                    image = new ImageInput() {{
                                                        altText = "ratione";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                            width = 761331;
                                                        }};
                                                        sourceUri = "saepe";
                                                    }};
                                                    isOther = false;
                                                    value = "maiores";
                                                }}),
                                            }};
                                            shuffle = false;
                                            type = ChoiceQuestionTypeEnum.CHOICE_TYPE_UNSPECIFIED;
                                        }};
                                        dateQuestion = new DateQuestion() {{
                                            includeTime = false;
                                            includeYear = false;
                                        }};
                                        fileUploadQuestion = new FileUploadQuestion() {{
                                            folderId = "sed";
                                            maxFileSize = "eos";
                                            maxFiles = 162251;
                                            types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                add(FileUploadQuestionTypesEnum.ANY),
                                                add(FileUploadQuestionTypesEnum.DRAWING),
                                            }};
                                        }};
                                        grading = new Grading() {{
                                            correctAnswers = new CorrectAnswers() {{
                                                answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                    add(new CorrectAnswer() {{
                                                        value = "fugiat";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "quidem";
                                                    }}),
                                                }};
                                            }};
                                            generalFeedback = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "veniam";
                                                            uri = "http://bruised-ballet.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "possimus";
                                                            youtubeUri = "quo";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "suscipit";
                                                            uri = "http://noisy-plane.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "provident";
                                                            youtubeUri = "alias";
                                                        }};
                                                    }}),
                                                }};
                                                text = "deserunt";
                                            }};
                                            pointValue = 145450;
                                            whenRight = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "quo";
                                                            uri = "http://stormy-slider.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "cupiditate";
                                                            youtubeUri = "deleniti";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "quasi";
                                                            uri = "https://ambitious-grandma.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "unde";
                                                            youtubeUri = "corrupti";
                                                        }};
                                                    }}),
                                                }};
                                                text = "quae";
                                            }};
                                            whenWrong = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "ea";
                                                            uri = "https://scary-crook.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "minus";
                                                            youtubeUri = "hic";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "similique";
                                                            uri = "https://empty-duel.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "cumque";
                                                            youtubeUri = "adipisci";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "veritatis";
                                                            uri = "https://wiry-elite.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "ducimus";
                                                            youtubeUri = "itaque";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "necessitatibus";
                                                            uri = "http://worthy-roster.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "alias";
                                                            youtubeUri = "impedit";
                                                        }};
                                                    }}),
                                                }};
                                                text = "numquam";
                                            }};
                                        }};
                                        questionId = "aspernatur";
                                        required = false;
                                        rowQuestion = new RowQuestion() {{
                                            title = "Miss";
                                        }};
                                        scaleQuestion = new ScaleQuestion() {{
                                            high = 467947;
                                            highLabel = "voluptatum";
                                            low = 968286;
                                            lowLabel = "vitae";
                                        }};
                                        textQuestion = new TextQuestion() {{
                                            paragraph = false;
                                        }};
                                        timeQuestion = new TimeQuestion() {{
                                            duration = false;
                                        }};
                                    }}),
                                }};
                            }};
                            questionItem = new QuestionItemInput() {{
                                image = new ImageInput() {{
                                    altText = "ullam";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.LEFT;
                                        width = 159496;
                                    }};
                                    sourceUri = "voluptas";
                                }};
                                question = new QuestionInput() {{
                                    choiceQuestion = new ChoiceQuestionInput() {{
                                        options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                goToSectionId = "corrupti";
                                                image = new ImageInput() {{
                                                    altText = "est";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                        width = 840831;
                                                    }};
                                                    sourceUri = "impedit";
                                                }};
                                                isOther = false;
                                                value = "ducimus";
                                            }}),
                                        }};
                                        shuffle = false;
                                        type = ChoiceQuestionTypeEnum.RADIO;
                                    }};
                                    dateQuestion = new DateQuestion() {{
                                        includeTime = false;
                                        includeYear = false;
                                    }};
                                    fileUploadQuestion = new FileUploadQuestion() {{
                                        folderId = "nisi";
                                        maxFileSize = "dolor";
                                        maxFiles = 143976;
                                        types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                            add(FileUploadQuestionTypesEnum.VIDEO),
                                            add(FileUploadQuestionTypesEnum.VIDEO),
                                        }};
                                    }};
                                    grading = new Grading() {{
                                        correctAnswers = new CorrectAnswers() {{
                                            answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                add(new CorrectAnswer() {{
                                                    value = "accusantium";
                                                }}),
                                                add(new CorrectAnswer() {{
                                                    value = "ea";
                                                }}),
                                                add(new CorrectAnswer() {{
                                                    value = "impedit";
                                                }}),
                                            }};
                                        }};
                                        generalFeedback = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "optio";
                                                        uri = "https://boiling-clamp.net";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "sit";
                                                        youtubeUri = "dolores";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "enim";
                                                        uri = "http://ornate-classification.info";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "alias";
                                                        youtubeUri = "quidem";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "deleniti";
                                                        uri = "https://happy-go-lucky-kid.com";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "aspernatur";
                                                        youtubeUri = "at";
                                                    }};
                                                }}),
                                            }};
                                            text = "illum";
                                        }};
                                        pointValue = 506202;
                                        whenRight = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "exercitationem";
                                                        uri = "https://milky-psychologist.net";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "reiciendis";
                                                        youtubeUri = "dolores";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "dolore";
                                                        uri = "https://rough-mycoplasma.info";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "natus";
                                                        youtubeUri = "nisi";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "provident";
                                                        uri = "http://easy-going-fight.biz";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "tenetur";
                                                        youtubeUri = "molestiae";
                                                    }};
                                                }}),
                                            }};
                                            text = "dolore";
                                        }};
                                        whenWrong = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "velit";
                                                        uri = "http://obvious-mover.biz";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "fugiat";
                                                        youtubeUri = "molestiae";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "quas";
                                                        uri = "https://untrue-cup.net";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "vel";
                                                        youtubeUri = "necessitatibus";
                                                    }};
                                                }}),
                                            }};
                                            text = "iste";
                                        }};
                                    }};
                                    questionId = "nesciunt";
                                    required = false;
                                    rowQuestion = new RowQuestion() {{
                                        title = "Ms.";
                                    }};
                                    scaleQuestion = new ScaleQuestion() {{
                                        high = 587337;
                                        highLabel = "voluptatibus";
                                        low = 354678;
                                        lowLabel = "dolorum";
                                    }};
                                    textQuestion = new TextQuestion() {{
                                        paragraph = false;
                                    }};
                                    timeQuestion = new TimeQuestion() {{
                                        duration = false;
                                    }};
                                }};
                            }};
                            textItem = new java.util.HashMap<String, Object>() {{
                                put("cum", "in");
                                put("delectus", "commodi");
                                put("commodi", "fugit");
                            }};
                            title = "Mrs.";
                            videoItem = new VideoItem() {{
                                caption = "ullam";
                                video = new Video() {{
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                        width = 667804;
                                    }};
                                    youtubeUri = "qui";
                                }};
                            }};
                        }}),
                        add(new ItemInput() {{
                            description = "praesentium";
                            imageItem = new ImageItemInput() {{
                                image = new ImageInput() {{
                                    altText = "adipisci";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                        width = 183504;
                                    }};
                                    sourceUri = "deserunt";
                                }};
                            }};
                            itemId = "eligendi";
                            pageBreakItem = new java.util.HashMap<String, Object>() {{
                                put("deleniti", "dolor");
                                put("est", "reiciendis");
                            }};
                            questionGroupItem = new QuestionGroupItemInput() {{
                                grid = new GridInput() {{
                                    columns = new ChoiceQuestionInput() {{
                                        options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                goToSectionId = "consectetur";
                                                image = new ImageInput() {{
                                                    altText = "inventore";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                        width = 703651;
                                                    }};
                                                    sourceUri = "facilis";
                                                }};
                                                isOther = false;
                                                value = "deserunt";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                goToSectionId = "ipsam";
                                                image = new ImageInput() {{
                                                    altText = "voluptatem";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                        width = 434955;
                                                    }};
                                                    sourceUri = "incidunt";
                                                }};
                                                isOther = false;
                                                value = "eveniet";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                goToSectionId = "ea";
                                                image = new ImageInput() {{
                                                    altText = "asperiores";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                        width = 695408;
                                                    }};
                                                    sourceUri = "asperiores";
                                                }};
                                                isOther = false;
                                                value = "eum";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                goToSectionId = "repudiandae";
                                                image = new ImageInput() {{
                                                    altText = "nemo";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                        width = 102019;
                                                    }};
                                                    sourceUri = "expedita";
                                                }};
                                                isOther = false;
                                                value = "quisquam";
                                            }}),
                                        }};
                                        shuffle = false;
                                        type = ChoiceQuestionTypeEnum.CHECKBOX;
                                    }};
                                    shuffleQuestions = false;
                                }};
                                image = new ImageInput() {{
                                    altText = "facilis";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                        width = 921916;
                                    }};
                                    sourceUri = "maiores";
                                }};
                                questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                    add(new QuestionInput() {{
                                        choiceQuestion = new ChoiceQuestionInput() {{
                                            options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                    goToSectionId = "fugit";
                                                    image = new ImageInput() {{
                                                        altText = "nam";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                            width = 203396;
                                                        }};
                                                        sourceUri = "quod";
                                                    }};
                                                    isOther = false;
                                                    value = "eos";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                    goToSectionId = "ad";
                                                    image = new ImageInput() {{
                                                        altText = "a";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                            width = 662515;
                                                        }};
                                                        sourceUri = "atque";
                                                    }};
                                                    isOther = false;
                                                    value = "quaerat";
                                                }}),
                                            }};
                                            shuffle = false;
                                            type = ChoiceQuestionTypeEnum.CHOICE_TYPE_UNSPECIFIED;
                                        }};
                                        dateQuestion = new DateQuestion() {{
                                            includeTime = false;
                                            includeYear = false;
                                        }};
                                        fileUploadQuestion = new FileUploadQuestion() {{
                                            folderId = "dignissimos";
                                            maxFileSize = "quam";
                                            maxFiles = 264073;
                                            types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                                add(FileUploadQuestionTypesEnum.DRAWING),
                                                add(FileUploadQuestionTypesEnum.PDF),
                                            }};
                                        }};
                                        grading = new Grading() {{
                                            correctAnswers = new CorrectAnswers() {{
                                                answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                    add(new CorrectAnswer() {{
                                                        value = "laborum";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "dolor";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "ad";
                                                    }}),
                                                }};
                                            }};
                                            generalFeedback = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "sit";
                                                            uri = "https://heartfelt-quiche.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "maiores";
                                                            youtubeUri = "ea";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "vel";
                                                            uri = "https://unaware-wash.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "sed";
                                                            youtubeUri = "accusantium";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "voluptates";
                                                            uri = "https://wonderful-envy.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "non";
                                                            youtubeUri = "cum";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "incidunt";
                                                            uri = "http://fruitful-intuition.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "omnis";
                                                            youtubeUri = "excepturi";
                                                        }};
                                                    }}),
                                                }};
                                                text = "eos";
                                            }};
                                            pointValue = 789036;
                                            whenRight = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "repellendus";
                                                            uri = "https://tense-plantation.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "similique";
                                                            youtubeUri = "autem";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "dicta";
                                                            uri = "https://well-groomed-pince-nez.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "inventore";
                                                            youtubeUri = "iste";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "atque";
                                                            uri = "http://grotesque-mansion.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "pariatur";
                                                            youtubeUri = "aut";
                                                        }};
                                                    }}),
                                                }};
                                                text = "similique";
                                            }};
                                            whenWrong = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "eveniet";
                                                            uri = "https://prudent-dungeon.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "voluptatibus";
                                                            youtubeUri = "quam";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "nulla";
                                                            uri = "http://used-verse.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "quaerat";
                                                            youtubeUri = "excepturi";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "aliquid";
                                                            uri = "http://ambitious-status.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "culpa";
                                                            youtubeUri = "dicta";
                                                        }};
                                                    }}),
                                                }};
                                                text = "atque";
                                            }};
                                        }};
                                        questionId = "ratione";
                                        required = false;
                                        rowQuestion = new RowQuestion() {{
                                            title = "Mr.";
                                        }};
                                        scaleQuestion = new ScaleQuestion() {{
                                            high = 789539;
                                            highLabel = "atque";
                                            low = 472190;
                                            lowLabel = "culpa";
                                        }};
                                        textQuestion = new TextQuestion() {{
                                            paragraph = false;
                                        }};
                                        timeQuestion = new TimeQuestion() {{
                                            duration = false;
                                        }};
                                    }}),
                                }};
                            }};
                            questionItem = new QuestionItemInput() {{
                                image = new ImageInput() {{
                                    altText = "temporibus";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                        width = 322849;
                                    }};
                                    sourceUri = "cupiditate";
                                }};
                                question = new QuestionInput() {{
                                    choiceQuestion = new ChoiceQuestionInput() {{
                                        options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                goToSectionId = "repellendus";
                                                image = new ImageInput() {{
                                                    altText = "delectus";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                        width = 650200;
                                                    }};
                                                    sourceUri = "possimus";
                                                }};
                                                isOther = false;
                                                value = "praesentium";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                goToSectionId = "quam";
                                                image = new ImageInput() {{
                                                    altText = "animi";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                        width = 532870;
                                                    }};
                                                    sourceUri = "voluptatem";
                                                }};
                                                isOther = false;
                                                value = "quisquam";
                                            }}),
                                        }};
                                        shuffle = false;
                                        type = ChoiceQuestionTypeEnum.CHOICE_TYPE_UNSPECIFIED;
                                    }};
                                    dateQuestion = new DateQuestion() {{
                                        includeTime = false;
                                        includeYear = false;
                                    }};
                                    fileUploadQuestion = new FileUploadQuestion() {{
                                        folderId = "cumque";
                                        maxFileSize = "architecto";
                                        maxFiles = 575404;
                                        types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                            add(FileUploadQuestionTypesEnum.DRAWING),
                                            add(FileUploadQuestionTypesEnum.PRESENTATION),
                                            add(FileUploadQuestionTypesEnum.IMAGE),
                                            add(FileUploadQuestionTypesEnum.PDF),
                                        }};
                                    }};
                                    grading = new Grading() {{
                                        correctAnswers = new CorrectAnswers() {{
                                            answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                add(new CorrectAnswer() {{
                                                    value = "unde";
                                                }}),
                                                add(new CorrectAnswer() {{
                                                    value = "quas";
                                                }}),
                                                add(new CorrectAnswer() {{
                                                    value = "laboriosam";
                                                }}),
                                            }};
                                        }};
                                        generalFeedback = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "voluptatum";
                                                        uri = "https://precious-credibility.org";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "iure";
                                                        youtubeUri = "sint";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "autem";
                                                        uri = "https://offensive-barstool.net";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "a";
                                                        youtubeUri = "dolor";
                                                    }};
                                                }}),
                                            }};
                                            text = "voluptatum";
                                        }};
                                        pointValue = 561858;
                                        whenRight = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "repudiandae";
                                                        uri = "http://enchanted-hearth.com";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "numquam";
                                                        youtubeUri = "incidunt";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "modi";
                                                        uri = "https://spotless-impress.name";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "reprehenderit";
                                                        youtubeUri = "reprehenderit";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "animi";
                                                        uri = "http://useful-wagon.biz";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "delectus";
                                                        youtubeUri = "exercitationem";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "ipsum";
                                                        uri = "http://appropriate-chemistry.name";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "debitis";
                                                        youtubeUri = "a";
                                                    }};
                                                }}),
                                            }};
                                            text = "itaque";
                                        }};
                                        whenWrong = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "repellat";
                                                        uri = "https://enormous-embellishment.com";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "veniam";
                                                        youtubeUri = "sed";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "necessitatibus";
                                                        uri = "https://lined-triumph.com";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "ullam";
                                                        youtubeUri = "non";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "delectus";
                                                        uri = "http://stained-calm.info";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "quam";
                                                        youtubeUri = "illum";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "voluptates";
                                                        uri = "https://queasy-iceberg.com";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "voluptate";
                                                        youtubeUri = "consequatur";
                                                    }};
                                                }}),
                                            }};
                                            text = "delectus";
                                        }};
                                    }};
                                    questionId = "incidunt";
                                    required = false;
                                    rowQuestion = new RowQuestion() {{
                                        title = "Mrs.";
                                    }};
                                    scaleQuestion = new ScaleQuestion() {{
                                        high = 362693;
                                        highLabel = "est";
                                        low = 776750;
                                        lowLabel = "maxime";
                                    }};
                                    textQuestion = new TextQuestion() {{
                                        paragraph = false;
                                    }};
                                    timeQuestion = new TimeQuestion() {{
                                        duration = false;
                                    }};
                                }};
                            }};
                            textItem = new java.util.HashMap<String, Object>() {{
                                put("laboriosam", "laboriosam");
                                put("quam", "fuga");
                                put("officia", "repellat");
                                put("cupiditate", "soluta");
                            }};
                            title = "Miss";
                            videoItem = new VideoItem() {{
                                caption = "culpa";
                                video = new Video() {{
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                        width = 78074;
                                    }};
                                    youtubeUri = "atque";
                                }};
                            }};
                        }}),
                        add(new ItemInput() {{
                            description = "ad";
                            imageItem = new ImageItemInput() {{
                                image = new ImageInput() {{
                                    altText = "sapiente";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                        width = 281135;
                                    }};
                                    sourceUri = "nesciunt";
                                }};
                            }};
                            itemId = "ab";
                            pageBreakItem = new java.util.HashMap<String, Object>() {{
                                put("suscipit", "quidem");
                                put("delectus", "nemo");
                                put("cumque", "voluptatum");
                                put("sequi", "atque");
                            }};
                            questionGroupItem = new QuestionGroupItemInput() {{
                                grid = new GridInput() {{
                                    columns = new ChoiceQuestionInput() {{
                                        options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                goToSectionId = "rerum";
                                                image = new ImageInput() {{
                                                    altText = "totam";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                        width = 133076;
                                                    }};
                                                    sourceUri = "eaque";
                                                }};
                                                isOther = false;
                                                value = "impedit";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                goToSectionId = "ex";
                                                image = new ImageInput() {{
                                                    altText = "odio";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                        width = 794927;
                                                    }};
                                                    sourceUri = "ut";
                                                }};
                                                isOther = false;
                                                value = "distinctio";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                goToSectionId = "eos";
                                                image = new ImageInput() {{
                                                    altText = "veniam";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                        width = 572317;
                                                    }};
                                                    sourceUri = "occaecati";
                                                }};
                                                isOther = false;
                                                value = "debitis";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                goToSectionId = "eos";
                                                image = new ImageInput() {{
                                                    altText = "amet";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                        width = 783539;
                                                    }};
                                                    sourceUri = "occaecati";
                                                }};
                                                isOther = false;
                                                value = "reiciendis";
                                            }}),
                                        }};
                                        shuffle = false;
                                        type = ChoiceQuestionTypeEnum.RADIO;
                                    }};
                                    shuffleQuestions = false;
                                }};
                                image = new ImageInput() {{
                                    altText = "tempore";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.LEFT;
                                        width = 609864;
                                    }};
                                    sourceUri = "possimus";
                                }};
                                questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                    add(new QuestionInput() {{
                                        choiceQuestion = new ChoiceQuestionInput() {{
                                            options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                    goToSectionId = "iusto";
                                                    image = new ImageInput() {{
                                                        altText = "esse";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                            width = 321654;
                                                        }};
                                                        sourceUri = "quod";
                                                    }};
                                                    isOther = false;
                                                    value = "ratione";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                    goToSectionId = "vero";
                                                    image = new ImageInput() {{
                                                        altText = "dolore";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                            width = 638085;
                                                        }};
                                                        sourceUri = "maiores";
                                                    }};
                                                    isOther = false;
                                                    value = "cupiditate";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                    goToSectionId = "saepe";
                                                    image = new ImageInput() {{
                                                        altText = "enim";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                            width = 406462;
                                                        }};
                                                        sourceUri = "eveniet";
                                                    }};
                                                    isOther = false;
                                                    value = "delectus";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                    goToSectionId = "provident";
                                                    image = new ImageInput() {{
                                                        altText = "aut";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                            width = 344702;
                                                        }};
                                                        sourceUri = "tempora";
                                                    }};
                                                    isOther = false;
                                                    value = "nam";
                                                }}),
                                            }};
                                            shuffle = false;
                                            type = ChoiceQuestionTypeEnum.RADIO;
                                        }};
                                        dateQuestion = new DateQuestion() {{
                                            includeTime = false;
                                            includeYear = false;
                                        }};
                                        fileUploadQuestion = new FileUploadQuestion() {{
                                            folderId = "odio";
                                            maxFileSize = "nostrum";
                                            maxFiles = 980160;
                                            types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                            }};
                                        }};
                                        grading = new Grading() {{
                                            correctAnswers = new CorrectAnswers() {{
                                                answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                    add(new CorrectAnswer() {{
                                                        value = "minima";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "ex";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "possimus";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "nesciunt";
                                                    }}),
                                                }};
                                            }};
                                            generalFeedback = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "nostrum";
                                                            uri = "https://dimpled-signup.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "laborum";
                                                            youtubeUri = "eligendi";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "autem";
                                                            uri = "http://clumsy-prompt.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "provident";
                                                            youtubeUri = "necessitatibus";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "fugit";
                                                            uri = "http://slippery-tobacco.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "blanditiis";
                                                            youtubeUri = "a";
                                                        }};
                                                    }}),
                                                }};
                                                text = "natus";
                                            }};
                                            pointValue = 959000;
                                            whenRight = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "facilis";
                                                            uri = "https://flickering-boar.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "maiores";
                                                            youtubeUri = "nisi";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "velit";
                                                            uri = "https://rude-undershirt.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "vitae";
                                                            youtubeUri = "iusto";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "atque";
                                                            uri = "http://lame-rat.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "vitae";
                                                            youtubeUri = "mollitia";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "asperiores";
                                                            uri = "https://terrific-initiative.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "rem";
                                                            youtubeUri = "vel";
                                                        }};
                                                    }}),
                                                }};
                                                text = "eos";
                                            }};
                                            whenWrong = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "sunt";
                                                            uri = "https://pastel-swivel.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "incidunt";
                                                            youtubeUri = "labore";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "blanditiis";
                                                            uri = "http://enchanting-vineyard.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "accusantium";
                                                            youtubeUri = "ratione";
                                                        }};
                                                    }}),
                                                }};
                                                text = "consectetur";
                                            }};
                                        }};
                                        questionId = "asperiores";
                                        required = false;
                                        rowQuestion = new RowQuestion() {{
                                            title = "Mr.";
                                        }};
                                        scaleQuestion = new ScaleQuestion() {{
                                            high = 571498;
                                            highLabel = "possimus";
                                            low = 732815;
                                            lowLabel = "asperiores";
                                        }};
                                        textQuestion = new TextQuestion() {{
                                            paragraph = false;
                                        }};
                                        timeQuestion = new TimeQuestion() {{
                                            duration = false;
                                        }};
                                    }}),
                                    add(new QuestionInput() {{
                                        choiceQuestion = new ChoiceQuestionInput() {{
                                            options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                    goToSectionId = "nemo";
                                                    image = new ImageInput() {{
                                                        altText = "nobis";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                            width = 287379;
                                                        }};
                                                        sourceUri = "veritatis";
                                                    }};
                                                    isOther = false;
                                                    value = "minima";
                                                }}),
                                            }};
                                            shuffle = false;
                                            type = ChoiceQuestionTypeEnum.CHOICE_TYPE_UNSPECIFIED;
                                        }};
                                        dateQuestion = new DateQuestion() {{
                                            includeTime = false;
                                            includeYear = false;
                                        }};
                                        fileUploadQuestion = new FileUploadQuestion() {{
                                            folderId = "itaque";
                                            maxFileSize = "error";
                                            maxFiles = 712523;
                                            types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                add(FileUploadQuestionTypesEnum.VIDEO),
                                                add(FileUploadQuestionTypesEnum.VIDEO),
                                                add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                            }};
                                        }};
                                        grading = new Grading() {{
                                            correctAnswers = new CorrectAnswers() {{
                                                answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                    add(new CorrectAnswer() {{
                                                        value = "minima";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "odit";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "odit";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "eius";
                                                    }}),
                                                }};
                                            }};
                                            generalFeedback = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "vel";
                                                            uri = "https://able-trooper.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "sunt";
                                                            youtubeUri = "amet";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "cum";
                                                            uri = "http://motherly-derby.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "vero";
                                                            youtubeUri = "eligendi";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "minima";
                                                            uri = "https://vast-bran.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "autem";
                                                            youtubeUri = "in";
                                                        }};
                                                    }}),
                                                }};
                                                text = "repellat";
                                            }};
                                            pointValue = 227129;
                                            whenRight = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "dolore";
                                                            uri = "https://somber-training.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "libero";
                                                            youtubeUri = "suscipit";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "illum";
                                                            uri = "http://ideal-mood.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "repellat";
                                                            youtubeUri = "sapiente";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "consectetur";
                                                            uri = "https://gripping-interview.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "dignissimos";
                                                            youtubeUri = "corporis";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "perferendis";
                                                            uri = "http://elliptical-force.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "officiis";
                                                            youtubeUri = "dolore";
                                                        }};
                                                    }}),
                                                }};
                                                text = "magnam";
                                            }};
                                            whenWrong = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "ipsam";
                                                            uri = "http://wasteful-leeway.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "consequatur";
                                                            youtubeUri = "totam";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "tempora";
                                                            uri = "https://elaborate-calico.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "quam";
                                                            youtubeUri = "officiis";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "dicta";
                                                            uri = "https://empty-peak.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "incidunt";
                                                            youtubeUri = "corporis";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "quaerat";
                                                            uri = "http://long-term-valuable.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "modi";
                                                            youtubeUri = "corrupti";
                                                        }};
                                                    }}),
                                                }};
                                                text = "nihil";
                                            }};
                                        }};
                                        questionId = "eius";
                                        required = false;
                                        rowQuestion = new RowQuestion() {{
                                            title = "Dr.";
                                        }};
                                        scaleQuestion = new ScaleQuestion() {{
                                            high = 145973;
                                            highLabel = "facere";
                                            low = 368372;
                                            lowLabel = "nobis";
                                        }};
                                        textQuestion = new TextQuestion() {{
                                            paragraph = false;
                                        }};
                                        timeQuestion = new TimeQuestion() {{
                                            duration = false;
                                        }};
                                    }}),
                                    add(new QuestionInput() {{
                                        choiceQuestion = new ChoiceQuestionInput() {{
                                            options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                    goToSectionId = "perspiciatis";
                                                    image = new ImageInput() {{
                                                        altText = "ducimus";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                            width = 186211;
                                                        }};
                                                        sourceUri = "consectetur";
                                                    }};
                                                    isOther = false;
                                                    value = "ratione";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                    goToSectionId = "iure";
                                                    image = new ImageInput() {{
                                                        altText = "aliquid";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                            width = 853701;
                                                        }};
                                                        sourceUri = "rem";
                                                    }};
                                                    isOther = false;
                                                    value = "voluptatibus";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                    goToSectionId = "corporis";
                                                    image = new ImageInput() {{
                                                        altText = "repellendus";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                            width = 31605;
                                                        }};
                                                        sourceUri = "libero";
                                                    }};
                                                    isOther = false;
                                                    value = "excepturi";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                    goToSectionId = "omnis";
                                                    image = new ImageInput() {{
                                                        altText = "officiis";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                            width = 169229;
                                                        }};
                                                        sourceUri = "sit";
                                                    }};
                                                    isOther = false;
                                                    value = "velit";
                                                }}),
                                            }};
                                            shuffle = false;
                                            type = ChoiceQuestionTypeEnum.CHECKBOX;
                                        }};
                                        dateQuestion = new DateQuestion() {{
                                            includeTime = false;
                                            includeYear = false;
                                        }};
                                        fileUploadQuestion = new FileUploadQuestion() {{
                                            folderId = "nihil";
                                            maxFileSize = "neque";
                                            maxFiles = 135775;
                                            types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                add(FileUploadQuestionTypesEnum.PRESENTATION),
                                            }};
                                        }};
                                        grading = new Grading() {{
                                            correctAnswers = new CorrectAnswers() {{
                                                answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                    add(new CorrectAnswer() {{
                                                        value = "aut";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "impedit";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "quod";
                                                    }}),
                                                }};
                                            }};
                                            generalFeedback = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "architecto";
                                                            uri = "http://ornate-gymnastics.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "aperiam";
                                                            youtubeUri = "voluptatem";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "non";
                                                            uri = "http://difficult-pronunciation.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "debitis";
                                                            youtubeUri = "quis";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "eaque";
                                                            uri = "http://filthy-void.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "ullam";
                                                            youtubeUri = "maiores";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "debitis";
                                                            uri = "http://delayed-sombrero.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "ut";
                                                            youtubeUri = "quae";
                                                        }};
                                                    }}),
                                                }};
                                                text = "nihil";
                                            }};
                                            pointValue = 462761;
                                            whenRight = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "consequatur";
                                                            uri = "https://striking-dancing.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "non";
                                                            youtubeUri = "accusantium";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "corrupti";
                                                            uri = "https://vivid-scenery.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "corporis";
                                                            youtubeUri = "impedit";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "eveniet";
                                                            uri = "https://flustered-step.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "officiis";
                                                            youtubeUri = "quasi";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "accusamus";
                                                            uri = "https://unselfish-angstrom.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "odio";
                                                            youtubeUri = "veniam";
                                                        }};
                                                    }}),
                                                }};
                                                text = "fuga";
                                            }};
                                            whenWrong = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "possimus";
                                                            uri = "https://crazy-pentagon.net";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "id";
                                                            youtubeUri = "distinctio";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "corporis";
                                                            uri = "https://shocked-mustache.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "et";
                                                            youtubeUri = "quisquam";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "unde";
                                                            uri = "http://helpful-sleuth.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "nam";
                                                            youtubeUri = "quaerat";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "corrupti";
                                                            uri = "https://fabulous-hexagon.com";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "vero";
                                                            youtubeUri = "odio";
                                                        }};
                                                    }}),
                                                }};
                                                text = "numquam";
                                            }};
                                        }};
                                        questionId = "fugit";
                                        required = false;
                                        rowQuestion = new RowQuestion() {{
                                            title = "Mr.";
                                        }};
                                        scaleQuestion = new ScaleQuestion() {{
                                            high = 761773;
                                            highLabel = "nobis";
                                            low = 924559;
                                            lowLabel = "commodi";
                                        }};
                                        textQuestion = new TextQuestion() {{
                                            paragraph = false;
                                        }};
                                        timeQuestion = new TimeQuestion() {{
                                            duration = false;
                                        }};
                                    }}),
                                    add(new QuestionInput() {{
                                        choiceQuestion = new ChoiceQuestionInput() {{
                                            options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                    goToSectionId = "veniam";
                                                    image = new ImageInput() {{
                                                        altText = "sit";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                            width = 952110;
                                                        }};
                                                        sourceUri = "consequatur";
                                                    }};
                                                    isOther = false;
                                                    value = "vero";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                    goToSectionId = "error";
                                                    image = new ImageInput() {{
                                                        altText = "ratione";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                            width = 716555;
                                                        }};
                                                        sourceUri = "voluptas";
                                                    }};
                                                    isOther = false;
                                                    value = "sint";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                    goToSectionId = "nihil";
                                                    image = new ImageInput() {{
                                                        altText = "fuga";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                            width = 160988;
                                                        }};
                                                        sourceUri = "maiores";
                                                    }};
                                                    isOther = false;
                                                    value = "esse";
                                                }}),
                                                add(new OptionInput() {{
                                                    goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                    goToSectionId = "delectus";
                                                    image = new ImageInput() {{
                                                        altText = "quos";
                                                        properties = new MediaProperties() {{
                                                            alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                            width = 313223;
                                                        }};
                                                        sourceUri = "sit";
                                                    }};
                                                    isOther = false;
                                                    value = "voluptatem";
                                                }}),
                                            }};
                                            shuffle = false;
                                            type = ChoiceQuestionTypeEnum.CHECKBOX;
                                        }};
                                        dateQuestion = new DateQuestion() {{
                                            includeTime = false;
                                            includeYear = false;
                                        }};
                                        fileUploadQuestion = new FileUploadQuestion() {{
                                            folderId = "voluptatem";
                                            maxFileSize = "tempora";
                                            maxFiles = 577622;
                                            types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                            }};
                                        }};
                                        grading = new Grading() {{
                                            correctAnswers = new CorrectAnswers() {{
                                                answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                    add(new CorrectAnswer() {{
                                                        value = "doloremque";
                                                    }}),
                                                    add(new CorrectAnswer() {{
                                                        value = "quas";
                                                    }}),
                                                }};
                                            }};
                                            generalFeedback = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "perferendis";
                                                            uri = "http://nautical-latex.name";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "voluptates";
                                                            youtubeUri = "minus";
                                                        }};
                                                    }}),
                                                }};
                                                text = "autem";
                                            }};
                                            pointValue = 423550;
                                            whenRight = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "quos";
                                                            uri = "http://shameless-utensil.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "perspiciatis";
                                                            youtubeUri = "suscipit";
                                                        }};
                                                    }}),
                                                }};
                                                text = "ullam";
                                            }};
                                            whenWrong = new Feedback() {{
                                                material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "debitis";
                                                            uri = "https://forked-arrogance.org";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "quod";
                                                            youtubeUri = "sunt";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "voluptas";
                                                            uri = "https://questionable-twins.info";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "nostrum";
                                                            youtubeUri = "rerum";
                                                        }};
                                                    }}),
                                                    add(new ExtraMaterial() {{
                                                        link = new TextLink() {{
                                                            displayText = "perferendis";
                                                            uri = "https://grimy-compulsion.biz";
                                                        }};
                                                        video = new VideoLink() {{
                                                            displayText = "id";
                                                            youtubeUri = "modi";
                                                        }};
                                                    }}),
                                                }};
                                                text = "illum";
                                            }};
                                        }};
                                        questionId = "error";
                                        required = false;
                                        rowQuestion = new RowQuestion() {{
                                            title = "Mrs.";
                                        }};
                                        scaleQuestion = new ScaleQuestion() {{
                                            high = 443098;
                                            highLabel = "eligendi";
                                            low = 736313;
                                            lowLabel = "culpa";
                                        }};
                                        textQuestion = new TextQuestion() {{
                                            paragraph = false;
                                        }};
                                        timeQuestion = new TimeQuestion() {{
                                            duration = false;
                                        }};
                                    }}),
                                }};
                            }};
                            questionItem = new QuestionItemInput() {{
                                image = new ImageInput() {{
                                    altText = "culpa";
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                        width = 300557;
                                    }};
                                    sourceUri = "eius";
                                }};
                                question = new QuestionInput() {{
                                    choiceQuestion = new ChoiceQuestionInput() {{
                                        options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                goToSectionId = "quod";
                                                image = new ImageInput() {{
                                                    altText = "quaerat";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                        width = 257959;
                                                    }};
                                                    sourceUri = "explicabo";
                                                }};
                                                isOther = false;
                                                value = "eligendi";
                                            }}),
                                            add(new OptionInput() {{
                                                goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                goToSectionId = "tempore";
                                                image = new ImageInput() {{
                                                    altText = "odit";
                                                    properties = new MediaProperties() {{
                                                        alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                        width = 868709;
                                                    }};
                                                    sourceUri = "ipsum";
                                                }};
                                                isOther = false;
                                                value = "explicabo";
                                            }}),
                                        }};
                                        shuffle = false;
                                        type = ChoiceQuestionTypeEnum.DROP_DOWN;
                                    }};
                                    dateQuestion = new DateQuestion() {{
                                        includeTime = false;
                                        includeYear = false;
                                    }};
                                    fileUploadQuestion = new FileUploadQuestion() {{
                                        folderId = "est";
                                        maxFileSize = "sapiente";
                                        maxFiles = 896811;
                                        types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                            add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                            add(FileUploadQuestionTypesEnum.PDF),
                                            add(FileUploadQuestionTypesEnum.DRAWING),
                                        }};
                                    }};
                                    grading = new Grading() {{
                                        correctAnswers = new CorrectAnswers() {{
                                            answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                add(new CorrectAnswer() {{
                                                    value = "sapiente";
                                                }}),
                                                add(new CorrectAnswer() {{
                                                    value = "ut";
                                                }}),
                                                add(new CorrectAnswer() {{
                                                    value = "incidunt";
                                                }}),
                                            }};
                                        }};
                                        generalFeedback = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "ut";
                                                        uri = "http://knotty-comprehension.org";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "saepe";
                                                        youtubeUri = "quod";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "nulla";
                                                        uri = "http://junior-curl.info";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "nesciunt";
                                                        youtubeUri = "earum";
                                                    }};
                                                }}),
                                            }};
                                            text = "eum";
                                        }};
                                        pointValue = 222373;
                                        whenRight = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "quos";
                                                        uri = "http://avaricious-originality.biz";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "nihil";
                                                        youtubeUri = "unde";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "deserunt";
                                                        uri = "https://idle-mouton.net";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "at";
                                                        youtubeUri = "ad";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "asperiores";
                                                        uri = "https://slippery-virus.info";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "occaecati";
                                                        youtubeUri = "repellendus";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "culpa";
                                                        uri = "http://mediocre-potty.info";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "totam";
                                                        youtubeUri = "magni";
                                                    }};
                                                }}),
                                            }};
                                            text = "eos";
                                        }};
                                        whenWrong = new Feedback() {{
                                            material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "voluptatibus";
                                                        uri = "https://glossy-melon.name";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "aliquam";
                                                        youtubeUri = "vero";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "nisi";
                                                        uri = "https://infantile-bunghole.name";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "possimus";
                                                        youtubeUri = "libero";
                                                    }};
                                                }}),
                                                add(new ExtraMaterial() {{
                                                    link = new TextLink() {{
                                                        displayText = "ullam";
                                                        uri = "http://worried-orchestra.org";
                                                    }};
                                                    video = new VideoLink() {{
                                                        displayText = "ipsam";
                                                        youtubeUri = "fugiat";
                                                    }};
                                                }}),
                                            }};
                                            text = "odio";
                                        }};
                                    }};
                                    questionId = "ullam";
                                    required = false;
                                    rowQuestion = new RowQuestion() {{
                                        title = "Mr.";
                                    }};
                                    scaleQuestion = new ScaleQuestion() {{
                                        high = 757130;
                                        highLabel = "occaecati";
                                        low = 986330;
                                        lowLabel = "necessitatibus";
                                    }};
                                    textQuestion = new TextQuestion() {{
                                        paragraph = false;
                                    }};
                                    timeQuestion = new TimeQuestion() {{
                                        duration = false;
                                    }};
                                }};
                            }};
                            textItem = new java.util.HashMap<String, Object>() {{
                                put("a", "nihil");
                                put("veniam", "aut");
                                put("magni", "rerum");
                            }};
                            title = "Dr.";
                            videoItem = new VideoItem() {{
                                caption = "nulla";
                                video = new Video() {{
                                    properties = new MediaProperties() {{
                                        alignment = MediaPropertiesAlignmentEnum.CENTER;
                                        width = 247457;
                                    }};
                                    youtubeUri = "dolore";
                                }};
                            }};
                        }}),
                    }};
                    settings = new FormSettings() {{
                        quizSettings = new QuizSettings() {{
                            isQuiz = false;
                        }};;
                    }};;
                }};;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "modi";
                key = "illo";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "et";
                uploadType = "molestiae";
                uploadProtocol = "autem";
            }};            

            FormsFormsCreateResponse res = sdk.forms.formsFormsCreate(req, new FormsFormsCreateSecurity() {{
                option1 = new FormsFormsCreateSecurityOption1("dolore", "eius") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.form != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## formsFormsGet

Get a form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsGetRequest;
import org.openapis.openapi.models.operations.FormsFormsGetResponse;
import org.openapis.openapi.models.operations.FormsFormsGetSecurity;
import org.openapis.openapi.models.operations.FormsFormsGetSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsGetSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsGetSecurityOption3;
import org.openapis.openapi.models.operations.FormsFormsGetSecurityOption4;
import org.openapis.openapi.models.operations.FormsFormsGetSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsGetRequest req = new FormsFormsGetRequest("nostrum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "molestias";
                fields = "voluptatibus";
                key = "ipsum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "odit";
                uploadProtocol = "molestiae";
            }};            

            FormsFormsGetResponse res = sdk.forms.formsFormsGet(req, new FormsFormsGetSecurity() {{
                option1 = new FormsFormsGetSecurityOption1("accusamus", "quia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.form != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## formsFormsResponsesGet

Get one response from the form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsResponsesGetRequest;
import org.openapis.openapi.models.operations.FormsFormsResponsesGetResponse;
import org.openapis.openapi.models.operations.FormsFormsResponsesGetSecurity;
import org.openapis.openapi.models.operations.FormsFormsResponsesGetSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsResponsesGetSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsResponsesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsResponsesGetRequest req = new FormsFormsResponsesGetRequest("inventore", "doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "nemo";
                key = "reprehenderit";
                oauthToken = "soluta";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "vel";
                uploadProtocol = "delectus";
            }};            

            FormsFormsResponsesGetResponse res = sdk.forms.formsFormsResponsesGet(req, new FormsFormsResponsesGetSecurity() {{
                option1 = new FormsFormsResponsesGetSecurityOption1("maxime", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.formResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## formsFormsResponsesList

List a form's responses.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsResponsesListRequest;
import org.openapis.openapi.models.operations.FormsFormsResponsesListResponse;
import org.openapis.openapi.models.operations.FormsFormsResponsesListSecurity;
import org.openapis.openapi.models.operations.FormsFormsResponsesListSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsResponsesListSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsResponsesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsResponsesListRequest req = new FormsFormsResponsesListRequest("distinctio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "deleniti";
                fields = "iusto";
                filter = "quod";
                key = "saepe";
                oauthToken = "ad";
                pageSize = 167613L;
                pageToken = "nostrum";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "aliquid";
                uploadProtocol = "quam";
            }};            

            FormsFormsResponsesListResponse res = sdk.forms.formsFormsResponsesList(req, new FormsFormsResponsesListSecurity() {{
                option1 = new FormsFormsResponsesListSecurityOption1("ea", "numquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listFormResponsesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## formsFormsWatchesCreate

Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateRequest;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateResponse;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateSecurity;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateSecurityOption3;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateSecurityOption4;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateSecurityOption5;
import org.openapis.openapi.models.operations.FormsFormsWatchesCreateSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CloudPubsubTopic;
import org.openapis.openapi.models.shared.CreateWatchRequestInput;
import org.openapis.openapi.models.shared.WatchEventTypeEnum;
import org.openapis.openapi.models.shared.WatchInput;
import org.openapis.openapi.models.shared.WatchTarget;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsWatchesCreateRequest req = new FormsFormsWatchesCreateRequest("architecto") {{
                dollarXgafv = XgafvEnum.TWO;
                createWatchRequestInput = new CreateWatchRequestInput() {{
                    watch = new WatchInput() {{
                        eventType = WatchEventTypeEnum.SCHEMA;
                        target = new WatchTarget() {{
                            topic = new CloudPubsubTopic() {{
                                topicName = "velit";
                            }};;
                        }};;
                    }};;
                    watchId = "quasi";
                }};;
                accessToken = "sed";
                alt = AltEnum.PROTO;
                callback = "veniam";
                fields = "quae";
                key = "dolore";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "ut";
                uploadProtocol = "cumque";
            }};            

            FormsFormsWatchesCreateResponse res = sdk.forms.formsFormsWatchesCreate(req, new FormsFormsWatchesCreateSecurity() {{
                option1 = new FormsFormsWatchesCreateSecurityOption1("quia", "beatae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.watch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## formsFormsWatchesDelete

Delete a watch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteRequest;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteResponse;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteSecurity;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteSecurityOption3;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteSecurityOption4;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteSecurityOption5;
import org.openapis.openapi.models.operations.FormsFormsWatchesDeleteSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsWatchesDeleteRequest req = new FormsFormsWatchesDeleteRequest("porro", "cumque") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "numquam";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "culpa";
                key = "facilis";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "impedit";
                uploadProtocol = "omnis";
            }};            

            FormsFormsWatchesDeleteResponse res = sdk.forms.formsFormsWatchesDelete(req, new FormsFormsWatchesDeleteSecurity() {{
                option1 = new FormsFormsWatchesDeleteSecurityOption1("et", "earum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## formsFormsWatchesList

Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsWatchesListRequest;
import org.openapis.openapi.models.operations.FormsFormsWatchesListResponse;
import org.openapis.openapi.models.operations.FormsFormsWatchesListSecurity;
import org.openapis.openapi.models.operations.FormsFormsWatchesListSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsWatchesListSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsWatchesListSecurityOption3;
import org.openapis.openapi.models.operations.FormsFormsWatchesListSecurityOption4;
import org.openapis.openapi.models.operations.FormsFormsWatchesListSecurityOption5;
import org.openapis.openapi.models.operations.FormsFormsWatchesListSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsWatchesListRequest req = new FormsFormsWatchesListRequest("fuga") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "totam";
                key = "praesentium";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "vitae";
                uploadProtocol = "delectus";
            }};            

            FormsFormsWatchesListResponse res = sdk.forms.formsFormsWatchesList(req, new FormsFormsWatchesListSecurity() {{
                option1 = new FormsFormsWatchesListSecurityOption1("laboriosam", "minus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listWatchesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## formsFormsWatchesRenew

Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewRequest;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewResponse;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewSecurity;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewSecurityOption3;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewSecurityOption4;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewSecurityOption5;
import org.openapis.openapi.models.operations.FormsFormsWatchesRenewSecurityOption6;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsWatchesRenewRequest req = new FormsFormsWatchesRenewRequest("labore", "quas") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sed", "quibusdam");
                    put("reprehenderit", "voluptate");
                }};
                accessToken = "reprehenderit";
                alt = AltEnum.JSON;
                callback = "eveniet";
                fields = "voluptate";
                key = "hic";
                oauthToken = "at";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "in";
                uploadProtocol = "eius";
            }};            

            FormsFormsWatchesRenewResponse res = sdk.forms.formsFormsWatchesRenew(req, new FormsFormsWatchesRenewSecurity() {{
                option1 = new FormsFormsWatchesRenewSecurityOption1("aut", "consequatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.watch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
