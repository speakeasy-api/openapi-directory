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
            AccessToken: "voluptas",
            Alt: "media",
            Callback: "expedita",
            Fields: "consequuntur",
            Key: "dolor",
            LanguageCode: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
            UseAdminAccess: false,
        },
        Request: &shared.GoogleAppsDriveLabelsV2betaLabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities{
                CanApply: true,
                CanRead: true,
                CanRemove: false,
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy{
                CopyMode: "COPY_APPLIABLE",
            },
            Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "dolorem",
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "et",
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2betaLabelDisplayHints{
                Disabled: false,
                HiddenInSearch: true,
                Priority: "vitae",
                ShownInApply: true,
            },
            Fields: []shared.GoogleAppsDriveLabelsV2betaFieldInput{
                shared.GoogleAppsDriveLabelsV2betaFieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: true,
                        CanWrite: false,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "odio",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput{
                        DateFormatType: "LONG_DATE",
                        MaxValue: &shared.GoogleTypeDate{
                            Day: 4035568504096476779,
                            Month: 959367522974354090,
                            Year: 2914295034816259174,
                        },
                        MinValue: &shared.GoogleTypeDate{
                            Day: 1395437218309923052,
                            Month: 6745438398739480977,
                            Year: 2897681629866238117,
                        },
                    },
                    Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "est",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldDisplayHints{
                        Disabled: true,
                        HiddenInSearch: true,
                        Required: true,
                        ShownInApply: false,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                            HideInSearch: true,
                            ShowInApply: false,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2betaFieldProperties{
                        DisplayName: "illo",
                        InsertBeforeField: "sed",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "autem",
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
                                    CanSearch: false,
                                    CanSelect: true,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "modi",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "sint",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 77.099998,
                                            Blue: 56.099998,
                                            Green: 30.200001,
                                            Red: 97.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 94.199997,
                                            Blue: 19.100000,
                                            Green: 69.199997,
                                            Red: 3.100000,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 64.199997,
                                            Blue: 78.199997,
                                            Green: 89.099998,
                                            Red: 63.200001,
                                        },
                                    },
                                    BadgePriority: "qui",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 78.099998,
                                            Blue: 31.100000,
                                            Green: 13.100000,
                                            Red: 26.100000,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 90.099998,
                                            Blue: 92.099998,
                                            Green: 68.099998,
                                            Red: 38.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 20.100000,
                                            Blue: 41.200001,
                                            Green: 89.199997,
                                            Red: 41.099998,
                                        },
                                    },
                                    Disabled: true,
                                    HiddenInSearch: true,
                                    ShownInApply: true,
                                },
                                ID: "ut",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: true,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 26.100000,
                                            Blue: 19.200001,
                                            Green: 59.200001,
                                            Red: 64.099998,
                                        },
                                        PriorityOverride: "a",
                                    },
                                    Description: "soluta",
                                    DisplayName: "aut",
                                    InsertBeforeChoice: "quas",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "consequuntur",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: true,
                                    CanEnable: true,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "doloremque",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: true,
                                    CanSearch: false,
                                    CanSelect: true,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "quisquam",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "explicabo",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 42.099998,
                                            Blue: 15.200000,
                                            Green: 66.099998,
                                            Red: 94.199997,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 97.199997,
                                            Blue: 1.200000,
                                            Green: 40.200001,
                                            Red: 94.199997,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 31.100000,
                                            Blue: 70.099998,
                                            Green: 87.099998,
                                            Red: 50.200001,
                                        },
                                    },
                                    BadgePriority: "deserunt",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 59.099998,
                                            Blue: 68.099998,
                                            Green: 66.099998,
                                            Red: 91.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 13.200000,
                                            Blue: 96.099998,
                                            Green: 5.100000,
                                            Red: 54.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 2.100000,
                                            Blue: 37.200001,
                                            Green: 63.099998,
                                            Red: 27.200001,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: false,
                                    ShownInApply: true,
                                },
                                ID: "excepturi",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: true,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 29.200001,
                                            Blue: 20.100000,
                                            Green: 28.100000,
                                            Red: 95.099998,
                                        },
                                        PriorityOverride: "sed",
                                    },
                                    Description: "et",
                                    DisplayName: "consequuntur",
                                    InsertBeforeChoice: "non",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "cupiditate",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: true,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "corrupti",
                                },
                            },
                            shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: true,
                                    CanSelect: true,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "possimus",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "modi",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 18.200001,
                                            Blue: 33.099998,
                                            Green: 28.100000,
                                            Red: 93.099998,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 20.200001,
                                            Blue: 73.099998,
                                            Green: 45.099998,
                                            Red: 56.099998,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 18.100000,
                                            Blue: 57.099998,
                                            Green: 47.200001,
                                            Red: 59.099998,
                                        },
                                    },
                                    BadgePriority: "ut",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2betaBadgeColors{
                                        BackgroundColor: &shared.GoogleTypeColor{
                                            Alpha: 80.099998,
                                            Blue: 47.099998,
                                            Green: 3.200000,
                                            Red: 58.200001,
                                        },
                                        ForegroundColor: &shared.GoogleTypeColor{
                                            Alpha: 69.199997,
                                            Blue: 66.199997,
                                            Green: 25.200001,
                                            Red: 16.200001,
                                        },
                                        SoloColor: &shared.GoogleTypeColor{
                                            Alpha: 14.100000,
                                            Blue: 78.199997,
                                            Green: 46.099998,
                                            Red: 84.099998,
                                        },
                                    },
                                    Disabled: false,
                                    HiddenInSearch: true,
                                    ShownInApply: true,
                                },
                                ID: "officia",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                                        HideInSearch: true,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2betaBadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 30.100000,
                                            Blue: 43.099998,
                                            Green: 80.099998,
                                            Red: 55.200001,
                                        },
                                        PriorityOverride: "dicta",
                                    },
                                    Description: "rem",
                                    DisplayName: "doloremque",
                                    InsertBeforeChoice: "quae",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "nisi",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: true,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                                    Person: "rerum",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 7434067341455688771,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                        Person: "rem",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2betaFieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2betaFieldListOptions{
                            MaxEntries: 2386043087176739176,
                        },
                    },
                },
            },
            LabelType: "LABEL_TYPE_UNSPECIFIED",
            LearnMoreURI: "reiciendis",
            Lifecycle: &shared.GoogleAppsDriveLabelsV2betaLifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy{
                    HideInSearch: true,
                    ShowInApply: true,
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2betaLabelProperties{
                Description: "porro",
                Title: "nihil",
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "adipisci",
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2betaUserInfo{
                Person: "consequatur",
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities{
                CanDelete: false,
                CanDisable: false,
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