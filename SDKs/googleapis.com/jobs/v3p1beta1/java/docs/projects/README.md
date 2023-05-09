# projects

### Available Operations

* [jobsProjectsClientEventsCreate](#jobsprojectsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [jobsProjectsCompaniesCreate](#jobsprojectscompaniescreate) - Creates a new company entity.
* [jobsProjectsCompaniesList](#jobsprojectscompanieslist) - Lists all companies associated with the service account.
* [jobsProjectsComplete](#jobsprojectscomplete) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [jobsProjectsJobsBatchDelete](#jobsprojectsjobsbatchdelete) - Deletes a list of Jobs by filter.
* [jobsProjectsJobsCreate](#jobsprojectsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsDelete](#jobsprojectsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsList](#jobsprojectsjobslist) - Lists jobs by filter.
* [jobsProjectsJobsPatch](#jobsprojectsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsSearch](#jobsprojectsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [jobsProjectsJobsSearchForAlert](#jobsprojectsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* [jobsProjectsOperationsGet](#jobsprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

## jobsProjectsClientEventsCreate

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientEvent;
import org.openapis.openapi.models.shared.CreateClientEventRequest;
import org.openapis.openapi.models.shared.JobEvent;
import org.openapis.openapi.models.shared.JobEventTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsClientEventsCreateRequest req = new JobsProjectsClientEventsCreateRequest("ab") {{
                dollarXgafv = XgafvEnum.ONE;
                createClientEventRequest = new CreateClientEventRequest() {{
                    clientEvent = new ClientEvent() {{
                        createTime = "veritatis";
                        eventId = "deserunt";
                        extraInfo = new java.util.HashMap<String, String>() {{
                            put("ipsam", "repellendus");
                        }};
                        jobEvent = new JobEvent() {{
                            jobs = new String[]{{
                                add("quo"),
                                add("odit"),
                                add("at"),
                                add("at"),
                            }};
                            type = JobEventTypeEnum.NOT_INTERESTED;
                        }};;
                        parentEventId = "molestiae";
                        requestId = "quod";
                    }};;
                }};;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "totam";
                fields = "porro";
                key = "dolorum";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "officia";
                uploadProtocol = "occaecati";
            }};            

            JobsProjectsClientEventsCreateResponse res = sdk.projects.jobsProjectsClientEventsCreate(req, new JobsProjectsClientEventsCreateSecurity() {{
                option1 = new JobsProjectsClientEventsCreateSecurityOption1("fugit", "deleniti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.clientEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsCompaniesCreate

Creates a new company entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Company;
import org.openapis.openapi.models.shared.CompanyDerivedInfo;
import org.openapis.openapi.models.shared.CompanySizeEnum;
import org.openapis.openapi.models.shared.CreateCompanyRequest;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.LocationLocationTypeEnum;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsCompaniesCreateRequest req = new JobsProjectsCompaniesCreateRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                createCompanyRequest = new CreateCompanyRequest() {{
                    company = new Company() {{
                        careerSiteUri = "totam";
                        derivedInfo = new CompanyDerivedInfo() {{
                            headquartersLocation = new Location() {{
                                latLng = new LatLng() {{
                                    latitude = 1059.07;
                                    longitude = 4146.62;
                                }};;
                                locationType = LocationLocationTypeEnum.POSTAL_CODE;
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("qui"),
                                        add("impedit"),
                                    }};
                                    administrativeArea = "cum";
                                    languageCode = "esse";
                                    locality = "ipsum";
                                    organization = "excepturi";
                                    postalCode = "03616";
                                    recipients = new String[]{{
                                        add("natus"),
                                    }};
                                    regionCode = "laboriosam";
                                    revision = 943749;
                                    sortingCode = "saepe";
                                    sublocality = "fuga";
                                }};;
                                radiusInMiles = 4499.5;
                            }};;
                        }};;
                        displayName = "corporis";
                        eeoText = "iste";
                        externalId = "iure";
                        headquartersAddress = "saepe";
                        hiringAgency = false;
                        imageUri = "quidem";
                        keywordSearchableJobCustomAttributes = new String[]{{
                            add("ipsa"),
                        }};
                        name = "Carlton O'Hara";
                        size = CompanySizeEnum.MINI;
                        suspended = false;
                        websiteUri = "corporis";
                    }};;
                }};;
                accessToken = "explicabo";
                alt = AltEnum.PROTO;
                callback = "enim";
                fields = "omnis";
                key = "nemo";
                oauthToken = "minima";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "accusantium";
                uploadProtocol = "iure";
            }};            

            JobsProjectsCompaniesCreateResponse res = sdk.projects.jobsProjectsCompaniesCreate(req, new JobsProjectsCompaniesCreateSecurity() {{
                option1 = new JobsProjectsCompaniesCreateSecurityOption1("culpa", "doloribus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.company != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsCompaniesList

Lists all companies associated with the service account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesListRequest;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesListResponse;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesListSecurity;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesListSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsCompaniesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsCompaniesListRequest req = new JobsProjectsCompaniesListRequest("sapiente") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.JSON;
                callback = "culpa";
                fields = "consequuntur";
                key = "repellat";
                oauthToken = "mollitia";
                pageSize = 581850L;
                pageToken = "numquam";
                prettyPrint = false;
                quotaUser = "commodi";
                requireOpenJobs = false;
                uploadType = "quam";
                uploadProtocol = "molestiae";
            }};            

            JobsProjectsCompaniesListResponse res = sdk.projects.jobsProjectsCompaniesList(req, new JobsProjectsCompaniesListSecurity() {{
                option1 = new JobsProjectsCompaniesListSecurityOption1("velit", "error") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listCompaniesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsComplete

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsCompleteRequest;
import org.openapis.openapi.models.operations.JobsProjectsCompleteResponse;
import org.openapis.openapi.models.operations.JobsProjectsCompleteScopeEnum;
import org.openapis.openapi.models.operations.JobsProjectsCompleteSecurity;
import org.openapis.openapi.models.operations.JobsProjectsCompleteSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsCompleteSecurityOption2;
import org.openapis.openapi.models.operations.JobsProjectsCompleteTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsCompleteRequest req = new JobsProjectsCompleteRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "animi";
                companyName = "enim";
                fields = "odit";
                key = "quo";
                languageCode = "sequi";
                languageCodes = new String[]{{
                    add("ipsam"),
                    add("id"),
                    add("possimus"),
                    add("aut"),
                }};
                oauthToken = "quasi";
                pageSize = 622846L;
                prettyPrint = false;
                query = "temporibus";
                quotaUser = "laborum";
                scope = JobsProjectsCompleteScopeEnum.COMPLETION_SCOPE_UNSPECIFIED;
                type = JobsProjectsCompleteTypeEnum.COMBINED;
                uploadType = "voluptatibus";
                uploadProtocol = "vero";
            }};            

            JobsProjectsCompleteResponse res = sdk.projects.jobsProjectsComplete(req, new JobsProjectsCompleteSecurity() {{
                option1 = new JobsProjectsCompleteSecurityOption1("nihil", "praesentium") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.completeQueryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsJobsBatchDelete

Deletes a list of Jobs by filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsJobsBatchDeleteRequest;
import org.openapis.openapi.models.operations.JobsProjectsJobsBatchDeleteResponse;
import org.openapis.openapi.models.operations.JobsProjectsJobsBatchDeleteSecurity;
import org.openapis.openapi.models.operations.JobsProjectsJobsBatchDeleteSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsJobsBatchDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeleteJobsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsJobsBatchDeleteRequest req = new JobsProjectsJobsBatchDeleteRequest("voluptatibus") {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeleteJobsRequest = new BatchDeleteJobsRequest() {{
                    filter = "omnis";
                }};;
                accessToken = "voluptate";
                alt = AltEnum.PROTO;
                callback = "perferendis";
                fields = "doloremque";
                key = "reprehenderit";
                oauthToken = "ut";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "dicta";
                uploadProtocol = "corporis";
            }};            

            JobsProjectsJobsBatchDeleteResponse res = sdk.projects.jobsProjectsJobsBatchDelete(req, new JobsProjectsJobsBatchDeleteSecurity() {{
                option1 = new JobsProjectsJobsBatchDeleteSecurityOption1("dolore", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsJobsCreate

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsJobsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsJobsCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsJobsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsJobsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationInfo;
import org.openapis.openapi.models.shared.CompensationEntry;
import org.openapis.openapi.models.shared.CompensationEntryTypeEnum;
import org.openapis.openapi.models.shared.CompensationEntryUnitEnum;
import org.openapis.openapi.models.shared.CompensationInfo;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CreateJobRequest;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.JobDegreeTypesEnum;
import org.openapis.openapi.models.shared.JobDerivedInfo;
import org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum;
import org.openapis.openapi.models.shared.JobEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobJobBenefitsEnum;
import org.openapis.openapi.models.shared.JobJobLevelEnum;
import org.openapis.openapi.models.shared.JobPostingRegionEnum;
import org.openapis.openapi.models.shared.JobVisibilityEnum;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.LocationLocationTypeEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.ProcessingOptions;
import org.openapis.openapi.models.shared.ProcessingOptionsHtmlSanitizationEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsJobsCreateRequest req = new JobsProjectsJobsCreateRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                createJobRequest = new CreateJobRequest() {{
                    job = new Job() {{
                        addresses = new String[]{{
                            add("accusamus"),
                            add("commodi"),
                        }};
                        applicationInfo = new ApplicationInfo() {{
                            emails = new String[]{{
                                add("quae"),
                                add("ipsum"),
                                add("quidem"),
                                add("molestias"),
                            }};
                            instruction = "excepturi";
                            uris = new String[]{{
                                add("modi"),
                                add("praesentium"),
                                add("rem"),
                                add("voluptates"),
                            }};
                        }};;
                        companyDisplayName = "quasi";
                        companyName = "repudiandae";
                        compensationInfo = new CompensationInfo() {{
                            annualizedBaseCompensationRange = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "sint";
                                    nanos = 83112;
                                    units = "itaque";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "incidunt";
                                    nanos = 318569;
                                    units = "consequatur";
                                }};;
                            }};;
                            annualizedTotalCompensationRange = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "est";
                                    nanos = 842342;
                                    units = "explicabo";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "deserunt";
                                    nanos = 716327;
                                    units = "quibusdam";
                                }};;
                            }};;
                            entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                add(new CompensationEntry() {{
                                    amount = new Money() {{
                                        currencyCode = "modi";
                                        nanos = 183191;
                                        units = "aliquid";
                                    }};
                                    description = "cupiditate";
                                    expectedUnitsPerYear = 5528.22;
                                    range = new CompensationRange() {{
                                        maxCompensation = new Money() {{
                                            currencyCode = "perferendis";
                                            nanos = 164940;
                                            units = "assumenda";
                                        }};
                                        minCompensation = new Money() {{
                                            currencyCode = "ipsam";
                                            nanos = 4695;
                                            units = "fugit";
                                        }};
                                    }};
                                    type = CompensationEntryTypeEnum.COMMISSIONS;
                                    unit = CompensationEntryUnitEnum.MONTHLY;
                                }}),
                                add(new CompensationEntry() {{
                                    amount = new Money() {{
                                        currencyCode = "tempora";
                                        nanos = 703737;
                                        units = "tempore";
                                    }};
                                    description = "labore";
                                    expectedUnitsPerYear = 9621.89;
                                    range = new CompensationRange() {{
                                        maxCompensation = new Money() {{
                                            currencyCode = "eum";
                                            nanos = 248753;
                                            units = "eligendi";
                                        }};
                                        minCompensation = new Money() {{
                                            currencyCode = "sint";
                                            nanos = 396098;
                                            units = "provident";
                                        }};
                                    }};
                                    type = CompensationEntryTypeEnum.OTHER_COMPENSATION_TYPE;
                                    unit = CompensationEntryUnitEnum.MONTHLY;
                                }}),
                            }};
                        }};;
                        customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                            put("dolor", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("a"),
                                    add("dolorum"),
                                    add("in"),
                                    add("in"),
                                }};
                                stringValues = new String[]{{
                                    add("maiores"),
                                    add("rerum"),
                                    add("dicta"),
                                    add("magnam"),
                                }};
                            }});
                            put("cumque", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("ea"),
                                    add("aliquid"),
                                    add("laborum"),
                                    add("accusamus"),
                                }};
                                stringValues = new String[]{{
                                    add("occaecati"),
                                }};
                            }});
                            put("enim", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("delectus"),
                                    add("quidem"),
                                    add("provident"),
                                    add("nam"),
                                }};
                                stringValues = new String[]{{
                                    add("blanditiis"),
                                    add("deleniti"),
                                    add("sapiente"),
                                }};
                            }});
                        }};
                        degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                            add(JobDegreeTypesEnum.ASSOCIATES_OR_EQUIVALENT),
                        }};
                        department = "nisi";
                        derivedInfo = new JobDerivedInfo() {{
                            jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                add(JobDerivedInfoJobCategoriesEnum.MANUFACTURING_AND_WAREHOUSE),
                                add(JobDerivedInfoJobCategoriesEnum.MANAGEMENT),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    latLng = new LatLng() {{
                                        latitude = 191.93;
                                        longitude = 4701.32;
                                    }};
                                    locationType = LocationLocationTypeEnum.SUB_ADMINISTRATIVE_AREA;
                                    postalAddress = new PostalAddress() {{
                                        addressLines = new String[]{{
                                            add("id"),
                                            add("labore"),
                                            add("labore"),
                                        }};
                                        administrativeArea = "suscipit";
                                        languageCode = "natus";
                                        locality = "nobis";
                                        organization = "eum";
                                        postalCode = "11205-3555";
                                        recipients = new String[]{{
                                            add("mollitia"),
                                        }};
                                        regionCode = "reiciendis";
                                        revision = 652103;
                                        sortingCode = "ad";
                                        sublocality = "eum";
                                    }};
                                    radiusInMiles = 2212.62;
                                }}),
                                add(new Location() {{
                                    latLng = new LatLng() {{
                                        latitude = 8965.47;
                                        longitude = 1412.64;
                                    }};
                                    locationType = LocationLocationTypeEnum.LOCALITY;
                                    postalAddress = new PostalAddress() {{
                                        addressLines = new String[]{{
                                            add("iure"),
                                        }};
                                        administrativeArea = "doloribus";
                                        languageCode = "debitis";
                                        locality = "eius";
                                        organization = "maxime";
                                        postalCode = "74109-3749";
                                        recipients = new String[]{{
                                            add("sed"),
                                            add("saepe"),
                                            add("pariatur"),
                                            add("accusantium"),
                                        }};
                                        regionCode = "consequuntur";
                                        revision = 508315;
                                        sortingCode = "natus";
                                        sublocality = "magni";
                                    }};
                                    radiusInMiles = 1238.2;
                                }}),
                            }};
                        }};;
                        description = "quo";
                        employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                            add(JobEmploymentTypesEnum.FLY_IN_FLY_OUT),
                            add(JobEmploymentTypesEnum.PER_DIEM),
                            add(JobEmploymentTypesEnum.CONTRACT_TO_HIRE),
                            add(JobEmploymentTypesEnum.INTERN),
                        }};
                        incentives = "odit";
                        jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                            add(JobJobBenefitsEnum.JOB_BENEFIT_UNSPECIFIED),
                            add(JobJobBenefitsEnum.JOB_BENEFIT_UNSPECIFIED),
                        }};
                        jobEndTime = "maiores";
                        jobLevel = JobJobLevelEnum.DIRECTOR;
                        jobStartTime = "ipsam";
                        languageCode = "voluptate";
                        name = "Candice Beatty";
                        postingCreateTime = "voluptatibus";
                        postingExpireTime = "perferendis";
                        postingPublishTime = "fugiat";
                        postingRegion = JobPostingRegionEnum.POSTING_REGION_UNSPECIFIED;
                        postingUpdateTime = "aut";
                        processingOptions = new ProcessingOptions() {{
                            disableStreetAddressResolution = false;
                            htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.SIMPLE_FORMATTING_ONLY;
                        }};;
                        promotionValue = 359978;
                        qualifications = "hic";
                        requisitionId = "libero";
                        responsibilities = "nobis";
                        title = "Mr.";
                        visibility = JobVisibilityEnum.ACCOUNT_ONLY;
                    }};;
                }};;
                accessToken = "totam";
                alt = AltEnum.MEDIA;
                callback = "eaque";
                fields = "quis";
                key = "nesciunt";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "dolores";
                uploadProtocol = "minus";
            }};            

            JobsProjectsJobsCreateResponse res = sdk.projects.jobsProjectsJobsCreate(req, new JobsProjectsJobsCreateSecurity() {{
                option1 = new JobsProjectsJobsCreateSecurityOption1("quam", "dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsJobsDelete

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsJobsDeleteRequest;
import org.openapis.openapi.models.operations.JobsProjectsJobsDeleteResponse;
import org.openapis.openapi.models.operations.JobsProjectsJobsDeleteSecurity;
import org.openapis.openapi.models.operations.JobsProjectsJobsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsJobsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsJobsDeleteRequest req = new JobsProjectsJobsDeleteRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "hic";
                alt = AltEnum.PROTO;
                callback = "omnis";
                fields = "facilis";
                key = "perspiciatis";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "consequuntur";
                uploadProtocol = "blanditiis";
            }};            

            JobsProjectsJobsDeleteResponse res = sdk.projects.jobsProjectsJobsDelete(req, new JobsProjectsJobsDeleteSecurity() {{
                option1 = new JobsProjectsJobsDeleteSecurityOption1("error", "eaque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsJobsList

Lists jobs by filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsJobsListJobViewEnum;
import org.openapis.openapi.models.operations.JobsProjectsJobsListRequest;
import org.openapis.openapi.models.operations.JobsProjectsJobsListResponse;
import org.openapis.openapi.models.operations.JobsProjectsJobsListSecurity;
import org.openapis.openapi.models.operations.JobsProjectsJobsListSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsJobsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsJobsListRequest req = new JobsProjectsJobsListRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "modi";
                filter = "iste";
                jobView = JobsProjectsJobsListJobViewEnum.JOB_VIEW_SMALL;
                key = "deleniti";
                oauthToken = "pariatur";
                pageSize = 589910L;
                pageToken = "nobis";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "delectus";
                uploadProtocol = "quaerat";
            }};            

            JobsProjectsJobsListResponse res = sdk.projects.jobsProjectsJobsList(req, new JobsProjectsJobsListSecurity() {{
                option1 = new JobsProjectsJobsListSecurityOption1("quos", "aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsJobsPatch

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsJobsPatchRequest;
import org.openapis.openapi.models.operations.JobsProjectsJobsPatchResponse;
import org.openapis.openapi.models.operations.JobsProjectsJobsPatchSecurity;
import org.openapis.openapi.models.operations.JobsProjectsJobsPatchSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsJobsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationInfo;
import org.openapis.openapi.models.shared.CompensationEntry;
import org.openapis.openapi.models.shared.CompensationEntryTypeEnum;
import org.openapis.openapi.models.shared.CompensationEntryUnitEnum;
import org.openapis.openapi.models.shared.CompensationInfo;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.JobDegreeTypesEnum;
import org.openapis.openapi.models.shared.JobDerivedInfo;
import org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum;
import org.openapis.openapi.models.shared.JobEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobJobBenefitsEnum;
import org.openapis.openapi.models.shared.JobJobLevelEnum;
import org.openapis.openapi.models.shared.JobPostingRegionEnum;
import org.openapis.openapi.models.shared.JobVisibilityEnum;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.Location;
import org.openapis.openapi.models.shared.LocationLocationTypeEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.ProcessingOptions;
import org.openapis.openapi.models.shared.ProcessingOptionsHtmlSanitizationEnum;
import org.openapis.openapi.models.shared.UpdateJobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsJobsPatchRequest req = new JobsProjectsJobsPatchRequest("dolorem") {{
                dollarXgafv = XgafvEnum.ONE;
                updateJobRequest = new UpdateJobRequest() {{
                    job = new Job() {{
                        addresses = new String[]{{
                            add("qui"),
                        }};
                        applicationInfo = new ApplicationInfo() {{
                            emails = new String[]{{
                                add("hic"),
                            }};
                            instruction = "excepturi";
                            uris = new String[]{{
                                add("voluptate"),
                                add("dignissimos"),
                                add("reiciendis"),
                            }};
                        }};;
                        companyDisplayName = "amet";
                        companyName = "dolorum";
                        compensationInfo = new CompensationInfo() {{
                            annualizedBaseCompensationRange = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "numquam";
                                    nanos = 85295;
                                    units = "ipsa";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "ipsa";
                                    nanos = 434417;
                                    units = "odio";
                                }};;
                            }};;
                            annualizedTotalCompensationRange = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "quaerat";
                                    nanos = 881005;
                                    units = "quidem";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "voluptatibus";
                                    nanos = 377752;
                                    units = "natus";
                                }};;
                            }};;
                            entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                add(new CompensationEntry() {{
                                    amount = new Money() {{
                                        currencyCode = "atque";
                                        nanos = 24678;
                                        units = "fugiat";
                                    }};
                                    description = "ab";
                                    expectedUnitsPerYear = 7438.35;
                                    range = new CompensationRange() {{
                                        maxCompensation = new Money() {{
                                            currencyCode = "dolorum";
                                            nanos = 478596;
                                            units = "voluptate";
                                        }};
                                        minCompensation = new Money() {{
                                            currencyCode = "dolorum";
                                            nanos = 536579;
                                            units = "omnis";
                                        }};
                                    }};
                                    type = CompensationEntryTypeEnum.OTHER_COMPENSATION_TYPE;
                                    unit = CompensationEntryUnitEnum.YEARLY;
                                }}),
                            }};
                        }};;
                        customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                            put("nihil", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("voluptate"),
                                }};
                                stringValues = new String[]{{
                                    add("saepe"),
                                    add("eius"),
                                    add("aspernatur"),
                                }};
                            }});
                            put("perferendis", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("optio"),
                                }};
                                stringValues = new String[]{{
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                    add("deserunt"),
                                }};
                            }});
                            put("provident", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("repellendus"),
                                    add("totam"),
                                }};
                                stringValues = new String[]{{
                                    add("alias"),
                                    add("at"),
                                    add("quaerat"),
                                }};
                            }});
                            put("tempora", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("quod"),
                                    add("officiis"),
                                }};
                                stringValues = new String[]{{
                                    add("dolorum"),
                                }};
                            }});
                        }};
                        degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                            add(JobDegreeTypesEnum.ADULT_REMEDIAL_EDUCATION),
                            add(JobDegreeTypesEnum.BACHELORS_OR_EQUIVALENT),
                            add(JobDegreeTypesEnum.ADULT_REMEDIAL_EDUCATION),
                            add(JobDegreeTypesEnum.PRIMARY_EDUCATION),
                        }};
                        department = "quisquam";
                        derivedInfo = new JobDerivedInfo() {{
                            jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                add(JobDerivedInfoJobCategoriesEnum.CLEANING_AND_FACILITIES),
                                add(JobDerivedInfoJobCategoriesEnum.PERSONAL_CARE_AND_SERVICES),
                                add(JobDerivedInfoJobCategoriesEnum.SCIENCE_AND_ENGINEERING),
                                add(JobDerivedInfoJobCategoriesEnum.CLEANING_AND_FACILITIES),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    latLng = new LatLng() {{
                                        latitude = 2133.12;
                                        longitude = 9574.51;
                                    }};
                                    locationType = LocationLocationTypeEnum.POSTAL_CODE;
                                    postalAddress = new PostalAddress() {{
                                        addressLines = new String[]{{
                                            add("sit"),
                                            add("expedita"),
                                        }};
                                        administrativeArea = "neque";
                                        languageCode = "sed";
                                        locality = "vel";
                                        organization = "libero";
                                        postalCode = "64221";
                                        recipients = new String[]{{
                                            add("maxime"),
                                            add("pariatur"),
                                            add("soluta"),
                                        }};
                                        regionCode = "dicta";
                                        revision = 674848;
                                        sortingCode = "totam";
                                        sublocality = "incidunt";
                                    }};
                                    radiusInMiles = 1320.68;
                                }}),
                                add(new Location() {{
                                    latLng = new LatLng() {{
                                        latitude = 1749.09;
                                        longitude = 7168.6;
                                    }};
                                    locationType = LocationLocationTypeEnum.SUB_LOCALITY1;
                                    postalAddress = new PostalAddress() {{
                                        addressLines = new String[]{{
                                            add("quam"),
                                            add("molestias"),
                                        }};
                                        administrativeArea = "temporibus";
                                        languageCode = "qui";
                                        locality = "neque";
                                        organization = "fugit";
                                        postalCode = "41379";
                                        recipients = new String[]{{
                                            add("cumque"),
                                        }};
                                        regionCode = "soluta";
                                        revision = 748664;
                                        sortingCode = "et";
                                        sublocality = "saepe";
                                    }};
                                    radiusInMiles = 2174.5;
                                }}),
                            }};
                        }};;
                        description = "veritatis";
                        employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                            add(JobEmploymentTypesEnum.INTERN),
                            add(JobEmploymentTypesEnum.PER_DIEM),
                            add(JobEmploymentTypesEnum.INTERN),
                        }};
                        incentives = "aperiam";
                        jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                            add(JobJobBenefitsEnum.DENTAL),
                            add(JobJobBenefitsEnum.DOMESTIC_PARTNER),
                            add(JobJobBenefitsEnum.DOMESTIC_PARTNER),
                            add(JobJobBenefitsEnum.DENTAL),
                        }};
                        jobEndTime = "dolorum";
                        jobLevel = JobJobLevelEnum.JOB_LEVEL_UNSPECIFIED;
                        jobStartTime = "quae";
                        languageCode = "aut";
                        name = "Percy Altenwerth";
                        postingCreateTime = "porro";
                        postingExpireTime = "doloribus";
                        postingPublishTime = "ut";
                        postingRegion = JobPostingRegionEnum.NATION;
                        postingUpdateTime = "cupiditate";
                        processingOptions = new ProcessingOptions() {{
                            disableStreetAddressResolution = false;
                            htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.HTML_SANITIZATION_UNSPECIFIED;
                        }};;
                        promotionValue = 63955;
                        qualifications = "laudantium";
                        requisitionId = "odio";
                        responsibilities = "occaecati";
                        title = "Dr.";
                        visibility = JobVisibilityEnum.SHARED_WITH_PUBLIC;
                    }};;
                    updateMask = "vero";
                }};;
                accessToken = "omnis";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                fields = "delectus";
                key = "voluptate";
                oauthToken = "consectetur";
                prettyPrint = false;
                quotaUser = "vero";
                uploadType = "tenetur";
                uploadProtocol = "dignissimos";
            }};            

            JobsProjectsJobsPatchResponse res = sdk.projects.jobsProjectsJobsPatch(req, new JobsProjectsJobsPatchSecurity() {{
                option1 = new JobsProjectsJobsPatchSecurityOption1("hic", "distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsJobsSearch

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchRequest;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchResponse;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchSecurity;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommuteFilter;
import org.openapis.openapi.models.shared.CommuteFilterCommuteMethodEnum;
import org.openapis.openapi.models.shared.CommuteFilterRoadTrafficEnum;
import org.openapis.openapi.models.shared.CompensationFilter;
import org.openapis.openapi.models.shared.CompensationFilterTypeEnum;
import org.openapis.openapi.models.shared.CompensationFilterUnitsEnum;
import org.openapis.openapi.models.shared.CompensationHistogramRequest;
import org.openapis.openapi.models.shared.CompensationHistogramRequestTypeEnum;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomAttributeHistogramRequest;
import org.openapis.openapi.models.shared.CustomRankingInfo;
import org.openapis.openapi.models.shared.CustomRankingInfoImportanceLevelEnum;
import org.openapis.openapi.models.shared.DeviceInfo;
import org.openapis.openapi.models.shared.DeviceInfoDeviceTypeEnum;
import org.openapis.openapi.models.shared.HistogramFacets;
import org.openapis.openapi.models.shared.HistogramFacetsSimpleHistogramFacetsEnum;
import org.openapis.openapi.models.shared.HistogramQuery;
import org.openapis.openapi.models.shared.JobQuery;
import org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.LocationFilter;
import org.openapis.openapi.models.shared.LocationFilterTelecommutePreferenceEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.NumericBucketingOption;
import org.openapis.openapi.models.shared.RequestMetadata;
import org.openapis.openapi.models.shared.SearchJobsRequest;
import org.openapis.openapi.models.shared.SearchJobsRequestDiversificationLevelEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestJobViewEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestSearchModeEnum;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimestampRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsJobsSearchRequest req = new JobsProjectsJobsSearchRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                searchJobsRequest = new SearchJobsRequest() {{
                    customRankingInfo = new CustomRankingInfo() {{
                        importanceLevel = CustomRankingInfoImportanceLevelEnum.MEDIUM;
                        rankingExpression = "facilis";
                    }};;
                    disableKeywordMatch = false;
                    diversificationLevel = SearchJobsRequestDiversificationLevelEnum.SIMPLE;
                    enableBroadening = false;
                    histogramFacets = new HistogramFacets() {{
                        compensationHistogramFacets = new org.openapis.openapi.models.shared.CompensationHistogramRequest[]{{
                            add(new CompensationHistogramRequest() {{
                                bucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(8445.5),
                                        add(8489.44),
                                    }};
                                    requiresMinMax = false;
                                }};
                                type = CompensationHistogramRequestTypeEnum.COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED;
                            }}),
                            add(new CompensationHistogramRequest() {{
                                bucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(7733.26),
                                        add(132.36),
                                        add(9742.59),
                                    }};
                                    requiresMinMax = false;
                                }};
                                type = CompensationHistogramRequestTypeEnum.BASE;
                            }}),
                        }};
                        customAttributeHistogramFacets = new org.openapis.openapi.models.shared.CustomAttributeHistogramRequest[]{{
                            add(new CustomAttributeHistogramRequest() {{
                                key = "fugit";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(9818.3),
                                        add(9850.33),
                                        add(4783.7),
                                        add(7535.7),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                            add(new CustomAttributeHistogramRequest() {{
                                key = "ducimus";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(6394.73),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                            add(new CustomAttributeHistogramRequest() {{
                                key = "tempora";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(4104.92),
                                        add(1369),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                            add(new CustomAttributeHistogramRequest() {{
                                key = "vel";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(2978.42),
                                        add(1898.48),
                                        add(4011.32),
                                        add(5113.19),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                        }};
                        simpleHistogramFacets = new org.openapis.openapi.models.shared.HistogramFacetsSimpleHistogramFacetsEnum[]{{
                            add(HistogramFacetsSimpleHistogramFacetsEnum.COMPANY_SIZE),
                        }};
                    }};;
                    histogramQueries = new org.openapis.openapi.models.shared.HistogramQuery[]{{
                        add(new HistogramQuery() {{
                            histogramQuery = "quasi";
                        }}),
                        add(new HistogramQuery() {{
                            histogramQuery = "ex";
                        }}),
                        add(new HistogramQuery() {{
                            histogramQuery = "nulla";
                        }}),
                        add(new HistogramQuery() {{
                            histogramQuery = "excepturi";
                        }}),
                    }};
                    jobQuery = new JobQuery() {{
                        commuteFilter = new CommuteFilter() {{
                            allowImpreciseAddresses = false;
                            commuteMethod = CommuteFilterCommuteMethodEnum.CYCLING;
                            departureTime = new TimeOfDay() {{
                                hours = 343605;
                                minutes = 960835;
                                nanos = 788873;
                                seconds = 906556;
                            }};;
                            roadTraffic = CommuteFilterRoadTrafficEnum.TRAFFIC_FREE;
                            startCoordinates = new LatLng() {{
                                latitude = 7740.48;
                                longitude = 3592.71;
                            }};;
                            travelDuration = "veniam";
                        }};;
                        companyDisplayNames = new String[]{{
                            add("inventore"),
                            add("magnam"),
                        }};
                        companyNames = new String[]{{
                            add("quo"),
                            add("consectetur"),
                        }};
                        compensationFilter = new CompensationFilter() {{
                            includeJobsWithUnspecifiedCompensationRange = false;
                            range = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "recusandae";
                                    nanos = 132487;
                                    units = "minima";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "eaque";
                                    nanos = 952871;
                                    units = "libero";
                                }};;
                            }};;
                            type = CompensationFilterTypeEnum.FILTER_TYPE_UNSPECIFIED;
                            units = new org.openapis.openapi.models.shared.CompensationFilterUnitsEnum[]{{
                                add(CompensationFilterUnitsEnum.MONTHLY),
                            }};
                        }};;
                        customAttributeFilter = "impedit";
                        disableSpellCheck = false;
                        employmentTypes = new org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum[]{{
                            add(JobQueryEmploymentTypesEnum.FULL_TIME),
                            add(JobQueryEmploymentTypesEnum.FLY_IN_FLY_OUT),
                        }};
                        excludedJobs = new String[]{{
                            add("non"),
                        }};
                        jobCategories = new org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum[]{{
                            add(JobQueryJobCategoriesEnum.MEDIA_COMMUNICATIONS_AND_WRITING),
                        }};
                        languageCodes = new String[]{{
                            add("placeat"),
                            add("velit"),
                            add("eum"),
                        }};
                        locationFilters = new org.openapis.openapi.models.shared.LocationFilter[]{{
                            add(new LocationFilter() {{
                                address = "588 Mona Cliffs";
                                distanceInMiles = 2703.28;
                                latLng = new LatLng() {{
                                    latitude = 2561.39;
                                    longitude = 1314.82;
                                }};
                                regionCode = "provident";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_PREFERENCE_UNSPECIFIED;
                            }}),
                            add(new LocationFilter() {{
                                address = "3424 Judson Ports";
                                distanceInMiles = 4420.15;
                                latLng = new LatLng() {{
                                    latitude = 6956.26;
                                    longitude = 8526.35;
                                }};
                                regionCode = "ut";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_EXCLUDED;
                            }}),
                        }};
                        publishTimeRange = new TimestampRange() {{
                            endTime = "suscipit";
                            startTime = "assumenda";
                        }};;
                        query = "eos";
                        queryLanguageCode = "praesentium";
                    }};;
                    jobView = SearchJobsRequestJobViewEnum.JOB_VIEW_SMALL;
                    offset = 86377;
                    orderBy = "ipsa";
                    pageSize = 660040;
                    pageToken = "quidem";
                    requestMetadata = new RequestMetadata() {{
                        deviceInfo = new DeviceInfo() {{
                            deviceType = DeviceInfoDeviceTypeEnum.WEB;
                            id = "cdca4251-904e-4523-87e0-bc7178e4796f";
                        }};;
                        domain = "dolores";
                        sessionId = "deserunt";
                        userId = "molestiae";
                    }};;
                    requirePreciseResultSize = false;
                    searchMode = SearchJobsRequestSearchModeEnum.SEARCH_MODE_UNSPECIFIED;
                }};;
                accessToken = "porro";
                alt = AltEnum.MEDIA;
                callback = "quas";
                fields = "praesentium";
                key = "consequuntur";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "fugit";
                uploadType = "fuga";
                uploadProtocol = "mollitia";
            }};            

            JobsProjectsJobsSearchResponse res = sdk.projects.jobsProjectsJobsSearch(req, new JobsProjectsJobsSearchSecurity() {{
                option1 = new JobsProjectsJobsSearchSecurityOption1("incidunt", "atque") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsJobsSearchForAlert

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchForAlertRequest;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchForAlertResponse;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchForAlertSecurity;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchForAlertSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsJobsSearchForAlertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommuteFilter;
import org.openapis.openapi.models.shared.CommuteFilterCommuteMethodEnum;
import org.openapis.openapi.models.shared.CommuteFilterRoadTrafficEnum;
import org.openapis.openapi.models.shared.CompensationFilter;
import org.openapis.openapi.models.shared.CompensationFilterTypeEnum;
import org.openapis.openapi.models.shared.CompensationFilterUnitsEnum;
import org.openapis.openapi.models.shared.CompensationHistogramRequest;
import org.openapis.openapi.models.shared.CompensationHistogramRequestTypeEnum;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomAttributeHistogramRequest;
import org.openapis.openapi.models.shared.CustomRankingInfo;
import org.openapis.openapi.models.shared.CustomRankingInfoImportanceLevelEnum;
import org.openapis.openapi.models.shared.DeviceInfo;
import org.openapis.openapi.models.shared.DeviceInfoDeviceTypeEnum;
import org.openapis.openapi.models.shared.HistogramFacets;
import org.openapis.openapi.models.shared.HistogramFacetsSimpleHistogramFacetsEnum;
import org.openapis.openapi.models.shared.HistogramQuery;
import org.openapis.openapi.models.shared.JobQuery;
import org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.LocationFilter;
import org.openapis.openapi.models.shared.LocationFilterTelecommutePreferenceEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.NumericBucketingOption;
import org.openapis.openapi.models.shared.RequestMetadata;
import org.openapis.openapi.models.shared.SearchJobsRequest;
import org.openapis.openapi.models.shared.SearchJobsRequestDiversificationLevelEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestJobViewEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestSearchModeEnum;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimestampRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsJobsSearchForAlertRequest req = new JobsProjectsJobsSearchForAlertRequest("explicabo") {{
                dollarXgafv = XgafvEnum.ONE;
                searchJobsRequest = new SearchJobsRequest() {{
                    customRankingInfo = new CustomRankingInfo() {{
                        importanceLevel = CustomRankingInfoImportanceLevelEnum.LOW;
                        rankingExpression = "fugit";
                    }};;
                    disableKeywordMatch = false;
                    diversificationLevel = SearchJobsRequestDiversificationLevelEnum.SIMPLE;
                    enableBroadening = false;
                    histogramFacets = new HistogramFacets() {{
                        compensationHistogramFacets = new org.openapis.openapi.models.shared.CompensationHistogramRequest[]{{
                            add(new CompensationHistogramRequest() {{
                                bucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(1294.12),
                                    }};
                                    requiresMinMax = false;
                                }};
                                type = CompensationHistogramRequestTypeEnum.ANNUALIZED_TOTAL;
                            }}),
                        }};
                        customAttributeHistogramFacets = new org.openapis.openapi.models.shared.CustomAttributeHistogramRequest[]{{
                            add(new CustomAttributeHistogramRequest() {{
                                key = "atque";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(4569.11),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                            add(new CustomAttributeHistogramRequest() {{
                                key = "eveniet";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(829.71),
                                        add(4586.04),
                                        add(8003.79),
                                        add(7241.68),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                            add(new CustomAttributeHistogramRequest() {{
                                key = "vero";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(934.59),
                                        add(9040.45),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                        }};
                        simpleHistogramFacets = new org.openapis.openapi.models.shared.HistogramFacetsSimpleHistogramFacetsEnum[]{{
                            add(HistogramFacetsSimpleHistogramFacetsEnum.LANGUAGE),
                            add(HistogramFacetsSimpleHistogramFacetsEnum.COUNTRY),
                        }};
                    }};;
                    histogramQueries = new org.openapis.openapi.models.shared.HistogramQuery[]{{
                        add(new HistogramQuery() {{
                            histogramQuery = "occaecati";
                        }}),
                        add(new HistogramQuery() {{
                            histogramQuery = "minima";
                        }}),
                        add(new HistogramQuery() {{
                            histogramQuery = "distinctio";
                        }}),
                    }};
                    jobQuery = new JobQuery() {{
                        commuteFilter = new CommuteFilter() {{
                            allowImpreciseAddresses = false;
                            commuteMethod = CommuteFilterCommuteMethodEnum.WALKING;
                            departureTime = new TimeOfDay() {{
                                hours = 27069;
                                minutes = 636061;
                                nanos = 731398;
                                seconds = 240020;
                            }};;
                            roadTraffic = CommuteFilterRoadTrafficEnum.BUSY_HOUR;
                            startCoordinates = new LatLng() {{
                                latitude = 1605.38;
                                longitude = 97.66;
                            }};;
                            travelDuration = "minus";
                        }};;
                        companyDisplayNames = new String[]{{
                            add("sapiente"),
                            add("consectetur"),
                        }};
                        companyNames = new String[]{{
                            add("blanditiis"),
                            add("provident"),
                        }};
                        compensationFilter = new CompensationFilter() {{
                            includeJobsWithUnspecifiedCompensationRange = false;
                            range = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "a";
                                    nanos = 857723;
                                    units = "quas";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "esse";
                                    nanos = 97468;
                                    units = "a";
                                }};;
                            }};;
                            type = CompensationFilterTypeEnum.ANNUALIZED_BASE_AMOUNT;
                            units = new org.openapis.openapi.models.shared.CompensationFilterUnitsEnum[]{{
                                add(CompensationFilterUnitsEnum.ONE_TIME),
                                add(CompensationFilterUnitsEnum.ONE_TIME),
                                add(CompensationFilterUnitsEnum.HOURLY),
                            }};
                        }};;
                        customAttributeFilter = "eveniet";
                        disableSpellCheck = false;
                        employmentTypes = new org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum[]{{
                            add(JobQueryEmploymentTypesEnum.PER_DIEM),
                            add(JobQueryEmploymentTypesEnum.EMPLOYMENT_TYPE_UNSPECIFIED),
                            add(JobQueryEmploymentTypesEnum.FULL_TIME),
                            add(JobQueryEmploymentTypesEnum.FULL_TIME),
                        }};
                        excludedJobs = new String[]{{
                            add("culpa"),
                            add("aliquid"),
                            add("tenetur"),
                        }};
                        jobCategories = new org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum[]{{
                            add(JobQueryJobCategoriesEnum.SPORTS_FITNESS_AND_RECREATION),
                        }};
                        languageCodes = new String[]{{
                            add("in"),
                            add("eius"),
                        }};
                        locationFilters = new org.openapis.openapi.models.shared.LocationFilter[]{{
                            add(new LocationFilter() {{
                                address = "703 Carter Harbor";
                                distanceInMiles = 4438.79;
                                latLng = new LatLng() {{
                                    latitude = 3567.07;
                                    longitude = 3917.74;
                                }};
                                regionCode = "aut";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_ALLOWED;
                            }}),
                            add(new LocationFilter() {{
                                address = "84596 Leonard Village";
                                distanceInMiles = 984.78;
                                latLng = new LatLng() {{
                                    latitude = 8694.89;
                                    longitude = 920.27;
                                }};
                                regionCode = "voluptate";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_PREFERENCE_UNSPECIFIED;
                            }}),
                            add(new LocationFilter() {{
                                address = "02268 Joyce Bridge";
                                distanceInMiles = 5130.75;
                                latLng = new LatLng() {{
                                    latitude = 4287.96;
                                    longitude = 6498.32;
                                }};
                                regionCode = "ab";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_ALLOWED;
                            }}),
                        }};
                        publishTimeRange = new TimestampRange() {{
                            endTime = "non";
                            startTime = "voluptatem";
                        }};;
                        query = "dolor";
                        queryLanguageCode = "occaecati";
                    }};;
                    jobView = SearchJobsRequestJobViewEnum.JOB_VIEW_ID_ONLY;
                    offset = 771089;
                    orderBy = "explicabo";
                    pageSize = 376226;
                    pageToken = "aut";
                    requestMetadata = new RequestMetadata() {{
                        deviceInfo = new DeviceInfo() {{
                            deviceType = DeviceInfoDeviceTypeEnum.ANDROID;
                            id = "1f93f5f0-642d-4ac7-af51-5cc413aa63aa";
                        }};;
                        domain = "recusandae";
                        sessionId = "totam";
                        userId = "fugiat";
                    }};;
                    requirePreciseResultSize = false;
                    searchMode = SearchJobsRequestSearchModeEnum.JOB_SEARCH;
                }};;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "labore";
                key = "possimus";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "commodi";
                uploadProtocol = "in";
            }};            

            JobsProjectsJobsSearchForAlertResponse res = sdk.projects.jobsProjectsJobsSearchForAlert(req, new JobsProjectsJobsSearchForAlertSecurity() {{
                option1 = new JobsProjectsJobsSearchForAlertSecurityOption1("corporis", "reiciendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsOperationsGetRequest;
import org.openapis.openapi.models.operations.JobsProjectsOperationsGetResponse;
import org.openapis.openapi.models.operations.JobsProjectsOperationsGetSecurity;
import org.openapis.openapi.models.operations.JobsProjectsOperationsGetSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsOperationsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsOperationsGetRequest req = new JobsProjectsOperationsGetRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "cum";
                key = "consectetur";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "earum";
                uploadProtocol = "facere";
            }};            

            JobsProjectsOperationsGetResponse res = sdk.projects.jobsProjectsOperationsGet(req, new JobsProjectsOperationsGetSecurity() {{
                option1 = new JobsProjectsOperationsGetSecurityOption1("numquam", "doloribus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
