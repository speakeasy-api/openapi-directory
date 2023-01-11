<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.YoutubeAbuseReportsInsertRequest(
    security=operations.YoutubeAbuseReportsInsertSecurity(
        option1=operations.YoutubeAbuseReportsInsertSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.YoutubeAbuseReportsInsertQueryParams(
        dollar_xgafv="2",
        access_token="dolores",
        alt="json",
        callback="nihil",
        fields="dolorem",
        key="a",
        oauth_token="dicta",
        part=[
            "consequatur",
        ],
        pretty_print=True,
        quota_user="omnis",
        upload_type="doloremque",
        upload_protocol="magnam",
    ),
    request=shared.AbuseReport(
        abuse_types=[
            shared.AbuseType(
                id="ea",
            ),
            shared.AbuseType(
                id="in",
            ),
            shared.AbuseType(
                id="et",
            ),
        ],
        description="aut",
        related_entities=[
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="qui",
                    type_id="blanditiis",
                    url="inventore",
                ),
            ),
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="minima",
                    type_id="eum",
                    url="dolorum",
                ),
            ),
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="quibusdam",
                    type_id="est",
                    url="sint",
                ),
            ),
        ],
        subject=shared.Entity(
            id="et",
            type_id="aut",
            url="repellendus",
        ),
    ),
)
    
res = s.abuse_reports.youtube_abuse_reports_insert(req)

if res.abuse_report is not None:
    # handle response
```
<!-- End SDK Example Usage -->