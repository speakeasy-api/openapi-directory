<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption3;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateRequest;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUpdateFormRequestInput;
import org.openapis.openapi.models.shared.WriteControl;
import org.openapis.openapi.models.shared.RequestInput;
import org.openapis.openapi.models.shared.UpdateSettingsRequest;
import org.openapis.openapi.models.shared.FormSettings;
import org.openapis.openapi.models.shared.QuizSettings;
import org.openapis.openapi.models.shared.UpdateItemRequestInput;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.ItemInput;
import org.openapis.openapi.models.shared.VideoItem;
import org.openapis.openapi.models.shared.Video;
import org.openapis.openapi.models.shared.MediaPropertiesAlignmentEnum;
import org.openapis.openapi.models.shared.MediaProperties;
import org.openapis.openapi.models.shared.QuestionItemInput;
import org.openapis.openapi.models.shared.QuestionInput;
import org.openapis.openapi.models.shared.TimeQuestion;
import org.openapis.openapi.models.shared.TextQuestion;
import org.openapis.openapi.models.shared.ScaleQuestion;
import org.openapis.openapi.models.shared.RowQuestion;
import org.openapis.openapi.models.shared.Grading;
import org.openapis.openapi.models.shared.Feedback;
import org.openapis.openapi.models.shared.ExtraMaterial;
import org.openapis.openapi.models.shared.VideoLink;
import org.openapis.openapi.models.shared.TextLink;
import org.openapis.openapi.models.shared.CorrectAnswers;
import org.openapis.openapi.models.shared.CorrectAnswer;
import org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum;
import org.openapis.openapi.models.shared.FileUploadQuestion;
import org.openapis.openapi.models.shared.DateQuestion;
import org.openapis.openapi.models.shared.ChoiceQuestionTypeEnum;
import org.openapis.openapi.models.shared.ChoiceQuestionInput;
import org.openapis.openapi.models.shared.OptionGoToActionEnum;
import org.openapis.openapi.models.shared.OptionInput;
import org.openapis.openapi.models.shared.ImageInput;
import org.openapis.openapi.models.shared.QuestionGroupItemInput;
import org.openapis.openapi.models.shared.GridInput;
import org.openapis.openapi.models.shared.ImageItemInput;
import org.openapis.openapi.models.shared.UpdateFormInfoRequestInput;
import org.openapis.openapi.models.shared.InfoInput;
import org.openapis.openapi.models.shared.MoveItemRequest;
import org.openapis.openapi.models.shared.DeleteItemRequest;
import org.openapis.openapi.models.shared.CreateItemRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsBatchUpdateRequest req = new FormsFormsBatchUpdateRequest() {{
                dollarXgafv = "2";
                batchUpdateFormRequestInput = new BatchUpdateFormRequestInput() {{
                    includeFormInResponse = false;
                    requests = new org.openapis.openapi.models.shared.RequestInput[]{{
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "distinctio";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "quibusdam";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 857946;
                                            }};
                                            sourceUri = "corrupti";
                                        }};
                                    }};
                                    itemId = "illum";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("error", "deserunt");
                                        put("suscipit", "iure");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "ipsa";
                                                        image = new ImageInput() {{
                                                            altText = "delectus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 383441;
                                                            }};
                                                            sourceUri = "molestiae";
                                                        }};
                                                        isOther = false;
                                                        value = "minus";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "voluptatum";
                                                        image = new ImageInput() {{
                                                            altText = "iusto";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 392785;
                                                            }};
                                                            sourceUri = "recusandae";
                                                        }};
                                                        isOther = false;
                                                        value = "temporibus";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "quis";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 648172;
                                            }};
                                            sourceUri = "perferendis";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "quo";
                                                            image = new ImageInput() {{
                                                                altText = "odit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 870088;
                                                                }};
                                                                sourceUri = "maiores";
                                                            }};
                                                            isOther = false;
                                                            value = "molestiae";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "quod";
                                                            image = new ImageInput() {{
                                                                altText = "esse";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 780529;
                                                                }};
                                                                sourceUri = "dolorum";
                                                            }};
                                                            isOther = false;
                                                            value = "dicta";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "officia";
                                                            image = new ImageInput() {{
                                                                altText = "occaecati";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 537373;
                                                                }};
                                                                sourceUri = "hic";
                                                            }};
                                                            isOther = false;
                                                            value = "optio";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "beatae";
                                                            image = new ImageInput() {{
                                                                altText = "commodi";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 264555;
                                                                }};
                                                                sourceUri = "qui";
                                                            }};
                                                            isOther = false;
                                                            value = "impedit";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "esse";
                                                    maxFileSize = "ipsum";
                                                    maxFiles = 568434;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "natus";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "sed";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolor";
                                                                    uri = "https://hoarse-upper.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fuga";
                                                                    youtubeUri = "in";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "corporis";
                                                                    uri = "https://innocent-thinking.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "architecto";
                                                                    youtubeUri = "ipsa";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "reiciendis";
                                                                    uri = "https://prize-plier.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolorem";
                                                                    youtubeUri = "corporis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "explicabo";
                                                    }};
                                                    pointValue = 750686;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "omnis";
                                                                    uri = "http://general-mobster.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "iure";
                                                                    youtubeUri = "culpa";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "doloribus";
                                                                    uri = "https://buttery-petitioner.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "culpa";
                                                                    youtubeUri = "consequuntur";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "repellat";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "occaecati";
                                                                    uri = "http://immediate-instructor.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "velit";
                                                                    youtubeUri = "error";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quia";
                                                                    uri = "http://cautious-poker.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "enim";
                                                                    youtubeUri = "odit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quo";
                                                                    uri = "http://weary-fright.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "possimus";
                                                                    youtubeUri = "aut";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quasi";
                                                    }};
                                                }};
                                                questionId = "error";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 673660;
                                                    highLabel = "quasi";
                                                    low = 971945;
                                                    lowLabel = "voluptatibus";
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
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "praesentium";
                                                            image = new ImageInput() {{
                                                                altText = "voluptatibus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 604846;
                                                                }};
                                                                sourceUri = "voluptate";
                                                            }};
                                                            isOther = false;
                                                            value = "cum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "doloremque";
                                                            image = new ImageInput() {{
                                                                altText = "reprehenderit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 979587;
                                                                }};
                                                                sourceUri = "dicta";
                                                            }};
                                                            isOther = false;
                                                            value = "corporis";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "iusto";
                                                            image = new ImageInput() {{
                                                                altText = "dicta";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 317983;
                                                                }};
                                                                sourceUri = "accusamus";
                                                            }};
                                                            isOther = false;
                                                            value = "commodi";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "quae";
                                                            image = new ImageInput() {{
                                                                altText = "ipsum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 565189;
                                                                }};
                                                                sourceUri = "excepturi";
                                                            }};
                                                            isOther = false;
                                                            value = "pariatur";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "RADIO";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "praesentium";
                                                    maxFileSize = "rem";
                                                    maxFiles = 916723;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("AUDIO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "veritatis";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "itaque";
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
                                                        }};
                                                        text = "magni";
                                                    }};
                                                    pointValue = 828940;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "alias";
                                                                    uri = "http://rapid-moat.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "facilis";
                                                                    youtubeUri = "tempore";
                                                                }};
                                                            }}),
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
                                                        }};
                                                        text = "provident";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sint";
                                                                    uri = "https://edible-tectonics.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolorum";
                                                                    youtubeUri = "in";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "in";
                                                                    uri = "https://wonderful-proof-reader.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "magnam";
                                                                    youtubeUri = "cumque";
                                                                }};
                                                            }}),
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
                                                        }};
                                                        text = "blanditiis";
                                                    }};
                                                }};
                                                questionId = "deleniti";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 230533;
                                                    highLabel = "deserunt";
                                                    low = 394869;
                                                    lowLabel = "vel";
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
                                            altText = "natus";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 474867;
                                            }};
                                            sourceUri = "perferendis";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "distinctio";
                                                        image = new ImageInput() {{
                                                            altText = "id";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 290077;
                                                            }};
                                                            sourceUri = "suscipit";
                                                        }};
                                                        isOther = false;
                                                        value = "natus";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "eum";
                                                        image = new ImageInput() {{
                                                            altText = "vero";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 102863;
                                                            }};
                                                            sourceUri = "magnam";
                                                        }};
                                                        isOther = false;
                                                        value = "et";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHECKBOX";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "ullam";
                                                maxFileSize = "provident";
                                                maxFiles = 551816;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("FILE_TYPE_UNSPECIFIED"),
                                                    add("PDF"),
                                                    add("AUDIO"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "ad";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "eum";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "dolor";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "odit";
                                                                uri = "http://bumpy-hosiery.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "debitis";
                                                                youtubeUri = "eius";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "maxime";
                                                                uri = "https://rotating-identification.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "architecto";
                                                                youtubeUri = "repudiandae";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ullam";
                                                                uri = "https://knobby-zither.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "sed";
                                                                youtubeUri = "saepe";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "pariatur";
                                                                uri = "http://cute-lens.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "magni";
                                                                youtubeUri = "sunt";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "quo";
                                                }};
                                                pointValue = 848009;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "maxime";
                                                                uri = "http://nimble-caution.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "accusantium";
                                                                youtubeUri = "ab";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "maiores";
                                                                uri = "https://harmonious-in-joke.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "nam";
                                                                youtubeUri = "eaque";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "pariatur";
                                                                uri = "http://wise-airbag.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "amet";
                                                                youtubeUri = "aut";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "cumque";
                                                                uri = "http://wasteful-rectangle.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dolores";
                                                                youtubeUri = "quis";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "totam";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "eaque";
                                                                uri = "http://disfigured-collapse.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dolores";
                                                                youtubeUri = "minus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quam";
                                                                uri = "http://trusty-filter.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "recusandae";
                                                                youtubeUri = "omnis";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "facilis";
                                                }};
                                            }};
                                            questionId = "perspiciatis";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 783645;
                                                highLabel = "consequuntur";
                                                low = 500026;
                                                lowLabel = "error";
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
                                        put("occaecati", "rerum");
                                    }};
                                    title = "Mrs.";
                                    videoItem = new VideoItem() {{
                                        caption = "asperiores";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 267262;
                                            }};
                                            youtubeUri = "iste";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 679091;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 535633;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 864282;
                                }};
                                originalLocation = new Location() {{
                                    index = 589910;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "nobis";
                                    title = "Miss";
                                }};
                                updateMask = "delectus";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "quaerat";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "quos";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 212390;
                                            }};
                                            sourceUri = "dolorem";
                                        }};
                                    }};
                                    itemId = "dolor";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("ipsum", "hic");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "voluptate";
                                                        image = new ImageInput() {{
                                                            altText = "dignissimos";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 227414;
                                                            }};
                                                            sourceUri = "dolorum";
                                                        }};
                                                        isOther = false;
                                                        value = "numquam";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "ipsa";
                                                        image = new ImageInput() {{
                                                            altText = "ipsa";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 487838;
                                                            }};
                                                            sourceUri = "quaerat";
                                                        }};
                                                        isOther = false;
                                                        value = "accusamus";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "voluptatibus";
                                                        image = new ImageInput() {{
                                                            altText = "voluptas";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 179603;
                                                            }};
                                                            sourceUri = "atque";
                                                        }};
                                                        isOther = false;
                                                        value = "sit";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "ab";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 679393;
                                            }};
                                            sourceUri = "iusto";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "omnis";
                                                            image = new ImageInput() {{
                                                                altText = "necessitatibus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 990339;
                                                                }};
                                                                sourceUri = "nihil";
                                                            }};
                                                            isOther = false;
                                                            value = "ipsum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "id";
                                                            image = new ImageInput() {{
                                                                altText = "saepe";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 137220;
                                                                }};
                                                                sourceUri = "perferendis";
                                                            }};
                                                            isOther = false;
                                                            value = "amet";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "accusamus";
                                                            image = new ImageInput() {{
                                                                altText = "ad";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 383464;
                                                                }};
                                                                sourceUri = "deserunt";
                                                            }};
                                                            isOther = false;
                                                            value = "provident";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "RADIO";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "repellendus";
                                                    maxFileSize = "totam";
                                                    maxFiles = 628982;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("VIDEO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "tempora";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "vel";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "enim";
                                                                    uri = "http://well-lit-literature.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sit";
                                                                    youtubeUri = "expedita";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "neque";
                                                                    uri = "http://improbable-redhead.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "deserunt";
                                                                    youtubeUri = "quam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ipsum";
                                                    }};
                                                    pointValue = 277628;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cupiditate";
                                                                    uri = "https://tough-reunion.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "laborum";
                                                                    youtubeUri = "totam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "incidunt";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolores";
                                                                    uri = "https://rotten-grandfather.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "molestias";
                                                                    youtubeUri = "temporibus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "qui";
                                                    }};
                                                }};
                                                questionId = "neque";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 164959;
                                                    highLabel = "odio";
                                                    low = 124833;
                                                    lowLabel = "ullam";
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
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "voluptatem";
                                                            image = new ImageInput() {{
                                                                altText = "cumque";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 748664;
                                                                }};
                                                                sourceUri = "et";
                                                            }};
                                                            isOther = false;
                                                            value = "saepe";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "veritatis";
                                                            image = new ImageInput() {{
                                                                altText = "nobis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 731694;
                                                                }};
                                                                sourceUri = "cupiditate";
                                                            }};
                                                            isOther = false;
                                                            value = "aperiam";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "dolorem";
                                                            image = new ImageInput() {{
                                                                altText = "dolore";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 240829;
                                                                }};
                                                                sourceUri = "dolorum";
                                                            }};
                                                            isOther = false;
                                                            value = "architecto";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHOICE_TYPE_UNSPECIFIED";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "aut";
                                                    maxFileSize = "quas";
                                                    maxFiles = 929530;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("PDF"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "porro";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "doloribus";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "ut";
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
                                                                    displayText = "qui";
                                                                    uri = "http://magnificent-kangaroo.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptatibus";
                                                                    youtubeUri = "quisquam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vero";
                                                                    uri = "https://glorious-crash.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptate";
                                                                    youtubeUri = "consectetur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vero";
                                                                    uri = "https://liquid-underweight.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quod";
                                                                    youtubeUri = "odio";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "similique";
                                                    }};
                                                    pointValue = 708548;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ducimus";
                                                                    uri = "http://terrible-status.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "natus";
                                                                    youtubeUri = "impedit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aut";
                                                                    uri = "https://grateful-stumbling.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "porro";
                                                                    youtubeUri = "maiores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "doloribus";
                                                                    uri = "http://silver-lanai.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "officia";
                                                                    youtubeUri = "tempora";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ipsam";
                                                                    uri = "http://concrete-hill.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "magnam";
                                                                    youtubeUri = "ratione";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ex";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dicta";
                                                                    uri = "http://wordy-bother.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nulla";
                                                                    youtubeUri = "excepturi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatibus";
                                                                    uri = "http://well-worn-sequence.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ea";
                                                                    youtubeUri = "impedit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "corporis";
                                                                    uri = "http://husky-bid.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ea";
                                                                    youtubeUri = "quo";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "consectetur";
                                                    }};
                                                }};
                                                questionId = "recusandae";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 325310;
                                                    highLabel = "eaque";
                                                    low = 952871;
                                                    lowLabel = "libero";
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
                                            altText = "aut";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 533466;
                                            }};
                                            sourceUri = "impedit";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "accusamus";
                                                        image = new ImageInput() {{
                                                            altText = "inventore";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 89603;
                                                            }};
                                                            sourceUri = "dolorum";
                                                        }};
                                                        isOther = false;
                                                        value = "laborum";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "velit";
                                                        image = new ImageInput() {{
                                                            altText = "eum";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 752135;
                                                            }};
                                                            sourceUri = "quas";
                                                        }};
                                                        isOther = false;
                                                        value = "assumenda";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "voluptas";
                                                maxFileSize = "libero";
                                                maxFiles = 96549;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("DOCUMENT"),
                                                    add("ANY"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "ipsa";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "molestiae";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "magnam";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "eius";
                                                                uri = "http://jolly-lord.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "reprehenderit";
                                                                youtubeUri = "quidem";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "fugiat";
                                                                uri = "http://infantile-geek.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "eos";
                                                                youtubeUri = "praesentium";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "quisquam";
                                                }};
                                                pointValue = 86377;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "id";
                                                                uri = "https://dishonest-screw.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quo";
                                                                youtubeUri = "fuga";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "eius";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "voluptas";
                                                                uri = "http://official-admin.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "debitis";
                                                                youtubeUri = "ipsam";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "aspernatur";
                                                }};
                                            }};
                                            questionId = "sequi";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Miss";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 459856;
                                                highLabel = "recusandae";
                                                low = 44612;
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
                                        put("dignissimos", "inventore");
                                        put("nihil", "totam");
                                        put("accusamus", "aliquam");
                                        put("odio", "occaecati");
                                    }};
                                    title = "Ms.";
                                    videoItem = new VideoItem() {{
                                        caption = "sapiente";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 645570;
                                            }};
                                            youtubeUri = "molestiae";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 35362;
                                }};
                                updateMask = "porro";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "eum";
                            }};
                        }}),
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "quas";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "praesentium";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 536178;
                                            }};
                                            sourceUri = "fugit";
                                        }};
                                    }};
                                    itemId = "fuga";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("incidunt", "atque");
                                        put("explicabo", "minima");
                                        put("nisi", "fugit");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "ratione";
                                                        image = new ImageInput() {{
                                                            altText = "explicabo";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 578922;
                                                            }};
                                                            sourceUri = "atque";
                                                        }};
                                                        isOther = false;
                                                        value = "et";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "eveniet";
                                                        image = new ImageInput() {{
                                                            altText = "accusamus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 458604;
                                                            }};
                                                            sourceUri = "quod";
                                                        }};
                                                        isOther = false;
                                                        value = "nam";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "aliquid";
                                                        image = new ImageInput() {{
                                                            altText = "quasi";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 426306;
                                                            }};
                                                            sourceUri = "harum";
                                                        }};
                                                        isOther = false;
                                                        value = "molestiae";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "occaecati";
                                                        image = new ImageInput() {{
                                                            altText = "minima";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 756779;
                                                            }};
                                                            sourceUri = "sit";
                                                        }};
                                                        isOther = false;
                                                        value = "culpa";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHECKBOX";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "adipisci";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 160538;
                                            }};
                                            sourceUri = "consequatur";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "consectetur";
                                                            image = new ImageInput() {{
                                                                altText = "esse";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 590984;
                                                                }};
                                                                sourceUri = "a";
                                                            }};
                                                            isOther = false;
                                                            value = "nulla";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "esse";
                                                            image = new ImageInput() {{
                                                                altText = "quasi";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 621679;
                                                                }};
                                                                sourceUri = "sint";
                                                            }};
                                                            isOther = false;
                                                            value = "pariatur";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "quia";
                                                    maxFileSize = "eveniet";
                                                    maxFiles = 992430;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                        add("ANY"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                        add("PDF"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "aliquid";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "tenetur";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "quae";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vel";
                                                                    uri = "http://extra-small-recession.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "soluta";
                                                                    youtubeUri = "accusantium";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquam";
                                                                    uri = "https://clear-fly.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ullam";
                                                                    youtubeUri = "nisi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aut";
                                                                    uri = "https://dense-stallion.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "deleniti";
                                                                    youtubeUri = "itaque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolorum";
                                                                    uri = "http://paltry-utensil.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "at";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "voluptate";
                                                    }};
                                                    pointValue = 55965;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "veritatis";
                                                                    uri = "http://enormous-orator.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "accusantium";
                                                                    youtubeUri = "rem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aut";
                                                                    uri = "https://inconsequential-performance.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "corrupti";
                                                                    youtubeUri = "non";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "voluptatem";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "occaecati";
                                                                    uri = "http://sneaky-cardigan.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "aut";
                                                                    youtubeUri = "dignissimos";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "dicta";
                                                    }};
                                                }};
                                                questionId = "maiores";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Miss";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 244651;
                                                    highLabel = "voluptatibus";
                                                    low = 374323;
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
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "quaerat";
                                                            image = new ImageInput() {{
                                                                altText = "consequuntur";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 638762;
                                                                }};
                                                                sourceUri = "maxime";
                                                            }};
                                                            isOther = false;
                                                            value = "dignissimos";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "asperiores";
                                                    maxFileSize = "nemo";
                                                    maxFiles = 65304;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("IMAGE"),
                                                        add("VIDEO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "ab";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "adipisci";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "id";
                                                                    uri = "http://everlasting-parking.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "recusandae";
                                                                    youtubeUri = "totam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "fugiat";
                                                                    uri = "http://lonely-mentor.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "labore";
                                                                    youtubeUri = "possimus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "facilis";
                                                                    uri = "https://immense-icing.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "assumenda";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "nemo";
                                                    }};
                                                    pointValue = 924967;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aperiam";
                                                                    uri = "https://emotional-ignorant.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "earum";
                                                                    youtubeUri = "facere";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "numquam";
                                                                    uri = "https://helpless-warming.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "saepe";
                                                                    youtubeUri = "necessitatibus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "dolore";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "asperiores";
                                                                    uri = "http://excellent-crystal.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dignissimos";
                                                                    youtubeUri = "a";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "debitis";
                                                    }};
                                                }};
                                                questionId = "consectetur";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 689768;
                                                    highLabel = "laboriosam";
                                                    low = 58356;
                                                    lowLabel = "voluptates";
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
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "accusamus";
                                                            image = new ImageInput() {{
                                                                altText = "similique";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 132815;
                                                                }};
                                                                sourceUri = "voluptas";
                                                            }};
                                                            isOther = false;
                                                            value = "voluptas";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "minima";
                                                            image = new ImageInput() {{
                                                                altText = "nobis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 237807;
                                                                }};
                                                                sourceUri = "minus";
                                                            }};
                                                            isOther = false;
                                                            value = "dolores";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "in";
                                                            image = new ImageInput() {{
                                                                altText = "dolore";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 885963;
                                                                }};
                                                                sourceUri = "temporibus";
                                                            }};
                                                            isOther = false;
                                                            value = "ullam";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHOICE_TYPE_UNSPECIFIED";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "cum";
                                                    maxFileSize = "blanditiis";
                                                    maxFiles = 555361;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("DOCUMENT"),
                                                        add("PDF"),
                                                        add("DRAWING"),
                                                        add("VIDEO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "hic";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "exercitationem";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "nobis";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "rerum";
                                                                    uri = "http://wide-carnation.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "facilis";
                                                                    youtubeUri = "voluptate";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "expedita";
                                                    }};
                                                    pointValue = 70869;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolore";
                                                                    uri = "https://criminal-id.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quidem";
                                                                    youtubeUri = "explicabo";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptas";
                                                                    uri = "https://burly-geometry.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "debitis";
                                                                    youtubeUri = "illo";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "reiciendis";
                                                                    uri = "http://motionless-whisker.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sed";
                                                                    youtubeUri = "provident";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "eius";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptate";
                                                                    uri = "https://ideal-amendment.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "officiis";
                                                                    youtubeUri = "praesentium";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "facilis";
                                                                    uri = "http://feline-futon.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rem";
                                                                    youtubeUri = "sit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nobis";
                                                                    uri = "https://glass-eyelid.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "nulla";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "magni";
                                                    }};
                                                }};
                                                questionId = "aperiam";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 253642;
                                                    highLabel = "veniam";
                                                    low = 446135;
                                                    lowLabel = "officiis";
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
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "exercitationem";
                                                            image = new ImageInput() {{
                                                                altText = "praesentium";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 386827;
                                                                }};
                                                                sourceUri = "dolorum";
                                                            }};
                                                            isOther = false;
                                                            value = "voluptatum";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "hic";
                                                    maxFileSize = "expedita";
                                                    maxFiles = 892863;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("PDF"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "officia";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "dolorum";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "accusamus";
                                                                    uri = "http://monthly-chapter.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fugiat";
                                                                    youtubeUri = "voluptatem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "culpa";
                                                                    uri = "https://forceful-activity.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ipsam";
                                                                    youtubeUri = "sit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatum";
                                                                    uri = "https://valid-forestry.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "blanditiis";
                                                                    youtubeUri = "ex";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "sed";
                                                    }};
                                                    pointValue = 24313;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nostrum";
                                                                    uri = "https://phony-ad.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "dolorem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "harum";
                                                                    uri = "http://burly-morsel.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quidem";
                                                                    youtubeUri = "atque";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "laborum";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "tenetur";
                                                                    uri = "http://adorable-cruelty.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptate";
                                                                    youtubeUri = "unde";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "reiciendis";
                                                                    uri = "https://talkative-volcano.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "perferendis";
                                                                    youtubeUri = "est";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quidem";
                                                                    uri = "http://stupendous-pray.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "mollitia";
                                                                    youtubeUri = "veniam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "voluptatem";
                                                    }};
                                                }};
                                                questionId = "quisquam";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 97243;
                                                    highLabel = "atque";
                                                    low = 442036;
                                                    lowLabel = "asperiores";
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
                                            altText = "totam";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 693957;
                                            }};
                                            sourceUri = "maxime";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "amet";
                                                        image = new ImageInput() {{
                                                            altText = "assumenda";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 539118;
                                                            }};
                                                            sourceUri = "error";
                                                        }};
                                                        isOther = false;
                                                        value = "officiis";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "accusamus";
                                                maxFileSize = "natus";
                                                maxFiles = 328303;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("SPREADSHEET"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "corrupti";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "at";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "error";
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
                                                                displayText = "repudiandae";
                                                                uri = "https://modest-cactus.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dolorum";
                                                                youtubeUri = "repellendus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "labore";
                                                                uri = "https://arctic-tracking.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "accusantium";
                                                                youtubeUri = "beatae";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "dolores";
                                                }};
                                                pointValue = 316488;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "officiis";
                                                                uri = "https://international-dame.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "occaecati";
                                                                youtubeUri = "consequuntur";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "fugit";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "molestiae";
                                                                uri = "https://delirious-representation.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "necessitatibus";
                                                                youtubeUri = "ratione";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "laborum";
                                                }};
                                            }};
                                            questionId = "distinctio";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Ms.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 523006;
                                                highLabel = "aliquam";
                                                low = 320565;
                                                lowLabel = "repellat";
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
                                        put("corporis", "perspiciatis");
                                    }};
                                    title = "Ms.";
                                    videoItem = new VideoItem() {{
                                        caption = "mollitia";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 5189;
                                            }};
                                            youtubeUri = "maiores";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 970222;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 174658;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 663866;
                                }};
                                originalLocation = new Location() {{
                                    index = 327988;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "dolore";
                                    title = "Miss";
                                }};
                                updateMask = "nesciunt";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "quae";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "recusandae";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 309251;
                                            }};
                                            sourceUri = "molestiae";
                                        }};
                                    }};
                                    itemId = "ex";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("culpa", "adipisci");
                                        put("debitis", "laudantium");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "recusandae";
                                                        image = new ImageInput() {{
                                                            altText = "esse";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 337477;
                                                            }};
                                                            sourceUri = "eum";
                                                        }};
                                                        isOther = false;
                                                        value = "reiciendis";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "aspernatur";
                                                        image = new ImageInput() {{
                                                            altText = "ullam";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 657020;
                                                            }};
                                                            sourceUri = "nostrum";
                                                        }};
                                                        isOther = false;
                                                        value = "mollitia";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHECKBOX";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "possimus";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 402767;
                                            }};
                                            sourceUri = "aliquid";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "ullam";
                                                            image = new ImageInput() {{
                                                                altText = "in";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 937636;
                                                                }};
                                                                sourceUri = "officia";
                                                            }};
                                                            isOther = false;
                                                            value = "laborum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "modi";
                                                            image = new ImageInput() {{
                                                                altText = "voluptatibus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 889794;
                                                                }};
                                                                sourceUri = "sapiente";
                                                            }};
                                                            isOther = false;
                                                            value = "cumque";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "rerum";
                                                            image = new ImageInput() {{
                                                                altText = "tempora";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 82057;
                                                                }};
                                                                sourceUri = "fugit";
                                                            }};
                                                            isOther = false;
                                                            value = "cumque";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "perferendis";
                                                            image = new ImageInput() {{
                                                                altText = "velit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 432281;
                                                                }};
                                                                sourceUri = "eius";
                                                            }};
                                                            isOther = false;
                                                            value = "rem";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "impedit";
                                                    maxFileSize = "eos";
                                                    maxFiles = 958741;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("ANY"),
                                                        add("PRESENTATION"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "cupiditate";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "earum";
                                                                    uri = "https://warlike-station.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "earum";
                                                                    youtubeUri = "perspiciatis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "maiores";
                                                                    uri = "https://icky-seal.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolorem";
                                                                    youtubeUri = "fugit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cumque";
                                                                    uri = "https://deserted-piano.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nulla";
                                                                    youtubeUri = "consequatur";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quasi";
                                                    }};
                                                    pointValue = 90233;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "natus";
                                                                    uri = "https://hidden-deal.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "magni";
                                                                    youtubeUri = "doloribus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nulla";
                                                                    uri = "https://babyish-dissemination.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "molestiae";
                                                                    youtubeUri = "dicta";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "iusto";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "praesentium";
                                                                    uri = "https://wicked-hellcat.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fugiat";
                                                                    youtubeUri = "doloremque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dicta";
                                                                    uri = "http://fat-infant.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "consectetur";
                                                                    youtubeUri = "aliquid";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ipsa";
                                                    }};
                                                }};
                                                questionId = "laborum";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 344718;
                                                    highLabel = "fugiat";
                                                    low = 713767;
                                                    lowLabel = "aliquid";
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
                                                alignment = "LEFT";
                                                width = 399161;
                                            }};
                                            sourceUri = "perferendis";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "iste";
                                                        image = new ImageInput() {{
                                                            altText = "id";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 625358;
                                                            }};
                                                            sourceUri = "possimus";
                                                        }};
                                                        isOther = false;
                                                        value = "voluptates";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "laborum";
                                                        image = new ImageInput() {{
                                                            altText = "libero";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 536923;
                                                            }};
                                                            sourceUri = "enim";
                                                        }};
                                                        isOther = false;
                                                        value = "vitae";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "ex";
                                                maxFileSize = "quo";
                                                maxFiles = 405373;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("PRESENTATION"),
                                                    add("IMAGE"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "molestias";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "culpa";
                                                                uri = "http://well-off-tax.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "fuga";
                                                                youtubeUri = "pariatur";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "debitis";
                                                                uri = "http://able-makeup.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ex";
                                                                youtubeUri = "sapiente";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "rem";
                                                }};
                                                pointValue = 796320;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "asperiores";
                                                                uri = "http://gross-album.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "totam";
                                                                youtubeUri = "impedit";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quibusdam";
                                                                uri = "https://harmonious-parenthesis.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "aliquam";
                                                                youtubeUri = "inventore";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "deleniti";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "tempora";
                                                                uri = "http://acidic-bower.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "modi";
                                                                youtubeUri = "fugit";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "ab";
                                                }};
                                            }};
                                            questionId = "laudantium";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 222658;
                                                highLabel = "fugiat";
                                                low = 369490;
                                                lowLabel = "consequuntur";
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
                                        put("quas", "eveniet");
                                    }};
                                    title = "Miss";
                                    videoItem = new VideoItem() {{
                                        caption = "officiis";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 897277;
                                            }};
                                            youtubeUri = "sed";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 332191;
                                }};
                                updateMask = "nesciunt";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "expedita";
                            }};
                        }}),
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "eum";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "vel";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 301692;
                                            }};
                                            sourceUri = "exercitationem";
                                        }};
                                    }};
                                    itemId = "ab";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("autem", "nobis");
                                        put("laboriosam", "recusandae");
                                        put("consequuntur", "voluptatem");
                                        put("exercitationem", "necessitatibus");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "at";
                                                        image = new ImageInput() {{
                                                            altText = "vero";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 690785;
                                                            }};
                                                            sourceUri = "sequi";
                                                        }};
                                                        isOther = false;
                                                        value = "doloribus";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "optio";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 364544;
                                            }};
                                            sourceUri = "voluptate";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "numquam";
                                                            image = new ImageInput() {{
                                                                altText = "nemo";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 260904;
                                                                }};
                                                                sourceUri = "aspernatur";
                                                            }};
                                                            isOther = false;
                                                            value = "ducimus";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "fuga";
                                                            image = new ImageInput() {{
                                                                altText = "laudantium";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 97493;
                                                                }};
                                                                sourceUri = "rem";
                                                            }};
                                                            isOther = false;
                                                            value = "fugiat";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "nisi";
                                                            image = new ImageInput() {{
                                                                altText = "consequuntur";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 46806;
                                                                }};
                                                                sourceUri = "cupiditate";
                                                            }};
                                                            isOther = false;
                                                            value = "reiciendis";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "alias";
                                                    maxFileSize = "omnis";
                                                    maxFiles = 178580;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("PDF"),
                                                        add("ANY"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "accusamus";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "voluptatibus";
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
                                                                    displayText = "delectus";
                                                                    uri = "http://lumbering-sibling.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "temporibus";
                                                                    youtubeUri = "quos";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "commodi";
                                                                    uri = "https://impassioned-local.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "modi";
                                                                    youtubeUri = "nam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vero";
                                                                    uri = "http://harmful-heron.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quasi";
                                                                    youtubeUri = "non";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "maiores";
                                                    }};
                                                    pointValue = 318233;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nulla";
                                                                    uri = "https://joyous-fourths.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "est";
                                                                    youtubeUri = "quis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sint";
                                                                    uri = "https://soggy-usher.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "asperiores";
                                                                    youtubeUri = "ex";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptas";
                                                                    uri = "https://whole-banyan.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fuga";
                                                                    youtubeUri = "laborum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "consectetur";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "atque";
                                                                    uri = "http://sociable-class.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "repudiandae";
                                                                    youtubeUri = "nam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "dolore";
                                                    }};
                                                }};
                                                questionId = "iusto";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Ms.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 194023;
                                                    highLabel = "dignissimos";
                                                    low = 205566;
                                                    lowLabel = "quo";
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
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "iure";
                                                            image = new ImageInput() {{
                                                                altText = "odit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 426904;
                                                                }};
                                                                sourceUri = "magnam";
                                                            }};
                                                            isOther = false;
                                                            value = "quibusdam";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "facere";
                                                            image = new ImageInput() {{
                                                                altText = "libero";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 975425;
                                                                }};
                                                                sourceUri = "quia";
                                                            }};
                                                            isOther = false;
                                                            value = "porro";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "velit";
                                                            image = new ImageInput() {{
                                                                altText = "illo";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 424663;
                                                                }};
                                                                sourceUri = "ea";
                                                            }};
                                                            isOther = false;
                                                            value = "beatae";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "excepturi";
                                                    maxFileSize = "eum";
                                                    maxFiles = 246557;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("DRAWING"),
                                                        add("AUDIO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "impedit";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "iste";
                                                                    uri = "https://adorable-goodbye.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "velit";
                                                                    youtubeUri = "laborum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "non";
                                                                    uri = "http://left-amber.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "consequatur";
                                                                    youtubeUri = "officia";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "recusandae";
                                                                    uri = "http://required-gasket.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "placeat";
                                                                    youtubeUri = "perspiciatis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "expedita";
                                                                    uri = "https://weird-income.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "unde";
                                                                    youtubeUri = "necessitatibus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "animi";
                                                    }};
                                                    pointValue = 769967;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "corporis";
                                                                    uri = "https://petty-indication.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "veritatis";
                                                                    youtubeUri = "vero";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consectetur";
                                                                    uri = "http://bogus-counsel.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "qui";
                                                                    youtubeUri = "iste";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ex";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "soluta";
                                                                    uri = "https://mellow-pony.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fugit";
                                                                    youtubeUri = "alias";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "magni";
                                                                    uri = "http://belated-bandolier.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "neque";
                                                                    youtubeUri = "exercitationem";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "itaque";
                                                    }};
                                                }};
                                                questionId = "et";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 602229;
                                                    highLabel = "nulla";
                                                    low = 714376;
                                                    lowLabel = "maxime";
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
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "nostrum";
                                                            image = new ImageInput() {{
                                                                altText = "omnis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 115661;
                                                                }};
                                                                sourceUri = "id";
                                                            }};
                                                            isOther = false;
                                                            value = "libero";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "officia";
                                                    maxFileSize = "quos";
                                                    maxFiles = 811939;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("SPREADSHEET"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
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
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "neque";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 796397;
                                            }};
                                            sourceUri = "eum";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "magnam";
                                                        image = new ImageInput() {{
                                                            altText = "voluptates";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 731744;
                                                            }};
                                                            sourceUri = "aperiam";
                                                        }};
                                                        isOther = false;
                                                        value = "libero";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "labore";
                                                        image = new ImageInput() {{
                                                            altText = "totam";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 375994;
                                                            }};
                                                            sourceUri = "quo";
                                                        }};
                                                        isOther = false;
                                                        value = "velit";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "fuga";
                                                maxFileSize = "nostrum";
                                                maxFiles = 669237;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("AUDIO"),
                                                    add("IMAGE"),
                                                    add("VIDEO"),
                                                    add("ANY"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "pariatur";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "nemo";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "reprehenderit";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "aperiam";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "minima";
                                                                uri = "http://lone-mission.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "error";
                                                                youtubeUri = "veritatis";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ducimus";
                                                                uri = "http://tragic-tuba.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "optio";
                                                                youtubeUri = "ex";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "quaerat";
                                                }};
                                                pointValue = 416692;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "placeat";
                                                                uri = "https://gray-innovation.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "modi";
                                                                youtubeUri = "ipsa";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sint";
                                                                uri = "https://diligent-tower.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dicta";
                                                                youtubeUri = "earum";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "veniam";
                                                                uri = "https://decisive-real.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "consequuntur";
                                                                youtubeUri = "necessitatibus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "nobis";
                                                                uri = "http://lone-wholesale.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quasi";
                                                                youtubeUri = "laboriosam";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "pariatur";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "excepturi";
                                                                uri = "https://handy-encirclement.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "doloribus";
                                                                youtubeUri = "eligendi";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sint";
                                                                uri = "http://watchful-pickaxe.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "totam";
                                                                youtubeUri = "molestias";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "odio";
                                                                uri = "http://unselfish-breadfruit.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "iste";
                                                                youtubeUri = "assumenda";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "tempore";
                                                }};
                                            }};
                                            questionId = "libero";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mrs.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 38557;
                                                highLabel = "delectus";
                                                low = 773110;
                                                lowLabel = "cum";
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
                                        put("adipisci", "saepe");
                                    }};
                                    title = "Miss";
                                    videoItem = new VideoItem() {{
                                        caption = "doloremque";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 333072;
                                            }};
                                            youtubeUri = "libero";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 99733;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 584593;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 475589;
                                }};
                                originalLocation = new Location() {{
                                    index = 756654;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "possimus";
                                    title = "Mrs.";
                                }};
                                updateMask = "magnam";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "itaque";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "sed";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 330267;
                                            }};
                                            sourceUri = "consequuntur";
                                        }};
                                    }};
                                    itemId = "facere";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("odit", "pariatur");
                                        put("amet", "exercitationem");
                                        put("ab", "velit");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "nisi";
                                                        image = new ImageInput() {{
                                                            altText = "voluptatibus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 503748;
                                                            }};
                                                            sourceUri = "distinctio";
                                                        }};
                                                        isOther = false;
                                                        value = "nisi";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "nisi";
                                                        image = new ImageInput() {{
                                                            altText = "libero";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 815200;
                                                            }};
                                                            sourceUri = "facilis";
                                                        }};
                                                        isOther = false;
                                                        value = "ipsum";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "voluptatibus";
                                                        image = new ImageInput() {{
                                                            altText = "voluptatibus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 891581;
                                                            }};
                                                            sourceUri = "labore";
                                                        }};
                                                        isOther = false;
                                                        value = "rerum";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "reprehenderit";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 207296;
                                            }};
                                            sourceUri = "iusto";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "fugiat";
                                                            image = new ImageInput() {{
                                                                altText = "unde";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 495617;
                                                                }};
                                                                sourceUri = "dolor";
                                                            }};
                                                            isOther = false;
                                                            value = "dicta";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "porro";
                                                            image = new ImageInput() {{
                                                                altText = "vitae";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 458970;
                                                                }};
                                                                sourceUri = "fugiat";
                                                            }};
                                                            isOther = false;
                                                            value = "ad";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "enim";
                                                            image = new ImageInput() {{
                                                                altText = "delectus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 491201;
                                                                }};
                                                                sourceUri = "libero";
                                                            }};
                                                            isOther = false;
                                                            value = "illo";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHOICE_TYPE_UNSPECIFIED";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "incidunt";
                                                    maxFileSize = "accusamus";
                                                    maxFiles = 902581;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("PRESENTATION"),
                                                        add("ANY"),
                                                        add("AUDIO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "reprehenderit";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "praesentium";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "nemo";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "repellat";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sequi";
                                                                    uri = "http://minor-beech.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "assumenda";
                                                                    youtubeUri = "aliquam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quisquam";
                                                                    uri = "https://male-trailpatrol.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "maxime";
                                                                    youtubeUri = "aspernatur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nam";
                                                                    uri = "https://nautical-nest.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rerum";
                                                                    youtubeUri = "dignissimos";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "corporis";
                                                                    uri = "https://pleasant-spectrograph.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolorem";
                                                                    youtubeUri = "commodi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "impedit";
                                                    }};
                                                    pointValue = 415033;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatem";
                                                                    uri = "http://baggy-cultivar.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "praesentium";
                                                                    youtubeUri = "quidem";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "cum";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quasi";
                                                                    uri = "http://male-argument.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "iusto";
                                                                    youtubeUri = "amet";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "provident";
                                                    }};
                                                }};
                                                questionId = "dolorum";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 592880;
                                                    highLabel = "repudiandae";
                                                    low = 10063;
                                                    lowLabel = "nemo";
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
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "facilis";
                                                            image = new ImageInput() {{
                                                                altText = "corrupti";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 574092;
                                                                }};
                                                                sourceUri = "accusamus";
                                                            }};
                                                            isOther = false;
                                                            value = "eos";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "dicta";
                                                            image = new ImageInput() {{
                                                                altText = "voluptatem";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 224413;
                                                                }};
                                                                sourceUri = "sunt";
                                                            }};
                                                            isOther = false;
                                                            value = "a";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHOICE_TYPE_UNSPECIFIED";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "occaecati";
                                                    maxFileSize = "atque";
                                                    maxFiles = 107472;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("DOCUMENT"),
                                                        add("IMAGE"),
                                                        add("SPREADSHEET"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "rerum";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aperiam";
                                                                    uri = "http://zealous-decision-making.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "provident";
                                                                    youtubeUri = "consectetur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "eligendi";
                                                                    uri = "http://energetic-response.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "temporibus";
                                                                    youtubeUri = "officia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "amet";
                                                    }};
                                                    pointValue = 948541;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quo";
                                                                    uri = "https://these-pliers.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "vero";
                                                                    youtubeUri = "qui";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "consectetur";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "explicabo";
                                                                    uri = "http://green-interviewer.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ab";
                                                                    youtubeUri = "illo";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "hic";
                                                                    uri = "https://white-depth.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "in";
                                                                    youtubeUri = "exercitationem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "labore";
                                                                    uri = "http://vain-dirt.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "explicabo";
                                                                    youtubeUri = "accusamus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "rem";
                                                                    uri = "http://conventional-mallet.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptate";
                                                                    youtubeUri = "similique";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "minima";
                                                    }};
                                                }};
                                                questionId = "libero";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 24272;
                                                    highLabel = "modi";
                                                    low = 430116;
                                                    lowLabel = "nesciunt";
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
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "fugiat";
                                                            image = new ImageInput() {{
                                                                altText = "nostrum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 330600;
                                                                }};
                                                                sourceUri = "reiciendis";
                                                            }};
                                                            isOther = false;
                                                            value = "ab";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "aut";
                                                            image = new ImageInput() {{
                                                                altText = "aut";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 483753;
                                                                }};
                                                                sourceUri = "commodi";
                                                            }};
                                                            isOther = false;
                                                            value = "numquam";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "possimus";
                                                            image = new ImageInput() {{
                                                                altText = "voluptate";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 200637;
                                                                }};
                                                                sourceUri = "quaerat";
                                                            }};
                                                            isOther = false;
                                                            value = "itaque";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "sunt";
                                                    maxFileSize = "distinctio";
                                                    maxFiles = 481375;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                        add("IMAGE"),
                                                        add("DOCUMENT"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "fuga";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "alias";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aut";
                                                                    uri = "https://mad-speaker.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quae";
                                                                    youtubeUri = "eaque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "saepe";
                                                                    uri = "https://prime-strawman.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sed";
                                                                    youtubeUri = "voluptatem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "alias";
                                                                    uri = "https://warm-ancestor.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "qui";
                                                                    youtubeUri = "qui";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "necessitatibus";
                                                    }};
                                                    pointValue = 691508;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "beatae";
                                                                    uri = "http://familiar-ruckus.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "molestias";
                                                                    youtubeUri = "officia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "libero";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sequi";
                                                                    uri = "http://imaginative-schema.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "odit";
                                                                    youtubeUri = "velit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "reiciendis";
                                                                    uri = "https://tired-plot.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "accusamus";
                                                                    youtubeUri = "doloremque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nisi";
                                                                    uri = "https://vast-tomorrow.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rem";
                                                                    youtubeUri = "quia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ullam";
                                                    }};
                                                }};
                                                questionId = "quisquam";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 973017;
                                                    highLabel = "eligendi";
                                                    low = 62035;
                                                    lowLabel = "officiis";
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
                                            altText = "architecto";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 317898;
                                            }};
                                            sourceUri = "optio";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "facilis";
                                                        image = new ImageInput() {{
                                                            altText = "reiciendis";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 615058;
                                                            }};
                                                            sourceUri = "dicta";
                                                        }};
                                                        isOther = false;
                                                        value = "quos";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "dolore";
                                                        image = new ImageInput() {{
                                                            altText = "modi";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 807419;
                                                            }};
                                                            sourceUri = "modi";
                                                        }};
                                                        isOther = false;
                                                        value = "consequuntur";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "vero";
                                                        image = new ImageInput() {{
                                                            altText = "doloribus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 783397;
                                                            }};
                                                            sourceUri = "accusamus";
                                                        }};
                                                        isOther = false;
                                                        value = "totam";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "ab";
                                                maxFileSize = "sint";
                                                maxFiles = 472414;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("SPREADSHEET"),
                                                    add("SPREADSHEET"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "debitis";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "neque";
                                                                uri = "http://hateful-citron.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "reprehenderit";
                                                                youtubeUri = "distinctio";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "eius";
                                                                uri = "http://measly-whack.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "veniam";
                                                                youtubeUri = "saepe";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "neque";
                                                }};
                                                pointValue = 816365;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quos";
                                                                uri = "https://this-platform.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "velit";
                                                                youtubeUri = "vitae";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "nesciunt";
                                                                uri = "https://blank-zen.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "doloribus";
                                                                youtubeUri = "possimus";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "unde";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "explicabo";
                                                                uri = "http://obvious-rum.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quidem";
                                                                youtubeUri = "nesciunt";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "commodi";
                                                                uri = "https://damp-face.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "officia";
                                                                youtubeUri = "sint";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "ut";
                                                }};
                                            }};
                                            questionId = "numquam";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Dr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 236790;
                                                highLabel = "libero";
                                                low = 448386;
                                                lowLabel = "minima";
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
                                        put("minus", "ab");
                                        put("beatae", "hic");
                                    }};
                                    title = "Mrs.";
                                    videoItem = new VideoItem() {{
                                        caption = "quisquam";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 496548;
                                            }};
                                            youtubeUri = "fuga";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 326903;
                                }};
                                updateMask = "architecto";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "qui";
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "aliquid";
                        targetRevisionId = "magni";
                    }};
                }};
                accessToken = "incidunt";
                alt = "json";
                callback = "praesentium";
                fields = "dolor";
                formId = "exercitationem";
                key = "expedita";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "sit";
                uploadProtocol = "nemo";
            }}            

            FormsFormsBatchUpdateResponse res = sdk.forms.formsFormsBatchUpdate(req, new FormsFormsBatchUpdateSecurity() {{
                option1 = new FormsFormsBatchUpdateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchUpdateFormResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->