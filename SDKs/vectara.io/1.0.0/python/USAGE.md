<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        o_auth="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = operations.CreateCorpusRequest(
    admin_create_corpus_request=shared.AdminCreateCorpusRequest(
        corpus=shared.AdminCorpus(
            custom_dimensions=[
                shared.AdminDimension(
                    description="provident",
                    indexing_default=7151.9,
                    name="quibusdam",
                    serving_default=6027.63,
                ),
                shared.AdminDimension(
                    description="nulla",
                    indexing_default=5448.83,
                    name="illum",
                    serving_default=4236.55,
                ),
                shared.AdminDimension(
                    description="error",
                    indexing_default=6458.94,
                    name="suscipit",
                    serving_default=4375.87,
                ),
            ],
            description="magnam",
            dt_provision="debitis",
            enabled=False,
            encoder_id="ipsa",
            encrypted=False,
            filter_attributes=[
                shared.AdminFilterAttribute(
                    description="tempora",
                    indexed=False,
                    level="FILTER_ATTRIBUTE_LEVEL__DOCUMENT",
                    name="molestiae",
                    type="FILTER_ATTRIBUTE_TYPE__TEXT",
                ),
                shared.AdminFilterAttribute(
                    description="placeat",
                    indexed=False,
                    level="FILTER_ATTRIBUTE_LEVEL__DOCUMENT",
                    name="iusto",
                    type="FILTER_ATTRIBUTE_TYPE__REAL",
                ),
                shared.AdminFilterAttribute(
                    description="nisi",
                    indexed=False,
                    level="FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART",
                    name="temporibus",
                    type="FILTER_ATTRIBUTE_TYPE__UNDEFINED",
                ),
                shared.AdminFilterAttribute(
                    description="quis",
                    indexed=False,
                    level="FILTER_ATTRIBUTE_LEVEL__UNDEFINED",
                    name="deserunt",
                    type="FILTER_ATTRIBUTE_TYPE__UNDEFINED",
                ),
            ],
            id=368241,
            metadata_max_bytes=832620,
            name="sapiente",
            swap_ienc=False,
            swap_qenc=False,
            textless=False,
        ),
    ),
    customer_id=778157,
)
    
res = s.admin_service.create_corpus(req)

if res.admin_create_corpus_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->