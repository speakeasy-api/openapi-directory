<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CommentanalyzerCommentsAnalyzeRequest(
    security=operations.CommentanalyzerCommentsAnalyzeSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.CommentanalyzerCommentsAnalyzeQueryParams(
        dollar_xgafv="2",
        access_token="cupiditate",
        alt="json",
        callback="aliquid",
        fields="et",
        key="adipisci",
        oauth_token="et",
        pretty_print=False,
        quota_user="itaque",
        upload_type="illum",
        upload_protocol="voluptas",
    ),
    request=shared.AnalyzeCommentRequest(
        client_token="a",
        comment=shared.TextEntry(
            text="debitis",
            type="PLAIN_TEXT",
        ),
        community_id="molestiae",
        context=shared.Context(
            article_and_parent_comment=shared.ArticleAndParentComment(
                article=shared.TextEntry(
                    text="labore",
                    type="PLAIN_TEXT",
                ),
                parent_comment=shared.TextEntry(
                    text="consectetur",
                    type="TEXT_TYPE_UNSPECIFIED",
                ),
            ),
            entries=[
                shared.TextEntry(
                    text="ipsam",
                    type="HTML",
                ),
                shared.TextEntry(
                    text="cum",
                    type="PLAIN_TEXT",
                ),
            ],
        ),
        do_not_store=True,
        languages=[
            "repellat",
            "excepturi",
            "voluptatem",
        ],
        requested_attributes={
            "id": shared.AttributeParameters(
                score_threshold=28.200001,
                score_type="RAW",
            ),
        },
        session_id="consectetur",
        span_annotations=False,
    ),
)
    
res = s.comments.commentanalyzer_comments_analyze(req)

if res.analyze_comment_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->