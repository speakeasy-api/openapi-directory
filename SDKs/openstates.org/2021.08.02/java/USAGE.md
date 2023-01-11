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
                    billId = "sit";
                    jurisdiction = "voluptas";
                    session = "culpa";
                }};
                queryParams = new BillDetailBillsJurisdictionSessionBillIdGetQueryParams() {{
                    apikey = "expedita";
                    include = new openapisdk.models.shared.BillIncludeEnum[]() {{
                        add("versions"),
                        add("versions"),
                        add("votes"),
                    }};
                }};
                headers = new BillDetailBillsJurisdictionSessionBillIdGetHeaders() {{
                    xApiKey = "fugit";
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