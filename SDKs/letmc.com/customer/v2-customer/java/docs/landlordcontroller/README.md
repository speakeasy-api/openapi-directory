# landlordController

### Available Operations

* [landlordControllerCreateMaintenancePreference](#landlordcontrollercreatemaintenancepreference) - Post tenancy maintenance preferences:-
* [landlordControllerGetAccounts](#landlordcontrollergetaccounts) - Get the accounting details for the landlord.
* [landlordControllerGetDocument](#landlordcontrollergetdocument) - Download a Document
* [landlordControllerGetInvetoryReport](#landlordcontrollergetinvetoryreport) - Generate a Inventory PDF for a tenancy
* [landlordControllerGetInvoice](#landlordcontrollergetinvoice) - Get an invoice pdf belonging to the landlord.
* [landlordControllerGetLandlordCrmEntries](#landlordcontrollergetlandlordcrmentries) - Retrieve landlord's CRM ID
* [landlordControllerGetMaintenanceJobs](#landlordcontrollergetmaintenancejobs) - Get Active maintenance jobs.
* [landlordControllerGetProfitLossReport](#landlordcontrollergetprofitlossreport) - Generate a Profit and Loss Report
* [landlordControllerGetRentArrears](#landlordcontrollergetrentarrears) - Rent Arrears
* [landlordControllerGetSASReport](#landlordcontrollergetsasreport) - Generate a Self Assessment Tax Report
* [landlordControllerGetSettings](#landlordcontrollergetsettings) - Get contact details of all linked landlords.
* [landlordControllerGetSummaryDetails](#landlordcontrollergetsummarydetails) - Get the summary details for the landlord.
* [landlordControllerGetTenancy](#landlordcontrollergettenancy) - Get tenancy details.
* [landlordControllerGetTenancyAgreementReport](#landlordcontrollergettenancyagreementreport) - Generate a Tenancy Agreement Copy (PDF)

## landlordControllerCreateMaintenancePreference

Post tenancy maintenance preferences:-

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerCreateMaintenancePreferenceRequest;
import org.openapis.openapi.models.operations.LandlordControllerCreateMaintenancePreferenceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerCreateMaintenancePreferenceRequest req = new LandlordControllerCreateMaintenancePreferenceRequest("vel", "error", "deserunt", "suscipit", "iure");            

            LandlordControllerCreateMaintenancePreferenceResponse res = sdk.landlordController.landlordControllerCreateMaintenancePreference(req);

            if (res.landlordControllerCreateMaintenancePreference200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetAccounts

Get the accounting details for the landlord.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetAccountsRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetAccountsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetAccountsRequest req = new LandlordControllerGetAccountsRequest("magnam", "debitis");            

            LandlordControllerGetAccountsResponse res = sdk.landlordController.landlordControllerGetAccounts(req);

            if (res.landlordAccountingModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetDocument

Download a Document

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetDocumentRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetDocumentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetDocumentRequest req = new LandlordControllerGetDocumentRequest("ipsa", "delectus", "tempora");            

            LandlordControllerGetDocumentResponse res = sdk.landlordController.landlordControllerGetDocument(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetInvetoryReport

Generate a Inventory PDF for a tenancy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetInvetoryReportRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetInvetoryReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetInvetoryReportRequest req = new LandlordControllerGetInvetoryReportRequest("suscipit", "molestiae", "minus");            

            LandlordControllerGetInvetoryReportResponse res = sdk.landlordController.landlordControllerGetInvetoryReport(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetInvoice

Get an invoice pdf belonging to the landlord.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetInvoiceRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetInvoiceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetInvoiceRequest req = new LandlordControllerGetInvoiceRequest("placeat", "voluptatum", "iusto");            

            LandlordControllerGetInvoiceResponse res = sdk.landlordController.landlordControllerGetInvoice(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetLandlordCrmEntries

Retrieve landlord's CRM ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetLandlordCrmEntriesRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetLandlordCrmEntriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetLandlordCrmEntriesRequest req = new LandlordControllerGetLandlordCrmEntriesRequest("excepturi", "nisi");            

            LandlordControllerGetLandlordCrmEntriesResponse res = sdk.landlordController.landlordControllerGetLandlordCrmEntries(req);

            if (res.landlordCrmEntries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetMaintenanceJobs

Get Active maintenance jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetMaintenanceJobsRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetMaintenanceJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetMaintenanceJobsRequest req = new LandlordControllerGetMaintenanceJobsRequest("recusandae", "temporibus");            

            LandlordControllerGetMaintenanceJobsResponse res = sdk.landlordController.landlordControllerGetMaintenanceJobs(req);

            if (res.landlordMaintenanceModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetProfitLossReport

Generate a Profit and Loss Report

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetProfitLossReportRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetProfitLossReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetProfitLossReportRequest req = new LandlordControllerGetProfitLossReportRequest("ab", "quis");            

            LandlordControllerGetProfitLossReportResponse res = sdk.landlordController.landlordControllerGetProfitLossReport(req);

            if (res.landlordProfitLossModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetRentArrears

Rent Arrears

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetRentArrearsRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetRentArrearsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetRentArrearsRequest req = new LandlordControllerGetRentArrearsRequest("veritatis", "deserunt");            

            LandlordControllerGetRentArrearsResponse res = sdk.landlordController.landlordControllerGetRentArrears(req);

            if (res.landlordRentArrearsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetSASReport

Generate a Self Assessment Tax Report

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetSASReportRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetSASReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetSASReportRequest req = new LandlordControllerGetSASReportRequest("perferendis", "ipsam", 832620);            

            LandlordControllerGetSASReportResponse res = sdk.landlordController.landlordControllerGetSASReport(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetSettings

Get contact details of all linked landlords.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetSettingsRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetSettingsRequest req = new LandlordControllerGetSettingsRequest("sapiente", "quo");            

            LandlordControllerGetSettingsResponse res = sdk.landlordController.landlordControllerGetSettings(req);

            if (res.landlordSettingsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetSummaryDetails

Get the summary details for the landlord.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetSummaryDetailsRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetSummaryDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetSummaryDetailsRequest req = new LandlordControllerGetSummaryDetailsRequest("odit", "at");            

            LandlordControllerGetSummaryDetailsResponse res = sdk.landlordController.landlordControllerGetSummaryDetails(req);

            if (res.landlordSummaryModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetTenancy

Get tenancy details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetTenancyRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetTenancyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetTenancyRequest req = new LandlordControllerGetTenancyRequest("at", "maiores", "molestiae");            

            LandlordControllerGetTenancyResponse res = sdk.landlordController.landlordControllerGetTenancy(req);

            if (res.landlordTenancyModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## landlordControllerGetTenancyAgreementReport

Generate a Tenancy Agreement Copy (PDF)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LandlordControllerGetTenancyAgreementReportRequest;
import org.openapis.openapi.models.operations.LandlordControllerGetTenancyAgreementReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LandlordControllerGetTenancyAgreementReportRequest req = new LandlordControllerGetTenancyAgreementReportRequest("quod", "quod", "esse");            

            LandlordControllerGetTenancyAgreementReportResponse res = sdk.landlordController.landlordControllerGetTenancyAgreementReport(req);

            if (res.object != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
