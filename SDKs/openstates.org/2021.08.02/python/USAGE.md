<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.BillDetailBillsJurisdictionSessionBillIDGetRequest(
    path_params=operations.BillDetailBillsJurisdictionSessionBillIDGetPathParams(
        bill_id="voluptates",
        jurisdiction="eos",
        session="ducimus",
    ),
    query_params=operations.BillDetailBillsJurisdictionSessionBillIDGetQueryParams(
        apikey="esse",
        include=[
            "other_identifiers",
        ],
    ),
    headers=operations.BillDetailBillsJurisdictionSessionBillIDGetHeaders(
        x_api_key="qui",
    ),
)
    
res = s.bills.bill_detail_bills_jurisdiction_session_bill_id_get(req)

if res.bill is not None:
    # handle response
```
<!-- End SDK Example Usage -->