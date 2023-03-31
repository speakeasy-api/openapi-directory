<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.RegressionAPIBody(
    convert_date_to="month",
    data=[
        {
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        {
            "error": "deserunt",
            "suscipit": "iure",
        },
        {
            "debitis": "ipsa",
            "delectus": "tempora",
        },
    ],
    ignore_variables=[
        {
            "minus": "placeat",
            "voluptatum": "iusto",
        },
        {
            "nisi": "recusandae",
            "temporibus": "ab",
            "quis": "veritatis",
        },
    ],
    key="abc123",
    outcome_variable="sales",
)
    
res = s.post_regression_api(req)

if res.inline_response_200 is not None:
    # handle response
```
<!-- End SDK Example Usage -->