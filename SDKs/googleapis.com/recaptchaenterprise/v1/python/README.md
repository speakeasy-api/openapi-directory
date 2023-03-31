# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/recaptchaenterprise/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest(
    dollar_xgafv="2",
    google_cloud_recaptchaenterprise_v1_annotate_assessment_request=shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest(
        annotation="FRAUDULENT",
        hashed_account_id="distinctio",
        reasons=[
            "INITIATED_TWO_FACTOR",
            "CORRECT_PASSWORD",
            "PAYMENT_HEURISTICS",
            "CORRECT_PASSWORD",
        ],
        transaction_event=shared.GoogleCloudRecaptchaenterpriseV1TransactionEvent(
            event_time="vel",
            event_type="FRAUD_NOTIFICATION",
            reason="deserunt",
            value=3843.82,
        ),
    ),
    access_token="iure",
    alt="json",
    callback="debitis",
    fields_="ipsa",
    key="delectus",
    name="tempora",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="molestiae",
    upload_type="minus",
    upload_protocol="placeat",
)
    
res = s.projects.recaptchaenterprise_projects_assessments_annotate(req, operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_recaptchaenterprise_v1_annotate_assessment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `recaptchaenterprise_projects_assessments_annotate` - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
* `recaptchaenterprise_projects_assessments_create` - Creates an Assessment of the likelihood an event is legitimate.
* `recaptchaenterprise_projects_firewallpolicies_create` - Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
* `recaptchaenterprise_projects_firewallpolicies_list` - Returns the list of all firewall policies that belong to a project.
* `recaptchaenterprise_projects_keys_create` - Creates a new reCAPTCHA Enterprise key.
* `recaptchaenterprise_projects_keys_delete` - Deletes the specified key.
* `recaptchaenterprise_projects_keys_get_metrics` - Get some aggregated metrics for a Key. This data can be used to build dashboards.
* `recaptchaenterprise_projects_keys_list` - Returns the list of all keys that belong to a project.
* `recaptchaenterprise_projects_keys_migrate` - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
* `recaptchaenterprise_projects_keys_patch` - Updates the specified key.
* `recaptchaenterprise_projects_keys_retrieve_legacy_secret_key` - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
* `recaptchaenterprise_projects_relatedaccountgroupmemberships_search` - Search group memberships related to a given account.
* `recaptchaenterprise_projects_relatedaccountgroups_list` - List groups of related accounts.
* `recaptchaenterprise_projects_relatedaccountgroups_memberships_list` - Get memberships in a group of related accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
