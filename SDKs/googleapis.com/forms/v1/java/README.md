# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurityOption3;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdatePathParams;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateQueryParams;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateRequest;
import org.openapis.openapi.models.operations.FormsFormsBatchUpdateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FormsFormsBatchUpdateRequest req = new FormsFormsBatchUpdateRequest() {{
                security = new FormsFormsBatchUpdateSecurity() {{
                    option1 = new FormsFormsBatchUpdateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FormsFormsBatchUpdatePathParams() {{
                    formId = "corrupti";
                }};
                queryParams = new FormsFormsBatchUpdateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new BatchUpdateFormRequestInput() {{
                    includeFormInResponse = false;
                    requests = new org.openapis.openapi.models.shared.RequestInput[]{{
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "iure";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "magnam";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 56713;
                                            }};
                                            sourceUri = "delectus";
                                        }};
                                    }};
                                    itemId = "tempora";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("molestiae", "minus");
                                        put("placeat", "voluptatum");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "nisi";
                                                        image = new ImageInput() {{
                                                            altText = "recusandae";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 71036;
                                                            }};
                                                            sourceUri = "quis";
                                                        }};
                                                        isOther = false;
                                                        value = "veritatis";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "perferendis";
                                                        image = new ImageInput() {{
                                                            altText = "ipsam";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 957156;
                                                            }};
                                                            sourceUri = "quo";
                                                        }};
                                                        isOther = false;
                                                        value = "odit";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "at";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 473608;
                                            }};
                                            sourceUri = "quod";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "porro";
                                                            image = new ImageInput() {{
                                                                altText = "dolorum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 720633;
                                                                }};
                                                                sourceUri = "officia";
                                                            }};
                                                            isOther = false;
                                                            value = "occaecati";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "deleniti";
                                                            image = new ImageInput() {{
                                                                altText = "hic";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 521848;
                                                                }};
                                                                sourceUri = "beatae";
                                                            }};
                                                            isOther = false;
                                                            value = "commodi";
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
                                                    folderId = "modi";
                                                    maxFileSize = "qui";
                                                    maxFiles = 774234;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("SPREADSHEET"),
                                                        add("DOCUMENT"),
                                                        add("DRAWING"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "perferendis";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "natus";
                                                                    uri = "http://passionate-crewman.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "laboriosam";
                                                                    youtubeUri = "hic";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "saepe";
                                                                    uri = "https://itchy-forager.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "iure";
                                                                    youtubeUri = "saepe";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quidem";
                                                    }};
                                                    pointValue = 99280;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                    whenWrong = new Feedback() {{
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
                                                }};
                                                questionId = "enim";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 778346;
                                                    highLabel = "sequi";
                                                    low = 949572;
                                                    lowLabel = "ipsam";
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
                                                            goToSectionId = "aut";
                                                            image = new ImageInput() {{
                                                                altText = "quasi";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 837945;
                                                                }};
                                                                sourceUri = "laborum";
                                                            }};
                                                            isOther = false;
                                                            value = "quasi";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "voluptatibus";
                                                            image = new ImageInput() {{
                                                                altText = "vero";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 509624;
                                                                }};
                                                                sourceUri = "voluptatibus";
                                                            }};
                                                            isOther = false;
                                                            value = "ipsa";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "voluptate";
                                                            image = new ImageInput() {{
                                                                altText = "cum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 39187;
                                                                }};
                                                                sourceUri = "reprehenderit";
                                                            }};
                                                            isOther = false;
                                                            value = "ut";
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
                                                    folderId = "dicta";
                                                    maxFileSize = "corporis";
                                                    maxFiles = 296140;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("ANY"),
                                                        add("PDF"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "accusamus";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "commodi";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quae";
                                                                    uri = "http://repentant-minnow.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "pariatur";
                                                                    youtubeUri = "modi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "praesentium";
                                                                    uri = "https://useful-bonnet.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sint";
                                                                    youtubeUri = "veritatis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "itaque";
                                                                    uri = "http://fruitful-adjective.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quibusdam";
                                                                    youtubeUri = "explicabo";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "deserunt";
                                                                    uri = "https://tempting-durian.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "qui";
                                                                    youtubeUri = "aliquid";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "cupiditate";
                                                    }};
                                                    pointValue = 552822;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "tempore";
                                                                    uri = "http://which-honor.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eligendi";
                                                                    youtubeUri = "sint";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquid";
                                                                    uri = "https://unlined-mole.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolor";
                                                                    youtubeUri = "debitis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "a";
                                                                    uri = "https://intrepid-ikebana.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "maiores";
                                                                    youtubeUri = "rerum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "dicta";
                                                    }};
                                                }};
                                                questionId = "magnam";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Miss";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 813798;
                                                    highLabel = "ea";
                                                    low = 396506;
                                                    lowLabel = "laborum";
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
                                                            goToSectionId = "occaecati";
                                                            image = new ImageInput() {{
                                                                altText = "enim";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 965417;
                                                                }};
                                                                sourceUri = "quidem";
                                                            }};
                                                            isOther = false;
                                                            value = "provident";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "id";
                                                            image = new ImageInput() {{
                                                                altText = "blanditiis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 956084;
                                                                }};
                                                                sourceUri = "amet";
                                                            }};
                                                            isOther = false;
                                                            value = "deserunt";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "vel";
                                                            image = new ImageInput() {{
                                                                altText = "natus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 474867;
                                                                }};
                                                                sourceUri = "perferendis";
                                                            }};
                                                            isOther = false;
                                                            value = "nihil";
                                                        }}),
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
                                                    }};
                                                    shuffle = false;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "eum";
                                                    maxFileSize = "vero";
                                                    maxFiles = 135474;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("DOCUMENT"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "excepturi";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "provident";
                                                                    uri = "https://noted-antling.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reiciendis";
                                                                    youtubeUri = "mollitia";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ad";
                                                                    uri = "http://easy-going-term.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nemo";
                                                                    youtubeUri = "quasi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "iure";
                                                    }};
                                                    pointValue = 984043;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "eius";
                                                                    uri = "https://miserly-pruner.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "architecto";
                                                                    youtubeUri = "architecto";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "repudiandae";
                                                                    uri = "http://safe-interconnection.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quibusdam";
                                                                    youtubeUri = "sed";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "saepe";
                                                                    uri = "https://another-circuit.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "natus";
                                                                    youtubeUri = "magni";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sunt";
                                                                    uri = "https://these-subroutine.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ea";
                                                                    youtubeUri = "excepturi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "odit";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                }};
                                                questionId = "aut";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Miss";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 359978;
                                                    highLabel = "hic";
                                                    low = 729991;
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
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "totam";
                                                            image = new ImageInput() {{
                                                                altText = "dignissimos";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 338985;
                                                                }};
                                                                sourceUri = "nesciunt";
                                                            }};
                                                            isOther = false;
                                                            value = "eos";
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
                                                    folderId = "dolores";
                                                    maxFileSize = "minus";
                                                    maxFiles = 463451;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
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
                                                                value = "recusandae";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "facilis";
                                                                    uri = "https://amusing-sediment.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "blanditiis";
                                                                    youtubeUri = "error";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "eaque";
                                                                    uri = "https://right-damage.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "earum";
                                                                    youtubeUri = "modi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "iste";
                                                                    uri = "https://minty-subgroup.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nobis";
                                                                    youtubeUri = "libero";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "delectus";
                                                    }};
                                                    pointValue = 311945;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquid";
                                                                    uri = "http://dopey-crewmate.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ipsum";
                                                                    youtubeUri = "hic";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "excepturi";
                                                                    uri = "https://jam-packed-kingdom.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "amet";
                                                                    youtubeUri = "dolorum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "numquam";
                                                                    uri = "http://awkward-azimuth.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "odio";
                                                                    youtubeUri = "quaerat";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "accusamus";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatibus";
                                                                    uri = "http://perky-collar.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sit";
                                                                    youtubeUri = "fugiat";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ab";
                                                                    uri = "https://rash-jeans.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolorum";
                                                                    youtubeUri = "deleniti";
                                                                }};
                                                            }}),
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
                                                        }};
                                                        text = "id";
                                                    }};
                                                }};
                                                questionId = "saepe";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 137220;
                                                    highLabel = "perferendis";
                                                    low = 229219;
                                                    lowLabel = "optio";
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
                                            altText = "accusamus";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 904425;
                                            }};
                                            sourceUri = "suscipit";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "minima";
                                                        image = new ImageInput() {{
                                                            altText = "repellendus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 628982;
                                                            }};
                                                            sourceUri = "alias";
                                                        }};
                                                        isOther = false;
                                                        value = "at";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "tempora";
                                                        image = new ImageInput() {{
                                                            altText = "vel";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 885338;
                                                            }};
                                                            sourceUri = "qui";
                                                        }};
                                                        isOther = false;
                                                        value = "dolorum";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "esse";
                                                        image = new ImageInput() {{
                                                            altText = "harum";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 215507;
                                                            }};
                                                            sourceUri = "quisquam";
                                                        }};
                                                        isOther = false;
                                                        value = "tenetur";
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
                                                folderId = "tempore";
                                                maxFileSize = "accusamus";
                                                maxFiles = 253941;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("DOCUMENT"),
                                                    add("AUDIO"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "nihil";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "sit";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "expedita";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sed";
                                                                uri = "http://self-assured-gale.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quam";
                                                                youtubeUri = "ipsum";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "incidunt";
                                                }};
                                                pointValue = 186458;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "maxime";
                                                                uri = "https://short-business.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "totam";
                                                                youtubeUri = "incidunt";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "aspernatur";
                                                                uri = "http://sandy-psychoanalyst.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quam";
                                                                youtubeUri = "molestias";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "temporibus";
                                                                uri = "http://dirty-chain.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "odio";
                                                                youtubeUri = "sunt";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "ullam";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "hic";
                                                                uri = "http://slushy-return.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "et";
                                                                youtubeUri = "saepe";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ipsum";
                                                                uri = "http://shrill-medium.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "cupiditate";
                                                                youtubeUri = "aperiam";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "delectus";
                                                                uri = "http://flimsy-duck.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dolorum";
                                                                youtubeUri = "architecto";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "quae";
                                                }};
                                            }};
                                            questionId = "aut";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Ms.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 929530;
                                                highLabel = "consequatur";
                                                low = 669917;
                                                lowLabel = "repellendus";
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
                                        put("doloribus", "ut");
                                        put("facilis", "cupiditate");
                                        put("qui", "quae");
                                        put("laudantium", "odio");
                                    }};
                                    title = "Ms.";
                                    videoItem = new VideoItem() {{
                                        caption = "voluptatibus";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 876506;
                                            }};
                                            youtubeUri = "omnis";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 338159;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 218403;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 961571;
                                }};
                                originalLocation = new Location() {{
                                    index = 455169;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "consectetur";
                                    title = "Dr.";
                                }};
                                updateMask = "tenetur";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "dignissimos";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "hic";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 799203;
                                            }};
                                            sourceUri = "odio";
                                        }};
                                    }};
                                    itemId = "similique";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("vero", "ducimus");
                                        put("dolore", "quibusdam");
                                        put("illum", "sequi");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "aut";
                                                        image = new ImageInput() {{
                                                            altText = "voluptatibus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 862310;
                                                            }};
                                                            sourceUri = "fugit";
                                                        }};
                                                        isOther = false;
                                                        value = "porro";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "doloribus";
                                                        image = new ImageInput() {{
                                                            altText = "iusto";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 497391;
                                                            }};
                                                            sourceUri = "alias";
                                                        }};
                                                        isOther = false;
                                                        value = "officia";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "ipsam";
                                                        image = new ImageInput() {{
                                                            altText = "ea";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 428224;
                                                            }};
                                                            sourceUri = "possimus";
                                                        }};
                                                        isOther = false;
                                                        value = "magnam";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "ex";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 120657;
                                            }};
                                            sourceUri = "dolor";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "nulla";
                                                            image = new ImageInput() {{
                                                                altText = "excepturi";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 343605;
                                                                }};
                                                                sourceUri = "sapiente";
                                                            }};
                                                            isOther = false;
                                                            value = "quisquam";
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
                                                    folderId = "ea";
                                                    maxFileSize = "impedit";
                                                    maxFiles = 359271;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("PRESENTATION"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "ea";
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
                                                                    displayText = "recusandae";
                                                                    uri = "http://general-authentication.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "libero";
                                                                    youtubeUri = "aut";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "aut";
                                                    }};
                                                    pointValue = 533466;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquam";
                                                                    uri = "http://unconscious-benefit.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "et";
                                                                    youtubeUri = "dolorum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laborum";
                                                                    uri = "https://evergreen-homogenate.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nobis";
                                                                    youtubeUri = "quas";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "assumenda";
                                                                    uri = "https://heavenly-receipt.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "tempora";
                                                                    youtubeUri = "numquam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "explicabo";
                                                                    uri = "https://aware-jackal.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "odio";
                                                                    youtubeUri = "eius";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "esse";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "rem";
                                                                    uri = "https://insubstantial-produce.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ut";
                                                                    youtubeUri = "eum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "suscipit";
                                                                    uri = "https://delayed-letter.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "veritatis";
                                                                    youtubeUri = "ipsa";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "id";
                                                    }};
                                                }};
                                                questionId = "quidem";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 778696;
                                                    highLabel = "illum";
                                                    low = 777408;
                                                    lowLabel = "fuga";
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
                                                            goToSectionId = "voluptas";
                                                            image = new ImageInput() {{
                                                                altText = "ab";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 9688;
                                                                }};
                                                                sourceUri = "tempora";
                                                            }};
                                                            isOther = false;
                                                            value = "debitis";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "aspernatur";
                                                            image = new ImageInput() {{
                                                                altText = "sequi";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 459856;
                                                                }};
                                                                sourceUri = "recusandae";
                                                            }};
                                                            isOther = false;
                                                            value = "aperiam";
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
                                                    folderId = "quod";
                                                    maxFileSize = "dignissimos";
                                                    maxFiles = 76956;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("DRAWING"),
                                                        add("VIDEO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "odio";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "occaecati";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sapiente";
                                                                    uri = "http://present-island.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "porro";
                                                                    youtubeUri = "eum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quas";
                                                                    uri = "https://cumbersome-mama.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fuga";
                                                                    youtubeUri = "mollitia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "incidunt";
                                                    }};
                                                    pointValue = 539224;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "minima";
                                                                    uri = "http://costly-vicinity.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ratione";
                                                                    youtubeUri = "explicabo";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "saepe";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "atque";
                                                                    uri = "http://jovial-toaster.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "veritatis";
                                                                    youtubeUri = "esse";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quod";
                                                                    uri = "https://turbulent-gravitas.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "saepe";
                                                                    youtubeUri = "vel";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "harum";
                                                                    uri = "http://right-mouse.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "distinctio";
                                                                    youtubeUri = "eligendi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "sit";
                                                    }};
                                                }};
                                                questionId = "culpa";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Miss";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 240020;
                                                    highLabel = "cumque";
                                                    low = 160538;
                                                    lowLabel = "consequatur";
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
                                                            goToSectionId = "sapiente";
                                                            image = new ImageInput() {{
                                                                altText = "consectetur";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 503427;
                                                                }};
                                                                sourceUri = "provident";
                                                            }};
                                                            isOther = false;
                                                            value = "a";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "quas";
                                                            image = new ImageInput() {{
                                                                altText = "esse";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 951875;
                                                                }};
                                                                sourceUri = "error";
                                                            }};
                                                            isOther = false;
                                                            value = "sint";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "possimus";
                                                            image = new ImageInput() {{
                                                                altText = "quia";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 992430;
                                                                }};
                                                                sourceUri = "facere";
                                                            }};
                                                            isOther = false;
                                                            value = "veritatis";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "quasi";
                                                            image = new ImageInput() {{
                                                                altText = "similique";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 398434;
                                                                }};
                                                                sourceUri = "tenetur";
                                                            }};
                                                            isOther = false;
                                                            value = "quae";
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
                                                    folderId = "vel";
                                                    maxFileSize = "in";
                                                    maxFiles = 258684;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("VIDEO"),
                                                        add("IMAGE"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "sapiente";
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
                                                                    displayText = "reprehenderit";
                                                                    uri = "http://horrible-aide.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "qui";
                                                                    youtubeUri = "quibusdam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ex";
                                                                    uri = "https://vicious-port.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "omnis";
                                                                    youtubeUri = "tenetur";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quasi";
                                                    }};
                                                    pointValue = 869489;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptate";
                                                                    uri = "http://gentle-bladder.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "adipisci";
                                                                    youtubeUri = "iste";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "temporibus";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "rem";
                                                                    uri = "http://majestic-hippopotamus.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ab";
                                                                    youtubeUri = "corrupti";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "non";
                                                    }};
                                                }};
                                                questionId = "voluptatem";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 580152;
                                                    highLabel = "numquam";
                                                    low = 771089;
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
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "dignissimos";
                                                            image = new ImageInput() {{
                                                                altText = "dicta";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 618480;
                                                                }};
                                                                sourceUri = "velit";
                                                            }};
                                                            isOther = false;
                                                            value = "voluptatibus";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "asperiores";
                                                            image = new ImageInput() {{
                                                                altText = "aperiam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 310067;
                                                                }};
                                                                sourceUri = "consequuntur";
                                                            }};
                                                            isOther = false;
                                                            value = "repellendus";
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
                                                    folderId = "maxime";
                                                    maxFileSize = "dignissimos";
                                                    maxFiles = 640024;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("PRESENTATION"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                        add("PRESENTATION"),
                                                        add("IMAGE"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "labore";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "ab";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "adipisci";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "fuga";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "suscipit";
                                                                    uri = "http://polite-placement.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "totam";
                                                                    youtubeUri = "fugiat";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vel";
                                                                    uri = "http://mysterious-highway.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "possimus";
                                                                    youtubeUri = "facilis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cum";
                                                                    uri = "http://intrepid-forehead.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "assumenda";
                                                                    youtubeUri = "nemo";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "recusandae";
                                                    }};
                                                    pointValue = 397533;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cum";
                                                                    uri = "http://irritating-fishbone.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "facere";
                                                                    youtubeUri = "numquam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "doloribus";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "reiciendis";
                                                                    uri = "https://untimely-termite.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sunt";
                                                                    youtubeUri = "asperiores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "adipisci";
                                                                    uri = "http://elegant-brick.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "a";
                                                                    youtubeUri = "debitis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "consectetur";
                                                    }};
                                                }};
                                                questionId = "corporis";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Miss";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 385237;
                                                    highLabel = "ipsa";
                                                    low = 916727;
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
                                            altText = "vitae";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 631126;
                                            }};
                                            sourceUri = "tempora";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "voluptas";
                                                        image = new ImageInput() {{
                                                            altText = "voluptas";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 748789;
                                                            }};
                                                            sourceUri = "dolorum";
                                                        }};
                                                        isOther = false;
                                                        value = "adipisci";
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
                                                folderId = "dolores";
                                                maxFileSize = "blanditiis";
                                                maxFiles = 449292;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("PRESENTATION"),
                                                    add("VIDEO"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "ullam";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "adipisci";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "cum";
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
                                                                displayText = "hic";
                                                                uri = "http://polite-maybe.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "totam";
                                                                youtubeUri = "hic";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "exercitationem";
                                                                uri = "https://alarming-propaganda.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "reiciendis";
                                                                youtubeUri = "explicabo";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "asperiores";
                                                                uri = "https://jagged-purchase.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "iste";
                                                                youtubeUri = "dolore";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "laborum";
                                                }};
                                                pointValue = 152354;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "commodi";
                                                                uri = "https://common-gather.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "architecto";
                                                                youtubeUri = "suscipit";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sapiente";
                                                                uri = "https://bitter-want.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "corrupti";
                                                                youtubeUri = "maiores";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "incidunt";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "provident";
                                                                uri = "http://unlucky-cousin.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "occaecati";
                                                                youtubeUri = "quos";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "voluptatibus";
                                                }};
                                            }};
                                            questionId = "tempora";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mrs.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 455444;
                                                highLabel = "reiciendis";
                                                low = 401713;
                                                lowLabel = "sit";
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
                                        put("officiis", "praesentium");
                                    }};
                                    title = "Miss";
                                    videoItem = new VideoItem() {{
                                        caption = "quaerat";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 373035;
                                            }};
                                            youtubeUri = "debitis";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 524970;
                                }};
                                updateMask = "sit";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "nobis";
                            }};
                        }}),
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "error";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "veniam";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 924159;
                                            }};
                                            sourceUri = "reiciendis";
                                        }};
                                    }};
                                    itemId = "nulla";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("aperiam", "saepe");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "in";
                                                        image = new ImageInput() {{
                                                            altText = "officiis";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 512452;
                                                            }};
                                                            sourceUri = "exercitationem";
                                                        }};
                                                        isOther = false;
                                                        value = "praesentium";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "laboriosam";
                                                        image = new ImageInput() {{
                                                            altText = "dolorum";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 622385;
                                                            }};
                                                            sourceUri = "hic";
                                                        }};
                                                        isOther = false;
                                                        value = "expedita";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "neque";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 341698;
                                            }};
                                            sourceUri = "officia";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "tempora";
                                                            image = new ImageInput() {{
                                                                altText = "atque";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 282699;
                                                                }};
                                                                sourceUri = "fugiat";
                                                            }};
                                                            isOther = false;
                                                            value = "voluptatem";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "expedita";
                                                            image = new ImageInput() {{
                                                                altText = "magnam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 460220;
                                                                }};
                                                                sourceUri = "ipsam";
                                                            }};
                                                            isOther = false;
                                                            value = "sit";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "quas";
                                                            image = new ImageInput() {{
                                                                altText = "repudiandae";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 89494;
                                                                }};
                                                                sourceUri = "blanditiis";
                                                            }};
                                                            isOther = false;
                                                            value = "ex";
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
                                                    folderId = "sit";
                                                    maxFileSize = "vel";
                                                    maxFiles = 342611;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("PDF"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                        add("DOCUMENT"),
                                                        add("AUDIO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "harum";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "architecto";
                                                                    uri = "https://flawed-proctor.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "laborum";
                                                                    youtubeUri = "nam";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "tenetur";
                                                    }};
                                                    pointValue = 388867;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "amet";
                                                                    uri = "https://joint-novel.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "provident";
                                                                    youtubeUri = "repellendus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "delectus";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "perferendis";
                                                                    uri = "https://revolving-humidity.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fuga";
                                                                    youtubeUri = "praesentium";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "mollitia";
                                                                    uri = "http://amazing-setback.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quasi";
                                                                    youtubeUri = "atque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "reprehenderit";
                                                                    uri = "https://meager-gerbil.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "maxime";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "esse";
                                                                    uri = "http://surprised-hammock.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "error";
                                                                    youtubeUri = "officiis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "officiis";
                                                    }};
                                                }};
                                                questionId = "accusamus";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Miss";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 328303;
                                                    highLabel = "aspernatur";
                                                    low = 404425;
                                                    lowLabel = "maiores";
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
                                                            goToSectionId = "error";
                                                            image = new ImageInput() {{
                                                                altText = "blanditiis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 922348;
                                                                }};
                                                                sourceUri = "atque";
                                                            }};
                                                            isOther = false;
                                                            value = "atque";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "recusandae";
                                                            image = new ImageInput() {{
                                                                altText = "dolorum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 287119;
                                                                }};
                                                                sourceUri = "reiciendis";
                                                            }};
                                                            isOther = false;
                                                            value = "doloremque";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "dicta";
                                                            image = new ImageInput() {{
                                                                altText = "accusantium";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 174772;
                                                                }};
                                                                sourceUri = "enim";
                                                            }};
                                                            isOther = false;
                                                            value = "laboriosam";
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
                                                    folderId = "a";
                                                    maxFileSize = "molestias";
                                                    maxFiles = 300029;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("ANY"),
                                                        add("DRAWING"),
                                                        add("VIDEO"),
                                                        add("DRAWING"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "adipisci";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "eveniet";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequuntur";
                                                                    uri = "http://pure-fashion.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "error";
                                                                    youtubeUri = "illo";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "corporis";
                                                                    uri = "https://unwitting-degree.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "doloremque";
                                                                    youtubeUri = "iure";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ipsa";
                                                                    uri = "https://baggy-iron.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "qui";
                                                                    youtubeUri = "cum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "iure";
                                                    }};
                                                    pointValue = 898063;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laborum";
                                                                    uri = "https://menacing-logo.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ad";
                                                                    youtubeUri = "repellat";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "alias";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "perspiciatis";
                                                                    uri = "http://prickly-gateway.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "maiores";
                                                                    youtubeUri = "reiciendis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolores";
                                                                    uri = "https://giant-earthquake.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nesciunt";
                                                                    youtubeUri = "quae";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "recusandae";
                                                    }};
                                                }};
                                                questionId = "omnis";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 477646;
                                                    highLabel = "ex";
                                                    low = 284000;
                                                    lowLabel = "culpa";
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
                                                            goToSectionId = "laudantium";
                                                            image = new ImageInput() {{
                                                                altText = "eum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 928219;
                                                                }};
                                                                sourceUri = "esse";
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
                                                    folderId = "eum";
                                                    maxFileSize = "reiciendis";
                                                    maxFiles = 592780;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("PRESENTATION"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "animi";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "mollitia";
                                                                    uri = "https://sunny-pigeon.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "aliquid";
                                                                    youtubeUri = "accusantium";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "repellat";
                                                                    uri = "https://grim-identity.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "earum";
                                                                    youtubeUri = "officia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "laborum";
                                                    }};
                                                    pointValue = 813054;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatibus";
                                                                    uri = "https://unhealthy-view.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "vitae";
                                                                    youtubeUri = "rerum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "tempora";
                                                                    uri = "http://boiling-chaos.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quae";
                                                                    youtubeUri = "perferendis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "velit";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "eum";
                                                                    uri = "http://mean-sunrise.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eos";
                                                                    youtubeUri = "sapiente";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "eum";
                                                    }};
                                                }};
                                                questionId = "dicta";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mrs.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 107004;
                                                    highLabel = "cupiditate";
                                                    low = 589695;
                                                    lowLabel = "earum";
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
                                            altText = "soluta";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 848151;
                                            }};
                                            sourceUri = "eaque";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "maiores";
                                                        image = new ImageInput() {{
                                                            altText = "debitis";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 780931;
                                                            }};
                                                            sourceUri = "suscipit";
                                                        }};
                                                        isOther = false;
                                                        value = "dolorem";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "cumque";
                                                        image = new ImageInput() {{
                                                            altText = "fuga";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 656762;
                                                            }};
                                                            sourceUri = "necessitatibus";
                                                        }};
                                                        isOther = false;
                                                        value = "nulla";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "quasi";
                                                        image = new ImageInput() {{
                                                            altText = "et";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 619183;
                                                            }};
                                                            sourceUri = "occaecati";
                                                        }};
                                                        isOther = false;
                                                        value = "suscipit";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "quasi";
                                                        image = new ImageInput() {{
                                                            altText = "magni";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 859581;
                                                            }};
                                                            sourceUri = "necessitatibus";
                                                        }};
                                                        isOther = false;
                                                        value = "ipsa";
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
                                                folderId = "nihil";
                                                maxFileSize = "molestiae";
                                                maxFiles = 115834;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("SPREADSHEET"),
                                                    add("DRAWING"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "reiciendis";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "vel";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "architecto";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "fugiat";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
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
                                                pointValue = 671384;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "nostrum";
                                                                uri = "https://sad-great-grandfather.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "suscipit";
                                                                youtubeUri = "aliquid";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "perferendis";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "voluptas";
                                                                uri = "https://pure-bassoon.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "possimus";
                                                                youtubeUri = "voluptates";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "mollitia";
                                                                uri = "https://scratchy-existence.name";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "enim";
                                                                youtubeUri = "vitae";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "repellendus";
                                                }};
                                            }};
                                            questionId = "ex";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Miss";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 405373;
                                                highLabel = "ut";
                                                low = 321043;
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
                                        put("molestias", "cum");
                                    }};
                                    title = "Mrs.";
                                    videoItem = new VideoItem() {{
                                        caption = "beatae";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 606308;
                                            }};
                                            youtubeUri = "veritatis";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 703218;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 665678;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 634786;
                                }};
                                originalLocation = new Location() {{
                                    index = 29634;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "sapiente";
                                    title = "Dr.";
                                }};
                                updateMask = "architecto";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "fuga";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "pariatur";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 29190;
                                            }};
                                            sourceUri = "alias";
                                        }};
                                    }};
                                    itemId = "deleniti";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("ex", "sapiente");
                                        put("rem", "minus");
                                        put("nemo", "asperiores");
                                        put("ratione", "ullam");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "totam";
                                                        image = new ImageInput() {{
                                                            altText = "impedit";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 720528;
                                                            }};
                                                            sourceUri = "ipsam";
                                                        }};
                                                        isOther = false;
                                                        value = "culpa";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "aliquam";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 537279;
                                            }};
                                            sourceUri = "veritatis";
                                        }};
                                        questions = new org.openapis.openapi.models.shared.QuestionInput[]{{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "architecto";
                                                            image = new ImageInput() {{
                                                                altText = "sit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 144286;
                                                                }};
                                                                sourceUri = "ab";
                                                            }};
                                                            isOther = false;
                                                            value = "laudantium";
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
                                                    folderId = "dolor";
                                                    maxFileSize = "fugiat";
                                                    maxFiles = 369490;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "eveniet";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "impedit";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "officiis";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "necessitatibus";
                                                                    uri = "http://glamorous-constraint.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eum";
                                                                    youtubeUri = "vel";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatum";
                                                                    uri = "http://great-bath.net";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "autem";
                                                                    youtubeUri = "nobis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "laboriosam";
                                                    }};
                                                    pointValue = 927212;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatem";
                                                                    uri = "http://unlined-boom.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "at";
                                                                    youtubeUri = "vero";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "est";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sequi";
                                                                    uri = "https://utilized-rowing.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nemo";
                                                                    youtubeUri = "voluptate";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "blanditiis";
                                                                    uri = "https://haunting-destroyer.info";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quos";
                                                                    youtubeUri = "eius";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aspernatur";
                                                                    uri = "http://disgusting-post.name";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "incidunt";
                                                                    youtubeUri = "quasi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "rem";
                                                    }};
                                                }};
                                                questionId = "fugiat";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Mr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 395544;
                                                    highLabel = "consequuntur";
                                                    low = 233078;
                                                    lowLabel = "aperiam";
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
                                                            goToSectionId = "soluta";
                                                            image = new ImageInput() {{
                                                                altText = "alias";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 178580;
                                                                }};
                                                                sourceUri = "occaecati";
                                                            }};
                                                            isOther = false;
                                                            value = "iste";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "inventore";
                                                            image = new ImageInput() {{
                                                                altText = "fuga";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 976802;
                                                                }};
                                                                sourceUri = "distinctio";
                                                            }};
                                                            isOther = false;
                                                            value = "omnis";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "minima";
                                                            image = new ImageInput() {{
                                                                altText = "praesentium";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 300403;
                                                                }};
                                                                sourceUri = "temporibus";
                                                            }};
                                                            isOther = false;
                                                            value = "quos";
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
                                                    folderId = "itaque";
                                                    maxFileSize = "commodi";
                                                    maxFiles = 520761;
                                                    types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                        add("DOCUMENT"),
                                                        add("IMAGE"),
                                                        add("VIDEO"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                            add(new CorrectAnswer() {{
                                                                value = "vel";
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
                                                                    displayText = "non";
                                                                    uri = "https://fruitful-moody.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "deserunt";
                                                                    youtubeUri = "esse";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "nemo";
                                                    }};
                                                    pointValue = 444587;
                                                    whenRight = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quis";
                                                                    uri = "https://unaware-scheme.org";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "necessitatibus";
                                                                    youtubeUri = "asperiores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ex";
                                                                    uri = "http://unlawful-wake.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "minus";
                                                                    youtubeUri = "fuga";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laborum";
                                                                    uri = "http://even-mankind.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "impedit";
                                                                    youtubeUri = "magni";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "soluta";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nam";
                                                                    uri = "http://leafy-improvement.biz";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dignissimos";
                                                                    youtubeUri = "neque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quo";
                                                                    uri = "https://terrible-hourglass.com";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptatibus";
                                                                    youtubeUri = "vel";
                                                                }};
                                                            }}),
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
                                                }};
                                                questionId = "beatae";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "Dr.";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 568218;
                                                    highLabel = "eum";
                                                    low = 246557;
                                                    lowLabel = "ut";
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
                                            altText = "perspiciatis";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 117525;
                                            }};
                                            sourceUri = "impedit";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new org.openapis.openapi.models.shared.OptionInput[]{{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "itaque";
                                                        image = new ImageInput() {{
                                                            altText = "alias";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 931505;
                                                            }};
                                                            sourceUri = "velit";
                                                        }};
                                                        isOther = false;
                                                        value = "laborum";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "dolor";
                                                        image = new ImageInput() {{
                                                            altText = "iusto";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 39992;
                                                            }};
                                                            sourceUri = "consequatur";
                                                        }};
                                                        isOther = false;
                                                        value = "officia";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "ea";
                                                        image = new ImageInput() {{
                                                            altText = "quidem";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 705148;
                                                            }};
                                                            sourceUri = "placeat";
                                                        }};
                                                        isOther = false;
                                                        value = "perspiciatis";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "deleniti";
                                                        image = new ImageInput() {{
                                                            altText = "a";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 351936;
                                                            }};
                                                            sourceUri = "unde";
                                                        }};
                                                        isOther = false;
                                                        value = "necessitatibus";
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
                                                folderId = "impedit";
                                                maxFileSize = "ipsam";
                                                maxFiles = 357425;
                                                types = new org.openapis.openapi.models.shared.FileUploadQuestionTypesEnum[]{{
                                                    add("PDF"),
                                                    add("SPREADSHEET"),
                                                    add("DOCUMENT"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new org.openapis.openapi.models.shared.CorrectAnswer[]{{
                                                        add(new CorrectAnswer() {{
                                                            value = "vero";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "vitae";
                                                                uri = "http://drafty-exchange.biz";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "iste";
                                                                youtubeUri = "ex";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "nemo";
                                                }};
                                                pointValue = 745233;
                                                whenRight = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "rem";
                                                                uri = "https://likable-chafe.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "magni";
                                                                youtubeUri = "vel";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quae";
                                                                uri = "http://false-corner.info";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "itaque";
                                                                youtubeUri = "et";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ipsum";
                                                                uri = "https://tight-quit.net";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quia";
                                                                youtubeUri = "quia";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "nostrum";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new org.openapis.openapi.models.shared.ExtraMaterial[]{{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "libero";
                                                                uri = "http://putrid-recipe.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "officia";
                                                                youtubeUri = "quos";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "placeat";
                                                                uri = "http://lavish-back.org";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "inventore";
                                                                youtubeUri = "aperiam";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "totam";
                                                                uri = "http://simple-rabbi.com";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "autem";
                                                                youtubeUri = "esse";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "dolores";
                                                }};
                                            }};
                                            questionId = "assumenda";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "Mr.";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 668606;
                                                highLabel = "facere";
                                                low = 545918;
                                                lowLabel = "molestiae";
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
                                        put("accusamus", "necessitatibus");
                                        put("tempore", "sint");
                                        put("ea", "autem");
                                    }};
                                    title = "Mrs.";
                                    videoItem = new VideoItem() {{
                                        caption = "rerum";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 357207;
                                            }};
                                            youtubeUri = "officiis";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 972912;
                                }};
                                updateMask = "cum";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "at";
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "alias";
                        targetRevisionId = "quia";
                    }};
                }};
            }};            

            FormsFormsBatchUpdateResponse res = sdk.forms.formsFormsBatchUpdate(req);

            if (res.batchUpdateFormResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### forms

* `formsFormsBatchUpdate` - Change the form with a batch of updates.
* `formsFormsCreate` - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* `formsFormsGet` - Get a form.
* `formsFormsResponsesGet` - Get one response from the form.
* `formsFormsResponsesList` - List a form's responses.
* `formsFormsWatchesCreate` - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* `formsFormsWatchesDelete` - Delete a watch.
* `formsFormsWatchesList` - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* `formsFormsWatchesRenew` - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
