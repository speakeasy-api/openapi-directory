<!-- Start SDK Example Usage -->
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

            FormsFormsBatchUpdateRequest req = new FormsFormsBatchUpdateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                batchUpdateFormRequestInput = new BatchUpdateFormRequestInput() {{
                    includeFormInResponse = false;
                    requests = new org.openapis.openapi.models.shared.RequestInput[]{{
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "quibusdam";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "unde";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 544883;
                                            }};
                                            sourceUri = "illum";
                                        }};
                                    }};
                                    itemId = "vel";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("deserunt", "suscipit");
                                        put("iure", "magnam");
                                        put("debitis", "ipsa");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                        goToSectionId = "suscipit";
                                                        image = new ImageInput() {{
                                                            altText = "molestiae";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 812169;
                                                            }};
                                                            sourceUri = "voluptatum";
                                                        }};
                                                        isOther = false;
                                                        value = "iusto";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "nisi";
                                                        image = new ImageInput() {{
                                                            altText = "recusandae";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 71036;
                                                            }};
                                                            sourceUri = "quis";
                                                        }};
                                                        isOther = false;
                                                        value = "veritatis";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "perferendis";
                                                        image = new ImageInput() {{
                                                            altText = "ipsam";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 957156;
                                                            }};
                                                            sourceUri = "quo";
                                                        }};
                                                        isOther = false;
                                                        value = "odit";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "at";
                                                        image = new ImageInput() {{
                                                            altText = "maiores";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                width = 799159;
                                                            }};
                                                            sourceUri = "quod";
                                                        }};
                                                        isOther = false;
                                                        value = "esse";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHECKBOX;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "porro";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 118274;
                                            }};
                                            sourceUri = "nam";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                            goToSectionId = "deleniti";
                                                            image = new ImageInput() {{
                                                                altText = "hic";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 521848;
                                                                }};
                                                                sourceUri = "beatae";
                                                            }};
                                                            isOther = false;
                                                            value = "commodi";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "modi";
                                                            image = new ImageInput() {{
                                                                altText = "qui";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 736918;
                                                                }};
                                                                sourceUri = "esse";
                                                            }};
                                                            isOther = false;
                                                            value = "ipsum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "aspernatur";
                                                            image = new ImageInput() {{
                                                                altText = "perferendis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 617636;
                                                                }};
                                                                sourceUri = "sed";
                                                            }};
                                                            isOther = false;
                                                            value = "iste";
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
                                                    folderId = "natus";
                                                    maxFileSize = "laboriosam";
                                                    maxFiles = 943749;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.PDF),
                                                        add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                                        add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                        add(FileUploadQuestionTypesEnum.PDF),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "saepe";
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
                                                                    displayText = "ipsa";
                                                                    uri = "https://qualified-pew.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolores";
                                                                    youtubeUri = "dolorem";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "corporis";
                                                    }};
                                                    pointValue = 128926;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "enim";
                                                                    uri = "https://gummy-expedition.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "accusantium";
                                                                    youtubeUri = "iure";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "culpa";
                                                                    uri = "https://well-off-brace.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolorem";
                                                                    youtubeUri = "culpa";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequuntur";
                                                                    uri = "https://prize-mud.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "commodi";
                                                                    youtubeUri = "quam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "molestiae";
                                                                    uri = "http://physical-chord.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "vitae";
                                                                    youtubeUri = "laborum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "animi";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "odit";
                                                                    uri = "https://dimwitted-vaulting.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "id";
                                                                    youtubeUri = "possimus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aut";
                                                                    uri = "http://phony-split.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quasi";
                                                                    youtubeUri = "reiciendis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "voluptatibus";
                                                    }};
                                                }};
                                                questionId = "vero";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Ms.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 509624;
                                                    highLabel = "voluptatibus";
                                                    low = 55714;
                                                    lowLabel = "omnis";
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
                                                            goToSectionId = "perferendis";
                                                            image = new ImageInput() {{
                                                                altText = "doloremque";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 282807;
                                                                }};
                                                                sourceUri = "maiores";
                                                            }};
                                                            isOther = false;
                                                            value = "dicta";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "dolore";
                                                            image = new ImageInput() {{
                                                                altText = "iusto";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 688661;
                                                                }};
                                                                sourceUri = "enim";
                                                            }};
                                                            isOther = false;
                                                            value = "accusamus";
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
                                                    folderId = "repudiandae";
                                                    maxFileSize = "quae";
                                                    maxFiles = 216822;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.DRAWING),
                                                        add(FileUploadQuestionTypesEnum.DRAWING),
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "praesentium";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "rem";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quasi";
                                                                    uri = "https://novel-binoculars.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "incidunt";
                                                                    youtubeUri = "enim";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequatur";
                                                                    uri = "https://tender-carload.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "distinctio";
                                                                    youtubeUri = "quibusdam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "labore";
                                                                    uri = "http://delightful-graph.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quos";
                                                                    youtubeUri = "perferendis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "magni";
                                                                    uri = "https://hard-accordion.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolorum";
                                                                    youtubeUri = "excepturi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "tempora";
                                                    }};
                                                    pointValue = 703737;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "labore";
                                                                    uri = "https://infantile-demur.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sint";
                                                                    youtubeUri = "aliquid";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "provident";
                                                                    uri = "https://nonstop-pate.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "debitis";
                                                                    youtubeUri = "a";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolorum";
                                                                    uri = "http://irritating-standardisation.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rerum";
                                                                    youtubeUri = "dicta";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "magnam";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "facere";
                                                                    uri = "http://humming-police.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "non";
                                                                    youtubeUri = "occaecati";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "enim";
                                                                    uri = "https://white-printing.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nam";
                                                                    youtubeUri = "id";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "blanditiis";
                                                                    uri = "https://well-groomed-cupboard.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nisi";
                                                                    youtubeUri = "vel";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "natus";
                                                                    uri = "https://lame-alcohol.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "magnam";
                                                                    youtubeUri = "distinctio";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "id";
                                                    }};
                                                }};
                                                questionId = "labore";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 383462;
                                                    highLabel = "natus";
                                                    low = 749170;
                                                    lowLabel = "eum";
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
                                                            goToSectionId = "architecto";
                                                            image = new ImageInput() {{
                                                                altText = "magnam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 569965;
                                                                }};
                                                                sourceUri = "ullam";
                                                            }};
                                                            isOther = false;
                                                            value = "provident";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "sint";
                                                            image = new ImageInput() {{
                                                                altText = "accusantium";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 968962;
                                                                }};
                                                                sourceUri = "mollitia";
                                                            }};
                                                            isOther = false;
                                                            value = "ad";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "dolor";
                                                            image = new ImageInput() {{
                                                                altText = "necessitatibus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 367562;
                                                                }};
                                                                sourceUri = "quasi";
                                                            }};
                                                            isOther = false;
                                                            value = "iure";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "debitis";
                                                            image = new ImageInput() {{
                                                                altText = "eius";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 537023;
                                                                }};
                                                                sourceUri = "facilis";
                                                            }};
                                                            isOther = false;
                                                            value = "in";
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
                                                    folderId = "architecto";
                                                    maxFileSize = "repudiandae";
                                                    maxFiles = 352312;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                                        add(FileUploadQuestionTypesEnum.AUDIO),
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "saepe";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "accusantium";
                                                                    uri = "http://luminous-oregano.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sunt";
                                                                    youtubeUri = "quo";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "illum";
                                                                    uri = "https://steel-handicap.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "odit";
                                                                    youtubeUri = "ea";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "accusantium";
                                                                    uri = "http://worn-programme.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptate";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nam";
                                                                    uri = "http://tragic-framework.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "perferendis";
                                                                    youtubeUri = "fugiat";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "amet";
                                                    }};
                                                    pointValue = 11714;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "corporis";
                                                                    uri = "https://secret-rhinoceros.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quis";
                                                                    youtubeUri = "totam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dignissimos";
                                                                    uri = "http://glossy-consulate.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "perferendis";
                                                                    youtubeUri = "dolores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "minus";
                                                                    uri = "http://educated-surprise.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "hic";
                                                                    youtubeUri = "recusandae";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "omnis";
                                                                    uri = "https://ornery-antechamber.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "consequuntur";
                                                                    youtubeUri = "blanditiis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "error";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "occaecati";
                                                                    uri = "https://enraged-wrench.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "modi";
                                                                    youtubeUri = "iste";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "dolorum";
                                                    }};
                                                }};
                                                questionId = "deleniti";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 589910;
                                                    highLabel = "nobis";
                                                    low = 730122;
                                                    lowLabel = "delectus";
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
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 398221;
                                            }};
                                            sourceUri = "dolorem";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "qui";
                                                        image = new ImageInput() {{
                                                            altText = "ipsum";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 569574;
                                                            }};
                                                            sourceUri = "cum";
                                                        }};
                                                        isOther = false;
                                                        value = "voluptate";
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
                                                folderId = "reiciendis";
                                                maxFileSize = "amet";
                                                maxFiles = 680545;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                                    add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "iure";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quaerat";
                                                                uri = "https://revolving-weekender.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "natus";
                                                                youtubeUri = "eos";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "atque";
                                                                uri = "http://thoughtful-barracks.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dolorum";
                                                                youtubeUri = "iusto";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "voluptate";
                                                }};
                                                pointValue = 677082;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "omnis";
                                                                uri = "https://safe-world.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ipsum";
                                                                youtubeUri = "voluptate";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "id";
                                                                uri = "https://fake-cat.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "amet";
                                                                youtubeUri = "optio";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "accusamus";
                                                                uri = "http://untimely-gherkin.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "provident";
                                                                youtubeUri = "minima";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "repellendus";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "similique";
                                                                uri = "http://true-epee.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "vel";
                                                                youtubeUri = "quod";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "officiis";
                                                                uri = "http://raw-venue.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "harum";
                                                                youtubeUri = "iusto";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ipsum";
                                                                uri = "https://wavy-cuisine.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "accusamus";
                                                                youtubeUri = "numquam";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "enim";
                                                }};
                                            }};
                                            questionId = "dolorem";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Dr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 518201;
                                                highLabel = "nihil";
                                                low = 25662;
                                                lowLabel = "expedita";
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
                                        put("sed", "vel");
                                    }};
                                    title = "Miss";
                                    videoItem = new VideoItem() {{
                                        caption = "voluptas";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 463575;
                                            }};
                                            youtubeUri = "ipsum";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 277628;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 186458;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 586784;
                                }};
                                originalLocation = new Location() {{
                                    index = 807581;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "pariatur";
                                    title = "Miss";
                                }};
                                updateMask = "dicta";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "laborum";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "totam";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 132068;
                                            }};
                                            sourceUri = "dolores";
                                        }};
                                    }};
                                    itemId = "distinctio";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("aliquid", "quam");
                                        put("molestias", "temporibus");
                                        put("qui", "neque");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "odio";
                                                        image = new ImageInput() {{
                                                            altText = "sunt";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                width = 722081;
                                                            }};
                                                            sourceUri = "hic";
                                                        }};
                                                        isOther = false;
                                                        value = "voluptatem";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.DROP_DOWN;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "soluta";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 92596;
                                            }};
                                            sourceUri = "saepe";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "quos";
                                                            image = new ImageInput() {{
                                                                altText = "tempore";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 45614;
                                                                }};
                                                                sourceUri = "delectus";
                                                            }};
                                                            isOther = false;
                                                            value = "dolorem";
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
                                                    folderId = "labore";
                                                    maxFileSize = "adipisci";
                                                    maxFiles = 677263;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "quas";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequatur";
                                                                    uri = "https://tall-self-control.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ut";
                                                                    youtubeUri = "facilis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cupiditate";
                                                                    uri = "http://beautiful-lifetime.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "occaecati";
                                                                    youtubeUri = "voluptatibus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quisquam";
                                                                    uri = "https://overlooked-feature.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "delectus";
                                                                    youtubeUri = "voluptate";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consectetur";
                                                                    uri = "https://weary-kneejerk.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "distinctio";
                                                                    youtubeUri = "quod";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "odio";
                                                    }};
                                                    pointValue = 630448;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vero";
                                                                    uri = "http://flippant-stain.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sequi";
                                                                    youtubeUri = "natus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "impedit";
                                                                    uri = "http://winged-finisher.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fugit";
                                                                    youtubeUri = "porro";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "maiores";
                                                                    uri = "https://late-river.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "alias";
                                                                    youtubeUri = "officia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "tempora";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ea";
                                                                    uri = "http://incomplete-socks.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ratione";
                                                                    youtubeUri = "ex";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laudantium";
                                                                    uri = "http://elaborate-wholesaler.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ex";
                                                                    youtubeUri = "nulla";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "excepturi";
                                                    }};
                                                }};
                                                questionId = "voluptatibus";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 960835;
                                                    highLabel = "quisquam";
                                                    low = 906556;
                                                    lowLabel = "ea";
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
                                            altText = "impedit";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 333145;
                                            }};
                                            sourceUri = "aliquid";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                        goToSectionId = "ea";
                                                        image = new ImageInput() {{
                                                            altText = "quo";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 926213;
                                                            }};
                                                            sourceUri = "aspernatur";
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
                                                folderId = "a";
                                                maxFileSize = "libero";
                                                maxFiles = 13948;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.DRAWING),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "aliquam";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "fugit";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "accusamus";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "inventore";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "et";
                                                                uri = "https://quick-witted-skeleton.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "eum";
                                                                youtubeUri = "autem";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "nobis";
                                                                uri = "https://sweaty-stripe.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "libero";
                                                                youtubeUri = "quasi";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "tempora";
                                                }};
                                                pointValue = 256139;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "provident";
                                                                uri = "http://last-eligibility.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "eius";
                                                                youtubeUri = "esse";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "esse";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "fuga";
                                                                uri = "http://repulsive-stepping-stone.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "eum";
                                                                youtubeUri = "suscipit";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "assumenda";
                                                                uri = "http://lustrous-separation.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ipsa";
                                                                youtubeUri = "id";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quidem";
                                                                uri = "http://sophisticated-starboard.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "fuga";
                                                                youtubeUri = "eius";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "eos";
                                                }};
                                            }};
                                            questionId = "voluptas";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 587600;
                                                highLabel = "consequatur";
                                                low = 272822;
                                                lowLabel = "debitis";
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
                                        put("aspernatur", "sequi");
                                        put("quo", "esse");
                                    }};
                                    title = "Dr.";
                                    videoItem = new VideoItem() {{
                                        caption = "aperiam";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 799796;
                                            }};
                                            youtubeUri = "dignissimos";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 76956;
                                }};
                                updateMask = "nihil";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "totam";
                            }};
                        }}),
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "accusamus";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "aliquam";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 577543;
                                            }};
                                            sourceUri = "commodi";
                                        }};
                                    }};
                                    itemId = "sapiente";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("deserunt", "molestiae");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "eum";
                                                        image = new ImageInput() {{
                                                            altText = "quas";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                width = 159867;
                                                            }};
                                                            sourceUri = "deleniti";
                                                        }};
                                                        isOther = false;
                                                        value = "fugit";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHECKBOX;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "mollitia";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 539224;
                                            }};
                                            sourceUri = "explicabo";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                            goToSectionId = "sapiente";
                                                            image = new ImageInput() {{
                                                                altText = "consequuntur";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 129412;
                                                                }};
                                                                sourceUri = "saepe";
                                                            }};
                                                            isOther = false;
                                                            value = "occaecati";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "et";
                                                            image = new ImageInput() {{
                                                                altText = "esse";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 882042;
                                                                }};
                                                                sourceUri = "veritatis";
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
                                                    folderId = "nam";
                                                    maxFileSize = "vero";
                                                    maxFiles = 399025;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.AUDIO),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "harum";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "molestiae";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "occaecati";
                                                                    uri = "http://sandy-room.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "culpa";
                                                                    youtubeUri = "tempore";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "adipisci";
                                                                    uri = "https://cumbersome-administration.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quaerat";
                                                                    youtubeUri = "sapiente";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consectetur";
                                                                    uri = "http://lovely-nestling.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nulla";
                                                                    youtubeUri = "quas";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "esse";
                                                    }};
                                                    pointValue = 97468;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "error";
                                                                    uri = "https://total-snuck.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eveniet";
                                                                    youtubeUri = "asperiores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "facere";
                                                                    uri = "http://cultured-boogeyman.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "culpa";
                                                                    youtubeUri = "aliquid";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "tenetur";
                                                                    uri = "http://vital-helmet.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eius";
                                                                    youtubeUri = "libero";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "illum";
                                                                    uri = "https://ancient-encouragement.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dicta";
                                                                    youtubeUri = "ullam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "reprehenderit";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nisi";
                                                                    uri = "http://mild-commerce.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ex";
                                                                    youtubeUri = "deleniti";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "itaque";
                                                                    uri = "https://burly-official.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quasi";
                                                                    youtubeUri = "at";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "et";
                                                    }};
                                                }};
                                                questionId = "voluptate";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 326701;
                                                    highLabel = "veritatis";
                                                    low = 232744;
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
                                                            goToSectionId = "accusantium";
                                                            image = new ImageInput() {{
                                                                altText = "rem";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 513075;
                                                                }};
                                                                sourceUri = "eum";
                                                            }};
                                                            isOther = false;
                                                            value = "mollitia";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                            goToSectionId = "corrupti";
                                                            image = new ImageInput() {{
                                                                altText = "non";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 221161;
                                                                }};
                                                                sourceUri = "occaecati";
                                                            }};
                                                            isOther = false;
                                                            value = "numquam";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "explicabo";
                                                            image = new ImageInput() {{
                                                                altText = "voluptas";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 491025;
                                                                }};
                                                                sourceUri = "dicta";
                                                            }};
                                                            isOther = false;
                                                            value = "maiores";
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
                                                    folderId = "velit";
                                                    maxFileSize = "voluptatibus";
                                                    maxFiles = 374323;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                                        add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                                        add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                        add(FileUploadQuestionTypesEnum.ANY),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "officia";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "maxime";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "dignissimos";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "officia";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nemo";
                                                                    uri = "http://frigid-sectional.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "labore";
                                                                    youtubeUri = "ab";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "adipisci";
                                                                    uri = "https://pushy-gender.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "culpa";
                                                                    youtubeUri = "est";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "recusandae";
                                                                    uri = "https://those-helo.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quos";
                                                                    youtubeUri = "vel";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "labore";
                                                                    uri = "https://rowdy-repair.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "in";
                                                                    youtubeUri = "corporis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "reiciendis";
                                                    }};
                                                    pointValue = 828657;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "recusandae";
                                                                    uri = "http://ashamed-replacement.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "in";
                                                                    youtubeUri = "exercitationem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "earum";
                                                                    uri = "https://extroverted-wisdom.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "quidem";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "saepe";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolore";
                                                                    uri = "http://yawning-deal.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "amet";
                                                                    youtubeUri = "beatae";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dignissimos";
                                                                    uri = "https://unimportant-custard.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "harum";
                                                                    youtubeUri = "laboriosam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ipsa";
                                                                    uri = "https://self-assured-bull.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "similique";
                                                                    youtubeUri = "tempora";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aspernatur";
                                                                    uri = "http://hasty-gall-bladder.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nobis";
                                                                    youtubeUri = "dolorum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "adipisci";
                                                    }};
                                                }};
                                                questionId = "minus";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 503934;
                                                    highLabel = "in";
                                                    low = 296242;
                                                    lowLabel = "aliquam";
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
                                            altText = "officiis";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 351870;
                                            }};
                                            sourceUri = "adipisci";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "quas";
                                                        image = new ImageInput() {{
                                                            altText = "hic";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 633998;
                                                            }};
                                                            sourceUri = "corrupti";
                                                        }};
                                                        isOther = false;
                                                        value = "pariatur";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "hic";
                                                        image = new ImageInput() {{
                                                            altText = "exercitationem";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 24619;
                                                            }};
                                                            sourceUri = "rerum";
                                                        }};
                                                        isOther = false;
                                                        value = "sed";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "explicabo";
                                                        image = new ImageInput() {{
                                                            altText = "asperiores";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                width = 451822;
                                                            }};
                                                            sourceUri = "expedita";
                                                        }};
                                                        isOther = false;
                                                        value = "ab";
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
                                                folderId = "dolore";
                                                maxFileSize = "laborum";
                                                maxFiles = 152354;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                                    add(FileUploadQuestionTypesEnum.PDF),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "voluptas";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "architecto";
                                                                uri = "http://well-to-do-tension.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "reiciendis";
                                                                youtubeUri = "perferendis";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "corrupti";
                                                                uri = "https://favorite-characteristic.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "eius";
                                                                youtubeUri = "necessitatibus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ipsum";
                                                                uri = "http://obedient-medicine.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "tempora";
                                                                youtubeUri = "tempora";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "voluptate";
                                                }};
                                                pointValue = 970076;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sit";
                                                                uri = "http://unfortunate-leg.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quaerat";
                                                                youtubeUri = "incidunt";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ipsam";
                                                                uri = "https://mediocre-analgesia.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "error";
                                                                youtubeUri = "veniam";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "minima";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "reiciendis";
                                                                uri = "https://dark-asterisk.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "numquam";
                                                                youtubeUri = "veniam";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "in";
                                                                uri = "https://candid-lifetime.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "praesentium";
                                                                youtubeUri = "cum";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "laboriosam";
                                                                uri = "https://merry-overnighter.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "expedita";
                                                                youtubeUri = "debitis";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "neque";
                                                                uri = "https://good-natured-pate.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "corrupti";
                                                                youtubeUri = "accusamus";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "tempora";
                                                }};
                                            }};
                                            questionId = "atque";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 282699;
                                                highLabel = "fugiat";
                                                low = 30235;
                                                lowLabel = "culpa";
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
                                        put("magnam", "consequatur");
                                        put("esse", "ipsam");
                                        put("sit", "voluptatum");
                                    }};
                                    title = "Ms.";
                                    videoItem = new VideoItem() {{
                                        caption = "repudiandae";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 89494;
                                            }};
                                            youtubeUri = "blanditiis";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 405942;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 153627;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 24313;
                                }};
                                originalLocation = new Location() {{
                                    index = 425508;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "nostrum";
                                    title = "Dr.";
                                }};
                                updateMask = "error";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "consequatur";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "incidunt";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 209750;
                                            }};
                                            sourceUri = "harum";
                                        }};
                                    }};
                                    itemId = "dicta";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("occaecati", "labore");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "laborum";
                                                        image = new ImageInput() {{
                                                            altText = "nam";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 388867;
                                                            }};
                                                            sourceUri = "alias";
                                                        }};
                                                        isOther = false;
                                                        value = "amet";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "voluptate";
                                                        image = new ImageInput() {{
                                                            altText = "unde";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 588740;
                                                            }};
                                                            sourceUri = "repellendus";
                                                        }};
                                                        isOther = false;
                                                        value = "delectus";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "perferendis";
                                                        image = new ImageInput() {{
                                                            altText = "est";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                width = 440666;
                                                            }};
                                                            sourceUri = "facere";
                                                        }};
                                                        isOther = false;
                                                        value = "fuga";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHECKBOX;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "mollitia";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 29100;
                                            }};
                                            sourceUri = "quisquam";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "reprehenderit";
                                                            image = new ImageInput() {{
                                                                altText = "asperiores";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 383103;
                                                                }};
                                                                sourceUri = "quidem";
                                                            }};
                                                            isOther = false;
                                                            value = "maxime";
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
                                                    folderId = "esse";
                                                    maxFileSize = "amet";
                                                    maxFiles = 826825;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.DRAWING),
                                                        add(FileUploadQuestionTypesEnum.PDF),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "officiis";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "accusamus";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "natus";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "minima";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ex";
                                                                    uri = "https://moral-supermarket.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "blanditiis";
                                                                    youtubeUri = "suscipit";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "repudiandae";
                                                    }};
                                                    pointValue = 542129;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sunt";
                                                                    uri = "https://recent-soy.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "doloremque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "repudiandae";
                                                                    uri = "http://animated-brief.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "enim";
                                                                    youtubeUri = "laboriosam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "velit";
                                                                    uri = "https://negative-election.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "consequuntur";
                                                                    youtubeUri = "occaecati";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "officiis";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "in";
                                                                    uri = "http://unusual-mouth.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fugit";
                                                                    youtubeUri = "id";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quis";
                                                                    uri = "http://pitiful-beginner.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quidem";
                                                                    youtubeUri = "eveniet";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "non";
                                                                    uri = "https://any-hope.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "totam";
                                                                    youtubeUri = "quae";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "molestiae";
                                                    }};
                                                }};
                                                questionId = "eveniet";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 739884;
                                                    highLabel = "iure";
                                                    low = 898063;
                                                    lowLabel = "ratione";
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
                                                            goToSectionId = "voluptatum";
                                                            image = new ImageInput() {{
                                                                altText = "rem";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 320565;
                                                                }};
                                                                sourceUri = "repellat";
                                                            }};
                                                            isOther = false;
                                                            value = "alias";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "perspiciatis";
                                                            image = new ImageInput() {{
                                                                altText = "nihil";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 378245;
                                                                }};
                                                                sourceUri = "alias";
                                                            }};
                                                            isOther = false;
                                                            value = "maiores";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "dolores";
                                                            image = new ImageInput() {{
                                                                altText = "id";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 293144;
                                                                }};
                                                                sourceUri = "dolorum";
                                                            }};
                                                            isOther = false;
                                                            value = "nesciunt";
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
                                                    folderId = "recusandae";
                                                    maxFileSize = "omnis";
                                                    maxFiles = 309251;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                                        add(FileUploadQuestionTypesEnum.DOCUMENT),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "adipisci";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "debitis";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "laudantium";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nemo";
                                                                    uri = "https://jovial-networking.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eum";
                                                                    youtubeUri = "reiciendis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "provident";
                                                                    uri = "http://grizzled-border.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nostrum";
                                                                    youtubeUri = "mollitia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "provident";
                                                    }};
                                                    pointValue = 821719;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ex";
                                                                    uri = "http://another-zoo.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ullam";
                                                                    youtubeUri = "in";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nam";
                                                                    uri = "https://poor-plum.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "modi";
                                                                    youtubeUri = "voluptatibus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "molestias";
                                                                    uri = "https://well-informed-sage.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rerum";
                                                                    youtubeUri = "tempora";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quis";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "fugit";
                                                                    uri = "https://barren-allowance.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "aspernatur";
                                                                    youtubeUri = "eum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "eius";
                                                    }};
                                                }};
                                                questionId = "rem";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 773084;
                                                    highLabel = "eos";
                                                    low = 958741;
                                                    lowLabel = "eum";
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
                                                            goToSectionId = "beatae";
                                                            image = new ImageInput() {{
                                                                altText = "cupiditate";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 936469;
                                                                }};
                                                                sourceUri = "soluta";
                                                            }};
                                                            isOther = false;
                                                            value = "hic";
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
                                                    folderId = "eaque";
                                                    maxFileSize = "earum";
                                                    maxFiles = 596211;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                        add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                        add(FileUploadQuestionTypesEnum.IMAGE),
                                                        add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "fugit";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "fuga";
                                                                    uri = "http://proper-testimonial.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "consequatur";
                                                                    youtubeUri = "quasi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "et";
                                                                    uri = "http://pertinent-movement.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "adipisci";
                                                                    youtubeUri = "quasi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "magni";
                                                                    uri = "https://timely-terminal.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "tempora";
                                                                    youtubeUri = "nihil";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "molestiae";
                                                                    uri = "http://lawful-indigence.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "maiores";
                                                                    youtubeUri = "reiciendis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "vel";
                                                    }};
                                                    pointValue = 99958;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "doloremque";
                                                                    uri = "http://left-dissonance.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ex";
                                                                    youtubeUri = "consectetur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquid";
                                                                    uri = "http://quick-camel.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fugiat";
                                                                    youtubeUri = "expedita";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquid";
                                                                    uri = "https://helpful-gravity.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eum";
                                                                    youtubeUri = "voluptas";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "iste";
                                                                    uri = "https://big-hearted-paddle.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptates";
                                                                    youtubeUri = "mollitia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "laborum";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ad";
                                                                    uri = "https://frosty-browsing.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ex";
                                                                    youtubeUri = "quo";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ex";
                                                                    uri = "http://functional-quilt.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "molestias";
                                                                    youtubeUri = "cum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquid";
                                                                    uri = "http://messy-occupation.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rerum";
                                                                    youtubeUri = "est";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "culpa";
                                                    }};
                                                }};
                                                questionId = "voluptatem";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 889288;
                                                    highLabel = "architecto";
                                                    low = 682119;
                                                    lowLabel = "pariatur";
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
                                                            goToSectionId = "alias";
                                                            image = new ImageInput() {{
                                                                altText = "deleniti";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 404244;
                                                                }};
                                                                sourceUri = "sapiente";
                                                            }};
                                                            isOther = false;
                                                            value = "rem";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "nemo";
                                                            image = new ImageInput() {{
                                                                altText = "asperiores";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 355225;
                                                                }};
                                                                sourceUri = "perferendis";
                                                            }};
                                                            isOther = false;
                                                            value = "illum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "impedit";
                                                            image = new ImageInput() {{
                                                                altText = "quibusdam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 373216;
                                                                }};
                                                                sourceUri = "culpa";
                                                            }};
                                                            isOther = false;
                                                            value = "dolor";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "inventore";
                                                            image = new ImageInput() {{
                                                                altText = "deleniti";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 274575;
                                                                }};
                                                                sourceUri = "dolor";
                                                            }};
                                                            isOther = false;
                                                            value = "consequatur";
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
                                                    folderId = "sit";
                                                    maxFileSize = "modi";
                                                    maxFiles = 144286;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.DRAWING),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "dolor";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ipsam";
                                                                    uri = "http://average-middleman.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "impedit";
                                                                    youtubeUri = "officiis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "esse";
                                                                    uri = "https://crisp-fairness.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "expedita";
                                                                    youtubeUri = "eum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vel";
                                                                    uri = "https://formal-fisting.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "porro";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nobis";
                                                                    uri = "http://vengeful-chub.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "exercitationem";
                                                                    youtubeUri = "necessitatibus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quasi";
                                                    }};
                                                    pointValue = 392569;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vero";
                                                                    uri = "https://remarkable-concern.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "repudiandae";
                                                                    youtubeUri = "optio";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "occaecati";
                                                                    uri = "http://jolly-latitude.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptas";
                                                                    youtubeUri = "numquam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nemo";
                                                                    uri = "https://faint-carnation.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nesciunt";
                                                                    youtubeUri = "fuga";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laudantium";
                                                                    uri = "http://bumpy-loophole.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dicta";
                                                                    youtubeUri = "nisi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "consequuntur";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aperiam";
                                                                    uri = "https://wild-retrospectivity.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "omnis";
                                                                    youtubeUri = "eos";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "occaecati";
                                                    }};
                                                }};
                                                questionId = "iste";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 81369;
                                                    highLabel = "fuga";
                                                    low = 881897;
                                                    lowLabel = "voluptatibus";
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
                                            altText = "distinctio";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 966390;
                                            }};
                                            sourceUri = "minima";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "magnam";
                                                        image = new ImageInput() {{
                                                            altText = "temporibus";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                width = 415280;
                                                            }};
                                                            sourceUri = "itaque";
                                                        }};
                                                        isOther = false;
                                                        value = "commodi";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "earum";
                                                        image = new ImageInput() {{
                                                            altText = "modi";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                width = 877399;
                                                            }};
                                                            sourceUri = "voluptatem";
                                                        }};
                                                        isOther = false;
                                                        value = "ipsam";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                        goToSectionId = "alias";
                                                        image = new ImageInput() {{
                                                            altText = "quasi";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 978548;
                                                            }};
                                                            sourceUri = "enim";
                                                        }};
                                                        isOther = false;
                                                        value = "sint";
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
                                                folderId = "deserunt";
                                                maxFileSize = "esse";
                                                maxFiles = 364463;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.PDF),
                                                    add(FileUploadQuestionTypesEnum.PRESENTATION),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "accusamus";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "impedit";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "hic";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "asperiores";
                                                                uri = "http://healthy-tenor.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quae";
                                                                youtubeUri = "minus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "fuga";
                                                                uri = "https://embellished-decrease.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ipsum";
                                                                youtubeUri = "impedit";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "magni";
                                                                uri = "https://valuable-ranger.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "iusto";
                                                                youtubeUri = "voluptate";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sequi";
                                                                uri = "http://disguised-screamer.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quibusdam";
                                                                youtubeUri = "iure";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "odit";
                                                }};
                                                pointValue = 974990;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "magnam";
                                                                uri = "https://blond-snake.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "architecto";
                                                                youtubeUri = "voluptatibus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quia";
                                                                uri = "https://fragrant-definition.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "accusantium";
                                                                youtubeUri = "vel";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "ea";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "vero";
                                                                uri = "https://indolent-defender.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "perspiciatis";
                                                                youtubeUri = "earum";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "dicta";
                                                }};
                                            }};
                                            questionId = "impedit";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Dr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 610987;
                                                highLabel = "itaque";
                                                low = 2677;
                                                lowLabel = "nisi";
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
                                        put("velit", "laborum");
                                        put("non", "dolor");
                                        put("iusto", "sit");
                                        put("doloremque", "consequatur");
                                    }};
                                    title = "Miss";
                                    videoItem = new VideoItem() {{
                                        caption = "recusandae";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 693153;
                                            }};
                                            youtubeUri = "voluptas";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 705148;
                                }};
                                updateMask = "placeat";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "perspiciatis";
                            }};
                        }}),
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "expedita";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "deleniti";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                width = 455579;
                                            }};
                                            sourceUri = "ullam";
                                        }};
                                    }};
                                    itemId = "unde";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("animi", "impedit");
                                        put("ipsam", "corporis");
                                        put("est", "error");
                                        put("esse", "labore");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "consectetur";
                                                        image = new ImageInput() {{
                                                            altText = "vitae";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 212434;
                                                            }};
                                                            sourceUri = "ad";
                                                        }};
                                                        isOther = false;
                                                        value = "qui";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHECKBOX;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "ex";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 745233;
                                            }};
                                            sourceUri = "libero";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "fugit";
                                                            image = new ImageInput() {{
                                                                altText = "alias";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 425402;
                                                                }};
                                                                sourceUri = "quae";
                                                            }};
                                                            isOther = false;
                                                            value = "quae";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "neque";
                                                            image = new ImageInput() {{
                                                                altText = "exercitationem";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 88248;
                                                                }};
                                                                sourceUri = "ipsum";
                                                            }};
                                                            isOther = false;
                                                            value = "unde";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "distinctio";
                                                            image = new ImageInput() {{
                                                                altText = "maxime";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 159146;
                                                                }};
                                                                sourceUri = "nostrum";
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
                                                    folderId = "dicta";
                                                    maxFileSize = "id";
                                                    maxFiles = 727888;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.PDF),
                                                        add(FileUploadQuestionTypesEnum.DRAWING),
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                        add(FileUploadQuestionTypesEnum.FILE_TYPE_UNSPECIFIED),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "ipsa";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "voluptates";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aperiam";
                                                                    uri = "https://flippant-robotics.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptatem";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "esse";
                                                    }};
                                                    pointValue = 172951;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "beatae";
                                                                    uri = "https://submissive-masterpiece.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "provident";
                                                                    youtubeUri = "accusamus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "necessitatibus";
                                                                    uri = "https://noteworthy-halt.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ipsam";
                                                                    youtubeUri = "rerum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laudantium";
                                                                    uri = "http://unhappy-waterspout.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "at";
                                                                    youtubeUri = "alias";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quia";
                                                                    uri = "https://realistic-trachoma.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "expedita";
                                                                    youtubeUri = "officiis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "eos";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "odio";
                                                                    uri = "https://constant-cap.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "error";
                                                                    youtubeUri = "earum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "adipisci";
                                                                    uri = "https://pleasing-drapes.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quis";
                                                                    youtubeUri = "beatae";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "unde";
                                                                    uri = "http://whimsical-mystery.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "numquam";
                                                                    youtubeUri = "numquam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nesciunt";
                                                                    uri = "https://popular-kitty.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "necessitatibus";
                                                                    youtubeUri = "corporis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "qui";
                                                    }};
                                                }};
                                                questionId = "expedita";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Ms.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 587375;
                                                    highLabel = "minima";
                                                    low = 809594;
                                                    lowLabel = "enim";
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
                                                            goToSectionId = "minus";
                                                            image = new ImageInput() {{
                                                                altText = "eum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 357347;
                                                                }};
                                                                sourceUri = "magnam";
                                                            }};
                                                            isOther = false;
                                                            value = "voluptates";
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
                                                    folderId = "tempore";
                                                    maxFileSize = "aperiam";
                                                    maxFiles = 727547;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.DOCUMENT),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "occaecati";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "voluptas";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "quo";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "minus";
                                                                    uri = "https://grand-player.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "delectus";
                                                                    youtubeUri = "tempore";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "vero";
                                                    }};
                                                    pointValue = 141506;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "pariatur";
                                                                    uri = "http://instructive-ash.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "minima";
                                                                    youtubeUri = "in";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ducimus";
                                                                    uri = "https://dear-overcharge.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ducimus";
                                                                    youtubeUri = "voluptate";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "pariatur";
                                                                    uri = "https://plastic-sac.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quaerat";
                                                                    youtubeUri = "commodi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "officiis";
                                                                    uri = "https://rewarding-first.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolorem";
                                                                    youtubeUri = "modi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ipsa";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vero";
                                                                    uri = "http://utilized-rescue.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "earum";
                                                                    youtubeUri = "veniam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "animi";
                                                                    uri = "http://scientific-burial.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "necessitatibus";
                                                                    youtubeUri = "nobis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ipsa";
                                                                    uri = "http://woozy-blast.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "laboriosam";
                                                                    youtubeUri = "pariatur";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "libero";
                                                    }};
                                                }};
                                                questionId = "excepturi";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Ms.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 367917;
                                                    highLabel = "aliquam";
                                                    low = 342342;
                                                    lowLabel = "doloribus";
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
                                                            goToSectionId = "enim";
                                                            image = new ImageInput() {{
                                                                altText = "hic";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 559774;
                                                                }};
                                                                sourceUri = "totam";
                                                            }};
                                                            isOther = false;
                                                            value = "molestias";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "eaque";
                                                            image = new ImageInput() {{
                                                                altText = "saepe";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 554645;
                                                                }};
                                                                sourceUri = "iste";
                                                            }};
                                                            isOther = false;
                                                            value = "assumenda";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "libero";
                                                            image = new ImageInput() {{
                                                                altText = "velit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 963976;
                                                                }};
                                                                sourceUri = "impedit";
                                                            }};
                                                            isOther = false;
                                                            value = "cum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                            goToSectionId = "adipisci";
                                                            image = new ImageInput() {{
                                                                altText = "saepe";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 42924;
                                                                }};
                                                                sourceUri = "quis";
                                                            }};
                                                            isOther = false;
                                                            value = "veniam";
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
                                                    folderId = "architecto";
                                                    maxFileSize = "cupiditate";
                                                    maxFiles = 475589;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                        add(FileUploadQuestionTypesEnum.DOCUMENT),
                                                        add(FileUploadQuestionTypesEnum.DOCUMENT),
                                                        add(FileUploadQuestionTypesEnum.AUDIO),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "asperiores";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequuntur";
                                                                    uri = "https://magnificent-cayenne.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "amet";
                                                                    youtubeUri = "exercitationem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ab";
                                                                    uri = "http://rough-reef.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptatibus";
                                                                    youtubeUri = "quaerat";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "blanditiis";
                                                    }};
                                                    pointValue = 718627;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quis";
                                                                    uri = "http://second-shawl.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "facilis";
                                                                    youtubeUri = "ipsum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ad";
                                                                    uri = "https://winged-circle.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "labore";
                                                                    youtubeUri = "rerum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "eos";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nostrum";
                                                                    uri = "http://lawful-pitcher.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eligendi";
                                                                    youtubeUri = "fugiat";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "unde";
                                                                    uri = "https://livid-creationist.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "error";
                                                                    youtubeUri = "porro";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "vitae";
                                                    }};
                                                }};
                                                questionId = "dignissimos";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Ms.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 854115;
                                                    highLabel = "ad";
                                                    low = 134818;
                                                    lowLabel = "enim";
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
                                            altText = "delectus";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 491201;
                                            }};
                                            sourceUri = "libero";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                        goToSectionId = "incidunt";
                                                        image = new ImageInput() {{
                                                            altText = "accusamus";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 734814;
                                                            }};
                                                            sourceUri = "veniam";
                                                        }};
                                                        isOther = false;
                                                        value = "eos";
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
                                                folderId = "earum";
                                                maxFileSize = "reprehenderit";
                                                maxFiles = 506312;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.AUDIO),
                                                    add(FileUploadQuestionTypesEnum.IMAGE),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "nihil";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "illo";
                                                                uri = "http://svelte-emergency.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "provident";
                                                                youtubeUri = "laudantium";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "repudiandae";
                                                                uri = "http://stormy-casserole.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "expedita";
                                                                youtubeUri = "quas";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "provident";
                                                                uri = "https://ringed-knickers.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "vero";
                                                                youtubeUri = "similique";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "repellendus";
                                                }};
                                                pointValue = 434827;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "commodi";
                                                                uri = "https://immense-advertising.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ad";
                                                                youtubeUri = "quae";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "amet";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "praesentium";
                                                                uri = "https://several-cup.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dicta";
                                                                youtubeUri = "laudantium";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "doloremque";
                                                                uri = "https://lawful-cub.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dolorum";
                                                                youtubeUri = "necessitatibus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "provident";
                                                                uri = "https://active-freckle.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "itaque";
                                                                youtubeUri = "facilis";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "corrupti";
                                                                uri = "http://notable-sword.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "totam";
                                                                youtubeUri = "dicta";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "voluptatem";
                                                }};
                                            }};
                                            questionId = "velit";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mrs.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 124289;
                                                highLabel = "a";
                                                low = 223291;
                                                lowLabel = "occaecati";
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
                                        put("beatae", "at");
                                        put("labore", "minus");
                                        put("esse", "voluptatem");
                                    }};
                                    title = "Mr.";
                                    videoItem = new VideoItem() {{
                                        caption = "rerum";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 46791;
                                            }};
                                            youtubeUri = "dignissimos";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 998026;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 243678;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 784115;
                                }};
                                originalLocation = new Location() {{
                                    index = 588639;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "consectetur";
                                    title = "Miss";
                                }};
                                updateMask = "dignissimos";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "consectetur";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "soluta";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 839807;
                                            }};
                                            sourceUri = "officia";
                                        }};
                                    }};
                                    itemId = "amet";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("aspernatur", "quo");
                                        put("itaque", "illum");
                                        put("laborum", "dignissimos");
                                        put("vero", "qui");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "explicabo";
                                                        image = new ImageInput() {{
                                                            altText = "explicabo";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                width = 471457;
                                                            }};
                                                            sourceUri = "non";
                                                        }};
                                                        isOther = false;
                                                        value = "ab";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = ChoiceQuestionTypeEnum.CHOICE_TYPE_UNSPECIFIED;
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "hic";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                width = 964925;
                                            }};
                                            sourceUri = "non";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.NEXT_SECTION;
                                                            goToSectionId = "labore";
                                                            image = new ImageInput() {{
                                                                altText = "numquam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                    width = 265303;
                                                                }};
                                                                sourceUri = "in";
                                                            }};
                                                            isOther = false;
                                                            value = "explicabo";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "rem";
                                                            image = new ImageInput() {{
                                                                altText = "aperiam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 535802;
                                                                }};
                                                                sourceUri = "enim";
                                                            }};
                                                            isOther = false;
                                                            value = "voluptate";
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
                                                    folderId = "minima";
                                                    maxFileSize = "libero";
                                                    maxFiles = 300189;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.DOCUMENT),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "nesciunt";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "mollitia";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "fugiat";
                                                                    uri = "http://lanky-facelift.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ab";
                                                                    youtubeUri = "modi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aut";
                                                                    uri = "http://unwritten-jumper.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "numquam";
                                                                    youtubeUri = "dolorum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "possimus";
                                                    }};
                                                    pointValue = 452399;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nesciunt";
                                                                    uri = "http://vicious-settler.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "distinctio";
                                                                    youtubeUri = "iusto";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quas";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "facilis";
                                                                    uri = "http://imperturbable-precedent.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rem";
                                                                    youtubeUri = "aut";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quos";
                                                    }};
                                                }};
                                                questionId = "laudantium";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 83291;
                                                    highLabel = "quae";
                                                    low = 51075;
                                                    lowLabel = "saepe";
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
                                                            goToSectionId = "nulla";
                                                            image = new ImageInput() {{
                                                                altText = "officia";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 30208;
                                                                }};
                                                                sourceUri = "alias";
                                                            }};
                                                            isOther = false;
                                                            value = "eveniet";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                            goToSectionId = "voluptatem";
                                                            image = new ImageInput() {{
                                                                altText = "incidunt";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 185897;
                                                                }};
                                                                sourceUri = "necessitatibus";
                                                            }};
                                                            isOther = false;
                                                            value = "harum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                            goToSectionId = "beatae";
                                                            image = new ImageInput() {{
                                                                altText = "aliquid";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                                    width = 760049;
                                                                }};
                                                                sourceUri = "voluptatibus";
                                                            }};
                                                            isOther = false;
                                                            value = "molestias";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "libero";
                                                            image = new ImageInput() {{
                                                                altText = "totam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                    width = 397919;
                                                                }};
                                                                sourceUri = "ea";
                                                            }};
                                                            isOther = false;
                                                            value = "impedit";
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
                                                    folderId = "odit";
                                                    maxFileSize = "velit";
                                                    maxFiles = 967338;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                        add(FileUploadQuestionTypesEnum.PDF),
                                                        add(FileUploadQuestionTypesEnum.PDF),
                                                        add(FileUploadQuestionTypesEnum.VIDEO),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "nisi";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "recusandae";
                                                                    uri = "https://excitable-lord.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ullam";
                                                                    youtubeUri = "quisquam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dicta";
                                                                    uri = "https://similar-balloon.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "architecto";
                                                                    youtubeUri = "architecto";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "enim";
                                                                    uri = "https://meek-aircraft.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "a";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "iste";
                                                    }};
                                                    pointValue = 117819;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ullam";
                                                                    uri = "http://fancy-trip.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "modi";
                                                                    youtubeUri = "consequuntur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "assumenda";
                                                                    uri = "https://worst-scene.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "accusamus";
                                                                    youtubeUri = "totam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "reiciendis";
                                                                    uri = "http://normal-invention.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "iure";
                                                                    youtubeUri = "odio";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "nesciunt";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vel";
                                                                    uri = "http://growing-gamebird.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "officia";
                                                                    youtubeUri = "reprehenderit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "distinctio";
                                                                    uri = "http://awesome-lode.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "accusantium";
                                                                    youtubeUri = "veniam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "saepe";
                                                                    uri = "http://subdued-encyclopedia.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "doloribus";
                                                                    youtubeUri = "fugiat";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "est";
                                                                    uri = "https://evergreen-brunch.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "similique";
                                                                    youtubeUri = "illo";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "repellat";
                                                    }};
                                                }};
                                                questionId = "nemo";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 823753;
                                                    highLabel = "unde";
                                                    low = 275425;
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
                                                            goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                            goToSectionId = "optio";
                                                            image = new ImageInput() {{
                                                                altText = "alias";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 198911;
                                                                }};
                                                                sourceUri = "commodi";
                                                            }};
                                                            isOther = false;
                                                            value = "sapiente";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = OptionGoToActionEnum.GO_TO_ACTION_UNSPECIFIED;
                                                            goToSectionId = "veniam";
                                                            image = new ImageInput() {{
                                                                altText = "debitis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = MediaPropertiesAlignmentEnum.RIGHT;
                                                                    width = 575062;
                                                                }};
                                                                sourceUri = "ut";
                                                            }};
                                                            isOther = false;
                                                            value = "numquam";
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
                                                    folderId = "adipisci";
                                                    maxFileSize = "libero";
                                                    maxFiles = 448386;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add(FileUploadQuestionTypesEnum.SPREADSHEET),
                                                        add(FileUploadQuestionTypesEnum.IMAGE),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "beatae";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nisi";
                                                                    uri = "https://easy-going-lag.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "minima";
                                                                    youtubeUri = "architecto";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "qui";
                                                                    uri = "http://dapper-dolphin.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "praesentium";
                                                                    youtubeUri = "dolor";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "exercitationem";
                                                                    uri = "https://round-satellite.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nemo";
                                                                    youtubeUri = "culpa";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequuntur";
                                                                    uri = "http://precious-disengagement.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quod";
                                                                    youtubeUri = "itaque";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "a";
                                                    }};
                                                    pointValue = 788661;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "doloribus";
                                                                    uri = "https://unfolded-breadcrumb.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "culpa";
                                                                    youtubeUri = "ipsa";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nobis";
                                                                    uri = "https://crowded-buy.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "perspiciatis";
                                                                    youtubeUri = "debitis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ullam";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "accusantium";
                                                                    uri = "http://bold-nephew.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "iure";
                                                                    youtubeUri = "quibusdam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quod";
                                                    }};
                                                }};
                                                questionId = "nemo";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 246772;
                                                    highLabel = "magnam";
                                                    low = 493591;
                                                    lowLabel = "laboriosam";
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
                                            altText = "sed";
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 616941;
                                            }};
                                            sourceUri = "provident";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "facilis";
                                                        image = new ImageInput() {{
                                                            altText = "quidem";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 389548;
                                                            }};
                                                            sourceUri = "unde";
                                                        }};
                                                        isOther = false;
                                                        value = "modi";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.RESTART_FORM;
                                                        goToSectionId = "hic";
                                                        image = new ImageInput() {{
                                                            altText = "cum";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.ALIGNMENT_UNSPECIFIED;
                                                                width = 725784;
                                                            }};
                                                            sourceUri = "nam";
                                                        }};
                                                        isOther = false;
                                                        value = "incidunt";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = OptionGoToActionEnum.SUBMIT_FORM;
                                                        goToSectionId = "quod";
                                                        image = new ImageInput() {{
                                                            altText = "id";
                                                            properties = new MediaProperties() {{
                                                                alignment = MediaPropertiesAlignmentEnum.CENTER;
                                                                width = 423054;
                                                            }};
                                                            sourceUri = "quo";
                                                        }};
                                                        isOther = false;
                                                        value = "nesciunt";
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
                                                folderId = "nemo";
                                                maxFileSize = "illum";
                                                maxFiles = 706872;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add(FileUploadQuestionTypesEnum.PDF),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "recusandae";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "distinctio";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "pariatur";
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
                                                                displayText = "laborum";
                                                                uri = "https://quintessential-dollop.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ipsam";
                                                                youtubeUri = "alias";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "suscipit";
                                                                uri = "https://neat-pneumonia.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "occaecati";
                                                                youtubeUri = "labore";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quo";
                                                                uri = "http://cooperative-gravy.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quaerat";
                                                                youtubeUri = "eligendi";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "hic";
                                                                uri = "http://unfortunate-oasis.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "error";
                                                                youtubeUri = "mollitia";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "magnam";
                                                }};
                                                pointValue = 344289;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "corrupti";
                                                                uri = "https://sturdy-scenario.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "deserunt";
                                                                youtubeUri = "quod";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "laboriosam";
                                                                uri = "http://amusing-smelting.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "maxime";
                                                                youtubeUri = "consequatur";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "eaque";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "similique";
                                                                uri = "https://loud-bakery.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "officiis";
                                                                youtubeUri = "sed";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "necessitatibus";
                                                }};
                                            }};
                                            questionId = "impedit";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 567693;
                                                highLabel = "a";
                                                low = 983000;
                                                lowLabel = "laudantium";
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
                                        put("alias", "asperiores");
                                        put("rem", "dicta");
                                        put("suscipit", "earum");
                                        put("doloribus", "velit");
                                    }};
                                    title = "Mrs.";
                                    videoItem = new VideoItem() {{
                                        caption = "esse";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = MediaPropertiesAlignmentEnum.LEFT;
                                                width = 757407;
                                            }};
                                            youtubeUri = "quasi";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 203621;
                                }};
                                updateMask = "vero";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "excepturi";
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "accusantium";
                        targetRevisionId = "qui";
                    }};;
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "incidunt";
                fields = "dicta";
                key = "odit";
                oauthToken = "corporis";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "alias";
                uploadProtocol = "error";
            }};            

            FormsFormsBatchUpdateResponse res = sdk.forms.formsFormsBatchUpdate(req, new FormsFormsBatchUpdateSecurity() {{
                option1 = new FormsFormsBatchUpdateSecurityOption1("vel", "accusantium") {{
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
<!-- End SDK Example Usage -->