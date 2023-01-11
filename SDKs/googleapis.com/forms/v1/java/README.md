# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    formId = "non";
                }};
                queryParams = new FormsFormsBatchUpdateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "velit";
                    alt = "json";
                    callback = "facilis";
                    fields = "et";
                    key = "doloribus";
                    oauthToken = "excepturi";
                    prettyPrint = true;
                    quotaUser = "soluta";
                    uploadType = "similique";
                    uploadProtocol = "omnis";
                }};
                request = new BatchUpdateFormRequestInput() {{
                    includeFormInResponse = false;
                    requests = new openapisdk.models.shared.RequestInput[]() {{
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "enim";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "incidunt";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 7689307747697478495;
                                            }};
                                            sourceUri = "velit";
                                        }};
                                    }};
                                    itemId = "suscipit";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("hic", "recusandae");
                                        put("numquam", "omnis");
                                        put("necessitatibus", "culpa");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "ut";
                                                        image = new ImageInput() {{
                                                            altText = "incidunt";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 6314848725965061704;
                                                            }};
                                                            sourceUri = "deleniti";
                                                        }};
                                                        isOther = false;
                                                        value = "voluptatum";
                                                    }}),
                                                }};
                                                shuffle = true;
                                                type = "DROP_DOWN";
                                            }};
                                            shuffleQuestions = true;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "similique";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 380832061833457372;
                                            }};
                                            sourceUri = "rerum";
                                        }};
                                        questions = new openapisdk.models.shared.QuestionInput[]() {{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "omnis";
                                                            image = new ImageInput() {{
                                                                altText = "et";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 7686320668855973966;
                                                                }};
                                                                sourceUri = "omnis";
                                                            }};
                                                            isOther = false;
                                                            value = "odio";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = true;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "nostrum";
                                                    maxFileSize = "quaerat";
                                                    maxFiles = 2763029100618711416;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("VIDEO"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "pariatur";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "omnis";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "perspiciatis";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "impedit";
                                                                    uri = "rem";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quam";
                                                                    youtubeUri = "maiores";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ut";
                                                    }};
                                                    pointValue = 8237760998384950451;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aperiam";
                                                                    uri = "mollitia";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "officia";
                                                                    youtubeUri = "quaerat";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "nam";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "officia";
                                                                    uri = "in";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "commodi";
                                                                    youtubeUri = "quod";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laudantium";
                                                                    uri = "vel";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reprehenderit";
                                                                    youtubeUri = "nihil";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "nam";
                                                    }};
                                                }};
                                                questionId = "est";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "voluptatem";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 8012383736573128269;
                                                    highLabel = "magni";
                                                    low = 1731839412473929;
                                                    lowLabel = "quibusdam";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "sapiente";
                                                            image = new ImageInput() {{
                                                                altText = "et";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 7496883137540025909;
                                                                }};
                                                                sourceUri = "magnam";
                                                            }};
                                                            isOther = false;
                                                            value = "quia";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "ut";
                                                            image = new ImageInput() {{
                                                                altText = "sint";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 3352162573142036021;
                                                                }};
                                                                sourceUri = "quae";
                                                            }};
                                                            isOther = true;
                                                            value = "voluptatem";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "nemo";
                                                            image = new ImageInput() {{
                                                                altText = "voluptatibus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 1292708558333556593;
                                                                }};
                                                                sourceUri = "quo";
                                                            }};
                                                            isOther = true;
                                                            value = "beatae";
                                                        }}),
                                                    }};
                                                    shuffle = true;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = true;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "molestias";
                                                    maxFileSize = "delectus";
                                                    maxFiles = 237566068599321975;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("AUDIO"),
                                                        add("DOCUMENT"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "culpa";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "velit";
                                                                    uri = "laudantium";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rem";
                                                                    youtubeUri = "sint";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "assumenda";
                                                                    uri = "facere";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "maxime";
                                                                    youtubeUri = "in";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quo";
                                                                    uri = "eum";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "et";
                                                                    youtubeUri = "natus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "aspernatur";
                                                    }};
                                                    pointValue = 810797288355434177;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequatur";
                                                                    uri = "quo";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ipsum";
                                                                    youtubeUri = "suscipit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cumque";
                                                                    uri = "nisi";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "aspernatur";
                                                                    youtubeUri = "animi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolorum";
                                                                    uri = "voluptas";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptas";
                                                                    youtubeUri = "dolor";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ad";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ut";
                                                                    uri = "nobis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ut";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "praesentium";
                                                                    uri = "amet";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "est";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "et";
                                                    }};
                                                }};
                                                questionId = "quasi";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "optio";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 1953391707276670468;
                                                    highLabel = "vel";
                                                    low = 2508989827477435099;
                                                    lowLabel = "qui";
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
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "eius";
                                                            image = new ImageInput() {{
                                                                altText = "soluta";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 8488235111353093307;
                                                                }};
                                                                sourceUri = "eos";
                                                            }};
                                                            isOther = true;
                                                            value = "amet";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "autem";
                                                            image = new ImageInput() {{
                                                                altText = "est";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 5352945656930560459;
                                                                }};
                                                                sourceUri = "excepturi";
                                                            }};
                                                            isOther = false;
                                                            value = "eum";
                                                        }}),
                                                    }};
                                                    shuffle = true;
                                                    type = "CHOICE_TYPE_UNSPECIFIED";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "aliquam";
                                                    maxFileSize = "fugit";
                                                    maxFiles = 5610198372153928080;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("DRAWING"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "eum";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "corrupti";
                                                                    uri = "ea";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "fugit";
                                                                    youtubeUri = "ad";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "sapiente";
                                                    }};
                                                    pointValue = 5200469161454221179;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cupiditate";
                                                                    uri = "error";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quo";
                                                                    youtubeUri = "aut";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "doloremque";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "suscipit";
                                                                    uri = "earum";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ut";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "occaecati";
                                                    }};
                                                }};
                                                questionId = "consequatur";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "qui";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 8263760632678663550;
                                                    highLabel = "facilis";
                                                    low = 5029652405670555867;
                                                    lowLabel = "explicabo";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = true;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "perspiciatis";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 7966130736950805563;
                                            }};
                                            sourceUri = "nihil";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "sapiente";
                                                        image = new ImageInput() {{
                                                            altText = "autem";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 6245375767495690753;
                                                            }};
                                                            sourceUri = "expedita";
                                                        }};
                                                        isOther = false;
                                                        value = "fugit";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "enim";
                                                        image = new ImageInput() {{
                                                            altText = "tempora";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 8174328864871482696;
                                                            }};
                                                            sourceUri = "alias";
                                                        }};
                                                        isOther = false;
                                                        value = "voluptatum";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "fugit";
                                                        image = new ImageInput() {{
                                                            altText = "aspernatur";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 9056425293593458943;
                                                            }};
                                                            sourceUri = "perferendis";
                                                        }};
                                                        isOther = false;
                                                        value = "unde";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = true;
                                                includeYear = true;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "et";
                                                maxFileSize = "ea";
                                                maxFiles = 685372190186682574;
                                                types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                    add("PDF"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                        add(new CorrectAnswer() {{
                                                            value = "incidunt";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "unde";
                                                                uri = "accusamus";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "qui";
                                                                youtubeUri = "dolorem";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "similique";
                                                }};
                                                pointValue = 6678977021491363721;
                                                whenRight = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "harum";
                                                                uri = "distinctio";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "et";
                                                                youtubeUri = "ad";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "qui";
                                                                uri = "dolor";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "consequatur";
                                                                youtubeUri = "earum";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "aliquid";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "et";
                                                                uri = "molestiae";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "id";
                                                                youtubeUri = "perferendis";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "consequatur";
                                                }};
                                            }};
                                            questionId = "est";
                                            required = true;
                                            rowQuestion = new RowQuestion() {{
                                                title = "minus";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 6212879740654409760;
                                                highLabel = "amet";
                                                low = 3745662954024057761;
                                                lowLabel = "eveniet";
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
                                        put("quis", "et");
                                    }};
                                    title = "mollitia";
                                    videoItem = new VideoItem() {{
                                        caption = "commodi";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 3957068363303204924;
                                            }};
                                            youtubeUri = "et";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 1138461829906987954;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 4840463391881527530;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 2258433275868639536;
                                }};
                                originalLocation = new Location() {{
                                    index = 4004796527103083157;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "mollitia";
                                    title = "consequatur";
                                }};
                                updateMask = "non";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "id";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "consequatur";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 304540307133973153;
                                            }};
                                            sourceUri = "similique";
                                        }};
                                    }};
                                    itemId = "rerum";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("ea", "odit");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "est";
                                                        image = new ImageInput() {{
                                                            altText = "minima";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 6216752774888009356;
                                                            }};
                                                            sourceUri = "et";
                                                        }};
                                                        isOther = true;
                                                        value = "aliquam";
                                                    }}),
                                                }};
                                                shuffle = true;
                                                type = "DROP_DOWN";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "maxime";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 9169903709946610265;
                                            }};
                                            sourceUri = "provident";
                                        }};
                                        questions = new openapisdk.models.shared.QuestionInput[]() {{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "voluptatem";
                                                            image = new ImageInput() {{
                                                                altText = "velit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 2994574141089868886;
                                                                }};
                                                                sourceUri = "tenetur";
                                                            }};
                                                            isOther = true;
                                                            value = "nam";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = true;
                                                    includeYear = true;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "est";
                                                    maxFileSize = "qui";
                                                    maxFiles = 165809790379402648;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "laboriosam";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "cumque";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "qui";
                                                                    uri = "animi";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "repellendus";
                                                                    youtubeUri = "quos";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "animi";
                                                                    uri = "autem";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eligendi";
                                                                    youtubeUri = "laboriosam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "omnis";
                                                                    uri = "natus";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "error";
                                                                    youtubeUri = "minus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "facilis";
                                                    }};
                                                    pointValue = 5976770832042142405;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cumque";
                                                                    uri = "aut";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "officiis";
                                                                    youtubeUri = "perspiciatis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "omnis";
                                                                    uri = "est";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "soluta";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "amet";
                                                                    uri = "rerum";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quo";
                                                                    youtubeUri = "repellendus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "saepe";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "qui";
                                                                    uri = "eaque";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "recusandae";
                                                                    youtubeUri = "optio";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolores";
                                                                    uri = "sunt";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "perspiciatis";
                                                                    youtubeUri = "cupiditate";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aut";
                                                                    uri = "dolorem";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "autem";
                                                                    youtubeUri = "id";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "praesentium";
                                                    }};
                                                }};
                                                questionId = "voluptate";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "iure";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 5091871267856638086;
                                                    highLabel = "ut";
                                                    low = 3245014487934498074;
                                                    lowLabel = "et";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = true;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "vitae";
                                                            image = new ImageInput() {{
                                                                altText = "debitis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 990275202498696067;
                                                                }};
                                                                sourceUri = "esse";
                                                            }};
                                                            isOther = false;
                                                            value = "deserunt";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "nulla";
                                                            image = new ImageInput() {{
                                                                altText = "iure";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 7202460032551161725;
                                                                }};
                                                                sourceUri = "quos";
                                                            }};
                                                            isOther = true;
                                                            value = "repudiandae";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = true;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "ab";
                                                    maxFileSize = "enim";
                                                    maxFiles = 5687026955818400712;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("FILE_TYPE_UNSPECIFIED"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "voluptates";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "ea";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "rerum";
                                                                    uri = "consequatur";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "dolores";
                                                                    youtubeUri = "neque";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "possimus";
                                                                    uri = "placeat";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quo";
                                                                    youtubeUri = "non";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "et";
                                                    }};
                                                    pointValue = 7471696567455815454;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "occaecati";
                                                                    uri = "ratione";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "in";
                                                                    youtubeUri = "sint";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "in";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ab";
                                                                    uri = "sed";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "et";
                                                                    youtubeUri = "consequatur";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "similique";
                                                    }};
                                                }};
                                                questionId = "eos";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "eos";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 648048677719017108;
                                                    highLabel = "est";
                                                    low = 640568444331955714;
                                                    lowLabel = "repellendus";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = true;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "sint";
                                                            image = new ImageInput() {{
                                                                altText = "nemo";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 4189360969312829991;
                                                                }};
                                                                sourceUri = "voluptas";
                                                            }};
                                                            isOther = true;
                                                            value = "ab";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "et";
                                                            image = new ImageInput() {{
                                                                altText = "sed";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 8094092916024648142;
                                                                }};
                                                                sourceUri = "aperiam";
                                                            }};
                                                            isOther = false;
                                                            value = "quaerat";
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
                                                    folderId = "suscipit";
                                                    maxFileSize = "reiciendis";
                                                    maxFiles = 8810485174750341962;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("DRAWING"),
                                                        add("PRESENTATION"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "qui";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "quia";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ut";
                                                                    uri = "ratione";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "labore";
                                                                    youtubeUri = "cupiditate";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cumque";
                                                                    uri = "enim";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "excepturi";
                                                                    youtubeUri = "quisquam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sit";
                                                                    uri = "qui";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptates";
                                                                    youtubeUri = "voluptate";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "qui";
                                                    }};
                                                    pointValue = 8085072263856250108;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "illo";
                                                                    uri = "quia";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sunt";
                                                                    youtubeUri = "esse";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ea";
                                                                    uri = "repellat";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "explicabo";
                                                                    youtubeUri = "incidunt";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "animi";
                                                                    uri = "omnis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eum";
                                                                    youtubeUri = "recusandae";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "doloribus";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "culpa";
                                                                    uri = "non";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "magnam";
                                                                    youtubeUri = "facilis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "mollitia";
                                                                    uri = "commodi";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "cum";
                                                                    youtubeUri = "error";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ut";
                                                                    uri = "mollitia";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "officiis";
                                                                    youtubeUri = "quaerat";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "aut";
                                                    }};
                                                }};
                                                questionId = "quo";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "enim";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 1375710854642080060;
                                                    highLabel = "quibusdam";
                                                    low = 4042397726835966953;
                                                    lowLabel = "harum";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "doloremque";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 1714285521165166015;
                                            }};
                                            sourceUri = "vel";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "ullam";
                                                        image = new ImageInput() {{
                                                            altText = "sed";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 1138264723581920018;
                                                            }};
                                                            sourceUri = "fuga";
                                                        }};
                                                        isOther = true;
                                                        value = "sapiente";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "maiores";
                                                        image = new ImageInput() {{
                                                            altText = "ipsum";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 2283352940192958745;
                                                            }};
                                                            sourceUri = "iusto";
                                                        }};
                                                        isOther = false;
                                                        value = "nam";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = true;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "dolor";
                                                maxFileSize = "rem";
                                                maxFiles = 6239765836588722578;
                                                types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                    add("PDF"),
                                                    add("ANY"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                        add(new CorrectAnswer() {{
                                                            value = "ea";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "beatae";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "corrupti";
                                                                uri = "id";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "cum";
                                                                youtubeUri = "voluptas";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "iusto";
                                                                uri = "sed";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "laborum";
                                                                youtubeUri = "voluptatem";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "omnis";
                                                }};
                                                pointValue = 2792778010715577769;
                                                whenRight = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "fugiat";
                                                                uri = "rerum";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "voluptas";
                                                                youtubeUri = "illo";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "consequuntur";
                                                                uri = "distinctio";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "sunt";
                                                                youtubeUri = "qui";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "quidem";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "aut";
                                                                uri = "et";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "aliquam";
                                                                youtubeUri = "voluptas";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "et";
                                                }};
                                            }};
                                            questionId = "earum";
                                            required = true;
                                            rowQuestion = new RowQuestion() {{
                                                title = "officiis";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 8701862092385727698;
                                                highLabel = "velit";
                                                low = 2667853516496602622;
                                                lowLabel = "qui";
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
                                        put("optio", "totam");
                                        put("consequuntur", "aut");
                                        put("temporibus", "quod");
                                    }};
                                    title = "nemo";
                                    videoItem = new VideoItem() {{
                                        caption = "qui";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 4098791226593642061;
                                            }};
                                            youtubeUri = "iusto";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 8466110458255641126;
                                }};
                                updateMask = "laborum";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "illo";
                            }};
                        }}),
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "fuga";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "dolores";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 5203284369996483635;
                                            }};
                                            sourceUri = "cupiditate";
                                        }};
                                    }};
                                    itemId = "a";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("reprehenderit", "laudantium");
                                        put("reiciendis", "veniam");
                                        put("voluptate", "qui");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "voluptas";
                                                        image = new ImageInput() {{
                                                            altText = "et";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 8452361727072459356;
                                                            }};
                                                            sourceUri = "a";
                                                        }};
                                                        isOther = true;
                                                        value = "voluptas";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "inventore";
                                                        image = new ImageInput() {{
                                                            altText = "aliquam";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 7963390744202618487;
                                                            }};
                                                            sourceUri = "dolores";
                                                        }};
                                                        isOther = true;
                                                        value = "libero";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "optio";
                                                        image = new ImageInput() {{
                                                            altText = "voluptas";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 7967118878520669207;
                                                            }};
                                                            sourceUri = "natus";
                                                        }};
                                                        isOther = false;
                                                        value = "enim";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            shuffleQuestions = true;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "sit";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 8278747621504323425;
                                            }};
                                            sourceUri = "commodi";
                                        }};
                                        questions = new openapisdk.models.shared.QuestionInput[]() {{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "eveniet";
                                                            image = new ImageInput() {{
                                                                altText = "qui";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 5456373652036967288;
                                                                }};
                                                                sourceUri = "sit";
                                                            }};
                                                            isOther = false;
                                                            value = "illo";
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
                                                    folderId = "occaecati";
                                                    maxFileSize = "voluptatem";
                                                    maxFiles = 4834965010719277600;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("PDF"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "ut";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "in";
                                                                    uri = "fuga";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptas";
                                                                    youtubeUri = "beatae";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "et";
                                                                    uri = "sapiente";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "rerum";
                                                                    youtubeUri = "consequatur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "est";
                                                                    uri = "quia";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptatibus";
                                                                    youtubeUri = "quas";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "illum";
                                                    }};
                                                    pointValue = 8592684441669414271;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quo";
                                                                    uri = "veritatis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "minus";
                                                                    youtubeUri = "recusandae";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "repudiandae";
                                                                    uri = "qui";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "et";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "alias";
                                                                    uri = "sit";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "id";
                                                                    youtubeUri = "error";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "aut";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatem";
                                                                    uri = "id";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ipsa";
                                                                    youtubeUri = "sint";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquam";
                                                                    uri = "facilis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "nisi";
                                                                    youtubeUri = "eos";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "eius";
                                                                    uri = "quaerat";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quaerat";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "officia";
                                                    }};
                                                }};
                                                questionId = "quia";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "quo";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 1246749398812773164;
                                                    highLabel = "corrupti";
                                                    low = 4866887761377981932;
                                                    lowLabel = "est";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = true;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "est";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 775683419734416492;
                                            }};
                                            sourceUri = "voluptas";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "necessitatibus";
                                                        image = new ImageInput() {{
                                                            altText = "natus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 5355321886664739476;
                                                            }};
                                                            sourceUri = "consectetur";
                                                        }};
                                                        isOther = false;
                                                        value = "ab";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "quibusdam";
                                                        image = new ImageInput() {{
                                                            altText = "ad";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 45290273654355460;
                                                            }};
                                                            sourceUri = "odit";
                                                        }};
                                                        isOther = false;
                                                        value = "cupiditate";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "aliquid";
                                                        image = new ImageInput() {{
                                                            altText = "et";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 3522989051802906295;
                                                            }};
                                                            sourceUri = "maxime";
                                                        }};
                                                        isOther = false;
                                                        value = "illum";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = true;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "molestiae";
                                                maxFileSize = "labore";
                                                maxFiles = 7706988583701010055;
                                                types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                    add("DRAWING"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                        add(new CorrectAnswer() {{
                                                            value = "ipsam";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "est";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "id";
                                                                uri = "autem";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "natus";
                                                                youtubeUri = "repellat";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "excepturi";
                                                }};
                                                pointValue = 6253559358892537436;
                                                whenRight = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "id";
                                                                uri = "dolorum";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "sit";
                                                                youtubeUri = "corporis";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "consectetur";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "libero";
                                                                uri = "ab";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "et";
                                                                youtubeUri = "libero";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "vitae";
                                                                uri = "ut";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "debitis";
                                                                youtubeUri = "ea";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "natus";
                                                }};
                                            }};
                                            questionId = "quia";
                                            required = true;
                                            rowQuestion = new RowQuestion() {{
                                                title = "aliquid";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 3868752304617446624;
                                                highLabel = "repellendus";
                                                low = 1355108145261396276;
                                                lowLabel = "omnis";
                                            }};
                                            textQuestion = new TextQuestion() {{
                                                paragraph = true;
                                            }};
                                            timeQuestion = new TimeQuestion() {{
                                                duration = true;
                                            }};
                                        }};
                                    }};
                                    textItem = new java.util.HashMap<String, Object>() {{
                                        put("illum", "porro");
                                        put("eaque", "quis");
                                    }};
                                    title = "ipsum";
                                    videoItem = new VideoItem() {{
                                        caption = "qui";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 5974372823113203256;
                                            }};
                                            youtubeUri = "quia";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 2384133953965325794;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 311637717214665668;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 5572661477959132953;
                                }};
                                originalLocation = new Location() {{
                                    index = 6504335064777743954;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "laborum";
                                    title = "deserunt";
                                }};
                                updateMask = "dicta";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "assumenda";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "officiis";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 6955127644902656250;
                                            }};
                                            sourceUri = "in";
                                        }};
                                    }};
                                    itemId = "consequatur";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("quis", "ut");
                                        put("porro", "cupiditate");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "deserunt";
                                                        image = new ImageInput() {{
                                                            altText = "quia";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 4542929937070297524;
                                                            }};
                                                            sourceUri = "temporibus";
                                                        }};
                                                        isOther = true;
                                                        value = "vel";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "cupiditate";
                                                        image = new ImageInput() {{
                                                            altText = "in";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 2696872763617638170;
                                                            }};
                                                            sourceUri = "sequi";
                                                        }};
                                                        isOther = false;
                                                        value = "consectetur";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "fugit";
                                                        image = new ImageInput() {{
                                                            altText = "quisquam";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 1522630723316217068;
                                                            }};
                                                            sourceUri = "ullam";
                                                        }};
                                                        isOther = true;
                                                        value = "repellendus";
                                                    }}),
                                                }};
                                                shuffle = true;
                                                type = "DROP_DOWN";
                                            }};
                                            shuffleQuestions = true;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "maiores";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 2966544684763247138;
                                            }};
                                            sourceUri = "laudantium";
                                        }};
                                        questions = new openapisdk.models.shared.QuestionInput[]() {{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "id";
                                                            image = new ImageInput() {{
                                                                altText = "molestiae";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 2826102048474424117;
                                                                }};
                                                                sourceUri = "in";
                                                            }};
                                                            isOther = true;
                                                            value = "vel";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "quibusdam";
                                                            image = new ImageInput() {{
                                                                altText = "ad";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 6837718578708483516;
                                                                }};
                                                                sourceUri = "fuga";
                                                            }};
                                                            isOther = false;
                                                            value = "accusamus";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "assumenda";
                                                            image = new ImageInput() {{
                                                                altText = "sit";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 5254583485262207032;
                                                                }};
                                                                sourceUri = "debitis";
                                                            }};
                                                            isOther = false;
                                                            value = "eum";
                                                        }}),
                                                    }};
                                                    shuffle = true;
                                                    type = "RADIO";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = true;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "deserunt";
                                                    maxFileSize = "qui";
                                                    maxFiles = 161545387773072224;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("IMAGE"),
                                                        add("DOCUMENT"),
                                                        add("PDF"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "et";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "voluptas";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ut";
                                                                    uri = "vel";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "autem";
                                                                    youtubeUri = "architecto";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "autem";
                                                                    uri = "nesciunt";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ullam";
                                                                    youtubeUri = "aut";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "aut";
                                                    }};
                                                    pointValue = 447825207034063662;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "tenetur";
                                                                    uri = "laborum";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "qui";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vel";
                                                                    uri = "voluptatibus";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "debitis";
                                                                    youtubeUri = "voluptates";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "et";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "iste";
                                                                    uri = "asperiores";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ea";
                                                                    youtubeUri = "consectetur";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "in";
                                                    }};
                                                }};
                                                questionId = "dolores";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "maiores";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 5388265149066865887;
                                                    highLabel = "eos";
                                                    low = 19983500848930081;
                                                    lowLabel = "repellat";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "odit";
                                                            image = new ImageInput() {{
                                                                altText = "aut";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 3272236768135390790;
                                                                }};
                                                                sourceUri = "quos";
                                                            }};
                                                            isOther = true;
                                                            value = "accusamus";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "eos";
                                                            image = new ImageInput() {{
                                                                altText = "est";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 6440794248698548991;
                                                                }};
                                                                sourceUri = "illum";
                                                            }};
                                                            isOther = true;
                                                            value = "nobis";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = true;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "voluptas";
                                                    maxFileSize = "autem";
                                                    maxFiles = 1653398011814267830;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("PDF"),
                                                        add("VIDEO"),
                                                        add("AUDIO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "id";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "dolorem";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "rerum";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "assumenda";
                                                                    uri = "dolor";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "totam";
                                                                    youtubeUri = "ab";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vel";
                                                                    uri = "culpa";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "et";
                                                                    youtubeUri = "enim";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "id";
                                                                    uri = "corporis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "facere";
                                                                    youtubeUri = "eligendi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "assumenda";
                                                    }};
                                                    pointValue = 4352521914877300365;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "minus";
                                                                    uri = "et";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "similique";
                                                                    youtubeUri = "omnis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "numquam";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "a";
                                                                    uri = "qui";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "occaecati";
                                                                    youtubeUri = "quaerat";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "alias";
                                                                    uri = "eum";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptatem";
                                                                    youtubeUri = "quod";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quis";
                                                    }};
                                                }};
                                                questionId = "accusantium";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "aut";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 4090236623378763872;
                                                    highLabel = "possimus";
                                                    low = 3490050072483158353;
                                                    lowLabel = "id";
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
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "est";
                                                            image = new ImageInput() {{
                                                                altText = "minus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 2803117668113537679;
                                                                }};
                                                                sourceUri = "deleniti";
                                                            }};
                                                            isOther = false;
                                                            value = "dolorem";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "DROP_DOWN";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = true;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "aut";
                                                    maxFileSize = "ea";
                                                    maxFiles = 718536789383417216;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("ANY"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "dolores";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sed";
                                                                    uri = "in";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "numquam";
                                                                    youtubeUri = "soluta";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "culpa";
                                                    }};
                                                    pointValue = 3294559719603437786;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "facilis";
                                                                    uri = "sequi";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "molestias";
                                                                    youtubeUri = "ipsa";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quisquam";
                                                                    uri = "praesentium";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quos";
                                                                    youtubeUri = "beatae";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "repudiandae";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "incidunt";
                                                                    uri = "consequatur";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quaerat";
                                                                    youtubeUri = "in";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "officia";
                                                                    uri = "magnam";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "possimus";
                                                                    youtubeUri = "quia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "recusandae";
                                                    }};
                                                }};
                                                questionId = "voluptatem";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "qui";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 1099380999895236577;
                                                    highLabel = "pariatur";
                                                    low = 83414691333818129;
                                                    lowLabel = "corporis";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = false;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = true;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "quaerat";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 434180465058952482;
                                            }};
                                            sourceUri = "aut";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "saepe";
                                                        image = new ImageInput() {{
                                                            altText = "iste";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 4956862631023023034;
                                                            }};
                                                            sourceUri = "a";
                                                        }};
                                                        isOther = false;
                                                        value = "numquam";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHECKBOX";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = true;
                                                includeYear = true;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "est";
                                                maxFileSize = "quo";
                                                maxFiles = 2194933033108596240;
                                                types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                    add("SPREADSHEET"),
                                                    add("VIDEO"),
                                                    add("AUDIO"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                        add(new CorrectAnswer() {{
                                                            value = "iusto";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "maiores";
                                                                uri = "enim";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "consequatur";
                                                                youtubeUri = "in";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "enim";
                                                }};
                                                pointValue = 392125044949860311;
                                                whenRight = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quibusdam";
                                                                uri = "est";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "alias";
                                                                youtubeUri = "at";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "ea";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "labore";
                                                                uri = "vitae";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "illum";
                                                                youtubeUri = "dicta";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "aut";
                                                }};
                                            }};
                                            questionId = "quam";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "soluta";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 6640248483727917784;
                                                highLabel = "ut";
                                                low = 8848929059379883260;
                                                lowLabel = "corporis";
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
                                        put("ut", "consequatur");
                                    }};
                                    title = "reprehenderit";
                                    videoItem = new VideoItem() {{
                                        caption = "molestiae";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 8845194331613374719;
                                            }};
                                            youtubeUri = "alias";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 6365673651059589931;
                                }};
                                updateMask = "odit";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = false;
                                    }};
                                }};
                                updateMask = "est";
                            }};
                        }}),
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "ipsam";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "natus";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 2017043319546932074;
                                            }};
                                            sourceUri = "id";
                                        }};
                                    }};
                                    itemId = "id";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("praesentium", "eum");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "similique";
                                                        image = new ImageInput() {{
                                                            altText = "dolorem";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 4331683424612488860;
                                                            }};
                                                            sourceUri = "ut";
                                                        }};
                                                        isOther = true;
                                                        value = "voluptates";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "sint";
                                                        image = new ImageInput() {{
                                                            altText = "officia";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 8176688978049856297;
                                                            }};
                                                            sourceUri = "molestiae";
                                                        }};
                                                        isOther = false;
                                                        value = "veritatis";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "et";
                                                        image = new ImageInput() {{
                                                            altText = "consequatur";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 937804065385391186;
                                                            }};
                                                            sourceUri = "ab";
                                                        }};
                                                        isOther = false;
                                                        value = "ut";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHECKBOX";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "soluta";
                                            properties = new MediaProperties() {{
                                                alignment = "LEFT";
                                                width = 8532565030299333282;
                                            }};
                                            sourceUri = "ex";
                                        }};
                                        questions = new openapisdk.models.shared.QuestionInput[]() {{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "dolorem";
                                                            image = new ImageInput() {{
                                                                altText = "atque";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 7173676381597953401;
                                                                }};
                                                                sourceUri = "odio";
                                                            }};
                                                            isOther = true;
                                                            value = "sed";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "quo";
                                                            image = new ImageInput() {{
                                                                altText = "laboriosam";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "CENTER";
                                                                    width = 6113341756331731958;
                                                                }};
                                                                sourceUri = "asperiores";
                                                            }};
                                                            isOther = true;
                                                            value = "minus";
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
                                                    folderId = "laboriosam";
                                                    maxFileSize = "quibusdam";
                                                    maxFiles = 2819362200003246051;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("DRAWING"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "magnam";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dignissimos";
                                                                    uri = "deserunt";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ut";
                                                                    youtubeUri = "ea";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quisquam";
                                                                    uri = "eos";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "provident";
                                                                    youtubeUri = "unde";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sint";
                                                                    uri = "voluptatem";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "possimus";
                                                                    youtubeUri = "id";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "qui";
                                                    }};
                                                    pointValue = 3231570155386035522;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aut";
                                                                    uri = "qui";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eos";
                                                                    youtubeUri = "minima";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "eos";
                                                                    uri = "cum";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "unde";
                                                                    youtubeUri = "iure";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "voluptatem";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "non";
                                                                    uri = "consectetur";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "delectus";
                                                                    youtubeUri = "doloribus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "illum";
                                                    }};
                                                }};
                                                questionId = "aut";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "temporibus";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 6396986826011253211;
                                                    highLabel = "culpa";
                                                    low = 5215664396516975429;
                                                    lowLabel = "aut";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = false;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "aut";
                                                            image = new ImageInput() {{
                                                                altText = "et";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 3178088369864159792;
                                                                }};
                                                                sourceUri = "incidunt";
                                                            }};
                                                            isOther = true;
                                                            value = "atque";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "rerum";
                                                            image = new ImageInput() {{
                                                                altText = "voluptatibus";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 6861158976922495096;
                                                                }};
                                                                sourceUri = "eum";
                                                            }};
                                                            isOther = true;
                                                            value = "aut";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "velit";
                                                            image = new ImageInput() {{
                                                                altText = "officia";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 1958816207259471739;
                                                                }};
                                                                sourceUri = "dignissimos";
                                                            }};
                                                            isOther = false;
                                                            value = "sequi";
                                                        }}),
                                                    }};
                                                    shuffle = true;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = false;
                                                    includeYear = true;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "deleniti";
                                                    maxFileSize = "aperiam";
                                                    maxFiles = 3598885844433504991;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("VIDEO"),
                                                        add("PRESENTATION"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "odit";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "est";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quibusdam";
                                                                    uri = "voluptate";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "tempora";
                                                                    youtubeUri = "earum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vel";
                                                                    uri = "velit";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "assumenda";
                                                                    youtubeUri = "nemo";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ipsam";
                                                                    uri = "sed";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "aut";
                                                                    youtubeUri = "pariatur";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "qui";
                                                    }};
                                                    pointValue = 1338232921561397809;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quo";
                                                                    uri = "alias";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eaque";
                                                                    youtubeUri = "quasi";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "minus";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "deserunt";
                                                                    uri = "corporis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "et";
                                                                    youtubeUri = "recusandae";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "pariatur";
                                                                    uri = "pariatur";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "earum";
                                                                    youtubeUri = "sit";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ea";
                                                                    uri = "sed";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "officiis";
                                                                    youtubeUri = "architecto";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "repudiandae";
                                                    }};
                                                }};
                                                questionId = "similique";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "itaque";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 5556994423579172293;
                                                    highLabel = "minima";
                                                    low = 3573388459826288234;
                                                    lowLabel = "blanditiis";
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
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "doloremque";
                                                            image = new ImageInput() {{
                                                                altText = "et";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 6661899028320474234;
                                                                }};
                                                                sourceUri = "doloremque";
                                                            }};
                                                            isOther = false;
                                                            value = "laborum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "officia";
                                                            image = new ImageInput() {{
                                                                altText = "illo";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 7254681776542875842;
                                                                }};
                                                                sourceUri = "perspiciatis";
                                                            }};
                                                            isOther = false;
                                                            value = "aut";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "sit";
                                                            image = new ImageInput() {{
                                                                altText = "dolorum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 203986857844851483;
                                                                }};
                                                                sourceUri = "perspiciatis";
                                                            }};
                                                            isOther = false;
                                                            value = "tenetur";
                                                        }}),
                                                    }};
                                                    shuffle = true;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = true;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "praesentium";
                                                    maxFileSize = "voluptatibus";
                                                    maxFiles = 9037019048468303874;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("PDF"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "eum";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "molestias";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ut";
                                                                    uri = "qui";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "harum";
                                                                    youtubeUri = "id";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "odit";
                                                    }};
                                                    pointValue = 1202548759633261140;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "molestias";
                                                                    uri = "aspernatur";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "et";
                                                                    youtubeUri = "quis";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "rerum";
                                                                    uri = "cupiditate";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "magnam";
                                                                    youtubeUri = "cupiditate";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "reiciendis";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "adipisci";
                                                                    uri = "repellat";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quibusdam";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "cum";
                                                                    uri = "aut";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "modi";
                                                                    youtubeUri = "voluptatem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "incidunt";
                                                                    uri = "delectus";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "aut";
                                                                    youtubeUri = "temporibus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "unde";
                                                    }};
                                                }};
                                                questionId = "fugit";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "aperiam";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 7398706591747419363;
                                                    highLabel = "tenetur";
                                                    low = 1627815987443598466;
                                                    lowLabel = "rerum";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
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
                                                alignment = "LEFT";
                                                width = 6989108100323595650;
                                            }};
                                            sourceUri = "inventore";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "adipisci";
                                                        image = new ImageInput() {{
                                                            altText = "ut";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 3800853089689168465;
                                                            }};
                                                            sourceUri = "nesciunt";
                                                        }};
                                                        isOther = false;
                                                        value = "labore";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "omnis";
                                                        image = new ImageInput() {{
                                                            altText = "libero";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 4351888861234083089;
                                                            }};
                                                            sourceUri = "vel";
                                                        }};
                                                        isOther = true;
                                                        value = "eius";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "quisquam";
                                                        image = new ImageInput() {{
                                                            altText = "possimus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 3316793807551640197;
                                                            }};
                                                            sourceUri = "nemo";
                                                        }};
                                                        isOther = false;
                                                        value = "quam";
                                                    }}),
                                                }};
                                                shuffle = true;
                                                type = "DROP_DOWN";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = false;
                                                includeYear = true;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "amet";
                                                maxFileSize = "vel";
                                                maxFiles = 7165922407878224179;
                                                types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                    add("VIDEO"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                        add(new CorrectAnswer() {{
                                                            value = "voluptatum";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "adipisci";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "non";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "est";
                                                                uri = "praesentium";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "magnam";
                                                                youtubeUri = "unde";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "nisi";
                                                                uri = "odio";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "accusantium";
                                                                youtubeUri = "nostrum";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "voluptas";
                                                                uri = "voluptatem";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "maxime";
                                                                youtubeUri = "maiores";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "eum";
                                                }};
                                                pointValue = 8700369731861466797;
                                                whenRight = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "expedita";
                                                                uri = "laborum";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "ipsam";
                                                                youtubeUri = "voluptate";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "neque";
                                                                uri = "placeat";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "et";
                                                                youtubeUri = "voluptas";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "qui";
                                                                uri = "nihil";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "accusamus";
                                                                youtubeUri = "necessitatibus";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "provident";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "animi";
                                                                uri = "sint";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "qui";
                                                                youtubeUri = "perspiciatis";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quis";
                                                                uri = "repudiandae";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "dolorem";
                                                                youtubeUri = "eum";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "aut";
                                                                uri = "quia";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "velit";
                                                                youtubeUri = "unde";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "esse";
                                                }};
                                            }};
                                            questionId = "libero";
                                            required = true;
                                            rowQuestion = new RowQuestion() {{
                                                title = "exercitationem";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 2853195486625097571;
                                                highLabel = "temporibus";
                                                low = 3231468013886869670;
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
                                        put("impedit", "ipsa");
                                        put("ut", "quia");
                                    }};
                                    title = "aut";
                                    videoItem = new VideoItem() {{
                                        caption = "aut";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 1081326134909614980;
                                            }};
                                            youtubeUri = "labore";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 3142313999183010632;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 373330970897258000;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 4823395538551457020;
                                }};
                                originalLocation = new Location() {{
                                    index = 4313427477561474133;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "ut";
                                    title = "eos";
                                }};
                                updateMask = "doloribus";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "tempora";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "excepturi";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 656856893155822325;
                                            }};
                                            sourceUri = "quasi";
                                        }};
                                    }};
                                    itemId = "et";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("dolorem", "quis");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "laborum";
                                                        image = new ImageInput() {{
                                                            altText = "quod";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 4712013475708809613;
                                                            }};
                                                            sourceUri = "inventore";
                                                        }};
                                                        isOther = true;
                                                        value = "a";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            shuffleQuestions = true;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "sed";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 5212010378924642503;
                                            }};
                                            sourceUri = "aspernatur";
                                        }};
                                        questions = new openapisdk.models.shared.QuestionInput[]() {{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "corporis";
                                                            image = new ImageInput() {{
                                                                altText = "rerum";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 4463059331769597628;
                                                                }};
                                                                sourceUri = "animi";
                                                            }};
                                                            isOther = false;
                                                            value = "consequatur";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "fugiat";
                                                            image = new ImageInput() {{
                                                                altText = "adipisci";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 8349679207959788138;
                                                                }};
                                                                sourceUri = "eligendi";
                                                            }};
                                                            isOther = true;
                                                            value = "et";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "voluptatem";
                                                            image = new ImageInput() {{
                                                                altText = "esse";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 3784639607199351293;
                                                                }};
                                                                sourceUri = "quibusdam";
                                                            }};
                                                            isOther = true;
                                                            value = "esse";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = true;
                                                    includeYear = true;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "odit";
                                                    maxFileSize = "veritatis";
                                                    maxFiles = 1030922639961997724;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("PRESENTATION"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "architecto";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "qui";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "dolor";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatem";
                                                                    uri = "commodi";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "aut";
                                                                    youtubeUri = "qui";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "labore";
                                                    }};
                                                    pointValue = 6175996145261881715;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "molestias";
                                                                    uri = "et";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "officia";
                                                                    youtubeUri = "ipsum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "et";
                                                                    uri = "velit";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sed";
                                                                    youtubeUri = "at";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "nisi";
                                                                    uri = "eos";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "in";
                                                                    youtubeUri = "expedita";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quisquam";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aperiam";
                                                                    uri = "blanditiis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "consequatur";
                                                                    youtubeUri = "alias";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "magni";
                                                                    uri = "quia";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quibusdam";
                                                                    youtubeUri = "error";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatem";
                                                                    uri = "architecto";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "hic";
                                                                    youtubeUri = "quia";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "et";
                                                    }};
                                                }};
                                                questionId = "voluptatem";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "a";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 416597130987601082;
                                                    highLabel = "id";
                                                    low = 4842681972636288362;
                                                    lowLabel = "qui";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = true;
                                                }};
                                            }}),
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "RESTART_FORM";
                                                            goToSectionId = "dolorum";
                                                            image = new ImageInput() {{
                                                                altText = "dolor";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 7083915196388698276;
                                                                }};
                                                                sourceUri = "nesciunt";
                                                            }};
                                                            isOther = false;
                                                            value = "in";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = true;
                                                    includeYear = true;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "velit";
                                                    maxFileSize = "odio";
                                                    maxFiles = 2306131400465330085;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("AUDIO"),
                                                        add("SPREADSHEET"),
                                                        add("IMAGE"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "omnis";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "enim";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "aspernatur";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "blanditiis";
                                                                    uri = "perferendis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptas";
                                                                    youtubeUri = "perspiciatis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "facilis";
                                                    }};
                                                    pointValue = 3996097095618630264;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "consequuntur";
                                                                    uri = "tenetur";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eos";
                                                                    youtubeUri = "similique";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "et";
                                                                    uri = "cumque";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reprehenderit";
                                                                    youtubeUri = "omnis";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "ut";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quo";
                                                                    uri = "possimus";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "eos";
                                                                    youtubeUri = "aut";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "natus";
                                                                    uri = "consequatur";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "aspernatur";
                                                                    youtubeUri = "dolores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "voluptatibus";
                                                                    uri = "voluptates";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "omnis";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "est";
                                                    }};
                                                }};
                                                questionId = "necessitatibus";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "repudiandae";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 8248084042846592961;
                                                    highLabel = "sed";
                                                    low = 7942731622838581355;
                                                    lowLabel = "tenetur";
                                                }};
                                                textQuestion = new TextQuestion() {{
                                                    paragraph = true;
                                                }};
                                                timeQuestion = new TimeQuestion() {{
                                                    duration = true;
                                                }};
                                            }}),
                                        }};
                                    }};
                                    questionItem = new QuestionItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "voluptatem";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 649641891456441854;
                                            }};
                                            sourceUri = "mollitia";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "magni";
                                                        image = new ImageInput() {{
                                                            altText = "iusto";
                                                            properties = new MediaProperties() {{
                                                                alignment = "LEFT";
                                                                width = 3538580519221516453;
                                                            }};
                                                            sourceUri = "aut";
                                                        }};
                                                        isOther = false;
                                                        value = "aut";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "DROP_DOWN";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = true;
                                                includeYear = false;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "soluta";
                                                maxFileSize = "in";
                                                maxFiles = 3487723477026276890;
                                                types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                    add("SPREADSHEET"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                        add(new CorrectAnswer() {{
                                                            value = "sit";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "voluptas";
                                                                uri = "placeat";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "modi";
                                                                youtubeUri = "et";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "qui";
                                                                uri = "quo";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "rerum";
                                                                youtubeUri = "necessitatibus";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "dolor";
                                                                uri = "exercitationem";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "inventore";
                                                                youtubeUri = "voluptate";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "excepturi";
                                                }};
                                                pointValue = 6289321015740296495;
                                                whenRight = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "et";
                                                                uri = "ipsam";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "odit";
                                                                youtubeUri = "repudiandae";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "repellat";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "consequatur";
                                                                uri = "provident";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "laboriosam";
                                                                youtubeUri = "placeat";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "dignissimos";
                                                }};
                                            }};
                                            questionId = "quos";
                                            required = true;
                                            rowQuestion = new RowQuestion() {{
                                                title = "omnis";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 9155237540204182066;
                                                highLabel = "quis";
                                                low = 2818121241612799699;
                                                lowLabel = "in";
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
                                        put("odio", "ipsam");
                                        put("eos", "eos");
                                    }};
                                    title = "quia";
                                    videoItem = new VideoItem() {{
                                        caption = "et";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 3750985188414910224;
                                            }};
                                            youtubeUri = "esse";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 6360550431968743498;
                                }};
                                updateMask = "et";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = true;
                                    }};
                                }};
                                updateMask = "commodi";
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "aliquid";
                        targetRevisionId = "qui";
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

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
