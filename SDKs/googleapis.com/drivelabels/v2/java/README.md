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

import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateQueryParams;
import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateRequest;
import org.openapis.openapi.models.operations.DrivelabelsLabelsCreateResponse;
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
                request = new GoogleAppsDriveLabelsV2LabelInput() {{
                    appliedCapabilities = new GoogleAppsDriveLabelsV2LabelAppliedCapabilities() {{
                        canApply = false;
                        canRead = false;
                        canRemove = false;
                    }};
                    appliedLabelPolicy = new GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy() {{
                        copyMode = "DO_NOT_COPY";
                    }};
                    creator = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "iure";
                    }};
                    disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "magnam";
                    }};
                    displayHints = new GoogleAppsDriveLabelsV2LabelDisplayHints() {{
                        disabled = false;
                        hiddenInSearch = false;
                        priority = "debitis";
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
                                person = "delectus";
                            }};
                            dateOptions = new GoogleAppsDriveLabelsV2FieldDateOptionsInput() {{
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
                            disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "excepturi";
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
                                displayName = "nisi";
                                insertBeforeField = "recusandae";
                                required = false;
                            }};
                            publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "temporibus";
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
                                            person = "quis";
                                        }};
                                        disabler = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "veritatis";
                                        }};
                                        displayHints = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints() {{
                                            badgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
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
                                            darkBadgeColors = new GoogleAppsDriveLabelsV2BadgeColors() {{
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
                                        lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                                            disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                                                hideInSearch = false;
                                                showInApply = false;
                                            }};
                                        }};
                                        properties = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties() {{
                                            badgeConfig = new GoogleAppsDriveLabelsV2BadgeConfig() {{
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
                                        publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "ipsum";
                                        }};
                                        schemaCapabilities = new GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities() {{
                                            canDelete = false;
                                            canDisable = false;
                                            canEnable = false;
                                            canUpdate = false;
                                        }};
                                        updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                            person = "excepturi";
                                        }};
                                    }}),
                                }};
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 135218;
                                }};
                            }};
                            updater = new GoogleAppsDriveLabelsV2UserInfo() {{
                                person = "perferendis";
                            }};
                            userOptions = new GoogleAppsDriveLabelsV2FieldUserOptions() {{
                                listOptions = new GoogleAppsDriveLabelsV2FieldListOptions() {{
                                    maxEntries = 324141;
                                }};
                            }};
                        }}),
                    }};
                    labelType = "SHARED";
                    learnMoreUri = "sed";
                    lifecycle = new GoogleAppsDriveLabelsV2LifecycleInput() {{
                        disabledPolicy = new GoogleAppsDriveLabelsV2LifecycleDisabledPolicy() {{
                            hideInSearch = false;
                            showInApply = false;
                        }};
                    }};
                    properties = new GoogleAppsDriveLabelsV2LabelProperties() {{
                        description = "iste";
                        title = "Mrs.";
                    }};
                    publisher = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "natus";
                    }};
                    revisionCreator = new GoogleAppsDriveLabelsV2UserInfo() {{
                        person = "laboriosam";
                    }};
                    schemaCapabilities = new GoogleAppsDriveLabelsV2LabelSchemaCapabilities() {{
                        canDelete = false;
                        canDisable = false;
                        canEnable = false;
                        canUpdate = false;
                    }};
                }};
            }};            

            DrivelabelsLabelsCreateResponse res = sdk.labels.drivelabelsLabelsCreate(req);

            if (res.googleAppsDriveLabelsV2Label.isPresent()) {
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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
