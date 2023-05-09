# Projects

### Available Operations

* [JobsProjectsTenantsClientEventsCreate](#jobsprojectstenantsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [JobsProjectsTenantsCompaniesCreate](#jobsprojectstenantscompaniescreate) - Creates a new company entity.
* [JobsProjectsTenantsCompaniesList](#jobsprojectstenantscompanieslist) - Lists all companies associated with the project.
* [JobsProjectsTenantsCompleteQuery](#jobsprojectstenantscompletequery) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [JobsProjectsTenantsCreate](#jobsprojectstenantscreate) - Creates a new tenant entity.
* [JobsProjectsTenantsJobsBatchCreate](#jobsprojectstenantsjobsbatchcreate) - Begins executing a batch create jobs operation.
* [JobsProjectsTenantsJobsBatchDelete](#jobsprojectstenantsjobsbatchdelete) - Begins executing a batch delete jobs operation.
* [JobsProjectsTenantsJobsBatchUpdate](#jobsprojectstenantsjobsbatchupdate) - Begins executing a batch update jobs operation.
* [JobsProjectsTenantsJobsCreate](#jobsprojectstenantsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsTenantsJobsDelete](#jobsprojectstenantsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsTenantsJobsGet](#jobsprojectstenantsjobsget) - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* [JobsProjectsTenantsJobsList](#jobsprojectstenantsjobslist) - Lists jobs by filter.
* [JobsProjectsTenantsJobsPatch](#jobsprojectstenantsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsTenantsJobsSearch](#jobsprojectstenantsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [JobsProjectsTenantsJobsSearchForAlert](#jobsprojectstenantsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* [JobsProjectsTenantsList](#jobsprojectstenantslist) - Lists all tenants associated with the project.

## JobsProjectsTenantsClientEventsCreate

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.

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
    res, err := s.Projects.JobsProjectsTenantsClientEventsCreate(ctx, operations.JobsProjectsTenantsClientEventsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        ClientEvent: &shared.ClientEvent{
            CreateTime: sdk.String("placeat"),
            EventID: sdk.String("voluptatum"),
            EventNotes: sdk.String("iusto"),
            JobEvent: &shared.JobEvent{
                Jobs: []string{
                    "nisi",
                    "recusandae",
                    "temporibus",
                },
                Type: shared.JobEventTypeEnumImpression.ToPointer(),
            },
            RequestID: sdk.String("quis"),
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("sapiente"),
        Parent: "quo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odit"),
        UploadType: sdk.String("at"),
        UploadProtocol: sdk.String("at"),
    }, operations.JobsProjectsTenantsClientEventsCreateSecurity{
        Option1: &operations.JobsProjectsTenantsClientEventsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientEvent != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsCompaniesCreate

Creates a new company entity.

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
    res, err := s.Projects.JobsProjectsTenantsCompaniesCreate(ctx, operations.JobsProjectsTenantsCompaniesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CompanyInput: &shared.CompanyInput{
            CareerSiteURI: sdk.String("molestiae"),
            DerivedInfo: &shared.CompanyDerivedInfo{
                HeadquartersLocation: &shared.Location{
                    LatLng: &shared.LatLng{
                        Latitude: sdk.Float64(7991.59),
                        Longitude: sdk.Float64(8009.11),
                    },
                    LocationType: shared.LocationLocationTypeEnumPostalCode.ToPointer(),
                    PostalAddress: &shared.PostalAddress{
                        AddressLines: []string{
                            "porro",
                            "dolorum",
                            "dicta",
                        },
                        AdministrativeArea: sdk.String("nam"),
                        LanguageCode: sdk.String("officia"),
                        Locality: sdk.String("occaecati"),
                        Organization: sdk.String("fugit"),
                        PostalCode: sdk.String("97514-4217"),
                        Recipients: []string{
                            "esse",
                            "ipsum",
                            "excepturi",
                        },
                        RegionCode: sdk.String("aspernatur"),
                        Revision: sdk.Int(18789),
                        SortingCode: sdk.String("ad"),
                        Sublocality: sdk.String("natus"),
                    },
                    RadiusMiles: sdk.Float64(1496.75),
                },
            },
            DisplayName: sdk.String("iste"),
            EeoText: sdk.String("dolor"),
            ExternalID: sdk.String("natus"),
            HeadquartersAddress: sdk.String("laboriosam"),
            HiringAgency: sdk.Bool(false),
            ImageURI: sdk.String("hic"),
            KeywordSearchableJobCustomAttributes: []string{
                "fuga",
                "in",
                "corporis",
                "iste",
            },
            Name: sdk.String("Mr. Kerry Predovic"),
            Size: shared.CompanySizeEnumBig.ToPointer(),
            WebsiteURI: sdk.String("mollitia"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("explicabo"),
        OauthToken: sdk.String("nobis"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("omnis"),
        UploadType: sdk.String("nemo"),
        UploadProtocol: sdk.String("minima"),
    }, operations.JobsProjectsTenantsCompaniesCreateSecurity{
        Option1: &operations.JobsProjectsTenantsCompaniesCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Company != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsCompaniesList

Lists all companies associated with the project.

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
    res, err := s.Projects.JobsProjectsTenantsCompaniesList(ctx, operations.JobsProjectsTenantsCompaniesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("doloribus"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("architecto"),
        PageSize: sdk.Int64(652790),
        PageToken: sdk.String("dolorem"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        RequireOpenJobs: sdk.Bool(false),
        UploadType: sdk.String("repellat"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.JobsProjectsTenantsCompaniesListSecurity{
        Option1: &operations.JobsProjectsTenantsCompaniesListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCompaniesResponse != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsCompleteQuery

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

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
    res, err := s.Projects.JobsProjectsTenantsCompleteQuery(ctx, operations.JobsProjectsTenantsCompleteQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quam"),
        Company: sdk.String("Frami - Mueller"),
        Fields: sdk.String("quia"),
        Key: sdk.String("quis"),
        LanguageCodes: []string{
            "laborum",
        },
        OauthToken: sdk.String("animi"),
        PageSize: sdk.Int64(317202),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("odit"),
        QuotaUser: sdk.String("quo"),
        Scope: operations.JobsProjectsTenantsCompleteQueryScopeEnumCompletionScopeUnspecified.ToPointer(),
        Tenant: "tenetur",
        Type: operations.JobsProjectsTenantsCompleteQueryTypeEnumJobTitle.ToPointer(),
        UploadType: sdk.String("id"),
        UploadProtocol: sdk.String("possimus"),
    }, operations.JobsProjectsTenantsCompleteQuerySecurity{
        Option1: &operations.JobsProjectsTenantsCompleteQuerySecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteQueryResponse != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsCreate

Creates a new tenant entity.

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
    res, err := s.Projects.JobsProjectsTenantsCreate(ctx, operations.JobsProjectsTenantsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        Tenant: &shared.Tenant{
            ExternalID: sdk.String("quasi"),
            Name: sdk.String("Dr. Jake Pacocha"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("omnis"),
        Parent: "voluptate",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("doloremque"),
    }, operations.JobsProjectsTenantsCreateSecurity{
        Option1: &operations.JobsProjectsTenantsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tenant != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsBatchCreate

Begins executing a batch create jobs operation.

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
    res, err := s.Projects.JobsProjectsTenantsJobsBatchCreate(ctx, operations.JobsProjectsTenantsJobsBatchCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchCreateJobsRequestInput: &shared.BatchCreateJobsRequestInput{
            Jobs: []shared.JobInput{
                shared.JobInput{
                    Addresses: []string{
                        "dicta",
                        "corporis",
                        "dolore",
                        "iusto",
                    },
                    ApplicationInfo: &shared.ApplicationInfo{
                        Emails: []string{
                            "harum",
                        },
                        Instruction: sdk.String("enim"),
                        Uris: []string{
                            "commodi",
                            "repudiandae",
                            "quae",
                            "ipsum",
                        },
                    },
                    Company: sdk.String("Mann, Mante and Streich"),
                    CompensationInfo: &shared.CompensationInfo{
                        AnnualizedBaseCompensationRange: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("modi"),
                                Nanos: sdk.Int(508969),
                                Units: sdk.String("rem"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("voluptates"),
                                Nanos: sdk.Int(93940),
                                Units: sdk.String("repudiandae"),
                            },
                        },
                        AnnualizedTotalCompensationRange: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("sint"),
                                Nanos: sdk.Int(83112),
                                Units: sdk.String("itaque"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("incidunt"),
                                Nanos: sdk.Int(318569),
                                Units: sdk.String("consequatur"),
                            },
                        },
                        Entries: []shared.CompensationEntry{
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("quibusdam"),
                                    Nanos: sdk.Int(131797),
                                    Units: sdk.String("deserunt"),
                                },
                                Description: sdk.String("distinctio"),
                                ExpectedUnitsPerYear: sdk.Float64(8413.86),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("labore"),
                                        Nanos: sdk.Int(264730),
                                        Units: sdk.String("qui"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("aliquid"),
                                        Nanos: sdk.Int(586513),
                                        Units: sdk.String("quos"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumCompensationTypeUnspecified.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumHourly.ToPointer(),
                            },
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("assumenda"),
                                    Nanos: sdk.Int(369808),
                                    Units: sdk.String("alias"),
                                },
                                Description: sdk.String("fugit"),
                                ExpectedUnitsPerYear: sdk.Float64(6778.17),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("excepturi"),
                                        Nanos: sdk.Int(270008),
                                        Units: sdk.String("facilis"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("tempore"),
                                        Nanos: sdk.Int(288476),
                                        Units: sdk.String("delectus"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumSigningBonus.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumHourly.ToPointer(),
                            },
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("eligendi"),
                                    Nanos: sdk.Int(576157),
                                    Units: sdk.String("aliquid"),
                                },
                                Description: sdk.String("provident"),
                                ExpectedUnitsPerYear: sdk.Float64(8960.39),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("sint"),
                                        Nanos: sdk.Int(638921),
                                        Units: sdk.String("dolor"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("debitis"),
                                        Nanos: sdk.Int(952749),
                                        Units: sdk.String("dolorum"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumEquity.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumWeekly.ToPointer(),
                            },
                        },
                    },
                    CustomAttributes: map[string]shared.CustomAttribute{
                        "maiores": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "dicta",
                                "magnam",
                                "cumque",
                            },
                            StringValues: []string{
                                "ea",
                                "aliquid",
                                "laborum",
                                "accusamus",
                            },
                        },
                        "non": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "enim",
                                "accusamus",
                                "delectus",
                            },
                            StringValues: []string{
                                "provident",
                                "nam",
                                "id",
                            },
                        },
                        "blanditiis": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "sapiente",
                                "amet",
                                "deserunt",
                            },
                            StringValues: []string{
                                "vel",
                                "natus",
                            },
                        },
                        "omnis": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "perferendis",
                                "nihil",
                            },
                            StringValues: []string{
                                "distinctio",
                                "id",
                            },
                        },
                    },
                    DegreeTypes: []shared.JobDegreeTypesEnum{
                        shared.JobDegreeTypesEnumLowerSecondaryEducation,
                        shared.JobDegreeTypesEnumUpperSecondaryEducation,
                    },
                    Department: sdk.String("natus"),
                    DerivedInfo: &shared.JobDerivedInfo{
                        JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                            shared.JobDerivedInfoJobCategoriesEnumFarmingAndOutdoors,
                            shared.JobDerivedInfoJobCategoriesEnumScienceAndEngineering,
                            shared.JobDerivedInfoJobCategoriesEnumAnimalCare,
                        },
                        Locations: []shared.Location{
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(2982.82),
                                    Longitude: sdk.Float64(923.73),
                                },
                                LocationType: shared.LocationLocationTypeEnumSubLocality.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "provident",
                                        "quos",
                                    },
                                    AdministrativeArea: sdk.String("sint"),
                                    LanguageCode: sdk.String("accusantium"),
                                    Locality: sdk.String("mollitia"),
                                    Organization: sdk.String("reiciendis"),
                                    PostalCode: sdk.String("34281-3049"),
                                    Recipients: []string{
                                        "eius",
                                        "maxime",
                                        "deleniti",
                                        "facilis",
                                    },
                                    RegionCode: sdk.String("in"),
                                    Revision: sdk.Int(100226),
                                    SortingCode: sdk.String("architecto"),
                                    Sublocality: sdk.String("repudiandae"),
                                },
                                RadiusMiles: sdk.Float64(3523.12),
                            },
                        },
                    },
                    Description: sdk.String("expedita"),
                    EmploymentTypes: []shared.JobEmploymentTypesEnum{
                        shared.JobEmploymentTypesEnumOtherEmploymentType,
                        shared.JobEmploymentTypesEnumFlyInFlyOut,
                    },
                    Incentives: sdk.String("sed"),
                    JobBenefits: []shared.JobJobBenefitsEnum{
                        shared.JobJobBenefitsEnumVacation,
                        shared.JobJobBenefitsEnumJobBenefitUnspecified,
                        shared.JobJobBenefitsEnumChildCare,
                        shared.JobJobBenefitsEnumLifeInsurance,
                    },
                    JobEndTime: sdk.String("natus"),
                    JobLevel: shared.JobJobLevelEnumEntryLevel.ToPointer(),
                    JobStartTime: sdk.String("sunt"),
                    LanguageCode: sdk.String("quo"),
                    Name: sdk.String("Ervin Schoen"),
                    PostingExpireTime: sdk.String("odit"),
                    PostingPublishTime: sdk.String("ea"),
                    PostingRegion: shared.JobPostingRegionEnumPostingRegionUnspecified.ToPointer(),
                    ProcessingOptions: &shared.ProcessingOptions{
                        DisableStreetAddressResolution: sdk.Bool(false),
                        HTMLSanitization: shared.ProcessingOptionsHTMLSanitizationEnumHTMLSanitizationUnspecified.ToPointer(),
                    },
                    PromotionValue: sdk.Int(982575),
                    Qualifications: sdk.String("quidem"),
                    RequisitionID: sdk.String("ipsam"),
                    Responsibilities: sdk.String("voluptate"),
                    Title: sdk.String("Ms."),
                    Visibility: shared.JobVisibilityEnumSharedWithGoogle.ToPointer(),
                },
                shared.JobInput{
                    Addresses: []string{
                        "pariatur",
                    },
                    ApplicationInfo: &shared.ApplicationInfo{
                        Emails: []string{
                            "voluptatibus",
                            "perferendis",
                        },
                        Instruction: sdk.String("fugiat"),
                        Uris: []string{
                            "aut",
                        },
                    },
                    Company: sdk.String("Hessel, Welch and Renner"),
                    CompensationInfo: &shared.CompensationInfo{
                        AnnualizedBaseCompensationRange: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("nobis"),
                                Nanos: sdk.Int(171629),
                                Units: sdk.String("quis"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("totam"),
                                Nanos: sdk.Int(489549),
                                Units: sdk.String("eaque"),
                            },
                        },
                        AnnualizedTotalCompensationRange: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("quis"),
                                Nanos: sdk.Int(199996),
                                Units: sdk.String("eos"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("perferendis"),
                                Nanos: sdk.Int(170986),
                                Units: sdk.String("minus"),
                            },
                        },
                        Entries: []shared.CompensationEntry{
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("dolor"),
                                    Nanos: sdk.Int(874573),
                                    Units: sdk.String("nostrum"),
                                },
                                Description: sdk.String("hic"),
                                ExpectedUnitsPerYear: sdk.Float64(9280.82),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("omnis"),
                                        Nanos: sdk.Int(704415),
                                        Units: sdk.String("perspiciatis"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("voluptatem"),
                                        Nanos: sdk.Int(783645),
                                        Units: sdk.String("consequuntur"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumEquity.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumMonthly.ToPointer(),
                            },
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("eaque"),
                                    Nanos: sdk.Int(577229),
                                    Units: sdk.String("rerum"),
                                },
                                Description: sdk.String("adipisci"),
                                ExpectedUnitsPerYear: sdk.Float64(9923.97),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("earum"),
                                        Nanos: sdk.Int(267262),
                                        Units: sdk.String("iste"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("dolorum"),
                                        Nanos: sdk.Int(535633),
                                        Units: sdk.String("pariatur"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumProfitSharing.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumOneTime.ToPointer(),
                            },
                        },
                    },
                    CustomAttributes: map[string]shared.CustomAttribute{
                        "delectus": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "quos",
                                "aliquid",
                            },
                            StringValues: []string{
                                "dolorem",
                            },
                        },
                        "dolor": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "ipsum",
                            },
                            StringValues: []string{
                                "excepturi",
                                "cum",
                                "voluptate",
                                "dignissimos",
                            },
                        },
                        "reiciendis": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "dolorum",
                            },
                            StringValues: []string{
                                "veritatis",
                                "ipsa",
                            },
                        },
                    },
                    DegreeTypes: []shared.JobDegreeTypesEnum{
                        shared.JobDegreeTypesEnumUpperSecondaryEducation,
                    },
                    Department: sdk.String("odio"),
                    DerivedInfo: &shared.JobDerivedInfo{
                        JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                            shared.JobDerivedInfoJobCategoriesEnumScienceAndEngineering,
                            shared.JobDerivedInfoJobCategoriesEnumOilGasAndMining,
                        },
                        Locations: []shared.Location{
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(3777.52),
                                    Longitude: sdk.Float64(6176.58),
                                },
                                LocationType: shared.LocationLocationTypeEnumCountry.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "sit",
                                        "fugiat",
                                        "ab",
                                    },
                                    AdministrativeArea: sdk.String("soluta"),
                                    LanguageCode: sdk.String("dolorum"),
                                    Locality: sdk.String("iusto"),
                                    Organization: sdk.String("voluptate"),
                                    PostalCode: sdk.String("56879-4246"),
                                    Recipients: []string{
                                        "eius",
                                        "aspernatur",
                                        "perferendis",
                                        "amet",
                                    },
                                    RegionCode: sdk.String("optio"),
                                    Revision: sdk.Int(881586),
                                    SortingCode: sdk.String("ad"),
                                    Sublocality: sdk.String("saepe"),
                                },
                                RadiusMiles: sdk.Float64(3834.64),
                            },
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(6457.85),
                                    Longitude: sdk.Float64(5883.17),
                                },
                                LocationType: shared.LocationLocationTypeEnumSubAdministrativeArea.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "totam",
                                        "similique",
                                        "alias",
                                        "at",
                                    },
                                    AdministrativeArea: sdk.String("quaerat"),
                                    LanguageCode: sdk.String("tempora"),
                                    Locality: sdk.String("vel"),
                                    Organization: sdk.String("quod"),
                                    PostalCode: sdk.String("16946-4279"),
                                    Recipients: []string{
                                        "tempore",
                                    },
                                    RegionCode: sdk.String("accusamus"),
                                    Revision: sdk.Int(253941),
                                    SortingCode: sdk.String("enim"),
                                    Sublocality: sdk.String("dolorem"),
                                },
                                RadiusMiles: sdk.Float64(9574.51),
                            },
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(5182.01),
                                    Longitude: sdk.Float64(4717.52),
                                },
                                LocationType: shared.LocationLocationTypeEnumLocationTypeUnspecified.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "neque",
                                        "sed",
                                        "vel",
                                    },
                                    AdministrativeArea: sdk.String("libero"),
                                    LanguageCode: sdk.String("voluptas"),
                                    Locality: sdk.String("deserunt"),
                                    Organization: sdk.String("quam"),
                                    PostalCode: sdk.String("21588"),
                                    Recipients: []string{
                                        "dicta",
                                        "laborum",
                                        "totam",
                                    },
                                    RegionCode: sdk.String("incidunt"),
                                    Revision: sdk.Int(132068),
                                    SortingCode: sdk.String("dolores"),
                                    Sublocality: sdk.String("distinctio"),
                                },
                                RadiusMiles: sdk.Float64(7044.74),
                            },
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(3960.6),
                                    Longitude: sdk.Float64(4631.5),
                                },
                                LocationType: shared.LocationLocationTypeEnumSubLocality.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "qui",
                                        "neque",
                                        "fugit",
                                        "magni",
                                    },
                                    AdministrativeArea: sdk.String("odio"),
                                    LanguageCode: sdk.String("sunt"),
                                    Locality: sdk.String("ullam"),
                                    Organization: sdk.String("nam"),
                                    PostalCode: sdk.String("07770-9207"),
                                    Recipients: []string{
                                        "tempore",
                                        "cupiditate",
                                        "aperiam",
                                    },
                                    RegionCode: sdk.String("delectus"),
                                    Revision: sdk.Int(209157),
                                    SortingCode: sdk.String("dolore"),
                                    Sublocality: sdk.String("labore"),
                                },
                                RadiusMiles: sdk.Float64(2408.29),
                            },
                        },
                    },
                    Description: sdk.String("dolorum"),
                    EmploymentTypes: []shared.JobEmploymentTypesEnum{
                        shared.JobEmploymentTypesEnumEmploymentTypeUnspecified,
                    },
                    Incentives: sdk.String("aut"),
                    JobBenefits: []shared.JobJobBenefitsEnum{
                        shared.JobJobBenefitsEnumVision,
                        shared.JobJobBenefitsEnumJobBenefitUnspecified,
                        shared.JobJobBenefitsEnumRetirementPlan,
                    },
                    JobEndTime: sdk.String("repellendus"),
                    JobLevel: shared.JobJobLevelEnumDirector.ToPointer(),
                    JobStartTime: sdk.String("doloribus"),
                    LanguageCode: sdk.String("ut"),
                    Name: sdk.String("Ms. Terrance Davis"),
                    PostingExpireTime: sdk.String("occaecati"),
                    PostingPublishTime: sdk.String("voluptatibus"),
                    PostingRegion: shared.JobPostingRegionEnumTelecommute.ToPointer(),
                    ProcessingOptions: &shared.ProcessingOptions{
                        DisableStreetAddressResolution: sdk.Bool(false),
                        HTMLSanitization: shared.ProcessingOptionsHTMLSanitizationEnumSimpleFormattingOnly.ToPointer(),
                    },
                    PromotionValue: sdk.Int(606476),
                    Qualifications: sdk.String("quis"),
                    RequisitionID: sdk.String("ipsum"),
                    Responsibilities: sdk.String("delectus"),
                    Title: sdk.String("Ms."),
                    Visibility: shared.JobVisibilityEnumVisibilityUnspecified.ToPointer(),
                },
            },
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("hic"),
        Key: sdk.String("distinctio"),
        OauthToken: sdk.String("quod"),
        Parent: "odio",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("similique"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("vero"),
    }, operations.JobsProjectsTenantsJobsBatchCreateSecurity{
        Option1: &operations.JobsProjectsTenantsJobsBatchCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsBatchDelete

Begins executing a batch delete jobs operation.

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
    res, err := s.Projects.JobsProjectsTenantsJobsBatchDelete(ctx, operations.JobsProjectsTenantsJobsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchDeleteJobsRequest: &shared.BatchDeleteJobsRequest{
            Names: []string{
                "quibusdam",
                "illum",
            },
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("aut"),
        Key: sdk.String("voluptatibus"),
        OauthToken: sdk.String("exercitationem"),
        Parent: "nulla",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.JobsProjectsTenantsJobsBatchDeleteSecurity{
        Option1: &operations.JobsProjectsTenantsJobsBatchDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsBatchUpdate

Begins executing a batch update jobs operation.

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
    res, err := s.Projects.JobsProjectsTenantsJobsBatchUpdate(ctx, operations.JobsProjectsTenantsJobsBatchUpdateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchUpdateJobsRequestInput: &shared.BatchUpdateJobsRequestInput{
            Jobs: []shared.JobInput{
                shared.JobInput{
                    Addresses: []string{
                        "ducimus",
                        "alias",
                        "officia",
                        "tempora",
                    },
                    ApplicationInfo: &shared.ApplicationInfo{
                        Emails: []string{
                            "ea",
                            "aspernatur",
                        },
                        Instruction: sdk.String("vel"),
                        Uris: []string{
                            "magnam",
                            "ratione",
                            "ex",
                            "laudantium",
                        },
                    },
                    Company: sdk.String("Fahey Group"),
                    CompensationInfo: &shared.CompensationInfo{
                        AnnualizedBaseCompensationRange: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("quasi"),
                                Nanos: sdk.Int(406120),
                                Units: sdk.String("nulla"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("excepturi"),
                                Nanos: sdk.Int(972920),
                                Units: sdk.String("nostrum"),
                            },
                        },
                        AnnualizedTotalCompensationRange: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("sapiente"),
                                Nanos: sdk.Int(788873),
                                Units: sdk.String("saepe"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("ea"),
                                Nanos: sdk.Int(774048),
                                Units: sdk.String("corporis"),
                            },
                        },
                        Entries: []shared.CompensationEntry{
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("aliquid"),
                                    Nanos: sdk.Int(81101),
                                    Units: sdk.String("magnam"),
                                },
                                Description: sdk.String("ea"),
                                ExpectedUnitsPerYear: sdk.Float64(7752.2),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("consectetur"),
                                        Nanos: sdk.Int(926213),
                                        Units: sdk.String("aspernatur"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("minima"),
                                        Nanos: sdk.Int(53427),
                                        Units: sdk.String("a"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumCommissions.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumCompensationUnitUnspecified.ToPointer(),
                            },
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("aut"),
                                    Nanos: sdk.Int(533466),
                                    Units: sdk.String("impedit"),
                                },
                                Description: sdk.String("aliquam"),
                                ExpectedUnitsPerYear: sdk.Float64(1469.46),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("accusamus"),
                                        Nanos: sdk.Int(79522),
                                        Units: sdk.String("non"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("et"),
                                        Nanos: sdk.Int(677412),
                                        Units: sdk.String("laborum"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumTips.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumHourly.ToPointer(),
                            },
                        },
                    },
                    CustomAttributes: map[string]shared.CustomAttribute{
                        "autem": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "quas",
                                "assumenda",
                                "nulla",
                                "voluptas",
                            },
                            StringValues: []string{
                                "quasi",
                                "tempora",
                                "numquam",
                            },
                        },
                        "explicabo": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "ipsa",
                                "molestiae",
                                "magnam",
                            },
                            StringValues: []string{
                                "eius",
                                "esse",
                            },
                        },
                    },
                    DegreeTypes: []shared.JobDegreeTypesEnum{
                        shared.JobDegreeTypesEnumAdultRemedialEducation,
                        shared.JobDegreeTypesEnumBachelorsOrEquivalent,
                    },
                    Department: sdk.String("reprehenderit"),
                    DerivedInfo: &shared.JobDerivedInfo{
                        JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                            shared.JobDerivedInfoJobCategoriesEnumSalesAndRetail,
                            shared.JobDerivedInfoJobCategoriesEnumComputerAndIt,
                            shared.JobDerivedInfoJobCategoriesEnumFarmingAndOutdoors,
                        },
                        Locations: []shared.Location{
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(8268.71),
                                    Longitude: sdk.Float64(1811.51),
                                },
                                LocationType: shared.LocationLocationTypeEnumPostalCode.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "veritatis",
                                        "ipsa",
                                        "id",
                                        "quidem",
                                    },
                                    AdministrativeArea: sdk.String("neque"),
                                    LanguageCode: sdk.String("quo"),
                                    Locality: sdk.String("illum"),
                                    Organization: sdk.String("quo"),
                                    PostalCode: sdk.String("21305-0283"),
                                    Recipients: []string{
                                        "sequi",
                                    },
                                    RegionCode: sdk.String("quo"),
                                    Revision: sdk.Int(459856),
                                    SortingCode: sdk.String("recusandae"),
                                    Sublocality: sdk.String("aperiam"),
                                },
                                RadiusMiles: sdk.Float64(7151.79),
                            },
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(7997.96),
                                    Longitude: sdk.Float64(4908.19),
                                },
                                LocationType: shared.LocationLocationTypeEnumLocationTypeUnspecified.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "totam",
                                        "accusamus",
                                    },
                                    AdministrativeArea: sdk.String("aliquam"),
                                    LanguageCode: sdk.String("odio"),
                                    Locality: sdk.String("occaecati"),
                                    Organization: sdk.String("commodi"),
                                    PostalCode: sdk.String("16407-4551"),
                                    Recipients: []string{
                                        "fugit",
                                        "fuga",
                                        "mollitia",
                                    },
                                    RegionCode: sdk.String("incidunt"),
                                    Revision: sdk.Int(539224),
                                    SortingCode: sdk.String("explicabo"),
                                    Sublocality: sdk.String("minima"),
                                },
                                RadiusMiles: sdk.Float64(3926.76),
                            },
                        },
                    },
                    Description: sdk.String("fugit"),
                    EmploymentTypes: []shared.JobEmploymentTypesEnum{
                        shared.JobEmploymentTypesEnumFullTime,
                        shared.JobEmploymentTypesEnumPartTime,
                        shared.JobEmploymentTypesEnumFullTime,
                        shared.JobEmploymentTypesEnumFlyInFlyOut,
                    },
                    Incentives: sdk.String("occaecati"),
                    JobBenefits: []shared.JobJobBenefitsEnum{
                        shared.JobJobBenefitsEnumChildCare,
                        shared.JobJobBenefitsEnumMedical,
                        shared.JobJobBenefitsEnumVacation,
                    },
                    JobEndTime: sdk.String("accusamus"),
                    JobLevel: shared.JobJobLevelEnumJobLevelUnspecified.ToPointer(),
                    JobStartTime: sdk.String("esse"),
                    LanguageCode: sdk.String("quod"),
                    Name: sdk.String("Dr. Ignacio Jacobi"),
                    PostingExpireTime: sdk.String("harum"),
                    PostingPublishTime: sdk.String("molestiae"),
                    PostingRegion: shared.JobPostingRegionEnumNation.ToPointer(),
                    ProcessingOptions: &shared.ProcessingOptions{
                        DisableStreetAddressResolution: sdk.Bool(false),
                        HTMLSanitization: shared.ProcessingOptionsHTMLSanitizationEnumHTMLSanitizationDisabled.ToPointer(),
                    },
                    PromotionValue: sdk.Int(327720),
                    Qualifications: sdk.String("distinctio"),
                    RequisitionID: sdk.String("eligendi"),
                    Responsibilities: sdk.String("sit"),
                    Title: sdk.String("Miss"),
                    Visibility: shared.JobVisibilityEnumSharedWithGoogle.ToPointer(),
                },
                shared.JobInput{
                    Addresses: []string{
                        "cumque",
                    },
                    ApplicationInfo: &shared.ApplicationInfo{
                        Emails: []string{
                            "consequatur",
                        },
                        Instruction: sdk.String("minus"),
                        Uris: []string{
                            "sapiente",
                            "consectetur",
                        },
                    },
                    Company: sdk.String("Labadie - McLaughlin"),
                    CompensationInfo: &shared.CompensationInfo{
                        AnnualizedBaseCompensationRange: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("a"),
                                Nanos: sdk.Int(857723),
                                Units: sdk.String("quas"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("esse"),
                                Nanos: sdk.Int(97468),
                                Units: sdk.String("a"),
                            },
                        },
                        AnnualizedTotalCompensationRange: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("error"),
                                Nanos: sdk.Int(575751),
                                Units: sdk.String("pariatur"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("possimus"),
                                Nanos: sdk.Int(157632),
                                Units: sdk.String("eveniet"),
                            },
                        },
                        Entries: []shared.CompensationEntry{
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("facere"),
                                    Nanos: sdk.Int(85001),
                                    Units: sdk.String("consequuntur"),
                                },
                                Description: sdk.String("quasi"),
                                ExpectedUnitsPerYear: sdk.Float64(6288.99),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("culpa"),
                                        Nanos: sdk.Int(398434),
                                        Units: sdk.String("tenetur"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("quae"),
                                        Nanos: sdk.Int(936747),
                                        Units: sdk.String("vel"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumEquity.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumDaily.ToPointer(),
                            },
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("libero"),
                                    Nanos: sdk.Int(849039),
                                    Units: sdk.String("soluta"),
                                },
                                Description: sdk.String("accusantium"),
                                ExpectedUnitsPerYear: sdk.Float64(3069.86),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("sapiente"),
                                        Nanos: sdk.Int(119771),
                                        Units: sdk.String("ullam"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("reprehenderit"),
                                        Nanos: sdk.Int(356707),
                                        Units: sdk.String("nisi"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumCompensationTypeUnspecified.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumMonthly.ToPointer(),
                            },
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("qui"),
                                    Nanos: sdk.Int(845358),
                                    Units: sdk.String("ex"),
                                },
                                Description: sdk.String("deleniti"),
                                ExpectedUnitsPerYear: sdk.Float64(9292.92),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("dolorum"),
                                        Nanos: sdk.Int(99615),
                                        Units: sdk.String("omnis"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("tenetur"),
                                        Nanos: sdk.Int(98478),
                                        Units: sdk.String("at"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumCompensationTypeUnspecified.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumWeekly.ToPointer(),
                            },
                            shared.CompensationEntry{
                                Amount: &shared.Money{
                                    CurrencyCode: sdk.String("ipsa"),
                                    Nanos: sdk.Int(326701),
                                    Units: sdk.String("veritatis"),
                                },
                                Description: sdk.String("consectetur"),
                                ExpectedUnitsPerYear: sdk.Float64(2371.73),
                                Range: &shared.CompensationRange{
                                    MaxCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("iste"),
                                        Nanos: sdk.Int(839513),
                                        Units: sdk.String("accusantium"),
                                    },
                                    MinCompensation: &shared.Money{
                                        CurrencyCode: sdk.String("rem"),
                                        Nanos: sdk.Int(15606),
                                        Units: sdk.String("laudantium"),
                                    },
                                },
                                Type: shared.CompensationEntryTypeEnumSigningBonus.ToPointer(),
                                Unit: shared.CompensationEntryUnitEnumYearly.ToPointer(),
                            },
                        },
                    },
                    CustomAttributes: map[string]shared.CustomAttribute{
                        "corrupti": shared.CustomAttribute{
                            Filterable: sdk.Bool(false),
                            KeywordSearchable: sdk.Bool(false),
                            LongValues: []string{
                                "voluptatem",
                                "dolor",
                            },
                            StringValues: []string{
                                "numquam",
                                "impedit",
                                "explicabo",
                            },
                        },
                    },
                    DegreeTypes: []shared.JobDegreeTypesEnum{
                        shared.JobDegreeTypesEnumDegreeTypeUnspecified,
                        shared.JobDegreeTypesEnumAdultRemedialEducation,
                    },
                    Department: sdk.String("dicta"),
                    DerivedInfo: &shared.JobDerivedInfo{
                        JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                            shared.JobDerivedInfoJobCategoriesEnumManufacturingAndWarehouse,
                            shared.JobDerivedInfoJobCategoriesEnumCleaningAndFacilities,
                            shared.JobDerivedInfoJobCategoriesEnumTransportationAndLogistics,
                            shared.JobDerivedInfoJobCategoriesEnumEducation,
                        },
                        Locations: []shared.Location{
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(456.59),
                                    Longitude: sdk.Float64(4090.54),
                                },
                                LocationType: shared.LocationLocationTypeEnumSubAdministrativeArea.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "repellendus",
                                    },
                                    AdministrativeArea: sdk.String("officia"),
                                    LanguageCode: sdk.String("maxime"),
                                    Locality: sdk.String("dignissimos"),
                                    Organization: sdk.String("officia"),
                                    PostalCode: sdk.String("30378-2026"),
                                    Recipients: []string{
                                        "suscipit",
                                        "velit",
                                        "culpa",
                                    },
                                    RegionCode: sdk.String("est"),
                                    Revision: sdk.Int(926880),
                                    SortingCode: sdk.String("totam"),
                                    Sublocality: sdk.String("fugiat"),
                                },
                                RadiusMiles: sdk.Float64(4240.89),
                            },
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(4976.78),
                                    Longitude: sdk.Float64(5546.88),
                                },
                                LocationType: shared.LocationLocationTypeEnumLocality.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "possimus",
                                        "facilis",
                                    },
                                    AdministrativeArea: sdk.String("cum"),
                                    LanguageCode: sdk.String("commodi"),
                                    Locality: sdk.String("in"),
                                    Organization: sdk.String("corporis"),
                                    PostalCode: sdk.String("83930-7243"),
                                    Recipients: []string{
                                        "facere",
                                        "numquam",
                                        "doloribus",
                                        "suscipit",
                                    },
                                    RegionCode: sdk.String("reiciendis"),
                                    Revision: sdk.Int(697142),
                                    SortingCode: sdk.String("saepe"),
                                    Sublocality: sdk.String("necessitatibus"),
                                },
                                RadiusMiles: sdk.Float64(2965.56),
                            },
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(1210.59),
                                    Longitude: sdk.Float64(9920.12),
                                },
                                LocationType: shared.LocationLocationTypeEnumAdministrativeArea.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "amet",
                                    },
                                    AdministrativeArea: sdk.String("beatae"),
                                    LanguageCode: sdk.String("dignissimos"),
                                    Locality: sdk.String("a"),
                                    Organization: sdk.String("debitis"),
                                    PostalCode: sdk.String("36309"),
                                    Recipients: []string{
                                        "vitae",
                                        "accusamus",
                                        "similique",
                                    },
                                    RegionCode: sdk.String("tempora"),
                                    Revision: sdk.Int(132815),
                                    SortingCode: sdk.String("voluptas"),
                                    Sublocality: sdk.String("voluptas"),
                                },
                                RadiusMiles: sdk.Float64(3742.96),
                            },
                            shared.Location{
                                LatLng: &shared.LatLng{
                                    Latitude: sdk.Float64(3244.05),
                                    Longitude: sdk.Float64(7487.89),
                                },
                                LocationType: shared.LocationLocationTypeEnumSubLocality1.ToPointer(),
                                PostalAddress: &shared.PostalAddress{
                                    AddressLines: []string{
                                        "minus",
                                    },
                                    AdministrativeArea: sdk.String("dolores"),
                                    LanguageCode: sdk.String("blanditiis"),
                                    Locality: sdk.String("in"),
                                    Organization: sdk.String("dolore"),
                                    PostalCode: sdk.String("88327"),
                                    Recipients: []string{
                                        "quas",
                                        "hic",
                                        "nesciunt",
                                    },
                                    RegionCode: sdk.String("culpa"),
                                    Revision: sdk.Int(548519),
                                    SortingCode: sdk.String("pariatur"),
                                    Sublocality: sdk.String("totam"),
                                },
                                RadiusMiles: sdk.Float64(9402.1),
                            },
                        },
                    },
                    Description: sdk.String("exercitationem"),
                    EmploymentTypes: []shared.JobEmploymentTypesEnum{
                        shared.JobEmploymentTypesEnumEmploymentTypeUnspecified,
                        shared.JobEmploymentTypesEnumVolunteer,
                        shared.JobEmploymentTypesEnumFullTime,
                        shared.JobEmploymentTypesEnumOtherEmploymentType,
                    },
                    Incentives: sdk.String("explicabo"),
                    JobBenefits: []shared.JobJobBenefitsEnum{
                        shared.JobJobBenefitsEnumRetirementPlan,
                        shared.JobJobBenefitsEnumMedical,
                        shared.JobJobBenefitsEnumRetirementPlan,
                        shared.JobJobBenefitsEnumJobBenefitUnspecified,
                    },
                    JobEndTime: sdk.String("iste"),
                    JobLevel: shared.JobJobLevelEnumEntryLevel.ToPointer(),
                    JobStartTime: sdk.String("laborum"),
                    LanguageCode: sdk.String("sed"),
                    Name: sdk.String("Tonya Predovic"),
                    PostingExpireTime: sdk.String("unde"),
                    PostingPublishTime: sdk.String("architecto"),
                    PostingRegion: shared.JobPostingRegionEnumAdministrativeArea.ToPointer(),
                    ProcessingOptions: &shared.ProcessingOptions{
                        DisableStreetAddressResolution: sdk.Bool(false),
                        HTMLSanitization: shared.ProcessingOptionsHTMLSanitizationEnumSimpleFormattingOnly.ToPointer(),
                    },
                    PromotionValue: sdk.Int(895386),
                    Qualifications: sdk.String("illo"),
                    RequisitionID: sdk.String("reiciendis"),
                    Responsibilities: sdk.String("perferendis"),
                    Title: sdk.String("Ms."),
                    Visibility: shared.JobVisibilityEnumSharedWithPublic.ToPointer(),
                },
            },
            UpdateMask: sdk.String("incidunt"),
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eius"),
        Fields: sdk.String("necessitatibus"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("ea"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quos"),
        UploadType: sdk.String("voluptatibus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.JobsProjectsTenantsJobsBatchUpdateSecurity{
        Option1: &operations.JobsProjectsTenantsJobsBatchUpdateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Operation != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsCreate

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

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
    res, err := s.Projects.JobsProjectsTenantsJobsCreate(ctx, operations.JobsProjectsTenantsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        JobInput: &shared.JobInput{
            Addresses: []string{
                "reiciendis",
                "ex",
            },
            ApplicationInfo: &shared.ApplicationInfo{
                Emails: []string{
                    "non",
                },
                Instruction: sdk.String("officiis"),
                Uris: []string{
                    "facilis",
                    "quaerat",
                    "incidunt",
                },
            },
            Company: sdk.String("Tremblay - Leffler"),
            CompensationInfo: &shared.CompensationInfo{
                AnnualizedBaseCompensationRange: &shared.CompensationRange{
                    MaxCompensation: &shared.Money{
                        CurrencyCode: sdk.String("sit"),
                        Nanos: sdk.Int(750595),
                        Units: sdk.String("error"),
                    },
                    MinCompensation: &shared.Money{
                        CurrencyCode: sdk.String("veniam"),
                        Nanos: sdk.Int(329543),
                        Units: sdk.String("recusandae"),
                    },
                },
                AnnualizedTotalCompensationRange: &shared.CompensationRange{
                    MaxCompensation: &shared.Money{
                        CurrencyCode: sdk.String("reiciendis"),
                        Nanos: sdk.Int(862319),
                        Units: sdk.String("magni"),
                    },
                    MinCompensation: &shared.Money{
                        CurrencyCode: sdk.String("aperiam"),
                        Nanos: sdk.Int(901483),
                        Units: sdk.String("numquam"),
                    },
                },
                Entries: []shared.CompensationEntry{
                    shared.CompensationEntry{
                        Amount: &shared.Money{
                            CurrencyCode: sdk.String("in"),
                            Nanos: sdk.Int(889234),
                            Units: sdk.String("beatae"),
                        },
                        Description: sdk.String("laudantium"),
                        ExpectedUnitsPerYear: sdk.Float64(3484.76),
                        Range: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("praesentium"),
                                Nanos: sdk.Int(740098),
                                Units: sdk.String("laboriosam"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("dolorum"),
                                Nanos: sdk.Int(530089),
                                Units: sdk.String("error"),
                            },
                        },
                        Type: shared.CompensationEntryTypeEnumOtherCompensationType.ToPointer(),
                        Unit: shared.CompensationEntryUnitEnumYearly.ToPointer(),
                    },
                    shared.CompensationEntry{
                        Amount: &shared.Money{
                            CurrencyCode: sdk.String("debitis"),
                            Nanos: sdk.Int(204923),
                            Units: sdk.String("dolorum"),
                        },
                        Description: sdk.String("nostrum"),
                        ExpectedUnitsPerYear: sdk.Float64(6390.28),
                        Range: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("dolorum"),
                                Nanos: sdk.Int(548361),
                                Units: sdk.String("accusamus"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("tempora"),
                                Nanos: sdk.Int(543678),
                                Units: sdk.String("fugit"),
                            },
                        },
                        Type: shared.CompensationEntryTypeEnumBonus.ToPointer(),
                        Unit: shared.CompensationEntryUnitEnumOneTime.ToPointer(),
                    },
                },
            },
            CustomAttributes: map[string]shared.CustomAttribute{
                "culpa": shared.CustomAttribute{
                    Filterable: sdk.Bool(false),
                    KeywordSearchable: sdk.Bool(false),
                    LongValues: []string{
                        "magnam",
                        "consequatur",
                        "esse",
                    },
                    StringValues: []string{
                        "sit",
                        "voluptatum",
                    },
                },
            },
            DegreeTypes: []shared.JobDegreeTypesEnum{
                shared.JobDegreeTypesEnumDoctoralOrEquivalent,
                shared.JobDegreeTypesEnumUpperSecondaryEducation,
                shared.JobDegreeTypesEnumDegreeTypeUnspecified,
            },
            Department: sdk.String("blanditiis"),
            DerivedInfo: &shared.JobDerivedInfo{
                JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                    shared.JobDerivedInfoJobCategoriesEnumAnimalCare,
                    shared.JobDerivedInfoJobCategoriesEnumJobCategoryUnspecified,
                },
                Locations: []shared.Location{
                    shared.Location{
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(3426.11),
                            Longitude: sdk.Float64(9061.72),
                        },
                        LocationType: shared.LocationLocationTypeEnumSubLocality.ToPointer(),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "incidunt",
                            },
                            AdministrativeArea: sdk.String("reiciendis"),
                            LanguageCode: sdk.String("dolorem"),
                            Locality: sdk.String("harum"),
                            Organization: sdk.String("dicta"),
                            PostalCode: sdk.String("52656"),
                            Recipients: []string{
                                "tenetur",
                                "laboriosam",
                                "alias",
                            },
                            RegionCode: sdk.String("amet"),
                            Revision: sdk.Int(647197),
                            SortingCode: sdk.String("voluptate"),
                            Sublocality: sdk.String("unde"),
                        },
                        RadiusMiles: sdk.Float64(9720.83),
                    },
                    shared.Location{
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(5887.4),
                            Longitude: sdk.Float64(8338.19),
                        },
                        LocationType: shared.LocationLocationTypeEnumStreetAddress.ToPointer(),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "perferendis",
                                "est",
                                "quidem",
                                "reprehenderit",
                            },
                            AdministrativeArea: sdk.String("facere"),
                            LanguageCode: sdk.String("fuga"),
                            Locality: sdk.String("praesentium"),
                            Organization: sdk.String("mollitia"),
                            PostalCode: sdk.String("07905"),
                            Recipients: []string{
                                "asperiores",
                                "totam",
                            },
                            RegionCode: sdk.String("suscipit"),
                            Revision: sdk.Int(693957),
                            SortingCode: sdk.String("maxime"),
                            Sublocality: sdk.String("et"),
                        },
                        RadiusMiles: sdk.Float64(4610.07),
                    },
                },
            },
            Description: sdk.String("amet"),
            EmploymentTypes: []shared.JobEmploymentTypesEnum{
                shared.JobEmploymentTypesEnumContractToHire,
                shared.JobEmploymentTypesEnumTemporary,
                shared.JobEmploymentTypesEnumIntern,
                shared.JobEmploymentTypesEnumFlyInFlyOut,
            },
            Incentives: sdk.String("officiis"),
            JobBenefits: []shared.JobJobBenefitsEnum{
                shared.JobJobBenefitsEnumParentalLeave,
                shared.JobJobBenefitsEnumDomesticPartner,
                shared.JobJobBenefitsEnumChildCare,
                shared.JobJobBenefitsEnumFlexibleHours,
            },
            JobEndTime: sdk.String("maiores"),
            JobLevel: shared.JobJobLevelEnumManager.ToPointer(),
            JobStartTime: sdk.String("at"),
            LanguageCode: sdk.String("error"),
            Name: sdk.String("Shane Walker"),
            PostingExpireTime: sdk.String("sunt"),
            PostingPublishTime: sdk.String("recusandae"),
            PostingRegion: shared.JobPostingRegionEnumNation.ToPointer(),
            ProcessingOptions: &shared.ProcessingOptions{
                DisableStreetAddressResolution: sdk.Bool(false),
                HTMLSanitization: shared.ProcessingOptionsHTMLSanitizationEnumSimpleFormattingOnly.ToPointer(),
            },
            PromotionValue: sdk.Int(287119),
            Qualifications: sdk.String("reiciendis"),
            RequisitionID: sdk.String("doloremque"),
            Responsibilities: sdk.String("repudiandae"),
            Title: sdk.String("Mr."),
            Visibility: shared.JobVisibilityEnumVisibilityUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("beatae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("laboriosam"),
        Key: sdk.String("velit"),
        OauthToken: sdk.String("a"),
        Parent: "molestias",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("magnam"),
        UploadType: sdk.String("saepe"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.JobsProjectsTenantsJobsCreateSecurity{
        Option1: &operations.JobsProjectsTenantsJobsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsDelete

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

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
    res, err := s.Projects.JobsProjectsTenantsJobsDelete(ctx, operations.JobsProjectsTenantsJobsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("eveniet"),
        Name: "Carlos Considine",
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("illo"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.JobsProjectsTenantsJobsDeleteSecurity{
        Option1: &operations.JobsProjectsTenantsJobsDeleteSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsGet

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

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
    res, err := s.Projects.JobsProjectsTenantsJobsGet(ctx, operations.JobsProjectsTenantsJobsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("eveniet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("vero"),
        Fields: sdk.String("doloremque"),
        Key: sdk.String("iure"),
        Name: "Lena Beier",
        OauthToken: sdk.String("qui"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("cum"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("necessitatibus"),
    }, operations.JobsProjectsTenantsJobsGetSecurity{
        Option1: &operations.JobsProjectsTenantsJobsGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsList

Lists jobs by filter.

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
    res, err := s.Projects.JobsProjectsTenantsJobsList(ctx, operations.JobsProjectsTenantsJobsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptatum"),
        Fields: sdk.String("rem"),
        Filter: sdk.String("aliquam"),
        JobView: operations.JobsProjectsTenantsJobsListJobViewEnumJobViewIDOnly.ToPointer(),
        Key: sdk.String("repellat"),
        OauthToken: sdk.String("alias"),
        PageSize: sdk.Int64(362189),
        PageToken: sdk.String("perspiciatis"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("voluptas"),
        UploadProtocol: sdk.String("alias"),
    }, operations.JobsProjectsTenantsJobsListSecurity{
        Option1: &operations.JobsProjectsTenantsJobsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListJobsResponse != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsPatch

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

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
    res, err := s.Projects.JobsProjectsTenantsJobsPatch(ctx, operations.JobsProjectsTenantsJobsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        JobInput: &shared.JobInput{
            Addresses: []string{
                "dolores",
                "id",
                "minima",
                "dolore",
            },
            ApplicationInfo: &shared.ApplicationInfo{
                Emails: []string{
                    "nesciunt",
                    "quae",
                    "recusandae",
                },
                Instruction: sdk.String("omnis"),
                Uris: []string{
                    "molestiae",
                    "ex",
                },
            },
            Company: sdk.String("Nader Inc"),
            CompensationInfo: &shared.CompensationInfo{
                AnnualizedBaseCompensationRange: &shared.CompensationRange{
                    MaxCompensation: &shared.Money{
                        CurrencyCode: sdk.String("debitis"),
                        Nanos: sdk.Int(514513),
                        Units: sdk.String("eum"),
                    },
                    MinCompensation: &shared.Money{
                        CurrencyCode: sdk.String("nemo"),
                        Nanos: sdk.Int(928219),
                        Units: sdk.String("esse"),
                    },
                },
                AnnualizedTotalCompensationRange: &shared.CompensationRange{
                    MaxCompensation: &shared.Money{
                        CurrencyCode: sdk.String("provident"),
                        Nanos: sdk.Int(337477),
                        Units: sdk.String("eum"),
                    },
                    MinCompensation: &shared.Money{
                        CurrencyCode: sdk.String("reiciendis"),
                        Nanos: sdk.Int(592780),
                        Units: sdk.String("aspernatur"),
                    },
                },
                Entries: []shared.CompensationEntry{
                    shared.CompensationEntry{
                        Amount: &shared.Money{
                            CurrencyCode: sdk.String("quasi"),
                            Nanos: sdk.Int(657020),
                            Units: sdk.String("nostrum"),
                        },
                        Description: sdk.String("mollitia"),
                        ExpectedUnitsPerYear: sdk.Float64(5910.27),
                        Range: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("possimus"),
                                Nanos: sdk.Int(659177),
                                Units: sdk.String("ex"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("aliquid"),
                                Nanos: sdk.Int(37565),
                                Units: sdk.String("repellat"),
                            },
                        },
                        Type: shared.CompensationEntryTypeEnumOtherCompensationType.ToPointer(),
                        Unit: shared.CompensationEntryUnitEnumDaily.ToPointer(),
                    },
                    shared.CompensationEntry{
                        Amount: &shared.Money{
                            CurrencyCode: sdk.String("in"),
                            Nanos: sdk.Int(721407),
                            Units: sdk.String("earum"),
                        },
                        Description: sdk.String("officia"),
                        ExpectedUnitsPerYear: sdk.Float64(6720.41),
                        Range: &shared.CompensationRange{
                            MaxCompensation: &shared.Money{
                                CurrencyCode: sdk.String("placeat"),
                                Nanos: sdk.Int(266697),
                                Units: sdk.String("voluptatibus"),
                            },
                            MinCompensation: &shared.Money{
                                CurrencyCode: sdk.String("molestias"),
                                Nanos: sdk.Int(889794),
                                Units: sdk.String("sapiente"),
                            },
                        },
                        Type: shared.CompensationEntryTypeEnumCommissions.ToPointer(),
                        Unit: shared.CompensationEntryUnitEnumCompensationUnitUnspecified.ToPointer(),
                    },
                },
            },
            CustomAttributes: map[string]shared.CustomAttribute{
                "tempora": shared.CustomAttribute{
                    Filterable: sdk.Bool(false),
                    KeywordSearchable: sdk.Bool(false),
                    LongValues: []string{
                        "inventore",
                        "fugit",
                    },
                    StringValues: []string{
                        "quae",
                        "perferendis",
                        "velit",
                        "aspernatur",
                    },
                },
                "eum": shared.CustomAttribute{
                    Filterable: sdk.Bool(false),
                    KeywordSearchable: sdk.Bool(false),
                    LongValues: []string{
                        "rem",
                        "at",
                    },
                    StringValues: []string{
                        "eos",
                        "sapiente",
                        "eum",
                        "dicta",
                    },
                },
                "minima": shared.CustomAttribute{
                    Filterable: sdk.Bool(false),
                    KeywordSearchable: sdk.Bool(false),
                    LongValues: []string{
                        "cupiditate",
                    },
                    StringValues: []string{
                        "earum",
                        "soluta",
                        "hic",
                    },
                },
            },
            DegreeTypes: []shared.JobDegreeTypesEnum{
                shared.JobDegreeTypesEnumDegreeTypeUnspecified,
                shared.JobDegreeTypesEnumDoctoralOrEquivalent,
                shared.JobDegreeTypesEnumAssociatesOrEquivalent,
                shared.JobDegreeTypesEnumDoctoralOrEquivalent,
            },
            Department: sdk.String("debitis"),
            DerivedInfo: &shared.JobDerivedInfo{
                JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                    shared.JobDerivedInfoJobCategoriesEnumRealEstate,
                    shared.JobDerivedInfoJobCategoriesEnumEducation,
                },
                Locations: []shared.Location{
                    shared.Location{
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(1478.08),
                            Longitude: sdk.Float64(7649.95),
                        },
                        LocationType: shared.LocationLocationTypeEnumSubLocality1.ToPointer(),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "animi",
                            },
                            AdministrativeArea: sdk.String("necessitatibus"),
                            LanguageCode: sdk.String("nulla"),
                            Locality: sdk.String("consequatur"),
                            Organization: sdk.String("quasi"),
                            PostalCode: sdk.String("46532"),
                            Recipients: []string{
                                "magni",
                            },
                            RegionCode: sdk.String("doloribus"),
                            Revision: sdk.Int(859581),
                            SortingCode: sdk.String("necessitatibus"),
                            Sublocality: sdk.String("ipsa"),
                        },
                        RadiusMiles: sdk.Float64(2711.13),
                    },
                },
            },
            Description: sdk.String("nihil"),
            EmploymentTypes: []shared.JobEmploymentTypesEnum{
                shared.JobEmploymentTypesEnumFullTime,
                shared.JobEmploymentTypesEnumTemporary,
            },
            Incentives: sdk.String("esse"),
            JobBenefits: []shared.JobJobBenefitsEnum{
                shared.JobJobBenefitsEnumVision,
                shared.JobJobBenefitsEnumVision,
                shared.JobJobBenefitsEnumMedical,
            },
            JobEndTime: sdk.String("architecto"),
            JobLevel: shared.JobJobLevelEnumExecutive.ToPointer(),
            JobStartTime: sdk.String("doloremque"),
            LanguageCode: sdk.String("dicta"),
            Name: sdk.String("Anita Koch"),
            PostingExpireTime: sdk.String("aliquid"),
            PostingPublishTime: sdk.String("ipsa"),
            PostingRegion: shared.JobPostingRegionEnumNation.ToPointer(),
            ProcessingOptions: &shared.ProcessingOptions{
                DisableStreetAddressResolution: sdk.Bool(false),
                HTMLSanitization: shared.ProcessingOptionsHTMLSanitizationEnumHTMLSanitizationUnspecified.ToPointer(),
            },
            PromotionValue: sdk.Int(344718),
            Qualifications: sdk.String("fugiat"),
            RequisitionID: sdk.String("expedita"),
            Responsibilities: sdk.String("aliquid"),
            Title: sdk.String("Miss"),
            Visibility: shared.JobVisibilityEnumAccountOnly.ToPointer(),
        },
        AccessToken: sdk.String("aliquid"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("iste"),
        Name: "Raymond Muller",
        OauthToken: sdk.String("mollitia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UpdateMask: sdk.String("libero"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.JobsProjectsTenantsJobsPatchSecurity{
        Option1: &operations.JobsProjectsTenantsJobsPatchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Job != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsSearch

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

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
    res, err := s.Projects.JobsProjectsTenantsJobsSearch(ctx, operations.JobsProjectsTenantsJobsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchJobsRequest: &shared.SearchJobsRequest{
            CustomRankingInfo: &shared.CustomRankingInfo{
                ImportanceLevel: shared.CustomRankingInfoImportanceLevelEnumImportanceLevelUnspecified.ToPointer(),
                RankingExpression: sdk.String("repellendus"),
            },
            DisableKeywordMatch: sdk.Bool(false),
            DiversificationLevel: shared.SearchJobsRequestDiversificationLevelEnumSimple.ToPointer(),
            EnableBroadening: sdk.Bool(false),
            HistogramQueries: []shared.HistogramQuery{
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("ex"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("ut"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("ad"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("expedita"),
                },
            },
            JobQuery: &shared.JobQuery{
                CommuteFilter: &shared.CommuteFilter{
                    AllowImpreciseAddresses: sdk.Bool(false),
                    CommuteMethod: shared.CommuteFilterCommuteMethodEnumCommuteMethodUnspecified.ToPointer(),
                    DepartureTime: &shared.TimeOfDay{
                        Hours: sdk.Int(561577),
                        Minutes: sdk.Int(737254),
                        Nanos: sdk.Int(399660),
                        Seconds: sdk.Int(109784),
                    },
                    RoadTraffic: shared.CommuteFilterRoadTrafficEnumTrafficFree.ToPointer(),
                    StartCoordinates: &shared.LatLng{
                        Latitude: sdk.Float64(6063.08),
                        Longitude: sdk.Float64(852.33),
                    },
                    TravelDuration: sdk.String("rerum"),
                },
                Companies: []string{
                    "culpa",
                    "voluptatem",
                    "sapiente",
                },
                CompanyDisplayNames: []string{
                    "architecto",
                    "fuga",
                    "pariatur",
                    "debitis",
                },
                CompensationFilter: &shared.CompensationFilter{
                    IncludeJobsWithUnspecifiedCompensationRange: sdk.Bool(false),
                    Range: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("voluptatem"),
                            Nanos: sdk.Int(1207),
                            Units: sdk.String("deleniti"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("earum"),
                            Nanos: sdk.Int(404244),
                            Units: sdk.String("sapiente"),
                        },
                    },
                    Type: shared.CompensationFilterTypeEnumUnitAndAmount.ToPointer(),
                    Units: []shared.CompensationFilterUnitsEnum{
                        shared.CompensationFilterUnitsEnumDaily,
                        shared.CompensationFilterUnitsEnumOtherCompensationUnit,
                        shared.CompensationFilterUnitsEnumHourly,
                        shared.CompensationFilterUnitsEnumDaily,
                    },
                },
                CustomAttributeFilter: sdk.String("perferendis"),
                DisableSpellCheck: sdk.Bool(false),
                EmploymentTypes: []shared.JobQueryEmploymentTypesEnum{
                    shared.JobQueryEmploymentTypesEnumTemporary,
                    shared.JobQueryEmploymentTypesEnumPerDiem,
                    shared.JobQueryEmploymentTypesEnumFlyInFlyOut,
                    shared.JobQueryEmploymentTypesEnumVolunteer,
                },
                ExcludedJobs: []string{
                    "culpa",
                    "dolor",
                },
                JobCategories: []shared.JobQueryJobCategoriesEnum{
                    shared.JobQueryJobCategoriesEnumAdministrativeAndOffice,
                    shared.JobQueryJobCategoriesEnumInstallationMaintenanceAndRepair,
                },
                LanguageCodes: []string{
                    "tempora",
                },
                LocationFilters: []shared.LocationFilter{
                    shared.LocationFilter{
                        Address: sdk.String("10210 Bergstrom Extensions"),
                        DistanceInMiles: sdk.Float64(8562.77),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(3694.9),
                            Longitude: sdk.Float64(1621.2),
                        },
                        RegionCode: sdk.String("ipsa"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommuteAllowed.ToPointer(),
                    },
                },
                PublishTimeRange: &shared.TimestampRange{
                    EndTime: sdk.String("eveniet"),
                    StartTime: sdk.String("impedit"),
                },
                Query: sdk.String("officiis"),
                QueryLanguageCode: sdk.String("esse"),
            },
            JobView: shared.SearchJobsRequestJobViewEnumJobViewFull.ToPointer(),
            KeywordMatchMode: shared.SearchJobsRequestKeywordMatchModeEnumKeywordMatchModeUnspecified.ToPointer(),
            MaxPageSize: sdk.Int(332191),
            Offset: sdk.Int(199596),
            OrderBy: sdk.String("expedita"),
            PageToken: sdk.String("eum"),
            RequestMetadata: &shared.RequestMetadata{
                AllowMissingIds: sdk.Bool(false),
                DeviceInfo: &shared.DeviceInfo{
                    DeviceType: shared.DeviceInfoDeviceTypeEnumMobileWeb.ToPointer(),
                    ID: sdk.String("8451c6c6-e205-4e16-9eab-3fec9578a645"),
                },
                Domain: sdk.String("quos"),
                SessionID: sdk.String("eius"),
                UserID: sdk.String("aspernatur"),
            },
            SearchMode: shared.SearchJobsRequestSearchModeEnumJobSearch.ToPointer(),
        },
        AccessToken: sdk.String("nesciunt"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("laudantium"),
        Fields: sdk.String("incidunt"),
        Key: sdk.String("quasi"),
        OauthToken: sdk.String("rem"),
        Parent: "fugiat",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dicta"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("consequuntur"),
    }, operations.JobsProjectsTenantsJobsSearchSecurity{
        Option1: &operations.JobsProjectsTenantsJobsSearchSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchJobsResponse != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsJobsSearchForAlert

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

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
    res, err := s.Projects.JobsProjectsTenantsJobsSearchForAlert(ctx, operations.JobsProjectsTenantsJobsSearchForAlertRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchJobsRequest: &shared.SearchJobsRequest{
            CustomRankingInfo: &shared.CustomRankingInfo{
                ImportanceLevel: shared.CustomRankingInfoImportanceLevelEnumImportanceLevelUnspecified.ToPointer(),
                RankingExpression: sdk.String("cupiditate"),
            },
            DisableKeywordMatch: sdk.Bool(false),
            DiversificationLevel: shared.SearchJobsRequestDiversificationLevelEnumDiversifyByLooserSimilarity.ToPointer(),
            EnableBroadening: sdk.Bool(false),
            HistogramQueries: []shared.HistogramQuery{
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("alias"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("omnis"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("eos"),
                },
            },
            JobQuery: &shared.JobQuery{
                CommuteFilter: &shared.CommuteFilter{
                    AllowImpreciseAddresses: sdk.Bool(false),
                    CommuteMethod: shared.CommuteFilterCommuteMethodEnumWalking.ToPointer(),
                    DepartureTime: &shared.TimeOfDay{
                        Hours: sdk.Int(612867),
                        Minutes: sdk.Int(170099),
                        Nanos: sdk.Int(81369),
                        Seconds: sdk.Int(686362),
                    },
                    RoadTraffic: shared.CommuteFilterRoadTrafficEnumBusyHour.ToPointer(),
                    StartCoordinates: &shared.LatLng{
                        Latitude: sdk.Float64(9768.02),
                        Longitude: sdk.Float64(7196.2),
                    },
                    TravelDuration: sdk.String("omnis"),
                },
                Companies: []string{
                    "minima",
                    "praesentium",
                    "maxime",
                    "magnam",
                },
                CompanyDisplayNames: []string{
                    "quos",
                    "commodi",
                    "itaque",
                    "commodi",
                },
                CompensationFilter: &shared.CompensationFilter{
                    IncludeJobsWithUnspecifiedCompensationRange: sdk.Bool(false),
                    Range: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("totam"),
                            Nanos: sdk.Int(936618),
                            Units: sdk.String("modi"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("nam"),
                            Nanos: sdk.Int(877399),
                            Units: sdk.String("voluptatem"),
                        },
                    },
                    Type: shared.CompensationFilterTypeEnumUnitOnly.ToPointer(),
                    Units: []shared.CompensationFilterUnitsEnum{
                        shared.CompensationFilterUnitsEnumCompensationUnitUnspecified,
                        shared.CompensationFilterUnitsEnumCompensationUnitUnspecified,
                    },
                },
                CustomAttributeFilter: sdk.String("non"),
                DisableSpellCheck: sdk.Bool(false),
                EmploymentTypes: []shared.JobQueryEmploymentTypesEnum{
                    shared.JobQueryEmploymentTypesEnumContractor,
                    shared.JobQueryEmploymentTypesEnumIntern,
                    shared.JobQueryEmploymentTypesEnumFlyInFlyOut,
                    shared.JobQueryEmploymentTypesEnumVolunteer,
                },
                ExcludedJobs: []string{
                    "nemo",
                    "reprehenderit",
                },
                JobCategories: []shared.JobQueryJobCategoriesEnum{
                    shared.JobQueryJobCategoriesEnumCustomerService,
                    shared.JobQueryJobCategoriesEnumLegal,
                    shared.JobQueryJobCategoriesEnumScienceAndEngineering,
                },
                LanguageCodes: []string{
                    "hic",
                    "necessitatibus",
                    "asperiores",
                    "ex",
                },
                LocationFilters: []shared.LocationFilter{
                    shared.LocationFilter{
                        Address: sdk.String("907 Padberg Falls"),
                        DistanceInMiles: sdk.Float64(2448.89),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(5388.69),
                            Longitude: sdk.Float64(2164.57),
                        },
                        RegionCode: sdk.String("impedit"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommutePreferenceUnspecified.ToPointer(),
                    },
                    shared.LocationFilter{
                        Address: sdk.String("972 Jace Drive"),
                        DistanceInMiles: sdk.Float64(4939.58),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(2055.66),
                            Longitude: sdk.Float64(7781.72),
                        },
                        RegionCode: sdk.String("deleniti"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommuteJobsExcluded.ToPointer(),
                    },
                },
                PublishTimeRange: &shared.TimestampRange{
                    EndTime: sdk.String("iure"),
                    StartTime: sdk.String("odit"),
                },
                Query: sdk.String("voluptatibus"),
                QueryLanguageCode: sdk.String("vel"),
            },
            JobView: shared.SearchJobsRequestJobViewEnumJobViewIDOnly.ToPointer(),
            KeywordMatchMode: shared.SearchJobsRequestKeywordMatchModeEnumKeywordMatchTitleOnly.ToPointer(),
            MaxPageSize: sdk.Int(78969),
            Offset: sdk.Int(818034),
            OrderBy: sdk.String("libero"),
            PageToken: sdk.String("architecto"),
            RequestMetadata: &shared.RequestMetadata{
                AllowMissingIds: sdk.Bool(false),
                DeviceInfo: &shared.DeviceInfo{
                    DeviceType: shared.DeviceInfoDeviceTypeEnumOther.ToPointer(),
                    ID: sdk.String("2c431066-1e96-4349-a1cf-9e06e3a43700"),
                },
                Domain: sdk.String("consequatur"),
                SessionID: sdk.String("officia"),
                UserID: sdk.String("recusandae"),
            },
            SearchMode: shared.SearchJobsRequestSearchModeEnumJobSearch.ToPointer(),
        },
        AccessToken: sdk.String("quidem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("facilis"),
        Fields: sdk.String("placeat"),
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("expedita"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("a"),
        UploadType: sdk.String("voluptate"),
        UploadProtocol: sdk.String("ullam"),
    }, operations.JobsProjectsTenantsJobsSearchForAlertSecurity{
        Option1: &operations.JobsProjectsTenantsJobsSearchForAlertSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchJobsResponse != nil {
        // handle response
    }
}
```

## JobsProjectsTenantsList

Lists all tenants associated with the project.

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
    res, err := s.Projects.JobsProjectsTenantsList(ctx, operations.JobsProjectsTenantsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("necessitatibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("impedit"),
        Fields: sdk.String("ipsam"),
        Key: sdk.String("corporis"),
        OauthToken: sdk.String("est"),
        PageSize: sdk.Int64(621666),
        PageToken: sdk.String("esse"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("veritatis"),
        UploadType: sdk.String("vero"),
        UploadProtocol: sdk.String("consectetur"),
    }, operations.JobsProjectsTenantsListSecurity{
        Option1: &operations.JobsProjectsTenantsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTenantsResponse != nil {
        // handle response
    }
}
```
