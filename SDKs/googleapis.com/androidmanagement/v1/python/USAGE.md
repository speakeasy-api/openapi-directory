<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AndroidmanagementEnterprisesCreateRequest(
    dollar_xgafv="2",
    enterprise=shared.Enterprise(
        app_auto_approval_enabled=False,
        contact_info=shared.ContactInfo(
            contact_email="provident",
            data_protection_officer_email="distinctio",
            data_protection_officer_name="quibusdam",
            data_protection_officer_phone="unde",
            eu_representative_email="nulla",
            eu_representative_name="corrupti",
            eu_representative_phone="illum",
        ),
        enabled_notification_types=[
            "STATUS_REPORT",
            "STATUS_REPORT",
        ],
        enterprise_display_name="suscipit",
        logo=shared.ExternalData(
            sha256_hash="iure",
            url="magnam",
        ),
        name="debitis",
        primary_color=56713,
        pubsub_topic="delectus",
        signin_details=[
            shared.SigninDetail(
                allow_personal_usage="PERSONAL_USAGE_ALLOWED",
                qr_code="molestiae",
                signin_enrollment_token="minus",
                signin_url="placeat",
            ),
            shared.SigninDetail(
                allow_personal_usage="PERSONAL_USAGE_ALLOWED",
                qr_code="iusto",
                signin_enrollment_token="excepturi",
                signin_url="nisi",
            ),
        ],
        terms_and_conditions=[
            shared.TermsAndConditions(
                content=shared.UserFacingMessage(
                    default_message="temporibus",
                    localized_messages={
                        "quis": "veritatis",
                    },
                ),
                header=shared.UserFacingMessage(
                    default_message="deserunt",
                    localized_messages={
                        "ipsam": "repellendus",
                    },
                ),
            ),
            shared.TermsAndConditions(
                content=shared.UserFacingMessage(
                    default_message="sapiente",
                    localized_messages={
                        "odit": "at",
                        "at": "maiores",
                        "molestiae": "quod",
                        "quod": "esse",
                    },
                ),
                header=shared.UserFacingMessage(
                    default_message="totam",
                    localized_messages={
                        "dolorum": "dicta",
                        "nam": "officia",
                        "occaecati": "fugit",
                        "deleniti": "hic",
                    },
                ),
            ),
            shared.TermsAndConditions(
                content=shared.UserFacingMessage(
                    default_message="optio",
                    localized_messages={
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                ),
                header=shared.UserFacingMessage(
                    default_message="cum",
                    localized_messages={
                        "ipsum": "excepturi",
                        "aspernatur": "perferendis",
                    },
                ),
            ),
            shared.TermsAndConditions(
                content=shared.UserFacingMessage(
                    default_message="ad",
                    localized_messages={
                        "sed": "iste",
                        "dolor": "natus",
                        "laboriosam": "hic",
                    },
                ),
                header=shared.UserFacingMessage(
                    default_message="saepe",
                    localized_messages={
                        "in": "corporis",
                        "iste": "iure",
                        "saepe": "quidem",
                    },
                ),
            ),
        ],
    ),
    access_token="architecto",
    agreement_accepted=False,
    alt="json",
    callback="reiciendis",
    enterprise_token="est",
    fields_="mollitia",
    key="laborum",
    oauth_token="dolores",
    pretty_print=False,
    project_id="dolorem",
    quota_user="corporis",
    signup_url_name="explicabo",
    upload_type="nobis",
    upload_protocol="enim",
)
    
res = s.enterprises.androidmanagement_enterprises_create(req, operations.AndroidmanagementEnterprisesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.enterprise is not None:
    # handle response
```
<!-- End SDK Example Usage -->