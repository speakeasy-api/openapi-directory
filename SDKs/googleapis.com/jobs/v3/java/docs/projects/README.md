# projects

### Available Operations

* [jobsProjectsClientEventsCreate](#jobsprojectsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [jobsProjectsCompaniesCreate](#jobsprojectscompaniescreate) - Creates a new company entity.
* [jobsProjectsCompaniesList](#jobsprojectscompanieslist) - Lists all companies associated with the service account.
* [jobsProjectsComplete](#jobsprojectscomplete) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [jobsProjectsJobsBatchDelete](#jobsprojectsjobsbatchdelete) - Deletes a list of Jobs by filter.
* [jobsProjectsJobsCreate](#jobsprojectsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsDelete](#jobsprojectsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsGet](#jobsprojectsjobsget) - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* [jobsProjectsJobsList](#jobsprojectsjobslist) - Lists jobs by filter.
* [jobsProjectsJobsPatch](#jobsprojectsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsJobsSearch](#jobsprojectsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [jobsProjectsJobsSearchForAlert](#jobsprojectsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), and has different algorithmic adjustments that are targeted to passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

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

## jobsProjectsJobsGet

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsJobsGetRequest;
import org.openapis.openapi.models.operations.JobsProjectsJobsGetResponse;
import org.openapis.openapi.models.operations.JobsProjectsJobsGetSecurity;
import org.openapis.openapi.models.operations.JobsProjectsJobsGetSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsJobsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsJobsGetRequest req = new JobsProjectsJobsGetRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "adipisci";
                alt = AltEnum.PROTO;
                callback = "earum";
                fields = "modi";
                key = "iste";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "deleniti";
                uploadType = "pariatur";
                uploadProtocol = "provident";
            }};            

            JobsProjectsJobsGetResponse res = sdk.projects.jobsProjectsJobsGet(req, new JobsProjectsJobsGetSecurity() {{
                option1 = new JobsProjectsJobsGetSecurityOption1("nobis", "libero") {{
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

            JobsProjectsJobsListRequest req = new JobsProjectsJobsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "dolorem";
                filter = "dolor";
                jobView = JobsProjectsJobsListJobViewEnum.JOB_VIEW_UNSPECIFIED;
                key = "ipsum";
                oauthToken = "hic";
                pageSize = 569574L;
                pageToken = "cum";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "dignissimos";
                uploadProtocol = "reiciendis";
            }};            

            JobsProjectsJobsListResponse res = sdk.projects.jobsProjectsJobsList(req, new JobsProjectsJobsListSecurity() {{
                option1 = new JobsProjectsJobsListSecurityOption1("amet", "dolorum") {{
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

            JobsProjectsJobsPatchRequest req = new JobsProjectsJobsPatchRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                updateJobRequest = new UpdateJobRequest() {{
                    job = new Job() {{
                        addresses = new String[]{{
                            add("ipsa"),
                        }};
                        applicationInfo = new ApplicationInfo() {{
                            emails = new String[]{{
                                add("odio"),
                                add("quaerat"),
                            }};
                            instruction = "accusamus";
                            uris = new String[]{{
                                add("voluptatibus"),
                                add("voluptas"),
                                add("natus"),
                            }};
                        }};;
                        companyDisplayName = "eos";
                        companyName = "atque";
                        compensationInfo = new CompensationInfo() {{
                            annualizedBaseCompensationRange = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "sit";
                                    nanos = 854614;
                                    units = "ab";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "soluta";
                                    nanos = 679393;
                                    units = "iusto";
                                }};;
                            }};;
                            annualizedTotalCompensationRange = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "voluptate";
                                    nanos = 677082;
                                    units = "deleniti";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "omnis";
                                    nanos = 896672;
                                    units = "distinctio";
                                }};;
                            }};;
                            entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                add(new CompensationEntry() {{
                                    amount = new Money() {{
                                        currencyCode = "nihil";
                                        nanos = 216897;
                                        units = "voluptate";
                                    }};
                                    description = "id";
                                    expectedUnitsPerYear = 9064.18;
                                    range = new CompensationRange() {{
                                        maxCompensation = new Money() {{
                                            currencyCode = "eius";
                                            nanos = 137220;
                                            units = "perferendis";
                                        }};
                                        minCompensation = new Money() {{
                                            currencyCode = "amet";
                                            nanos = 758379;
                                            units = "accusamus";
                                        }};
                                    }};
                                    type = CompensationEntryTypeEnum.BONUS;
                                    unit = CompensationEntryUnitEnum.OTHER_COMPENSATION_UNIT;
                                }}),
                                add(new CompensationEntry() {{
                                    amount = new Money() {{
                                        currencyCode = "suscipit";
                                        nanos = 645785;
                                        units = "provident";
                                    }};
                                    description = "minima";
                                    expectedUnitsPerYear = 8310.49;
                                    range = new CompensationRange() {{
                                        maxCompensation = new Money() {{
                                            currencyCode = "totam";
                                            nanos = 628982;
                                            units = "alias";
                                        }};
                                        minCompensation = new Money() {{
                                            currencyCode = "at";
                                            nanos = 311860;
                                            units = "tempora";
                                        }};
                                    }};
                                    type = CompensationEntryTypeEnum.SIGNING_BONUS;
                                    unit = CompensationEntryUnitEnum.ONE_TIME;
                                }}),
                                add(new CompensationEntry() {{
                                    amount = new Money() {{
                                        currencyCode = "officiis";
                                        nanos = 185636;
                                        units = "dolorum";
                                    }};
                                    description = "a";
                                    expectedUnitsPerYear = 4561.3;
                                    range = new CompensationRange() {{
                                        maxCompensation = new Money() {{
                                            currencyCode = "harum";
                                            nanos = 483409;
                                            units = "ipsum";
                                        }};
                                        minCompensation = new Money() {{
                                            currencyCode = "quisquam";
                                            nanos = 947371;
                                            units = "amet";
                                        }};
                                    }};
                                    type = CompensationEntryTypeEnum.COMMISSIONS;
                                    unit = CompensationEntryUnitEnum.OTHER_COMPENSATION_UNIT;
                                }}),
                                add(new CompensationEntry() {{
                                    amount = new Money() {{
                                        currencyCode = "numquam";
                                        nanos = 313692;
                                        units = "dolorem";
                                    }};
                                    description = "sapiente";
                                    expectedUnitsPerYear = 5182.01;
                                    range = new CompensationRange() {{
                                        maxCompensation = new Money() {{
                                            currencyCode = "nihil";
                                            nanos = 25662;
                                            units = "expedita";
                                        }};
                                        minCompensation = new Money() {{
                                            currencyCode = "neque";
                                            nanos = 153694;
                                            units = "vel";
                                        }};
                                    }};
                                    type = CompensationEntryTypeEnum.COMMISSIONS;
                                    unit = CompensationEntryUnitEnum.DAILY;
                                }}),
                            }};
                        }};;
                        customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                            put("quam", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("incidunt"),
                                }};
                                stringValues = new String[]{{
                                    add("cupiditate"),
                                }};
                            }});
                            put("maxime", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("soluta"),
                                    add("dicta"),
                                    add("laborum"),
                                    add("totam"),
                                }};
                                stringValues = new String[]{{
                                    add("aspernatur"),
                                    add("dolores"),
                                }};
                            }});
                            put("distinctio", new CustomAttribute() {{
                                filterable = false;
                                longValues = new String[]{{
                                    add("aliquid"),
                                    add("quam"),
                                    add("molestias"),
                                }};
                                stringValues = new String[]{{
                                    add("qui"),
                                    add("neque"),
                                    add("fugit"),
                                    add("magni"),
                                }};
                            }});
                        }};
                        degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                            add(JobDegreeTypesEnum.PRIMARY_EDUCATION),
                            add(JobDegreeTypesEnum.UPPER_SECONDARY_EDUCATION),
                        }};
                        department = "nam";
                        derivedInfo = new JobDerivedInfo() {{
                            jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                add(JobDerivedInfoJobCategoriesEnum.JOB_CATEGORY_UNSPECIFIED),
                                add(JobDerivedInfoJobCategoriesEnum.PROTECTIVE_SERVICES),
                                add(JobDerivedInfoJobCategoriesEnum.PROTECTIVE_SERVICES),
                                add(JobDerivedInfoJobCategoriesEnum.PROTECTIVE_SERVICES),
                            }};
                            locations = new org.openapis.openapi.models.shared.Location[]{{
                                add(new Location() {{
                                    latLng = new LatLng() {{
                                        latitude = 9037.2;
                                        longitude = 2174.5;
                                    }};
                                    locationType = LocationLocationTypeEnum.LOCATION_TYPE_UNSPECIFIED;
                                    postalAddress = new PostalAddress() {{
                                        addressLines = new String[]{{
                                            add("quos"),
                                            add("tempore"),
                                            add("cupiditate"),
                                        }};
                                        administrativeArea = "aperiam";
                                        languageCode = "delectus";
                                        locality = "dolorem";
                                        organization = "dolore";
                                        postalCode = "26100";
                                        recipients = new String[]{{
                                            add("itaque"),
                                            add("consequatur"),
                                            add("est"),
                                        }};
                                        regionCode = "repellendus";
                                        revision = 785153;
                                        sortingCode = "doloribus";
                                        sublocality = "ut";
                                    }};
                                    radiusInMiles = 7034.95;
                                }}),
                            }};
                        }};;
                        description = "cupiditate";
                        employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                            add(JobEmploymentTypesEnum.EMPLOYMENT_TYPE_UNSPECIFIED),
                        }};
                        incentives = "laudantium";
                        jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                            add(JobJobBenefitsEnum.LIFE_INSURANCE),
                            add(JobJobBenefitsEnum.VISION),
                        }};
                        jobEndTime = "quisquam";
                        jobLevel = JobJobLevelEnum.EXECUTIVE;
                        jobStartTime = "omnis";
                        languageCode = "quis";
                        name = "Dixie Klocko";
                        postingCreateTime = "tenetur";
                        postingExpireTime = "dignissimos";
                        postingPublishTime = "hic";
                        postingRegion = JobPostingRegionEnum.NATION;
                        postingUpdateTime = "quod";
                        processingOptions = new ProcessingOptions() {{
                            disableStreetAddressResolution = false;
                            htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.HTML_SANITIZATION_DISABLED;
                        }};;
                        promotionValue = 630448;
                        qualifications = "facilis";
                        requisitionId = "vero";
                        responsibilities = "ducimus";
                        title = "Mrs.";
                        visibility = JobVisibilityEnum.SHARED_WITH_PUBLIC;
                    }};;
                    updateMask = "illum";
                }};;
                accessToken = "sequi";
                alt = AltEnum.MEDIA;
                callback = "impedit";
                fields = "aut";
                key = "voluptatibus";
                oauthToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "nulla";
                uploadType = "fugit";
                uploadProtocol = "porro";
            }};            

            JobsProjectsJobsPatchResponse res = sdk.projects.jobsProjectsJobsPatch(req, new JobsProjectsJobsPatchSecurity() {{
                option1 = new JobsProjectsJobsPatchSecurityOption1("maiores", "doloribus") {{
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
import org.openapis.openapi.models.shared.DeviceInfo;
import org.openapis.openapi.models.shared.DeviceInfoDeviceTypeEnum;
import org.openapis.openapi.models.shared.HistogramFacets;
import org.openapis.openapi.models.shared.HistogramFacetsSimpleHistogramFacetsEnum;
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

            JobsProjectsJobsSearchRequest req = new JobsProjectsJobsSearchRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                searchJobsRequest = new SearchJobsRequest() {{
                    disableKeywordMatch = false;
                    diversificationLevel = SearchJobsRequestDiversificationLevelEnum.DISABLED;
                    enableBroadening = false;
                    histogramFacets = new HistogramFacets() {{
                        compensationHistogramFacets = new org.openapis.openapi.models.shared.CompensationHistogramRequest[]{{
                            add(new CompensationHistogramRequest() {{
                                bucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(2694.79),
                                        add(3685.84),
                                        add(4104.92),
                                    }};
                                    requiresMinMax = false;
                                }};
                                type = CompensationHistogramRequestTypeEnum.COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED;
                            }}),
                        }};
                        customAttributeHistogramFacets = new org.openapis.openapi.models.shared.CustomAttributeHistogramRequest[]{{
                            add(new CustomAttributeHistogramRequest() {{
                                key = "possimus";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(1898.48),
                                        add(4011.32),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                            add(new CustomAttributeHistogramRequest() {{
                                key = "laudantium";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(2243.17),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                        }};
                        simpleHistogramFacets = new org.openapis.openapi.models.shared.HistogramFacetsSimpleHistogramFacetsEnum[]{{
                            add(HistogramFacetsSimpleHistogramFacetsEnum.COMPANY_ID),
                            add(HistogramFacetsSimpleHistogramFacetsEnum.EXPERIENCE_LEVEL),
                            add(HistogramFacetsSimpleHistogramFacetsEnum.ADMIN1_COUNTRY),
                            add(HistogramFacetsSimpleHistogramFacetsEnum.CITY),
                        }};
                    }};;
                    jobQuery = new JobQuery() {{
                        commuteFilter = new CommuteFilter() {{
                            allowImpreciseAddresses = false;
                            commuteMethod = CommuteFilterCommuteMethodEnum.TRANSIT;
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
                        jobCategories = new org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum[]{{
                            add(JobQueryJobCategoriesEnum.CLEANING_AND_FACILITIES),
                        }};
                        languageCodes = new String[]{{
                            add("dolorum"),
                        }};
                        locationFilters = new org.openapis.openapi.models.shared.LocationFilter[]{{
                            add(new LocationFilter() {{
                                address = "244 Lynch Station";
                                distanceInMiles = 8605.52;
                                latLng = new LatLng() {{
                                    latitude = 3790.34;
                                    longitude = 7270.44;
                                }};
                                regionCode = "quasi";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_EXCLUDED;
                            }}),
                            add(new LocationFilter() {{
                                address = "15043 Devyn Land";
                                distanceInMiles = 4561.41;
                                latLng = new LatLng() {{
                                    latitude = 5245.93;
                                    longitude = 6832.82;
                                }};
                                regionCode = "reprehenderit";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_ALLOWED;
                            }}),
                            add(new LocationFilter() {{
                                address = "243 Davis Mall";
                                distanceInMiles = 7885.46;
                                latLng = new LatLng() {{
                                    latitude = 863.77;
                                    longitude = 568.48;
                                }};
                                regionCode = "id";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_ALLOWED;
                            }}),
                        }};
                        publishTimeRange = new TimestampRange() {{
                            endTime = "neque";
                            startTime = "quo";
                        }};;
                        query = "illum";
                        queryLanguageCode = "quo";
                    }};;
                    jobView = SearchJobsRequestJobViewEnum.JOB_VIEW_SMALL;
                    offset = 259422;
                    orderBy = "eos";
                    pageSize = 373813;
                    pageToken = "ab";
                    requestMetadata = new RequestMetadata() {{
                        deviceInfo = new DeviceInfo() {{
                            deviceType = DeviceInfoDeviceTypeEnum.IOS;
                            id = "04e523c7-e0bc-4717-8e47-96f2a70c6882";
                        }};;
                        domain = "deleniti";
                        sessionId = "fugit";
                        userId = "fuga";
                    }};;
                    requirePreciseResultSize = false;
                    searchMode = SearchJobsRequestSearchModeEnum.JOB_SEARCH;
                }};;
                accessToken = "incidunt";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "minima";
                key = "nisi";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "consequuntur";
                uploadProtocol = "ratione";
            }};            

            JobsProjectsJobsSearchResponse res = sdk.projects.jobsProjectsJobsSearch(req, new JobsProjectsJobsSearchSecurity() {{
                option1 = new JobsProjectsJobsSearchSecurityOption1("explicabo", "saepe") {{
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
import org.openapis.openapi.models.shared.DeviceInfo;
import org.openapis.openapi.models.shared.DeviceInfoDeviceTypeEnum;
import org.openapis.openapi.models.shared.HistogramFacets;
import org.openapis.openapi.models.shared.HistogramFacetsSimpleHistogramFacetsEnum;
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

            JobsProjectsJobsSearchForAlertRequest req = new JobsProjectsJobsSearchForAlertRequest("occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                searchJobsRequest = new SearchJobsRequest() {{
                    disableKeywordMatch = false;
                    diversificationLevel = SearchJobsRequestDiversificationLevelEnum.DIVERSIFICATION_LEVEL_UNSPECIFIED;
                    enableBroadening = false;
                    histogramFacets = new HistogramFacets() {{
                        compensationHistogramFacets = new org.openapis.openapi.models.shared.CompensationHistogramRequest[]{{
                            add(new CompensationHistogramRequest() {{
                                bucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(8820.42),
                                        add(829.71),
                                        add(4586.04),
                                        add(8003.79),
                                    }};
                                    requiresMinMax = false;
                                }};
                                type = CompensationHistogramRequestTypeEnum.ANNUALIZED_BASE;
                            }}),
                            add(new CompensationHistogramRequest() {{
                                bucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(3990.25),
                                        add(934.59),
                                        add(9040.45),
                                        add(4263.06),
                                    }};
                                    requiresMinMax = false;
                                }};
                                type = CompensationHistogramRequestTypeEnum.ANNUALIZED_BASE;
                            }}),
                        }};
                        customAttributeHistogramFacets = new org.openapis.openapi.models.shared.CustomAttributeHistogramRequest[]{{
                            add(new CustomAttributeHistogramRequest() {{
                                key = "rerum";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(3277.2),
                                        add(7162.44),
                                        add(7567.79),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                            add(new CustomAttributeHistogramRequest() {{
                                key = "sit";
                                longValueHistogramBucketingOption = new NumericBucketingOption() {{
                                    bucketBounds = new Double[]{{
                                        add(7313.98),
                                        add(2400.2),
                                        add(7669.64),
                                    }};
                                    requiresMinMax = false;
                                }};
                                stringValueHistogram = false;
                            }}),
                        }};
                        simpleHistogramFacets = new org.openapis.openapi.models.shared.HistogramFacetsSimpleHistogramFacetsEnum[]{{
                            add(HistogramFacetsSimpleHistogramFacetsEnum.SEARCH_TYPE_UNSPECIFIED),
                        }};
                    }};;
                    jobQuery = new JobQuery() {{
                        commuteFilter = new CommuteFilter() {{
                            allowImpreciseAddresses = false;
                            commuteMethod = CommuteFilterCommuteMethodEnum.TRANSIT;
                            departureTime = new TimeOfDay() {{
                                hours = 308286;
                                minutes = 959167;
                                nanos = 232865;
                                seconds = 458139;
                            }};;
                            roadTraffic = CommuteFilterRoadTrafficEnum.TRAFFIC_FREE;
                            startCoordinates = new LatLng() {{
                                latitude = 5909.84;
                                longitude = 9537.22;
                            }};;
                            travelDuration = "nulla";
                        }};;
                        companyDisplayNames = new String[]{{
                            add("esse"),
                            add("quasi"),
                            add("a"),
                        }};
                        companyNames = new String[]{{
                            add("sint"),
                            add("pariatur"),
                            add("possimus"),
                        }};
                        compensationFilter = new CompensationFilter() {{
                            includeJobsWithUnspecifiedCompensationRange = false;
                            range = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "quia";
                                    nanos = 908844;
                                    units = "asperiores";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "facere";
                                    nanos = 85001;
                                    units = "consequuntur";
                                }};;
                            }};;
                            type = CompensationFilterTypeEnum.FILTER_TYPE_UNSPECIFIED;
                            units = new org.openapis.openapi.models.shared.CompensationFilterUnitsEnum[]{{
                                add(CompensationFilterUnitsEnum.YEARLY),
                                add(CompensationFilterUnitsEnum.WEEKLY),
                                add(CompensationFilterUnitsEnum.OTHER_COMPENSATION_UNIT),
                            }};
                        }};;
                        customAttributeFilter = "quae";
                        disableSpellCheck = false;
                        employmentTypes = new org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum[]{{
                            add(JobQueryEmploymentTypesEnum.CONTRACT_TO_HIRE),
                            add(JobQueryEmploymentTypesEnum.CONTRACT_TO_HIRE),
                            add(JobQueryEmploymentTypesEnum.PART_TIME),
                            add(JobQueryEmploymentTypesEnum.PER_DIEM),
                        }};
                        jobCategories = new org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum[]{{
                            add(JobQueryJobCategoriesEnum.PROTECTIVE_SERVICES),
                            add(JobQueryJobCategoriesEnum.ACCOUNTING_AND_FINANCE),
                            add(JobQueryJobCategoriesEnum.CONSTRUCTION),
                            add(JobQueryJobCategoriesEnum.SPORTS_FITNESS_AND_RECREATION),
                        }};
                        languageCodes = new String[]{{
                            add("ullam"),
                        }};
                        locationFilters = new org.openapis.openapi.models.shared.LocationFilter[]{{
                            add(new LocationFilter() {{
                                address = "3051 Jacobs Mews";
                                distanceInMiles = 9292.92;
                                latLng = new LatLng() {{
                                    latitude = 6802.7;
                                    longitude = 996.15;
                                }};
                                regionCode = "omnis";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_JOBS_EXCLUDED;
                            }}),
                            add(new LocationFilter() {{
                                address = "80403 Darlene Ferry";
                                distanceInMiles = 6144.65;
                                latLng = new LatLng() {{
                                    latitude = 8395.13;
                                    longitude = 330.74;
                                }};
                                regionCode = "rem";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_PREFERENCE_UNSPECIFIED;
                            }}),
                        }};
                        publishTimeRange = new TimestampRange() {{
                            endTime = "laudantium";
                            startTime = "eum";
                        }};;
                        query = "mollitia";
                        queryLanguageCode = "ab";
                    }};;
                    jobView = SearchJobsRequestJobViewEnum.JOB_VIEW_MINIMAL;
                    offset = 251941;
                    orderBy = "voluptatem";
                    pageSize = 221161;
                    pageToken = "occaecati";
                    requestMetadata = new RequestMetadata() {{
                        deviceInfo = new DeviceInfo() {{
                            deviceType = DeviceInfoDeviceTypeEnum.WEB;
                            id = "c26071f9-3f5f-4064-adac-7af515cc413a";
                        }};;
                        domain = "id";
                        sessionId = "suscipit";
                        userId = "velit";
                    }};;
                    requirePreciseResultSize = false;
                    searchMode = SearchJobsRequestSearchModeEnum.JOB_SEARCH;
                }};;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "totam";
                fields = "fugiat";
                key = "vel";
                oauthToken = "ducimus";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "vel";
                uploadProtocol = "labore";
            }};            

            JobsProjectsJobsSearchForAlertResponse res = sdk.projects.jobsProjectsJobsSearchForAlert(req, new JobsProjectsJobsSearchForAlertSecurity() {{
                option1 = new JobsProjectsJobsSearchForAlertSecurityOption1("possimus", "facilis") {{
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
