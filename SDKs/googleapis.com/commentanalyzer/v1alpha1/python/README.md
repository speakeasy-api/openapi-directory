# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/commentanalyzer/v1alpha1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CommentanalyzerCommentsAnalyzeRequest(
    dollar_xgafv="2",
    analyze_comment_request=shared.AnalyzeCommentRequest(
        client_token="provident",
        comment=shared.TextEntry(
            text="distinctio",
            type="HTML",
        ),
        community_id="unde",
        context=shared.Context(
            article_and_parent_comment=shared.ArticleAndParentComment(
                article=shared.TextEntry(
                    text="nulla",
                    type="PLAIN_TEXT",
                ),
                parent_comment=shared.TextEntry(
                    text="illum",
                    type="PLAIN_TEXT",
                ),
            ),
            entries=[
                shared.TextEntry(
                    text="deserunt",
                    type="PLAIN_TEXT",
                ),
                shared.TextEntry(
                    text="iure",
                    type="TEXT_TYPE_UNSPECIFIED",
                ),
                shared.TextEntry(
                    text="debitis",
                    type="TEXT_TYPE_UNSPECIFIED",
                ),
            ],
        ),
        do_not_store=False,
        drop_unsupported_attributes=False,
        languages=[
            "tempora",
            "suscipit",
            "molestiae",
            "minus",
        ],
        requested_attributes={
            "voluptatum": shared.AttributeParameters(
                score_threshold=4799.77,
                score_type="STD_DEV_SCORE",
            ),
            "nisi": shared.AttributeParameters(
                score_threshold=9255.97,
                score_type="RAW",
            ),
            "ab": shared.AttributeParameters(
                score_threshold=3373.96,
                score_type="SCORE_TYPE_UNSPECIFIED",
            ),
            "deserunt": shared.AttributeParameters(
                score_threshold=202.18,
                score_type="PROBABILITY",
            ),
        },
        session_id="repellendus",
        span_annotations=False,
    ),
    access_token="sapiente",
    alt="proto",
    callback="odit",
    fields_="at",
    key="at",
    oauth_token="maiores",
    pretty_print=False,
    quota_user="molestiae",
    upload_type="quod",
    upload_protocol="quod",
)
    
res = s.comments.commentanalyzer_comments_analyze(req, operations.CommentanalyzerCommentsAnalyzeSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.analyze_comment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### comments

* `commentanalyzer_comments_analyze` - Analyzes the provided text and returns scores for requested attributes.
* `commentanalyzer_comments_suggestscore` - Suggest comment scores as training data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
