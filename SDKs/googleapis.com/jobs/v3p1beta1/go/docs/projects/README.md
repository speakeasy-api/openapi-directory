# Projects

### Available Operations

* [JobsProjectsClientEventsCreate](#jobsprojectsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [JobsProjectsCompaniesCreate](#jobsprojectscompaniescreate) - Creates a new company entity.
* [JobsProjectsCompaniesList](#jobsprojectscompanieslist) - Lists all companies associated with the service account.
* [JobsProjectsComplete](#jobsprojectscomplete) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [JobsProjectsJobsBatchDelete](#jobsprojectsjobsbatchdelete) - Deletes a list of Jobs by filter.
* [JobsProjectsJobsCreate](#jobsprojectsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsJobsDelete](#jobsprojectsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsJobsList](#jobsprojectsjobslist) - Lists jobs by filter.
* [JobsProjectsJobsPatch](#jobsprojectsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsJobsSearch](#jobsprojectsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [JobsProjectsJobsSearchForAlert](#jobsprojectsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* [JobsProjectsOperationsGet](#jobsprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## JobsProjectsClientEventsCreate

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
    res, err := s.Projects.JobsProjectsClientEventsCreate(ctx, operations.JobsProjectsClientEventsCreateRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        CreateClientEventRequest: &shared.CreateClientEventRequest{
            ClientEvent: &shared.ClientEvent{
                CreateTime: sdk.String("quis"),
                EventID: sdk.String("veritatis"),
                ExtraInfo: map[string]string{
                    "perferendis": "ipsam",
                    "repellendus": "sapiente",
                    "quo": "odit",
                },
                JobEvent: &shared.JobEvent{
                    Jobs: []string{
                        "at",
                        "maiores",
                        "molestiae",
                        "quod",
                    },
                    Type: shared.JobEventTypeEnumHired.ToPointer(),
                },
                ParentEventID: sdk.String("esse"),
                RequestID: sdk.String("totam"),
            },
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("dicta"),
        Fields: sdk.String("nam"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("occaecati"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    }, operations.JobsProjectsClientEventsCreateSecurity{
        Option1: &operations.JobsProjectsClientEventsCreateSecurityOption1{
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

## JobsProjectsCompaniesCreate

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
    res, err := s.Projects.JobsProjectsCompaniesCreate(ctx, operations.JobsProjectsCompaniesCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateCompanyRequest: &shared.CreateCompanyRequest{
            Company: &shared.Company{
                CareerSiteURI: sdk.String("beatae"),
                DerivedInfo: &shared.CompanyDerivedInfo{
                    HeadquartersLocation: &shared.Location{
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(4146.62),
                            Longitude: sdk.Float64(4736),
                        },
                        LocationType: shared.LocationLocationTypeEnumAdministrativeArea.ToPointer(),
                        PostalAddress: &shared.PostalAddress{
                            AddressLines: []string{
                                "impedit",
                            },
                            AdministrativeArea: sdk.String("cum"),
                            LanguageCode: sdk.String("esse"),
                            Locality: sdk.String("ipsum"),
                            Organization: sdk.String("excepturi"),
                            PostalCode: sdk.String("03616"),
                            Recipients: []string{
                                "natus",
                            },
                            RegionCode: sdk.String("laboriosam"),
                            Revision: sdk.Int(943749),
                            SortingCode: sdk.String("saepe"),
                            Sublocality: sdk.String("fuga"),
                        },
                        RadiusInMiles: sdk.Float64(4499.5),
                    },
                },
                DisplayName: sdk.String("corporis"),
                EeoText: sdk.String("iste"),
                ExternalID: sdk.String("iure"),
                HeadquartersAddress: sdk.String("saepe"),
                HiringAgency: sdk.Bool(false),
                ImageURI: sdk.String("quidem"),
                KeywordSearchableJobCustomAttributes: []string{
                    "ipsa",
                },
                Name: sdk.String("Carlton O'Hara"),
                Size: shared.CompanySizeEnumMini.ToPointer(),
                Suspended: sdk.Bool(false),
                WebsiteURI: sdk.String("corporis"),
            },
        },
        AccessToken: sdk.String("explicabo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        Parent: "excepturi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusantium"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("culpa"),
    }, operations.JobsProjectsCompaniesCreateSecurity{
        Option1: &operations.JobsProjectsCompaniesCreateSecurityOption1{
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

## JobsProjectsCompaniesList

Lists all companies associated with the service account.

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
    res, err := s.Projects.JobsProjectsCompaniesList(ctx, operations.JobsProjectsCompaniesListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("consequuntur"),
        PageSize: sdk.Int64(995300),
        PageToken: sdk.String("mollitia"),
        Parent: "occaecati",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        RequireOpenJobs: sdk.Bool(false),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("quam"),
    }, operations.JobsProjectsCompaniesListSecurity{
        Option1: &operations.JobsProjectsCompaniesListSecurityOption1{
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

## JobsProjectsComplete

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
    res, err := s.Projects.JobsProjectsComplete(ctx, operations.JobsProjectsCompleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quia"),
        CompanyName: sdk.String("quis"),
        Fields: sdk.String("vitae"),
        Key: sdk.String("laborum"),
        LanguageCode: sdk.String("animi"),
        LanguageCodes: []string{
            "odit",
            "quo",
        },
        Name: "Mandy Hills",
        OauthToken: sdk.String("aut"),
        PageSize: sdk.Int64(97101),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("error"),
        QuotaUser: sdk.String("temporibus"),
        Scope: operations.JobsProjectsCompleteScopeEnumPublic.ToPointer(),
        Type: operations.JobsProjectsCompleteTypeEnumCompletionTypeUnspecified.ToPointer(),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.JobsProjectsCompleteSecurity{
        Option1: &operations.JobsProjectsCompleteSecurityOption1{
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

## JobsProjectsJobsBatchDelete

Deletes a list of Jobs by filter.

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
    res, err := s.Projects.JobsProjectsJobsBatchDelete(ctx, operations.JobsProjectsJobsBatchDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchDeleteJobsRequest: &shared.BatchDeleteJobsRequest{
            Filter: sdk.String("nihil"),
        },
        AccessToken: sdk.String("praesentium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("cum"),
        Parent: "perferendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloremque"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("ut"),
    }, operations.JobsProjectsJobsBatchDeleteSecurity{
        Option1: &operations.JobsProjectsJobsBatchDeleteSecurityOption1{
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

## JobsProjectsJobsCreate

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
    res, err := s.Projects.JobsProjectsJobsCreate(ctx, operations.JobsProjectsJobsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        CreateJobRequest: &shared.CreateJobRequest{
            Job: &shared.Job{
                Addresses: []string{
                    "corporis",
                },
                ApplicationInfo: &shared.ApplicationInfo{
                    Emails: []string{
                        "iusto",
                        "dicta",
                    },
                    Instruction: sdk.String("harum"),
                    Uris: []string{
                        "accusamus",
                        "commodi",
                    },
                },
                CompanyDisplayName: sdk.String("repudiandae"),
                CompanyName: sdk.String("quae"),
                CompensationInfo: &shared.CompensationInfo{
                    AnnualizedBaseCompensationRange: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("ipsum"),
                            Nanos: sdk.Int(692472),
                            Units: sdk.String("molestias"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("excepturi"),
                            Nanos: sdk.Int(865103),
                            Units: sdk.String("modi"),
                        },
                    },
                    AnnualizedTotalCompensationRange: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("praesentium"),
                            Nanos: sdk.Int(523248),
                            Units: sdk.String("voluptates"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("quasi"),
                            Nanos: sdk.Int(921158),
                            Units: sdk.String("sint"),
                        },
                    },
                    Entries: []shared.CompensationEntry{
                        shared.CompensationEntry{
                            Amount: &shared.Money{
                                CurrencyCode: sdk.String("itaque"),
                                Nanos: sdk.Int(277718),
                                Units: sdk.String("enim"),
                            },
                            Description: sdk.String("consequatur"),
                            ExpectedUnitsPerYear: sdk.Float64(6674.11),
                            Range: &shared.CompensationRange{
                                MaxCompensation: &shared.Money{
                                    CurrencyCode: sdk.String("quibusdam"),
                                    Nanos: sdk.Int(131797),
                                    Units: sdk.String("deserunt"),
                                },
                                MinCompensation: &shared.Money{
                                    CurrencyCode: sdk.String("distinctio"),
                                    Nanos: sdk.Int(841386),
                                    Units: sdk.String("labore"),
                                },
                            },
                            Type: shared.CompensationEntryTypeEnumBonus.ToPointer(),
                            Unit: shared.CompensationEntryUnitEnumHourly.ToPointer(),
                        },
                    },
                },
                CustomAttributes: map[string]shared.CustomAttribute{
                    "cupiditate": shared.CustomAttribute{
                        Filterable: sdk.Bool(false),
                        LongValues: []string{
                            "perferendis",
                            "magni",
                            "assumenda",
                        },
                        StringValues: []string{
                            "alias",
                            "fugit",
                        },
                    },
                    "dolorum": shared.CustomAttribute{
                        Filterable: sdk.Bool(false),
                        LongValues: []string{
                            "tempora",
                            "facilis",
                            "tempore",
                        },
                        StringValues: []string{
                            "delectus",
                            "eum",
                        },
                    },
                },
                DegreeTypes: []shared.JobDegreeTypesEnum{
                    shared.JobDegreeTypesEnumBachelorsOrEquivalent,
                },
                Department: sdk.String("sint"),
                DerivedInfo: &shared.JobDerivedInfo{
                    JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                        shared.JobDerivedInfoJobCategoriesEnumManagement,
                        shared.JobDerivedInfoJobCategoriesEnumScienceAndEngineering,
                    },
                    Locations: []shared.Location{
                        shared.Location{
                            LatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6389.21),
                                Longitude: sdk.Float64(2230.81),
                            },
                            LocationType: shared.LocationLocationTypeEnumNeighborhood.ToPointer(),
                            PostalAddress: &shared.PostalAddress{
                                AddressLines: []string{
                                    "dolorum",
                                    "in",
                                    "in",
                                    "illum",
                                },
                                AdministrativeArea: sdk.String("maiores"),
                                LanguageCode: sdk.String("rerum"),
                                Locality: sdk.String("dicta"),
                                Organization: sdk.String("magnam"),
                                PostalCode: sdk.String("84368-2538"),
                                Recipients: []string{
                                    "quidem",
                                    "provident",
                                    "nam",
                                    "id",
                                },
                                RegionCode: sdk.String("blanditiis"),
                                Revision: sdk.Int(533206),
                                SortingCode: sdk.String("sapiente"),
                                Sublocality: sdk.String("amet"),
                            },
                            RadiusInMiles: sdk.Float64(6439.9),
                        },
                        shared.Location{
                            LatLng: &shared.LatLng{
                                Latitude: sdk.Float64(3948.69),
                                Longitude: sdk.Float64(4238.55),
                            },
                            LocationType: shared.LocationLocationTypeEnumSubLocality.ToPointer(),
                            PostalAddress: &shared.PostalAddress{
                                AddressLines: []string{
                                    "molestiae",
                                    "perferendis",
                                    "nihil",
                                },
                                AdministrativeArea: sdk.String("magnam"),
                                LanguageCode: sdk.String("distinctio"),
                                Locality: sdk.String("id"),
                                Organization: sdk.String("labore"),
                                PostalCode: sdk.String("36748"),
                                Recipients: []string{
                                    "architecto",
                                },
                                RegionCode: sdk.String("magnam"),
                                Revision: sdk.Int(92373),
                                SortingCode: sdk.String("excepturi"),
                                Sublocality: sdk.String("ullam"),
                            },
                            RadiusInMiles: sdk.Float64(5908.73),
                        },
                        shared.Location{
                            LatLng: &shared.LatLng{
                                Latitude: sdk.Float64(5518.16),
                                Longitude: sdk.Float64(5743.25),
                            },
                            LocationType: shared.LocationLocationTypeEnumLocationTypeUnspecified.ToPointer(),
                            PostalAddress: &shared.PostalAddress{
                                AddressLines: []string{
                                    "reiciendis",
                                    "mollitia",
                                    "ad",
                                },
                                AdministrativeArea: sdk.String("eum"),
                                LanguageCode: sdk.String("dolor"),
                                Locality: sdk.String("necessitatibus"),
                                Organization: sdk.String("odit"),
                                PostalCode: sdk.String("04982"),
                                Recipients: []string{
                                    "deleniti",
                                    "facilis",
                                    "in",
                                    "architecto",
                                },
                                RegionCode: sdk.String("architecto"),
                                Revision: sdk.Int(919483),
                                SortingCode: sdk.String("ullam"),
                                Sublocality: sdk.String("expedita"),
                            },
                            RadiusInMiles: sdk.Float64(4692.49),
                        },
                    },
                },
                Description: sdk.String("repellat"),
                EmploymentTypes: []shared.JobEmploymentTypesEnum{
                    shared.JobEmploymentTypesEnumFullTime,
                    shared.JobEmploymentTypesEnumFlyInFlyOut,
                    shared.JobEmploymentTypesEnumFlyInFlyOut,
                    shared.JobEmploymentTypesEnumEmploymentTypeUnspecified,
                },
                Incentives: sdk.String("consequuntur"),
                JobBenefits: []shared.JobJobBenefitsEnum{
                    shared.JobJobBenefitsEnumParentalLeave,
                    shared.JobJobBenefitsEnumDental,
                    shared.JobJobBenefitsEnumChildCare,
                },
                JobEndTime: sdk.String("quo"),
                JobLevel: shared.JobJobLevelEnumExecutive.ToPointer(),
                JobStartTime: sdk.String("pariatur"),
                LanguageCode: sdk.String("maxime"),
                Name: sdk.String("Miriam Connelly Jr."),
                PostingCreateTime: sdk.String("maiores"),
                PostingExpireTime: sdk.String("quidem"),
                PostingPublishTime: sdk.String("ipsam"),
                PostingRegion: shared.JobPostingRegionEnumAdministrativeArea.ToPointer(),
                PostingUpdateTime: sdk.String("autem"),
                ProcessingOptions: &shared.ProcessingOptions{
                    DisableStreetAddressResolution: sdk.Bool(false),
                    HTMLSanitization: shared.ProcessingOptionsHTMLSanitizationEnumSimpleFormattingOnly.ToPointer(),
                },
                PromotionValue: sdk.Int(50588),
                Qualifications: sdk.String("pariatur"),
                RequisitionID: sdk.String("nemo"),
                Responsibilities: sdk.String("voluptatibus"),
                Title: sdk.String("Mr."),
                Visibility: shared.JobVisibilityEnumSharedWithPublic.ToPointer(),
            },
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("corporis"),
        Key: sdk.String("hic"),
        OauthToken: sdk.String("libero"),
        Parent: "nobis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("quis"),
        UploadProtocol: sdk.String("totam"),
    }, operations.JobsProjectsJobsCreateSecurity{
        Option1: &operations.JobsProjectsJobsCreateSecurityOption1{
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

## JobsProjectsJobsDelete

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
    res, err := s.Projects.JobsProjectsJobsDelete(ctx, operations.JobsProjectsJobsDeleteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("eos"),
        Key: sdk.String("perferendis"),
        Name: "Brooke Kohler",
        OauthToken: sdk.String("nostrum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("hic"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("omnis"),
    }, operations.JobsProjectsJobsDeleteSecurity{
        Option1: &operations.JobsProjectsJobsDeleteSecurityOption1{
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

## JobsProjectsJobsList

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
    res, err := s.Projects.JobsProjectsJobsList(ctx, operations.JobsProjectsJobsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("consequuntur"),
        Filter: sdk.String("blanditiis"),
        JobView: operations.JobsProjectsJobsListJobViewEnumJobViewSmall.ToPointer(),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("occaecati"),
        PageSize: sdk.Int64(699098),
        PageToken: sdk.String("adipisci"),
        Parent: "asperiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
    }, operations.JobsProjectsJobsListSecurity{
        Option1: &operations.JobsProjectsJobsListSecurityOption1{
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

## JobsProjectsJobsPatch

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
    res, err := s.Projects.JobsProjectsJobsPatch(ctx, operations.JobsProjectsJobsPatchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        UpdateJobRequest: &shared.UpdateJobRequest{
            Job: &shared.Job{
                Addresses: []string{
                    "pariatur",
                    "provident",
                    "nobis",
                },
                ApplicationInfo: &shared.ApplicationInfo{
                    Emails: []string{
                        "delectus",
                        "quaerat",
                        "quos",
                    },
                    Instruction: sdk.String("aliquid"),
                    Uris: []string{
                        "dolorem",
                    },
                },
                CompanyDisplayName: sdk.String("dolor"),
                CompanyName: sdk.String("qui"),
                CompensationInfo: &shared.CompensationInfo{
                    AnnualizedBaseCompensationRange: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("ipsum"),
                            Nanos: sdk.Int(944373),
                            Units: sdk.String("excepturi"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("cum"),
                            Nanos: sdk.Int(452109),
                            Units: sdk.String("dignissimos"),
                        },
                    },
                    AnnualizedTotalCompensationRange: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("reiciendis"),
                            Nanos: sdk.Int(227414),
                            Units: sdk.String("dolorum"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("numquam"),
                            Nanos: sdk.Int(85295),
                            Units: sdk.String("ipsa"),
                        },
                    },
                    Entries: []shared.CompensationEntry{
                        shared.CompensationEntry{
                            Amount: &shared.Money{
                                CurrencyCode: sdk.String("iure"),
                                Nanos: sdk.Int(487838),
                                Units: sdk.String("quaerat"),
                            },
                            Description: sdk.String("accusamus"),
                            ExpectedUnitsPerYear: sdk.Float64(6963.44),
                            Range: &shared.CompensationRange{
                                MaxCompensation: &shared.Money{
                                    CurrencyCode: sdk.String("voluptatibus"),
                                    Nanos: sdk.Int(377752),
                                    Units: sdk.String("natus"),
                                },
                                MinCompensation: &shared.Money{
                                    CurrencyCode: sdk.String("eos"),
                                    Nanos: sdk.Int(542499),
                                    Units: sdk.String("sit"),
                                },
                            },
                            Type: shared.CompensationEntryTypeEnumTips.ToPointer(),
                            Unit: shared.CompensationEntryUnitEnumCompensationUnitUnspecified.ToPointer(),
                        },
                    },
                },
                CustomAttributes: map[string]shared.CustomAttribute{
                    "dolorum": shared.CustomAttribute{
                        Filterable: sdk.Bool(false),
                        LongValues: []string{
                            "voluptate",
                            "dolorum",
                        },
                        StringValues: []string{
                            "omnis",
                            "necessitatibus",
                            "distinctio",
                        },
                    },
                    "asperiores": shared.CustomAttribute{
                        Filterable: sdk.Bool(false),
                        LongValues: []string{
                            "ipsum",
                            "voluptate",
                        },
                        StringValues: []string{
                            "saepe",
                            "eius",
                            "aspernatur",
                        },
                    },
                    "perferendis": shared.CustomAttribute{
                        Filterable: sdk.Bool(false),
                        LongValues: []string{
                            "optio",
                        },
                        StringValues: []string{
                            "ad",
                            "saepe",
                            "suscipit",
                            "deserunt",
                        },
                    },
                },
                DegreeTypes: []shared.JobDegreeTypesEnum{
                    shared.JobDegreeTypesEnumLowerSecondaryEducation,
                    shared.JobDegreeTypesEnumMastersOrEquivalent,
                    shared.JobDegreeTypesEnumAdultRemedialEducation,
                },
                Department: sdk.String("similique"),
                DerivedInfo: &shared.JobDerivedInfo{
                    JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                        shared.JobDerivedInfoJobCategoriesEnumScienceAndEngineering,
                    },
                    Locations: []shared.Location{
                        shared.Location{
                            LatLng: &shared.LatLng{
                                Latitude: sdk.Float64(2735.42),
                                Longitude: sdk.Float64(4254.51),
                            },
                            LocationType: shared.LocationLocationTypeEnumSubLocality2.ToPointer(),
                            PostalAddress: &shared.PostalAddress{
                                AddressLines: []string{
                                    "qui",
                                    "dolorum",
                                    "a",
                                    "esse",
                                },
                                AdministrativeArea: sdk.String("harum"),
                                LanguageCode: sdk.String("iusto"),
                                Locality: sdk.String("ipsum"),
                                Organization: sdk.String("quisquam"),
                                PostalCode: sdk.String("27823-2954"),
                                Recipients: []string{
                                    "expedita",
                                },
                                RegionCode: sdk.String("neque"),
                                Revision: sdk.Int(153694),
                                SortingCode: sdk.String("vel"),
                                Sublocality: sdk.String("libero"),
                            },
                            RadiusInMiles: sdk.Float64(3741.7),
                        },
                        shared.Location{
                            LatLng: &shared.LatLng{
                                Latitude: sdk.Float64(6462.65),
                                Longitude: sdk.Float64(4635.75),
                            },
                            LocationType: shared.LocationLocationTypeEnumAdministrativeArea.ToPointer(),
                            PostalAddress: &shared.PostalAddress{
                                AddressLines: []string{
                                    "qui",
                                    "cupiditate",
                                },
                                AdministrativeArea: sdk.String("maxime"),
                                LanguageCode: sdk.String("pariatur"),
                                Locality: sdk.String("soluta"),
                                Organization: sdk.String("dicta"),
                                PostalCode: sdk.String("52117-7345"),
                                Recipients: []string{
                                    "qui",
                                    "neque",
                                    "fugit",
                                    "magni",
                                },
                                RegionCode: sdk.String("odio"),
                                Revision: sdk.Int(124833),
                                SortingCode: sdk.String("ullam"),
                                Sublocality: sdk.String("nam"),
                            },
                            RadiusInMiles: sdk.Float64(9404.32),
                        },
                    },
                },
                Description: sdk.String("voluptatem"),
                EmploymentTypes: []shared.JobEmploymentTypesEnum{
                    shared.JobEmploymentTypesEnumPerDiem,
                    shared.JobEmploymentTypesEnumPerDiem,
                    shared.JobEmploymentTypesEnumFullTime,
                    shared.JobEmploymentTypesEnumFlyInFlyOut,
                },
                Incentives: sdk.String("ipsum"),
                JobBenefits: []shared.JobJobBenefitsEnum{
                    shared.JobJobBenefitsEnumRetirementPlan,
                },
                JobEndTime: sdk.String("quos"),
                JobLevel: shared.JobJobLevelEnumDirector.ToPointer(),
                JobStartTime: sdk.String("cupiditate"),
                LanguageCode: sdk.String("aperiam"),
                Name: sdk.String("Mike Greenholt"),
                PostingCreateTime: sdk.String("dolorum"),
                PostingExpireTime: sdk.String("architecto"),
                PostingPublishTime: sdk.String("quae"),
                PostingRegion: shared.JobPostingRegionEnumPostingRegionUnspecified.ToPointer(),
                PostingUpdateTime: sdk.String("quas"),
                ProcessingOptions: &shared.ProcessingOptions{
                    DisableStreetAddressResolution: sdk.Bool(false),
                    HTMLSanitization: shared.ProcessingOptionsHTMLSanitizationEnumSimpleFormattingOnly.ToPointer(),
                },
                PromotionValue: sdk.Int(9240),
                Qualifications: sdk.String("est"),
                RequisitionID: sdk.String("repellendus"),
                Responsibilities: sdk.String("porro"),
                Title: sdk.String("Dr."),
                Visibility: shared.JobVisibilityEnumAccountOnly.ToPointer(),
            },
            UpdateMask: sdk.String("facilis"),
        },
        AccessToken: sdk.String("cupiditate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("laudantium"),
        Key: sdk.String("odio"),
        Name: "Jan Schaefer",
        OauthToken: sdk.String("quis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsum"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("voluptate"),
    }, operations.JobsProjectsJobsPatchSecurity{
        Option1: &operations.JobsProjectsJobsPatchSecurityOption1{
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

## JobsProjectsJobsSearch

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
    res, err := s.Projects.JobsProjectsJobsSearch(ctx, operations.JobsProjectsJobsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        SearchJobsRequest: &shared.SearchJobsRequest{
            CustomRankingInfo: &shared.CustomRankingInfo{
                ImportanceLevel: shared.CustomRankingInfoImportanceLevelEnumExtreme.ToPointer(),
                RankingExpression: sdk.String("tenetur"),
            },
            DisableKeywordMatch: sdk.Bool(false),
            DiversificationLevel: shared.SearchJobsRequestDiversificationLevelEnumDisabled.ToPointer(),
            EnableBroadening: sdk.Bool(false),
            HistogramFacets: &shared.HistogramFacets{
                CompensationHistogramFacets: []shared.CompensationHistogramRequest{
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                7992.03,
                                4861.6,
                                6304.48,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumAnnualizedBase.ToPointer(),
                    },
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                4981.4,
                                2930.2,
                                8445.5,
                                8489.44,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumCompensationHistogramRequestTypeUnspecified.ToPointer(),
                    },
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                7733.26,
                                132.36,
                                9742.59,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumBase.ToPointer(),
                    },
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                1481.41,
                                7804.27,
                                9818.3,
                                9850.33,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumBase.ToPointer(),
                    },
                },
                CustomAttributeHistogramFacets: []shared.CustomAttributeHistogramRequest{
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("ducimus"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                6394.73,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("tempora"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                4104.92,
                                1369,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("vel"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                2978.42,
                                1898.48,
                                4011.32,
                                5113.19,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("dicta"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                9807,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                },
                SimpleHistogramFacets: []shared.HistogramFacetsSimpleHistogramFacetsEnum{
                    shared.HistogramFacetsSimpleHistogramFacetsEnumExperienceLevel,
                },
            },
            HistogramQueries: []shared.HistogramQuery{
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("excepturi"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("voluptatibus"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("nostrum"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("sapiente"),
                },
            },
            JobQuery: &shared.JobQuery{
                CommuteFilter: &shared.CommuteFilter{
                    AllowImpreciseAddresses: sdk.Bool(false),
                    CommuteMethod: shared.CommuteFilterCommuteMethodEnumWalking.ToPointer(),
                    DepartureTime: &shared.TimeOfDay{
                        Hours: sdk.Int(906556),
                        Minutes: sdk.Int(411372),
                        Nanos: sdk.Int(774048),
                        Seconds: sdk.Int(359271),
                    },
                    RoadTraffic: shared.CommuteFilterRoadTrafficEnumRoadTrafficUnspecified.ToPointer(),
                    StartCoordinates: &shared.LatLng{
                        Latitude: sdk.Float64(3994.99),
                        Longitude: sdk.Float64(811.01),
                    },
                    TravelDuration: sdk.String("magnam"),
                },
                CompanyDisplayNames: []string{
                    "quo",
                    "consectetur",
                },
                CompanyNames: []string{
                    "aspernatur",
                    "minima",
                    "eaque",
                    "a",
                },
                CompensationFilter: &shared.CompensationFilter{
                    IncludeJobsWithUnspecifiedCompensationRange: sdk.Bool(false),
                    Range: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("libero"),
                            Nanos: sdk.Int(13948),
                            Units: sdk.String("aut"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("deleniti"),
                            Nanos: sdk.Int(770581),
                            Units: sdk.String("aliquam"),
                        },
                    },
                    Type: shared.CompensationFilterTypeEnumFilterTypeUnspecified.ToPointer(),
                    Units: []shared.CompensationFilterUnitsEnum{
                        shared.CompensationFilterUnitsEnumCompensationUnitUnspecified,
                        shared.CompensationFilterUnitsEnumDaily,
                        shared.CompensationFilterUnitsEnumCompensationUnitUnspecified,
                        shared.CompensationFilterUnitsEnumYearly,
                    },
                },
                CustomAttributeFilter: sdk.String("laborum"),
                DisableSpellCheck: sdk.Bool(false),
                EmploymentTypes: []shared.JobQueryEmploymentTypesEnum{
                    shared.JobQueryEmploymentTypesEnumPartTime,
                    shared.JobQueryEmploymentTypesEnumContractToHire,
                    shared.JobQueryEmploymentTypesEnumContractToHire,
                    shared.JobQueryEmploymentTypesEnumPerDiem,
                },
                ExcludedJobs: []string{
                    "assumenda",
                    "nulla",
                    "voluptas",
                },
                JobCategories: []shared.JobQueryJobCategoriesEnum{
                    shared.JobQueryJobCategoriesEnumAdministrativeAndOffice,
                    shared.JobQueryJobCategoriesEnumComputerAndIt,
                    shared.JobQueryJobCategoriesEnumCleaningAndFacilities,
                },
                LanguageCodes: []string{
                    "provident",
                },
                LocationFilters: []shared.LocationFilter{
                    shared.LocationFilter{
                        Address: sdk.String("3424 Judson Ports"),
                        DistanceInMiles: sdk.Float64(4420.15),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(6956.26),
                            Longitude: sdk.Float64(8526.35),
                        },
                        RegionCode: sdk.String("ut"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommuteExcluded.ToPointer(),
                    },
                },
                PublishTimeRange: &shared.TimestampRange{
                    EndTime: sdk.String("suscipit"),
                    StartTime: sdk.String("assumenda"),
                },
                Query: sdk.String("eos"),
                QueryLanguageCode: sdk.String("praesentium"),
            },
            JobView: shared.SearchJobsRequestJobViewEnumJobViewSmall.ToPointer(),
            Offset: sdk.Int(86377),
            OrderBy: sdk.String("ipsa"),
            PageSize: sdk.Int(660040),
            PageToken: sdk.String("quidem"),
            RequestMetadata: &shared.RequestMetadata{
                DeviceInfo: &shared.DeviceInfo{
                    DeviceType: shared.DeviceInfoDeviceTypeEnumWeb.ToPointer(),
                    ID: sdk.String("cdca4251-904e-4523-87e0-bc7178e4796f"),
                },
                Domain: sdk.String("dolores"),
                SessionID: sdk.String("deserunt"),
                UserID: sdk.String("molestiae"),
            },
            RequirePreciseResultSize: sdk.Bool(false),
            SearchMode: shared.SearchJobsRequestSearchModeEnumSearchModeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("praesentium"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("deleniti"),
        Parent: "fugit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("mollitia"),
        UploadProtocol: sdk.String("incidunt"),
    }, operations.JobsProjectsJobsSearchSecurity{
        Option1: &operations.JobsProjectsJobsSearchSecurityOption1{
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

## JobsProjectsJobsSearchForAlert

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

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
    res, err := s.Projects.JobsProjectsJobsSearchForAlert(ctx, operations.JobsProjectsJobsSearchForAlertRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        SearchJobsRequest: &shared.SearchJobsRequest{
            CustomRankingInfo: &shared.CustomRankingInfo{
                ImportanceLevel: shared.CustomRankingInfoImportanceLevelEnumImportanceLevelUnspecified.ToPointer(),
                RankingExpression: sdk.String("minima"),
            },
            DisableKeywordMatch: sdk.Bool(false),
            DiversificationLevel: shared.SearchJobsRequestDiversificationLevelEnumDisabled.ToPointer(),
            EnableBroadening: sdk.Bool(false),
            HistogramFacets: &shared.HistogramFacets{
                CompensationHistogramFacets: []shared.CompensationHistogramRequest{
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                1598.7,
                                1871.31,
                                1294.12,
                                9039.84,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumAnnualizedBase.ToPointer(),
                    },
                },
                CustomAttributeHistogramFacets: []shared.CustomAttributeHistogramRequest{
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("et"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                9105.45,
                                8820.42,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("veritatis"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                8003.79,
                                7241.68,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("vero"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                934.59,
                                9040.45,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                },
                SimpleHistogramFacets: []shared.HistogramFacetsSimpleHistogramFacetsEnum{
                    shared.HistogramFacetsSimpleHistogramFacetsEnumLanguage,
                    shared.HistogramFacetsSimpleHistogramFacetsEnumCountry,
                },
            },
            HistogramQueries: []shared.HistogramQuery{
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("occaecati"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("minima"),
                },
                shared.HistogramQuery{
                    HistogramQuery: sdk.String("distinctio"),
                },
            },
            JobQuery: &shared.JobQuery{
                CommuteFilter: &shared.CommuteFilter{
                    AllowImpreciseAddresses: sdk.Bool(false),
                    CommuteMethod: shared.CommuteFilterCommuteMethodEnumWalking.ToPointer(),
                    DepartureTime: &shared.TimeOfDay{
                        Hours: sdk.Int(27069),
                        Minutes: sdk.Int(636061),
                        Nanos: sdk.Int(731398),
                        Seconds: sdk.Int(240020),
                    },
                    RoadTraffic: shared.CommuteFilterRoadTrafficEnumBusyHour.ToPointer(),
                    StartCoordinates: &shared.LatLng{
                        Latitude: sdk.Float64(1605.38),
                        Longitude: sdk.Float64(97.66),
                    },
                    TravelDuration: sdk.String("minus"),
                },
                CompanyDisplayNames: []string{
                    "sapiente",
                    "consectetur",
                },
                CompanyNames: []string{
                    "blanditiis",
                    "provident",
                },
                CompensationFilter: &shared.CompensationFilter{
                    IncludeJobsWithUnspecifiedCompensationRange: sdk.Bool(false),
                    Range: &shared.CompensationRange{
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
                    Type: shared.CompensationFilterTypeEnumAnnualizedBaseAmount.ToPointer(),
                    Units: []shared.CompensationFilterUnitsEnum{
                        shared.CompensationFilterUnitsEnumOneTime,
                        shared.CompensationFilterUnitsEnumOneTime,
                        shared.CompensationFilterUnitsEnumHourly,
                    },
                },
                CustomAttributeFilter: sdk.String("eveniet"),
                DisableSpellCheck: sdk.Bool(false),
                EmploymentTypes: []shared.JobQueryEmploymentTypesEnum{
                    shared.JobQueryEmploymentTypesEnumPerDiem,
                    shared.JobQueryEmploymentTypesEnumEmploymentTypeUnspecified,
                    shared.JobQueryEmploymentTypesEnumFullTime,
                    shared.JobQueryEmploymentTypesEnumFullTime,
                },
                ExcludedJobs: []string{
                    "culpa",
                    "aliquid",
                    "tenetur",
                },
                JobCategories: []shared.JobQueryJobCategoriesEnum{
                    shared.JobQueryJobCategoriesEnumSportsFitnessAndRecreation,
                },
                LanguageCodes: []string{
                    "in",
                    "eius",
                },
                LocationFilters: []shared.LocationFilter{
                    shared.LocationFilter{
                        Address: sdk.String("703 Carter Harbor"),
                        DistanceInMiles: sdk.Float64(4438.79),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(3567.07),
                            Longitude: sdk.Float64(3917.74),
                        },
                        RegionCode: sdk.String("aut"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommuteAllowed.ToPointer(),
                    },
                    shared.LocationFilter{
                        Address: sdk.String("84596 Leonard Village"),
                        DistanceInMiles: sdk.Float64(984.78),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(8694.89),
                            Longitude: sdk.Float64(920.27),
                        },
                        RegionCode: sdk.String("voluptate"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommutePreferenceUnspecified.ToPointer(),
                    },
                    shared.LocationFilter{
                        Address: sdk.String("02268 Joyce Bridge"),
                        DistanceInMiles: sdk.Float64(5130.75),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(4287.96),
                            Longitude: sdk.Float64(6498.32),
                        },
                        RegionCode: sdk.String("ab"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommuteAllowed.ToPointer(),
                    },
                },
                PublishTimeRange: &shared.TimestampRange{
                    EndTime: sdk.String("non"),
                    StartTime: sdk.String("voluptatem"),
                },
                Query: sdk.String("dolor"),
                QueryLanguageCode: sdk.String("occaecati"),
            },
            JobView: shared.SearchJobsRequestJobViewEnumJobViewIDOnly.ToPointer(),
            Offset: sdk.Int(771089),
            OrderBy: sdk.String("explicabo"),
            PageSize: sdk.Int(376226),
            PageToken: sdk.String("aut"),
            RequestMetadata: &shared.RequestMetadata{
                DeviceInfo: &shared.DeviceInfo{
                    DeviceType: shared.DeviceInfoDeviceTypeEnumAndroid.ToPointer(),
                    ID: sdk.String("1f93f5f0-642d-4ac7-af51-5cc413aa63aa"),
                },
                Domain: sdk.String("recusandae"),
                SessionID: sdk.String("totam"),
                UserID: sdk.String("fugiat"),
            },
            RequirePreciseResultSize: sdk.Bool(false),
            SearchMode: shared.SearchJobsRequestSearchModeEnumJobSearch.ToPointer(),
        },
        AccessToken: sdk.String("ducimus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("labore"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("facilis"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
    }, operations.JobsProjectsJobsSearchForAlertSecurity{
        Option1: &operations.JobsProjectsJobsSearchForAlertSecurityOption1{
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

## JobsProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

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
    res, err := s.Projects.JobsProjectsOperationsGet(ctx, operations.JobsProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("assumenda"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("recusandae"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("aperiam"),
        Name: "Glenn Kirlin",
        OauthToken: sdk.String("facere"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("numquam"),
        UploadType: sdk.String("doloribus"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.JobsProjectsOperationsGetSecurity{
        Option1: &operations.JobsProjectsOperationsGetSecurityOption1{
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
