# labels

### Available Operations

* [drivelabelsLabelsCreate](#drivelabelslabelscreate) - Creates a new Label.
* [drivelabelsLabelsDelta](#drivelabelslabelsdelta) - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* [drivelabelsLabelsDisable](#drivelabelslabelsdisable) - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* [drivelabelsLabelsEnable](#drivelabelslabelsenable) - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* [drivelabelsLabelsList](#drivelabelslabelslist) - List labels.
* [drivelabelsLabelsPublish](#drivelabelslabelspublish) - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* [drivelabelsLabelsRevisionsLocksList](#drivelabelslabelsrevisionslockslist) - Lists the LabelLocks on a Label.
* [drivelabelsLabelsRevisionsPermissionsBatchDelete](#drivelabelslabelsrevisionspermissionsbatchdelete) - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsBatchUpdate](#drivelabelslabelsrevisionspermissionsbatchupdate) - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsCreate](#drivelabelslabelsrevisionspermissionscreate) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsDelete](#drivelabelslabelsrevisionspermissionsdelete) - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsRevisionsPermissionsList](#drivelabelslabelsrevisionspermissionslist) - Lists a Label's permissions.
* [drivelabelsLabelsRevisionsUpdatePermissions](#drivelabelslabelsrevisionsupdatepermissions) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [drivelabelsLabelsUpdateLabelCopyMode](#drivelabelslabelsupdatelabelcopymode) - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

## drivelabelsLabelsCreate

Creates a new Label.

### Example Usage

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
                dollarXgafv = XgafvEnum.ONE;
                googleAppsDriveLabelsV2LabelInput = new GoogleAppsDriveLabelsV2LabelInput() {{
                    appliedCapabilities = new GoogleAppsDriveLabelsV2LabelAppliedCapabilities() {{
                        canApply = false;
                        canRead = false;
                        canRemove = false;
                    }};;
                    appliedLabelPolicy = new GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy() {{
                        copyMode = GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum.DO_NOT_COPY;
                    }};;
                    creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "autem";
                    }};;
                    disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "nobis";
                    }};;
                    displayHints = new GoogleAppsDriveLabelsV2LabelDisplayHints() {{
                        disabled = false;
                        hiddenInSearch = false;
                        priority = "quas";
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
                                person = "nulla";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.LONG_DATE;
                                maxValue = new GoogleTypeDate() {{
                                    day = 727044;
                                    month = 96549;
                                    year = 270328;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 256139;
                                    month = 131482;
                                    year = 591935;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "ipsa";
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
                                displayName = "molestiae";
                                insertBeforeField = "magnam";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "odio";
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
                                            person = "esse";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "esse";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 5245.93;
                                                    blue = 6832.82;
                                                    green = 4420.15;
                                                    red = 6956.26;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 8526.35;
                                                    blue = 2835.19;
                                                    green = 4334.39;
                                                    red = 3799.27;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 8268.71;
                                                    blue = 1811.51;
                                                    green = 5093.42;
                                                    red = 7885.46;
                                                }};
                                            }};
                                            badgePriority = "veritatis";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 568.48;
                                                    blue = 6600.4;
                                                    green = 6969.97;
                                                    red = 2065.94;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 7786.96;
                                                    blue = 8472.76;
                                                    green = 7774.08;
                                                    red = 6813.59;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 2594.22;
                                                    blue = 1783.67;
                                                    green = 3738.13;
                                                    red = 698.59;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "904e523c-7e0b-4c71-b8e4-796f2a70c688";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 1598.67;
                                                    blue = 5361.78;
                                                    green = 1438.29;
                                                    red = 6813.93;
                                                }};
                                                priorityOverride = "mollitia";
                                            }};
                                            description = "incidunt";
                                            displayName = "atque";
                                            insertBeforeChoice = "explicabo";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "minima";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "nisi";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "fugit";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "sapiente";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 1598.7;
                                                    blue = 1871.31;
                                                    green = 1294.12;
                                                    red = 9039.84;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 5789.22;
                                                    blue = 5438.06;
                                                    green = 922.6;
                                                    red = 4569.11;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 9105.45;
                                                    blue = 8820.42;
                                                    green = 829.71;
                                                    red = 4586.04;
                                                }};
                                            }};
                                            badgePriority = "quod";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 7241.68;
                                                    blue = 8771.31;
                                                    green = 3990.25;
                                                    red = 934.59;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 9040.45;
                                                    blue = 4263.06;
                                                    green = 6900.25;
                                                    red = 4732.21;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 6996.22;
                                                    blue = 5801.97;
                                                    green = 3277.2;
                                                    red = 7162.44;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "c0ab3c20-c4f3-4789-bd87-1f99dd2efd12";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 944.58;
                                                    blue = 6288.99;
                                                    green = 6336.08;
                                                    red = 3984.34;
                                                }};
                                                priorityOverride = "tenetur";
                                            }};
                                            description = "quae";
                                            displayName = "earum";
                                            insertBeforeChoice = "vel";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "in";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "eius";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 727697;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "illum";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 742238;
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
                                person = "accusantium";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.DATE_FORMAT_UNSPECIFIED;
                                maxValue = new GoogleTypeDate() {{
                                    day = 958983;
                                    month = 119771;
                                    year = 355369;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 443879;
                                    month = 356707;
                                    year = 391774;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "aut";
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
                                displayName = "voluptatum";
                                insertBeforeField = "qui";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "quibusdam";
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
                                            person = "deleniti";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "itaque";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6802.7;
                                                    blue = 996.15;
                                                    green = 6091.78;
                                                    red = 9453.02;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 984.78;
                                                    blue = 8694.89;
                                                    green = 920.27;
                                                    red = 4541.62;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 559.65;
                                                    blue = 3267.01;
                                                    green = 865.32;
                                                    red = 2327.44;
                                                }};
                                            }};
                                            badgePriority = "adipisci";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6144.65;
                                                    blue = 8395.13;
                                                    green = 330.74;
                                                    red = 5223.71;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 156.06;
                                                    blue = 5130.75;
                                                    green = 4287.96;
                                                    red = 6498.32;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 680.74;
                                                    blue = 5445.91;
                                                    green = 2519.41;
                                                    red = 324.65;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "394c2607-1f93-4f5f-8642-dac7af515cc4";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 704.47;
                                                    blue = 2414.18;
                                                    green = 6835.73;
                                                    red = 6625.05;
                                                }};
                                                priorityOverride = "suscipit";
                                            }};
                                            description = "velit";
                                            displayName = "culpa";
                                            insertBeforeChoice = "est";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "recusandae";
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
                                            person = "fugiat";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "vel";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 4976.78;
                                                    blue = 5546.88;
                                                    green = 4278.34;
                                                    red = 2870.51;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 8225.6;
                                                    blue = 7065.75;
                                                    green = 7382.27;
                                                    red = 4148.57;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 4471.44;
                                                    blue = 3605.45;
                                                    green = 9689.04;
                                                    red = 8286.57;
                                                }};
                                            }};
                                            badgePriority = "nemo";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 9249.67;
                                                    blue = 3975.33;
                                                    green = 460.07;
                                                    red = 7386.83;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 2326.27;
                                                    blue = 4490.83;
                                                    green = 3485.19;
                                                    red = 9372.85;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 8149.67;
                                                    blue = 2572.33;
                                                    green = 9854.92;
                                                    red = 3817.6;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "fbee41f3-3317-4fe3-9b60-eb1ea426555b";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 6801.16;
                                                    blue = 2378.07;
                                                    green = 7955.35;
                                                    red = 1718.53;
                                                }};
                                                priorityOverride = "blanditiis";
                                            }};
                                            description = "in";
                                            displayName = "dolore";
                                            insertBeforeChoice = "aliquam";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "officiis";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "temporibus";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 351870;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "adipisci";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 738391;
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
                                person = "blanditiis";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.LONG_DATE;
                                maxValue = new GoogleTypeDate() {{
                                    day = 942584;
                                    month = 201517;
                                    year = 633998;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 548519;
                                    month = 867290;
                                    year = 519643;
                                }};
                            }};
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "hic";
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
                                displayName = "exercitationem";
                                insertBeforeField = "nobis";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "sit";
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
                                            person = "sed";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "reiciendis";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 1318.52;
                                                    blue = 9944.01;
                                                    green = 7079.18;
                                                    red = 4518.22;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 7090.72;
                                                    blue = 708.69;
                                                    green = 6117.49;
                                                    red = 2927.94;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 6719.07;
                                                    blue = 1523.54;
                                                    green = 4475.16;
                                                    red = 4174.86;
                                                }};
                                            }};
                                            badgePriority = "quidem";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 1312.89;
                                                    blue = 3783.26;
                                                    green = 6041.18;
                                                    red = 1000.32;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 3828.08;
                                                    blue = 9602.57;
                                                    green = 8953.86;
                                                    red = 724.34;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 9677.95;
                                                    blue = 193;
                                                    green = 5468.85;
                                                    red = 9795.74;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "4294e369-8f44-47f6-83e8-b445e80ca55e";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 9671.22;
                                                    blue = 8623.19;
                                                    green = 1685.76;
                                                    red = 486.9;
                                                }};
                                                priorityOverride = "saepe";
                                            }};
                                            description = "numquam";
                                            displayName = "veniam";
                                            insertBeforeChoice = "in";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "officiis";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "beatae";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "laudantium";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "exercitationem";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 5106.29;
                                                    blue = 7400.98;
                                                    green = 3868.27;
                                                    red = 6805.15;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 5300.89;
                                                    blue = 6223.85;
                                                    green = 9447.08;
                                                    red = 7105.29;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 8928.63;
                                                    blue = 2049.23;
                                                    green = 6771.15;
                                                    red = 3416.98;
                                                }};
                                            }};
                                            badgePriority = "officia";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6762.43;
                                                    blue = 5483.61;
                                                    green = 8792.35;
                                                    red = 2726.83;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 5436.78;
                                                    blue = 1482.68;
                                                    green = 2826.99;
                                                    red = 8563.03;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 302.35;
                                                    blue = 6350.57;
                                                    green = 7103.37;
                                                    red = 2996.43;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "075088e5-1862-4065-a904-f3b1194b8abf";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 3888.67;
                                                    blue = 27.03;
                                                    green = 2270.84;
                                                    red = 6471.97;
                                                }};
                                                priorityOverride = "voluptate";
                                            }};
                                            description = "unde";
                                            displayName = "reiciendis";
                                            insertBeforeChoice = "provident";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "repellendus";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "delectus";
                                        }};
                                    }}),
                                    add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                        appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                            canRead = false;
                                            canSearch = false;
                                            canSelect = false;
                                        }};
                                        creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "voluptates";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "perferendis";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 6672.85;
                                                    blue = 6964.83;
                                                    green = 4406.66;
                                                    red = 8136.79;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 6850.92;
                                                    blue = 5098.07;
                                                    green = 6485.98;
                                                    red = 3339.65;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 291;
                                                    blue = 7908.4;
                                                    green = 9195.32;
                                                    red = 972.43;
                                                }};
                                            }};
                                            badgePriority = "atque";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 4420.36;
                                                    blue = 9911.42;
                                                    green = 5199.52;
                                                    red = 3831.03;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 6939.57;
                                                    blue = 8066.7;
                                                    green = 908.85;
                                                    red = 4610.07;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 2277.59;
                                                    blue = 8268.25;
                                                    green = 4103.01;
                                                    red = 5391.18;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "9eee9526-f8d9-486e-881e-ad4f0e101256";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 2465.35;
                                                    blue = 9521.43;
                                                    green = 5627.83;
                                                    red = 3000.29;
                                                }};
                                                priorityOverride = "saepe";
                                            }};
                                            description = "consequuntur";
                                            displayName = "occaecati";
                                            insertBeforeChoice = "officiis";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "perspiciatis";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "in";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 238043;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "eveniet";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 580887;
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
                                person = "consequuntur";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.DATE_FORMAT_UNSPECIFIED;
                                maxValue = new GoogleTypeDate() {{
                                    day = 661118;
                                    month = 335631;
                                    year = 440264;
                                }};
                                minValue = new GoogleTypeDate() {{
                                    day = 625528;
                                    month = 76486;
                                    year = 361306;
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
                                displayName = "eveniet";
                                insertBeforeField = "non";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "vero";
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
                                            person = "iure";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "ipsa";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 5176.12;
                                                    blue = 610.78;
                                                    green = 4746.68;
                                                    red = 9077.33;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 1843.62;
                                                    blue = 7398.84;
                                                    green = 4347.61;
                                                    red = 8980.63;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 1875.52;
                                                    blue = 6725.82;
                                                    green = 7152.08;
                                                    red = 5289.4;
                                                }};
                                            }};
                                            badgePriority = "rem";
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                backgroundColor = new GoogleTypeColor() {{
                                                    alpha = 3044.46;
                                                    blue = 3205.65;
                                                    green = 9979.63;
                                                    red = 30.99;
                                                }};
                                                foregroundColor = new GoogleTypeColor() {{
                                                    alpha = 3621.89;
                                                    blue = 5973.03;
                                                    green = 4706.49;
                                                    red = 6490.78;
                                                }};
                                                soloColor = new GoogleTypeColor() {{
                                                    alpha = 3782.45;
                                                    blue = 51.89;
                                                    green = 9795.27;
                                                    red = 9702.22;
                                                }};
                                            }};
                                            disabled = false;
                                            hiddenInSearch = false;
                                            shownInApply = false;
                                        }};
                                        id = "2a54a31e-9476-44a3-a865-e7956f9251a5";
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                color = new GoogleTypeColor() {{
                                                    alpha = 6523.09;
                                                    blue = 5910.27;
                                                    green = 8217.19;
                                                    red = 6591.77;
                                                }};
                                                priorityOverride = "ex";
                                            }};
                                            description = "aliquid";
                                            displayName = "accusantium";
                                            insertBeforeChoice = "repellat";
                                        }};
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "doloribus";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "ullam";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 448143;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "nam";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 937636;
                                }};
                            }};
                        }}),
                    }};
                    labelType = GoogleAppsDriveLabelsV2LabelLabelTypeEnum.ADMIN;
                    learnMoreUri = "laborum";
                    lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                        disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                            hideInSearch = false;
                            showInApply = false;
                        }};;
                    }};;
                    properties = new GoogleAppsDriveLabelsV2LabelProperties() {{
                        description = "placeat";
                        title = "Mrs.";
                    }};;
                    publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "voluptatibus";
                    }};;
                    revisionCreator = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "molestias";
                    }};;
                    schemaCapabilities = new GoogleAppsDriveLabelsV2LabelSchemaCapabilities() {{
                        canDelete = false;
                        canDisable = false;
                        canEnable = false;
                        canUpdate = false;
                    }};;
                }};;
                accessToken = "officiis";
                alt = AltEnum.PROTO;
                callback = "cumque";
                fields = "vitae";
                key = "rerum";
                languageCode = "tempora";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "fugit";
                uploadProtocol = "cumque";
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

## drivelabelsLabelsDelta

Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsDeltaRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsDeltaResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2BadgeColors;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2BadgeConfig;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequestInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestViewEnum;
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
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelProperties;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LifecycleInput;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2UserInfo;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2WriteControl;
import org.openapis.openapi.models.shared.GoogleTypeColor;
import org.openapis.openapi.models.shared.GoogleTypeDate;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsDeltaRequest req = new DrivelabelsLabelsDeltaRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAppsDriveLabelsV2DeltaUpdateLabelRequestInput = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestInput() {{
                    languageCode = "velit";
                    requests = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput[]{{
                        add(new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput() {{
                            createField = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequestInput() {{
                                field = new GoogleAppsDriveLabelsV2FieldInput() {{
                                    appliedCapabilities = new GoogleAppsDriveLabelsV2FieldAppliedCapabilities() {{
                                        canRead = false;
                                        canSearch = false;
                                        canWrite = false;
                                    }};
                                    creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                        person = "eum";
                                    }};
                                    dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                        dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.DATE_FORMAT_UNSPECIFIED;
                                        maxValue = new GoogleTypeDate() {{
                                            day = 521996;
                                            month = 871083;
                                            year = 773084;
                                        }};
                                        minValue = new GoogleTypeDate() {{
                                            day = 179410;
                                            month = 958741;
                                            year = 433279;
                                        }};
                                    }};
                                    disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                        person = "dicta";
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
                                        displayName = "minima";
                                        insertBeforeField = "beatae";
                                        required = false;
                                    }};
                                    publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                        person = "cupiditate";
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
                                                    person = "earum";
                                                }};
                                                disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "soluta";
                                                }};
                                                displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                                    badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                        backgroundColor = new GoogleTypeColor() {{
                                                            alpha = 9407.82;
                                                            blue = 8481.51;
                                                            green = 525.08;
                                                            red = 9358.33;
                                                        }};
                                                        foregroundColor = new GoogleTypeColor() {{
                                                            alpha = 5962.11;
                                                            blue = 9834.27;
                                                            green = 8918.01;
                                                            red = 3998.02;
                                                        }};
                                                        soloColor = new GoogleTypeColor() {{
                                                            alpha = 7809.31;
                                                            blue = 3803.35;
                                                            green = 2115.34;
                                                            red = 1478.08;
                                                        }};
                                                    }};
                                                    badgePriority = "cumque";
                                                    darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                        backgroundColor = new GoogleTypeColor() {{
                                                            alpha = 6849.35;
                                                            blue = 1890.62;
                                                            green = 6567.62;
                                                            red = 8987.6;
                                                        }};
                                                        foregroundColor = new GoogleTypeColor() {{
                                                            alpha = 8620.63;
                                                            blue = 89.31;
                                                            green = 972.58;
                                                            red = 902.33;
                                                        }};
                                                        soloColor = new GoogleTypeColor() {{
                                                            alpha = 4977.77;
                                                            blue = 6191.83;
                                                            green = 5810.82;
                                                            red = 3824.4;
                                                        }};
                                                    }};
                                                    disabled = false;
                                                    hiddenInSearch = false;
                                                    shownInApply = false;
                                                }};
                                                id = "312fde04-7717-478f-b61d-017476360a15";
                                                lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                                    disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                        hideInSearch = false;
                                                        showInApply = false;
                                                    }};
                                                }};
                                                properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                                    badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                        color = new GoogleTypeColor() {{
                                                            alpha = 8567.56;
                                                            blue = 7137.67;
                                                            green = 3996.67;
                                                            red = 6391.87;
                                                        }};
                                                        priorityOverride = "suscipit";
                                                    }};
                                                    description = "aliquid";
                                                    displayName = "perferendis";
                                                    insertBeforeChoice = "eum";
                                                }};
                                                publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "voluptas";
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
                                            add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                                appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                                    canRead = false;
                                                    canSearch = false;
                                                    canSelect = false;
                                                }};
                                                creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "id";
                                                }};
                                                disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "ab";
                                                }};
                                                displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                                    badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                        backgroundColor = new GoogleTypeColor() {{
                                                            alpha = 6253.58;
                                                            blue = 8224.07;
                                                            green = 9139.92;
                                                            red = 6534.21;
                                                        }};
                                                        foregroundColor = new GoogleTypeColor() {{
                                                            alpha = 6717.94;
                                                            blue = 7263.43;
                                                            green = 3240.83;
                                                            red = 5369.23;
                                                        }};
                                                        soloColor = new GoogleTypeColor() {{
                                                            alpha = 3162.2;
                                                            blue = 1104.77;
                                                            green = 8333.16;
                                                            red = 4050.36;
                                                        }};
                                                    }};
                                                    badgePriority = "quo";
                                                    darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                        backgroundColor = new GoogleTypeColor() {{
                                                            alpha = 4053.73;
                                                            blue = 2811.53;
                                                            green = 3210.43;
                                                            red = 7139.27;
                                                        }};
                                                        foregroundColor = new GoogleTypeColor() {{
                                                            alpha = 299.5;
                                                            blue = 5615.77;
                                                            green = 7372.54;
                                                            red = 3996.6;
                                                        }};
                                                        soloColor = new GoogleTypeColor() {{
                                                            alpha = 1097.84;
                                                            blue = 5308.6;
                                                            green = 6063.08;
                                                            red = 852.33;
                                                        }};
                                                    }};
                                                    disabled = false;
                                                    hiddenInSearch = false;
                                                    shownInApply = false;
                                                }};
                                                id = "baa0fe1a-de00-48e6-b8c5-f350d8cdb5a3";
                                                lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                                    disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                        hideInSearch = false;
                                                        showInApply = false;
                                                    }};
                                                }};
                                                properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                                    badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                        color = new GoogleTypeColor() {{
                                                            alpha = 3073.76;
                                                            blue = 805.32;
                                                            green = 5372.79;
                                                            red = 853.11;
                                                        }};
                                                        priorityOverride = "tempora";
                                                    }};
                                                    description = "dolor";
                                                    displayName = "consequatur";
                                                    insertBeforeChoice = "architecto";
                                                }};
                                                publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "sit";
                                                }};
                                                schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                                    canDelete = false;
                                                    canDisable = false;
                                                    canEnable = false;
                                                    canUpdate = false;
                                                }};
                                                updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "modi";
                                                }};
                                            }}),
                                            add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                                appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                                    canRead = false;
                                                    canSearch = false;
                                                    canSelect = false;
                                                }};
                                                creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "fugit";
                                                }};
                                                disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "ab";
                                                }};
                                                displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                                    badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                        backgroundColor = new GoogleTypeColor() {{
                                                            alpha = 5137.6;
                                                            blue = 656.04;
                                                            green = 2226.58;
                                                            red = 8562.77;
                                                        }};
                                                        foregroundColor = new GoogleTypeColor() {{
                                                            alpha = 3694.9;
                                                            blue = 1621.2;
                                                            green = 551.07;
                                                            red = 5596.82;
                                                        }};
                                                        soloColor = new GoogleTypeColor() {{
                                                            alpha = 9111.98;
                                                            blue = 7734.56;
                                                            green = 8849.52;
                                                            red = 4564.1;
                                                        }};
                                                    }};
                                                    badgePriority = "necessitatibus";
                                                    darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                        backgroundColor = new GoogleTypeColor() {{
                                                            alpha = 1533.69;
                                                            blue = 3321.91;
                                                            green = 1995.96;
                                                            red = 7129.27;
                                                        }};
                                                        foregroundColor = new GoogleTypeColor() {{
                                                            alpha = 4329.84;
                                                            blue = 4269.43;
                                                            green = 5282.34;
                                                            red = 3016.92;
                                                        }};
                                                        soloColor = new GoogleTypeColor() {{
                                                            alpha = 3494.4;
                                                            blue = 704.1;
                                                            green = 7814.8;
                                                            red = 4218.44;
                                                        }};
                                                    }};
                                                    disabled = false;
                                                    hiddenInSearch = false;
                                                    shownInApply = false;
                                                }};
                                                id = "c6e205e1-6dea-4b3f-ac95-78a64584273a";
                                                lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                                    disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                        hideInSearch = false;
                                                        showInApply = false;
                                                    }};
                                                }};
                                                properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                                    badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                        color = new GoogleTypeColor() {{
                                                            alpha = 5140.54;
                                                            blue = 2773.4;
                                                            green = 974.93;
                                                            red = 5243.8;
                                                        }};
                                                        priorityOverride = "fugiat";
                                                    }};
                                                    description = "dicta";
                                                    displayName = "nisi";
                                                    insertBeforeChoice = "consequuntur";
                                                }};
                                                publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "consectetur";
                                                }};
                                                schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                                    canDelete = false;
                                                    canDisable = false;
                                                    canEnable = false;
                                                    canUpdate = false;
                                                }};
                                                updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                    person = "aperiam";
                                                }};
                                            }}),
                                        }};
                                        listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                            maxEntries = 585432;
                                        }};
                                    }};
                                    updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                        person = "reiciendis";
                                    }};
                                    userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                        listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                            maxEntries = 746837;
                                        }};
                                    }};
                                }};
                            }};
                            createSelectionChoice = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestInput() {{
                                choice = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                    appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                        canRead = false;
                                        canSearch = false;
                                        canSelect = false;
                                    }};
                                    creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                        person = "alias";
                                    }};
                                    disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                        person = "omnis";
                                    }};
                                    displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                        badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                            backgroundColor = new GoogleTypeColor() {{
                                                alpha = 1785.8;
                                                blue = 5790.11;
                                                green = 6128.67;
                                                red = 1700.99;
                                            }};
                                            foregroundColor = new GoogleTypeColor() {{
                                                alpha = 813.69;
                                                blue = 6863.62;
                                                green = 8818.97;
                                                red = 9768.02;
                                            }};
                                            soloColor = new GoogleTypeColor() {{
                                                alpha = 7196.2;
                                                blue = 6085.93;
                                                green = 9663.9;
                                                red = 3283.79;
                                            }};
                                        }};
                                        badgePriority = "praesentium";
                                        darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                            backgroundColor = new GoogleTypeColor() {{
                                                alpha = 8026.92;
                                                blue = 3004.03;
                                                green = 8363.64;
                                                red = 5495.01;
                                            }};
                                            foregroundColor = new GoogleTypeColor() {{
                                                alpha = 4152.8;
                                                blue = 9308.19;
                                                green = 4156.08;
                                                red = 5207.61;
                                            }};
                                            soloColor = new GoogleTypeColor() {{
                                                alpha = 9366.18;
                                                blue = 2672.07;
                                                green = 7221.84;
                                                red = 8773.99;
                                            }};
                                        }};
                                        disabled = false;
                                        hiddenInSearch = false;
                                        shownInApply = false;
                                    }};
                                    id = "056013f5-9da7-457a-99ec-fef66ef1caa3";
                                    lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                        disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                            hideInSearch = false;
                                            showInApply = false;
                                        }};
                                    }};
                                    properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                        badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                            color = new GoogleTypeColor() {{
                                                alpha = 2448.89;
                                                blue = 5388.69;
                                                green = 2164.57;
                                                red = 7730.35;
                                            }};
                                            priorityOverride = "magni";
                                        }};
                                        description = "soluta";
                                        displayName = "repudiandae";
                                        insertBeforeChoice = "nam";
                                    }};
                                    publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                        person = "dolore";
                                    }};
                                    schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                        canDelete = false;
                                        canDisable = false;
                                        canEnable = false;
                                        canUpdate = false;
                                    }};
                                    updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                        person = "iusto";
                                    }};
                                }};
                                fieldId = "voluptate";
                            }};
                            deleteField = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest() {{
                                id = "373c8d72-f64d-41db-9f2c-4310661e9634";
                            }};
                            deleteSelectionChoice = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest() {{
                                fieldId = "perspiciatis";
                                id = "e1cf9e06-e3a4-4370-80ae-6b6bc9b8f759";
                            }};
                            disableField = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                    hideInSearch = false;
                                    showInApply = false;
                                }};
                                id = "eac55a97-41d3-4113-9296-5bb8a7202611";
                                updateMask = "modi";
                            }};
                            disableSelectionChoice = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest() {{
                                disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                    hideInSearch = false;
                                    showInApply = false;
                                }};
                                fieldId = "neque";
                                id = "5e139dbc-2259-4b1a-bda8-c070e1084cb0";
                                updateMask = "autem";
                            }};
                            enableField = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest() {{
                                id = "72d1ad87-9eeb-4966-9b85-efbd02bae0be";
                            }};
                            enableSelectionChoice = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest() {{
                                fieldId = "eos";
                                id = "d782259e-3ea4-4b51-97f9-2443da7ce52b";
                            }};
                            updateField = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest() {{
                                id = "895c537c-6454-4efb-8b34-896c3ca5acfb";
                                properties = new GoogleAppsDriveLabelsV2FieldProperties() {{
                                    displayName = "vero";
                                    insertBeforeField = "odit";
                                    required = false;
                                }};
                                updateMask = "repellat";
                            }};
                            updateFieldType = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestInput() {{
                                dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
                                    dateFormatType = GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnum.SHORT_DATE;
                                    maxValue = new GoogleTypeDate() {{
                                        day = 362888;
                                        month = 441321;
                                        year = 45234;
                                    }};
                                    minValue = new GoogleTypeDate() {{
                                        day = 486410;
                                        month = 325297;
                                        year = 448369;
                                    }};
                                }};
                                id = "7929177d-eac6-446e-8b57-3409e3eb1e5a";
                                selectionOptions = new GoogleAppsDriveLabelsV2FieldSelectionOptionsInput() {{
                                    choices = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput[]{{
                                        add(new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput() {{
                                            appliedCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities() {{
                                                canRead = false;
                                                canSearch = false;
                                                canSelect = false;
                                            }};
                                            creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                person = "nam";
                                            }};
                                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                person = "dicta";
                                            }};
                                            displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                                badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                    backgroundColor = new GoogleTypeColor() {{
                                                        alpha = 1644.88;
                                                        blue = 8998.67;
                                                        green = 7482.24;
                                                        red = 568.77;
                                                    }};
                                                    foregroundColor = new GoogleTypeColor() {{
                                                        alpha = 4973.57;
                                                        blue = 9804.86;
                                                        green = 873.82;
                                                        red = 964.5;
                                                    }};
                                                    soloColor = new GoogleTypeColor() {{
                                                        alpha = 3864.47;
                                                        blue = 8634.71;
                                                        green = 7294.48;
                                                        red = 5665.06;
                                                    }};
                                                }};
                                                badgePriority = "occaecati";
                                                darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
                                                    backgroundColor = new GoogleTypeColor() {{
                                                        alpha = 3679.17;
                                                        blue = 3063.82;
                                                        green = 3423.42;
                                                        red = 9887.49;
                                                    }};
                                                    foregroundColor = new GoogleTypeColor() {{
                                                        alpha = 7573.64;
                                                        blue = 5740.32;
                                                        green = 3145.73;
                                                        red = 9449.5;
                                                    }};
                                                    soloColor = new GoogleTypeColor() {{
                                                        alpha = 6573.19;
                                                        blue = 5597.74;
                                                        green = 5173.26;
                                                        red = 5646.67;
                                                    }};
                                                }};
                                                disabled = false;
                                                hiddenInSearch = false;
                                                shownInApply = false;
                                            }};
                                            id = "70e189db-b30f-4cb3-bea0-55b197cd44e2";
                                            lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                                disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                    hideInSearch = false;
                                                    showInApply = false;
                                                }};
                                            }};
                                            properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                                badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                                    color = new GoogleTypeColor() {{
                                                        alpha = 9930.02;
                                                        blue = 3302.67;
                                                        green = 1645.32;
                                                        red = 8138.8;
                                                    }};
                                                    priorityOverride = "laudantium";
                                                }};
                                                description = "odit";
                                                displayName = "pariatur";
                                                insertBeforeChoice = "amet";
                                            }};
                                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                person = "exercitationem";
                                            }};
                                            schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                                canDelete = false;
                                                canDisable = false;
                                                canEnable = false;
                                                canUpdate = false;
                                            }};
                                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                                person = "ab";
                                            }};
                                        }}),
                                    }};
                                    listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                        maxEntries = 242637;
                                    }};
                                }};
                                updateMask = "facilis";
                                userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                    listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                        maxEntries = 731065;
                                    }};
                                }};
                            }};
                            updateLabel = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest() {{
                                properties = new GoogleAppsDriveLabelsV2LabelProperties() {{
                                    description = "nisi";
                                    title = "Dr.";
                                }};
                                updateMask = "quaerat";
                            }};
                            updateSelectionChoiceProperties = new GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest() {{
                                fieldId = "blanditiis";
                                id = "b656bcdb-35ff-42e4-b275-37a8cd9e7319";
                                properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                    badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
                                        color = new GoogleTypeColor() {{
                                            alpha = 7847.31;
                                            blue = 1114.96;
                                            green = 4915.91;
                                            red = 4589.7;
                                        }};
                                        priorityOverride = "fugiat";
                                    }};
                                    description = "ad";
                                    displayName = "aspernatur";
                                    insertBeforeChoice = "enim";
                                }};
                                updateMask = "delectus";
                            }};
                        }}),
                    }};
                    useAdminAccess = false;
                    view = GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestViewEnum.LABEL_VIEW_BASIC;
                    writeControl = new GoogleAppsDriveLabelsV2WriteControl() {{
                        requiredRevisionId = "dignissimos";
                    }};;
                }};;
                accessToken = "libero";
                alt = AltEnum.JSON;
                callback = "ab";
                fields = "incidunt";
                key = "accusamus";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "tempore";
                uploadType = "veniam";
                uploadProtocol = "eos";
            }};            

            DrivelabelsLabelsDeltaResponse res = sdk.labels.drivelabelsLabelsDelta(req);

            if (res.googleAppsDriveLabelsV2DeltaUpdateLabelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsDisable

Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsDisableRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsDisableResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DisableLabelRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2WriteControl;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsDisableRequest req = new DrivelabelsLabelsDisableRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsDriveLabelsV2DisableLabelRequest = new GoogleAppsDriveLabelsV2DisableLabelRequest() {{
                    disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                        hideInSearch = false;
                        showInApply = false;
                    }};;
                    languageCode = "reprehenderit";
                    updateMask = "praesentium";
                    useAdminAccess = false;
                    writeControl = new GoogleAppsDriveLabelsV2WriteControl() {{
                        requiredRevisionId = "nemo";
                    }};;
                }};;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "nihil";
                key = "deleniti";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "assumenda";
                uploadProtocol = "aliquam";
            }};            

            DrivelabelsLabelsDisableResponse res = sdk.labels.drivelabelsLabelsDisable(req);

            if (res.googleAppsDriveLabelsV2Label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsEnable

Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsEnableRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsEnableResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2EnableLabelRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2WriteControl;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsEnableRequest req = new DrivelabelsLabelsEnableRequest("quisquam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsDriveLabelsV2EnableLabelRequest = new GoogleAppsDriveLabelsV2EnableLabelRequest() {{
                    languageCode = "laudantium";
                    useAdminAccess = false;
                    writeControl = new GoogleAppsDriveLabelsV2WriteControl() {{
                        requiredRevisionId = "repudiandae";
                    }};;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.PROTO;
                callback = "aspernatur";
                fields = "nam";
                key = "expedita";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "repudiandae";
                uploadProtocol = "rerum";
            }};            

            DrivelabelsLabelsEnableResponse res = sdk.labels.drivelabelsLabelsEnable(req);

            if (res.googleAppsDriveLabelsV2Label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsList

List labels.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsListMinimumRoleEnum;
import org.openapis.openapi.models.operations.DrivelabelsLabelsListRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsListResponse;
import org.openapis.openapi.models.operations.DrivelabelsLabelsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsListRequest req = new DrivelabelsLabelsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "similique";
                customer = "repellendus";
                fields = "iure";
                key = "dolorem";
                languageCode = "commodi";
                minimumRole = DrivelabelsLabelsListMinimumRoleEnum.ORGANIZER;
                oauthToken = "commodi";
                pageSize = 12171L;
                pageToken = "voluptatem";
                prettyPrint = false;
                publishedOnly = false;
                quotaUser = "ad";
                uploadType = "quae";
                uploadProtocol = "amet";
                useAdminAccess = false;
                view = DrivelabelsLabelsListViewEnum.LABEL_VIEW_FULL;
            }};            

            DrivelabelsLabelsListResponse res = sdk.labels.drivelabelsLabelsList(req);

            if (res.googleAppsDriveLabelsV2ListLabelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsPublish

Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsPublishRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsPublishResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2PublishLabelRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2WriteControl;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsPublishRequest req = new DrivelabelsLabelsPublishRequest("praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsDriveLabelsV2PublishLabelRequest = new GoogleAppsDriveLabelsV2PublishLabelRequest() {{
                    languageCode = "cum";
                    useAdminAccess = false;
                    writeControl = new GoogleAppsDriveLabelsV2WriteControl() {{
                        requiredRevisionId = "amet";
                    }};;
                }};;
                accessToken = "quasi";
                alt = AltEnum.JSON;
                callback = "laudantium";
                fields = "doloremque";
                key = "earum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "provident";
                uploadProtocol = "dolorum";
            }};            

            DrivelabelsLabelsPublishResponse res = sdk.labels.drivelabelsLabelsPublish(req);

            if (res.googleAppsDriveLabelsV2Label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsRevisionsLocksList

Lists the LabelLocks on a Label.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsLocksListRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsLocksListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsRevisionsLocksListRequest req = new DrivelabelsLabelsRevisionsLocksListRequest("necessitatibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.JSON;
                callback = "nemo";
                fields = "molestiae";
                key = "itaque";
                oauthToken = "facilis";
                pageSize = 545779L;
                pageToken = "aperiam";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "accusamus";
                uploadProtocol = "eos";
            }};            

            DrivelabelsLabelsRevisionsLocksListResponse res = sdk.labels.drivelabelsLabelsRevisionsLocksList(req);

            if (res.googleAppsDriveLabelsV2ListLabelLocksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsRevisionsPermissionsBatchDelete

Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest req = new DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest("totam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest = new GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest[]{{
                        add(new GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest() {{
                            name = "Cindy Casper";
                            useAdminAccess = false;
                        }}),
                    }};
                    useAdminAccess = false;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "beatae";
                fields = "at";
                key = "labore";
                oauthToken = "minus";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "voluptatem";
                uploadProtocol = "perferendis";
            }};            

            DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse res = sdk.labels.drivelabelsLabelsRevisionsPermissionsBatchDelete(req);

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsRevisionsPermissionsBatchUpdate

Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelPermission;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelPermissionRoleEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest req = new DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest("rerum") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest = new GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest() {{
                    requests = new org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest[]{{
                        add(new GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest() {{
                            labelPermission = new GoogleAppsDriveLabelsV2LabelPermission() {{
                                audience = "dignissimos";
                                email = "Dedrick.Sawayn@hotmail.com";
                                group = "eligendi";
                                name = "Kim Roberts";
                                person = "officia";
                                role = GoogleAppsDriveLabelsV2LabelPermissionRoleEnum.READER;
                            }};
                            parent = "tenetur";
                            useAdminAccess = false;
                        }}),
                    }};
                    useAdminAccess = false;
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "itaque";
                fields = "illum";
                key = "laborum";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "qui";
                uploadProtocol = "consectetur";
            }};            

            DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse res = sdk.labels.drivelabelsLabelsRevisionsPermissionsBatchUpdate(req);

            if (res.googleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsRevisionsPermissionsCreate

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsCreateRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelPermission;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelPermissionRoleEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsRevisionsPermissionsCreateRequest req = new DrivelabelsLabelsRevisionsPermissionsCreateRequest("repellat") {{
                dollarXgafv = XgafvEnum.ONE;
                googleAppsDriveLabelsV2LabelPermission = new GoogleAppsDriveLabelsV2LabelPermission() {{
                    audience = "explicabo";
                    email = "Janiya7@yahoo.com";
                    group = "hic";
                    name = "Toby Friesen";
                    person = "exercitationem";
                    role = GoogleAppsDriveLabelsV2LabelPermissionRoleEnum.READER;
                }};;
                accessToken = "numquam";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "in";
                key = "explicabo";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "rem";
                uploadType = "aperiam";
                uploadProtocol = "odit";
                useAdminAccess = false;
            }};            

            DrivelabelsLabelsRevisionsPermissionsCreateResponse res = sdk.labels.drivelabelsLabelsRevisionsPermissionsCreate(req);

            if (res.googleAppsDriveLabelsV2LabelPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsRevisionsPermissionsDelete

Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsDeleteRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsRevisionsPermissionsDeleteRequest req = new DrivelabelsLabelsRevisionsPermissionsDeleteRequest("deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "voluptate";
                alt = AltEnum.MEDIA;
                callback = "minima";
                fields = "libero";
                key = "magnam";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "eum";
                uploadProtocol = "nesciunt";
                useAdminAccess = false;
                writeControlRequiredRevisionId = "mollitia";
            }};            

            DrivelabelsLabelsRevisionsPermissionsDeleteResponse res = sdk.labels.drivelabelsLabelsRevisionsPermissionsDelete(req);

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsRevisionsPermissionsList

Lists a Label's permissions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsListRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsPermissionsListResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsRevisionsPermissionsListRequest req = new DrivelabelsLabelsRevisionsPermissionsListRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nostrum";
                alt = AltEnum.MEDIA;
                callback = "veniam";
                fields = "reiciendis";
                key = "ab";
                oauthToken = "modi";
                pageSize = 13865L;
                pageToken = "aut";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "odio";
                uploadProtocol = "commodi";
                useAdminAccess = false;
            }};            

            DrivelabelsLabelsRevisionsPermissionsListResponse res = sdk.labels.drivelabelsLabelsRevisionsPermissionsList(req);

            if (res.googleAppsDriveLabelsV2ListLabelPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsRevisionsUpdatePermissions

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsUpdatePermissionsRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelPermission;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2LabelPermissionRoleEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsRevisionsUpdatePermissionsRequest req = new DrivelabelsLabelsRevisionsUpdatePermissionsRequest("numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsDriveLabelsV2LabelPermission = new GoogleAppsDriveLabelsV2LabelPermission() {{
                    audience = "possimus";
                    email = "Darlene92@yahoo.com";
                    group = "minus";
                    name = "Lola Kshlerin MD";
                    person = "amet";
                    role = GoogleAppsDriveLabelsV2LabelPermissionRoleEnum.APPLIER;
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "rem";
                fields = "aut";
                key = "quos";
                oauthToken = "laudantium";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "veritatis";
                uploadProtocol = "quae";
                useAdminAccess = false;
            }};            

            DrivelabelsLabelsRevisionsUpdatePermissionsResponse res = sdk.labels.drivelabelsLabelsRevisionsUpdatePermissions(req);

            if (res.googleAppsDriveLabelsV2LabelPermission != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## drivelabelsLabelsUpdateLabelCopyMode

Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrivelabelsLabelsUpdateLabelCopyModeRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsUpdateLabelCopyModeResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestCopyModeEnum;
import org.openapis.openapi.models.shared.GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestViewEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DrivelabelsLabelsUpdateLabelCopyModeRequest req = new DrivelabelsLabelsUpdateLabelCopyModeRequest("eaque") {{
                dollarXgafv = XgafvEnum.TWO;
                googleAppsDriveLabelsV2UpdateLabelCopyModeRequest = new GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest() {{
                    copyMode = GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestCopyModeEnum.COPY_APPLIABLE;
                    languageCode = "mollitia";
                    useAdminAccess = false;
                    view = GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestViewEnum.LABEL_VIEW_FULL;
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                fields = "alias";
                key = "eveniet";
                oauthToken = "hic";
                prettyPrint = false;
                quotaUser = "voluptatem";
                uploadType = "incidunt";
                uploadProtocol = "qui";
            }};            

            DrivelabelsLabelsUpdateLabelCopyModeResponse res = sdk.labels.drivelabelsLabelsUpdateLabelCopyMode(req);

            if (res.googleAppsDriveLabelsV2Label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
