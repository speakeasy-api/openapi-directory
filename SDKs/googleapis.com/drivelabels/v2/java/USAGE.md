<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelLabelTypeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2UserInfo;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LifecycleInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldUserOptions;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldListOptions;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2BadgeConfig;
import org.openapis.openapi.models.shared.GoogleTypeColor;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2BadgeColors;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldDateOptionsInput;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldAppliedCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelAppliedCapabilities;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsCreateRequest req = new DrivelabelsLabelsCreateRequest() {{
                dollarXgafv = "2";
                googleAppsDriveLabelsV2LabelInput = new GoogleAppsDriveLabelsV2LabelInput() {{
                    appliedCapabilities = new GoogleAppsDriveLabelsV2LabelAppliedCapabilities() {{
                        canApply = false;
                        canRead = false;
                        canRemove = false;
                    }};
                    appliedLabelPolicy = new GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy() {{
                        copyMode = "ALWAYS_COPY";
                    }};
                    creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "distinctio";
                    }};
                    disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "quibusdam";
                    }};
                    displayHints = new GoogleAppsDriveLabelsV2LabelDisplayHints() {{
                        disabled = false;
                        hiddenInSearch = false;
                        priority = "unde";
                        shownInApply = false;
                    }};
                    fields = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldInput[]{{
                        add(new GoogleAppsDriveLabelsV2FieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2FieldAppliedCapabilities() {{
                                canRead = false;
                                canSearch = false;
                                canWrite = false;
                            }};
                            creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "corrupti";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = "SHORT_DATE";
                                maxValue = new GoogleTypeDate() {{
                                    day = 423655;
                                    month = 623564;
                                    year = 645894;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 384382;
                                    month = 437587;
                                    year = 297534;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "debitis";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2FieldDisplayHints() {{
                                disabled = false;
                                hiddenInSearch = false;
                                required = false;
                                shownInApply = false;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                    hideInSearch = false;
                                    showInApply = false;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2FieldProperties() {{
                                displayName = "ipsa";
                                insertBeforeField = "delectus";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "tempora";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSchemaCapabilities() {{
                                canDelete = false;
                                canDisable = false;
                                canEnable = false;
                                canUpdate = false;
                            }};
                            selectionOptions = new GoogleAppsDriveLabelsV2FieldSelectionOptionsInput() {{
                                choices = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput[]{{
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "molestiae";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "minus";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 8121.69;
                                                    blue = 5288.95;
                                                    green = 4799.77;
                                                    red = 5680.45;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 3927.85;
                                                    blue = 9255.97;
                                                    green = 8360.79;
                                                    red = 710.36;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 3373.96;
                                                    blue = 871.29;
                                                    green = 6481.72;
                                                    red = 202.18;
                                                }};
                                            }};
                                            badgePriority = "ipsam";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 8326.2;
                                                    blue = 9571.56;
                                                    green = 7781.57;
                                                    red = 1403.5;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 8700.13;
                                                    blue = 8700.88;
                                                    green = 9786.19;
                                                    red = 4736.08;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 7991.59;
                                                    blue = 8009.11;
                                                    green = 4614.79;
                                                    red = 5204.78;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "porro";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 6788.8;
                                                    blue = 1182.74;
                                                    green = 7206.33;
                                                    red = 6399.21;
                                                }};
                                                priorityOverride = "occaecati";
                                            }};
                                            description = "fugit";
                                            displayName = "deleniti";
                                            insertBeforeChoice = "hic";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "optio";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "totam";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "beatae";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "commodi";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 4736;
                                                    blue = 2645.55;
                                                    green = 1863.32;
                                                    red = 7742.34;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 7369.18;
                                                    blue = 4561.5;
                                                    green = 2165.5;
                                                    red = 5684.34;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 1352.18;
                                                    blue = 187.89;
                                                    green = 3241.41;
                                                    red = 6176.36;
                                                }};
                                            }};
                                            badgePriority = "sed";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6120.96;
                                                    blue = 2223.21;
                                                    green = 6169.34;
                                                    red = 3864.89;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 9437.49;
                                                    blue = 9025.99;
                                                    green = 6818.2;
                                                    red = 4499.5;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 3595.08;
                                                    blue = 6130.64;
                                                    green = 4370.32;
                                                    red = 9023.49;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "quidem";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 992.8;
                                                    blue = 602.25;
                                                    green = 9698.1;
                                                    red = 6667.67;
                                                }};
                                                priorityOverride = "mollitia";
                                            }};
                                            description = "laborum";
                                            displayName = "dolores";
                                            insertBeforeChoice = "dolorem";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "corporis";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "explicabo";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 750686;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "enim";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 607831;
                                }};
                            }};
                        }}),
                        add(new GoogleAppsDriveLabelsV2FieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2FieldAppliedCapabilities() {{
                                canRead = false;
                                canSearch = false;
                                canWrite = false;
                            }};
                            creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "nemo";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = "DATE_FORMAT_UNSPECIFIED";
                                maxValue = new GoogleTypeDate() {{
                                    day = 570197;
                                    month = 38425;
                                    year = 438601;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 634274;
                                    month = 988374;
                                    year = 958950;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "architecto";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2FieldDisplayHints() {{
                                disabled = false;
                                hiddenInSearch = false;
                                required = false;
                                shownInApply = false;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                    hideInSearch = false;
                                    showInApply = false;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2FieldProperties() {{
                                displayName = "mollitia";
                                insertBeforeField = "dolorem";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "culpa";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSchemaCapabilities() {{
                                canDelete = false;
                                canDisable = false;
                                canEnable = false;
                                canUpdate = false;
                            }};
                            selectionOptions = new GoogleAppsDriveLabelsV2FieldSelectionOptionsInput() {{
                                choices = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput[]{{
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "repellat";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "mollitia";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 5818.5;
                                                    blue = 2532.91;
                                                    green = 4143.69;
                                                    red = 4663.11;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 4746.97;
                                                    blue = 2444.25;
                                                    green = 6235.1;
                                                    red = 1589.69;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 3380.07;
                                                    blue = 1103.75;
                                                    green = 6747.52;
                                                    red = 6563.3;
                                                }};
                                            }};
                                            badgePriority = "enim";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 1381.83;
                                                    blue = 7783.46;
                                                    green = 1965.82;
                                                    red = 9495.72;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 3687.25;
                                                    blue = 6625.27;
                                                    green = 8209.94;
                                                    red = 135.71;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 971.01;
                                                    blue = 6228.46;
                                                    green = 8379.45;
                                                    red = 6736.6;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "quasi";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 9719.45;
                                                    blue = 9764.6;
                                                    green = 8781.94;
                                                    red = 4686.51;
                                                }};
                                                priorityOverride = "praesentium";
                                            }};
                                            description = "voluptatibus";
                                            displayName = "ipsa";
                                            insertBeforeChoice = "omnis";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "voluptate";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "cum";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 19987;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "doloremque";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 441711;
                                }};
                            }};
                        }}),
                        add(new GoogleAppsDriveLabelsV2FieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2FieldAppliedCapabilities() {{
                                canRead = false;
                                canSearch = false;
                                canWrite = false;
                            }};
                            creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "ut";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = "SHORT_DATE";
                                maxValue = new GoogleTypeDate() {{
                                    day = 120196;
                                    month = 359444;
                                    year = 296140;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 480894;
                                    month = 118727;
                                    year = 688661;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "enim";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2FieldDisplayHints() {{
                                disabled = false;
                                hiddenInSearch = false;
                                required = false;
                                shownInApply = false;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                    hideInSearch = false;
                                    showInApply = false;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2FieldProperties() {{
                                displayName = "accusamus";
                                insertBeforeField = "commodi";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "repudiandae";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSchemaCapabilities() {{
                                canDelete = false;
                                canDisable = false;
                                canEnable = false;
                                canUpdate = false;
                            }};
                            selectionOptions = new GoogleAppsDriveLabelsV2FieldSelectionOptionsInput() {{
                                choices = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput[]{{
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "ipsum";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "quidem";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 5651.89;
                                                    blue = 5666.02;
                                                    green = 8651.03;
                                                    red = 2653.89;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 5089.69;
                                                    blue = 5232.48;
                                                    green = 9167.23;
                                                    red = 939.4;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 9211.58;
                                                    blue = 5759.47;
                                                    green = 831.12;
                                                    red = 9292.97;
                                                }};
                                            }};
                                            badgePriority = "incidunt";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 3185.69;
                                                    blue = 93.56;
                                                    green = 6674.11;
                                                    red = 8423.42;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 1317.97;
                                                    blue = 6471.74;
                                                    green = 7163.27;
                                                    red = 8413.86;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 2894.06;
                                                    blue = 2647.3;
                                                    green = 1831.91;
                                                    red = 3978.21;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "cupiditate";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 5528.22;
                                                    blue = 201.07;
                                                    green = 1649.4;
                                                    red = 8289.4;
                                                }};
                                                priorityOverride = "ipsam";
                                            }};
                                            description = "alias";
                                            displayName = "fugit";
                                            insertBeforeChoice = "dolorum";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "excepturi";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "tempora";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 703737;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "tempore";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 288476;
                                }};
                            }};
                        }}),
                        add(new GoogleAppsDriveLabelsV2FieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2FieldAppliedCapabilities() {{
                                canRead = false;
                                canSearch = false;
                                canWrite = false;
                            }};
                            creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "delectus";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = "LONG_DATE";
                                maxValue = new GoogleTypeDate() {{
                                    day = 248753;
                                    month = 756107;
                                    year = 576157;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 396098;
                                    month = 592042;
                                    year = 896039;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "sint";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2FieldDisplayHints() {{
                                disabled = false;
                                hiddenInSearch = false;
                                required = false;
                                shownInApply = false;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                    hideInSearch = false;
                                    showInApply = false;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2FieldProperties() {{
                                displayName = "officia";
                                insertBeforeField = "dolor";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "debitis";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSchemaCapabilities() {{
                                canDelete = false;
                                canDisable = false;
                                canEnable = false;
                                canUpdate = false;
                            }};
                            selectionOptions = new GoogleAppsDriveLabelsV2FieldSelectionOptionsInput() {{
                                choices = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput[]{{
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "dolorum";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "in";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 4491.98;
                                                    blue = 8464.09;
                                                    green = 9785.71;
                                                    red = 6994.79;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 1162.02;
                                                    blue = 2974.37;
                                                    green = 7670.24;
                                                    red = 8137.98;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 4118.2;
                                                    blue = 3965.06;
                                                    green = 6754.39;
                                                    red = 8811.04;
                                                }};
                                            }};
                                            badgePriority = "non";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 5812.73;
                                                    blue = 3132.18;
                                                    green = 8817.36;
                                                    red = 9654.17;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 6925.32;
                                                    blue = 5884.65;
                                                    green = 7252.55;
                                                    red = 6596.69;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 5013.24;
                                                    blue = 5332.06;
                                                    green = 9560.84;
                                                    red = 2305.33;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "deserunt";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 3948.69;
                                                    blue = 4238.55;
                                                    green = 6188.09;
                                                    red = 6063.93;
                                                }};
                                                priorityOverride = "molestiae";
                                            }};
                                            description = "perferendis";
                                            displayName = "nihil";
                                            insertBeforeChoice = "magnam";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "distinctio";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "id";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "labore";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "labore";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 3834.62;
                                                    blue = 6180.16;
                                                    green = 7491.7;
                                                    red = 4287.69;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 8784.53;
                                                    blue = 1354.74;
                                                    green = 1028.63;
                                                    red = 2982.82;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 923.73;
                                                    blue = 5699.65;
                                                    green = 3540.47;
                                                    red = 5908.73;
                                                }};
                                            }};
                                            badgePriority = "quos";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 5743.25;
                                                    blue = 336.25;
                                                    green = 6532.01;
                                                    red = 9689.62;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 6521.03;
                                                    blue = 3209.97;
                                                    green = 4314.18;
                                                    red = 2212.62;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 8965.47;
                                                    blue = 1412.64;
                                                    green = 3675.62;
                                                    red = 972.6;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "iure";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 9840.43;
                                                    blue = 8919.24;
                                                    green = 2603.41;
                                                    red = 8061.94;
                                                }};
                                                priorityOverride = "deleniti";
                                            }};
                                            description = "facilis";
                                            displayName = "in";
                                            insertBeforeChoice = "architecto";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "architecto";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "repudiandae";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "ullam";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "expedita";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 4692.49;
                                                    blue = 9988.48;
                                                    green = 8411.4;
                                                    red = 1494.48;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 9046.48;
                                                    blue = 8681.26;
                                                    green = 375.59;
                                                    red = 1624.93;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 5083.15;
                                                    blue = 6155.6;
                                                    green = 1668.47;
                                                    red = 1238.2;
                                                }};
                                            }};
                                            badgePriority = "quo";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 8480.09;
                                                    blue = 8649.34;
                                                    green = 8073.19;
                                                    red = 4113.97;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 5691.01;
                                                    blue = 1399.72;
                                                    green = 4071.83;
                                                    red = 332.22;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 691.67;
                                                    blue = 9825.75;
                                                    green = 6974.29;
                                                    red = 3732.91;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "voluptate";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 4200.75;
                                                    blue = 7220.56;
                                                    green = 505.88;
                                                    red = 8663.83;
                                                }};
                                                priorityOverride = "nemo";
                                            }};
                                            description = "voluptatibus";
                                            displayName = "perferendis";
                                            insertBeforeChoice = "fugiat";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "amet";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "aut";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "cumque";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "corporis";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 9441.24;
                                                    blue = 7299.91;
                                                    green = 7499.99;
                                                    red = 1716.29;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 3394.04;
                                                    blue = 5210.37;
                                                    green = 4895.49;
                                                    red = 543.38;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 3389.85;
                                                    blue = 1999.96;
                                                    green = 1794.9;
                                                    red = 185.21;
                                                }};
                                            }};
                                            badgePriority = "dolores";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 7936.98;
                                                    blue = 4634.51;
                                                    green = 2239.24;
                                                    red = 8745.73;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 3453.52;
                                                    blue = 9441.2;
                                                    green = 9280.82;
                                                    red = 6082.53;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 7044.15;
                                                    blue = 5966.56;
                                                    green = 318.38;
                                                    red = 7836.45;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "consequuntur";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 5000.26;
                                                    blue = 6214.79;
                                                    green = 503.7;
                                                    red = 5772.29;
                                                }};
                                                priorityOverride = "rerum";
                                            }};
                                            description = "adipisci";
                                            displayName = "asperiores";
                                            insertBeforeChoice = "earum";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "modi";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "iste";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 679091;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "deleniti";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 864282;
                                }};
                            }};
                        }}),
                    }};
                    labelType = "SHARED";
                    learnMoreUri = "nobis";
                    lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                        disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                            hideInSearch = false;
                            showInApply = false;
                        }};
                    }};
                    properties = new GoogleAppsDriveLabelsV2LabelProperties() {{
                        description = "libero";
                        title = "Dr.";
                    }};
                    publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "quaerat";
                    }};
                    revisionCreator = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "quos";
                    }};
                    schemaCapabilities = new GoogleAppsDriveLabelsV2LabelSchemaCapabilities() {{
                        canDelete = false;
                        canDisable = false;
                        canEnable = false;
                        canUpdate = false;
                    }};
                }};
                accessToken = "aliquid";
                alt = "json";
                callback = "dolorem";
                fields = "dolor";
                key = "qui";
                languageCode = "ipsum";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "cum";
                uploadProtocol = "voluptate";
                useAdminAccess = false;
            }}            

            DrivelabelsLabelsCreateResponse res = sdk.labels.drivelabelsLabelsCreate(req);

            if (res.googleAppsDriveLabelsV2Label.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->