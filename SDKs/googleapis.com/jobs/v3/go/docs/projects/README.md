# Projects

### Available Operations

* [JobsProjectsClientEventsCreate](#jobsprojectsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [JobsProjectsCompaniesCreate](#jobsprojectscompaniescreate) - Creates a new company entity.
* [JobsProjectsCompaniesList](#jobsprojectscompanieslist) - Lists all companies associated with the service account.
* [JobsProjectsComplete](#jobsprojectscomplete) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [JobsProjectsJobsBatchDelete](#jobsprojectsjobsbatchdelete) - Deletes a list of Jobs by filter.
* [JobsProjectsJobsCreate](#jobsprojectsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsJobsDelete](#jobsprojectsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsJobsGet](#jobsprojectsjobsget) - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* [JobsProjectsJobsList](#jobsprojectsjobslist) - Lists jobs by filter.
* [JobsProjectsJobsPatch](#jobsprojectsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [JobsProjectsJobsSearch](#jobsprojectsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [JobsProjectsJobsSearchForAlert](#jobsprojectsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

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

## JobsProjectsJobsGet

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
    res, err := s.Projects.JobsProjectsJobsGet(ctx, operations.JobsProjectsJobsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("blanditiis"),
        Name: "Gary Mayert",
        OauthToken: sdk.String("asperiores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("earum"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("iste"),
    }, operations.JobsProjectsJobsGetSecurity{
        Option1: &operations.JobsProjectsJobsGetSecurityOption1{
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
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("nobis"),
        Filter: sdk.String("libero"),
        JobView: operations.JobsProjectsJobsListJobViewEnumJobViewFull.ToPointer(),
        Key: sdk.String("quaerat"),
        OauthToken: sdk.String("quos"),
        PageSize: sdk.Int64(398221),
        PageToken: sdk.String("dolorem"),
        Parent: "dolorem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("qui"),
        UploadProtocol: sdk.String("ipsum"),
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
                    "cum",
                    "voluptate",
                    "dignissimos",
                },
                ApplicationInfo: &shared.ApplicationInfo{
                    Emails: []string{
                        "amet",
                        "dolorum",
                        "numquam",
                        "veritatis",
                    },
                    Instruction: sdk.String("ipsa"),
                    Uris: []string{
                        "iure",
                    },
                },
                CompanyDisplayName: sdk.String("odio"),
                CompanyName: sdk.String("quaerat"),
                CompensationInfo: &shared.CompensationInfo{
                    AnnualizedBaseCompensationRange: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("accusamus"),
                            Nanos: sdk.Int(696344),
                            Units: sdk.String("voluptatibus"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("voluptas"),
                            Nanos: sdk.Int(617658),
                            Units: sdk.String("eos"),
                        },
                    },
                    AnnualizedTotalCompensationRange: &shared.CompensationRange{
                        MaxCompensation: &shared.Money{
                            CurrencyCode: sdk.String("atque"),
                            Nanos: sdk.Int(24678),
                            Units: sdk.String("fugiat"),
                        },
                        MinCompensation: &shared.Money{
                            CurrencyCode: sdk.String("ab"),
                            Nanos: sdk.Int(743835),
                            Units: sdk.String("dolorum"),
                        },
                    },
                    Entries: []shared.CompensationEntry{
                        shared.CompensationEntry{
                            Amount: &shared.Money{
                                CurrencyCode: sdk.String("voluptate"),
                                Nanos: sdk.Int(677082),
                                Units: sdk.String("deleniti"),
                            },
                            Description: sdk.String("omnis"),
                            ExpectedUnitsPerYear: sdk.Float64(8966.72),
                            Range: &shared.CompensationRange{
                                MaxCompensation: &shared.Money{
                                    CurrencyCode: sdk.String("distinctio"),
                                    Nanos: sdk.Int(990339),
                                    Units: sdk.String("nihil"),
                                },
                                MinCompensation: &shared.Money{
                                    CurrencyCode: sdk.String("ipsum"),
                                    Nanos: sdk.Int(456015),
                                    Units: sdk.String("id"),
                                },
                            },
                            Type: shared.CompensationEntryTypeEnumOtherCompensationType.ToPointer(),
                            Unit: shared.CompensationEntryUnitEnumDaily.ToPointer(),
                        },
                        shared.CompensationEntry{
                            Amount: &shared.Money{
                                CurrencyCode: sdk.String("aspernatur"),
                                Nanos: sdk.Int(20651),
                                Units: sdk.String("amet"),
                            },
                            Description: sdk.String("optio"),
                            ExpectedUnitsPerYear: sdk.Float64(8815.86),
                            Range: &shared.CompensationRange{
                                MaxCompensation: &shared.Money{
                                    CurrencyCode: sdk.String("ad"),
                                    Nanos: sdk.Int(904425),
                                    Units: sdk.String("suscipit"),
                                },
                                MinCompensation: &shared.Money{
                                    CurrencyCode: sdk.String("deserunt"),
                                    Nanos: sdk.Int(588317),
                                    Units: sdk.String("minima"),
                                },
                            },
                            Type: shared.CompensationEntryTypeEnumTips.ToPointer(),
                            Unit: shared.CompensationEntryUnitEnumMonthly.ToPointer(),
                        },
                    },
                },
                CustomAttributes: map[string]shared.CustomAttribute{
                    "alias": shared.CustomAttribute{
                        Filterable: sdk.Bool(false),
                        LongValues: []string{
                            "quaerat",
                            "tempora",
                            "vel",
                            "quod",
                        },
                        StringValues: []string{
                            "qui",
                            "dolorum",
                            "a",
                            "esse",
                        },
                    },
                    "harum": shared.CustomAttribute{
                        Filterable: sdk.Bool(false),
                        LongValues: []string{
                            "ipsum",
                            "quisquam",
                        },
                        StringValues: []string{
                            "amet",
                            "tempore",
                            "accusamus",
                            "numquam",
                        },
                    },
                    "enim": shared.CustomAttribute{
                        Filterable: sdk.Bool(false),
                        LongValues: []string{
                            "sapiente",
                        },
                        StringValues: []string{
                            "nihil",
                            "sit",
                            "expedita",
                        },
                    },
                },
                DegreeTypes: []shared.JobDegreeTypesEnum{
                    shared.JobDegreeTypesEnumPrimaryEducation,
                },
                Department: sdk.String("vel"),
                DerivedInfo: &shared.JobDerivedInfo{
                    JobCategories: []shared.JobDerivedInfoJobCategoriesEnum{
                        shared.JobDerivedInfoJobCategoriesEnumEducation,
                        shared.JobDerivedInfoJobCategoriesEnumMediaCommunicationsAndWriting,
                        shared.JobDerivedInfoJobCategoriesEnumHealthcare,
                    },
                    Locations: []shared.Location{
                        shared.Location{
                            LatLng: &shared.LatLng{
                                Latitude: sdk.Float64(2776.28),
                                Longitude: sdk.Float64(1864.58),
                            },
                            LocationType: shared.LocationLocationTypeEnumSubLocality.ToPointer(),
                            PostalAddress: &shared.PostalAddress{
                                AddressLines: []string{
                                    "pariatur",
                                    "soluta",
                                    "dicta",
                                    "laborum",
                                },
                                AdministrativeArea: sdk.String("totam"),
                                LanguageCode: sdk.String("incidunt"),
                                Locality: sdk.String("aspernatur"),
                                Organization: sdk.String("dolores"),
                                PostalCode: sdk.String("73458-1211"),
                                Recipients: []string{
                                    "sunt",
                                    "ullam",
                                },
                                RegionCode: sdk.String("nam"),
                                Revision: sdk.Int(940432),
                                SortingCode: sdk.String("voluptatem"),
                                Sublocality: sdk.String("cumque"),
                            },
                            RadiusInMiles: sdk.Float64(7469.94),
                        },
                    },
                },
                Description: sdk.String("nobis"),
                EmploymentTypes: []shared.JobEmploymentTypesEnum{
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
            DisableKeywordMatch: sdk.Bool(false),
            DiversificationLevel: shared.SearchJobsRequestDiversificationLevelEnumSimple.ToPointer(),
            EnableBroadening: sdk.Bool(false),
            HistogramFacets: &shared.HistogramFacets{
                CompensationHistogramFacets: []shared.CompensationHistogramRequest{
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                9413.78,
                                7155.61,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumAnnualizedTotal.ToPointer(),
                    },
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                6304.48,
                                7085.48,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumAnnualizedTotal.ToPointer(),
                    },
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                2930.2,
                                8445.5,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumAnnualizedTotal.ToPointer(),
                    },
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                6178.77,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumAnnualizedTotal.ToPointer(),
                    },
                },
                CustomAttributeHistogramFacets: []shared.CustomAttributeHistogramRequest{
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("voluptatibus"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                8623.1,
                                1481.41,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                },
                SimpleHistogramFacets: []shared.HistogramFacetsSimpleHistogramFacetsEnum{
                    shared.HistogramFacetsSimpleHistogramFacetsEnumBaseCompensationUnit,
                    shared.HistogramFacetsSimpleHistogramFacetsEnumBaseCompensationUnit,
                    shared.HistogramFacetsSimpleHistogramFacetsEnumCountry,
                    shared.HistogramFacetsSimpleHistogramFacetsEnumCategory,
                },
            },
            JobQuery: &shared.JobQuery{
                CommuteFilter: &shared.CommuteFilter{
                    AllowImpreciseAddresses: sdk.Bool(false),
                    CommuteMethod: shared.CommuteFilterCommuteMethodEnumDriving.ToPointer(),
                    DepartureTime: &shared.TimeOfDay{
                        Hours: sdk.Int(4048),
                        Minutes: sdk.Int(639473),
                        Nanos: sdk.Int(269479),
                        Seconds: sdk.Int(368584),
                    },
                    RoadTraffic: shared.CommuteFilterRoadTrafficEnumTrafficFree.ToPointer(),
                    StartCoordinates: &shared.LatLng{
                        Latitude: sdk.Float64(1369),
                        Longitude: sdk.Float64(4282.24),
                    },
                    TravelDuration: sdk.String("possimus"),
                },
                CompanyDisplayNames: []string{
                    "ratione",
                    "ex",
                },
                CompanyNames: []string{
                    "dicta",
                    "dolor",
                    "maiores",
                },
                CompensationFilter: &shared.CompensationFilter{
                    IncludeJobsWithUnspecifiedCompensationRange: sdk.Bool(false),
                    Range: &shared.CompensationRange{
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
                    Type: shared.CompensationFilterTypeEnumAnnualizedTotalAmount.ToPointer(),
                    Units: []shared.CompensationFilterUnitsEnum{
                        shared.CompensationFilterUnitsEnumOtherCompensationUnit,
                        shared.CompensationFilterUnitsEnumWeekly,
                        shared.CompensationFilterUnitsEnumOneTime,
                        shared.CompensationFilterUnitsEnumDaily,
                    },
                },
                CustomAttributeFilter: sdk.String("veniam"),
                DisableSpellCheck: sdk.Bool(false),
                EmploymentTypes: []shared.JobQueryEmploymentTypesEnum{
                    shared.JobQueryEmploymentTypesEnumEmploymentTypeUnspecified,
                    shared.JobQueryEmploymentTypesEnumContractor,
                },
                JobCategories: []shared.JobQueryJobCategoriesEnum{
                    shared.JobQueryJobCategoriesEnumRealEstate,
                    shared.JobQueryJobCategoriesEnumCleaningAndFacilities,
                },
                LanguageCodes: []string{
                    "aspernatur",
                    "minima",
                    "eaque",
                    "a",
                },
                LocationFilters: []shared.LocationFilter{
                    shared.LocationFilter{
                        Address: sdk.String("05731 Block Fields"),
                        DistanceInMiles: sdk.Float64(896.03),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(6774.12),
                            Longitude: sdk.Float64(6720.48),
                        },
                        RegionCode: sdk.String("placeat"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommutePreferenceUnspecified.ToPointer(),
                    },
                    shared.LocationFilter{
                        Address: sdk.String("4758 Hoeger Ridge"),
                        DistanceInMiles: sdk.Float64(965.49),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(2703.28),
                            Longitude: sdk.Float64(2561.39),
                        },
                        RegionCode: sdk.String("explicabo"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommuteAllowed.ToPointer(),
                    },
                    shared.LocationFilter{
                        Address: sdk.String("43424 Judson Ports"),
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
            DisableKeywordMatch: sdk.Bool(false),
            DiversificationLevel: shared.SearchJobsRequestDiversificationLevelEnumDiversificationLevelUnspecified.ToPointer(),
            EnableBroadening: sdk.Bool(false),
            HistogramFacets: &shared.HistogramFacets{
                CompensationHistogramFacets: []shared.CompensationHistogramRequest{
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                1470.14,
                                9564.06,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumCompensationHistogramRequestTypeUnspecified.ToPointer(),
                    },
                    shared.CompensationHistogramRequest{
                        BucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                1294.12,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        Type: shared.CompensationHistogramRequestTypeEnumAnnualizedTotal.ToPointer(),
                    },
                },
                CustomAttributeHistogramFacets: []shared.CustomAttributeHistogramRequest{
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("atque"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                4569.11,
                            },
                            RequiresMinMax: sdk.Bool(false),
                        },
                        StringValueHistogram: sdk.Bool(false),
                    },
                    shared.CustomAttributeHistogramRequest{
                        Key: sdk.String("eveniet"),
                        LongValueHistogramBucketingOption: &shared.NumericBucketingOption{
                            BucketBounds: []float64{
                                829.71,
                                4586.04,
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
            JobQuery: &shared.JobQuery{
                CommuteFilter: &shared.CommuteFilter{
                    AllowImpreciseAddresses: sdk.Bool(false),
                    CommuteMethod: shared.CommuteFilterCommuteMethodEnumTransit.ToPointer(),
                    DepartureTime: &shared.TimeOfDay{
                        Hours: sdk.Int(580197),
                        Minutes: sdk.Int(327720),
                        Nanos: sdk.Int(716244),
                        Seconds: sdk.Int(756779),
                    },
                    RoadTraffic: shared.CommuteFilterRoadTrafficEnumRoadTrafficUnspecified.ToPointer(),
                    StartCoordinates: &shared.LatLng{
                        Latitude: sdk.Float64(6360.61),
                        Longitude: sdk.Float64(7313.98),
                    },
                    TravelDuration: sdk.String("adipisci"),
                },
                CompanyDisplayNames: []string{
                    "consequuntur",
                    "consequatur",
                    "minus",
                    "quaerat",
                },
                CompanyNames: []string{
                    "consectetur",
                    "esse",
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
                JobCategories: []shared.JobQueryJobCategoriesEnum{
                    shared.JobQueryJobCategoriesEnumManufacturingAndWarehouse,
                    shared.JobQueryJobCategoriesEnumEntertainmentAndTravel,
                    shared.JobQueryJobCategoriesEnumSportsFitnessAndRecreation,
                },
                LanguageCodes: []string{
                    "earum",
                },
                LocationFilters: []shared.LocationFilter{
                    shared.LocationFilter{
                        Address: sdk.String("2787 Elnora Vista"),
                        DistanceInMiles: sdk.Float64(1197.71),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(3553.69),
                            Longitude: sdk.Float64(4438.79),
                        },
                        RegionCode: sdk.String("ullam"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommuteExcluded.ToPointer(),
                    },
                    shared.LocationFilter{
                        Address: sdk.String("51845 Parisian Club"),
                        DistanceInMiles: sdk.Float64(6091.78),
                        LatLng: &shared.LatLng{
                            Latitude: sdk.Float64(9453.02),
                            Longitude: sdk.Float64(984.78),
                        },
                        RegionCode: sdk.String("at"),
                        TelecommutePreference: shared.LocationFilterTelecommutePreferenceEnumTelecommutePreferenceUnspecified.ToPointer(),
                    },
                },
                PublishTimeRange: &shared.TimestampRange{
                    EndTime: sdk.String("voluptate"),
                    StartTime: sdk.String("ipsa"),
                },
                Query: sdk.String("minima"),
                QueryLanguageCode: sdk.String("veritatis"),
            },
            JobView: shared.SearchJobsRequestJobViewEnumJobViewIDOnly.ToPointer(),
            Offset: sdk.Int(237173),
            OrderBy: sdk.String("iste"),
            PageSize: sdk.Int(839513),
            PageToken: sdk.String("accusantium"),
            RequestMetadata: &shared.RequestMetadata{
                DeviceInfo: &shared.DeviceInfo{
                    DeviceType: shared.DeviceInfoDeviceTypeEnumAndroid.ToPointer(),
                    ID: sdk.String("086a1840-394c-4260-b1f9-3f5f0642dac7"),
                },
                Domain: sdk.String("officia"),
                SessionID: sdk.String("asperiores"),
                UserID: sdk.String("nemo"),
            },
            RequirePreciseResultSize: sdk.Bool(false),
            SearchMode: shared.SearchJobsRequestSearchModeEnumSearchModeUnspecified.ToPointer(),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("labore"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("adipisci"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("id"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("velit"),
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
