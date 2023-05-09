# projects

### Available Operations

* [jobsProjectsTenantsClientEventsCreate](#jobsprojectstenantsclienteventscreate) - Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.
* [jobsProjectsTenantsCompaniesCreate](#jobsprojectstenantscompaniescreate) - Creates a new company entity.
* [jobsProjectsTenantsCompaniesList](#jobsprojectstenantscompanieslist) - Lists all companies associated with the project.
* [jobsProjectsTenantsCompleteQuery](#jobsprojectstenantscompletequery) - Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
* [jobsProjectsTenantsCreate](#jobsprojectstenantscreate) - Creates a new tenant entity.
* [jobsProjectsTenantsJobsBatchCreate](#jobsprojectstenantsjobsbatchcreate) - Begins executing a batch create jobs operation.
* [jobsProjectsTenantsJobsBatchDelete](#jobsprojectstenantsjobsbatchdelete) - Begins executing a batch delete jobs operation.
* [jobsProjectsTenantsJobsBatchUpdate](#jobsprojectstenantsjobsbatchupdate) - Begins executing a batch update jobs operation.
* [jobsProjectsTenantsJobsCreate](#jobsprojectstenantsjobscreate) - Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsDelete](#jobsprojectstenantsjobsdelete) - Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsGet](#jobsprojectstenantsjobsget) - Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
* [jobsProjectsTenantsJobsList](#jobsprojectstenantsjobslist) - Lists jobs by filter.
* [jobsProjectsTenantsJobsPatch](#jobsprojectstenantsjobspatch) - Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
* [jobsProjectsTenantsJobsSearch](#jobsprojectstenantsjobssearch) - Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
* [jobsProjectsTenantsJobsSearchForAlert](#jobsprojectstenantsjobssearchforalert) - Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
* [jobsProjectsTenantsList](#jobsprojectstenantslist) - Lists all tenants associated with the project.

## jobsProjectsTenantsClientEventsCreate

Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in [self service tools](https://console.cloud.google.com/talent-solution/overview). [Learn more](https://cloud.google.com/talent-solution/docs/management-tools) about self service tools.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsClientEventsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClientEvent;
import org.openapis.openapi.models.shared.JobEvent;
import org.openapis.openapi.models.shared.JobEventTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsClientEventsCreateRequest req = new JobsProjectsTenantsClientEventsCreateRequest("iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                clientEvent = new ClientEvent() {{
                    createTime = "nisi";
                    eventId = "recusandae";
                    eventNotes = "temporibus";
                    jobEvent = new JobEvent() {{
                        jobs = new String[]{{
                            add("quis"),
                        }};
                        type = JobEventTypeEnum.IMPRESSION;
                    }};;
                    requestId = "deserunt";
                }};;
                accessToken = "perferendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "sapiente";
                key = "quo";
                oauthToken = "odit";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "at";
                uploadProtocol = "maiores";
            }};            

            JobsProjectsTenantsClientEventsCreateResponse res = sdk.projects.jobsProjectsTenantsClientEventsCreate(req, new JobsProjectsTenantsClientEventsCreateSecurity() {{
                option1 = new JobsProjectsTenantsClientEventsCreateSecurityOption1("molestiae", "quod") {{
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

## jobsProjectsTenantsCompaniesCreate

Creates a new company entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompanyDerivedInfo;
import org.openapis.openapi.models.shared.CompanyInput;
import org.openapis.openapi.models.shared.CompanySizeEnum;
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

            JobsProjectsTenantsCompaniesCreateRequest req = new JobsProjectsTenantsCompaniesCreateRequest("quod") {{
                dollarXgafv = XgafvEnum.ONE;
                companyInput = new CompanyInput() {{
                    careerSiteUri = "totam";
                    derivedInfo = new CompanyDerivedInfo() {{
                        headquartersLocation = new Location() {{
                            latLng = new LatLng() {{
                                latitude = 7805.29;
                                longitude = 6788.8;
                            }};;
                            locationType = LocationLocationTypeEnum.COUNTRY;
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("officia"),
                                    add("occaecati"),
                                    add("fugit"),
                                }};
                                administrativeArea = "deleniti";
                                languageCode = "hic";
                                locality = "optio";
                                organization = "totam";
                                postalCode = "44217";
                                recipients = new String[]{{
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                regionCode = "aspernatur";
                                revision = 18789;
                                sortingCode = "ad";
                                sublocality = "natus";
                            }};;
                            radiusMiles = 1496.75;
                        }};;
                    }};;
                    displayName = "iste";
                    eeoText = "dolor";
                    externalId = "natus";
                    headquartersAddress = "laboriosam";
                    hiringAgency = false;
                    imageUri = "hic";
                    keywordSearchableJobCustomAttributes = new String[]{{
                        add("fuga"),
                        add("in"),
                        add("corporis"),
                        add("iste"),
                    }};
                    name = "Mr. Kerry Predovic";
                    size = CompanySizeEnum.BIG;
                    websiteUri = "mollitia";
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "corporis";
                key = "explicabo";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "omnis";
                uploadProtocol = "nemo";
            }};            

            JobsProjectsTenantsCompaniesCreateResponse res = sdk.projects.jobsProjectsTenantsCompaniesCreate(req, new JobsProjectsTenantsCompaniesCreateSecurity() {{
                option1 = new JobsProjectsTenantsCompaniesCreateSecurityOption1("minima", "excepturi") {{
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

## jobsProjectsTenantsCompaniesList

Lists all companies associated with the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesListRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesListResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesListSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesListSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompaniesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsCompaniesListRequest req = new JobsProjectsTenantsCompaniesListRequest("accusantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                pageSize = 635059L;
                pageToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "repellat";
                requireOpenJobs = false;
                uploadType = "mollitia";
                uploadProtocol = "occaecati";
            }};            

            JobsProjectsTenantsCompaniesListResponse res = sdk.projects.jobsProjectsTenantsCompaniesList(req, new JobsProjectsTenantsCompaniesListSecurity() {{
                option1 = new JobsProjectsTenantsCompaniesListSecurityOption1("numquam", "commodi") {{
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

## jobsProjectsTenantsCompleteQuery

Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompleteQueryRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompleteQueryResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompleteQueryScopeEnum;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompleteQuerySecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompleteQuerySecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompleteQuerySecurityOption2;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCompleteQueryTypeEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsCompleteQueryRequest req = new JobsProjectsTenantsCompleteQueryRequest("quam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "quia";
                company = "Brown - Padberg";
                fields = "animi";
                key = "enim";
                languageCodes = new String[]{{
                    add("quo"),
                }};
                oauthToken = "sequi";
                pageSize = 949572L;
                prettyPrint = false;
                query = "ipsam";
                quotaUser = "id";
                scope = JobsProjectsTenantsCompleteQueryScopeEnum.PUBLIC_;
                type = JobsProjectsTenantsCompleteQueryTypeEnum.COMPLETION_TYPE_UNSPECIFIED;
                uploadType = "quasi";
                uploadProtocol = "error";
            }};            

            JobsProjectsTenantsCompleteQueryResponse res = sdk.projects.jobsProjectsTenantsCompleteQuery(req, new JobsProjectsTenantsCompleteQuerySecurity() {{
                option1 = new JobsProjectsTenantsCompleteQuerySecurityOption1("temporibus", "laborum") {{
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

## jobsProjectsTenantsCreate

Creates a new tenant entity.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Tenant;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsCreateRequest req = new JobsProjectsTenantsCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.TWO;
                tenant = new Tenant() {{
                    externalId = "voluptatibus";
                    name = "Jessie Langosh V";
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

            JobsProjectsTenantsCreateResponse res = sdk.projects.jobsProjectsTenantsCreate(req, new JobsProjectsTenantsCreateSecurity() {{
                option1 = new JobsProjectsTenantsCreateSecurityOption1("dolore", "iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.tenant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## jobsProjectsTenantsJobsBatchCreate

Begins executing a batch create jobs operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationInfo;
import org.openapis.openapi.models.shared.BatchCreateJobsRequestInput;
import org.openapis.openapi.models.shared.CompensationEntry;
import org.openapis.openapi.models.shared.CompensationEntryTypeEnum;
import org.openapis.openapi.models.shared.CompensationEntryUnitEnum;
import org.openapis.openapi.models.shared.CompensationInfo;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.JobDegreeTypesEnum;
import org.openapis.openapi.models.shared.JobDerivedInfo;
import org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum;
import org.openapis.openapi.models.shared.JobEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobInput;
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

            JobsProjectsTenantsJobsBatchCreateRequest req = new JobsProjectsTenantsJobsBatchCreateRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                batchCreateJobsRequestInput = new BatchCreateJobsRequestInput() {{
                    jobs = new org.openapis.openapi.models.shared.JobInput[]{{
                        add(new JobInput() {{
                            addresses = new String[]{{
                                add("commodi"),
                                add("repudiandae"),
                                add("quae"),
                                add("ipsum"),
                            }};
                            applicationInfo = new ApplicationInfo() {{
                                emails = new String[]{{
                                    add("molestias"),
                                    add("excepturi"),
                                    add("pariatur"),
                                }};
                                instruction = "modi";
                                uris = new String[]{{
                                    add("rem"),
                                    add("voluptates"),
                                    add("quasi"),
                                }};
                            }};
                            company = "Mayer, Boehm and Ward";
                            compensationInfo = new CompensationInfo() {{
                                annualizedBaseCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "incidunt";
                                        nanos = 318569;
                                        units = "consequatur";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "est";
                                        nanos = 842342;
                                        units = "explicabo";
                                    }};
                                }};
                                annualizedTotalCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "deserunt";
                                        nanos = 716327;
                                        units = "quibusdam";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "labore";
                                        nanos = 264730;
                                        units = "qui";
                                    }};
                                }};
                                entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "cupiditate";
                                            nanos = 552822;
                                            units = "perferendis";
                                        }};
                                        description = "magni";
                                        expectedUnitsPerYear = 8289.4;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "ipsam";
                                                nanos = 4695;
                                                units = "fugit";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "dolorum";
                                                nanos = 569618;
                                                units = "tempora";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.COMMISSIONS;
                                        unit = CompensationEntryUnitEnum.YEARLY;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "labore";
                                            nanos = 962189;
                                            units = "eum";
                                        }};
                                        description = "non";
                                        expectedUnitsPerYear = 7561.07;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "sint";
                                                nanos = 396098;
                                                units = "provident";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "necessitatibus";
                                                nanos = 572252;
                                                units = "officia";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.BONUS;
                                        unit = CompensationEntryUnitEnum.OTHER_COMPENSATION_UNIT;
                                    }}),
                                }};
                            }};
                            customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                                put("dolorum", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("in"),
                                        add("illum"),
                                    }};
                                    stringValues = new String[]{{
                                        add("rerum"),
                                        add("dicta"),
                                        add("magnam"),
                                        add("cumque"),
                                    }};
                                }});
                                put("facere", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("aliquid"),
                                        add("laborum"),
                                    }};
                                    stringValues = new String[]{{
                                        add("non"),
                                        add("occaecati"),
                                        add("enim"),
                                        add("accusamus"),
                                    }};
                                }});
                                put("delectus", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("provident"),
                                        add("nam"),
                                        add("id"),
                                    }};
                                    stringValues = new String[]{{
                                        add("deleniti"),
                                        add("sapiente"),
                                        add("amet"),
                                    }};
                                }});
                                put("deserunt", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("vel"),
                                        add("natus"),
                                    }};
                                    stringValues = new String[]{{
                                        add("molestiae"),
                                        add("perferendis"),
                                        add("nihil"),
                                    }};
                                }});
                            }};
                            degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                                add(JobDegreeTypesEnum.BACHELORS_OR_EQUIVALENT),
                                add(JobDegreeTypesEnum.ASSOCIATES_OR_EQUIVALENT),
                            }};
                            department = "labore";
                            derivedInfo = new JobDerivedInfo() {{
                                jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                    add(JobDerivedInfoJobCategoriesEnum.EDUCATION),
                                    add(JobDerivedInfoJobCategoriesEnum.MANUFACTURING_AND_WAREHOUSE),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 4287.69;
                                            longitude = 8784.53;
                                        }};
                                        locationType = LocationLocationTypeEnum.COUNTRY;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("magnam"),
                                            }};
                                            administrativeArea = "et";
                                            languageCode = "excepturi";
                                            locality = "ullam";
                                            organization = "provident";
                                            postalCode = "50696-3428";
                                            recipients = new String[]{{
                                                add("nemo"),
                                            }};
                                            regionCode = "quasi";
                                            revision = 435865;
                                            sortingCode = "doloribus";
                                            sublocality = "debitis";
                                        }};
                                        radiusMiles = 2603.41;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 8061.94;
                                            longitude = 5370.23;
                                        }};
                                        locationType = LocationLocationTypeEnum.SUB_LOCALITY1;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("architecto"),
                                                add("architecto"),
                                            }};
                                            administrativeArea = "repudiandae";
                                            languageCode = "ullam";
                                            locality = "expedita";
                                            organization = "nihil";
                                            postalCode = "81980-1561";
                                            recipients = new String[]{{
                                                add("quo"),
                                            }};
                                            regionCode = "illum";
                                            revision = 864934;
                                            sortingCode = "maxime";
                                            sublocality = "ea";
                                        }};
                                        radiusMiles = 5691.01;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 1399.72;
                                            longitude = 4071.83;
                                        }};
                                        locationType = LocationLocationTypeEnum.LOCATION_TYPE_UNSPECIFIED;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("maiores"),
                                            }};
                                            administrativeArea = "quidem";
                                            languageCode = "ipsam";
                                            locality = "voluptate";
                                            organization = "autem";
                                            postalCode = "08390-8207";
                                            recipients = new String[]{{
                                                add("hic"),
                                                add("libero"),
                                            }};
                                            regionCode = "nobis";
                                            revision = 171629;
                                            sortingCode = "quis";
                                            sublocality = "totam";
                                        }};
                                        radiusMiles = 4895.49;
                                    }}),
                                }};
                            }};
                            description = "eaque";
                            employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                                add(JobEmploymentTypesEnum.PART_TIME),
                                add(JobEmploymentTypesEnum.FULL_TIME),
                            }};
                            incentives = "perferendis";
                            jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                                add(JobJobBenefitsEnum.SICK_DAYS),
                            }};
                            jobEndTime = "quam";
                            jobLevel = JobJobLevelEnum.ENTRY_LEVEL;
                            jobStartTime = "vero";
                            languageCode = "nostrum";
                            name = "Percy Mohr";
                            postingExpireTime = "voluptatem";
                            postingPublishTime = "porro";
                            postingRegion = JobPostingRegionEnum.POSTING_REGION_UNSPECIFIED;
                            processingOptions = new ProcessingOptions() {{
                                disableStreetAddressResolution = false;
                                htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.HTML_SANITIZATION_DISABLED;
                            }};
                            promotionValue = 621479;
                            qualifications = "eaque";
                            requisitionId = "occaecati";
                            responsibilities = "rerum";
                            title = "Mrs.";
                            visibility = JobVisibilityEnum.SHARED_WITH_PUBLIC;
                        }}),
                        add(new JobInput() {{
                            addresses = new String[]{{
                                add("modi"),
                                add("iste"),
                                add("dolorum"),
                                add("deleniti"),
                            }};
                            applicationInfo = new ApplicationInfo() {{
                                emails = new String[]{{
                                    add("provident"),
                                    add("nobis"),
                                    add("libero"),
                                    add("delectus"),
                                }};
                                instruction = "quaerat";
                                uris = new String[]{{
                                    add("aliquid"),
                                    add("dolorem"),
                                    add("dolorem"),
                                }};
                            }};
                            company = "Dibbert Inc";
                            compensationInfo = new CompensationInfo() {{
                                annualizedBaseCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "hic";
                                        nanos = 569574;
                                        units = "cum";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "voluptate";
                                        nanos = 490459;
                                        units = "reiciendis";
                                    }};
                                }};
                                annualizedTotalCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "amet";
                                        nanos = 680545;
                                        units = "numquam";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "veritatis";
                                        nanos = 58029;
                                        units = "ipsa";
                                    }};
                                }};
                                entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "odio";
                                            nanos = 311796;
                                            units = "accusamus";
                                        }};
                                        description = "quidem";
                                        expectedUnitsPerYear = 9764.05;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "voluptas";
                                                nanos = 617658;
                                                units = "eos";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "atque";
                                                nanos = 24678;
                                                units = "fugiat";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.COMPENSATION_TYPE_UNSPECIFIED;
                                        unit = CompensationEntryUnitEnum.YEARLY;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "dolorum";
                                            nanos = 478596;
                                            units = "voluptate";
                                        }};
                                        description = "dolorum";
                                        expectedUnitsPerYear = 5365.79;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "omnis";
                                                nanos = 896672;
                                                units = "distinctio";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "asperiores";
                                                nanos = 469497;
                                                units = "ipsum";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.EQUITY;
                                        unit = CompensationEntryUnitEnum.YEARLY;
                                    }}),
                                }};
                            }};
                            customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                                put("eius", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("perferendis"),
                                    }};
                                    stringValues = new String[]{{
                                        add("optio"),
                                    }};
                                }});
                                put("accusamus", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("saepe"),
                                        add("suscipit"),
                                    }};
                                    stringValues = new String[]{{
                                        add("provident"),
                                        add("minima"),
                                        add("repellendus"),
                                    }};
                                }});
                                put("totam", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("alias"),
                                        add("at"),
                                        add("quaerat"),
                                    }};
                                    stringValues = new String[]{{
                                        add("vel"),
                                        add("quod"),
                                    }};
                                }});
                                put("officiis", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("dolorum"),
                                    }};
                                    stringValues = new String[]{{
                                        add("esse"),
                                        add("harum"),
                                        add("iusto"),
                                        add("ipsum"),
                                    }};
                                }});
                            }};
                            degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                                add(JobDegreeTypesEnum.DOCTORAL_OR_EQUIVALENT),
                                add(JobDegreeTypesEnum.LOWER_SECONDARY_EDUCATION),
                                add(JobDegreeTypesEnum.BACHELORS_OR_EQUIVALENT),
                                add(JobDegreeTypesEnum.MASTERS_OR_EQUIVALENT),
                            }};
                            department = "numquam";
                            derivedInfo = new JobDerivedInfo() {{
                                jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                    add(JobDerivedInfoJobCategoriesEnum.BUSINESS_OPERATIONS),
                                    add(JobDerivedInfoJobCategoriesEnum.SPORTS_FITNESS_AND_RECREATION),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 4717.52;
                                            longitude = 256.62;
                                        }};
                                        locationType = LocationLocationTypeEnum.SUB_LOCALITY1;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("sed"),
                                            }};
                                            administrativeArea = "vel";
                                            languageCode = "libero";
                                            locality = "voluptas";
                                            organization = "deserunt";
                                            postalCode = "22158";
                                            recipients = new String[]{{
                                                add("soluta"),
                                                add("dicta"),
                                                add("laborum"),
                                                add("totam"),
                                            }};
                                            regionCode = "incidunt";
                                            revision = 132068;
                                            sortingCode = "dolores";
                                            sublocality = "distinctio";
                                        }};
                                        radiusMiles = 7044.74;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 3960.6;
                                            longitude = 4631.5;
                                        }};
                                        locationType = LocationLocationTypeEnum.SUB_LOCALITY;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("qui"),
                                                add("neque"),
                                                add("fugit"),
                                                add("magni"),
                                            }};
                                            administrativeArea = "odio";
                                            languageCode = "sunt";
                                            locality = "ullam";
                                            organization = "nam";
                                            postalCode = "07770-9207";
                                            recipients = new String[]{{
                                                add("tempore"),
                                                add("cupiditate"),
                                                add("aperiam"),
                                            }};
                                            regionCode = "delectus";
                                            revision = 209157;
                                            sortingCode = "dolore";
                                            sublocality = "labore";
                                        }};
                                        radiusMiles = 2408.29;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 6772.63;
                                            longitude = 1002.94;
                                        }};
                                        locationType = LocationLocationTypeEnum.LOCATION_TYPE_UNSPECIFIED;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("quas"),
                                            }};
                                            administrativeArea = "itaque";
                                            languageCode = "consequatur";
                                            locality = "est";
                                            organization = "repellendus";
                                            postalCode = "92751-0545";
                                            recipients = new String[]{{
                                                add("quisquam"),
                                                add("vero"),
                                                add("omnis"),
                                                add("quis"),
                                            }};
                                            regionCode = "ipsum";
                                            revision = 961571;
                                            sortingCode = "voluptate";
                                            sublocality = "consectetur";
                                        }};
                                        radiusMiles = 8788.7;
                                    }}),
                                }};
                            }};
                            description = "tenetur";
                            employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                                add(JobEmploymentTypesEnum.OTHER_EMPLOYMENT_TYPE),
                                add(JobEmploymentTypesEnum.VOLUNTEER),
                            }};
                            incentives = "quod";
                            jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                                add(JobJobBenefitsEnum.PARENTAL_LEAVE),
                                add(JobJobBenefitsEnum.RETIREMENT_PLAN),
                            }};
                            jobEndTime = "vero";
                            jobLevel = JobJobLevelEnum.EXPERIENCED;
                            jobStartTime = "dolore";
                            languageCode = "quibusdam";
                            name = "Earl Mosciski DVM";
                            postingExpireTime = "exercitationem";
                            postingPublishTime = "nulla";
                            postingRegion = JobPostingRegionEnum.POSTING_REGION_UNSPECIFIED;
                            processingOptions = new ProcessingOptions() {{
                                disableStreetAddressResolution = false;
                                htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.SIMPLE_FORMATTING_ONLY;
                            }};
                            promotionValue = 981830;
                            qualifications = "doloribus";
                            requisitionId = "iusto";
                            responsibilities = "eligendi";
                            title = "Ms.";
                            visibility = JobVisibilityEnum.VISIBILITY_UNSPECIFIED;
                        }}),
                    }};
                }};;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "ea";
                key = "aspernatur";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "possimus";
                uploadType = "magnam";
                uploadProtocol = "ratione";
            }};            

            JobsProjectsTenantsJobsBatchCreateResponse res = sdk.projects.jobsProjectsTenantsJobsBatchCreate(req, new JobsProjectsTenantsJobsBatchCreateSecurity() {{
                option1 = new JobsProjectsTenantsJobsBatchCreateSecurityOption1("ex", "laudantium") {{
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

## jobsProjectsTenantsJobsBatchDelete

Begins executing a batch delete jobs operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchDeleteRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchDeleteResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchDeleteSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchDeleteSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeleteJobsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsJobsBatchDeleteRequest req = new JobsProjectsTenantsJobsBatchDeleteRequest("dicta") {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeleteJobsRequest = new BatchDeleteJobsRequest() {{
                    names = new String[]{{
                        add("quasi"),
                        add("ex"),
                        add("nulla"),
                        add("excepturi"),
                    }};
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "sapiente";
                fields = "quisquam";
                key = "saepe";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "corporis";
                uploadProtocol = "veniam";
            }};            

            JobsProjectsTenantsJobsBatchDeleteResponse res = sdk.projects.jobsProjectsTenantsJobsBatchDelete(req, new JobsProjectsTenantsJobsBatchDeleteSecurity() {{
                option1 = new JobsProjectsTenantsJobsBatchDeleteSecurityOption1("aliquid", "inventore") {{
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

## jobsProjectsTenantsJobsBatchUpdate

Begins executing a batch update jobs operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchUpdateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchUpdateResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchUpdateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchUpdateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsBatchUpdateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationInfo;
import org.openapis.openapi.models.shared.BatchUpdateJobsRequestInput;
import org.openapis.openapi.models.shared.CompensationEntry;
import org.openapis.openapi.models.shared.CompensationEntryTypeEnum;
import org.openapis.openapi.models.shared.CompensationEntryUnitEnum;
import org.openapis.openapi.models.shared.CompensationInfo;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.JobDegreeTypesEnum;
import org.openapis.openapi.models.shared.JobDerivedInfo;
import org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum;
import org.openapis.openapi.models.shared.JobEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobInput;
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

            JobsProjectsTenantsJobsBatchUpdateRequest req = new JobsProjectsTenantsJobsBatchUpdateRequest("magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                batchUpdateJobsRequestInput = new BatchUpdateJobsRequestInput() {{
                    jobs = new org.openapis.openapi.models.shared.JobInput[]{{
                        add(new JobInput() {{
                            addresses = new String[]{{
                                add("recusandae"),
                            }};
                            applicationInfo = new ApplicationInfo() {{
                                emails = new String[]{{
                                    add("minima"),
                                }};
                                instruction = "eaque";
                                uris = new String[]{{
                                    add("libero"),
                                    add("aut"),
                                    add("aut"),
                                    add("deleniti"),
                                }};
                            }};
                            company = "Haag, Corkery and Tillman";
                            compensationInfo = new CompensationInfo() {{
                                annualizedBaseCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "inventore";
                                        nanos = 250622;
                                        units = "et";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "dolorum";
                                        nanos = 672048;
                                        units = "placeat";
                                    }};
                                }};
                                annualizedTotalCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "velit";
                                        nanos = 432148;
                                        units = "autem";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "nobis";
                                        nanos = 557369;
                                        units = "assumenda";
                                    }};
                                }};
                                entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "voluptas";
                                            nanos = 727044;
                                            units = "quasi";
                                        }};
                                        description = "tempora";
                                        expectedUnitsPerYear = 2561.39;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "explicabo";
                                                nanos = 591935;
                                                units = "ipsa";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "molestiae";
                                                nanos = 301598;
                                                units = "odio";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.BONUS;
                                        unit = CompensationEntryUnitEnum.WEEKLY;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "esse";
                                            nanos = 524593;
                                            units = "fuga";
                                        }};
                                        description = "reprehenderit";
                                        expectedUnitsPerYear = 6956.26;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "fugiat";
                                                nanos = 283519;
                                                units = "eum";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "suscipit";
                                                nanos = 826871;
                                                units = "eos";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.EQUITY;
                                        unit = CompensationEntryUnitEnum.ONE_TIME;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "veritatis";
                                            nanos = 56848;
                                            units = "id";
                                        }};
                                        description = "quidem";
                                        expectedUnitsPerYear = 2065.94;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "quo";
                                                nanos = 847276;
                                                units = "quo";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "fuga";
                                                nanos = 259422;
                                                units = "eos";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.SIGNING_BONUS;
                                        unit = CompensationEntryUnitEnum.COMPENSATION_UNIT_UNSPECIFIED;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "cupiditate";
                                            nanos = 9688;
                                            units = "tempora";
                                        }};
                                        description = "debitis";
                                        expectedUnitsPerYear = 3708.53;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "aspernatur";
                                                nanos = 197054;
                                                units = "quo";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "esse";
                                                nanos = 925164;
                                                units = "aperiam";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.COMMISSIONS;
                                        unit = CompensationEntryUnitEnum.ONE_TIME;
                                    }}),
                                }};
                            }};
                            customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                                put("inventore", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("totam"),
                                        add("accusamus"),
                                    }};
                                    stringValues = new String[]{{
                                        add("odio"),
                                        add("occaecati"),
                                    }};
                                }});
                                put("commodi", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("dolores"),
                                        add("deserunt"),
                                        add("molestiae"),
                                        add("accusantium"),
                                    }};
                                    stringValues = new String[]{{
                                        add("eum"),
                                        add("quas"),
                                        add("praesentium"),
                                        add("consequuntur"),
                                    }};
                                }});
                            }};
                            degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                                add(JobDegreeTypesEnum.PRIMARY_EDUCATION),
                                add(JobDegreeTypesEnum.BACHELORS_OR_EQUIVALENT),
                                add(JobDegreeTypesEnum.ASSOCIATES_OR_EQUIVALENT),
                            }};
                            department = "incidunt";
                            derivedInfo = new JobDerivedInfo() {{
                                jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                    add(JobDerivedInfoJobCategoriesEnum.ADVERTISING_AND_MARKETING),
                                    add(JobDerivedInfoJobCategoriesEnum.CUSTOMER_SERVICE),
                                    add(JobDerivedInfoJobCategoriesEnum.ENTERTAINMENT_AND_TRAVEL),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 9564.06;
                                            longitude = 1598.7;
                                        }};
                                        locationType = LocationLocationTypeEnum.ADMINISTRATIVE_AREA;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("saepe"),
                                            }};
                                            administrativeArea = "occaecati";
                                            languageCode = "atque";
                                            locality = "et";
                                            organization = "esse";
                                            postalCode = "80487-8309";
                                            recipients = new String[]{{
                                                add("harum"),
                                                add("molestiae"),
                                            }};
                                            regionCode = "rerum";
                                            revision = 580197;
                                            sortingCode = "minima";
                                            sublocality = "distinctio";
                                        }};
                                        radiusMiles = 7567.79;
                                    }}),
                                }};
                            }};
                            description = "sit";
                            employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                                add(JobEmploymentTypesEnum.PER_DIEM),
                                add(JobEmploymentTypesEnum.PART_TIME),
                                add(JobEmploymentTypesEnum.PER_DIEM),
                            }};
                            incentives = "consequuntur";
                            jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                                add(JobJobBenefitsEnum.SICK_DAYS),
                            }};
                            jobEndTime = "quaerat";
                            jobLevel = JobJobLevelEnum.EXECUTIVE;
                            jobStartTime = "consectetur";
                            languageCode = "esse";
                            name = "Eduardo Wilkinson";
                            postingExpireTime = "esse";
                            postingPublishTime = "quasi";
                            postingRegion = JobPostingRegionEnum.TELECOMMUTE;
                            processingOptions = new ProcessingOptions() {{
                                disableStreetAddressResolution = false;
                                htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.HTML_SANITIZATION_DISABLED;
                            }};
                            promotionValue = 575751;
                            qualifications = "pariatur";
                            requisitionId = "possimus";
                            responsibilities = "quia";
                            title = "Dr.";
                            visibility = JobVisibilityEnum.SHARED_WITH_PUBLIC;
                        }}),
                        add(new JobInput() {{
                            addresses = new String[]{{
                                add("veritatis"),
                                add("consequuntur"),
                                add("quasi"),
                                add("similique"),
                            }};
                            applicationInfo = new ApplicationInfo() {{
                                emails = new String[]{{
                                    add("aliquid"),
                                    add("tenetur"),
                                    add("quae"),
                                }};
                                instruction = "earum";
                                uris = new String[]{{
                                    add("in"),
                                    add("eius"),
                                }};
                            }};
                            company = "Stanton, Roberts and Bartoletti";
                            compensationInfo = new CompensationInfo() {{
                                annualizedBaseCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "aliquam";
                                        nanos = 958983;
                                        units = "dicta";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "ullam";
                                        nanos = 443879;
                                        units = "ullam";
                                    }};
                                }};
                                annualizedTotalCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "nisi";
                                        nanos = 16328;
                                        units = "voluptatum";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "qui";
                                        nanos = 845358;
                                        units = "ex";
                                    }};
                                }};
                                entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "itaque";
                                            nanos = 680270;
                                            units = "architecto";
                                        }};
                                        description = "omnis";
                                        expectedUnitsPerYear = 9453.02;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "quasi";
                                                nanos = 869489;
                                                units = "et";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "voluptate";
                                                nanos = 55965;
                                                units = "minima";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.COMPENSATION_TYPE_UNSPECIFIED;
                                        unit = CompensationEntryUnitEnum.HOURLY;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "adipisci";
                                            nanos = 614465;
                                            units = "temporibus";
                                        }};
                                        description = "accusantium";
                                        expectedUnitsPerYear = 5223.71;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "aut";
                                                nanos = 513075;
                                                units = "eum";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "mollitia";
                                                nanos = 68074;
                                                units = "corrupti";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.BONUS;
                                        unit = CompensationEntryUnitEnum.COMPENSATION_UNIT_UNSPECIFIED;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "dolor";
                                            nanos = 580152;
                                            units = "numquam";
                                        }};
                                        description = "impedit";
                                        expectedUnitsPerYear = 1310.55;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "voluptas";
                                                nanos = 12036;
                                                units = "dignissimos";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "dicta";
                                                nanos = 981640;
                                                units = "natus";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.BONUS;
                                        unit = CompensationEntryUnitEnum.OTHER_COMPENSATION_UNIT;
                                    }}),
                                }};
                            }};
                            customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                                put("asperiores", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("ea"),
                                    }};
                                    stringValues = new String[]{{
                                        add("consequuntur"),
                                        add("repellendus"),
                                    }};
                                }});
                                put("officia", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("dignissimos"),
                                        add("officia"),
                                        add("asperiores"),
                                        add("nemo"),
                                    }};
                                    stringValues = new String[]{{
                                        add("quaerat"),
                                    }};
                                }});
                            }};
                            degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                                add(JobDegreeTypesEnum.MASTERS_OR_EQUIVALENT),
                                add(JobDegreeTypesEnum.LOWER_SECONDARY_EDUCATION),
                                add(JobDegreeTypesEnum.DEGREE_TYPE_UNSPECIFIED),
                                add(JobDegreeTypesEnum.LOWER_SECONDARY_EDUCATION),
                            }};
                            department = "fuga";
                            derivedInfo = new JobDerivedInfo() {{
                                jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                    add(JobDerivedInfoJobCategoriesEnum.EDUCATION),
                                    add(JobDerivedInfoJobCategoriesEnum.CLEANING_AND_FACILITIES),
                                    add(JobDerivedInfoJobCategoriesEnum.MANUFACTURING_AND_WAREHOUSE),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 9268.8;
                                            longitude = 5173.09;
                                        }};
                                        locationType = LocationLocationTypeEnum.NEIGHBORHOOD;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("ducimus"),
                                                add("quos"),
                                            }};
                                            administrativeArea = "vel";
                                            languageCode = "labore";
                                            locality = "possimus";
                                            organization = "facilis";
                                            postalCode = "44398-3930";
                                            recipients = new String[]{{
                                                add("consectetur"),
                                                add("in"),
                                                add("exercitationem"),
                                            }};
                                            regionCode = "earum";
                                            revision = 814967;
                                            sortingCode = "numquam";
                                            sublocality = "doloribus";
                                        }};
                                        radiusMiles = 3817.6;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 9689.72;
                                            longitude = 6971.42;
                                        }};
                                        locationType = LocationLocationTypeEnum.NEIGHBORHOOD;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("dolore"),
                                                add("sunt"),
                                                add("asperiores"),
                                                add("adipisci"),
                                            }};
                                            administrativeArea = "non";
                                            languageCode = "amet";
                                            locality = "beatae";
                                            organization = "dignissimos";
                                            postalCode = "82363-0971";
                                            recipients = new String[]{{
                                                add("similique"),
                                                add("tempora"),
                                                add("aspernatur"),
                                                add("voluptas"),
                                            }};
                                            regionCode = "voluptas";
                                            revision = 374296;
                                            sortingCode = "minima";
                                            sublocality = "nobis";
                                        }};
                                        radiusMiles = 6801.16;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 2378.07;
                                            longitude = 7955.35;
                                        }};
                                        locationType = LocationLocationTypeEnum.COUNTRY;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("in"),
                                                add("dolore"),
                                                add("aliquam"),
                                            }};
                                            administrativeArea = "officiis";
                                            languageCode = "temporibus";
                                            locality = "ullam";
                                            organization = "adipisci";
                                            postalCode = "55926-5859";
                                            recipients = new String[]{{
                                                add("nobis"),
                                                add("sit"),
                                            }};
                                            regionCode = "rerum";
                                            revision = 148829;
                                            sortingCode = "reiciendis";
                                            sublocality = "explicabo";
                                        }};
                                        radiusMiles = 9944.01;
                                    }}),
                                }};
                            }};
                            description = "facilis";
                            employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                                add(JobEmploymentTypesEnum.VOLUNTEER),
                                add(JobEmploymentTypesEnum.EMPLOYMENT_TYPE_UNSPECIFIED),
                            }};
                            incentives = "iste";
                            jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                                add(JobJobBenefitsEnum.RETIREMENT_PLAN),
                                add(JobJobBenefitsEnum.CHILD_CARE),
                            }};
                            jobEndTime = "in";
                            jobLevel = JobJobLevelEnum.EXPERIENCED;
                            jobStartTime = "quidem";
                            languageCode = "explicabo";
                            name = "Geneva Bradtke";
                            postingExpireTime = "debitis";
                            postingPublishTime = "illo";
                            postingRegion = JobPostingRegionEnum.TELECOMMUTE;
                            processingOptions = new ProcessingOptions() {{
                                disableStreetAddressResolution = false;
                                htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.HTML_SANITIZATION_UNSPECIFIED;
                            }};
                            promotionValue = 546885;
                            qualifications = "maiores";
                            requisitionId = "incidunt";
                            responsibilities = "sed";
                            title = "Ms.";
                            visibility = JobVisibilityEnum.ACCOUNT_ONLY;
                        }}),
                        add(new JobInput() {{
                            addresses = new String[]{{
                                add("ipsum"),
                                add("ea"),
                                add("occaecati"),
                                add("quos"),
                            }};
                            applicationInfo = new ApplicationInfo() {{
                                emails = new String[]{{
                                    add("tempora"),
                                    add("tempora"),
                                    add("voluptate"),
                                    add("reiciendis"),
                                }};
                                instruction = "ex";
                                uris = new String[]{{
                                    add("non"),
                                }};
                            }};
                            company = "Lakin, Quitzon and Hagenes";
                            compensationInfo = new CompensationInfo() {{
                                annualizedBaseCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "incidunt";
                                        nanos = 373035;
                                        units = "debitis";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "rem";
                                        nanos = 26522;
                                        units = "nobis";
                                    }};
                                }};
                                annualizedTotalCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "error";
                                        nanos = 333507;
                                        units = "minima";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "recusandae";
                                        nanos = 967122;
                                        units = "nulla";
                                    }};
                                }};
                                entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "aperiam";
                                            nanos = 901483;
                                            units = "numquam";
                                        }};
                                        description = "veniam";
                                        expectedUnitsPerYear = 4461.35;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "officiis";
                                                nanos = 104627;
                                                units = "laudantium";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "exercitationem";
                                                nanos = 510629;
                                                units = "cum";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.SIGNING_BONUS;
                                        unit = CompensationEntryUnitEnum.YEARLY;
                                    }}),
                                }};
                            }};
                            customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                                put("error", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("expedita"),
                                        add("debitis"),
                                        add("neque"),
                                        add("dolorum"),
                                    }};
                                    stringValues = new String[]{{
                                        add("officia"),
                                        add("dolorum"),
                                    }};
                                }});
                                put("corrupti", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("tempora"),
                                        add("atque"),
                                        add("fugit"),
                                        add("ut"),
                                    }};
                                    stringValues = new String[]{{
                                        add("voluptatem"),
                                        add("culpa"),
                                        add("expedita"),
                                        add("magnam"),
                                    }};
                                }});
                                put("consequatur", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("ipsam"),
                                        add("sit"),
                                    }};
                                    stringValues = new String[]{{
                                        add("quas"),
                                        add("repudiandae"),
                                        add("corporis"),
                                    }};
                                }});
                            }};
                            degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                                add(JobDegreeTypesEnum.ADULT_REMEDIAL_EDUCATION),
                            }};
                            department = "ex";
                            derivedInfo = new JobDerivedInfo() {{
                                jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                    add(JobDerivedInfoJobCategoriesEnum.JOB_CATEGORY_UNSPECIFIED),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 3426.11;
                                            longitude = 9061.72;
                                        }};
                                        locationType = LocationLocationTypeEnum.SUB_LOCALITY;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("incidunt"),
                                            }};
                                            administrativeArea = "reiciendis";
                                            languageCode = "dolorem";
                                            locality = "harum";
                                            organization = "dicta";
                                            postalCode = "52656";
                                            recipients = new String[]{{
                                                add("tenetur"),
                                                add("laboriosam"),
                                                add("alias"),
                                            }};
                                            regionCode = "amet";
                                            revision = 647197;
                                            sortingCode = "voluptate";
                                            sublocality = "unde";
                                        }};
                                        radiusMiles = 9720.83;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 5887.4;
                                            longitude = 8338.19;
                                        }};
                                        locationType = LocationLocationTypeEnum.STREET_ADDRESS;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("perferendis"),
                                                add("est"),
                                                add("quidem"),
                                                add("reprehenderit"),
                                            }};
                                            administrativeArea = "facere";
                                            languageCode = "fuga";
                                            locality = "praesentium";
                                            organization = "mollitia";
                                            postalCode = "07905";
                                            recipients = new String[]{{
                                                add("asperiores"),
                                                add("totam"),
                                            }};
                                            regionCode = "suscipit";
                                            revision = 693957;
                                            sortingCode = "maxime";
                                            sublocality = "et";
                                        }};
                                        radiusMiles = 4610.07;
                                    }}),
                                }};
                            }};
                            description = "amet";
                            employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                                add(JobEmploymentTypesEnum.CONTRACT_TO_HIRE),
                                add(JobEmploymentTypesEnum.TEMPORARY),
                                add(JobEmploymentTypesEnum.INTERN),
                                add(JobEmploymentTypesEnum.FLY_IN_FLY_OUT),
                            }};
                            incentives = "officiis";
                            jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                                add(JobJobBenefitsEnum.PARENTAL_LEAVE),
                                add(JobJobBenefitsEnum.DOMESTIC_PARTNER),
                                add(JobJobBenefitsEnum.CHILD_CARE),
                                add(JobJobBenefitsEnum.FLEXIBLE_HOURS),
                            }};
                            jobEndTime = "maiores";
                            jobLevel = JobJobLevelEnum.MANAGER;
                            jobStartTime = "at";
                            languageCode = "error";
                            name = "Shane Walker";
                            postingExpireTime = "sunt";
                            postingPublishTime = "recusandae";
                            postingRegion = JobPostingRegionEnum.NATION;
                            processingOptions = new ProcessingOptions() {{
                                disableStreetAddressResolution = false;
                                htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.SIMPLE_FORMATTING_ONLY;
                            }};
                            promotionValue = 287119;
                            qualifications = "reiciendis";
                            requisitionId = "doloremque";
                            responsibilities = "repudiandae";
                            title = "Mr.";
                            visibility = JobVisibilityEnum.VISIBILITY_UNSPECIFIED;
                        }}),
                        add(new JobInput() {{
                            addresses = new String[]{{
                                add("dolores"),
                            }};
                            applicationInfo = new ApplicationInfo() {{
                                emails = new String[]{{
                                    add("laboriosam"),
                                    add("velit"),
                                }};
                                instruction = "a";
                                uris = new String[]{{
                                    add("magnam"),
                                    add("saepe"),
                                    add("consequuntur"),
                                }};
                            }};
                            company = "Torphy - Metz";
                            compensationInfo = new CompensationInfo() {{
                                annualizedBaseCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "in";
                                        nanos = 238043;
                                        units = "eveniet";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "occaecati";
                                        nanos = 160230;
                                        units = "fugit";
                                    }};
                                }};
                                annualizedTotalCompensationRange = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "id";
                                        nanos = 335631;
                                        units = "reprehenderit";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "error";
                                        nanos = 76486;
                                        units = "corporis";
                                    }};
                                }};
                                entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "eveniet";
                                            nanos = 247399;
                                            units = "vero";
                                        }};
                                        description = "doloremque";
                                        expectedUnitsPerYear = 4341.56;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "ipsa";
                                                nanos = 517612;
                                                units = "quae";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "molestiae";
                                                nanos = 907733;
                                                units = "qui";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.COMMISSIONS;
                                        unit = CompensationEntryUnitEnum.WEEKLY;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "necessitatibus";
                                            nanos = 187552;
                                            units = "laborum";
                                        }};
                                        description = "distinctio";
                                        expectedUnitsPerYear = 5289.4;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "rem";
                                                nanos = 304446;
                                                units = "ad";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "repellat";
                                                nanos = 3099;
                                                units = "corporis";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.PROFIT_SHARING;
                                        unit = CompensationEntryUnitEnum.WEEKLY;
                                    }}),
                                    add(new CompensationEntry() {{
                                        amount = new Money() {{
                                            currencyCode = "mollitia";
                                            nanos = 378245;
                                            units = "alias";
                                        }};
                                        description = "maiores";
                                        expectedUnitsPerYear = 9702.22;
                                        range = new CompensationRange() {{
                                            maxCompensation = new Money() {{
                                                currencyCode = "dolores";
                                                nanos = 663866;
                                                units = "minima";
                                            }};
                                            minCompensation = new Money() {{
                                                currencyCode = "dolore";
                                                nanos = 680349;
                                                units = "nesciunt";
                                            }};
                                        }};
                                        type = CompensationEntryTypeEnum.COMPENSATION_TYPE_UNSPECIFIED;
                                        unit = CompensationEntryUnitEnum.OTHER_COMPENSATION_UNIT;
                                    }}),
                                }};
                            }};
                            customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                                put("quaerat", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("ex"),
                                        add("ut"),
                                    }};
                                    stringValues = new String[]{{
                                        add("adipisci"),
                                        add("debitis"),
                                        add("laudantium"),
                                    }};
                                }});
                                put("eum", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("recusandae"),
                                        add("esse"),
                                    }};
                                    stringValues = new String[]{{
                                        add("quis"),
                                        add("eum"),
                                        add("reiciendis"),
                                    }};
                                }});
                                put("provident", new CustomAttribute() {{
                                    filterable = false;
                                    keywordSearchable = false;
                                    longValues = new String[]{{
                                        add("ullam"),
                                    }};
                                    stringValues = new String[]{{
                                        add("animi"),
                                    }};
                                }});
                            }};
                            degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                                add(JobDegreeTypesEnum.ASSOCIATES_OR_EQUIVALENT),
                                add(JobDegreeTypesEnum.ASSOCIATES_OR_EQUIVALENT),
                            }};
                            department = "possimus";
                            derivedInfo = new JobDerivedInfo() {{
                                jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                                    add(JobDerivedInfoJobCategoriesEnum.ENTERTAINMENT_AND_TRAVEL),
                                    add(JobDerivedInfoJobCategoriesEnum.ENTERTAINMENT_AND_TRAVEL),
                                    add(JobDerivedInfoJobCategoriesEnum.ACCOUNTING_AND_FINANCE),
                                }};
                                locations = new org.openapis.openapi.models.shared.Location[]{{
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 9846.32;
                                            longitude = 3518.93;
                                        }};
                                        locationType = LocationLocationTypeEnum.LOCALITY;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("earum"),
                                                add("officia"),
                                                add("laborum"),
                                            }};
                                            administrativeArea = "placeat";
                                            languageCode = "modi";
                                            locality = "voluptatibus";
                                            organization = "molestias";
                                            postalCode = "97162-3017";
                                            recipients = new String[]{{
                                                add("perferendis"),
                                            }};
                                            regionCode = "velit";
                                            revision = 137251;
                                            sortingCode = "eum";
                                            sublocality = "eius";
                                        }};
                                        radiusMiles = 5219.96;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 8710.83;
                                            longitude = 7730.84;
                                        }};
                                        locationType = LocationLocationTypeEnum.COUNTRY;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("eum"),
                                                add("dicta"),
                                                add("minima"),
                                                add("beatae"),
                                            }};
                                            administrativeArea = "cupiditate";
                                            languageCode = "provident";
                                            locality = "earum";
                                            organization = "soluta";
                                            postalCode = "80959-8373";
                                            recipients = new String[]{{
                                                add("fugit"),
                                            }};
                                            regionCode = "cumque";
                                            revision = 684935;
                                            sortingCode = "ratione";
                                            sublocality = "animi";
                                        }};
                                        radiusMiles = 8987.6;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 8620.63;
                                            longitude = 89.31;
                                        }};
                                        locationType = LocationLocationTypeEnum.COUNTRY;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("ducimus"),
                                            }};
                                            administrativeArea = "natus";
                                            languageCode = "occaecati";
                                            locality = "suscipit";
                                            organization = "adipisci";
                                            postalCode = "19880";
                                            recipients = new String[]{{
                                                add("nihil"),
                                                add("molestiae"),
                                            }};
                                            regionCode = "dicta";
                                            revision = 479754;
                                            sortingCode = "esse";
                                            sublocality = "praesentium";
                                        }};
                                        radiusMiles = 9799.63;
                                    }}),
                                    add(new Location() {{
                                        latLng = new LatLng() {{
                                            latitude = 9672.6;
                                            longitude = 4237.06;
                                        }};
                                        locationType = LocationLocationTypeEnum.COUNTRY;
                                        postalAddress = new PostalAddress() {{
                                            addressLines = new String[]{{
                                                add("doloremque"),
                                                add("dicta"),
                                                add("odio"),
                                                add("tempora"),
                                            }};
                                            administrativeArea = "esse";
                                            languageCode = "ex";
                                            locality = "consectetur";
                                            organization = "aliquid";
                                            postalCode = "61387";
                                            recipients = new String[]{{
                                                add("officia"),
                                                add("suscipit"),
                                            }};
                                            regionCode = "aliquid";
                                            revision = 21973;
                                            sortingCode = "eum";
                                            sublocality = "voluptas";
                                        }};
                                        radiusMiles = 6145.28;
                                    }}),
                                }};
                            }};
                            description = "id";
                            employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                                add(JobEmploymentTypesEnum.INTERN),
                            }};
                            incentives = "possimus";
                            jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                                add(JobJobBenefitsEnum.PARENTAL_LEAVE),
                                add(JobJobBenefitsEnum.RETIREMENT_PLAN),
                                add(JobJobBenefitsEnum.RETIREMENT_PLAN),
                                add(JobJobBenefitsEnum.DOMESTIC_PARTNER),
                            }};
                            jobEndTime = "deleniti";
                            jobLevel = JobJobLevelEnum.ENTRY_LEVEL;
                            jobStartTime = "vitae";
                            languageCode = "repellendus";
                            name = "Krista Jakubowski";
                            postingExpireTime = "expedita";
                            postingPublishTime = "voluptatem";
                            postingRegion = JobPostingRegionEnum.NATION;
                            processingOptions = new ProcessingOptions() {{
                                disableStreetAddressResolution = false;
                                htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.SIMPLE_FORMATTING_ONLY;
                            }};
                            promotionValue = 399660;
                            qualifications = "beatae";
                            requisitionId = "voluptatum";
                            responsibilities = "omnis";
                            title = "Mr.";
                            visibility = JobVisibilityEnum.SHARED_WITH_GOOGLE;
                        }}),
                    }};
                    updateMask = "est";
                }};;
                accessToken = "culpa";
                alt = AltEnum.JSON;
                callback = "sapiente";
                fields = "officiis";
                key = "architecto";
                oauthToken = "fuga";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "debitis";
                uploadProtocol = "voluptatem";
            }};            

            JobsProjectsTenantsJobsBatchUpdateResponse res = sdk.projects.jobsProjectsTenantsJobsBatchUpdate(req, new JobsProjectsTenantsJobsBatchUpdateSecurity() {{
                option1 = new JobsProjectsTenantsJobsBatchUpdateSecurityOption1("alias", "deleniti") {{
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

## jobsProjectsTenantsJobsCreate

Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsCreateRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsCreateResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsCreateSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationInfo;
import org.openapis.openapi.models.shared.CompensationEntry;
import org.openapis.openapi.models.shared.CompensationEntryTypeEnum;
import org.openapis.openapi.models.shared.CompensationEntryUnitEnum;
import org.openapis.openapi.models.shared.CompensationInfo;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.JobDegreeTypesEnum;
import org.openapis.openapi.models.shared.JobDerivedInfo;
import org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum;
import org.openapis.openapi.models.shared.JobEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobInput;
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

            JobsProjectsTenantsJobsCreateRequest req = new JobsProjectsTenantsJobsCreateRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                jobInput = new JobInput() {{
                    addresses = new String[]{{
                        add("rem"),
                        add("minus"),
                        add("nemo"),
                        add("asperiores"),
                    }};
                    applicationInfo = new ApplicationInfo() {{
                        emails = new String[]{{
                            add("ullam"),
                        }};
                        instruction = "perferendis";
                        uris = new String[]{{
                            add("totam"),
                            add("impedit"),
                            add("quibusdam"),
                            add("nam"),
                        }};
                    }};;
                    company = "Nader - Fadel";
                    compensationInfo = new CompensationInfo() {{
                        annualizedBaseCompensationRange = new CompensationRange() {{
                            maxCompensation = new Money() {{
                                currencyCode = "aliquam";
                                nanos = 80532;
                                units = "deleniti";
                            }};;
                            minCompensation = new Money() {{
                                currencyCode = "veritatis";
                                nanos = 274575;
                                units = "dolor";
                            }};;
                        }};;
                        annualizedTotalCompensationRange = new CompensationRange() {{
                            maxCompensation = new Money() {{
                                currencyCode = "consequatur";
                                nanos = 100014;
                                units = "sit";
                            }};;
                            minCompensation = new Money() {{
                                currencyCode = "modi";
                                nanos = 144286;
                                units = "ab";
                            }};;
                        }};;
                        entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                            add(new CompensationEntry() {{
                                amount = new Money() {{
                                    currencyCode = "quae";
                                    nanos = 222658;
                                    units = "fugiat";
                                }};
                                description = "ipsam";
                                expectedUnitsPerYear = 1621.2;
                                range = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "ipsa";
                                        nanos = 559682;
                                        units = "eveniet";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "impedit";
                                        nanos = 884952;
                                        units = "esse";
                                    }};
                                }};
                                type = CompensationEntryTypeEnum.OTHER_COMPENSATION_TYPE;
                                unit = CompensationEntryUnitEnum.HOURLY;
                            }}),
                            add(new CompensationEntry() {{
                                amount = new Money() {{
                                    currencyCode = "veniam";
                                    nanos = 199596;
                                    units = "expedita";
                                }};
                                description = "eum";
                                expectedUnitsPerYear = 4269.43;
                                range = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "voluptatum";
                                        nanos = 301692;
                                        units = "exercitationem";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "ab";
                                        nanos = 781480;
                                        units = "autem";
                                    }};
                                }};
                                type = CompensationEntryTypeEnum.COMMISSIONS;
                                unit = CompensationEntryUnitEnum.WEEKLY;
                            }}),
                            add(new CompensationEntry() {{
                                amount = new Money() {{
                                    currencyCode = "recusandae";
                                    nanos = 160393;
                                    units = "voluptatem";
                                }};
                                description = "exercitationem";
                                expectedUnitsPerYear = 8956.92;
                                range = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "quasi";
                                        nanos = 392569;
                                        units = "at";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "vero";
                                        nanos = 667593;
                                        units = "harum";
                                    }};
                                }};
                                type = CompensationEntryTypeEnum.BASE;
                                unit = CompensationEntryUnitEnum.OTHER_COMPENSATION_UNIT;
                            }}),
                        }};
                    }};;
                    customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                        put("optio", new CustomAttribute() {{
                            filterable = false;
                            keywordSearchable = false;
                            longValues = new String[]{{
                                add("nemo"),
                                add("voluptate"),
                                add("blanditiis"),
                            }};
                            stringValues = new String[]{{
                                add("voluptas"),
                                add("numquam"),
                                add("nemo"),
                            }};
                        }});
                        put("quos", new CustomAttribute() {{
                            filterable = false;
                            keywordSearchable = false;
                            longValues = new String[]{{
                                add("aspernatur"),
                                add("ducimus"),
                            }};
                            stringValues = new String[]{{
                                add("fuga"),
                            }};
                        }});
                        put("laudantium", new CustomAttribute() {{
                            filterable = false;
                            keywordSearchable = false;
                            longValues = new String[]{{
                                add("quasi"),
                                add("rem"),
                            }};
                            stringValues = new String[]{{
                                add("dicta"),
                                add("nisi"),
                                add("consequuntur"),
                                add("consectetur"),
                            }};
                        }});
                        put("aperiam", new CustomAttribute() {{
                            filterable = false;
                            keywordSearchable = false;
                            longValues = new String[]{{
                                add("reiciendis"),
                                add("soluta"),
                                add("alias"),
                            }};
                            stringValues = new String[]{{
                                add("eos"),
                                add("occaecati"),
                                add("iste"),
                            }};
                        }});
                    }};
                    degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                        add(JobDegreeTypesEnum.DEGREE_TYPE_UNSPECIFIED),
                    }};
                    department = "fuga";
                    derivedInfo = new JobDerivedInfo() {{
                        jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                            add(JobDerivedInfoJobCategoriesEnum.TRANSPORTATION_AND_LOGISTICS),
                            add(JobDerivedInfoJobCategoriesEnum.PERSONAL_CARE_AND_SERVICES),
                            add(JobDerivedInfoJobCategoriesEnum.MANAGEMENT),
                            add(JobDerivedInfoJobCategoriesEnum.SPORTS_FITNESS_AND_RECREATION),
                        }};
                        locations = new org.openapis.openapi.models.shared.Location[]{{
                            add(new Location() {{
                                latLng = new LatLng() {{
                                    latitude = 5076.36;
                                    longitude = 8026.92;
                                }};
                                locationType = LocationLocationTypeEnum.SUB_ADMINISTRATIVE_AREA;
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("quos"),
                                        add("commodi"),
                                        add("itaque"),
                                        add("commodi"),
                                    }};
                                    administrativeArea = "totam";
                                    languageCode = "earum";
                                    locality = "modi";
                                    organization = "nam";
                                    postalCode = "03400-2935";
                                    recipients = new String[]{{
                                        add("deserunt"),
                                        add("esse"),
                                        add("nemo"),
                                        add("reprehenderit"),
                                    }};
                                    regionCode = "est";
                                    revision = 336102;
                                    sortingCode = "sint";
                                    sublocality = "accusamus";
                                }};
                                radiusMiles = 7746.84;
                            }}),
                            add(new Location() {{
                                latLng = new LatLng() {{
                                    latitude = 9450.27;
                                    longitude = 9001.03;
                                }};
                                locationType = LocationLocationTypeEnum.STREET_ADDRESS;
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("voluptas"),
                                        add("debitis"),
                                    }};
                                    administrativeArea = "delectus";
                                    languageCode = "quae";
                                    locality = "minus";
                                    organization = "fuga";
                                    postalCode = "22527-1797";
                                    recipients = new String[]{{
                                        add("iusto"),
                                        add("voluptate"),
                                    }};
                                    regionCode = "sequi";
                                    revision = 493958;
                                    sortingCode = "neque";
                                    sublocality = "quo";
                                }};
                                radiusMiles = 5354.68;
                            }}),
                        }};
                    }};;
                    description = "quibusdam";
                    employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                        add(JobEmploymentTypesEnum.FULL_TIME),
                        add(JobEmploymentTypesEnum.OTHER_EMPLOYMENT_TYPE),
                    }};
                    incentives = "vel";
                    jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                        add(JobJobBenefitsEnum.VACATION),
                        add(JobJobBenefitsEnum.JOB_BENEFIT_UNSPECIFIED),
                    }};
                    jobEndTime = "facere";
                    jobLevel = JobJobLevelEnum.DIRECTOR;
                    jobStartTime = "architecto";
                    languageCode = "voluptatibus";
                    name = "Robyn Gutmann Jr.";
                    postingExpireTime = "vel";
                    postingPublishTime = "ea";
                    postingRegion = JobPostingRegionEnum.POSTING_REGION_UNSPECIFIED;
                    processingOptions = new ProcessingOptions() {{
                        disableStreetAddressResolution = false;
                        htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.SIMPLE_FORMATTING_ONLY;
                    }};;
                    promotionValue = 568218;
                    qualifications = "eum";
                    requisitionId = "velit";
                    responsibilities = "ut";
                    title = "Ms.";
                    visibility = JobVisibilityEnum.SHARED_WITH_PUBLIC;
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "iste";
                key = "itaque";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "itaque";
                uploadProtocol = "velit";
            }};            

            JobsProjectsTenantsJobsCreateResponse res = sdk.projects.jobsProjectsTenantsJobsCreate(req, new JobsProjectsTenantsJobsCreateSecurity() {{
                option1 = new JobsProjectsTenantsJobsCreateSecurityOption1("laborum", "non") {{
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

## jobsProjectsTenantsJobsDelete

Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsDeleteRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsDeleteResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsDeleteSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsJobsDeleteRequest req = new JobsProjectsTenantsJobsDeleteRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.JSON;
                callback = "consequatur";
                fields = "officia";
                key = "recusandae";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "voluptas";
                uploadProtocol = "facilis";
            }};            

            JobsProjectsTenantsJobsDeleteResponse res = sdk.projects.jobsProjectsTenantsJobsDelete(req, new JobsProjectsTenantsJobsDeleteSecurity() {{
                option1 = new JobsProjectsTenantsJobsDeleteSecurityOption1("placeat", "perspiciatis") {{
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

## jobsProjectsTenantsJobsGet

Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsGetRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsGetResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsGetSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsGetSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsJobsGetRequest req = new JobsProjectsTenantsJobsGetRequest("expedita") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "ullam";
                fields = "unde";
                key = "necessitatibus";
                oauthToken = "animi";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "ipsam";
                uploadProtocol = "corporis";
            }};            

            JobsProjectsTenantsJobsGetResponse res = sdk.projects.jobsProjectsTenantsJobsGet(req, new JobsProjectsTenantsJobsGetSecurity() {{
                option1 = new JobsProjectsTenantsJobsGetSecurityOption1("est", "error") {{
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

## jobsProjectsTenantsJobsList

Lists jobs by filter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsListJobViewEnum;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsListRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsListResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsListSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsListSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsJobsListRequest req = new JobsProjectsTenantsJobsListRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "consectetur";
                fields = "vitae";
                filter = "inventore";
                jobView = JobsProjectsTenantsJobsListJobViewEnum.JOB_VIEW_ID_ONLY;
                key = "ad";
                oauthToken = "qui";
                pageSize = 611328L;
                pageToken = "ex";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "soluta";
                uploadProtocol = "libero";
            }};            

            JobsProjectsTenantsJobsListResponse res = sdk.projects.jobsProjectsTenantsJobsList(req, new JobsProjectsTenantsJobsListSecurity() {{
                option1 = new JobsProjectsTenantsJobsListSecurityOption1("rem", "dolorum") {{
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

## jobsProjectsTenantsJobsPatch

Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsPatchRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsPatchResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsPatchSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsPatchSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApplicationInfo;
import org.openapis.openapi.models.shared.CompensationEntry;
import org.openapis.openapi.models.shared.CompensationEntryTypeEnum;
import org.openapis.openapi.models.shared.CompensationEntryUnitEnum;
import org.openapis.openapi.models.shared.CompensationInfo;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomAttribute;
import org.openapis.openapi.models.shared.JobDegreeTypesEnum;
import org.openapis.openapi.models.shared.JobDerivedInfo;
import org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum;
import org.openapis.openapi.models.shared.JobEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobInput;
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

            JobsProjectsTenantsJobsPatchRequest req = new JobsProjectsTenantsJobsPatchRequest("odio") {{
                dollarXgafv = XgafvEnum.ONE;
                jobInput = new JobInput() {{
                    addresses = new String[]{{
                        add("magni"),
                    }};
                    applicationInfo = new ApplicationInfo() {{
                        emails = new String[]{{
                            add("quae"),
                            add("quae"),
                        }};
                        instruction = "modi";
                        uris = new String[]{{
                            add("exercitationem"),
                        }};
                    }};;
                    company = "Bogisich, Emard and Mills";
                    compensationInfo = new CompensationInfo() {{
                        annualizedBaseCompensationRange = new CompensationRange() {{
                            maxCompensation = new Money() {{
                                currencyCode = "nulla";
                                nanos = 714376;
                                units = "maxime";
                            }};;
                            minCompensation = new Money() {{
                                currencyCode = "quia";
                                nanos = 159146;
                                units = "nostrum";
                            }};;
                        }};;
                        annualizedTotalCompensationRange = new CompensationRange() {{
                            maxCompensation = new Money() {{
                                currencyCode = "omnis";
                                nanos = 727250;
                                units = "dicta";
                            }};;
                            minCompensation = new Money() {{
                                currencyCode = "id";
                                nanos = 727888;
                                units = "fugiat";
                            }};;
                        }};;
                        entries = new org.openapis.openapi.models.shared.CompensationEntry[]{{
                            add(new CompensationEntry() {{
                                amount = new Money() {{
                                    currencyCode = "quos";
                                    nanos = 811939;
                                    units = "sit";
                                }};
                                description = "iusto";
                                expectedUnitsPerYear = 573.2;
                                range = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "voluptates";
                                        nanos = 80061;
                                        units = "aperiam";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "totam";
                                        nanos = 292888;
                                        units = "eligendi";
                                    }};
                                }};
                                type = CompensationEntryTypeEnum.COMMISSIONS;
                                unit = CompensationEntryUnitEnum.COMPENSATION_UNIT_UNSPECIFIED;
                            }}),
                            add(new CompensationEntry() {{
                                amount = new Money() {{
                                    currencyCode = "autem";
                                    nanos = 456688;
                                    units = "dolores";
                                }};
                                description = "assumenda";
                                expectedUnitsPerYear = 1072.1;
                                range = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "est";
                                        nanos = 817339;
                                        units = "corrupti";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "molestiae";
                                        nanos = 588812;
                                        units = "accusamus";
                                    }};
                                }};
                                type = CompensationEntryTypeEnum.OTHER_COMPENSATION_TYPE;
                                unit = CompensationEntryUnitEnum.YEARLY;
                            }}),
                            add(new CompensationEntry() {{
                                amount = new Money() {{
                                    currencyCode = "sint";
                                    nanos = 409726;
                                    units = "autem";
                                }};
                                description = "ipsam";
                                expectedUnitsPerYear = 7029.52;
                                range = new CompensationRange() {{
                                    maxCompensation = new Money() {{
                                        currencyCode = "laudantium";
                                        nanos = 357207;
                                        units = "officiis";
                                    }};
                                    minCompensation = new Money() {{
                                        currencyCode = "voluptatibus";
                                        nanos = 737279;
                                        units = "at";
                                    }};
                                }};
                                type = CompensationEntryTypeEnum.COMPENSATION_TYPE_UNSPECIFIED;
                                unit = CompensationEntryUnitEnum.HOURLY;
                            }}),
                        }};
                    }};;
                    customAttributes = new java.util.HashMap<String, org.openapis.openapi.models.shared.CustomAttribute>() {{
                        put("fuga", new CustomAttribute() {{
                            filterable = false;
                            keywordSearchable = false;
                            longValues = new String[]{{
                                add("accusantium"),
                                add("expedita"),
                                add("officiis"),
                                add("eos"),
                            }};
                            stringValues = new String[]{{
                                add("odio"),
                                add("praesentium"),
                                add("odit"),
                                add("explicabo"),
                            }};
                        }});
                        put("corporis", new CustomAttribute() {{
                            filterable = false;
                            keywordSearchable = false;
                            longValues = new String[]{{
                                add("earum"),
                                add("adipisci"),
                                add("recusandae"),
                            }};
                            stringValues = new String[]{{
                                add("ut"),
                                add("quidem"),
                                add("quis"),
                            }};
                        }});
                        put("beatae", new CustomAttribute() {{
                            filterable = false;
                            keywordSearchable = false;
                            longValues = new String[]{{
                                add("molestiae"),
                                add("delectus"),
                                add("cupiditate"),
                            }};
                            stringValues = new String[]{{
                                add("numquam"),
                            }};
                        }});
                    }};
                    degreeTypes = new org.openapis.openapi.models.shared.JobDegreeTypesEnum[]{{
                        add(JobDegreeTypesEnum.PRIMARY_EDUCATION),
                        add(JobDegreeTypesEnum.MASTERS_OR_EQUIVALENT),
                    }};
                    department = "officia";
                    derivedInfo = new JobDerivedInfo() {{
                        jobCategories = new org.openapis.openapi.models.shared.JobDerivedInfoJobCategoriesEnum[]{{
                            add(JobDerivedInfoJobCategoriesEnum.PROTECTIVE_SERVICES),
                            add(JobDerivedInfoJobCategoriesEnum.SCIENCE_AND_ENGINEERING),
                        }};
                        locations = new org.openapis.openapi.models.shared.Location[]{{
                            add(new Location() {{
                                latLng = new LatLng() {{
                                    latitude = 1855.18;
                                    longitude = 7088.98;
                                }};
                                locationType = LocationLocationTypeEnum.POSTAL_CODE;
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("minima"),
                                        add("placeat"),
                                        add("enim"),
                                    }};
                                    administrativeArea = "neque";
                                    languageCode = "in";
                                    locality = "minus";
                                    organization = "eum";
                                    postalCode = "32997";
                                    recipients = new String[]{{
                                        add("libero"),
                                    }};
                                    regionCode = "ratione";
                                    revision = 289913;
                                    sortingCode = "totam";
                                    sublocality = "occaecati";
                                }};
                                radiusMiles = 3759.94;
                            }}),
                            add(new Location() {{
                                latLng = new LatLng() {{
                                    latitude = 7791.8;
                                    longitude = 2420.99;
                                }};
                                locationType = LocationLocationTypeEnum.SUB_LOCALITY2;
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("nostrum"),
                                        add("est"),
                                        add("impedit"),
                                    }};
                                    administrativeArea = "delectus";
                                    languageCode = "tempore";
                                    locality = "vero";
                                    organization = "odit";
                                    postalCode = "83404-3445";
                                    recipients = new String[]{{
                                        add("error"),
                                    }};
                                    regionCode = "veritatis";
                                    revision = 498180;
                                    sortingCode = "voluptate";
                                    sublocality = "pariatur";
                                }};
                                radiusMiles = 9326.66;
                            }}),
                        }};
                    }};;
                    description = "similique";
                    employmentTypes = new org.openapis.openapi.models.shared.JobEmploymentTypesEnum[]{{
                        add(JobEmploymentTypesEnum.CONTRACT_TO_HIRE),
                        add(JobEmploymentTypesEnum.CONTRACTOR),
                        add(JobEmploymentTypesEnum.CONTRACT_TO_HIRE),
                        add(JobEmploymentTypesEnum.FLY_IN_FLY_OUT),
                    }};
                    incentives = "placeat";
                    jobBenefits = new org.openapis.openapi.models.shared.JobJobBenefitsEnum[]{{
                        add(JobJobBenefitsEnum.FLEXIBLE_HOURS),
                        add(JobJobBenefitsEnum.MEDICAL),
                        add(JobJobBenefitsEnum.DENTAL),
                    }};
                    jobEndTime = "modi";
                    jobLevel = JobJobLevelEnum.JOB_LEVEL_UNSPECIFIED;
                    jobStartTime = "sint";
                    languageCode = "vero";
                    name = "Dr. Elvira Robel";
                    postingExpireTime = "animi";
                    postingPublishTime = "dolores";
                    postingRegion = JobPostingRegionEnum.NATION;
                    processingOptions = new ProcessingOptions() {{
                        disableStreetAddressResolution = false;
                        htmlSanitization = ProcessingOptionsHtmlSanitizationEnum.HTML_SANITIZATION_UNSPECIFIED;
                    }};;
                    promotionValue = 164488;
                    qualifications = "necessitatibus";
                    requisitionId = "nobis";
                    responsibilities = "ipsa";
                    title = "Ms.";
                    visibility = JobVisibilityEnum.SHARED_WITH_PUBLIC;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "laboriosam";
                fields = "pariatur";
                key = "libero";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "occaecati";
                updateMask = "nemo";
                uploadType = "aliquam";
                uploadProtocol = "nostrum";
            }};            

            JobsProjectsTenantsJobsPatchResponse res = sdk.projects.jobsProjectsTenantsJobsPatch(req, new JobsProjectsTenantsJobsPatchSecurity() {{
                option1 = new JobsProjectsTenantsJobsPatchSecurityOption1("doloribus", "eligendi") {{
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

## jobsProjectsTenantsJobsSearch

Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommuteFilter;
import org.openapis.openapi.models.shared.CommuteFilterCommuteMethodEnum;
import org.openapis.openapi.models.shared.CommuteFilterRoadTrafficEnum;
import org.openapis.openapi.models.shared.CompensationFilter;
import org.openapis.openapi.models.shared.CompensationFilterTypeEnum;
import org.openapis.openapi.models.shared.CompensationFilterUnitsEnum;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomRankingInfo;
import org.openapis.openapi.models.shared.CustomRankingInfoImportanceLevelEnum;
import org.openapis.openapi.models.shared.DeviceInfo;
import org.openapis.openapi.models.shared.DeviceInfoDeviceTypeEnum;
import org.openapis.openapi.models.shared.HistogramQuery;
import org.openapis.openapi.models.shared.JobQuery;
import org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.LocationFilter;
import org.openapis.openapi.models.shared.LocationFilterTelecommutePreferenceEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.RequestMetadata;
import org.openapis.openapi.models.shared.SearchJobsRequest;
import org.openapis.openapi.models.shared.SearchJobsRequestDiversificationLevelEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestJobViewEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestKeywordMatchModeEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestSearchModeEnum;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimestampRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsJobsSearchRequest req = new JobsProjectsTenantsJobsSearchRequest("sint") {{
                dollarXgafv = XgafvEnum.ONE;
                searchJobsRequest = new SearchJobsRequest() {{
                    customRankingInfo = new CustomRankingInfo() {{
                        importanceLevel = CustomRankingInfoImportanceLevelEnum.EXTREME;
                        rankingExpression = "animi";
                    }};;
                    disableKeywordMatch = false;
                    diversificationLevel = SearchJobsRequestDiversificationLevelEnum.ONE_PER_COMPANY;
                    enableBroadening = false;
                    histogramQueries = new org.openapis.openapi.models.shared.HistogramQuery[]{{
                        add(new HistogramQuery() {{
                            histogramQuery = "molestias";
                        }}),
                        add(new HistogramQuery() {{
                            histogramQuery = "odio";
                        }}),
                        add(new HistogramQuery() {{
                            histogramQuery = "eaque";
                        }}),
                    }};
                    jobQuery = new JobQuery() {{
                        commuteFilter = new CommuteFilter() {{
                            allowImpreciseAddresses = false;
                            commuteMethod = CommuteFilterCommuteMethodEnum.TRANSIT_ACCESSIBLE;
                            departureTime = new TimeOfDay() {{
                                hours = 104078;
                                minutes = 554645;
                                nanos = 614438;
                                seconds = 826862;
                            }};;
                            roadTraffic = CommuteFilterRoadTrafficEnum.BUSY_HOUR;
                            startCoordinates = new LatLng() {{
                                latitude = 7255.74;
                                longitude = 2440.32;
                            }};;
                            travelDuration = "doloremque";
                        }};;
                        companies = new String[]{{
                            add("impedit"),
                            add("cum"),
                            add("ipsum"),
                            add("adipisci"),
                        }};
                        companyDisplayNames = new String[]{{
                            add("deserunt"),
                            add("doloremque"),
                            add("quis"),
                            add("veniam"),
                        }};
                        compensationFilter = new CompensationFilter() {{
                            includeJobsWithUnspecifiedCompensationRange = false;
                            range = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "libero";
                                    nanos = 99733;
                                    units = "cupiditate";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "molestiae";
                                    nanos = 756654;
                                    units = "possimus";
                                }};;
                            }};;
                            type = CompensationFilterTypeEnum.UNIT_ONLY;
                            units = new org.openapis.openapi.models.shared.CompensationFilterUnitsEnum[]{{
                                add(CompensationFilterUnitsEnum.OTHER_COMPENSATION_UNIT),
                                add(CompensationFilterUnitsEnum.HOURLY),
                            }};
                        }};;
                        customAttributeFilter = "asperiores";
                        disableSpellCheck = false;
                        employmentTypes = new org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum[]{{
                            add(JobQueryEmploymentTypesEnum.FULL_TIME),
                            add(JobQueryEmploymentTypesEnum.PER_DIEM),
                        }};
                        excludedJobs = new String[]{{
                            add("odit"),
                            add("pariatur"),
                            add("amet"),
                        }};
                        jobCategories = new org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum[]{{
                            add(JobQueryJobCategoriesEnum.ADMINISTRATIVE_AND_OFFICE),
                            add(JobQueryJobCategoriesEnum.CLEANING_AND_FACILITIES),
                        }};
                        languageCodes = new String[]{{
                            add("tempore"),
                            add("nisi"),
                            add("voluptatibus"),
                        }};
                        locationFilters = new org.openapis.openapi.models.shared.LocationFilter[]{{
                            add(new LocationFilter() {{
                                address = "7333 Schimmel Spurs";
                                distanceInMiles = 7060.61;
                                latLng = new LatLng() {{
                                    latitude = 2176.63;
                                    longitude = 3189.17;
                                }};
                                regionCode = "voluptatibus";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_JOBS_EXCLUDED;
                            }}),
                            add(new LocationFilter() {{
                                address = "82714 Coralie Lights";
                                distanceInMiles = 6649.65;
                                latLng = new LatLng() {{
                                    latitude = 5221.76;
                                    longitude = 7538.9;
                                }};
                                regionCode = "fugiat";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_ALLOWED;
                            }}),
                        }};
                        publishTimeRange = new TimestampRange() {{
                            endTime = "officiis";
                            startTime = "ducimus";
                        }};;
                        query = "dolor";
                        queryLanguageCode = "dicta";
                    }};;
                    jobView = SearchJobsRequestJobViewEnum.JOB_VIEW_SMALL;
                    keywordMatchMode = SearchJobsRequestKeywordMatchModeEnum.KEYWORD_MATCH_TITLE_ONLY;
                    maxPageSize = 111496;
                    offset = 491591;
                    orderBy = "esse";
                    pageToken = "fugiat";
                    requestMetadata = new RequestMetadata() {{
                        allowMissingIds = false;
                        deviceInfo = new DeviceInfo() {{
                            deviceType = DeviceInfoDeviceTypeEnum.MOBILE_WEB;
                            id = "25f77b11-4eeb-452f-b785-fc37814d4c98";
                        }};;
                        domain = "repudiandae";
                        sessionId = "consequatur";
                        userId = "maxime";
                    }};;
                    searchMode = SearchJobsRequestSearchModeEnum.SEARCH_MODE_UNSPECIFIED;
                }};;
                accessToken = "nam";
                alt = AltEnum.PROTO;
                callback = "quas";
                fields = "provident";
                key = "repudiandae";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "corporis";
                uploadProtocol = "vero";
            }};            

            JobsProjectsTenantsJobsSearchResponse res = sdk.projects.jobsProjectsTenantsJobsSearch(req, new JobsProjectsTenantsJobsSearchSecurity() {{
                option1 = new JobsProjectsTenantsJobsSearchSecurityOption1("similique", "repellendus") {{
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

## jobsProjectsTenantsJobsSearchForAlert

Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchForAlertRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchForAlertResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchForAlertSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchForAlertSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsJobsSearchForAlertSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CommuteFilter;
import org.openapis.openapi.models.shared.CommuteFilterCommuteMethodEnum;
import org.openapis.openapi.models.shared.CommuteFilterRoadTrafficEnum;
import org.openapis.openapi.models.shared.CompensationFilter;
import org.openapis.openapi.models.shared.CompensationFilterTypeEnum;
import org.openapis.openapi.models.shared.CompensationFilterUnitsEnum;
import org.openapis.openapi.models.shared.CompensationRange;
import org.openapis.openapi.models.shared.CustomRankingInfo;
import org.openapis.openapi.models.shared.CustomRankingInfoImportanceLevelEnum;
import org.openapis.openapi.models.shared.DeviceInfo;
import org.openapis.openapi.models.shared.DeviceInfoDeviceTypeEnum;
import org.openapis.openapi.models.shared.HistogramQuery;
import org.openapis.openapi.models.shared.JobQuery;
import org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum;
import org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum;
import org.openapis.openapi.models.shared.LatLng;
import org.openapis.openapi.models.shared.LocationFilter;
import org.openapis.openapi.models.shared.LocationFilterTelecommutePreferenceEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.RequestMetadata;
import org.openapis.openapi.models.shared.SearchJobsRequest;
import org.openapis.openapi.models.shared.SearchJobsRequestDiversificationLevelEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestJobViewEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestKeywordMatchModeEnum;
import org.openapis.openapi.models.shared.SearchJobsRequestSearchModeEnum;
import org.openapis.openapi.models.shared.TimeOfDay;
import org.openapis.openapi.models.shared.TimestampRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsJobsSearchForAlertRequest req = new JobsProjectsTenantsJobsSearchForAlertRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                searchJobsRequest = new SearchJobsRequest() {{
                    customRankingInfo = new CustomRankingInfo() {{
                        importanceLevel = CustomRankingInfoImportanceLevelEnum.LOW;
                        rankingExpression = "impedit";
                    }};;
                    disableKeywordMatch = false;
                    diversificationLevel = SearchJobsRequestDiversificationLevelEnum.SIMPLE;
                    enableBroadening = false;
                    histogramQueries = new org.openapis.openapi.models.shared.HistogramQuery[]{{
                        add(new HistogramQuery() {{
                            histogramQuery = "voluptatem";
                        }}),
                    }};
                    jobQuery = new JobQuery() {{
                        commuteFilter = new CommuteFilter() {{
                            allowImpreciseAddresses = false;
                            commuteMethod = CommuteFilterCommuteMethodEnum.DRIVING;
                            departureTime = new TimeOfDay() {{
                                hours = 60995;
                                minutes = 229567;
                                nanos = 849320;
                                seconds = 506863;
                            }};;
                            roadTraffic = CommuteFilterRoadTrafficEnum.BUSY_HOUR;
                            startCoordinates = new LatLng() {{
                                latitude = 7368.53;
                                longitude = 2304.11;
                            }};;
                            travelDuration = "quasi";
                        }};;
                        companies = new String[]{{
                            add("laudantium"),
                        }};
                        companyDisplayNames = new String[]{{
                            add("earum"),
                        }};
                        compensationFilter = new CompensationFilter() {{
                            includeJobsWithUnspecifiedCompensationRange = false;
                            range = new CompensationRange() {{
                                maxCompensation = new Money() {{
                                    currencyCode = "iusto";
                                    nanos = 228646;
                                    units = "provident";
                                }};;
                                minCompensation = new Money() {{
                                    currencyCode = "dolorum";
                                    nanos = 897956;
                                    units = "provident";
                                }};;
                            }};;
                            type = CompensationFilterTypeEnum.ANNUALIZED_TOTAL_AMOUNT;
                            units = new org.openapis.openapi.models.shared.CompensationFilterUnitsEnum[]{{
                                add(CompensationFilterUnitsEnum.DAILY),
                            }};
                        }};;
                        customAttributeFilter = "molestiae";
                        disableSpellCheck = false;
                        employmentTypes = new org.openapis.openapi.models.shared.JobQueryEmploymentTypesEnum[]{{
                            add(JobQueryEmploymentTypesEnum.VOLUNTEER),
                            add(JobQueryEmploymentTypesEnum.INTERN),
                            add(JobQueryEmploymentTypesEnum.EMPLOYMENT_TYPE_UNSPECIFIED),
                            add(JobQueryEmploymentTypesEnum.INTERN),
                        }};
                        excludedJobs = new String[]{{
                            add("eos"),
                            add("totam"),
                            add("dicta"),
                            add("voluptatem"),
                        }};
                        jobCategories = new org.openapis.openapi.models.shared.JobQueryJobCategoriesEnum[]{{
                            add(JobQueryJobCategoriesEnum.BUSINESS_OPERATIONS),
                        }};
                        languageCodes = new String[]{{
                            add("a"),
                        }};
                        locationFilters = new org.openapis.openapi.models.shared.LocationFilter[]{{
                            add(new LocationFilter() {{
                                address = "5182 Koch Burg";
                                distanceInMiles = 209.5;
                                latLng = new LatLng() {{
                                    latitude = 6985.58;
                                    longitude = 4116.15;
                                }};
                                regionCode = "aperiam";
                                telecommutePreference = LocationFilterTelecommutePreferenceEnum.TELECOMMUTE_EXCLUDED;
                            }}),
                        }};
                        publishTimeRange = new TimestampRange() {{
                            endTime = "repellat";
                            startTime = "velit";
                        }};;
                        query = "porro";
                        queryLanguageCode = "provident";
                    }};;
                    jobView = SearchJobsRequestJobViewEnum.JOB_VIEW_ID_ONLY;
                    keywordMatchMode = SearchJobsRequestKeywordMatchModeEnum.KEYWORD_MATCH_TITLE_ONLY;
                    maxPageSize = 490110;
                    offset = 235834;
                    orderBy = "soluta";
                    pageToken = "natus";
                    requestMetadata = new RequestMetadata() {{
                        allowMissingIds = false;
                        deviceInfo = new DeviceInfo() {{
                            deviceType = DeviceInfoDeviceTypeEnum.BOT;
                            id = "a3f2ceda-7e23-4f22-9741-1faf4b7544e4";
                        }};;
                        domain = "in";
                        sessionId = "explicabo";
                        userId = "accusamus";
                    }};;
                    searchMode = SearchJobsRequestSearchModeEnum.JOB_SEARCH;
                }};;
                accessToken = "aperiam";
                alt = AltEnum.JSON;
                callback = "deleniti";
                fields = "enim";
                key = "voluptate";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "libero";
                uploadProtocol = "magnam";
            }};            

            JobsProjectsTenantsJobsSearchForAlertResponse res = sdk.projects.jobsProjectsTenantsJobsSearchForAlert(req, new JobsProjectsTenantsJobsSearchForAlertSecurity() {{
                option1 = new JobsProjectsTenantsJobsSearchForAlertSecurityOption1("sit", "modi") {{
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

## jobsProjectsTenantsList

Lists all tenants associated with the project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JobsProjectsTenantsListRequest;
import org.openapis.openapi.models.operations.JobsProjectsTenantsListResponse;
import org.openapis.openapi.models.operations.JobsProjectsTenantsListSecurity;
import org.openapis.openapi.models.operations.JobsProjectsTenantsListSecurityOption1;
import org.openapis.openapi.models.operations.JobsProjectsTenantsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JobsProjectsTenantsListRequest req = new JobsProjectsTenantsListRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "nostrum";
                key = "molestiae";
                oauthToken = "veniam";
                pageSize = 969206L;
                pageToken = "ab";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "aut";
                uploadProtocol = "aut";
            }};            

            JobsProjectsTenantsListResponse res = sdk.projects.jobsProjectsTenantsList(req, new JobsProjectsTenantsListSecurity() {{
                option1 = new JobsProjectsTenantsListSecurityOption1("eveniet", "odio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listTenantsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
