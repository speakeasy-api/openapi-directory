# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/drivelabels/v2beta/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.DrivelabelsLabelsCreateRequest{
        QueryParams: operations.DrivelabelsLabelsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "deserunt",
            Alt: "proto",
            Callback: "nulla",
            Fields: "id",
            Key: "vero",
            LanguageCode: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
            UseAdminAccess: false,
        },
        Request: &shared.GoogleAppsDriveLabelsV2betaLabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities{
                CanApply: false,
                CanRead: false,
                CanRemove: false,
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy{
                CopyMode: "DO_NOT_COPY",
            },
            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "iusto",
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "ullam",
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints{
                Disabled: false,
                HiddenInSearch: false,
                Priority: "saepe",
                ShownInApply: false,
            },
            Fields: []shared.GoogleAppsDriveLabelsV2betaFieldInput{
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: false,
                        CanWrite: false,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "sapiente",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "DATE_FORMAT_UNSPECIFIED",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 383441,
                            Month: 477665,
                            Year: 791725,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 812169,
                            Month: 528895,
                            Year: 479977,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "similique",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: false,
                        HiddenInSearch: false,
                        Required: false,
                        ShownInApply: false,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: false,
                            ShowInApply: false,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "reprehenderit",
                        InsertBeforeField: "molestiae",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "quo",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: false,
                        CanDisable: false,
                        CanEnable: false,
                        CanUpdate: false,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: false,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "laboriosam",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "dicta",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 6481.72,
                                            Blue: 202.18,
                                            Green: 3682.41,
                                            Red: 8326.2,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 9571.56,
                                            Blue: 7781.57,
                                            Green: 1403.5,
                                            Red: 8700.13,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 8700.88,
                                            Blue: 9786.19,
                                            Green: 4736.08,
                                            Red: 7991.59,
                                        },
                                    },
                                    BadgePriority: "et",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 4614.79,
                                            Blue: 5204.78,
                                            Green: 7805.29,
                                            Red: 6788.8,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 1182.74,
                                            Blue: 7206.33,
                                            Green: 6399.21,
                                            Red: 5820.2,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 1433.53,
                                            Blue: 5373.73,
                                            Green: 9446.69,
                                            Red: 7586.16,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "occaecati",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 1059.07,
                                            Blue: 4146.62,
                                            Green: 4736,
                                            Red: 2645.55,
                                        },
                                        PriorityOverride: "amet",
                                    },
                                    Description: "est",
                                    DisplayName: "id",
                                    InsertBeforeChoice: "blanditiis",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "numquam",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "similique",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 135218,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "sit",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 324141,
                        },
                    },
                },
            },
            LabelType: "SHARED",
            LearnMoreURI: "voluptatem",
            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                    HideInSearch: false,
                    ShowInApply: false,
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2betaLabelProperties{
                Description: "laborum",
                Title: "Dynamic Communications Coordinator",
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "earum",
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "ut",
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities{
                CanDelete: false,
                CanDisable: false,
                CanEnable: false,
                CanUpdate: false,
            },
        },
    }

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### Labels

* `DrivelabelsLabelsCreate` - Creates a new Label.
* `DrivelabelsLabelsDelta` - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* `DrivelabelsLabelsDisable` - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* `DrivelabelsLabelsEnable` - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* `DrivelabelsLabelsList` - List labels.
* `DrivelabelsLabelsPublish` - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* `DrivelabelsLabelsRevisionsLocksList` - Lists the LabelLocks on a Label.
* `DrivelabelsLabelsRevisionsPermissionsBatchDelete` - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsRevisionsPermissionsBatchUpdate` - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsRevisionsPermissionsCreate` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsRevisionsPermissionsDelete` - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsRevisionsPermissionsList` - Lists a Label's permissions.
* `DrivelabelsLabelsRevisionsUpdatePermissions` - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* `DrivelabelsLabelsUpdateLabelCopyMode` - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### Limits

* `DrivelabelsLimitsGetLabel` - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### Users

* `DrivelabelsUsersGetCapabilities` - Gets the user capabilities.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
