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

            DrivelabelsLabelsCreateRequest req = new DrivelabelsLabelsCreateRequest() {{
                queryParams = new DrivelabelsLabelsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "repellendus";
                    alt = "proto";
                    callback = "quidem";
                    fields = "consequatur";
                    key = "corrupti";
                    languageCode = "qui";
                    oauthToken = "illo";
                    prettyPrint = false;
                    quotaUser = "earum";
                    uploadType = "sunt";
                    uploadProtocol = "laborum";
                    useAdminAccess = true;
                }};
                request = new GoogleAppsDriveLabelsV2betaLabelInput() {{
                    appliedCapabilities = new GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities() {{
                        canApply = false;
                        canRead = false;
                        canRemove = true;
                    }};
                    appliedLabelPolicy = new GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy() {{
                        copyMode = "COPY_MODE_UNSPECIFIED";
                    }};
                    creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "corrupti";
                    }};
                    disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "est";
                    }};
                    displayHints = new GoogleAppsDriveLabelsV2betaLabelDisplayHints() {{
                        disabled = true;
                        hiddenInSearch = false;
                        priority = "quod";
                        shownInApply = true;
                    }};
                    fields = new openapisdk.models.shared.GoogleAppsDriveLabelsV2betaFieldInput[]() {{
                        add(new GoogleAppsDriveLabelsV2betaFieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities() {{
                                canRead = true;
                                canSearch = false;
                                canWrite = false;
                            }};
                            creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "labore";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2betaFieldDateOptionsInput() {{
                                dateFormatType = "DATE_FORMAT_UNSPECIFIED";
                                maxValue = new GoogleTypeDate() {{
                                    day = 5534192716385542712;
                                    month = 7766255117569119462;
                                    year = 4272172474385962946;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 2417643266795297980;
                                    month = 7424544533425613880;
                                    year = 3104234473811014069;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "a";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2betaFieldDisplayHints() {{
                                disabled = false;
                                hiddenInSearch = true;
                                required = false;
                                shownInApply = true;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                    hideInSearch = true;
                                    showInApply = false;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2betaFieldProperties() {{
                                displayName = "enim";
                                insertBeforeField = "accusantium";
                                required = true;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "dolores";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities() {{
                                canDelete = true;
                                canDisable = true;
                                canEnable = true;
                                canUpdate = true;
                            }};
                            selectionOptions = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput() {{
                                choices = new openapisdk.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput[]() {{
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = true;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "natus";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "fugiat";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 42.200001;
                                                    blue = 69.099998;
                                                    green = 95.199997;
                                                    red = 13.100000;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 7.100000;
                                                    blue = 20.200001;
                                                    green = 38.200001;
                                                    red = 46.200001;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 51.200001;
                                                    blue = 51.099998;
                                                    green = 35.099998;
                                                    red = 80.199997;
                                                }};
                                            }};
                                            badgePriority = "est";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 64.199997;
                                                    blue = 47.200001;
                                                    green = 1.200000;
                                                    red = 27.200001;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 92.099998;
                                                    blue = 21.100000;
                                                    green = 96.099998;
                                                    red = 61.099998;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 35.099998;
                                                    blue = 73.099998;
                                                    green = 84.099998;
                                                    red = 1.200000;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = true;
                                        }};
                                        id = "sapiente";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = true;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 32.200001;
                                                    blue = 7.200000;
                                                    green = 96.099998;
                                                    red = 89.099998;
                                                }};
                                                priorityOverride = "enim";
                                            }};
                                            description = "asperiores";
                                            displayName = "molestias";
                                            insertBeforeChoice = "accusantium";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "quia";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = true;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "eum";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 4652360340631601864;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "assumenda";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2betaFieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 263804207177945892;
                                }};
                            }};
                        }}),
                        add(new GoogleAppsDriveLabelsV2betaFieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities() {{
                                canRead = true;
                                canSearch = false;
                                canWrite = false;
                            }};
                            creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "culpa";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2betaFieldDateOptionsInput() {{
                                dateFormatType = "LONG_DATE";
                                maxValue = new GoogleTypeDate() {{
                                    day = 7278689172350406277;
                                    month = 1770261655771269438;
                                    year = 3663847910555717574;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 3834780785666994060;
                                    month = 2481309397277863472;
                                    year = 7669970830275219153;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "earum";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2betaFieldDisplayHints() {{
                                disabled = false;
                                hiddenInSearch = true;
                                required = true;
                                shownInApply = true;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                    hideInSearch = true;
                                    showInApply = false;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2betaFieldProperties() {{
                                displayName = "pariatur";
                                insertBeforeField = "qui";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "voluptatem";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities() {{
                                canDelete = false;
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
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "qui";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "deserunt";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 62.200001;
                                                    blue = 27.200001;
                                                    green = 30.100000;
                                                    red = 54.200001;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 66.199997;
                                                    blue = 19.200001;
                                                    green = 88.199997;
                                                    red = 38.099998;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 95.099998;
                                                    blue = 34.099998;
                                                    green = 79.099998;
                                                    red = 13.200000;
                                                }};
                                            }};
                                            badgePriority = "assumenda";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 52.099998;
                                                    blue = 56.200001;
                                                    green = 62.200001;
                                                    red = 69.099998;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 54.099998;
                                                    blue = 91.199997;
                                                    green = 93.099998;
                                                    red = 91.099998;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 84.199997;
                                                    blue = 24.200001;
                                                    green = 32.200001;
                                                    red = 92.199997;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = true;
                                            shownInApply = false;
                                        }};
                                        id = "earum";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = true;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 26.200001;
                                                    blue = 64.099998;
                                                    green = 5.100000;
                                                    red = 5.200000;
                                                }};
                                                priorityOverride = "voluptate";
                                            }};
                                            description = "accusantium";
                                            displayName = "aut";
                                            insertBeforeChoice = "at";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "vel";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "cum";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = true;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "ipsa";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "numquam";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 92.199997;
                                                    blue = 55.099998;
                                                    green = 14.100000;
                                                    red = 76.199997;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 9.100000;
                                                    blue = 6.200000;
                                                    green = 64.099998;
                                                    red = 98.199997;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 18.100000;
                                                    blue = 30.100000;
                                                    green = 55.099998;
                                                    red = 78.199997;
                                                }};
                                            }};
                                            badgePriority = "alias";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 58.099998;
                                                    blue = 1.100000;
                                                    green = 85.199997;
                                                    red = 17.100000;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 29.200001;
                                                    blue = 9.200000;
                                                    green = 4.100000;
                                                    red = 16.200001;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 61.200001;
                                                    blue = 31.200001;
                                                    green = 19.200001;
                                                    red = 49.200001;
                                                }};
                                            }};
                                            disabled = true;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "magnam";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 25.200001;
                                                    blue = 9.200000;
                                                    green = 92.199997;
                                                    red = 89.099998;
                                                }};
                                                priorityOverride = "vel";
                                            }};
                                            description = "aut";
                                            displayName = "et";
                                            insertBeforeChoice = "dignissimos";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "aut";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = true;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "soluta";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = true;
                                            canSearch = true;
                                            canSelect = true;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "ut";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "magni";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 35.200001;
                                                    blue = 71.199997;
                                                    green = 40.200001;
                                                    red = 88.099998;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 81.099998;
                                                    blue = 41.099998;
                                                    green = 94.199997;
                                                    red = 27.100000;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 71.099998;
                                                    blue = 85.199997;
                                                    green = 82.099998;
                                                    red = 32.200001;
                                                }};
                                            }};
                                            badgePriority = "quae";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 18.100000;
                                                    blue = 70.099998;
                                                    green = 84.199997;
                                                    red = 30.100000;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 56.099998;
                                                    blue = 80.199997;
                                                    green = 17.200001;
                                                    red = 89.099998;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 16.200001;
                                                    blue = 56.200001;
                                                    green = 41.099998;
                                                    red = 37.099998;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = true;
                                            shownInApply = true;
                                        }};
                                        id = "totam";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = true;
                                                showInApply = true;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 30.100000;
                                                    blue = 23.200001;
                                                    green = 7.200000;
                                                    red = 22.100000;
                                                }};
                                                priorityOverride = "non";
                                            }};
                                            description = "iusto";
                                            displayName = "et";
                                            insertBeforeChoice = "et";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "quod";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = true;
                                            canEnable = true;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "quia";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 5451247501904893617;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "provident";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2betaFieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 8384809910953804387;
                                }};
                            }};
                        }}),
                        add(new GoogleAppsDriveLabelsV2betaFieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities() {{
                                canRead = true;
                                canSearch = true;
                                canWrite = true;
                            }};
                            creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "qui";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2betaFieldDateOptionsInput() {{
                                dateFormatType = "DATE_FORMAT_UNSPECIFIED";
                                maxValue = new GoogleTypeDate() {{
                                    day = 5512550995837990606;
                                    month = 2446343920521465149;
                                    year = 2433634541100086189;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 3807359813755995270;
                                    month = 2414431317002566233;
                                    year = 5687243959435260900;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "blanditiis";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2betaFieldDisplayHints() {{
                                disabled = false;
                                hiddenInSearch = false;
                                required = true;
                                shownInApply = true;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                    hideInSearch = false;
                                    showInApply = true;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2betaFieldProperties() {{
                                displayName = "aut";
                                insertBeforeField = "et";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "cum";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities() {{
                                canDelete = true;
                                canDisable = false;
                                canEnable = false;
                                canUpdate = true;
                            }};
                            selectionOptions = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput() {{
                                choices = new openapisdk.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput[]() {{
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = true;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "quam";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "dolorem";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 46.099998;
                                                    blue = 52.099998;
                                                    green = 19.200001;
                                                    red = 41.099998;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 52.099998;
                                                    blue = 53.200001;
                                                    green = 57.200001;
                                                    red = 17.100000;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 51.200001;
                                                    blue = 57.099998;
                                                    green = 27.100000;
                                                    red = 13.200000;
                                                }};
                                            }};
                                            badgePriority = "eveniet";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 92.199997;
                                                    blue = 92.099998;
                                                    green = 77.099998;
                                                    red = 3.200000;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 17.200001;
                                                    blue = 17.200001;
                                                    green = 70.099998;
                                                    red = 41.200001;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 75.199997;
                                                    blue = 62.200001;
                                                    green = 78.199997;
                                                    red = 97.099998;
                                                }};
                                            }};
                                            disabled = true;
                                            hiddenInSearch = true;
                                            shownInApply = false;
                                        }};
                                        id = "ut";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = true;
                                                showInApply = true;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 82.099998;
                                                    blue = 73.099998;
                                                    green = 2.100000;
                                                    red = 42.099998;
                                                }};
                                                priorityOverride = "velit";
                                            }};
                                            description = "et";
                                            displayName = "deserunt";
                                            insertBeforeChoice = "velit";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "sequi";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = true;
                                            canEnable = true;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "illum";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "iusto";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "ut";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 5.100000;
                                                    blue = 95.199997;
                                                    green = 9.100000;
                                                    red = 89.199997;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 20.100000;
                                                    blue = 94.099998;
                                                    green = 21.100000;
                                                    red = 27.100000;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 61.099998;
                                                    blue = 52.200001;
                                                    green = 85.099998;
                                                    red = 92.099998;
                                                }};
                                            }};
                                            badgePriority = "laboriosam";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 90.199997;
                                                    blue = 59.099998;
                                                    green = 13.100000;
                                                    red = 77.099998;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 71.099998;
                                                    blue = 12.200000;
                                                    green = 32.099998;
                                                    red = 9.100000;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 30.200001;
                                                    blue = 11.200000;
                                                    green = 1.200000;
                                                    red = 59.099998;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = true;
                                            shownInApply = false;
                                        }};
                                        id = "tempora";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = true;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 55.200001;
                                                    blue = 42.200001;
                                                    green = 56.200001;
                                                    red = 90.199997;
                                                }};
                                                priorityOverride = "quisquam";
                                            }};
                                            description = "ducimus";
                                            displayName = "omnis";
                                            insertBeforeChoice = "quidem";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "fugit";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = true;
                                            canUpdate = true;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "et";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 5132854660169586529;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "enim";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2betaFieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 356164997723776192;
                                }};
                            }};
                        }}),
                    }};
                    labelType = "ADMIN";
                    learnMoreUri = "quis";
                    lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                        disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                            hideInSearch = true;
                            showInApply = true;
                        }};
                    }};
                    properties = new GoogleAppsDriveLabelsV2betaLabelProperties() {{
                        description = "et";
                        title = "eius";
                    }};
                    publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "atque";
                    }};
                    revisionCreator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "ipsa";
                    }};
                    schemaCapabilities = new GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities() {{
                        canDelete = false;
                        canDisable = true;
                        canEnable = false;
                        canUpdate = false;
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### labels

* `drivelabelsLabelsCreate` - Creates a new Label.
* `drivelabelsLabelsDelta` - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* `drivelabelsLabelsDisable` - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* `drivelabelsLabelsEnable` - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* `drivelabelsLabelsList` - List labels.
* `drivelabelsLabelsPublish` - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* `drivelabelsLabelsRevisionsLocksList` - Lists the LabelLocks on a Label.
* `drivelabelsLabelsRevisionsPermissionsBatchDelete` - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsRevisionsPermissionsBatchUpdate` - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsRevisionsPermissionsCreate` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsRevisionsPermissionsDelete` - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsRevisionsPermissionsList` - Lists a Label's permissions.
* `drivelabelsLabelsRevisionsUpdatePermissions` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `drivelabelsLabelsUpdateLabelCopyMode` - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### limits

* `drivelabelsLimitsGetLabel` - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### users

* `drivelabelsUsersGetCapabilities` - Gets the user capabilities.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
