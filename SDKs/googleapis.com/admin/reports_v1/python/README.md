# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/admin/reports_v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ReportsActivitiesListRequest(
    dollar_xgafv="2",
    access_token="provident",
    actor_ip_address="distinctio",
    alt="proto",
    application_name="mobile",
    callback="nulla",
    customer_id="corrupti",
    end_time="illum",
    event_name="vel",
    fields_="error",
    filters="deserunt",
    group_id_filter="suscipit",
    key="iure",
    max_results=297534,
    oauth_token="debitis",
    org_unit_id="ipsa",
    page_token="delectus",
    pretty_print=False,
    quota_user="tempora",
    start_time="suscipit",
    upload_type="molestiae",
    upload_protocol="minus",
    user_key="placeat",
)
    
res = s.activities.reports_activities_list(req, operations.ReportsActivitiesListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.activities is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### activities

* `reports_activities_list` - Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides. 
* `reports_activities_watch` - Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

### channels

* `admin_channels_stop` - Stop watching resources through this channel.

### customer_usage_reports

* `reports_customer_usage_reports_get` - Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides. 

### entity_usage_reports

* `reports_entity_usage_reports_get` - Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

### user_usage_report

* `reports_user_usage_report_get` - Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
