# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/okta.local/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ClearUserSessionsRequest(
    request_body="corrupti".encode(),
    user_id="provident",
)
    
res = s.clear_user_sessions(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `clear_user_sessions` - Clear User Sessions
* `find_user` - Find User
* `get_assigned_app_links` - Get Assigned App Links
* `get_current_user` - Get Current User
* `get_groups_for_user` - Get Groups for User
* `get_user` - Get User
* `reset_factors` - Reset Factors

### create_user

* `create_user_in_group` - Create User in Group

### credential_operations

* `change_password` - Change Password
* `change_recovery_question` - Change Recovery Question
* `forgot_password_one_time_code_` - Forgot Password (One Time Code)
* `set_recovery_credential` - Set Recovery Credential

### lifecycle_operations

* `activate_user` - Activate User
* `deactivate_user` - Deactivate User
* `reset_password` - Reset Password
* `set_temp_password` - Set Temp Password
* `suspend_user` - Suspend User
* `unlock_user` - Unlock User
* `unsuspend_user` - Unsuspend User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
