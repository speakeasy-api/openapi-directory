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