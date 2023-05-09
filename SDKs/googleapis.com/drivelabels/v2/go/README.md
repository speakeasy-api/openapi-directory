# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/drivelabels/v2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleAppsDriveLabelsV2LabelInput: &shared.GoogleAppsDriveLabelsV2LabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2LabelAppliedCapabilities{
                CanApply: sdk.Bool(false),
                CanRead: sdk.Bool(false),
                CanRemove: sdk.Bool(false),
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy{
                CopyMode: shared.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnumAlwaysCopy.ToPointer(),
            },
            Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                Person: sdk.String("distinctio"),
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                Person: sdk.String("quibusdam"),
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2LabelDisplayHints{
                Disabled: sdk.Bool(false),
                HiddenInSearch: sdk.Bool(false),
                Priority: sdk.String("unde"),
                ShownInApply: sdk.Bool(false),
            },
            Fields: []shared.GoogleAppsDriveLabelsV2FieldInput{
                shared.GoogleAppsDriveLabelsV2FieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldAppliedCapabilities{
                        CanRead: sdk.Bool(false),
                        CanSearch: sdk.Bool(false),
                        CanWrite: sdk.Bool(false),
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("corrupti"),
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2FieldDateOptionsInput{
                        DateFormatType: shared.GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumShortDate.ToPointer(),
                        MaxValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(423655),
                            Month: sdk.Int(623564),
                            Year: sdk.Int(645894),
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(384382),
                            Month: sdk.Int(437587),
                            Year: sdk.Int(297534),
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("debitis"),
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldDisplayHints{
                        Disabled: sdk.Bool(false),
                        HiddenInSearch: sdk.Bool(false),
                        Required: sdk.Bool(false),
                        ShownInApply: sdk.Bool(false),
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2FieldProperties{
                        DisplayName: sdk.String("ipsa"),
                        InsertBeforeField: sdk.String("delectus"),
                        Required: sdk.Bool(false),
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("tempora"),
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSchemaCapabilities{
                        CanDelete: sdk.Bool(false),
                        CanDisable: sdk.Bool(false),
                        CanEnable: sdk.Bool(false),
                        CanUpdate: sdk.Bool(false),
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("molestiae"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("minus"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8121.69),
                                            Blue: sdk.Float32(5288.95),
                                            Green: sdk.Float32(4799.77),
                                            Red: sdk.Float32(5680.45),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3927.85),
                                            Blue: sdk.Float32(9255.97),
                                            Green: sdk.Float32(8360.79),
                                            Red: sdk.Float32(710.36),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3373.96),
                                            Blue: sdk.Float32(871.29),
                                            Green: sdk.Float32(6481.72),
                                            Red: sdk.Float32(202.18),
                                        },
                                    },
                                    BadgePriority: sdk.String("ipsam"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8326.2),
                                            Blue: sdk.Float32(9571.56),
                                            Green: sdk.Float32(7781.57),
                                            Red: sdk.Float32(1403.5),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8700.13),
                                            Blue: sdk.Float32(8700.88),
                                            Green: sdk.Float32(9786.19),
                                            Red: sdk.Float32(4736.08),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7991.59),
                                            Blue: sdk.Float32(8009.11),
                                            Green: sdk.Float32(4614.79),
                                            Red: sdk.Float32(5204.78),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("ca1ba928-fc81-4674-acb7-39205929396f"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(9025.99),
                                            Blue: sdk.Float32(6818.2),
                                            Green: sdk.Float32(4499.5),
                                            Red: sdk.Float32(3595.08),
                                        },
                                        PriorityOverride: sdk.String("iste"),
                                    },
                                    Description: sdk.String("iure"),
                                    DisplayName: sdk.String("saepe"),
                                    InsertBeforeChoice: sdk.String("quidem"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("architecto"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("ipsa"),
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("reiciendis"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("est"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6531.4),
                                            Blue: sdk.Float32(6706.38),
                                            Green: sdk.Float32(1709.09),
                                            Red: sdk.Float32(2103.82),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3581.52),
                                            Blue: sdk.Float32(1289.26),
                                            Green: sdk.Float32(7506.86),
                                            Red: sdk.Float32(3154.28),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6078.31),
                                            Blue: sdk.Float32(3637.11),
                                            Green: sdk.Float32(3250.47),
                                            Red: sdk.Float32(5701.97),
                                        },
                                    },
                                    BadgePriority: sdk.String("accusantium"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4386.01),
                                            Blue: sdk.Float32(6342.74),
                                            Green: sdk.Float32(9883.74),
                                            Red: sdk.Float32(9589.5),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1020.44),
                                            Blue: sdk.Float32(6527.9),
                                            Green: sdk.Float32(2088.76),
                                            Red: sdk.Float32(6350.59),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1613.09),
                                            Blue: sdk.Float32(9953),
                                            Green: sdk.Float32(6531.08),
                                            Red: sdk.Float32(5818.5),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("46773925-1aa5-42c3-b5ad-019da1ffe78f"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(557.14),
                                            Blue: sdk.Float32(6048.46),
                                            Green: sdk.Float32(4511.59),
                                            Red: sdk.Float32(7392.64),
                                        },
                                        PriorityOverride: sdk.String("perferendis"),
                                    },
                                    Description: sdk.String("doloremque"),
                                    DisplayName: sdk.String("reprehenderit"),
                                    InsertBeforeChoice: sdk.String("ut"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("maiores"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("dicta"),
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: sdk.Int(359444),
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("dolore"),
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2FieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: sdk.Int(480894),
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2FieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldAppliedCapabilities{
                        CanRead: sdk.Bool(false),
                        CanSearch: sdk.Bool(false),
                        CanWrite: sdk.Bool(false),
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("dicta"),
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2FieldDateOptionsInput{
                        DateFormatType: shared.GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumShortDate.ToPointer(),
                        MaxValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(317983),
                            Month: sdk.Int(880476),
                            Year: sdk.Int(414263),
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(918236),
                            Month: sdk.Int(64147),
                            Year: sdk.Int(216822),
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("quidem"),
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldDisplayHints{
                        Disabled: sdk.Bool(false),
                        HiddenInSearch: sdk.Bool(false),
                        Required: sdk.Bool(false),
                        ShownInApply: sdk.Bool(false),
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2FieldProperties{
                        DisplayName: sdk.String("molestias"),
                        InsertBeforeField: sdk.String("excepturi"),
                        Required: sdk.Bool(false),
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("pariatur"),
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSchemaCapabilities{
                        CanDelete: sdk.Bool(false),
                        CanDisable: sdk.Bool(false),
                        CanEnable: sdk.Bool(false),
                        CanUpdate: sdk.Bool(false),
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("praesentium"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("rem"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(9167.23),
                                            Blue: sdk.Float32(939.4),
                                            Green: sdk.Float32(9211.58),
                                            Red: sdk.Float32(5759.47),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(831.12),
                                            Blue: sdk.Float32(9292.97),
                                            Green: sdk.Float32(2777.18),
                                            Red: sdk.Float32(3185.69),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(93.56),
                                            Blue: sdk.Float32(6674.11),
                                            Green: sdk.Float32(8423.42),
                                            Red: sdk.Float32(1317.97),
                                        },
                                    },
                                    BadgePriority: sdk.String("deserunt"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7163.27),
                                            Blue: sdk.Float32(8413.86),
                                            Green: sdk.Float32(2894.06),
                                            Red: sdk.Float32(2647.3),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1831.91),
                                            Blue: sdk.Float32(3978.21),
                                            Green: sdk.Float32(5865.13),
                                            Red: sdk.Float32(5528.22),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(201.07),
                                            Blue: sdk.Float32(1649.4),
                                            Green: sdk.Float32(8289.4),
                                            Red: sdk.Float32(3698.08),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("02a94bb4-f63c-4969-a9a3-efa77dfb14cd"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4118.2),
                                            Blue: sdk.Float32(3965.06),
                                            Green: sdk.Float32(6754.39),
                                            Red: sdk.Float32(8811.04),
                                        },
                                        PriorityOverride: sdk.String("non"),
                                    },
                                    Description: sdk.String("occaecati"),
                                    DisplayName: sdk.String("enim"),
                                    InsertBeforeChoice: sdk.String("accusamus"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("delectus"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("quidem"),
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("provident"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("nam"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6596.69),
                                            Blue: sdk.Float32(5013.24),
                                            Green: sdk.Float32(5332.06),
                                            Red: sdk.Float32(9560.84),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2305.33),
                                            Blue: sdk.Float32(6439.9),
                                            Green: sdk.Float32(3948.69),
                                            Red: sdk.Float32(4238.55),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6188.09),
                                            Blue: sdk.Float32(6063.93),
                                            Green: sdk.Float32(4748.67),
                                            Red: sdk.Float32(191.93),
                                        },
                                    },
                                    BadgePriority: sdk.String("nihil"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3015.75),
                                            Blue: sdk.Float32(7160.75),
                                            Green: sdk.Float32(6601.74),
                                            Red: sdk.Float32(2879.91),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2900.77),
                                            Blue: sdk.Float32(3834.62),
                                            Green: sdk.Float32(6180.16),
                                            Red: sdk.Float32(7491.7),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4287.69),
                                            Blue: sdk.Float32(8784.53),
                                            Green: sdk.Float32(1354.74),
                                            Red: sdk.Float32(1028.63),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("41959890-afa5-463e-a516-fe4c8b711e5b"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4692.49),
                                            Blue: sdk.Float32(9988.48),
                                            Green: sdk.Float32(8411.4),
                                            Red: sdk.Float32(1494.48),
                                        },
                                        PriorityOverride: sdk.String("saepe"),
                                    },
                                    Description: sdk.String("pariatur"),
                                    DisplayName: sdk.String("accusantium"),
                                    InsertBeforeChoice: sdk.String("consequuntur"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("praesentium"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("natus"),
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: sdk.Int(166847),
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("sunt"),
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2FieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: sdk.Int(779051),
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2FieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldAppliedCapabilities{
                        CanRead: sdk.Bool(false),
                        CanSearch: sdk.Bool(false),
                        CanWrite: sdk.Bool(false),
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("illum"),
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2FieldDateOptionsInput{
                        DateFormatType: shared.GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumShortDate.ToPointer(),
                        MaxValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(807319),
                            Month: sdk.Int(411397),
                            Year: sdk.Int(569101),
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(139972),
                            Month: sdk.Int(407183),
                            Year: sdk.Int(33222),
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("ab"),
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldDisplayHints{
                        Disabled: sdk.Bool(false),
                        HiddenInSearch: sdk.Bool(false),
                        Required: sdk.Bool(false),
                        ShownInApply: sdk.Bool(false),
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2FieldProperties{
                        DisplayName: sdk.String("maiores"),
                        InsertBeforeField: sdk.String("quidem"),
                        Required: sdk.Bool(false),
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("ipsam"),
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSchemaCapabilities{
                        CanDelete: sdk.Bool(false),
                        CanDisable: sdk.Bool(false),
                        CanEnable: sdk.Bool(false),
                        CanUpdate: sdk.Bool(false),
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("autem"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("nam"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(505.88),
                                            Blue: sdk.Float32(8663.83),
                                            Green: sdk.Float32(3654.96),
                                            Red: sdk.Float32(9755.22),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(166.27),
                                            Blue: sdk.Float32(8558.04),
                                            Green: sdk.Float32(2307.42),
                                            Red: sdk.Float32(117.14),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7649.12),
                                            Blue: sdk.Float32(3599.78),
                                            Green: sdk.Float32(9441.24),
                                            Red: sdk.Float32(7299.91),
                                        },
                                    },
                                    BadgePriority: sdk.String("nobis"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1716.29),
                                            Blue: sdk.Float32(3394.04),
                                            Green: sdk.Float32(5210.37),
                                            Red: sdk.Float32(4895.49),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(543.38),
                                            Blue: sdk.Float32(3389.85),
                                            Green: sdk.Float32(1999.96),
                                            Red: sdk.Float32(1794.9),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(185.21),
                                            Blue: sdk.Float32(1709.86),
                                            Green: sdk.Float32(7936.98),
                                            Red: sdk.Float32(4634.51),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("3d5fe9b9-0c28-4909-b3fe-49a8d9cbf486"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2123.9),
                                            Blue: sdk.Float32(2098.43),
                                            Green: sdk.Float32(2224.43),
                                            Red: sdk.Float32(1861.93),
                                        },
                                        PriorityOverride: sdk.String("ipsum"),
                                    },
                                    Description: sdk.String("hic"),
                                    DisplayName: sdk.String("excepturi"),
                                    InsertBeforeChoice: sdk.String("cum"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("voluptate"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("dignissimos"),
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("reiciendis"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("amet"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6805.45),
                                            Blue: sdk.Float32(2543.56),
                                            Green: sdk.Float32(852.95),
                                            Red: sdk.Float32(580.29),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(564.18),
                                            Blue: sdk.Float32(4344.17),
                                            Green: sdk.Float32(4878.38),
                                            Red: sdk.Float32(3117.96),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8810.05),
                                            Blue: sdk.Float32(6963.44),
                                            Green: sdk.Float32(9764.05),
                                            Red: sdk.Float32(3777.52),
                                        },
                                    },
                                    BadgePriority: sdk.String("natus"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1796.03),
                                            Blue: sdk.Float32(5424.99),
                                            Green: sdk.Float32(246.78),
                                            Red: sdk.Float32(8546.14),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(672.49),
                                            Blue: sdk.Float32(7438.35),
                                            Green: sdk.Float32(6793.93),
                                            Red: sdk.Float32(4785.96),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4536.97),
                                            Blue: sdk.Float32(6770.82),
                                            Green: sdk.Float32(5365.79),
                                            Red: sdk.Float32(6070.45),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(6798.8),
                                            Blue: sdk.Float32(9527.92),
                                            Green: sdk.Float32(4561.3),
                                            Red: sdk.Float32(6874.88),
                                        },
                                        PriorityOverride: sdk.String("iusto"),
                                    },
                                    Description: sdk.String("ipsum"),
                                    DisplayName: sdk.String("quisquam"),
                                    InsertBeforeChoice: sdk.String("tenetur"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("amet"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("tempore"),
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: sdk.Int(880298),
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("numquam"),
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2FieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: sdk.Int(313692),
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2FieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldAppliedCapabilities{
                        CanRead: sdk.Bool(false),
                        CanSearch: sdk.Bool(false),
                        CanWrite: sdk.Bool(false),
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("dolorem"),
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2FieldDateOptionsInput{
                        DateFormatType: shared.GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatTypeEnumShortDate.ToPointer(),
                        MaxValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(518201),
                            Month: sdk.Int(471752),
                            Year: sdk.Int(25662),
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: sdk.Int(711584),
                            Month: sdk.Int(207470),
                            Year: sdk.Int(153694),
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("vel"),
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldDisplayHints{
                        Disabled: sdk.Bool(false),
                        HiddenInSearch: sdk.Bool(false),
                        Required: sdk.Bool(false),
                        ShownInApply: sdk.Bool(false),
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                            HideInSearch: sdk.Bool(false),
                            ShowInApply: sdk.Bool(false),
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2FieldProperties{
                        DisplayName: sdk.String("libero"),
                        InsertBeforeField: sdk.String("voluptas"),
                        Required: sdk.Bool(false),
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("deserunt"),
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSchemaCapabilities{
                        CanDelete: sdk.Bool(false),
                        CanDisable: sdk.Bool(false),
                        CanEnable: sdk.Bool(false),
                        CanUpdate: sdk.Bool(false),
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("ipsum"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("incidunt"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1864.58),
                                            Blue: sdk.Float32(5867.84),
                                            Green: sdk.Float32(8075.81),
                                            Red: sdk.Float32(8638.56),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7470.8),
                                            Blue: sdk.Float32(1175.31),
                                            Green: sdk.Float32(6748.48),
                                            Red: sdk.Float32(5173.79),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2768.94),
                                            Blue: sdk.Float32(1320.68),
                                            Green: sdk.Float32(1749.09),
                                            Red: sdk.Float32(7168.6),
                                        },
                                    },
                                    BadgePriority: sdk.String("facilis"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(3960.6),
                                            Blue: sdk.Float32(4631.5),
                                            Green: sdk.Float32(5654.21),
                                            Red: sdk.Float32(8404.29),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(1832.8),
                                            Blue: sdk.Float32(2048.65),
                                            Green: sdk.Float32(1448.47),
                                            Red: sdk.Float32(1649.59),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4880.56),
                                            Blue: sdk.Float32(1248.33),
                                            Green: sdk.Float32(3556.13),
                                            Red: sdk.Float32(7220.81),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("f0cbb1e3-1b8b-490f-b443-a1108e0adcf4"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7034.95),
                                            Blue: sdk.Float32(5864.1),
                                            Green: sdk.Float32(1816.31),
                                            Red: sdk.Float32(639.55),
                                        },
                                        PriorityOverride: sdk.String("laudantium"),
                                    },
                                    Description: sdk.String("odio"),
                                    DisplayName: sdk.String("occaecati"),
                                    InsertBeforeChoice: sdk.String("voluptatibus"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("quisquam"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("vero"),
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: sdk.Bool(false),
                                    CanSearch: sdk.Bool(false),
                                    CanSelect: sdk.Bool(false),
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("omnis"),
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("quis"),
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(2184.03),
                                            Blue: sdk.Float32(9615.71),
                                            Green: sdk.Float32(4551.69),
                                            Red: sdk.Float32(2317.01),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8788.7),
                                            Blue: sdk.Float32(9493.19),
                                            Green: sdk.Float32(4922.68),
                                            Red: sdk.Float32(9413.78),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(7155.61),
                                            Blue: sdk.Float32(7992.03),
                                            Green: sdk.Float32(4861.6),
                                            Red: sdk.Float32(6304.48),
                                        },
                                    },
                                    BadgePriority: sdk.String("facilis"),
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8742.88),
                                            Blue: sdk.Float32(4981.4),
                                            Green: sdk.Float32(2930.2),
                                            Red: sdk.Float32(8445.5),
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(8489.44),
                                            Blue: sdk.Float32(1943.42),
                                            Green: sdk.Float32(6178.77),
                                            Red: sdk.Float32(7733.26),
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(132.36),
                                            Blue: sdk.Float32(9742.59),
                                            Green: sdk.Float32(3472.33),
                                            Red: sdk.Float32(8623.1),
                                        },
                                    },
                                    Disabled: sdk.Bool(false),
                                    HiddenInSearch: sdk.Bool(false),
                                    ShownInApply: sdk.Bool(false),
                                },
                                ID: sdk.String("2cff7c70-a456-426d-8368-13f16d9f5fce"),
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: sdk.Bool(false),
                                        ShowInApply: sdk.Bool(false),
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: sdk.Float32(4113.72),
                                            Blue: sdk.Float32(7740.48),
                                            Green: sdk.Float32(3592.71),
                                            Red: sdk.Float32(3331.45),
                                        },
                                        PriorityOverride: sdk.String("aliquid"),
                                    },
                                    Description: sdk.String("inventore"),
                                    DisplayName: sdk.String("magnam"),
                                    InsertBeforeChoice: sdk.String("ea"),
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("quo"),
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: sdk.Bool(false),
                                    CanDisable: sdk.Bool(false),
                                    CanEnable: sdk.Bool(false),
                                    CanUpdate: sdk.Bool(false),
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: sdk.String("consectetur"),
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: sdk.Int(926213),
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: sdk.String("aspernatur"),
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2FieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: sdk.Int(325310),
                        },
                    },
                },
            },
            LabelType: shared.GoogleAppsDriveLabelsV2LabelLabelTypeEnumLabelTypeUnspecified.ToPointer(),
            LearnMoreURI: sdk.String("a"),
            Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                    HideInSearch: sdk.Bool(false),
                    ShowInApply: sdk.Bool(false),
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2LabelProperties{
                Description: sdk.String("libero"),
                Title: sdk.String("Mr."),
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                Person: sdk.String("aut"),
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                Person: sdk.String("deleniti"),
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2LabelSchemaCapabilities{
                CanDelete: sdk.Bool(false),
                CanDisable: sdk.Bool(false),
                CanEnable: sdk.Bool(false),
                CanUpdate: sdk.Bool(false),
            },
        },
        AccessToken: sdk.String("impedit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("accusamus"),
        Key: sdk.String("inventore"),
        LanguageCode: sdk.String("non"),
        OauthToken: sdk.String("et"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("laborum"),
        UploadProtocol: sdk.String("placeat"),
        UseAdminAccess: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2Label != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Labels](docs/labels/README.md)

* [DrivelabelsLabelsCreate](docs/labels/README.md#drivelabelslabelscreate) - Creates a new Label.
* [DrivelabelsLabelsDelta](docs/labels/README.md#drivelabelslabelsdelta) - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
* [DrivelabelsLabelsDisable](docs/labels/README.md#drivelabelslabelsdisable) - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
* [DrivelabelsLabelsEnable](docs/labels/README.md#drivelabelslabelsenable) - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
* [DrivelabelsLabelsList](docs/labels/README.md#drivelabelslabelslist) - List labels.
* [DrivelabelsLabelsPublish](docs/labels/README.md#drivelabelslabelspublish) - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
* [DrivelabelsLabelsRevisionsLocksList](docs/labels/README.md#drivelabelslabelsrevisionslockslist) - Lists the LabelLocks on a Label.
* [DrivelabelsLabelsRevisionsPermissionsBatchDelete](docs/labels/README.md#drivelabelslabelsrevisionspermissionsbatchdelete) - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsRevisionsPermissionsBatchUpdate](docs/labels/README.md#drivelabelslabelsrevisionspermissionsbatchupdate) - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsRevisionsPermissionsCreate](docs/labels/README.md#drivelabelslabelsrevisionspermissionscreate) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsRevisionsPermissionsDelete](docs/labels/README.md#drivelabelslabelsrevisionspermissionsdelete) - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsRevisionsPermissionsList](docs/labels/README.md#drivelabelslabelsrevisionspermissionslist) - Lists a Label's permissions.
* [DrivelabelsLabelsRevisionsUpdatePermissions](docs/labels/README.md#drivelabelslabelsrevisionsupdatepermissions) - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
* [DrivelabelsLabelsUpdateLabelCopyMode](docs/labels/README.md#drivelabelslabelsupdatelabelcopymode) - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

### [Limits](docs/limits/README.md)

* [DrivelabelsLimitsGetLabel](docs/limits/README.md#drivelabelslimitsgetlabel) - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### [Users](docs/users/README.md)

* [DrivelabelsUsersGetCapabilities](docs/users/README.md#drivelabelsusersgetcapabilities) - Gets the user capabilities.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
