# Labels

### Available Operations

* [DrivelabelsLabelsCreate](#drivelabelslabelscreate) - Creates a new Label.
* [DrivelabelsLabelsDelta](#drivelabelslabelsdelta) - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* [DrivelabelsLabelsDisable](#drivelabelslabelsdisable) - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* [DrivelabelsLabelsEnable](#drivelabelslabelsenable) - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* [DrivelabelsLabelsList](#drivelabelslabelslist) - List labels.
* [DrivelabelsLabelsPublish](#drivelabelslabelspublish) - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* [DrivelabelsLabelsRevisionsLocksList](#drivelabelslabelsrevisionslockslist) - Lists the LabelLocks on a Label.
* [DrivelabelsLabelsRevisionsPermissionsBatchDelete](#drivelabelslabelsrevisionspermissionsbatchdelete) - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsRevisionsPermissionsBatchUpdate](#drivelabelslabelsrevisionspermissionsbatchupdate) - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsRevisionsPermissionsCreate](#drivelabelslabelsrevisionspermissionscreate) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsRevisionsPermissionsDelete](#drivelabelslabelsrevisionspermissionsdelete) - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsRevisionsPermissionsList](#drivelabelslabelsrevisionspermissionslist) - Lists a Label's permissions.
* [DrivelabelsLabelsRevisionsUpdatePermissions](#drivelabelslabelsrevisionsupdatepermissions) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsUpdateLabelCopyMode](#drivelabelslabelsupdatelabelcopymode) - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

## DrivelabelsLabelsCreate

Creates a new Label.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsCreate(ctx, operations.DrivelabelsLabelsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsDriveLabelsV2betaLabelInput: &shared.GoogleAppsDriveLabelsV2betaLabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities{
                CanApply: sdk.Bool(false),
                CanRead: sdk.Bool(false),
                CanRemove: sdk.Bool(false),
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy{
                CopyMode: shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnumDoNotCopy.ToPointer(),
            },
            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: sdk.String("autem"),
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: sdk.String("nobis"),
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints{
                Disabled: sdk.Bool(false),
                HiddenInSearch: sdk.Bool(false),
                Priority: sdk.String("quas"),
                ShownInApply: sdk.Bool(false),
            },
            Fields: []shared.GoogleAppsDriveLabelsV2betaFieldInput{
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: sdk.Bool(false),
                        CanSearch: sdk.Bool(false),
                        CanWrite: sdk.Bool(false),
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("nulla"),
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumLongDate.ToPointer(),
                        MaxValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(727044),
                            Month: sdk.Int(96549),
                            Year: sdk.Int(270328),
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(256139),
                            Month: sdk.Int(131482),
                            Year: sdk.Int(591935),
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("ipsa"),
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: sdk.Bool(false),
                        HiddenInSearch: sdk.Bool(false),
                        Required: sdk.Bool(false),
                        ShownInApply: sdk.Bool(false),
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: sdk.String("molestiae"),
                        InsertBeforeField: sdk.String("magnam"),
                        Required: sdk.Bool(false),
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("odio"),
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: sdk.Bool(false),
                        CanDisable: sdk.Bool(false),
                        CanEnable: sdk.Bool(false),
                        CanUpdate: sdk.Bool(false),
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("esse"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("esse"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(5245.93),
                                            Blue: sdk.Float32(6832.82),
                                            Green: sdk.Float32(4420.15),
                                            Red: sdk.Float32(6956.26),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8526.35),
                                            Blue: sdk.Float32(2835.19),
                                            Green: sdk.Float32(4334.39),
                                            Red: sdk.Float32(3799.27),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8268.71),
                                            Blue: sdk.Float32(1811.51),
                                            Green: sdk.Float32(5093.42),
                                            Red: sdk.Float32(7885.46),
                                        },
                                    },
                                    BadgePriority: sdk.String("veritatis"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(568.48),
                                            Blue: sdk.Float32(6600.4),
                                            Green: sdk.Float32(6969.97),
                                            Red: sdk.Float32(2065.94),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7786.96),
                                            Blue: sdk.Float32(8472.76),
                                            Green: sdk.Float32(7774.08),
                                            Red: sdk.Float32(6813.59),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2594.22),
                                            Blue: sdk.Float32(1783.67),
                                            Green: sdk.Float32(3738.13),
                                            Red: sdk.Float32(698.59),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("904e523c-7e0b-4c71-b8e4-796f2a70c688"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1598.67),
                                            Blue: sdk.Float32(5361.78),
                                            Green: sdk.Float32(1438.29),
                                            Red: sdk.Float32(6813.93),
                                        },
                                        PriorityOverride: sdk.String("mollitia"),
                                    },
                                    Description: sdk.String("incidunt"),
                                    DisplayName: sdk.String("atque"),
                                    InsertBeforeChoice: sdk.String("explicabo"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("minima"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("nisi"),
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("fugit"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("sapiente"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1598.7),
                                            Blue: sdk.Float32(1871.31),
                                            Green: sdk.Float32(1294.12),
                                            Red: sdk.Float32(9039.84),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(5789.22),
                                            Blue: sdk.Float32(5438.06),
                                            Green: sdk.Float32(922.6),
                                            Red: sdk.Float32(4569.11),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(9105.45),
                                            Blue: sdk.Float32(8820.42),
                                            Green: sdk.Float32(829.71),
                                            Red: sdk.Float32(4586.04),
                                        },
                                    },
                                    BadgePriority: sdk.String("quod"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7241.68),
                                            Blue: sdk.Float32(8771.31),
                                            Green: sdk.Float32(3990.25),
                                            Red: sdk.Float32(934.59),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(9040.45),
                                            Blue: sdk.Float32(4263.06),
                                            Green: sdk.Float32(6900.25),
                                            Red: sdk.Float32(4732.21),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6996.22),
                                            Blue: sdk.Float32(5801.97),
                                            Green: sdk.Float32(3277.2),
                                            Red: sdk.Float32(7162.44),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("c0ab3c20-c4f3-4789-bd87-1f99dd2efd12"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(944.58),
                                            Blue: sdk.Float32(6288.99),
                                            Green: sdk.Float32(6336.08),
                                            Red: sdk.Float32(3984.34),
                                        },
                                        PriorityOverride: sdk.String("tenetur"),
                                    },
                                    Description: sdk.String("quae"),
                                    DisplayName: sdk.String("earum"),
                                    InsertBeforeChoice: sdk.String("vel"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("in"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("eius"),
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: sdk.Int(727697),
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("illum"),
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: sdk.Int(742238),
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: sdk.Bool(false),
                        CanSearch: sdk.Bool(false),
                        CanWrite: sdk.Bool(false),
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("accusantium"),
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumDateFormatUnspecified.ToPointer(),
                        MaxValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(958983),
                            Month: sdk.Int(119771),
                            Year: sdk.Int(355369),
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(443879),
                            Month: sdk.Int(356707),
                            Year: sdk.Int(391774),
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("aut"),
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: sdk.Bool(false),
                        HiddenInSearch: sdk.Bool(false),
                        Required: sdk.Bool(false),
                        ShownInApply: sdk.Bool(false),
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: sdk.String("voluptatum"),
                        InsertBeforeField: sdk.String("qui"),
                        Required: sdk.Bool(false),
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("quibusdam"),
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: sdk.Bool(false),
                        CanDisable: sdk.Bool(false),
                        CanEnable: sdk.Bool(false),
                        CanUpdate: sdk.Bool(false),
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("deleniti"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("itaque"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6802.7),
                                            Blue: sdk.Float32(996.15),
                                            Green: sdk.Float32(6091.78),
                                            Red: sdk.Float32(9453.02),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(984.78),
                                            Blue: sdk.Float32(8694.89),
                                            Green: sdk.Float32(920.27),
                                            Red: sdk.Float32(4541.62),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(559.65),
                                            Blue: sdk.Float32(3267.01),
                                            Green: sdk.Float32(865.32),
                                            Red: sdk.Float32(2327.44),
                                        },
                                    },
                                    BadgePriority: sdk.String("adipisci"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6144.65),
                                            Blue: sdk.Float32(8395.13),
                                            Green: sdk.Float32(330.74),
                                            Red: sdk.Float32(5223.71),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(156.06),
                                            Blue: sdk.Float32(5130.75),
                                            Green: sdk.Float32(4287.96),
                                            Red: sdk.Float32(6498.32),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(680.74),
                                            Blue: sdk.Float32(5445.91),
                                            Green: sdk.Float32(2519.41),
                                            Red: sdk.Float32(324.65),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("394c2607-1f93-4f5f-8642-dac7af515cc4"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(704.47),
                                            Blue: sdk.Float32(2414.18),
                                            Green: sdk.Float32(6835.73),
                                            Red: sdk.Float32(6625.05),
                                        },
                                        PriorityOverride: sdk.String("suscipit"),
                                    },
                                    Description: sdk.String("velit"),
                                    DisplayName: sdk.String("culpa"),
                                    InsertBeforeChoice: sdk.String("est"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("recusandae"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("totam"),
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("fugiat"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("vel"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4976.78),
                                            Blue: sdk.Float32(5546.88),
                                            Green: sdk.Float32(4278.34),
                                            Red: sdk.Float32(2870.51),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8225.6),
                                            Blue: sdk.Float32(7065.75),
                                            Green: sdk.Float32(7382.27),
                                            Red: sdk.Float32(4148.57),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4471.44),
                                            Blue: sdk.Float32(3605.45),
                                            Green: sdk.Float32(9689.04),
                                            Red: sdk.Float32(8286.57),
                                        },
                                    },
                                    BadgePriority: sdk.String("nemo"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(9249.67),
                                            Blue: sdk.Float32(3975.33),
                                            Green: sdk.Float32(460.07),
                                            Red: sdk.Float32(7386.83),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2326.27),
                                            Blue: sdk.Float32(4490.83),
                                            Green: sdk.Float32(3485.19),
                                            Red: sdk.Float32(9372.85),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8149.67),
                                            Blue: sdk.Float32(2572.33),
                                            Green: sdk.Float32(9854.92),
                                            Red: sdk.Float32(3817.6),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("fbee41f3-3317-4fe3-9b60-eb1ea426555b"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6801.16),
                                            Blue: sdk.Float32(2378.07),
                                            Green: sdk.Float32(7955.35),
                                            Red: sdk.Float32(1718.53),
                                        },
                                        PriorityOverride: sdk.String("blanditiis"),
                                    },
                                    Description: sdk.String("in"),
                                    DisplayName: sdk.String("dolore"),
                                    InsertBeforeChoice: sdk.String("aliquam"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("officiis"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("temporibus"),
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: sdk.Int(351870),
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("adipisci"),
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: sdk.Int(738391),
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: sdk.Bool(false),
                        CanSearch: sdk.Bool(false),
                        CanWrite: sdk.Bool(false),
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("blanditiis"),
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumLongDate.ToPointer(),
                        MaxValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(942584),
                            Month: sdk.Int(201517),
                            Year: sdk.Int(633998),
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(548519),
                            Month: sdk.Int(867290),
                            Year: sdk.Int(519643),
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("hic"),
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: sdk.Bool(false),
                        HiddenInSearch: sdk.Bool(false),
                        Required: sdk.Bool(false),
                        ShownInApply: sdk.Bool(false),
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: sdk.String("exercitationem"),
                        InsertBeforeField: sdk.String("nobis"),
                        Required: sdk.Bool(false),
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("sit"),
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: sdk.Bool(false),
                        CanDisable: sdk.Bool(false),
                        CanEnable: sdk.Bool(false),
                        CanUpdate: sdk.Bool(false),
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("sed"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("reiciendis"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1318.52),
                                            Blue: sdk.Float32(9944.01),
                                            Green: sdk.Float32(7079.18),
                                            Red: sdk.Float32(4518.22),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7090.72),
                                            Blue: sdk.Float32(708.69),
                                            Green: sdk.Float32(6117.49),
                                            Red: sdk.Float32(2927.94),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6719.07),
                                            Blue: sdk.Float32(1523.54),
                                            Green: sdk.Float32(4475.16),
                                            Red: sdk.Float32(4174.86),
                                        },
                                    },
                                    BadgePriority: sdk.String("quidem"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1312.89),
                                            Blue: sdk.Float32(3783.26),
                                            Green: sdk.Float32(6041.18),
                                            Red: sdk.Float32(1000.32),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3828.08),
                                            Blue: sdk.Float32(9602.57),
                                            Green: sdk.Float32(8953.86),
                                            Red: sdk.Float32(724.34),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(9677.95),
                                            Blue: sdk.Float32(193),
                                            Green: sdk.Float32(5468.85),
                                            Red: sdk.Float32(9795.74),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("4294e369-8f44-47f6-83e8-b445e80ca55e"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(9671.22),
                                            Blue: sdk.Float32(8623.19),
                                            Green: sdk.Float32(1685.76),
                                            Red: sdk.Float32(486.9),
                                        },
                                        PriorityOverride: sdk.String("saepe"),
                                    },
                                    Description: sdk.String("numquam"),
                                    DisplayName: sdk.String("veniam"),
                                    InsertBeforeChoice: sdk.String("in"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("officiis"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("beatae"),
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("laudantium"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("exercitationem"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(5106.29),
                                            Blue: sdk.Float32(7400.98),
                                            Green: sdk.Float32(3868.27),
                                            Red: sdk.Float32(6805.15),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(5300.89),
                                            Blue: sdk.Float32(6223.85),
                                            Green: sdk.Float32(9447.08),
                                            Red: sdk.Float32(7105.29),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8928.63),
                                            Blue: sdk.Float32(2049.23),
                                            Green: sdk.Float32(6771.15),
                                            Red: sdk.Float32(3416.98),
                                        },
                                    },
                                    BadgePriority: sdk.String("officia"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6762.43),
                                            Blue: sdk.Float32(5483.61),
                                            Green: sdk.Float32(8792.35),
                                            Red: sdk.Float32(2726.83),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(5436.78),
                                            Blue: sdk.Float32(1482.68),
                                            Green: sdk.Float32(2826.99),
                                            Red: sdk.Float32(8563.03),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(302.35),
                                            Blue: sdk.Float32(6350.57),
                                            Green: sdk.Float32(7103.37),
                                            Red: sdk.Float32(2996.43),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("075088e5-1862-4065-a904-f3b1194b8abf"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3888.67),
                                            Blue: sdk.Float32(27.03),
                                            Green: sdk.Float32(2270.84),
                                            Red: sdk.Float32(6471.97),
                                        },
                                        PriorityOverride: sdk.String("voluptate"),
                                    },
                                    Description: sdk.String("unde"),
                                    DisplayName: sdk.String("reiciendis"),
                                    InsertBeforeChoice: sdk.String("provident"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("repellendus"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("delectus"),
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("voluptates"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("perferendis"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6672.85),
                                            Blue: sdk.Float32(6964.83),
                                            Green: sdk.Float32(4406.66),
                                            Red: sdk.Float32(8136.79),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6850.92),
                                            Blue: sdk.Float32(5098.07),
                                            Green: sdk.Float32(6485.98),
                                            Red: sdk.Float32(3339.65),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(291),
                                            Blue: sdk.Float32(7908.4),
                                            Green: sdk.Float32(9195.32),
                                            Red: sdk.Float32(972.43),
                                        },
                                    },
                                    BadgePriority: sdk.String("atque"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4420.36),
                                            Blue: sdk.Float32(9911.42),
                                            Green: sdk.Float32(5199.52),
                                            Red: sdk.Float32(3831.03),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6939.57),
                                            Blue: sdk.Float32(8066.7),
                                            Green: sdk.Float32(908.85),
                                            Red: sdk.Float32(4610.07),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2277.59),
                                            Blue: sdk.Float32(8268.25),
                                            Green: sdk.Float32(4103.01),
                                            Red: sdk.Float32(5391.18),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("9eee9526-f8d9-486e-881e-ad4f0e101256"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2465.35),
                                            Blue: sdk.Float32(9521.43),
                                            Green: sdk.Float32(5627.83),
                                            Red: sdk.Float32(3000.29),
                                        },
                                        PriorityOverride: sdk.String("saepe"),
                                    },
                                    Description: sdk.String("consequuntur"),
                                    DisplayName: sdk.String("occaecati"),
                                    InsertBeforeChoice: sdk.String("officiis"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("perspiciatis"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("in"),
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: sdk.Int(238043),
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("eveniet"),
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: sdk.Int(580887),
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: sdk.Bool(false),
                        CanSearch: sdk.Bool(false),
                        CanWrite: sdk.Bool(false),
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("consequuntur"),
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumDateFormatUnspecified.ToPointer(),
                        MaxValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(661118),
                            Month: sdk.Int(335631),
                            Year: sdk.Int(440264),
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(625528),
                            Month: sdk.Int(76486),
                            Year: sdk.Int(361306),
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("quidem"),
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: sdk.Bool(false),
                        HiddenInSearch: sdk.Bool(false),
                        Required: sdk.Bool(false),
                        ShownInApply: sdk.Bool(false),
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: sdk.String("eveniet"),
                        InsertBeforeField: sdk.String("non"),
                        Required: sdk.Bool(false),
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("vero"),
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: sdk.Bool(false),
                        CanDisable: sdk.Bool(false),
                        CanEnable: sdk.Bool(false),
                        CanUpdate: sdk.Bool(false),
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("iure"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("ipsa"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(5176.12),
                                            Blue: sdk.Float32(610.78),
                                            Green: sdk.Float32(4746.68),
                                            Red: sdk.Float32(9077.33),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1843.62),
                                            Blue: sdk.Float32(7398.84),
                                            Green: sdk.Float32(4347.61),
                                            Red: sdk.Float32(8980.63),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1875.52),
                                            Blue: sdk.Float32(6725.82),
                                            Green: sdk.Float32(7152.08),
                                            Red: sdk.Float32(5289.4),
                                        },
                                    },
                                    BadgePriority: sdk.String("rem"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3044.46),
                                            Blue: sdk.Float32(3205.65),
                                            Green: sdk.Float32(9979.63),
                                            Red: sdk.Float32(30.99),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3621.89),
                                            Blue: sdk.Float32(5973.03),
                                            Green: sdk.Float32(4706.49),
                                            Red: sdk.Float32(6490.78),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3782.45),
                                            Blue: sdk.Float32(51.89),
                                            Green: sdk.Float32(9795.27),
                                            Red: sdk.Float32(9702.22),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("2a54a31e-9476-44a3-a865-e7956f9251a5"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6523.09),
                                            Blue: sdk.Float32(5910.27),
                                            Green: sdk.Float32(8217.19),
                                            Red: sdk.Float32(6591.77),
                                        },
                                        PriorityOverride: sdk.String("ex"),
                                    },
                                    Description: sdk.String("aliquid"),
                                    DisplayName: sdk.String("accusantium"),
                                    InsertBeforeChoice: sdk.String("repellat"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("doloribus"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: sdk.String("ullam"),
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: sdk.Int(448143),
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: sdk.String("nam"),
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: sdk.Int(937636),
                        },
                    },
                },
            },
            LabelType: shared.GoogleAppsDriveLabelsV2betaLabelLabelTypeEnumAdmin.ToPointer(),
            LearnMoreURI: sdk.String("laborum"),
            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                    HideInSearch: sdk.Bool(false),
                    ShowInApply: sdk.Bool(false),
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2betaLabelProperties{
                Description: sdk.String("placeat"),
                Title: sdk.String("Mrs."),
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: sdk.String("voluptatibus"),
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: sdk.String("molestias"),
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities{
                CanDelete: sdk.Bool(false),
                CanDisable: sdk.Bool(false),
                CanEnable: sdk.Bool(false),
                CanUpdate: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("rerum"),
        LanguageCode: sdk.String("tempora"),
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("cumque"),
        UseAdminAccess: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabel != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsDelta

Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsDelta(ctx, operations.DrivelabelsLabelsDeltaRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput{
            LanguageCode: sdk.String("perferendis"),
            Requests: []shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput{
                shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput{
                    CreateField: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput{
                        Field: &shared.GoogleAppsDriveLabelsV2betaFieldInput{
                            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                                CanRead: sdk.Bool(false),
                                CanSearch: sdk.Bool(false),
                                CanWrite: sdk.Bool(false),
                            },
                            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                Person: sdk.String("aspernatur"),
                            },
                            DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                                DateFormatType: shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumLongDate.ToPointer(),
                                MaxValue: &shared.GoogleTypeDate{
                                    Day: sdk.Int(260628),
                                    Month: sdk.Int(521996),
                                    Year: sdk.Int(871083),
                                },
                                MinValue: &shared.GoogleTypeDate{
                                    Day: sdk.Int(773084),
                                    Month: sdk.Int(179410),
                                    Year: sdk.Int(958741),
                                },
                            },
                            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                Person: sdk.String("eum"),
                            },
                            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                                Disabled: sdk.Bool(false),
                                HiddenInSearch: sdk.Bool(false),
                                Required: sdk.Bool(false),
                                ShownInApply: sdk.Bool(false),
                            },
                            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                    HideInSearch: sdk.Bool(false),
                                    ShowInApply: sdk.Bool(false),
                                },
                            },
                            Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                                DisplayName: sdk.String("dicta"),
                                InsertBeforeField: sdk.String("minima"),
                                Required: sdk.Bool(false),
                            },
                            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                Person: sdk.String("beatae"),
                            },
                            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                                CanDelete: sdk.Bool(false),
                                CanDisable: sdk.Bool(false),
                                CanEnable: sdk.Bool(false),
                                CanUpdate: sdk.Bool(false),
                            },
                            SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                                Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                    shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                        AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                            CanRead: sdk.Bool(false),
                                            CanSearch: sdk.Bool(false),
                                            CanSelect: sdk.Bool(false),
                                        },
                                        Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("provident"),
                                        },
                                        Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("earum"),
                                        },
                                        DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                            BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                                BackgroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(7453.98),
                                                    Blue: sdk.Float32(9407.82),
                                                    Green: sdk.Float32(8481.51),
                                                    Red: sdk.Float32(525.08),
                                                },
                                                ForegroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(9358.33),
                                                    Blue: sdk.Float32(5962.11),
                                                    Green: sdk.Float32(9834.27),
                                                    Red: sdk.Float32(8918.01),
                                                },
                                                SoloColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(3998.02),
                                                    Blue: sdk.Float32(7809.31),
                                                    Green: sdk.Float32(3803.35),
                                                    Red: sdk.Float32(2115.34),
                                                },
                                            },
                                            BadgePriority: sdk.String("fugit"),
                                            DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                                BackgroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(7649.95),
                                                    Blue: sdk.Float32(6849.35),
                                                    Green: sdk.Float32(1890.62),
                                                    Red: sdk.Float32(6567.62),
                                                },
                                                ForegroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(8987.6),
                                                    Blue: sdk.Float32(8620.63),
                                                    Green: sdk.Float32(89.31),
                                                    Red: sdk.Float32(972.58),
                                                },
                                                SoloColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(902.33),
                                                    Blue: sdk.Float32(4977.77),
                                                    Green: sdk.Float32(6191.83),
                                                    Red: sdk.Float32(5810.82),
                                                },
                                            },
                                            Disabled: sdk.Bool(false),
                                            HiddenInSearch: sdk.Bool(false),
                                            ShownInApply: sdk.Bool(false),
                                        },
                                        ID: sdk.String("6312fde0-4771-4778-bf61-d017476360a1"),
                                        Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                            DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                                HideInSearch: sdk.Bool(false),
                                                ShowInApply: sdk.Bool(false),
                                            },
                                        },
                                        Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                            BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                                Color: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(3447.18),
                                                    Blue: sdk.Float32(8567.56),
                                                    Green: sdk.Float32(7137.67),
                                                    Red: sdk.Float32(3996.67),
                                                },
                                                PriorityOverride: sdk.String("officia"),
                                            },
                                            Description: sdk.String("suscipit"),
                                            DisplayName: sdk.String("aliquid"),
                                            InsertBeforeChoice: sdk.String("perferendis"),
                                        },
                                        Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("eum"),
                                        },
                                        SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                            CanDelete: sdk.Bool(false),
                                            CanDisable: sdk.Bool(false),
                                            CanEnable: sdk.Bool(false),
                                            CanUpdate: sdk.Bool(false),
                                        },
                                        Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("voluptas"),
                                        },
                                    },
                                    shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                        AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                            CanRead: sdk.Bool(false),
                                            CanSearch: sdk.Bool(false),
                                            CanSelect: sdk.Bool(false),
                                        },
                                        Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("iste"),
                                        },
                                        Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("id"),
                                        },
                                        DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                            BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                                BackgroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(700.42),
                                                    Blue: sdk.Float32(6253.58),
                                                    Green: sdk.Float32(8224.07),
                                                    Red: sdk.Float32(9139.92),
                                                },
                                                ForegroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(6534.21),
                                                    Blue: sdk.Float32(6717.94),
                                                    Green: sdk.Float32(7263.43),
                                                    Red: sdk.Float32(3240.83),
                                                },
                                                SoloColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(5369.23),
                                                    Blue: sdk.Float32(3162.2),
                                                    Green: sdk.Float32(1104.77),
                                                    Red: sdk.Float32(8333.16),
                                                },
                                            },
                                            BadgePriority: sdk.String("ex"),
                                            DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                                BackgroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(7758.03),
                                                    Blue: sdk.Float32(4053.73),
                                                    Green: sdk.Float32(2811.53),
                                                    Red: sdk.Float32(3210.43),
                                                },
                                                ForegroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(7139.27),
                                                    Blue: sdk.Float32(299.5),
                                                    Green: sdk.Float32(5615.77),
                                                    Red: sdk.Float32(7372.54),
                                                },
                                                SoloColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(3996.6),
                                                    Blue: sdk.Float32(1097.84),
                                                    Green: sdk.Float32(5308.6),
                                                    Red: sdk.Float32(6063.08),
                                                },
                                            },
                                            Disabled: sdk.Bool(false),
                                            HiddenInSearch: sdk.Bool(false),
                                            ShownInApply: sdk.Bool(false),
                                        },
                                        ID: sdk.String("1baa0fe1-ade0-408e-af8c-5f350d8cdb5a"),
                                        Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                            DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                                HideInSearch: sdk.Bool(false),
                                                ShowInApply: sdk.Bool(false),
                                            },
                                        },
                                        Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                            BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                                Color: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(2228.64),
                                                    Blue: sdk.Float32(3073.76),
                                                    Green: sdk.Float32(805.32),
                                                    Red: sdk.Float32(5372.79),
                                                },
                                                PriorityOverride: sdk.String("veritatis"),
                                            },
                                            Description: sdk.String("tempora"),
                                            DisplayName: sdk.String("dolor"),
                                            InsertBeforeChoice: sdk.String("consequatur"),
                                        },
                                        Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("architecto"),
                                        },
                                        SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                            CanDelete: sdk.Bool(false),
                                            CanDisable: sdk.Bool(false),
                                            CanEnable: sdk.Bool(false),
                                            CanUpdate: sdk.Bool(false),
                                        },
                                        Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("sit"),
                                        },
                                    },
                                    shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                        AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                            CanRead: sdk.Bool(false),
                                            CanSearch: sdk.Bool(false),
                                            CanSelect: sdk.Bool(false),
                                        },
                                        Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("modi"),
                                        },
                                        Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("fugit"),
                                        },
                                        DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                            BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                                BackgroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(661.49),
                                                    Blue: sdk.Float32(5137.6),
                                                    Green: sdk.Float32(656.04),
                                                    Red: sdk.Float32(2226.58),
                                                },
                                                ForegroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(8562.77),
                                                    Blue: sdk.Float32(3694.9),
                                                    Green: sdk.Float32(1621.2),
                                                    Red: sdk.Float32(551.07),
                                                },
                                                SoloColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(5596.82),
                                                    Blue: sdk.Float32(9111.98),
                                                    Green: sdk.Float32(7734.56),
                                                    Red: sdk.Float32(8849.52),
                                                },
                                            },
                                            BadgePriority: sdk.String("esse"),
                                            DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                                BackgroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(8972.77),
                                                    Blue: sdk.Float32(1533.69),
                                                    Green: sdk.Float32(3321.91),
                                                    Red: sdk.Float32(1995.96),
                                                },
                                                ForegroundColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(7129.27),
                                                    Blue: sdk.Float32(4329.84),
                                                    Green: sdk.Float32(4269.43),
                                                    Red: sdk.Float32(5282.34),
                                                },
                                                SoloColor: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(3016.92),
                                                    Blue: sdk.Float32(3494.4),
                                                    Green: sdk.Float32(704.1),
                                                    Red: sdk.Float32(7814.8),
                                                },
                                            },
                                            Disabled: sdk.Bool(false),
                                            HiddenInSearch: sdk.Bool(false),
                                            ShownInApply: sdk.Bool(false),
                                        },
                                        ID: sdk.String("6c6e205e-16de-4ab3-bec9-578a64584273"),
                                        Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                            DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                                HideInSearch: sdk.Bool(false),
                                                ShowInApply: sdk.Bool(false),
                                            },
                                        },
                                        Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                            BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                                Color: &shared.GoogleTypeColor{
                                                    Alpha: sdk.Float32(6817.4),
                                                    Blue: sdk.Float32(5140.54),
                                                    Green: sdk.Float32(2773.4),
                                                    Red: sdk.Float32(974.93),
                                                },
                                                PriorityOverride: sdk.String("rem"),
                                            },
                                            Description: sdk.String("fugiat"),
                                            DisplayName: sdk.String("dicta"),
                                            InsertBeforeChoice: sdk.String("nisi"),
                                        },
                                        Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("consequuntur"),
                                        },
                                        SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                            CanDelete: sdk.Bool(false),
                                            CanDisable: sdk.Bool(false),
                                            CanEnable: sdk.Bool(false),
                                            CanUpdate: sdk.Bool(false),
                                        },
                                        Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                            Person: sdk.String("consectetur"),
                                        },
                                    },
                                },
                                ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                                    MaxEntries: sdk.Int(46806),
                                },
                            },
                            Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                Person: sdk.String("cupiditate"),
                            },
                            UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                                ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                                    MaxEntries: sdk.Int(970732),
                                },
                            },
                        },
                    },
                    CreateSelectionChoice: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput{
                        Choice: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                CanRead: sdk.Bool(false),
                                CanSearch: sdk.Bool(false),
                                CanSelect: sdk.Bool(false),
                            },
                            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                Person: sdk.String("soluta"),
                            },
                            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                Person: sdk.String("alias"),
                            },
                            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                    BackgroundColor: &shared.GoogleTypeColor{
                                        Alpha: sdk.Float32(6089.89),
                                        Blue: sdk.Float32(1785.8),
                                        Green: sdk.Float32(5790.11),
                                        Red: sdk.Float32(6128.67),
                                    },
                                    ForegroundColor: &shared.GoogleTypeColor{
                                        Alpha: sdk.Float32(1700.99),
                                        Blue: sdk.Float32(813.69),
                                        Green: sdk.Float32(6863.62),
                                        Red: sdk.Float32(8818.97),
                                    },
                                    SoloColor: &shared.GoogleTypeColor{
                                        Alpha: sdk.Float32(9768.02),
                                        Blue: sdk.Float32(7196.2),
                                        Green: sdk.Float32(6085.93),
                                        Red: sdk.Float32(9663.9),
                                    },
                                },
                                BadgePriority: sdk.String("minima"),
                                DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                    BackgroundColor: &shared.GoogleTypeColor{
                                        Alpha: sdk.Float32(5076.36),
                                        Blue: sdk.Float32(8026.92),
                                        Green: sdk.Float32(3004.03),
                                        Red: sdk.Float32(8363.64),
                                    },
                                    ForegroundColor: &shared.GoogleTypeColor{
                                        Alpha: sdk.Float32(5495.01),
                                        Blue: sdk.Float32(4152.8),
                                        Green: sdk.Float32(9308.19),
                                        Red: sdk.Float32(4156.08),
                                    },
                                    SoloColor: &shared.GoogleTypeColor{
                                        Alpha: sdk.Float32(5207.61),
                                        Blue: sdk.Float32(9366.18),
                                        Green: sdk.Float32(2672.07),
                                        Red: sdk.Float32(7221.84),
                                    },
                                },
                                Disabled: sdk.Bool(false),
                                HiddenInSearch: sdk.Bool(false),
                                ShownInApply: sdk.Bool(false),
                            },
                            ID: sdk.String("e056013f-59da-4757-a59e-cfef66ef1caa"),
                            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                    HideInSearch: sdk.Bool(false),
                                    ShowInApply: sdk.Bool(false),
                                },
                            },
                            Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                    Color: &shared.GoogleTypeColor{
                                        Alpha: sdk.Float32(2310.7),
                                        Blue: sdk.Float32(2448.89),
                                        Green: sdk.Float32(5388.69),
                                        Red: sdk.Float32(2164.57),
                                    },
                                    PriorityOverride: sdk.String("impedit"),
                                },
                                Description: sdk.String("magni"),
                                DisplayName: sdk.String("soluta"),
                                InsertBeforeChoice: sdk.String("repudiandae"),
                            },
                            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                Person: sdk.String("nam"),
                            },
                            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                CanDelete: sdk.Bool(false),
                                CanDisable: sdk.Bool(false),
                                CanEnable: sdk.Bool(false),
                                CanUpdate: sdk.Bool(false),
                            },
                            Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                Person: sdk.String("dolore"),
                            },
                        },
                        FieldID: sdk.String("iusto"),
                    },
                    DeleteField: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest{
                        ID: sdk.String("7373c8d7-2f64-4d1d-b1f2-c4310661e963"),
                    },
                    DeleteSelectionChoice: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest{
                        FieldID: sdk.String("ut"),
                        ID: sdk.String("9e1cf9e0-6e3a-4437-800a-e6b6bc9b8f75"),
                    },
                    DisableField: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                        ID: sdk.String("9eac55a9-741d-4311-b529-65bb8a720261"),
                        UpdateMask: sdk.String("quae"),
                    },
                    DisableSelectionChoice: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                        FieldID: sdk.String("modi"),
                        ID: sdk.String("35e139db-c225-49b1-abda-8c070e1084cb"),
                        UpdateMask: sdk.String("voluptatem"),
                    },
                    EnableField: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest{
                        ID: sdk.String("672d1ad8-79ee-4b96-a5b8-5efbd02bae0b"),
                    },
                    EnableSelectionChoice: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest{
                        FieldID: sdk.String("officiis"),
                        ID: sdk.String("2d782259-e3ea-44b5-997f-92443da7ce52"),
                    },
                    UpdateField: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest{
                        ID: sdk.String("b895c537-c645-44ef-b0b3-4896c3ca5acf"),
                        Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                            DisplayName: sdk.String("tempore"),
                            InsertBeforeField: sdk.String("vero"),
                            Required: sdk.Bool(false),
                        },
                        UpdateMask: sdk.String("odit"),
                    },
                    UpdateFieldType: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput{
                        DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                            DateFormatType: shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatTypeEnumShortDate.ToPointer(),
                            MaxValue: &shared.GoogleTypeDate{
                                Day: sdk.Int(865946),
                                Month: sdk.Int(362888),
                                Year: sdk.Int(441321),
                            },
                            MinValue: &shared.GoogleTypeDate{
                                Day: sdk.Int(45234),
                                Month: sdk.Int(486410),
                                Year: sdk.Int(325297),
                            },
                        },
                        ID: sdk.String("77929177-deac-4646-acb5-73409e3eb1e5"),
                        SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                            Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                        CanRead: sdk.Bool(false),
                                        CanSearch: sdk.Bool(false),
                                        CanSelect: sdk.Bool(false),
                                    },
                                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("dolores"),
                                    },
                                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("nam"),
                                    },
                                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                        BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                            BackgroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(1158.98),
                                                Blue: sdk.Float32(1644.88),
                                                Green: sdk.Float32(8998.67),
                                                Red: sdk.Float32(7482.24),
                                            },
                                            ForegroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(568.77),
                                                Blue: sdk.Float32(4973.57),
                                                Green: sdk.Float32(9804.86),
                                                Red: sdk.Float32(873.82),
                                            },
                                            SoloColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(964.5),
                                                Blue: sdk.Float32(3864.47),
                                                Green: sdk.Float32(8634.71),
                                                Red: sdk.Float32(7294.48),
                                            },
                                        },
                                        BadgePriority: sdk.String("excepturi"),
                                        DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                            BackgroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(5782.1),
                                                Blue: sdk.Float32(3679.17),
                                                Green: sdk.Float32(3063.82),
                                                Red: sdk.Float32(3423.42),
                                            },
                                            ForegroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(9887.49),
                                                Blue: sdk.Float32(7573.64),
                                                Green: sdk.Float32(5740.32),
                                                Red: sdk.Float32(3145.73),
                                            },
                                            SoloColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(9449.5),
                                                Blue: sdk.Float32(6573.19),
                                                Green: sdk.Float32(5597.74),
                                                Red: sdk.Float32(5173.26),
                                            },
                                        },
                                        Disabled: sdk.Bool(false),
                                        HiddenInSearch: sdk.Bool(false),
                                        ShownInApply: sdk.Bool(false),
                                    },
                                    ID: sdk.String("970e189d-bb30-4fcb-b3ea-055b197cd44e"),
                                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                            HideInSearch: sdk.Bool(false),
                                            ShowInApply: sdk.Bool(false),
                                        },
                                    },
                                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                        BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                            Color: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(1509.35),
                                                Blue: sdk.Float32(9930.02),
                                                Green: sdk.Float32(3302.67),
                                                Red: sdk.Float32(1645.32),
                                            },
                                            PriorityOverride: sdk.String("facere"),
                                        },
                                        Description: sdk.String("laudantium"),
                                        DisplayName: sdk.String("odit"),
                                        InsertBeforeChoice: sdk.String("pariatur"),
                                    },
                                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("amet"),
                                    },
                                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                        CanDelete: sdk.Bool(false),
                                        CanDisable: sdk.Bool(false),
                                        CanEnable: sdk.Bool(false),
                                        CanUpdate: sdk.Bool(false),
                                    },
                                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("exercitationem"),
                                    },
                                },
                                shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                        CanRead: sdk.Bool(false),
                                        CanSearch: sdk.Bool(false),
                                        CanSelect: sdk.Bool(false),
                                    },
                                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("ab"),
                                    },
                                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("velit"),
                                    },
                                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                        BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                            BackgroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(7057.1),
                                                Blue: sdk.Float32(7310.65),
                                                Green: sdk.Float32(3952.33),
                                                Red: sdk.Float32(9775.18),
                                            },
                                            ForegroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(3108.4),
                                                Blue: sdk.Float32(5037.48),
                                                Green: sdk.Float32(7186.27),
                                                Red: sdk.Float32(3924.3),
                                            },
                                            SoloColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(3359.77),
                                                Blue: sdk.Float32(3919.33),
                                                Green: sdk.Float32(7277.71),
                                                Red: sdk.Float32(7945.07),
                                            },
                                        },
                                        BadgePriority: sdk.String("facere"),
                                        DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                            BackgroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(7060.61),
                                                Blue: sdk.Float32(2176.63),
                                                Green: sdk.Float32(3189.17),
                                                Red: sdk.Float32(9738.19),
                                            },
                                            ForegroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(9745.89),
                                                Blue: sdk.Float32(1623.58),
                                                Green: sdk.Float32(8915.81),
                                                Red: sdk.Float32(2908.41),
                                            },
                                            SoloColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(7009.28),
                                                Blue: sdk.Float32(1797.95),
                                                Green: sdk.Float32(4407.77),
                                                Red: sdk.Float32(3455.06),
                                            },
                                        },
                                        Disabled: sdk.Bool(false),
                                        HiddenInSearch: sdk.Bool(false),
                                        ShownInApply: sdk.Bool(false),
                                    },
                                    ID: sdk.String("37a8cd9e-7319-4c17-bd52-5f77b114eeb5"),
                                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                            HideInSearch: sdk.Bool(false),
                                            ShowInApply: sdk.Bool(false),
                                        },
                                    },
                                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                        BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                            Color: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(1764.99),
                                                Blue: sdk.Float32(9700.79),
                                                Green: sdk.Float32(9391.61),
                                                Red: sdk.Float32(4441.21),
                                            },
                                            PriorityOverride: sdk.String("praesentium"),
                                        },
                                        Description: sdk.String("nemo"),
                                        DisplayName: sdk.String("repellat"),
                                        InsertBeforeChoice: sdk.String("quisquam"),
                                    },
                                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("sequi"),
                                    },
                                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                        CanDelete: sdk.Bool(false),
                                        CanDisable: sdk.Bool(false),
                                        CanEnable: sdk.Bool(false),
                                        CanUpdate: sdk.Bool(false),
                                    },
                                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("nihil"),
                                    },
                                },
                                shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                        CanRead: sdk.Bool(false),
                                        CanSearch: sdk.Bool(false),
                                        CanSelect: sdk.Bool(false),
                                    },
                                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("deleniti"),
                                    },
                                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("illo"),
                                    },
                                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                        BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                            BackgroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(2902.48),
                                                Blue: sdk.Float32(8288.41),
                                                Green: sdk.Float32(3041.73),
                                                Red: sdk.Float32(7904.63),
                                            },
                                            ForegroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(5910.65),
                                                Blue: sdk.Float32(5149.93),
                                                Green: sdk.Float32(9217.19),
                                                Red: sdk.Float32(96.83),
                                            },
                                            SoloColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(8052.64),
                                                Blue: sdk.Float32(1363.57),
                                                Green: sdk.Float32(7239.42),
                                                Red: sdk.Float32(7119.91),
                                            },
                                        },
                                        BadgePriority: sdk.String("quas"),
                                        DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                            BackgroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(5908.58),
                                                Blue: sdk.Float32(9222.99),
                                                Green: sdk.Float32(7000.45),
                                                Red: sdk.Float32(4923.61),
                                            },
                                            ForegroundColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(3609.34),
                                                Blue: sdk.Float32(8738.33),
                                                Green: sdk.Float32(6293.77),
                                                Red: sdk.Float32(8339.82),
                                            },
                                            SoloColor: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(4348.27),
                                                Blue: sdk.Float32(2138.35),
                                                Green: sdk.Float32(4138.01),
                                                Red: sdk.Float32(7712.26),
                                            },
                                        },
                                        Disabled: sdk.Bool(false),
                                        HiddenInSearch: sdk.Bool(false),
                                        ShownInApply: sdk.Bool(false),
                                    },
                                    ID: sdk.String("600503d8-bb31-4180-b739-ae9e057eb809"),
                                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                            HideInSearch: sdk.Bool(false),
                                            ShowInApply: sdk.Bool(false),
                                        },
                                    },
                                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                        BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                            Color: &shared.GoogleTypeColor{
                                                Alpha: sdk.Float32(8795.22),
                                                Blue: sdk.Float32(1786.35),
                                                Green: sdk.Float32(5200.81),
                                                Red: sdk.Float32(1158.61),
                                            },
                                            PriorityOverride: sdk.String("voluptatem"),
                                        },
                                        Description: sdk.String("velit"),
                                        DisplayName: sdk.String("dolor"),
                                        InsertBeforeChoice: sdk.String("sunt"),
                                    },
                                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("a"),
                                    },
                                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                        CanDelete: sdk.Bool(false),
                                        CanDisable: sdk.Bool(false),
                                        CanEnable: sdk.Bool(false),
                                        CanUpdate: sdk.Bool(false),
                                    },
                                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                        Person: sdk.String("dolor"),
                                    },
                                },
                            },
                            ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                                MaxEntries: sdk.Int(582320),
                            },
                        },
                        UpdateMask: sdk.String("atque"),
                        UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                            ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                                MaxEntries: sdk.Int(107472),
                            },
                        },
                    },
                    UpdateLabel: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest{
                        Properties: &shared.GoogleAppsDriveLabelsV2betaLabelProperties{
                            Description: sdk.String("at"),
                            Title: sdk.String("Mrs."),
                        },
                        UpdateMask: sdk.String("minus"),
                    },
                    UpdateSelectionChoiceProperties: &shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest{
                        FieldID: sdk.String("esse"),
                        ID: sdk.String("00b607f3-c93c-473b-9da3-f2ceda7e23f2"),
                        Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                            BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                Color: &shared.GoogleTypeColor{
                                    Alpha: sdk.Float32(1293.55),
                                    Blue: sdk.Float32(3503.25),
                                    Green: sdk.Float32(4714.57),
                                    Red: sdk.Float32(2527),
                                },
                                PriorityOverride: sdk.String("ab"),
                            },
                            Description: sdk.String("illo"),
                            DisplayName: sdk.String("hic"),
                            InsertBeforeChoice: sdk.String("deserunt"),
                        },
                        UpdateMask: sdk.String("delectus"),
                    },
                },
            },
            UseAdminAccess: sdk.Bool(false),
            View: shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnumLabelViewBasic.ToPointer(),
            WriteControl: &shared.GoogleAppsDriveLabelsV2betaWriteControl{
                RequiredRevisionID: sdk.String("distinctio"),
            },
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("labore"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("repudiandae"),
        Name: "Maureen Champlin",
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("deleniti"),
        UploadProtocol: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsDisable

Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsDisable(ctx, operations.DrivelabelsLabelsDisableRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsDriveLabelsV2betaDisableLabelRequest: &shared.GoogleAppsDriveLabelsV2betaDisableLabelRequest{
            DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                HideInSearch: sdk.Bool(false),
                ShowInApply: sdk.Bool(false),
            },
            LanguageCode: sdk.String("similique"),
            UpdateMask: sdk.String("minima"),
            UseAdminAccess: sdk.Bool(false),
            WriteControl: &shared.GoogleAppsDriveLabelsV2betaWriteControl{
                RequiredRevisionID: sdk.String("libero"),
            },
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("modi"),
        Fields: sdk.String("eum"),
        Key: sdk.String("nesciunt"),
        Name: "Julio Stehr",
        OauthToken: sdk.String("veniam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("ab"),
        UploadProtocol: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabel != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsEnable

Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsEnable(ctx, operations.DrivelabelsLabelsEnableRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsDriveLabelsV2betaEnableLabelRequest: &shared.GoogleAppsDriveLabelsV2betaEnableLabelRequest{
            LanguageCode: sdk.String("aut"),
            UseAdminAccess: sdk.Bool(false),
            WriteControl: &shared.GoogleAppsDriveLabelsV2betaWriteControl{
                RequiredRevisionID: sdk.String("eveniet"),
            },
        },
        AccessToken: sdk.String("odio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("dolorum"),
        Key: sdk.String("possimus"),
        Name: "Edith Dooley",
        OauthToken: sdk.String("minus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabel != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsList

List labels.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsList(ctx, operations.DrivelabelsLabelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Customer: sdk.String("autem"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("alias"),
        LanguageCode: sdk.String("rem"),
        MinimumRole: operations.DrivelabelsLabelsListMinimumRoleEnumLabelRoleUnspecified.ToPointer(),
        OauthToken: sdk.String("quos"),
        PageSize: sdk.Int64(511222),
        PageToken: sdk.String("repellendus"),
        PrettyPrint: sdk.Bool(false),
        PublishedOnly: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("eaque"),
        UseAdminAccess: sdk.Bool(false),
        View: operations.DrivelabelsLabelsListViewEnumLabelViewFull.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaListLabelsResponse != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsPublish

Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsPublish(ctx, operations.DrivelabelsLabelsPublishRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAppsDriveLabelsV2betaPublishLabelRequest: &shared.GoogleAppsDriveLabelsV2betaPublishLabelRequest{
            LanguageCode: sdk.String("mollitia"),
            UseAdminAccess: sdk.Bool(false),
            WriteControl: &shared.GoogleAppsDriveLabelsV2betaWriteControl{
                RequiredRevisionID: sdk.String("nulla"),
            },
        },
        AccessToken: sdk.String("officia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("voluptatem"),
        Fields: sdk.String("alias"),
        Key: sdk.String("eveniet"),
        Name: "Mark Gottlieb",
        OauthToken: sdk.String("necessitatibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("harum"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabel != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsRevisionsLocksList

Lists the LabelLocks on a Label.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsRevisionsLocksList(ctx, operations.DrivelabelsLabelsRevisionsLocksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatibus"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("libero"),
        PageSize: sdk.Int64(520678),
        PageToken: sdk.String("sequi"),
        Parent: "aliquid",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ea"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("ducimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaListLabelLocksResponse != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsRevisionsPermissionsBatchDelete

Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsRevisionsPermissionsBatchDelete(ctx, operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest: &shared.GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest{
            Requests: []shared.GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest{
                shared.GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest{
                    Name: sdk.String("Jerald Stoltenberg"),
                    UseAdminAccess: sdk.Bool(false),
                },
            },
            UseAdminAccess: sdk.Bool(false),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nisi"),
        Fields: sdk.String("rerum"),
        Key: sdk.String("recusandae"),
        OauthToken: sdk.String("voluptates"),
        Parent: "non",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsRevisionsPermissionsBatchUpdate

Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsRevisionsPermissionsBatchUpdate(ctx, operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest: &shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest{
            Requests: []shared.GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest{
                shared.GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest{
                    LabelPermission: &shared.GoogleAppsDriveLabelsV2betaLabelPermission{
                        Audience: sdk.String("voluptatibus"),
                        Email: sdk.String("Angelita10@hotmail.com"),
                        Group: sdk.String("enim"),
                        Name: sdk.String("Ian Auer"),
                        Person: sdk.String("a"),
                        Role: shared.GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumOrganizer.ToPointer(),
                    },
                    Parent: sdk.String("dicta"),
                    UseAdminAccess: sdk.Bool(false),
                },
            },
            UseAdminAccess: sdk.Bool(false),
        },
        AccessToken: sdk.String("quos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("modi"),
        Key: sdk.String("itaque"),
        OauthToken: sdk.String("maxime"),
        Parent: "modi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsRevisionsPermissionsCreate

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsRevisionsPermissionsCreate(ctx, operations.DrivelabelsLabelsRevisionsPermissionsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAppsDriveLabelsV2betaLabelPermission: &shared.GoogleAppsDriveLabelsV2betaLabelPermission{
            Audience: sdk.String("impedit"),
            Email: sdk.String("Shawn.Leannon57@hotmail.com"),
            Group: sdk.String("nihil"),
            Name: sdk.String("Charlene Kuhic"),
            Person: sdk.String("vel"),
            Role: shared.GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumReader.ToPointer(),
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("consequuntur"),
        Fields: sdk.String("officia"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("distinctio"),
        Parent: "eius",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("rem"),
        UploadProtocol: sdk.String("maiores"),
        UseAdminAccess: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabelPermission != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsRevisionsPermissionsDelete

Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsRevisionsPermissionsDelete(ctx, operations.DrivelabelsLabelsRevisionsPermissionsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("veniam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("neque"),
        Fields: sdk.String("facere"),
        Key: sdk.String("aliquam"),
        Name: "Domingo Stark",
        OauthToken: sdk.String("velit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("similique"),
        UseAdminAccess: sdk.Bool(false),
        WriteControlRequiredRevisionID: sdk.String("illo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsRevisionsPermissionsList

Lists a Label's permissions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsRevisionsPermissionsList(ctx, operations.DrivelabelsLabelsRevisionsPermissionsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("unde"),
        Key: sdk.String("incidunt"),
        OauthToken: sdk.String("explicabo"),
        PageSize: sdk.Int64(368491),
        PageToken: sdk.String("cupiditate"),
        Parent: "optio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("alias"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("nesciunt"),
        UseAdminAccess: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsRevisionsUpdatePermissions

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsRevisionsUpdatePermissions(ctx, operations.DrivelabelsLabelsRevisionsUpdatePermissionsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsDriveLabelsV2betaLabelPermission: &shared.GoogleAppsDriveLabelsV2betaLabelPermission{
            Audience: sdk.String("sapiente"),
            Email: sdk.String("Ernie_Trantow@gmail.com"),
            Group: sdk.String("ut"),
            Name: sdk.String("Essie Ferry"),
            Person: sdk.String("minima"),
            Role: shared.GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnumApplier.ToPointer(),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("beatae"),
        Fields: sdk.String("hic"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("quisquam"),
        Parent: "dolor",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("minima"),
        UseAdminAccess: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabelPermission != nil {
        // handle response
    }
}
```

## DrivelabelsLabelsUpdateLabelCopyMode

Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Labels.DrivelabelsLabelsUpdateLabelCopyMode(ctx, operations.DrivelabelsLabelsUpdateLabelCopyModeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest: &shared.GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest{
            CopyMode: shared.GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnumCopyModeUnspecified.ToPointer(),
            LanguageCode: sdk.String("aliquid"),
            UseAdminAccess: sdk.Bool(false),
            View: shared.GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnumLabelViewBasic.ToPointer(),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("dolor"),
        Key: sdk.String("exercitationem"),
        Name: "Mrs. Johnathan Russel",
        OauthToken: sdk.String("consequuntur"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabel != nil {
        // handle response
    }
}
```
