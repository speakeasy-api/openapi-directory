# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
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
            AccessToken: "dolorem",
            Alt: "json",
            Callback: "at",
            Fields: "et",
            Key: "vitae",
            LanguageCode: "corrupti",
            OauthToken: "ut",
            PrettyPrint: false,
            QuotaUser: "sit",
            UploadType: "corporis",
            UploadProtocol: "non",
            UseAdminAccess: true,
        },
        Request: &shared.GoogleAppsDriveLabelsV2betaLabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities{
                CanApply: true,
                CanRead: true,
                CanRemove: true,
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy{
                CopyMode: "ALWAYS_COPY",
            },
            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "officia",
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "quia",
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints{
                Disabled: false,
                HiddenInSearch: true,
                Priority: "aut",
                ShownInApply: false,
            },
            Fields: []shared.GoogleAppsDriveLabelsV2betaFieldInput{
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: true,
                        CanWrite: false,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "odit",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "SHORT_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 6976668614915263925,
                            Month: 2768172330756267761,
                            Year: 1382216312866809937,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 3509369534544191778,
                            Month: 5954847658887122489,
                            Year: 256780084920837380,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "et",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: false,
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
                        DisplayName: "assumenda",
                        InsertBeforeField: "dolor",
                        Required: true,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "ad",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: true,
                        CanDisable: false,
                        CanEnable: true,
                        CanUpdate: false,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: true,
                                    CanSelect: true,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "consequatur",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "sapiente",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 43.099998,
                                            Blue: 74.099998,
                                            Green: 52.200001,
                                            Red: 22.100000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 42.099998,
                                            Blue: 49.200001,
                                            Green: 47.200001,
                                            Red: 2.200000,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 62.200001,
                                            Blue: 41.099998,
                                            Green: 39.099998,
                                            Red: 76.099998,
                                        },
                                    },
                                    BadgePriority: "velit",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 63.099998,
                                            Blue: 74.199997,
                                            Green: 79.099998,
                                            Red: 13.200000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 28.200001,
                                            Blue: 15.200000,
                                            Green: 73.199997,
                                            Red: 94.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 9.200000,
                                            Blue: 75.199997,
                                            Green: 67.099998,
                                            Red: 96.099998,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: true,
                                    ShownInApply: false,
                                },
                                ID: "et",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 97.099998,
                                            Blue: 87.199997,
                                            Green: 96.199997,
                                            Red: 55.200001,
                                        },
                                        PriorityOverride: "rerum",
                                    },
                                    Description: "omnis",
                                    DisplayName: "non",
                                    InsertBeforeChoice: "eaque",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "dicta",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: true,
                                    CanEnable: true,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "quia",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 410411577571775176,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "est",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 1639429500697491833,
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
                        Person: "deleniti",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "DATE_FORMAT_UNSPECIFIED",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 3075270192667150265,
                            Month: 7633785568759869260,
                            Year: 8068484612203427496,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 8763788367249408697,
                            Month: 3402851460701826373,
                            Year: 453486548603645468,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "ea",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: false,
                        HiddenInSearch: true,
                        Required: true,
                        ShownInApply: false,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: true,
                            ShowInApply: true,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "aspernatur",
                        InsertBeforeField: "officiis",
                        Required: true,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "possimus",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: false,
                        CanDisable: true,
                        CanEnable: true,
                        CanUpdate: false,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: true,
                                    CanSearch: true,
                                    CanSelect: true,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "id",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "asperiores",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 54.099998,
                                            Blue: 59.099998,
                                            Green: 76.199997,
                                            Red: 42.200001,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 72.199997,
                                            Blue: 48.200001,
                                            Green: 35.200001,
                                            Red: 98.199997,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 40.099998,
                                            Blue: 26.100000,
                                            Green: 77.199997,
                                            Red: 70.199997,
                                        },
                                    },
                                    BadgePriority: "est",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 99.099998,
                                            Blue: 75.099998,
                                            Green: 32.200001,
                                            Red: 79.199997,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 35.099998,
                                            Blue: 35.200001,
                                            Green: 79.199997,
                                            Red: 69.199997,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 80.199997,
                                            Blue: 75.099998,
                                            Green: 47.099998,
                                            Red: 76.099998,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: true,
                                    ShownInApply: true,
                                },
                                ID: "eius",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 18.100000,
                                            Blue: 57.200001,
                                            Green: 54.099998,
                                            Red: 41.099998,
                                        },
                                        PriorityOverride: "harum",
                                    },
                                    Description: "id",
                                    DisplayName: "iste",
                                    InsertBeforeChoice: "tempore",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "ex",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: true,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "laboriosam",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 5052716206277838629,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "placeat",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 6484544173372429232,
                        },
                    },
                },
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: false,
                        CanWrite: true,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "quas",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "SHORT_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 3860580251742400759,
                            Month: 5573665413929073458,
                            Year: 4004476788825385146,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 3458650668677730175,
                            Month: 4948513660969813682,
                            Year: 1010701554713842575,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "perferendis",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: true,
                        HiddenInSearch: true,
                        Required: true,
                        ShownInApply: false,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: false,
                            ShowInApply: false,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "dicta",
                        InsertBeforeField: "placeat",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "et",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities{
                        CanDelete: false,
                        CanDisable: false,
                        CanEnable: true,
                        CanUpdate: false,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: true,
                                    CanSelect: true,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "tempora",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "ut",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 26.200001,
                                            Blue: 93.199997,
                                            Green: 35.200001,
                                            Red: 38.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 15.100000,
                                            Blue: 88.099998,
                                            Green: 98.099998,
                                            Red: 74.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 43.099998,
                                            Blue: 44.200001,
                                            Green: 97.199997,
                                            Red: 76.199997,
                                        },
                                    },
                                    BadgePriority: "reiciendis",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 54.200001,
                                            Blue: 37.200001,
                                            Green: 39.099998,
                                            Red: 99.199997,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 69.099998,
                                            Blue: 75.199997,
                                            Green: 37.099998,
                                            Red: 66.199997,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 95.099998,
                                            Blue: 8.200000,
                                            Green: 25.200001,
                                            Red: 10.100000,
                                        },
                                    },
                                    Disabled: true,
                                    HiddenInSearch: false,
                                    ShownInApply: false,
                                },
                                ID: "dolorem",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: true,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 0.100000,
                                            Blue: 39.099998,
                                            Green: 99.099998,
                                            Red: 52.200001,
                                        },
                                        PriorityOverride: "omnis",
                                    },
                                    Description: "debitis",
                                    DisplayName: "reprehenderit",
                                    InsertBeforeChoice: "corrupti",
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
                                    Person: "debitis",
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
                                    Person: "quia",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 75.099998,
                                            Blue: 51.200001,
                                            Green: 68.199997,
                                            Red: 5.200000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 68.199997,
                                            Blue: 27.200001,
                                            Green: 12.200000,
                                            Red: 24.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 28.200001,
                                            Blue: 47.200001,
                                            Green: 76.099998,
                                            Red: 57.200001,
                                        },
                                    },
                                    BadgePriority: "voluptatem",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 55.200001,
                                            Blue: 90.199997,
                                            Green: 97.199997,
                                            Red: 15.100000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 48.099998,
                                            Blue: 6.200000,
                                            Green: 73.199997,
                                            Red: 99.199997,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 96.199997,
                                            Blue: 92.099998,
                                            Green: 39.200001,
                                            Red: 59.200001,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: true,
                                },
                                ID: "at",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: true,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 33.099998,
                                            Blue: 72.199997,
                                            Green: 79.099998,
                                            Red: 2.200000,
                                        },
                                        PriorityOverride: "qui",
                                    },
                                    Description: "rerum",
                                    DisplayName: "voluptas",
                                    InsertBeforeChoice: "recusandae",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "ut",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: true,
                                    CanDisable: true,
                                    CanEnable: true,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "iste",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: false,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "sed",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "nobis",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 50.099998,
                                            Blue: 58.200001,
                                            Green: 1.100000,
                                            Red: 85.199997,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 54.200001,
                                            Blue: 48.200001,
                                            Green: 57.099998,
                                            Red: 18.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 78.099998,
                                            Blue: 16.200001,
                                            Green: 4.200000,
                                            Red: 5.200000,
                                        },
                                    },
                                    BadgePriority: "sed",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 34.099998,
                                            Blue: 41.200001,
                                            Green: 44.099998,
                                            Red: 77.199997,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 48.200001,
                                            Blue: 72.199997,
                                            Green: 34.200001,
                                            Red: 96.199997,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 50.099998,
                                            Blue: 91.099998,
                                            Green: 32.200001,
                                            Red: 99.199997,
                                        },
                                    },
                                    Disabled: true,
                                    HiddenInSearch: false,
                                    ShownInApply: true,
                                },
                                ID: "velit",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 72.199997,
                                            Blue: 34.099998,
                                            Green: 50.099998,
                                            Red: 3.100000,
                                        },
                                        PriorityOverride: "qui",
                                    },
                                    Description: "suscipit",
                                    DisplayName: "neque",
                                    InsertBeforeChoice: "cupiditate",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "eius",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: true,
                                    CanDisable: true,
                                    CanEnable: true,
                                    CanUpdate: true,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "laborum",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 5892390926459788196,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "voluptas",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 7517216725397715132,
                        },
                    },
                },
            },
            LabelType: "LABEL_TYPE_UNSPECIFIED",
            LearnMoreURI: "qui",
            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                    HideInSearch: true,
                    ShowInApply: true,
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2betaLabelProperties{
                Description: "est",
                Title: "aut",
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "quos",
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "accusamus",
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities{
                CanDelete: false,
                CanDisable: true,
                CanEnable: true,
                CanUpdate: true,
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### labels

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

### limits

* `DrivelabelsLimitsGetLabel` - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

### users

* `DrivelabelsUsersGetCapabilities` - Gets the user capabilities.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
