<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.CredentialOptions(
    acl={
        "provident": "distinctio",
        "quibusdam": "unde",
        "nulla": "corrupti",
    },
    cidrs="10.0.0.17/32, 192.168.1.0/24",
    global_=False,
    name="credentials_name",
    secret=shared.SNMPv3CredentialFields(
        auth_passphrase="authpass",
        auth_protocol="sha",
        context="vlan-32",
        privacy_passphrase="privpass",
        privacy_protocol="aes",
        username="user",
    ),
    type="miradore_api_key_v1",
)
    
res = s.account.create_account_credential(req, operations.CreateAccountCredentialSecurity(
    bearer_auth="Bearer YOUR_BEARER_TOKEN_HERE",
))

if res.credential is not None:
    # handle response
```
<!-- End SDK Example Usage -->