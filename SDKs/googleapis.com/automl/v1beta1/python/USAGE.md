<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AutomlProjectsLocationsDatasetsCreateRequest(
    dollar_xgafv="2",
    dataset=shared.Dataset(
        create_time="provident",
        description="distinctio",
        display_name="quibusdam",
        etag="unde",
        example_count=857946,
        image_classification_dataset_metadata=shared.ImageClassificationDatasetMetadata(
            classification_type="MULTICLASS",
        ),
        image_object_detection_dataset_metadata={
            "vel": "error",
            "deserunt": "suscipit",
            "iure": "magnam",
            "debitis": "ipsa",
        },
        name="delectus",
        tables_dataset_metadata=shared.TablesDatasetMetadata(
            ml_use_column_spec_id="tempora",
            primary_table_spec_id="suscipit",
            stats_update_time="molestiae",
            target_column_correlations={
                "placeat": shared.CorrelationStats(
                    cramers_v=5288.95,
                ),
                "iusto": shared.CorrelationStats(
                    cramers_v=5680.45,
                ),
                "nisi": shared.CorrelationStats(
                    cramers_v=9255.97,
                ),
                "temporibus": shared.CorrelationStats(
                    cramers_v=710.36,
                ),
            },
            target_column_spec_id="quis",
            weight_column_spec_id="veritatis",
        ),
        text_classification_dataset_metadata=shared.TextClassificationDatasetMetadata(
            classification_type="MULTICLASS",
        ),
        text_extraction_dataset_metadata={
            "ipsam": "repellendus",
        },
        text_sentiment_dataset_metadata=shared.TextSentimentDatasetMetadata(
            sentiment_max=957156,
        ),
        translation_dataset_metadata=shared.TranslationDatasetMetadata(
            source_language_code="quo",
            target_language_code="odit",
        ),
        video_classification_dataset_metadata={
            "at": "maiores",
            "molestiae": "quod",
            "quod": "esse",
            "totam": "porro",
        },
        video_object_tracking_dataset_metadata={
            "dicta": "nam",
            "officia": "occaecati",
            "fugit": "deleniti",
        },
    ),
    access_token="hic",
    alt="proto",
    callback="totam",
    fields_="beatae",
    key="commodi",
    oauth_token="molestiae",
    parent="modi",
    pretty_print=False,
    quota_user="qui",
    upload_type="impedit",
    upload_protocol="cum",
)
    
res = s.projects.automl_projects_locations_datasets_create(req, operations.AutomlProjectsLocationsDatasetsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.dataset is not None:
    # handle response
```
<!-- End SDK Example Usage -->