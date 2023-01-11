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

            DrivelabelsLabelsCreateRequest req = new DrivelabelsLabelsCreateRequest() {{
                queryParams = new DrivelabelsLabelsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "voluptas";
                    alt = "media";
                    callback = "expedita";
                    fields = "consequuntur";
                    key = "dolor";
                    languageCode = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                    useAdminAccess = false;
                }};
                request = new GoogleAppsDriveLabelsV2betaLabelInput() {{
                    appliedCapabilities = new GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities() {{
                        canApply = true;
                        canRead = true;
                        canRemove = false;
                    }};
                    appliedLabelPolicy = new GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy() {{
                        copyMode = "COPY_APPLIABLE";
                    }};
                    creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "dolorem";
                    }};
                    disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "et";
                    }};
                    displayHints = new GoogleAppsDriveLabelsV2betaLabelDisplayHints() {{
                        disabled = false;
                        hiddenInSearch = true;
                        priority = "vitae";
                        shownInApply = true;
                    }};
                    fields = new openapisdk.models.shared.GoogleAppsDriveLabelsV2betaFieldInput[]() {{
                        add(new GoogleAppsDriveLabelsV2betaFieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities() {{
                                canRead = false;
                                canSearch = true;
                                canWrite = false;
                            }};
                            creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "odio";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2betaFieldDateOptionsInput() {{
                                dateFormatType = "LONG_DATE";
                                maxValue = new GoogleTypeDate() {{
                                    day = 4035568504096476779;
                                    month = 959367522974354090;
                                    year = 2914295034816259174;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 1395437218309923052;
                                    month = 6745438398739480977;
                                    year = 2897681629866238117;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "est";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2betaFieldDisplayHints() {{
                                disabled = true;
                                hiddenInSearch = true;
                                required = true;
                                shownInApply = false;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                    hideInSearch = true;
                                    showInApply = false;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2betaFieldProperties() {{
                                displayName = "illo";
                                insertBeforeField = "sed";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "autem";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities() {{
                                canDelete = true;
                                canDisable = false;
                                canEnable = false;
                                canUpdate = false;
                            }};
                            selectionOptions = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput() {{
                                choices = new openapisdk.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput[]() {{
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = true;
                                            canSearch = false;
                                            canSelect = true;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "modi";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "sint";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 77.099998;
                                                    blue = 56.099998;
                                                    green = 30.200001;
                                                    red = 97.099998;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 94.199997;
                                                    blue = 19.100000;
                                                    green = 69.199997;
                                                    red = 3.100000;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 64.199997;
                                                    blue = 78.199997;
                                                    green = 89.099998;
                                                    red = 63.200001;
                                                }};
                                            }};
                                            badgePriority = "qui";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 78.099998;
                                                    blue = 31.100000;
                                                    green = 13.100000;
                                                    red = 26.100000;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 90.099998;
                                                    blue = 92.099998;
                                                    green = 68.099998;
                                                    red = 38.200001;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 20.100000;
                                                    blue = 41.200001;
                                                    green = 89.199997;
                                                    red = 41.099998;
                                                }};
                                            }};
                                            disabled = true;
                                            hiddenInSearch = true;
                                            shownInApply = true;
                                        }};
                                        id = "ut";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = true;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 26.100000;
                                                    blue = 19.200001;
                                                    green = 59.200001;
                                                    red = 64.099998;
                                                }};
                                                priorityOverride = "a";
                                            }};
                                            description = "soluta";
                                            displayName = "aut";
                                            insertBeforeChoice = "quas";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "consequuntur";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = true;
                                            canEnable = true;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "doloremque";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = true;
                                            canSearch = false;
                                            canSelect = true;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "quisquam";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "explicabo";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 42.099998;
                                                    blue = 15.200000;
                                                    green = 66.099998;
                                                    red = 94.199997;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 97.199997;
                                                    blue = 1.200000;
                                                    green = 40.200001;
                                                    red = 94.199997;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 31.100000;
                                                    blue = 70.099998;
                                                    green = 87.099998;
                                                    red = 50.200001;
                                                }};
                                            }};
                                            badgePriority = "deserunt";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 59.099998;
                                                    blue = 68.099998;
                                                    green = 66.099998;
                                                    red = 91.099998;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 13.200000;
                                                    blue = 96.099998;
                                                    green = 5.100000;
                                                    red = 54.099998;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 2.100000;
                                                    blue = 37.200001;
                                                    green = 63.099998;
                                                    red = 27.200001;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = true;
                                        }};
                                        id = "excepturi";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = true;
                                                showInApply = true;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 29.200001;
                                                    blue = 20.100000;
                                                    green = 28.100000;
                                                    red = 95.099998;
                                                }};
                                                priorityOverride = "sed";
                                            }};
                                            description = "et";
                                            displayName = "consequuntur";
                                            insertBeforeChoice = "non";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "cupiditate";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = true;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "corrupti";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = true;
                                            canSelect = true;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "possimus";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "modi";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 18.200001;
                                                    blue = 33.099998;
                                                    green = 28.100000;
                                                    red = 93.099998;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 20.200001;
                                                    blue = 73.099998;
                                                    green = 45.099998;
                                                    red = 56.099998;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 18.100000;
                                                    blue = 57.099998;
                                                    green = 47.200001;
                                                    red = 59.099998;
                                                }};
                                            }};
                                            badgePriority = "ut";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 80.099998;
                                                    blue = 47.099998;
                                                    green = 3.200000;
                                                    red = 58.200001;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 69.199997;
                                                    blue = 66.199997;
                                                    green = 25.200001;
                                                    red = 16.200001;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 14.100000;
                                                    blue = 78.199997;
                                                    green = 46.099998;
                                                    red = 84.099998;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = true;
                                            shownInApply = true;
                                        }};
                                        id = "officia";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = true;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 30.100000;
                                                    blue = 43.099998;
                                                    green = 80.099998;
                                                    red = 55.200001;
                                                }};
                                                priorityOverride = "dicta";
                                            }};
                                            description = "rem";
                                            displayName = "doloremque";
                                            insertBeforeChoice = "quae";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "nisi";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = true;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "rerum";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 7434067341455688771;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "rem";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2betaFieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 2386043087176739176;
                                }};
                            }};
                        }}),
                    }};
                    labelType = "LABEL_TYPE_UNSPECIFIED";
                    learnMoreUri = "reiciendis";
                    lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                        disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                            hideInSearch = true;
                            showInApply = true;
                        }};
                    }};
                    properties = new GoogleAppsDriveLabelsV2betaLabelProperties() {{
                        description = "porro";
                        title = "nihil";
                    }};
                    publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "adipisci";
                    }};
                    revisionCreator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "consequatur";
                    }};
                    schemaCapabilities = new GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities() {{
                        canDelete = false;
                        canDisable = false;
                        canEnable = true;
                        canUpdate = true;
                    }};
                }};
            }};

            DrivelabelsLabelsCreateResponse res = sdk.labels.drivelabelsLabelsCreate(req);

            if (res.googleAppsDriveLabelsV2betaLabel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->