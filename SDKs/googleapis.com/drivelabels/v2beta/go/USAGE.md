<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DrivelabelsLabelsCreateRequest{
        QueryParams: operations.DrivelabelsLabelsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "aut",
            Alt: "media",
            Callback: "eum",
            Fields: "officiis",
            Key: "maiores",
            LanguageCode: "fugit",
            OauthToken: "non",
            PrettyPrint: true,
            QuotaUser: "facere",
            UploadType: "dolor",
            UploadProtocol: "molestiae",
            UseAdminAccess: true,
        },
        Request: &shared.GoogleAppsDriveLabelsV2betaLabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities{
                CanApply: false,
                CanRead: true,
                CanRemove: false,
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy{
                CopyMode: "DO_NOT_COPY",
            },
            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "voluptatibus",
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "qui",
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints{
                Disabled: true,
                HiddenInSearch: true,
                Priority: "at",
                ShownInApply: false,
            },
            Fields: []shared.GoogleAppsDriveLabelsV2betaFieldInput{
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: true,
                        CanSearch: true,
                        CanWrite: true,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "excepturi",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "DATE_FORMAT_UNSPECIFIED",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 6439079495925076251,
                            Month: 7048466776760112280,
                            Year: 2882790483343338969,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 3645079965000457788,
                            Month: 6442053866416912030,
                            Year: 6502690809404826948,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "odit",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: true,
                        HiddenInSearch: false,
                        Required: false,
                        ShownInApply: false,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: true,
                            ShowInApply: false,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "omnis",
                        InsertBeforeField: "nemo",
                        Required: true,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "consequatur",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: true,
                        CanDisable: false,
                        CanEnable: false,
                        CanUpdate: false,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: true,
                                    CanSearch: true,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "sed",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "sint",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 60.200001,
                                            Blue: 74.099998,
                                            Green: 85.099998,
                                            Red: 16.100000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 23.100000,
                                            Blue: 77.199997,
                                            Green: 70.099998,
                                            Red: 46.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 46.099998,
                                            Blue: 7.100000,
                                            Green: 14.100000,
                                            Red: 2.100000,
                                        },
                                    },
                                    BadgePriority: "corporis",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 24.200001,
                                            Blue: 77.099998,
                                            Green: 30.100000,
                                            Red: 82.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 78.099998,
                                            Blue: 85.199997,
                                            Green: 48.200001,
                                            Red: 79.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 49.099998,
                                            Blue: 26.100000,
                                            Green: 20.100000,
                                            Red: 56.200001,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: true,
                                    ShownInApply: false,
                                },
                                ID: "sit",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 38.200001,
                                            Blue: 47.200001,
                                            Green: 12.200000,
                                            Red: 17.200001,
                                        },
                                        PriorityOverride: "odio",
                                    },
                                    Description: "porro",
                                    DisplayName: "optio",
                                    InsertBeforeChoice: "nam",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "voluptates",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: true,
                                    CanUpdate: true,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "id",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: true,
                                    CanSearch: false,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "suscipit",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "minus",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 10.100000,
                                            Blue: 4.200000,
                                            Green: 63.200001,
                                            Red: 5.100000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 49.099998,
                                            Blue: 88.199997,
                                            Green: 65.099998,
                                            Red: 25.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 98.199997,
                                            Blue: 28.200001,
                                            Green: 64.199997,
                                            Red: 34.099998,
                                        },
                                    },
                                    BadgePriority: "consequuntur",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 23.200001,
                                            Blue: 51.099998,
                                            Green: 19.200001,
                                            Red: 18.100000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 4.100000,
                                            Blue: 72.199997,
                                            Green: 95.199997,
                                            Red: 22.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 32.099998,
                                            Blue: 24.100000,
                                            Green: 90.199997,
                                            Red: 18.200001,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: true,
                                    ShownInApply: false,
                                },
                                ID: "voluptas",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: true,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 27.100000,
                                            Blue: 66.199997,
                                            Green: 62.200001,
                                            Red: 91.199997,
                                        },
                                        PriorityOverride: "aut",
                                    },
                                    Description: "esse",
                                    DisplayName: "animi",
                                    InsertBeforeChoice: "hic",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "et",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: true,
                                    CanEnable: true,
                                    CanUpdate: true,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "amet",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: true,
                                    CanSearch: true,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "ducimus",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "doloribus",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 92.099998,
                                            Blue: 54.200001,
                                            Green: 88.099998,
                                            Red: 43.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 87.199997,
                                            Blue: 47.099998,
                                            Green: 60.200001,
                                            Red: 63.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 6.100000,
                                            Blue: 71.099998,
                                            Green: 69.099998,
                                            Red: 21.200001,
                                        },
                                    },
                                    BadgePriority: "dolores",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 99.199997,
                                            Blue: 78.199997,
                                            Green: 96.199997,
                                            Red: 33.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 56.200001,
                                            Blue: 82.199997,
                                            Green: 57.099998,
                                            Red: 53.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 21.100000,
                                            Blue: 73.199997,
                                            Green: 30.100000,
                                            Red: 61.200001,
                                        },
                                    },
                                    Disabled: true,
                                    HiddenInSearch: true,
                                    ShownInApply: true,
                                },
                                ID: "ea",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: true,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 78.199997,
                                            Blue: 15.200000,
                                            Green: 56.200001,
                                            Red: 46.200001,
                                        },
                                        PriorityOverride: "tempora",
                                    },
                                    Description: "dolorem",
                                    DisplayName: "occaecati",
                                    InsertBeforeChoice: "quo",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "qui",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: true,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "id",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 5433344406284268436,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "quasi",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 8789300788132299318,
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: true,
                        CanSearch: true,
                        CanWrite: false,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "perferendis",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "LONG_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 8048538296615267604,
                            Month: 2465165877059700210,
                            Year: 1048284054623033027,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 1304094220003444083,
                            Month: 7201974300812696120,
                            Year: 6791479167753620707,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "eveniet",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: false,
                        HiddenInSearch: false,
                        Required: false,
                        ShownInApply: true,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: false,
                            ShowInApply: true,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "corporis",
                        InsertBeforeField: "assumenda",
                        Required: true,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "voluptatem",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: false,
                        CanDisable: true,
                        CanEnable: true,
                        CanUpdate: true,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: true,
                                    CanSearch: true,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "quo",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "iusto",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 63.099998,
                                            Blue: 8.100000,
                                            Green: 44.099998,
                                            Red: 73.199997,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 30.100000,
                                            Blue: 41.099998,
                                            Green: 84.099998,
                                            Red: 24.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 46.200001,
                                            Blue: 47.099998,
                                            Green: 34.099998,
                                            Red: 32.099998,
                                        },
                                    },
                                    BadgePriority: "voluptas",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 87.099998,
                                            Blue: 50.099998,
                                            Green: 46.200001,
                                            Red: 29.100000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 26.200001,
                                            Blue: 99.199997,
                                            Green: 14.200000,
                                            Red: 47.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 88.099998,
                                            Blue: 33.200001,
                                            Green: 78.199997,
                                            Red: 39.200001,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: true,
                                },
                                ID: "esse",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 40.099998,
                                            Blue: 3.200000,
                                            Green: 25.100000,
                                            Red: 73.199997,
                                        },
                                        PriorityOverride: "voluptatem",
                                    },
                                    Description: "et",
                                    DisplayName: "autem",
                                    InsertBeforeChoice: "nisi",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "totam",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: true,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: true,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "esse",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: true,
                                    CanSearch: true,
                                    CanSelect: true,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "consequuntur",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "autem",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 77.199997,
                                            Blue: 15.200000,
                                            Green: 6.100000,
                                            Red: 13.200000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 34.200001,
                                            Blue: 19.200001,
                                            Green: 23.100000,
                                            Red: 42.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 38.099998,
                                            Blue: 53.099998,
                                            Green: 63.099998,
                                            Red: 42.200001,
                                        },
                                    },
                                    BadgePriority: "voluptas",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 65.099998,
                                            Blue: 13.200000,
                                            Green: 22.100000,
                                            Red: 63.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 98.099998,
                                            Blue: 50.099998,
                                            Green: 38.099998,
                                            Red: 87.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 99.199997,
                                            Blue: 32.099998,
                                            Green: 36.200001,
                                            Red: 5.100000,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "iste",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: true,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 44.200001,
                                            Blue: 4.200000,
                                            Green: 22.100000,
                                            Red: 99.099998,
                                        },
                                        PriorityOverride: "eos",
                                    },
                                    Description: "minima",
                                    DisplayName: "ea",
                                    InsertBeforeChoice: "qui",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "et",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: true,
                                    CanEnable: false,
                                    CanUpdate: true,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "ab",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 6526762567851218100,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "alias",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 7827146174146460317,
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: true,
                        CanSearch: false,
                        CanWrite: true,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "dolorem",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "SHORT_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 1785063268340984649,
                            Month: 3996978356313252081,
                            Year: 397404091833808674,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 5668328931256624736,
                            Month: 2795100407013892859,
                            Year: 1393904701556420562,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "animi",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: true,
                        HiddenInSearch: true,
                        Required: false,
                        ShownInApply: true,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: true,
                            ShowInApply: false,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "iure",
                        InsertBeforeField: "ad",
                        Required: true,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "optio",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: true,
                        CanDisable: true,
                        CanEnable: true,
                        CanUpdate: true,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: true,
                                    CanSearch: true,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "laboriosam",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "alias",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 18.100000,
                                            Blue: 20.100000,
                                            Green: 31.100000,
                                            Red: 92.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 59.099998,
                                            Blue: 62.200001,
                                            Green: 27.100000,
                                            Red: 50.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 52.200001,
                                            Blue: 59.200001,
                                            Green: 71.099998,
                                            Red: 89.199997,
                                        },
                                    },
                                    BadgePriority: "rem",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 93.099998,
                                            Blue: 98.099998,
                                            Green: 60.099998,
                                            Red: 9.100000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 41.099998,
                                            Blue: 59.200001,
                                            Green: 44.200001,
                                            Red: 59.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 95.199997,
                                            Blue: 24.200001,
                                            Green: 30.200001,
                                            Red: 17.200001,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: true,
                                    ShownInApply: false,
                                },
                                ID: "itaque",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: true,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 14.100000,
                                            Blue: 86.099998,
                                            Green: 93.099998,
                                            Red: 47.200001,
                                        },
                                        PriorityOverride: "occaecati",
                                    },
                                    Description: "error",
                                    DisplayName: "aliquam",
                                    InsertBeforeChoice: "voluptas",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "vero",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: true,
                                    CanDisable: false,
                                    CanEnable: true,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "quo",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 1189282035378733369,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "quis",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 8679318338485089269,
                        },
                    },
                },
            },
            LabelType: "LABEL_TYPE_UNSPECIFIED",
            LearnMoreURI: "harum",
            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                    HideInSearch: true,
                    ShowInApply: false,
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2betaLabelProperties{
                Description: "tenetur",
                Title: "et",
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "facilis",
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "architecto",
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities{
                CanDelete: true,
                CanDisable: false,
                CanEnable: true,
                CanUpdate: false,
            },
        },
    }
    
    res, err := s.Labels.DrivelabelsLabelsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2betaLabel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->