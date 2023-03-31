# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nexmo.com/sms/1.2.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.SendAnSmsRequest(
    new_message=shared.NewMessage(
        account_ref="customer1234",
        api_key="abcd1234",
        api_secret="abcdef0123456789",
        body="0011223344556677",
        callback="https://example.com/sms-dlr",
        client_ref="my-personal-reference",
        content_id="1107457532145798767",
        entity_id="1101456324675322134",
        from_="AcmeInc",
        message_class="2",
        protocol_id=127,
        sig="provident",
        status_report_req=False,
        text="Hello World!",
        to="447700900000",
        ttl=900000,
        type="text",
        udh="06050415811581",
    ),
    format="json",
)
    
res = s.send_an_sms(req)

if res.send_an_sms_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `send_an_sms` - Send an SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
