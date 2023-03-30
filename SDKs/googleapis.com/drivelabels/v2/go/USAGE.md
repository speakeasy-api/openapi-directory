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
            AccessToken: "provident",
            Alt: "proto",
            Callback: "quibusdam",
            Fields: "unde",
            Key: "nulla",
            LanguageCode: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
            UseAdminAccess: false,
        },
        Request: &shared.GoogleAppsDriveLabelsV2LabelInput{
            AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2LabelAppliedCapabilities{
                CanApply: false,
                CanRead: false,
                CanRemove: false,
            },
            AppliedLabelPolicy: &shared.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy{
                CopyMode: "DO_NOT_COPY",
            },
            Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                Person: "iure",
            },
            Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                Person: "magnam",
            },
            DisplayHints: &shared.GoogleAppsDriveLabelsV2LabelDisplayHints{
                Disabled: false,
                HiddenInSearch: false,
                Priority: "debitis",
                ShownInApply: false,
            },
            Fields: []shared.GoogleAppsDriveLabelsV2FieldInput{
                shared.GoogleAppsDriveLabelsV2FieldInput{
                    AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldAppliedCapabilities{
                        CanRead: false,
                        CanSearch: false,
                        CanWrite: false,
                    },
                    Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: "delectus",
                    },
                    DateOptions: &shared.GoogleAppsDriveLabelsV2FieldDateOptionsInput{
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
                    Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: "excepturi",
                    },
                    DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldDisplayHints{
                        Disabled: false,
                        HiddenInSearch: false,
                        Required: false,
                        ShownInApply: false,
                    },
                    Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                        DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                            HideInSearch: false,
                            ShowInApply: false,
                        },
                    },
                    Properties: &shared.GoogleAppsDriveLabelsV2FieldProperties{
                        DisplayName: "nisi",
                        InsertBeforeField: "recusandae",
                        Required: false,
                    },
                    Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: "temporibus",
                    },
                    SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSchemaCapabilities{
                        CanDelete: false,
                        CanDisable: false,
                        CanEnable: false,
                        CanUpdate: false,
                    },
                    SelectionOptions: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsInput{
                        Choices: []shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                            shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceInput{
                                AppliedCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities{
                                    CanRead: false,
                                    CanSearch: false,
                                    CanSelect: false,
                                },
                                Creator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: "quis",
                                },
                                Disabler: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: "veritatis",
                                },
                                DisplayHints: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints{
                                    BadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
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
                                    BadgePriority: "quod",
                                    DarkBadgeColors: &shared.GoogleAppsDriveLabelsV2BadgeColors{
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
                                ID: "totam",
                                Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                                    DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                                        HideInSearch: false,
                                        ShowInApply: false,
                                    },
                                },
                                Properties: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties{
                                    BadgeConfig: &shared.GoogleAppsDriveLabelsV2BadgeConfig{
                                        Color: &shared.GoogleTypeColor{
                                            Alpha: 1059.07,
                                            Blue: 4146.62,
                                            Green: 4736,
                                            Red: 2645.55,
                                        },
                                        PriorityOverride: "qui",
                                    },
                                    Description: "impedit",
                                    DisplayName: "cum",
                                    InsertBeforeChoice: "esse",
                                },
                                Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: "ipsum",
                                },
                                SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities{
                                    CanDelete: false,
                                    CanDisable: false,
                                    CanEnable: false,
                                    CanUpdate: false,
                                },
                                Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                                    Person: "excepturi",
                                },
                            },
                        },
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: 135218,
                        },
                    },
                    Updater: &shared.GoogleAppsDriveLabelsV2UserInfo{
                        Person: "perferendis",
                    },
                    UserOptions: &shared.GoogleAppsDriveLabelsV2FieldUserOptions{
                        ListOptions: &shared.GoogleAppsDriveLabelsV2FieldListOptions{
                            MaxEntries: 324141,
                        },
                    },
                },
            },
            LabelType: "SHARED",
            LearnMoreURI: "sed",
            Lifecycle: &shared.GoogleAppsDriveLabelsV2LifecycleInput{
                DisabledPolicy: &shared.GoogleAppsDriveLabelsV2LifecycleDisabledPolicy{
                    HideInSearch: false,
                    ShowInApply: false,
                },
            },
            Properties: &shared.GoogleAppsDriveLabelsV2LabelProperties{
                Description: "iste",
                Title: "Mrs.",
            },
            Publisher: &shared.GoogleAppsDriveLabelsV2UserInfo{
                Person: "natus",
            },
            RevisionCreator: &shared.GoogleAppsDriveLabelsV2UserInfo{
                Person: "laboriosam",
            },
            SchemaCapabilities: &shared.GoogleAppsDriveLabelsV2LabelSchemaCapabilities{
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

    if res.GoogleAppsDriveLabelsV2Label != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->