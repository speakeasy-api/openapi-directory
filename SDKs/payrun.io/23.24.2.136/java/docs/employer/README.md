# employer

### Available Operations

* [deleteEmployer](#deleteemployer) - Delete an Employer
* [deleteEmployerRevision](#deleteemployerrevision) - Delete an Employer revision matching the specified revision date.
* [deleteEmployerRevisionByNumber](#deleteemployerrevisionbynumber) - Delete an Employer revision matching the specified revision number.
* [deleteEmployerSecret](#deleteemployersecret) - Deletes employer secret
* [getAllEmployerTags](#getallemployertags) - Get all employer tags
* [getEmployer](#getemployer) - Gets the employer
* [getEmployerByEffectiveDate](#getemployerbyeffectivedate) - Gets the employer at the specified effective
* [getEmployerRevisionByNumber](#getemployerrevisionbynumber) - Gets the employer by revision number
* [getEmployerRevisionSummaries](#getemployerrevisionsummaries) - Get all employer revision summaries
* [getEmployerRevisionSummaryByNumber](#getemployerrevisionsummarybynumber) - Gets the employer summary by revision number
* [getEmployerRevisions](#getemployerrevisions) - Gets the employer revisions
* [getEmployerSecret](#getemployersecret) - Get employer secret
* [getEmployerSecrets](#getemployersecrets) - Get all employer secret links
* [getEmployerSummaries](#getemployersummaries) - Get employer summaries.
* [getEmployerSummariesByEffectiveDate](#getemployersummariesbyeffectivedate) - Get employer summaries at a given effective date.
* [getEmployerSummary](#getemployersummary) - Get employer summary
* [getEmployerSummaryByEffectiveDate](#getemployersummarybyeffectivedate) - Get employer summary by effective date.
* [getEmployers](#getemployers) - Gets all employers
* [getEmployersByEffectiveDate](#getemployersbyeffectivedate) - Gets all employers at the specified effective date
* [getEmployersWithTag](#getemployerswithtag) - Get employers with tag
* [patchEmployer](#patchemployer) - Patches the employer
* [postEmployer](#postemployer) - Create a new Employer
* [postEmployerSecret](#postemployersecret) - Create a new employer secret
* [putEmployer](#putemployer) - Updates the Employer
* [putEmployerSecret](#putemployersecret) - Create a new employer secret

## deleteEmployer

Delete the specified employer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmployerRequest;
import org.openapis.openapi.models.operations.DeleteEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEmployerRequest req = new DeleteEmployerRequest("sapiente", "consequuntur", "ratione");            

            DeleteEmployerResponse res = sdk.employer.deleteEmployer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmployerRevision

Deletes the specified employer revision for the matching revision date

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmployerRevisionRequest;
import org.openapis.openapi.models.operations.DeleteEmployerRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEmployerRevisionRequest req = new DeleteEmployerRevisionRequest("explicabo", "saepe", LocalDate.parse("2021-11-30"), "et");            

            DeleteEmployerRevisionResponse res = sdk.employer.deleteEmployerRevision(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmployerRevisionByNumber

Deletes the specified employer revision for the matching revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmployerRevisionByNumberRequest;
import org.openapis.openapi.models.operations.DeleteEmployerRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEmployerRevisionByNumberRequest req = new DeleteEmployerRevisionByNumberRequest("esse", "eveniet", "accusamus", "veritatis");            

            DeleteEmployerRevisionByNumberResponse res = sdk.employer.deleteEmployerRevisionByNumber(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEmployerSecret

Deletes an employer secret from the given resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEmployerSecretRequest;
import org.openapis.openapi.models.operations.DeleteEmployerSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEmployerSecretRequest req = new DeleteEmployerSecretRequest("esse", "quod", "nam", "vero");            

            DeleteEmployerSecretResponse res = sdk.employer.deleteEmployerSecret(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllEmployerTags

Gets all the employer tags

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllEmployerTagsRequest;
import org.openapis.openapi.models.operations.GetAllEmployerTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllEmployerTagsRequest req = new GetAllEmployerTagsRequest("aliquid", "quasi");            

            GetAllEmployerTagsResponse res = sdk.employer.getAllEmployerTags(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployer

Get the specified employer object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerRequest;
import org.openapis.openapi.models.operations.GetEmployerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerRequest req = new GetEmployerRequest("saepe", "vel", "harum");            

            GetEmployerResponse res = sdk.employer.getEmployer(req);

            if (res.employer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerByEffectiveDate

Returns the employer's state at the specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployerByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerByEffectiveDateRequest req = new GetEmployerByEffectiveDateRequest("molestiae", "rerum", LocalDate.parse("2022-05-06"), "distinctio");            

            GetEmployerByEffectiveDateResponse res = sdk.employer.getEmployerByEffectiveDate(req);

            if (res.employer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerRevisionByNumber

Get the employer revision matching the specified revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerRevisionByNumberRequest;
import org.openapis.openapi.models.operations.GetEmployerRevisionByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerRevisionByNumberRequest req = new GetEmployerRevisionByNumberRequest("eligendi", "sit", "culpa", "tempore");            

            GetEmployerRevisionByNumberResponse res = sdk.employer.getEmployerRevisionByNumber(req);

            if (res.employer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerRevisionSummaries

Gets links to all employer revision summaries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerRevisionSummariesRequest;
import org.openapis.openapi.models.operations.GetEmployerRevisionSummariesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerRevisionSummariesRequest req = new GetEmployerRevisionSummariesRequest("adipisci", "cumque", "consequuntur");            

            GetEmployerRevisionSummariesResponse res = sdk.employer.getEmployerRevisionSummaries(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerRevisionSummaryByNumber

Get the employer revision summary matching the specified revision number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerRevisionSummaryByNumberRequest;
import org.openapis.openapi.models.operations.GetEmployerRevisionSummaryByNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerRevisionSummaryByNumberRequest req = new GetEmployerRevisionSummaryByNumberRequest("consequatur", "minus", "quaerat", "sapiente");            

            GetEmployerRevisionSummaryByNumberResponse res = sdk.employer.getEmployerRevisionSummaryByNumber(req);

            if (res.employerSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerRevisions

Gets links to all the employer revisions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerRevisionsRequest;
import org.openapis.openapi.models.operations.GetEmployerRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerRevisionsRequest req = new GetEmployerRevisionsRequest("consectetur", "esse", "blanditiis");            

            GetEmployerRevisionsResponse res = sdk.employer.getEmployerRevisions(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerSecret

Get the public visible employer secret object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerSecretRequest;
import org.openapis.openapi.models.operations.GetEmployerSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerSecretRequest req = new GetEmployerSecretRequest("provident", "a", "nulla", "quas");            

            GetEmployerSecretResponse res = sdk.employer.getEmployerSecret(req);

            if (res.employerSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerSecrets

Get all the employer secret links

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerSecretsRequest;
import org.openapis.openapi.models.operations.GetEmployerSecretsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerSecretsRequest req = new GetEmployerSecretsRequest("esse", "quasi", "a");            

            GetEmployerSecretsResponse res = sdk.employer.getEmployerSecrets(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerSummaries

Get links to all employer summaries.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerSummariesRequest;
import org.openapis.openapi.models.operations.GetEmployerSummariesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerSummariesRequest req = new GetEmployerSummariesRequest("error", "sint");            

            GetEmployerSummariesResponse res = sdk.employer.getEmployerSummaries(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerSummariesByEffectiveDate

Get links to all employer summaries on specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerSummariesByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployerSummariesByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerSummariesByEffectiveDateRequest req = new GetEmployerSummariesByEffectiveDateRequest("pariatur", "possimus", LocalDate.parse("2022-02-03"));            

            GetEmployerSummariesByEffectiveDateResponse res = sdk.employer.getEmployerSummariesByEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerSummary

Gets the specified employer summary data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerSummaryRequest;
import org.openapis.openapi.models.operations.GetEmployerSummaryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerSummaryRequest req = new GetEmployerSummaryRequest("asperiores", "facere", "veritatis");            

            GetEmployerSummaryResponse res = sdk.employer.getEmployerSummary(req);

            if (res.employerSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerSummaryByEffectiveDate

Gets the employer summary for the specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerSummaryByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployerSummaryByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerSummaryByEffectiveDateRequest req = new GetEmployerSummaryByEffectiveDateRequest("consequuntur", "quasi", LocalDate.parse("2021-09-25"), "aliquid");            

            GetEmployerSummaryByEffectiveDateResponse res = sdk.employer.getEmployerSummaryByEffectiveDate(req);

            if (res.employerSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployers

Gets links to all employers contained under the authorised application scope

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployersRequest;
import org.openapis.openapi.models.operations.GetEmployersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployersRequest req = new GetEmployersRequest("tenetur", "quae");            

            GetEmployersResponse res = sdk.employer.getEmployers(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployersByEffectiveDate

Gets links to all employers contained under the authorised application scope for the specified effective date.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployersByEffectiveDateRequest;
import org.openapis.openapi.models.operations.GetEmployersByEffectiveDateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployersByEffectiveDateRequest req = new GetEmployersByEffectiveDateRequest("earum", "vel", LocalDate.parse("2022-09-28"));            

            GetEmployersByEffectiveDateResponse res = sdk.employer.getEmployersByEffectiveDate(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployersWithTag

Gets the employers with the tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployersWithTagRequest;
import org.openapis.openapi.models.operations.GetEmployersWithTagResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployersWithTagRequest req = new GetEmployersWithTagRequest("libero", "illum", "soluta");            

            GetEmployersWithTagResponse res = sdk.employer.getEmployersWithTag(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchEmployer

Patches the specified employer with the supplied values

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchEmployerRequest;
import org.openapis.openapi.models.operations.PatchEmployerResponse;
import org.openapis.openapi.models.shared.Employer;
import org.openapis.openapi.models.shared.EmployerEmployer;
import org.openapis.openapi.models.shared.EmployerEmployerAddress;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolment;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentPension;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentPrimaryAddress;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentSecondaryAddress;
import org.openapis.openapi.models.shared.EmployerEmployerBankAccount;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettings;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettingsSenderEnum;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettingsStateAidSectorEnum;
import org.openapis.openapi.models.shared.EmployerEmployerRegionEnum;
import org.openapis.openapi.models.shared.EmployerEmployerRuleExclusionsEnum;
import org.openapis.openapi.models.shared.EmployerEmployerTerritoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchEmployerRequest req = new PatchEmployerRequest("accusantium", "aliquam",                 new Employer() {{
                                employer = new EmployerEmployer() {{
                                    address = new EmployerEmployerAddress() {{
                                        address1 = "sapiente";
                                        address2 = "dicta";
                                        address3 = "ullam";
                                        address4 = "reprehenderit";
                                        country = "Guernsey";
                                        postcode = "05184";
                                    }};;
                                    apprenticeshipLevyAllowance = 5362.75;
                                    autoEnrolment = new EmployerEmployerAutoEnrolment() {{
                                        pension = new EmployerEmployerAutoEnrolmentPension() {{
                                            atHref = "itaque";
                                            atRel = "dolorum";
                                            atTitle = "architecto";
                                        }};;
                                        postponementDate = LocalDate.parse("2021-02-09");
                                        primaryAddress = new EmployerEmployerAutoEnrolmentPrimaryAddress() {{
                                            address1 = "quasi";
                                            address2 = "at";
                                            address3 = "et";
                                            address4 = "voluptate";
                                            country = "Austria";
                                            postcode = "02268";
                                        }};;
                                        primaryEmail = "accusantium";
                                        primaryFirstName = "rem";
                                        primaryJobTitle = "aut";
                                        primaryLastName = "laudantium";
                                        primaryTelephone = "eum";
                                        reEnrolmentDayOffset = 649832;
                                        reEnrolmentMonthOffset = 68074;
                                        recentOptOutReEnrolmentExcluded = false;
                                        secondaryAddress = new EmployerEmployerAutoEnrolmentSecondaryAddress() {{
                                            address1 = "corrupti";
                                            address2 = "non";
                                            address3 = "voluptatem";
                                            address4 = "dolor";
                                            country = "Moldova";
                                            postcode = "71304";
                                        }};;
                                        secondaryEmail = "dicta";
                                        secondaryFirstName = "maiores";
                                        secondaryJobTitle = "natus";
                                        secondaryLastName = "velit";
                                        secondaryTelephone = "voluptatibus";
                                        stagingDate = LocalDate.parse("2022-01-04");
                                    }};;
                                    bacsServiceUserNumber = "aperiam";
                                    bankAccount = new EmployerEmployerBankAccount() {{
                                        accountName = "ea";
                                        accountNumber = "quaerat";
                                        branchName = "consequuntur";
                                        reference = "repellendus";
                                        sortCode = "officia";
                                    }};;
                                    calculateApprenticeshipLevy = false;
                                    claimEmploymentAllowance = false;
                                    claimSmallEmployerRelief = false;
                                    effectiveDate = LocalDate.parse("2021-07-13");
                                    hmrcSettings = new EmployerEmployerHmrcSettings() {{
                                        accountingOfficeRef = "officia";
                                        cotaxRef = "asperiores";
                                        contactEmail = "nemo";
                                        contactFax = "quae";
                                        contactFirstName = "quaerat";
                                        contactLastName = "porro";
                                        contactTelephone = "quod";
                                        employmentAllowanceOverride = 2883.98;
                                        password = "ab";
                                        sautr = "adipisci";
                                        sender = EmployerEmployerHmrcSettingsSenderEnum.TRUST;
                                        senderId = "id";
                                        stateAidSector = EmployerEmployerHmrcSettingsStateAidSectorEnum.FISHERIES_AQUACULTURE;
                                        taxOfficeNumber = "velit";
                                        taxOfficeReference = "culpa";
                                    }};;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("recusandae", "totam");
                                        put("fugiat", "vel");
                                        put("ducimus", "quos");
                                    }};
                                    name = "Clara Senger";
                                    nextRevisionDate = LocalDate.parse("2022-07-21");
                                    region = EmployerEmployerRegionEnum.ENGLAND;
                                    revision = 968904;
                                    ruleExclusions = EmployerEmployerRuleExclusionsEnum.TAX_CODE_REGION_CHANGE_RULE;
                                    territory = EmployerEmployerTerritoryEnum.UNITED_KINGDOM;
                                }};;
                            }};, "nemo");            

            PatchEmployerResponse res = sdk.employer.patchEmployer(req);

            if (res.employer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEmployer

Create a new employer object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEmployerRequest;
import org.openapis.openapi.models.operations.PostEmployerResponse;
import org.openapis.openapi.models.shared.Employer;
import org.openapis.openapi.models.shared.EmployerEmployer;
import org.openapis.openapi.models.shared.EmployerEmployerAddress;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolment;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentPension;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentPrimaryAddress;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentSecondaryAddress;
import org.openapis.openapi.models.shared.EmployerEmployerBankAccount;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettings;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettingsSenderEnum;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettingsStateAidSectorEnum;
import org.openapis.openapi.models.shared.EmployerEmployerRegionEnum;
import org.openapis.openapi.models.shared.EmployerEmployerRuleExclusionsEnum;
import org.openapis.openapi.models.shared.EmployerEmployerTerritoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEmployerRequest req = new PostEmployerRequest("recusandae", "aliquid",                 new Employer() {{
                                employer = new EmployerEmployer() {{
                                    address = new EmployerEmployerAddress() {{
                                        address1 = "aperiam";
                                        address2 = "cum";
                                        address3 = "consectetur";
                                        address4 = "in";
                                        country = "Guam";
                                        postcode = "82939-6982";
                                    }};;
                                    apprenticeshipLevyAllowance = 1210.59;
                                    autoEnrolment = new EmployerEmployerAutoEnrolment() {{
                                        pension = new EmployerEmployerAutoEnrolmentPension() {{
                                            atHref = "asperiores";
                                            atRel = "adipisci";
                                            atTitle = "non";
                                        }};;
                                        postponementDate = LocalDate.parse("2022-11-23");
                                        primaryAddress = new EmployerEmployerAutoEnrolmentPrimaryAddress() {{
                                            address1 = "dignissimos";
                                            address2 = "a";
                                            address3 = "debitis";
                                            address4 = "consectetur";
                                            country = "Guernsey";
                                            postcode = "30971-8621";
                                        }};;
                                        primaryEmail = "voluptas";
                                        primaryFirstName = "voluptas";
                                        primaryJobTitle = "voluptas";
                                        primaryLastName = "minima";
                                        primaryTelephone = "nobis";
                                        reEnrolmentDayOffset = 680116;
                                        reEnrolmentMonthOffset = 237807;
                                        recentOptOutReEnrolmentExcluded = false;
                                        secondaryAddress = new EmployerEmployerAutoEnrolmentSecondaryAddress() {{
                                            address1 = "minus";
                                            address2 = "dolores";
                                            address3 = "blanditiis";
                                            address4 = "in";
                                            country = "French Guiana";
                                            postcode = "88327";
                                        }};;
                                        secondaryEmail = "blanditiis";
                                        secondaryFirstName = "quas";
                                        secondaryJobTitle = "hic";
                                        secondaryLastName = "nesciunt";
                                        secondaryTelephone = "culpa";
                                        stagingDate = LocalDate.parse("2021-04-07");
                                    }};;
                                    bacsServiceUserNumber = "totam";
                                    bankAccount = new EmployerEmployerBankAccount() {{
                                        accountName = "hic";
                                        accountNumber = "exercitationem";
                                        branchName = "nobis";
                                        reference = "sit";
                                        sortCode = "rerum";
                                    }};;
                                    calculateApprenticeshipLevy = false;
                                    claimEmploymentAllowance = false;
                                    claimSmallEmployerRelief = false;
                                    effectiveDate = LocalDate.parse("2022-01-12");
                                    hmrcSettings = new EmployerEmployerHmrcSettings() {{
                                        accountingOfficeRef = "explicabo";
                                        cotaxRef = "asperiores";
                                        contactEmail = "facilis";
                                        contactFax = "voluptate";
                                        contactFirstName = "expedita";
                                        contactLastName = "ab";
                                        contactTelephone = "iste";
                                        employmentAllowanceOverride = 2927.94;
                                        password = "laborum";
                                        sautr = "sed";
                                        sender = EmployerEmployerHmrcSettingsSenderEnum.BUREAU;
                                        senderId = "commodi";
                                        stateAidSector = EmployerEmployerHmrcSettingsStateAidSectorEnum.INDUSTRIAL;
                                        taxOfficeNumber = "explicabo";
                                        taxOfficeReference = "voluptas";
                                    }};;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("architecto", "suscipit");
                                        put("sapiente", "debitis");
                                        put("illo", "reiciendis");
                                    }};
                                    name = "Naomi Wuckert";
                                    nextRevisionDate = LocalDate.parse("2022-06-26");
                                    region = EmployerEmployerRegionEnum.WALES;
                                    revision = 215529;
                                    ruleExclusions = EmployerEmployerRuleExclusionsEnum.NI_END_CONTRACTED_OUT_TRANSFER_RULE;
                                    territory = EmployerEmployerTerritoryEnum.UNITED_KINGDOM;
                                }};;
                            }};);            

            PostEmployerResponse res = sdk.employer.postEmployer(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEmployerSecret

Create new employer secret using auto generated resource location key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEmployerSecretRequest;
import org.openapis.openapi.models.operations.PostEmployerSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEmployerSecretRequest req = new PostEmployerSecretRequest("occaecati", "quos", "voluptatibus");            

            PostEmployerSecretResponse res = sdk.employer.postEmployerSecret(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmployer

Updates the existing specified employer object

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmployerRequest;
import org.openapis.openapi.models.operations.PutEmployerResponse;
import org.openapis.openapi.models.shared.Employer;
import org.openapis.openapi.models.shared.EmployerEmployer;
import org.openapis.openapi.models.shared.EmployerEmployerAddress;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolment;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentPension;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentPrimaryAddress;
import org.openapis.openapi.models.shared.EmployerEmployerAutoEnrolmentSecondaryAddress;
import org.openapis.openapi.models.shared.EmployerEmployerBankAccount;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettings;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettingsSenderEnum;
import org.openapis.openapi.models.shared.EmployerEmployerHmrcSettingsStateAidSectorEnum;
import org.openapis.openapi.models.shared.EmployerEmployerRegionEnum;
import org.openapis.openapi.models.shared.EmployerEmployerRuleExclusionsEnum;
import org.openapis.openapi.models.shared.EmployerEmployerTerritoryEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutEmployerRequest req = new PutEmployerRequest("tempora", "tempora",                 new Employer() {{
                                employer = new EmployerEmployer() {{
                                    address = new EmployerEmployerAddress() {{
                                        address1 = "voluptate";
                                        address2 = "reiciendis";
                                        address3 = "ex";
                                        address4 = "sit";
                                        country = "Ecuador";
                                        postcode = "57323-8507";
                                    }};;
                                    apprenticeshipLevyAllowance = 6256.37;
                                    autoEnrolment = new EmployerEmployerAutoEnrolment() {{
                                        pension = new EmployerEmployerAutoEnrolmentPension() {{
                                            atHref = "veniam";
                                            atRel = "minima";
                                            atTitle = "recusandae";
                                        }};;
                                        postponementDate = LocalDate.parse("2020-05-31");
                                        primaryAddress = new EmployerEmployerAutoEnrolmentPrimaryAddress() {{
                                            address1 = "magni";
                                            address2 = "aperiam";
                                            address3 = "saepe";
                                            address4 = "numquam";
                                            country = "Gibraltar";
                                            postcode = "81535";
                                        }};;
                                        primaryEmail = "cum";
                                        primaryFirstName = "laboriosam";
                                        primaryJobTitle = "dolorum";
                                        primaryLastName = "voluptatum";
                                        primaryTelephone = "error";
                                        reEnrolmentDayOffset = 944708;
                                        reEnrolmentMonthOffset = 710529;
                                        recentOptOutReEnrolmentExcluded = false;
                                        secondaryAddress = new EmployerEmployerAutoEnrolmentSecondaryAddress() {{
                                            address1 = "debitis";
                                            address2 = "neque";
                                            address3 = "dolorum";
                                            address4 = "nostrum";
                                            country = "New Zealand";
                                            postcode = "58251-2806";
                                        }};;
                                        secondaryEmail = "expedita";
                                        secondaryFirstName = "magnam";
                                        secondaryJobTitle = "consequatur";
                                        secondaryLastName = "esse";
                                        secondaryTelephone = "ipsam";
                                        stagingDate = LocalDate.parse("2022-06-21");
                                    }};;
                                    bacsServiceUserNumber = "quas";
                                    bankAccount = new EmployerEmployerBankAccount() {{
                                        accountName = "repudiandae";
                                        accountNumber = "corporis";
                                        branchName = "et";
                                        reference = "blanditiis";
                                        sortCode = "ex";
                                    }};;
                                    calculateApprenticeshipLevy = false;
                                    claimEmploymentAllowance = false;
                                    claimSmallEmployerRelief = false;
                                    effectiveDate = LocalDate.parse("2022-12-23");
                                    hmrcSettings = new EmployerEmployerHmrcSettings() {{
                                        accountingOfficeRef = "vel";
                                        cotaxRef = "nostrum";
                                        contactEmail = "saepe";
                                        contactFax = "error";
                                        contactFirstName = "consequatur";
                                        contactLastName = "incidunt";
                                        contactTelephone = "reiciendis";
                                        employmentAllowanceOverride = 2097.5;
                                        password = "harum";
                                        sautr = "dicta";
                                        sender = EmployerEmployerHmrcSettingsSenderEnum.EMPLOYER;
                                        senderId = "occaecati";
                                        stateAidSector = EmployerEmployerHmrcSettingsStateAidSectorEnum.FISHERIES_AQUACULTURE;
                                        taxOfficeNumber = "quidem";
                                        taxOfficeReference = "atque";
                                    }};;
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("nam", "tenetur");
                                        put("laboriosam", "alias");
                                        put("amet", "deserunt");
                                    }};
                                    name = "Lindsey Witting";
                                    nextRevisionDate = LocalDate.parse("2020-04-04");
                                    region = EmployerEmployerRegionEnum.NOT_SET;
                                    revision = 667285;
                                    ruleExclusions = EmployerEmployerRuleExclusionsEnum.P45_YTD_TAX_RULE;
                                    territory = EmployerEmployerTerritoryEnum.UNITED_KINGDOM;
                                }};;
                            }};, "reprehenderit");            

            PutEmployerResponse res = sdk.employer.putEmployer(req);

            if (res.employer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putEmployerSecret

Create / update an employer secret at the given resource location

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutEmployerSecretRequest;
import org.openapis.openapi.models.operations.PutEmployerSecretResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutEmployerSecretRequest req = new PutEmployerSecretRequest("facere", "fuga", "praesentium", "mollitia");            

            PutEmployerSecretResponse res = sdk.employer.putEmployerSecret(req);

            if (res.employerSecret != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
