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