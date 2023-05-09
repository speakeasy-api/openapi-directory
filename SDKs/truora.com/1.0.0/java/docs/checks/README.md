# checks

## Overview

Allows you to create and retrieve background checks. Consults multiple databases and delivers a comprehensive set of information to help assess the reliability of a person, vehicle, or company.

### Available Operations

* [getHealthDashboard](#gethealthdashboard) - Get Health Dashboard
* [createCheck](#createcheck) - Create a background check
* [getCheck](#getcheck) - Get Background Check
* [listCheckDetails](#listcheckdetails) - List Check Details
* [listChecks](#listchecks) - List Checks

## getHealthDashboard

Get the status of a database

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHealthDashboardRequest;
import org.openapis.openapi.models.operations.GetHealthDashboardResponse;
import org.openapis.openapi.models.operations.GetHealthDashboardSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHealthDashboardRequest req = new GetHealthDashboardRequest() {{
                country = "Tuvalu";
                unixTimestampSeconds = "temporibus";
                unixtimezoneOffsetSeconds = "ab";
            }};            

            GetHealthDashboardResponse res = sdk.checks.getHealthDashboard(req, new GetHealthDashboardSecurity("quis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.databases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCheck

Creates a background check and queues it to start collecting information. The full details of background checks can be retrieved with their respective Check IDs using getCheck endpoint. Keep in mind that, depending on the check type, input document, and country of a search, certain inputs are required. You should always provide as many inputs as possible in order to get the highest accuracy.

If your check type is not referenced in the following table, please reach out to find out the fields that apply for you.

| Country | Person-National | PersonForeigner | Company | Vehicle-National | Vehicle-Foreigner |
|:-------:|:---------------:|:---------------:|:-------:|:----------------:|:-----------------:|
| Chile<br>CL | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>date_of_birth*<br>phone_number<br>first_name*<br>last_name*<br>native_country* | N/A | national_id*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) | foreign_id*<br>first_name*<br>last_name*<br>date_of_birth*<br>native_country*<br>license_plate*<br>payment_date (Santiago only)<br>driver_license (Santiago only) |
| Colombia<br>CO | national_id*<br>date_of_birth<br>issue_date<br>phone_number | foreign_id* or PEP*<br>date_of_birth<br>phone_number<br>issue_date* | tax_id*<br>national_id | national_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>owner_document_type<br>owner_document_id | foreign_id*<br>date_of_birth<br>phone_number<br>license_plate*<br>issue_date* |
| Mexico<br>MX | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate*<br>national_id<br>vehicle_id<br>driver_license(Estado de Mexico only) | N/A |
| Brazil<br>BR | national_id*<br>date_of_birth*<br>region*<br>phone_number | N/A | tax_id* | license_plate* | N/A |
| Costa Rica<br>CR | national_id*<br>phone_number | foreign_id* | N/A | license_plate* | N/A |
| Ecuador<br>EC | national_id*<br>phone_number | foreign_id* | tax_id* | license_plate* | N/A |
| Peru<br>PE | national_id*<br>date_of_birth<br>phone_number | foreign_id*<br>ptp<br>date_of_birth*<br>phone_number | N/A | national_id*<br>date_of_birth<br>license_plate* | foreign_id*<br>ptp<br>date_of_birth*<br>license_plate* |
| Argentina<br>AR | national_id* | N/A | N/A | national_id* | N/A |
| International<br>ALL | name* | name* | company_name* | N/A | N/A |

(*) Required field

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCheckRequest;
import org.openapis.openapi.models.operations.CreateCheckResponse;
import org.openapis.openapi.models.operations.CreateCheckSecurity;
import org.openapis.openapi.models.operations.CreateCheckTruoraPriorityEnum;
import org.openapis.openapi.models.shared.CreateCheckInput;
import org.openapis.openapi.models.shared.CreateCheckInputCountryEnum;
import org.openapis.openapi.models.shared.CreateCheckInputRegionEnum;
import org.openapis.openapi.models.shared.CreateCheckInputTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCheckRequest req = new CreateCheckRequest(                new CreateCheckInput(CreateCheckInputCountryEnum.ALL, CreateCheckInputTypeEnum.COMPANY) {{
                                birthCertificate = "perferendis";
                                companyName = "ipsam";
                                dateOfBirth = LocalDate.parse("2020-02-17");
                                diplomaticId = "quo";
                                driverLicense = "odit";
                                escrow = "at";
                                firstName = "Sarah";
                                forceCreation = false;
                                foreignId = "maiores";
                                issueDate = LocalDate.parse("2022-03-15");
                                lastName = "Schmidt";
                                licensePlate = "esse";
                                nationalId = "totam";
                                nativeCountry = "porro";
                                ownerDocumentId = "dolorum";
                                ownerDocumentType = "dicta";
                                passport = "nam";
                                paymentDate = LocalDate.parse("2021-11-02");
                                pep = "fugit";
                                phoneNumber = "deleniti";
                                professionalCard = "hic";
                                ptp = "optio";
                                region = CreateCheckInputRegionEnum.PB;
                                reportId = "beatae";
                                stateId = "commodi";
                                taxId = "molestiae";
                                userAuthorized = false;
                                vehicleId = "modi";
                                verificationCode = "qui";
                                watch = "impedit";
                            }};) {{
                truoraPriority = CreateCheckTruoraPriorityEnum.HIGH;
            }};            

            CreateCheckResponse res = sdk.checks.createCheck(req, new CreateCheckSecurity("esse") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.checkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCheck

Returns the results of the check that matches the ID provided, complete with a set of scores explained below.

### Scores:


- **Global Score**: Average risk associated with a person, company or vehicle, according to  the background check results. The global score considers results that are validated with the  ID number provided. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.


- **ID Score**: Average risk associated with a person according to the background check  results. The ID score considers the results that are validated with a person identity  document. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk. 


- **Homonym Score**: Average risk associated with a person according to the background check  results. The homonym score considers results that are validated against the name of a person and could not be validated with their ID number. These results might have homonyms associated with them. The score ranges from 0 to 1, where 0 represents high risk and 1 low risk.


In order to calculate these scores, a weighted average is considered with different weights allocated to each dataset. Scores can be customized using the config endpoints by assigning a weight to each dataset according to its relevance.

Keep in mind that results from the API vary depending on the country, check type and the inputs entered on check creation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCheckRequest;
import org.openapis.openapi.models.operations.GetCheckResponse;
import org.openapis.openapi.models.operations.GetCheckSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCheckRequest req = new GetCheckRequest("ipsum");            

            GetCheckResponse res = sdk.checks.getCheck(req, new GetCheckSecurity("excepturi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.checkOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCheckDetails

Lists all details associated with a Check. It can be paginated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCheckDetailsRequest;
import org.openapis.openapi.models.operations.ListCheckDetailsResponse;
import org.openapis.openapi.models.operations.ListCheckDetailsSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCheckDetailsRequest req = new ListCheckDetailsRequest("aspernatur") {{
                lang = "perferendis";
                startKey = "ad";
            }};            

            ListCheckDetailsResponse res = sdk.checks.listCheckDetails(req, new ListCheckDetailsSecurity("natus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.checkDetailsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listChecks

Lists the existing checks in the account or in a specified report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListChecksRequest;
import org.openapis.openapi.models.operations.ListChecksResponse;
import org.openapis.openapi.models.operations.ListChecksSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListChecksRequest req = new ListChecksRequest() {{
                reportId = "sed";
                startKey = "iste";
            }};            

            ListChecksResponse res = sdk.checks.listChecks(req, new ListChecksSecurity("dolor") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.checksOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
