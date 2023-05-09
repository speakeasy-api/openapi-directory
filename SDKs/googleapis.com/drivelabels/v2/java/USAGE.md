<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2BadgeColors;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2BadgeConfig;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldAppliedCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldDateOptionsInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldListOptions;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldUserOptions;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelAppliedCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelLabelTypeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LifecycleInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2UserInfo;
import org.openapis.openapi.models.shared.GoogleTypeColor;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsCreateRequest req = new DrivelabelsLabelsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsDriveLabelsV2LabelInput = new GoogleAppsDriveLabelsV2LabelInput() {{
                    appliedCapabilities = new GoogleAppsDriveLabelsV2LabelAppliedCapabilities() {{
                        canApply = false;
                        canRead = false;
                        canRemove = false;
                    }};;
                    appliedLabelPolicy = new GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy() {{
                        copyMode = GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum.ALWAYS_COPY;
                    }};;
                    creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "distinctio";
                    }};;
                    disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "quibusdam";
                    }};;
                    displayHints = new GoogleAppsDriveLabelsV2LabelDisplayHints() {{
                        disabled = false;
                        hiddenInSearch = false;
                        priority = "unde";
                        shownInApply = false;
                    }};;
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
                                dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.SHORT_DATE;
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
                                        id = "ca1ba928-fc81-4674-acb7-39205929396f";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 9025.99;
                                                    blue = 6818.2;
                                                    green = 4499.5;
                                                    red = 3595.08;
                                                }};
                                                priorityOverride = "iste";
                                            }};
                                            description = "iure";
                                            displayName = "saepe";
                                            insertBeforeChoice = "quidem";
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
                                            person = "ipsa";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "reiciendis";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "est";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6531.4;
                                                    blue = 6706.38;
                                                    green = 1709.09;
                                                    red = 2103.82;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 3581.52;
                                                    blue = 1289.26;
                                                    green = 7506.86;
                                                    red = 3154.28;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 6078.31;
                                                    blue = 3637.11;
                                                    green = 3250.47;
                                                    red = 5701.97;
                                                }};
                                            }};
                                            badgePriority = "accusantium";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 4386.01;
                                                    blue = 6342.74;
                                                    green = 9883.74;
                                                    red = 9589.5;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 1020.44;
                                                    blue = 6527.9;
                                                    green = 2088.76;
                                                    red = 6350.59;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 1613.09;
                                                    blue = 9953;
                                                    green = 6531.08;
                                                    red = 5818.5;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "46773925-1aa5-42c3-b5ad-019da1ffe78f";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 557.14;
                                                    blue = 6048.46;
                                                    green = 4511.59;
                                                    red = 7392.64;
                                                }};
                                                priorityOverride = "perferendis";
                                            }};
                                            description = "doloremque";
                                            displayName = "reprehenderit";
                                            insertBeforeChoice = "ut";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "maiores";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "dicta";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 359444;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "dolore";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 480894;
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
                                person = "dicta";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.SHORT_DATE;
                                maxValue = new GoogleTypeDate() {{
                                    day = 317983;
                                    month = 880476;
                                    year = 414263;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 918236;
                                    month = 64147;
                                    year = 216822;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "quidem";
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
                                displayName = "molestias";
                                insertBeforeField = "excepturi";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "pariatur";
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
                                            person = "praesentium";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "rem";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 9167.23;
                                                    blue = 939.4;
                                                    green = 9211.58;
                                                    red = 5759.47;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 831.12;
                                                    blue = 9292.97;
                                                    green = 2777.18;
                                                    red = 3185.69;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 93.56;
                                                    blue = 6674.11;
                                                    green = 8423.42;
                                                    red = 1317.97;
                                                }};
                                            }};
                                            badgePriority = "deserunt";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 7163.27;
                                                    blue = 8413.86;
                                                    green = 2894.06;
                                                    red = 2647.3;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 1831.91;
                                                    blue = 3978.21;
                                                    green = 5865.13;
                                                    red = 5528.22;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 201.07;
                                                    blue = 1649.4;
                                                    green = 8289.4;
                                                    red = 3698.08;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "02a94bb4-f63c-4969-a9a3-efa77dfb14cd";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 4118.2;
                                                    blue = 3965.06;
                                                    green = 6754.39;
                                                    red = 8811.04;
                                                }};
                                                priorityOverride = "non";
                                            }};
                                            description = "occaecati";
                                            displayName = "enim";
                                            insertBeforeChoice = "accusamus";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "delectus";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "quidem";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "provident";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "nam";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6596.69;
                                                    blue = 5013.24;
                                                    green = 5332.06;
                                                    red = 9560.84;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 2305.33;
                                                    blue = 6439.9;
                                                    green = 3948.69;
                                                    red = 4238.55;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 6188.09;
                                                    blue = 6063.93;
                                                    green = 4748.67;
                                                    red = 191.93;
                                                }};
                                            }};
                                            badgePriority = "nihil";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 3015.75;
                                                    blue = 7160.75;
                                                    green = 6601.74;
                                                    red = 2879.91;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 2900.77;
                                                    blue = 3834.62;
                                                    green = 6180.16;
                                                    red = 7491.7;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 4287.69;
                                                    blue = 8784.53;
                                                    green = 1354.74;
                                                    red = 1028.63;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "41959890-afa5-463e-a516-fe4c8b711e5b";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 4692.49;
                                                    blue = 9988.48;
                                                    green = 8411.4;
                                                    red = 1494.48;
                                                }};
                                                priorityOverride = "saepe";
                                            }};
                                            description = "pariatur";
                                            displayName = "accusantium";
                                            insertBeforeChoice = "consequuntur";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "praesentium";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "natus";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 166847;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "sunt";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 779051;
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
                                person = "illum";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.SHORT_DATE;
                                maxValue = new GoogleTypeDate() {{
                                    day = 807319;
                                    month = 411397;
                                    year = 569101;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 139972;
                                    month = 407183;
                                    year = 33222;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "ab";
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
                                displayName = "maiores";
                                insertBeforeField = "quidem";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "ipsam";
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
                                            person = "autem";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "nam";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 505.88;
                                                    blue = 8663.83;
                                                    green = 3654.96;
                                                    red = 9755.22;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 166.27;
                                                    blue = 8558.04;
                                                    green = 2307.42;
                                                    red = 117.14;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 7649.12;
                                                    blue = 3599.78;
                                                    green = 9441.24;
                                                    red = 7299.91;
                                                }};
                                            }};
                                            badgePriority = "nobis";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 1716.29;
                                                    blue = 3394.04;
                                                    green = 5210.37;
                                                    red = 4895.49;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 543.38;
                                                    blue = 3389.85;
                                                    green = 1999.96;
                                                    red = 1794.9;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 185.21;
                                                    blue = 1709.86;
                                                    green = 7936.98;
                                                    red = 4634.51;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 2123.9;
                                                    blue = 2098.43;
                                                    green = 2224.43;
                                                    red = 1861.93;
                                                }};
                                                priorityOverride = "ipsum";
                                            }};
                                            description = "hic";
                                            displayName = "excepturi";
                                            insertBeforeChoice = "cum";
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
                                            person = "dignissimos";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "reiciendis";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "amet";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6805.45;
                                                    blue = 2543.56;
                                                    green = 852.95;
                                                    red = 580.29;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 564.18;
                                                    blue = 4344.17;
                                                    green = 4878.38;
                                                    red = 3117.96;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 8810.05;
                                                    blue = 6963.44;
                                                    green = 9764.05;
                                                    red = 3777.52;
                                                }};
                                            }};
                                            badgePriority = "natus";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 1796.03;
                                                    blue = 5424.99;
                                                    green = 246.78;
                                                    red = 8546.14;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 672.49;
                                                    blue = 7438.35;
                                                    green = 6793.93;
                                                    red = 4785.96;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 4536.97;
                                                    blue = 6770.82;
                                                    green = 5365.79;
                                                    red = 6070.45;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 6798.8;
                                                    blue = 9527.92;
                                                    green = 4561.3;
                                                    red = 6874.88;
                                                }};
                                                priorityOverride = "iusto";
                                            }};
                                            description = "ipsum";
                                            displayName = "quisquam";
                                            insertBeforeChoice = "tenetur";
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
                                            person = "tempore";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 880298;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "numquam";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 313692;
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
                                person = "dolorem";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.SHORT_DATE;
                                maxValue = new GoogleTypeDate() {{
                                    day = 518201;
                                    month = 471752;
                                    year = 25662;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 711584;
                                    month = 207470;
                                    year = 153694;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "vel";
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
                                displayName = "libero";
                                insertBeforeField = "voluptas";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "deserunt";
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
                                            person = "incidunt";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 1864.58;
                                                    blue = 5867.84;
                                                    green = 8075.81;
                                                    red = 8638.56;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 7470.8;
                                                    blue = 1175.31;
                                                    green = 6748.48;
                                                    red = 5173.79;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 2768.94;
                                                    blue = 1320.68;
                                                    green = 1749.09;
                                                    red = 7168.6;
                                                }};
                                            }};
                                            badgePriority = "facilis";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 3960.6;
                                                    blue = 4631.5;
                                                    green = 5654.21;
                                                    red = 8404.29;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 1832.8;
                                                    blue = 2048.65;
                                                    green = 1448.47;
                                                    red = 1649.59;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 4880.56;
                                                    blue = 1248.33;
                                                    green = 3556.13;
                                                    red = 7220.81;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "f0cbb1e3-1b8b-490f-b443-a1108e0adcf4";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 7034.95;
                                                    blue = 5864.1;
                                                    green = 1816.31;
                                                    red = 639.55;
                                                }};
                                                priorityOverride = "laudantium";
                                            }};
                                            description = "odio";
                                            displayName = "occaecati";
                                            insertBeforeChoice = "voluptatibus";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "quisquam";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "vero";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "omnis";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "quis";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 2184.03;
                                                    blue = 9615.71;
                                                    green = 4551.69;
                                                    red = 2317.01;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 8788.7;
                                                    blue = 9493.19;
                                                    green = 4922.68;
                                                    red = 9413.78;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 7155.61;
                                                    blue = 7992.03;
                                                    green = 4861.6;
                                                    red = 6304.48;
                                                }};
                                            }};
                                            badgePriority = "facilis";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 8742.88;
                                                    blue = 4981.4;
                                                    green = 2930.2;
                                                    red = 8445.5;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 8489.44;
                                                    blue = 1943.42;
                                                    green = 6178.77;
                                                    red = 7733.26;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 132.36;
                                                    blue = 9742.59;
                                                    green = 3472.33;
                                                    red = 8623.1;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "2cff7c70-a456-426d-8368-13f16d9f5fce";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 4113.72;
                                                    blue = 7740.48;
                                                    green = 3592.71;
                                                    red = 3331.45;
                                                }};
                                                priorityOverride = "aliquid";
                                            }};
                                            description = "inventore";
                                            displayName = "magnam";
                                            insertBeforeChoice = "ea";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "quo";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "consectetur";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 926213;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "aspernatur";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 325310;
                                }};
                            }};
                        }}),
                    }};
                    labelType = GoogleAppsDriveLabelsV2LabelLabelTypeEnum.LABEL_TYPE_UNSPECIFIED;
                    learnMoreUri = "a";
                    lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                        disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                            hideInSearch = false;
                            showInApply = false;
                        }};;
                    }};;
                    properties = new GoogleAppsDriveLabelsV2LabelProperties() {{
                        description = "libero";
                        title = "Mr.";
                    }};;
                    publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "aut";
                    }};;
                    revisionCreator = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "deleniti";
                    }};;
                    schemaCapabilities = new GoogleAppsDriveLabelsV2LabelSchemaCapabilities() {{
                        canDelete = false;
                        canDisable = false;
                        canEnable = false;
                        canUpdate = false;
                    }};;
                }};;
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "accusamus";
                key = "inventore";
                languageCode = "non";
                oauthToken = "et";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "laborum";
                uploadProtocol = "placeat";
                useAdminAccess = false;
            }};            

            DrivelabelsLabelsCreateResponse res = sdk.labels.drivelabelsLabelsCreate(req);

            if (res.googleAppsDriveLabelsV2Label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->