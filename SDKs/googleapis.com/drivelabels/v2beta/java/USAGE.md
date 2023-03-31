<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateQueryParams;
import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateResponse;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLabelInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaUserInfo;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLabelProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLifecycleInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldUserOptions;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldListOptions;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaBadgeConfig;
import org.openapis.openapi.models.shared.GoogleTypeColor;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaBadgeColors;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsCreateRequest req = new DrivelabelsLabelsCreateRequest() {{
                queryParams = new DrivelabelsLabelsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "provident";
                    alt = "proto";
                    callback = "quibusdam";
                    fields = "unde";
                    key = "nulla";
                    languageCode = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                    useAdminAccess = false;
                }};
                request = new GoogleAppsDriveLabelsV2betaLabelInput() {{
                    appliedCapabilities = new GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities() {{
                        canApply = false;
                        canRead = false;
                        canRemove = false;
                    }};
                    appliedLabelPolicy = new GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy() {{
                        copyMode = "DO_NOT_COPY";
                    }};
                    creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "iure";
                    }};
                    disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "magnam";
                    }};
                    displayHints = new GoogleAppsDriveLabelsV2betaLabelDisplayHints() {{
                        disabled = false;
                        hiddenInSearch = false;
                        priority = "debitis";
                        shownInApply = false;
                    }};
                    fields = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldInput[]{{
                        add(new GoogleAppsDriveLabelsV2betaFieldInput() {{
                            appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities() {{
                                canRead = false;
                                canSearch = false;
                                canWrite = false;
                            }};
                            creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "delectus";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2betaFieldDateOptionsInput() {{
                                dateFormatType = "DATE_FORMAT_UNSPECIFIED";
                                maxValue = new GoogleTypeDate() {{
                                    day = 383441;
                                    month = 477665;
                                    year = 791725;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 812169;
                                    month = 528895;
                                    year = 479977;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "excepturi";
                            }};
                            displayHints = new GoogleAppsDriveLabelsV2betaFieldDisplayHints() {{
                                disabled = false;
                                hiddenInSearch = false;
                                required = false;
                                shownInApply = false;
                            }};
                            lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                    hideInSearch = false;
                                    showInApply = false;
                                }};
                            }};
                            properties = new GoogleAppsDriveLabelsV2betaFieldProperties() {{
                                displayName = "nisi";
                                insertBeforeField = "recusandae";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "temporibus";
                            }};
                            schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities() {{
                                canDelete = false;
                                canDisable = false;
                                canEnable = false;
                                canUpdate = false;
                            }};
                            selectionOptions = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput() {{
                                choices = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput[]{{
                                    add(new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "quis";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "veritatis";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6481.72;
                                                    blue = 202.18;
                                                    green = 3682.41;
                                                    red = 8326.2;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 9571.56;
                                                    blue = 7781.57;
                                                    green = 1403.5;
                                                    red = 8700.13;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 8700.88;
                                                    blue = 9786.19;
                                                    green = 4736.08;
                                                    red = 7991.59;
                                                }};
                                            }};
                                            badgePriority = "quod";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2betaBadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 4614.79;
                                                    blue = 5204.78;
                                                    green = 7805.29;
                                                    red = 6788.8;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 1182.74;
                                                    blue = 7206.33;
                                                    green = 6399.21;
                                                    red = 5820.2;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 1433.53;
                                                    blue = 5373.73;
                                                    green = 9446.69;
                                                    red = 7586.16;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "totam";
                                        lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2betaBadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 1059.07;
                                                    blue = 4146.62;
                                                    green = 4736;
                                                    red = 2645.55;
                                                }};
                                                priorityOverride = "qui";
                                            }};
                                            description = "impedit";
                                            displayName = "cum";
                                            insertBeforeChoice = "esse";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "ipsum";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                            person = "excepturi";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 135218;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                                person = "perferendis";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2betaFieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2betaFieldListOptions() {{
                                    maxEntries = 324141;
                                }};
                            }};
                        }}),
                    }};
                    labelType = "SHARED";
                    learnMoreUri = "sed";
                    lifecycle = new GoogleAppsDriveLabelsV2betaLifecycleInput() {{
                        disabledPolicy = new GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy() {{
                            hideInSearch = false;
                            showInApply = false;
                        }};
                    }};
                    properties = new GoogleAppsDriveLabelsV2betaLabelProperties() {{
                        description = "iste";
                        title = "Mrs.";
                    }};
                    publisher = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "natus";
                    }};
                    revisionCreator = new GoogleAppsDriveLabelsV2betaUserInfo() {{
                        person = "laboriosam";
                    }};
                    schemaCapabilities = new GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities() {{
                        canDelete = false;
                        canDisable = false;
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