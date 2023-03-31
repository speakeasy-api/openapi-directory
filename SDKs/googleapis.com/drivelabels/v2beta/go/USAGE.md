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
        DollarXgafv: "2",
        GoogleAppsDriveLabelsV2betaLabelInput: &shared.GoogleAppsDriveLabelsV2betaLabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities{
                CanApply: false,
                CanRead: false,
                CanRemove: false,
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy{
                CopyMode: "ALWAYS_COPY",
            },
            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "distinctio",
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "quibusdam",
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints{
                Disabled: false,
                HiddenInSearch: false,
                Priority: "unde",
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
                        Person: "corrupti",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "SHORT_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 423655,
                            Month: 623564,
                            Year: 645894,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 384382,
                            Month: 437587,
                            Year: 297534,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "debitis",
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
                        DisplayName: "ipsa",
                        InsertBeforeField: "delectus",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "tempora",
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
                                    Person: "molestiae",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "minus",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 8121.69,
                                            Blue: 5288.95,
                                            Green: 4799.77,
                                            Red: 5680.45,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 3927.85,
                                            Blue: 9255.97,
                                            Green: 8360.79,
                                            Red: 710.36,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 3373.96,
                                            Blue: 871.29,
                                            Green: 6481.72,
                                            Red: 202.18,
                                        },
                                    },
                                    BadgePriority: "ipsam",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 8326.2,
                                            Blue: 9571.56,
                                            Green: 7781.57,
                                            Red: 1403.5,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 8700.13,
                                            Blue: 8700.88,
                                            Green: 9786.19,
                                            Red: 4736.08,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 7991.59,
                                            Blue: 8009.11,
                                            Green: 4614.79,
                                            Red: 5204.78,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "porro",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 6788.8,
                                            Blue: 1182.74,
                                            Green: 7206.33,
                                            Red: 6399.21,
                                        },
                                        PriorityOverride: "occaecati",
                                    },
                                    Description: "fugit",
                                    DisplayName: "deleniti",
                                    InsertBeforeChoice: "hic",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "optio",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "totam",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: false,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "beatae",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "commodi",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 4736,
                                            Blue: 2645.55,
                                            Green: 1863.32,
                                            Red: 7742.34,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 7369.18,
                                            Blue: 4561.5,
                                            Green: 2165.5,
                                            Red: 5684.34,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 1352.18,
                                            Blue: 187.89,
                                            Green: 3241.41,
                                            Red: 6176.36,
                                        },
                                    },
                                    BadgePriority: "sed",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 6120.96,
                                            Blue: 2223.21,
                                            Green: 6169.34,
                                            Red: 3864.89,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 9437.49,
                                            Blue: 9025.99,
                                            Green: 6818.2,
                                            Red: 4499.5,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 3595.08,
                                            Blue: 6130.64,
                                            Green: 4370.32,
                                            Red: 9023.49,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "quidem",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 992.8,
                                            Blue: 602.25,
                                            Green: 9698.1,
                                            Red: 6667.67,
                                        },
                                        PriorityOverride: "mollitia",
                                    },
                                    Description: "laborum",
                                    DisplayName: "dolores",
                                    InsertBeforeChoice: "dolorem",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "corporis",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "explicabo",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 750686,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "enim",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 607831,
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: false,
                        CanWrite: false,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "nemo",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "DATE_FORMAT_UNSPECIFIED",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 570197,
                            Month: 38425,
                            Year: 438601,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 634274,
                            Month: 988374,
                            Year: 958950,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "architecto",
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
                        DisplayName: "mollitia",
                        InsertBeforeField: "dolorem",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "culpa",
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
                                    Person: "repellat",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "mollitia",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 5818.5,
                                            Blue: 2532.91,
                                            Green: 4143.69,
                                            Red: 4663.11,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 4746.97,
                                            Blue: 2444.25,
                                            Green: 6235.1,
                                            Red: 1589.69,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 3380.07,
                                            Blue: 1103.75,
                                            Green: 6747.52,
                                            Red: 6563.3,
                                        },
                                    },
                                    BadgePriority: "enim",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 1381.83,
                                            Blue: 7783.46,
                                            Green: 1965.82,
                                            Red: 9495.72,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 3687.25,
                                            Blue: 6625.27,
                                            Green: 8209.94,
                                            Red: 135.71,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 971.01,
                                            Blue: 6228.46,
                                            Green: 8379.45,
                                            Red: 6736.6,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "quasi",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 9719.45,
                                            Blue: 9764.6,
                                            Green: 8781.94,
                                            Red: 4686.51,
                                        },
                                        PriorityOverride: "praesentium",
                                    },
                                    Description: "voluptatibus",
                                    DisplayName: "ipsa",
                                    InsertBeforeChoice: "omnis",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "voluptate",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "cum",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 19987,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "doloremque",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 441711,
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: false,
                        CanWrite: false,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "ut",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "SHORT_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 120196,
                            Month: 359444,
                            Year: 296140,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 480894,
                            Month: 118727,
                            Year: 688661,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "enim",
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
                        DisplayName: "accusamus",
                        InsertBeforeField: "commodi",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "repudiandae",
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
                                    Person: "ipsum",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "quidem",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 5651.89,
                                            Blue: 5666.02,
                                            Green: 8651.03,
                                            Red: 2653.89,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 5089.69,
                                            Blue: 5232.48,
                                            Green: 9167.23,
                                            Red: 939.4,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 9211.58,
                                            Blue: 5759.47,
                                            Green: 831.12,
                                            Red: 9292.97,
                                        },
                                    },
                                    BadgePriority: "incidunt",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 3185.69,
                                            Blue: 93.56,
                                            Green: 6674.11,
                                            Red: 8423.42,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 1317.97,
                                            Blue: 6471.74,
                                            Green: 7163.27,
                                            Red: 8413.86,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 2894.06,
                                            Blue: 2647.3,
                                            Green: 1831.91,
                                            Red: 3978.21,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "cupiditate",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 5528.22,
                                            Blue: 201.07,
                                            Green: 1649.4,
                                            Red: 8289.4,
                                        },
                                        PriorityOverride: "ipsam",
                                    },
                                    Description: "alias",
                                    DisplayName: "fugit",
                                    InsertBeforeChoice: "dolorum",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "excepturi",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "tempora",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 703737,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "tempore",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 288476,
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: false,
                        CanWrite: false,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "delectus",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "LONG_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 248753,
                            Month: 756107,
                            Year: 576157,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 396098,
                            Month: 592042,
                            Year: 896039,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "sint",
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
                        DisplayName: "officia",
                        InsertBeforeField: "dolor",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "debitis",
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
                                    Person: "dolorum",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "in",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 4491.98,
                                            Blue: 8464.09,
                                            Green: 9785.71,
                                            Red: 6994.79,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 1162.02,
                                            Blue: 2974.37,
                                            Green: 7670.24,
                                            Red: 8137.98,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 4118.2,
                                            Blue: 3965.06,
                                            Green: 6754.39,
                                            Red: 8811.04,
                                        },
                                    },
                                    BadgePriority: "non",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 5812.73,
                                            Blue: 3132.18,
                                            Green: 8817.36,
                                            Red: 9654.17,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 6925.32,
                                            Blue: 5884.65,
                                            Green: 7252.55,
                                            Red: 6596.69,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 5013.24,
                                            Blue: 5332.06,
                                            Green: 9560.84,
                                            Red: 2305.33,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "deserunt",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 3948.69,
                                            Blue: 4238.55,
                                            Green: 6188.09,
                                            Red: 6063.93,
                                        },
                                        PriorityOverride: "molestiae",
                                    },
                                    Description: "perferendis",
                                    DisplayName: "nihil",
                                    InsertBeforeChoice: "magnam",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "distinctio",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "id",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: false,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "labore",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "labore",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 3834.62,
                                            Blue: 6180.16,
                                            Green: 7491.7,
                                            Red: 4287.69,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 8784.53,
                                            Blue: 1354.74,
                                            Green: 1028.63,
                                            Red: 2982.82,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 923.73,
                                            Blue: 5699.65,
                                            Green: 3540.47,
                                            Red: 5908.73,
                                        },
                                    },
                                    BadgePriority: "quos",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 5743.25,
                                            Blue: 336.25,
                                            Green: 6532.01,
                                            Red: 9689.62,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 6521.03,
                                            Blue: 3209.97,
                                            Green: 4314.18,
                                            Red: 2212.62,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 8965.47,
                                            Blue: 1412.64,
                                            Green: 3675.62,
                                            Red: 972.6,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "iure",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 9840.43,
                                            Blue: 8919.24,
                                            Green: 2603.41,
                                            Red: 8061.94,
                                        },
                                        PriorityOverride: "deleniti",
                                    },
                                    Description: "facilis",
                                    DisplayName: "in",
                                    InsertBeforeChoice: "architecto",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "architecto",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "repudiandae",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: false,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "ullam",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "expedita",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 4692.49,
                                            Blue: 9988.48,
                                            Green: 8411.4,
                                            Red: 1494.48,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 9046.48,
                                            Blue: 8681.26,
                                            Green: 375.59,
                                            Red: 1624.93,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 5083.15,
                                            Blue: 6155.6,
                                            Green: 1668.47,
                                            Red: 1238.2,
                                        },
                                    },
                                    BadgePriority: "quo",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 8480.09,
                                            Blue: 8649.34,
                                            Green: 8073.19,
                                            Red: 4113.97,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 5691.01,
                                            Blue: 1399.72,
                                            Green: 4071.83,
                                            Red: 332.22,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 691.67,
                                            Blue: 9825.75,
                                            Green: 6974.29,
                                            Red: 3732.91,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "voluptate",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 4200.75,
                                            Blue: 7220.56,
                                            Green: 505.88,
                                            Red: 8663.83,
                                        },
                                        PriorityOverride: "nemo",
                                    },
                                    Description: "voluptatibus",
                                    DisplayName: "perferendis",
                                    InsertBeforeChoice: "fugiat",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "amet",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "aut",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: false,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "cumque",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "corporis",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 9441.24,
                                            Blue: 7299.91,
                                            Green: 7499.99,
                                            Red: 1716.29,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 3394.04,
                                            Blue: 5210.37,
                                            Green: 4895.49,
                                            Red: 543.38,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 3389.85,
                                            Blue: 1999.96,
                                            Green: 1794.9,
                                            Red: 185.21,
                                        },
                                    },
                                    BadgePriority: "dolores",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 7936.98,
                                            Blue: 4634.51,
                                            Green: 2239.24,
                                            Red: 8745.73,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 3453.52,
                                            Blue: 9441.2,
                                            Green: 9280.82,
                                            Red: 6082.53,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 7044.15,
                                            Blue: 5966.56,
                                            Green: 318.38,
                                            Red: 7836.45,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "consequuntur",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 5000.26,
                                            Blue: 6214.79,
                                            Green: 503.7,
                                            Red: 5772.29,
                                        },
                                        PriorityOverride: "rerum",
                                    },
                                    Description: "adipisci",
                                    DisplayName: "asperiores",
                                    InsertBeforeChoice: "earum",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "modi",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "iste",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 679091,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "deleniti",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 864282,
                        },
                    },
                },
            },
            LabelType: "SHARED",
            LearnMoreURI: "nobis",
            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                    HideInSearch: false,
                    ShowInApply: false,
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2betaLabelProperties{
                Description: "libero",
                Title: "Dr.",
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "quaerat",
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "quos",
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities{
                CanDelete: false,
                CanDisable: false,
                CanEnable: false,
                CanUpdate: false,
            },
        },
        AccessToken: "aliquid",
        Alt: "json",
        Callback: "dolorem",
        Fields: "dolor",
        Key: "qui",
        LanguageCode: "ipsum",
        OauthToken: "hic",
        PrettyPrint: false,
        QuotaUser: "excepturi",
        UploadType: "cum",
        UploadProtocol: "voluptate",
        UseAdminAccess: false,
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