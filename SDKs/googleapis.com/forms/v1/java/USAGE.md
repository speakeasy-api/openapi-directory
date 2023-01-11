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
                    formId = "sit";
                }};
                queryParams = new FormsFormsBatchUpdateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new BatchUpdateFormRequestInput() {{
                    includeFormInResponse = false;
                    requests = new openapisdk.models.shared.RequestInput[]() {{
                        add(new RequestInput() {{
                            createItem = new CreateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "voluptatum";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "et";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 161231572858529631;
                                            }};
                                            sourceUri = "et";
                                        }};
                                    }};
                                    itemId = "voluptate";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("vitae", "totam");
                                        put("dolores", "illum");
                                        put("debitis", "vel");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "id";
                                                        image = new ImageInput() {{
                                                            altText = "aspernatur";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 1395437218309923052;
                                                            }};
                                                            sourceUri = "commodi";
                                                        }};
                                                        isOther = true;
                                                        value = "est";
                                                    }}),
                                                }};
                                                shuffle = true;
                                                type = "CHECKBOX";
                                            }};
                                            shuffleQuestions = true;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "voluptas";
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 1059542851699319360;
                                            }};
                                            sourceUri = "illo";
                                        }};
                                        questions = new openapisdk.models.shared.QuestionInput[]() {{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "consectetur";
                                                            image = new ImageInput() {{
                                                                altText = "nobis";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 7699391924090763411;
                                                                }};
                                                                sourceUri = "recusandae";
                                                            }};
                                                            isOther = true;
                                                            value = "ipsum";
                                                        }}),
                                                        add(new OptionInput() {{
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "modi";
                                                            image = new ImageInput() {{
                                                                altText = "sint";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "LEFT";
                                                                    width = 7847956203786849690;
                                                                }};
                                                                sourceUri = "exercitationem";
                                                            }};
                                                            isOther = true;
                                                            value = "reprehenderit";
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
                                                    folderId = "beatae";
                                                    maxFileSize = "veritatis";
                                                    maxFiles = 2671030200101705776;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("ANY"),
                                                        add("PRESENTATION"),
                                                        add("PDF"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "placeat";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "vel";
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
                                                                    displayText = "voluptas";
                                                                    uri = "quam";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "reprehenderit";
                                                                    youtubeUri = "qui";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "qui";
                                                                    uri = "unde";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "in";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "qui";
                                                    }};
                                                    pointValue = 35604086129376003;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ab";
                                                                    uri = "neque";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ullam";
                                                                    youtubeUri = "et";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "accusantium";
                                                                    uri = "esse";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "architecto";
                                                                    youtubeUri = "quam";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "velit";
                                                                    uri = "cumque";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "soluta";
                                                                    youtubeUri = "sunt";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "voluptates";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "et";
                                                                    uri = "optio";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "qui";
                                                                    youtubeUri = "earum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "illo";
                                                                    uri = "omnis";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ut";
                                                                    youtubeUri = "consequatur";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolor";
                                                                    uri = "commodi";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "error";
                                                                    youtubeUri = "reprehenderit";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "consectetur";
                                                    }};
                                                }};
                                                questionId = "nostrum";
                                                required = false;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "laboriosam";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 1937101031588528881;
                                                    highLabel = "a";
                                                    low = 1836598054518427835;
                                                    lowLabel = "aut";
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
                                                            goToAction = "NEXT_SECTION";
                                                            goToSectionId = "ipsa";
                                                            image = new ImageInput() {{
                                                                altText = "expedita";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 4234137922270959652;
                                                                }};
                                                                sourceUri = "atque";
                                                            }};
                                                            isOther = true;
                                                            value = "quisquam";
                                                        }}),
                                                    }};
                                                    shuffle = false;
                                                    type = "CHECKBOX";
                                                }};
                                                dateQuestion = new DateQuestion() {{
                                                    includeTime = true;
                                                    includeYear = false;
                                                }};
                                                fileUploadQuestion = new FileUploadQuestion() {{
                                                    folderId = "perferendis";
                                                    maxFileSize = "et";
                                                    maxFiles = 2037591971392316788;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("AUDIO"),
                                                        add("IMAGE"),
                                                        add("AUDIO"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "est";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "quis";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "labore";
                                                                    uri = "et";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "impedit";
                                                                    youtubeUri = "ad";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "expedita";
                                                    }};
                                                    pointValue = 4540487686588600123;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "modi";
                                                                    uri = "nihil";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "tempora";
                                                                    youtubeUri = "deserunt";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "eaque";
                                                                    uri = "sunt";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sit";
                                                                    youtubeUri = "autem";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "quis";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "vel";
                                                                    uri = "placeat";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "qui";
                                                                    youtubeUri = "nisi";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quis";
                                                                    uri = "adipisci";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "porro";
                                                                    youtubeUri = "rerum";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "et";
                                                    }};
                                                }};
                                                questionId = "accusamus";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "laborum";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 8958290475970215309;
                                                    highLabel = "ut";
                                                    low = 4400124260933614083;
                                                    lowLabel = "fugit";
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
                                                            goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                            goToSectionId = "consequuntur";
                                                            image = new ImageInput() {{
                                                                altText = "excepturi";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "ALIGNMENT_UNSPECIFIED";
                                                                    width = 1377327594979300801;
                                                                }};
                                                                sourceUri = "delectus";
                                                            }};
                                                            isOther = false;
                                                            value = "animi";
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
                                                    folderId = "sed";
                                                    maxFileSize = "sed";
                                                    maxFiles = 6464511094049078446;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("DOCUMENT"),
                                                        add("DOCUMENT"),
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
                                                                value = "quasi";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "enim";
                                                                    uri = "qui";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "sit";
                                                                    youtubeUri = "possimus";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "modi";
                                                                    uri = "neque";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "consequuntur";
                                                                    youtubeUri = "quia";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "et";
                                                                    uri = "est";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "occaecati";
                                                                    youtubeUri = "ex";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "voluptatem";
                                                    }};
                                                    pointValue = 7646345395863209143;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "velit";
                                                                    uri = "quae";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "est";
                                                                    youtubeUri = "ut";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "necessitatibus";
                                                                    uri = "in";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "possimus";
                                                                    youtubeUri = "voluptatem";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "dolorum";
                                                                    uri = "doloribus";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "saepe";
                                                                    youtubeUri = "sunt";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "earum";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ut";
                                                                    uri = "asperiores";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "et";
                                                                    youtubeUri = "est";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "ipsum";
                                                                    uri = "quam";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "voluptas";
                                                                    youtubeUri = "nihil";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "dolores";
                                                    }};
                                                }};
                                                questionId = "suscipit";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "non";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 2991421044203248760;
                                                    highLabel = "ut";
                                                    low = 3357930257403748968;
                                                    lowLabel = "illo";
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
                                            altText = "ipsam";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 9105358522635467874;
                                            }};
                                            sourceUri = "blanditiis";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "rerum";
                                                        image = new ImageInput() {{
                                                            altText = "dolore";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 7796777083842162182;
                                                            }};
                                                            sourceUri = "officia";
                                                        }};
                                                        isOther = true;
                                                        value = "sunt";
                                                    }}),
                                                }};
                                                shuffle = false;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            dateQuestion = new DateQuestion() {{
                                                includeTime = true;
                                                includeYear = true;
                                            }};
                                            fileUploadQuestion = new FileUploadQuestion() {{
                                                folderId = "qui";
                                                maxFileSize = "excepturi";
                                                maxFiles = 6315628527077982941;
                                                types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                    add("PDF"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                        add(new CorrectAnswer() {{
                                                            value = "doloremque";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "quae";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "recusandae";
                                                                uri = "qui";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "minus";
                                                                youtubeUri = "et";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "rerum";
                                                                uri = "ut";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "rem";
                                                                youtubeUri = "eos";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "et";
                                                }};
                                                pointValue = 1176850203168067696;
                                                whenRight = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "praesentium";
                                                                uri = "porro";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "nihil";
                                                                youtubeUri = "adipisci";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "consequatur";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "accusantium";
                                                                uri = "atque";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "amet";
                                                                youtubeUri = "nisi";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "quidem";
                                                                uri = "est";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "quo";
                                                                youtubeUri = "vero";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "alias";
                                                                uri = "totam";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "deserunt";
                                                                youtubeUri = "eius";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "repellat";
                                                }};
                                            }};
                                            questionId = "beatae";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "totam";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 6110482739283003758;
                                                highLabel = "et";
                                                low = 7167106058699817943;
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
                                        put("voluptas", "ut");
                                    }};
                                    title = "veniam";
                                    videoItem = new VideoItem() {{
                                        caption = "architecto";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "CENTER";
                                                width = 4841391702283203193;
                                            }};
                                            youtubeUri = "quo";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 7465719782626729327;
                                }};
                            }};
                            deleteItem = new DeleteItemRequest() {{
                                location = new Location() {{
                                    index = 5065591635656109736;
                                }};
                            }};
                            moveItem = new MoveItemRequest() {{
                                newLocation = new Location() {{
                                    index = 1215184329252422444;
                                }};
                                originalLocation = new Location() {{
                                    index = 4178331056796501958;
                                }};
                            }};
                            updateFormInfo = new UpdateFormInfoRequestInput() {{
                                info = new InfoInput() {{
                                    description = "quibusdam";
                                    title = "asperiores";
                                }};
                                updateMask = "quo";
                            }};
                            updateItem = new UpdateItemRequestInput() {{
                                item = new ItemInput() {{
                                    description = "ea";
                                    imageItem = new ImageItemInput() {{
                                        image = new ImageInput() {{
                                            altText = "soluta";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 5850174490929081658;
                                            }};
                                            sourceUri = "blanditiis";
                                        }};
                                    }};
                                    itemId = "facere";
                                    pageBreakItem = new java.util.HashMap<String, Object>() {{
                                        put("et", "odit");
                                        put("est", "id");
                                        put("ipsum", "aut");
                                    }};
                                    questionGroupItem = new QuestionGroupItemInput() {{
                                        grid = new GridInput() {{
                                            columns = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "NEXT_SECTION";
                                                        goToSectionId = "vero";
                                                        image = new ImageInput() {{
                                                            altText = "voluptatem";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 1253678802066634880;
                                                            }};
                                                            sourceUri = "vero";
                                                        }};
                                                        isOther = true;
                                                        value = "cumque";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "non";
                                                        image = new ImageInput() {{
                                                            altText = "non";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 8411630060280462350;
                                                            }};
                                                            sourceUri = "quae";
                                                        }};
                                                        isOther = false;
                                                        value = "magni";
                                                    }}),
                                                }};
                                                shuffle = true;
                                                type = "CHOICE_TYPE_UNSPECIFIED";
                                            }};
                                            shuffleQuestions = false;
                                        }};
                                        image = new ImageInput() {{
                                            altText = "neque";
                                            properties = new MediaProperties() {{
                                                alignment = "RIGHT";
                                                width = 5401654515258649126;
                                            }};
                                            sourceUri = "repudiandae";
                                        }};
                                        questions = new openapisdk.models.shared.QuestionInput[]() {{
                                            add(new QuestionInput() {{
                                                choiceQuestion = new ChoiceQuestionInput() {{
                                                    options = new openapisdk.models.shared.OptionInput[]() {{
                                                        add(new OptionInput() {{
                                                            goToAction = "SUBMIT_FORM";
                                                            goToSectionId = "enim";
                                                            image = new ImageInput() {{
                                                                altText = "ut";
                                                                properties = new MediaProperties() {{
                                                                    alignment = "RIGHT";
                                                                    width = 4671696214766305422;
                                                                }};
                                                                sourceUri = "laborum";
                                                            }};
                                                            isOther = true;
                                                            value = "nihil";
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
                                                    folderId = "autem";
                                                    maxFileSize = "hic";
                                                    maxFiles = 262877386996496551;
                                                    types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                        add("AUDIO"),
                                                        add("DRAWING"),
                                                    }};
                                                }};
                                                grading = new Grading() {{
                                                    correctAnswers = new CorrectAnswers() {{
                                                        answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                            add(new CorrectAnswer() {{
                                                                value = "minus";
                                                            }}),
                                                            add(new CorrectAnswer() {{
                                                                value = "nostrum";
                                                            }}),
                                                        }};
                                                    }};
                                                    generalFeedback = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "sit";
                                                                    uri = "repellat";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "quo";
                                                                    youtubeUri = "dolorum";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "laboriosam";
                                                                    uri = "velit";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "ea";
                                                                    youtubeUri = "tempore";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "fugit";
                                                    }};
                                                    pointValue = 2128339608861509852;
                                                    whenRight = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "aliquid";
                                                                    uri = "mollitia";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "non";
                                                                    youtubeUri = "magni";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "recusandae";
                                                                    uri = "illum";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "consequatur";
                                                                    youtubeUri = "dolores";
                                                                }};
                                                            }}),
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "hic";
                                                                    uri = "nihil";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "explicabo";
                                                                    youtubeUri = "ex";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "iure";
                                                    }};
                                                    whenWrong = new Feedback() {{
                                                        material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                            add(new ExtraMaterial() {{
                                                                link = new TextLink() {{
                                                                    displayText = "quos";
                                                                    uri = "et";
                                                                }};
                                                                video = new VideoLink() {{
                                                                    displayText = "explicabo";
                                                                    youtubeUri = "necessitatibus";
                                                                }};
                                                            }}),
                                                        }};
                                                        text = "veniam";
                                                    }};
                                                }};
                                                questionId = "qui";
                                                required = true;
                                                rowQuestion = new RowQuestion() {{
                                                    title = "odit";
                                                }};
                                                scaleQuestion = new ScaleQuestion() {{
                                                    high = 2552826169751964368;
                                                    highLabel = "corporis";
                                                    low = 6502696439032783967;
                                                    lowLabel = "esse";
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
                                            altText = "id";
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 153570803637391025;
                                            }};
                                            sourceUri = "maiores";
                                        }};
                                        question = new QuestionInput() {{
                                            choiceQuestion = new ChoiceQuestionInput() {{
                                                options = new openapisdk.models.shared.OptionInput[]() {{
                                                    add(new OptionInput() {{
                                                        goToAction = "RESTART_FORM";
                                                        goToSectionId = "aperiam";
                                                        image = new ImageInput() {{
                                                            altText = "repellendus";
                                                            properties = new MediaProperties() {{
                                                                alignment = "CENTER";
                                                                width = 6179772165467236447;
                                                            }};
                                                            sourceUri = "earum";
                                                        }};
                                                        isOther = false;
                                                        value = "officia";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "GO_TO_ACTION_UNSPECIFIED";
                                                        goToSectionId = "dolor";
                                                        image = new ImageInput() {{
                                                            altText = "quia";
                                                            properties = new MediaProperties() {{
                                                                alignment = "RIGHT";
                                                                width = 8724673710750471494;
                                                            }};
                                                            sourceUri = "et";
                                                        }};
                                                        isOther = false;
                                                        value = "recusandae";
                                                    }}),
                                                    add(new OptionInput() {{
                                                        goToAction = "SUBMIT_FORM";
                                                        goToSectionId = "qui";
                                                        image = new ImageInput() {{
                                                            altText = "aut";
                                                            properties = new MediaProperties() {{
                                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                                width = 3417054809625618671;
                                                            }};
                                                            sourceUri = "temporibus";
                                                        }};
                                                        isOther = false;
                                                        value = "sed";
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
                                                folderId = "et";
                                                maxFileSize = "qui";
                                                maxFiles = 5749655769367477879;
                                                types = new openapisdk.models.shared.FileUploadQuestionTypesEnum[]() {{
                                                    add("DOCUMENT"),
                                                    add("SPREADSHEET"),
                                                }};
                                            }};
                                            grading = new Grading() {{
                                                correctAnswers = new CorrectAnswers() {{
                                                    answers = new openapisdk.models.shared.CorrectAnswer[]() {{
                                                        add(new CorrectAnswer() {{
                                                            value = "vero";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "aut";
                                                        }}),
                                                        add(new CorrectAnswer() {{
                                                            value = "et";
                                                        }}),
                                                    }};
                                                }};
                                                generalFeedback = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sunt";
                                                                uri = "quae";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "placeat";
                                                                youtubeUri = "vitae";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "rerum";
                                                                uri = "officiis";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "commodi";
                                                                youtubeUri = "sed";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "voluptates";
                                                }};
                                                pointValue = 1987095690814515857;
                                                whenRight = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "ipsa";
                                                                uri = "cum";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "sint";
                                                                youtubeUri = "aut";
                                                            }};
                                                        }}),
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "eaque";
                                                                uri = "facilis";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "et";
                                                                youtubeUri = "ut";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "et";
                                                }};
                                                whenWrong = new Feedback() {{
                                                    material = new openapisdk.models.shared.ExtraMaterial[]() {{
                                                        add(new ExtraMaterial() {{
                                                            link = new TextLink() {{
                                                                displayText = "sit";
                                                                uri = "voluptate";
                                                            }};
                                                            video = new VideoLink() {{
                                                                displayText = "eaque";
                                                                youtubeUri = "consequuntur";
                                                            }};
                                                        }}),
                                                    }};
                                                    text = "et";
                                                }};
                                            }};
                                            questionId = "amet";
                                            required = false;
                                            rowQuestion = new RowQuestion() {{
                                                title = "in";
                                            }};
                                            scaleQuestion = new ScaleQuestion() {{
                                                high = 6612358853391904586;
                                                highLabel = "minima";
                                                low = 8742852710189167914;
                                                lowLabel = "et";
                                            }};
                                            textQuestion = new TextQuestion() {{
                                                paragraph = true;
                                            }};
                                            timeQuestion = new TimeQuestion() {{
                                                duration = false;
                                            }};
                                        }};
                                    }};
                                    textItem = new java.util.HashMap<String, Object>() {{
                                        put("cupiditate", "quam");
                                    }};
                                    title = "repellendus";
                                    videoItem = new VideoItem() {{
                                        caption = "dolores";
                                        video = new Video() {{
                                            properties = new MediaProperties() {{
                                                alignment = "ALIGNMENT_UNSPECIFIED";
                                                width = 703460223791086499;
                                            }};
                                            youtubeUri = "architecto";
                                        }};
                                    }};
                                }};
                                location = new Location() {{
                                    index = 3689647184521680189;
                                }};
                                updateMask = "beatae";
                            }};
                            updateSettings = new UpdateSettingsRequest() {{
                                settings = new FormSettings() {{
                                    quizSettings = new QuizSettings() {{
                                        isQuiz = true;
                                    }};
                                }};
                                updateMask = "veniam";
                            }};
                        }}),
                    }};
                    writeControl = new WriteControl() {{
                        requiredRevisionId = "hic";
                        targetRevisionId = "beatae";
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