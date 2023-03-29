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