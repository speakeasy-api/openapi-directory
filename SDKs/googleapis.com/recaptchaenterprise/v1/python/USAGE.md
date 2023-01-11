<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest(
    security=operations.RecaptchaenterpriseProjectsAssessmentsAnnotateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RecaptchaenterpriseProjectsAssessmentsAnnotatePathParams(
        name="vel",
    ),
    query_params=operations.RecaptchaenterpriseProjectsAssessmentsAnnotateQueryParams(
        dollar_xgafv="2",
        access_token="sint",
        alt="json",
        callback="voluptatem",
        fields="eligendi",
        key="ratione",
        oauth_token="exercitationem",
        pretty_print=False,
        quota_user="voluptatem",
        upload_type="qui",
        upload_protocol="cumque",
    ),
    request=shared.GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest(
        annotation="FRAUDULENT",
        hashed_account_id="ullam",
        reasons=[
            "INCORRECT_PASSWORD",
        ],
    ),
)
    
res = s.projects.recaptchaenterprise_projects_assessments_annotate(req)

if res.google_cloud_recaptchaenterprise_v1_annotate_assessment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->