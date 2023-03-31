# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/contactcenterinsights/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest(
    dollar_xgafv="2",
    google_cloud_contactcenterinsights_v1_analysis_input=shared.GoogleCloudContactcenterinsightsV1AnalysisInput(
        analysis_result=shared.GoogleCloudContactcenterinsightsV1AnalysisResult(
            call_analysis_metadata=shared.GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata(
                annotations=[
                    shared.GoogleCloudContactcenterinsightsV1CallAnnotation(
                        annotation_end_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=715190,
                            word_index=844266,
                        ),
                        annotation_start_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=602763,
                            word_index=857946,
                        ),
                        channel_tag=544883,
                        entity_mention_data=shared.GoogleCloudContactcenterinsightsV1EntityMentionData(
                            entity_unique_id="illum",
                            sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                                magnitude=4236.55,
                                score=6235.64,
                            ),
                            type="PROPER",
                        ),
                        hold_data={
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                        intent_match_data=shared.GoogleCloudContactcenterinsightsV1IntentMatchData(
                            intent_unique_id="delectus",
                        ),
                        interruption_data={
                            "suscipit": "molestiae",
                            "minus": "placeat",
                        },
                        issue_match_data=shared.GoogleCloudContactcenterinsightsV1IssueMatchData(
                            issue_assignment=shared.GoogleCloudContactcenterinsightsV1IssueAssignment(
                                display_name="voluptatum",
                                issue="iusto",
                                score=5680.45,
                            ),
                        ),
                        phrase_match_data=shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                            display_name="nisi",
                            phrase_matcher="recusandae",
                        ),
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=8360.79,
                            score=710.36,
                        ),
                        silence_data={
                            "veritatis": "deserunt",
                            "perferendis": "ipsam",
                        },
                    ),
                    shared.GoogleCloudContactcenterinsightsV1CallAnnotation(
                        annotation_end_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=832620,
                            word_index=957156,
                        ),
                        annotation_start_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=778157,
                            word_index=140350,
                        ),
                        channel_tag=870013,
                        entity_mention_data=shared.GoogleCloudContactcenterinsightsV1EntityMentionData(
                            entity_unique_id="at",
                            sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                                magnitude=9786.19,
                                score=4736.08,
                            ),
                            type="COMMON",
                        ),
                        hold_data={
                            "esse": "totam",
                            "porro": "dolorum",
                            "dicta": "nam",
                            "officia": "occaecati",
                        },
                        intent_match_data=shared.GoogleCloudContactcenterinsightsV1IntentMatchData(
                            intent_unique_id="fugit",
                        ),
                        interruption_data={
                            "hic": "optio",
                            "totam": "beatae",
                            "commodi": "molestiae",
                        },
                        issue_match_data=shared.GoogleCloudContactcenterinsightsV1IssueMatchData(
                            issue_assignment=shared.GoogleCloudContactcenterinsightsV1IssueAssignment(
                                display_name="modi",
                                issue="qui",
                                score=7742.34,
                            ),
                        ),
                        phrase_match_data=shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                            display_name="cum",
                            phrase_matcher="esse",
                        ),
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=2165.5,
                            score=5684.34,
                        ),
                        silence_data={
                            "perferendis": "ad",
                        },
                    ),
                    shared.GoogleCloudContactcenterinsightsV1CallAnnotation(
                        annotation_end_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=617636,
                            word_index=149675,
                        ),
                        annotation_start_boundary=shared.GoogleCloudContactcenterinsightsV1AnnotationBoundary(
                            transcript_index=612096,
                            word_index=222321,
                        ),
                        channel_tag=616934,
                        entity_mention_data=shared.GoogleCloudContactcenterinsightsV1EntityMentionData(
                            entity_unique_id="laboriosam",
                            sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                                magnitude=9437.49,
                                score=9025.99,
                            ),
                            type="COMMON",
                        ),
                        hold_data={
                            "corporis": "iste",
                            "iure": "saepe",
                        },
                        intent_match_data=shared.GoogleCloudContactcenterinsightsV1IntentMatchData(
                            intent_unique_id="quidem",
                        ),
                        interruption_data={
                            "ipsa": "reiciendis",
                        },
                        issue_match_data=shared.GoogleCloudContactcenterinsightsV1IssueMatchData(
                            issue_assignment=shared.GoogleCloudContactcenterinsightsV1IssueAssignment(
                                display_name="est",
                                issue="mollitia",
                                score=6706.38,
                            ),
                        ),
                        phrase_match_data=shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                            display_name="dolores",
                            phrase_matcher="dolorem",
                        ),
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=3581.52,
                            score=1289.26,
                        ),
                        silence_data={
                            "enim": "omnis",
                            "nemo": "minima",
                            "excepturi": "accusantium",
                            "iure": "culpa",
                        },
                    ),
                ],
                entities={
                    "sapiente": shared.GoogleCloudContactcenterinsightsV1Entity(
                        display_name="architecto",
                        metadata={
                            "dolorem": "culpa",
                            "consequuntur": "repellat",
                            "mollitia": "occaecati",
                        },
                        salience=2532.91,
                        sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=4143.69,
                            score=4663.11,
                        ),
                        type="CONSUMER_GOOD",
                    ),
                    "velit": shared.GoogleCloudContactcenterinsightsV1Entity(
                        display_name="error",
                        metadata={
                            "quis": "vitae",
                        },
                        salience=6747.52,
                        sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=6563.3,
                            score=3172.02,
                        ),
                        type="PERSON",
                    ),
                    "quo": shared.GoogleCloudContactcenterinsightsV1Entity(
                        display_name="sequi",
                        metadata={
                            "ipsam": "id",
                            "possimus": "aut",
                            "quasi": "error",
                            "temporibus": "laborum",
                        },
                        salience=960.98,
                        sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=9719.45,
                            score=9764.6,
                        ),
                        type="NUMBER",
                    ),
                    "nihil": shared.GoogleCloudContactcenterinsightsV1Entity(
                        display_name="praesentium",
                        metadata={
                            "ipsa": "omnis",
                            "voluptate": "cum",
                            "perferendis": "doloremque",
                            "reprehenderit": "ut",
                        },
                        salience=9795.87,
                        sentiment=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=1201.96,
                            score=3594.44,
                        ),
                        type="ORGANIZATION",
                    ),
                },
                intents={
                    "dicta": shared.GoogleCloudContactcenterinsightsV1Intent(
                        display_name="harum",
                        id="enim",
                    ),
                    "accusamus": shared.GoogleCloudContactcenterinsightsV1Intent(
                        display_name="commodi",
                        id="repudiandae",
                    ),
                },
                issue_model_result=shared.GoogleCloudContactcenterinsightsV1IssueModelResult(
                    issue_model="quae",
                    issues=[
                        shared.GoogleCloudContactcenterinsightsV1IssueAssignment(
                            display_name="quidem",
                            issue="molestias",
                            score=5666.02,
                        ),
                    ],
                ),
                phrase_matchers={
                    "modi": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                        display_name="praesentium",
                        phrase_matcher="rem",
                    ),
                    "voluptates": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                        display_name="quasi",
                        phrase_matcher="repudiandae",
                    ),
                    "sint": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                        display_name="veritatis",
                        phrase_matcher="itaque",
                    ),
                    "incidunt": shared.GoogleCloudContactcenterinsightsV1PhraseMatchData(
                        display_name="enim",
                        phrase_matcher="consequatur",
                    ),
                },
                sentiments=[
                    shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(
                        channel_tag=842342,
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=1317.97,
                            score=6471.74,
                        ),
                    ),
                    shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(
                        channel_tag=716327,
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=8413.86,
                            score=2894.06,
                        ),
                    ),
                    shared.GoogleCloudContactcenterinsightsV1ConversationLevelSentiment(
                        channel_tag=264730,
                        sentiment_data=shared.GoogleCloudContactcenterinsightsV1SentimentData(
                            magnitude=1831.91,
                            score=3978.21,
                        ),
                    ),
                ],
            ),
            end_time="cupiditate",
        ),
        annotator_selector=shared.GoogleCloudContactcenterinsightsV1AnnotatorSelector(
            issue_models=[
                "perferendis",
                "magni",
                "assumenda",
            ],
            phrase_matchers=[
                "alias",
                "fugit",
            ],
            run_entity_annotator=False,
            run_intent_annotator=False,
            run_interruption_annotator=False,
            run_issue_model_annotator=False,
            run_phrase_matcher_annotator=False,
            run_sentiment_annotator=False,
            run_silence_annotator=False,
        ),
        name="dolorum",
    ),
    access_token="excepturi",
    alt="json",
    callback="facilis",
    fields_="tempore",
    key="labore",
    oauth_token="delectus",
    parent="eum",
    pretty_print=False,
    quota_user="non",
    upload_type="eligendi",
    upload_protocol="sint",
)
    
res = s.projects.contactcenterinsights_projects_locations_conversations_analyses_create(req, operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `contactcenterinsights_projects_locations_conversations_analyses_create` - Creates an analysis. The long running operation is done when the analysis has completed.
* `contactcenterinsights_projects_locations_conversations_analyses_list` - Lists analyses.
* `contactcenterinsights_projects_locations_conversations_bulk_analyze` - Analyzes multiple conversations in a single request.
* `contactcenterinsights_projects_locations_conversations_calculate_stats` - Gets conversation statistics.
* `contactcenterinsights_projects_locations_conversations_create` - Creates a conversation.
* `contactcenterinsights_projects_locations_conversations_ingest` - Imports conversations and processes them according to the user's configuration.
* `contactcenterinsights_projects_locations_conversations_list` - Lists conversations.
* `contactcenterinsights_projects_locations_insightsdata_export` - Export insights data to a destination defined in the request body.
* `contactcenterinsights_projects_locations_issue_models_calculate_issue_model_stats` - Gets an issue model's statistics.
* `contactcenterinsights_projects_locations_issue_models_create` - Creates an issue model.
* `contactcenterinsights_projects_locations_issue_models_deploy` - Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
* `contactcenterinsights_projects_locations_issue_models_issues_list` - Lists issues.
* `contactcenterinsights_projects_locations_issue_models_list` - Lists issue models.
* `contactcenterinsights_projects_locations_issue_models_undeploy` - Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
* `contactcenterinsights_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `contactcenterinsights_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `contactcenterinsights_projects_locations_phrase_matchers_create` - Creates a phrase matcher.
* `contactcenterinsights_projects_locations_phrase_matchers_list` - Lists phrase matchers.
* `contactcenterinsights_projects_locations_views_create` - Creates a view.
* `contactcenterinsights_projects_locations_views_delete` - Deletes a view.
* `contactcenterinsights_projects_locations_views_get` - Gets a view.
* `contactcenterinsights_projects_locations_views_list` - Lists views.
* `contactcenterinsights_projects_locations_views_patch` - Updates a view.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
