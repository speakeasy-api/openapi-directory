<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.YoutubeAbuseReportsInsertRequest(
    dollar_xgafv="2",
    abuse_report=shared.AbuseReport(
        abuse_types=[
            shared.AbuseType(
                id="distinctio",
            ),
            shared.AbuseType(
                id="quibusdam",
            ),
            shared.AbuseType(
                id="unde",
            ),
        ],
        description="nulla",
        related_entities=[
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="illum",
                    type_id="vel",
                    url="error",
                ),
            ),
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="deserunt",
                    type_id="suscipit",
                    url="iure",
                ),
            ),
            shared.RelatedEntity(
                entity=shared.Entity(
                    id="magnam",
                    type_id="debitis",
                    url="ipsa",
                ),
            ),
        ],
        subject=shared.Entity(
            id="delectus",
            type_id="tempora",
            url="suscipit",
        ),
    ),
    access_token="molestiae",
    alt="proto",
    callback="placeat",
    fields_="voluptatum",
    key="iusto",
    oauth_token="excepturi",
    part=[
        "recusandae",
        "temporibus",
    ],
    pretty_print=False,
    quota_user="ab",
    upload_type="quis",
    upload_protocol="veritatis",
)
    
res = s.abuse_reports.youtube_abuse_reports_insert(req, operations.YoutubeAbuseReportsInsertSecurity(
    option1=operations.YoutubeAbuseReportsInsertSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.abuse_report is not None:
    # handle response
```
<!-- End SDK Example Usage -->