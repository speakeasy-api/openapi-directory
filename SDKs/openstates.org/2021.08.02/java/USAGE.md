<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            BillDetailBillsJurisdictionSessionBillIdGetRequest req = new BillDetailBillsJurisdictionSessionBillIdGetRequest() {{
                pathParams = new BillDetailBillsJurisdictionSessionBillIdGetPathParams() {{
                    billId = "beatae";
                    jurisdiction = "deleniti";
                    session = "expedita";
                }};
                queryParams = new BillDetailBillsJurisdictionSessionBillIdGetQueryParams() {{
                    apikey = "saepe";
                    include = new openapisdk.models.shared.BillIncludeEnum[]() {{
                        add("sponsorships"),
                    }};
                }};
                headers = new BillDetailBillsJurisdictionSessionBillIdGetHeaders() {{
                    xApiKey = "quidem";
                }};
            }};

            BillDetailBillsJurisdictionSessionBillIdGetResponse res = sdk.bills.billDetailBillsJurisdictionSessionBillIdGet(req);

            if (res.bill.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->