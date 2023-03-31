# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/recommendationengine/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest(
    dollar_xgafv="2",
    google_cloud_recommendationengine_v1beta1_catalog_item=shared.GoogleCloudRecommendationengineV1beta1CatalogItem(
        category_hierarchies=[
            shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(
                categories=[
                    "quibusdam",
                    "unde",
                    "nulla",
                ],
            ),
            shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(
                categories=[
                    "illum",
                    "vel",
                    "error",
                ],
            ),
            shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(
                categories=[
                    "suscipit",
                    "iure",
                    "magnam",
                ],
            ),
        ],
        description="debitis",
        id="ipsa",
        item_attributes=shared.GoogleCloudRecommendationengineV1beta1FeatureMap(
            categorical_features={
                "tempora": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList(
                    value=[
                        "molestiae",
                        "minus",
                    ],
                ),
                "placeat": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList(
                    value=[
                        "iusto",
                        "excepturi",
                        "nisi",
                    ],
                ),
                "recusandae": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList(
                    value=[
                        "ab",
                        "quis",
                        "veritatis",
                        "deserunt",
                    ],
                ),
                "perferendis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList(
                    value=[
                        "repellendus",
                        "sapiente",
                    ],
                ),
            },
            numerical_features={
                "odit": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(
                    value=[
                        8700.88,
                        9786.19,
                        4736.08,
                        7991.59,
                    ],
                ),
                "quod": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(
                    value=[
                        5204.78,
                        7805.29,
                    ],
                ),
                "dolorum": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(
                    value=[
                        7206.33,
                    ],
                ),
                "officia": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(
                    value=[
                        1433.53,
                        5373.73,
                        9446.69,
                    ],
                ),
            },
        ),
        item_group_id="optio",
        language_code="totam",
        product_metadata=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem(
            available_quantity="beatae",
            canonical_product_uri="commodi",
            costs={
                "modi": 1863.32,
                "impedit": 7369.18,
            },
            currency_code="esse",
            exact_price=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice(
                display_price=2165.5,
                original_price=5684.34,
            ),
            images=[
                shared.GoogleCloudRecommendationengineV1beta1Image(
                    height=18789,
                    uri="http://perky-charset.name",
                    width=222321,
                ),
            ],
            price_range=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange(
                max=6169.34,
                min=3864.89,
            ),
            stock_state="BACKORDER",
        ),
        tags=[
            "fuga",
            "in",
            "corporis",
            "iste",
        ],
        title="Ms.",
    ),
    access_token="saepe",
    alt="proto",
    callback="architecto",
    fields_="ipsa",
    key="reiciendis",
    oauth_token="est",
    parent="mollitia",
    pretty_print=False,
    quota_user="laborum",
    upload_type="dolores",
    upload_protocol="dolorem",
)
    
res = s.projects.recommendationengine_projects_locations_catalogs_catalog_items_create(req, operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_recommendationengine_v1beta1_catalog_item is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `recommendationengine_projects_locations_catalogs_catalog_items_create` - Creates a catalog item.
* `recommendationengine_projects_locations_catalogs_catalog_items_import` - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* `recommendationengine_projects_locations_catalogs_catalog_items_list` - Gets a list of catalog items.
* `recommendationengine_projects_locations_catalogs_catalog_items_patch` - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* `recommendationengine_projects_locations_catalogs_event_stores_placements_predict` - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* `recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_create` - Register an API key for use with predict method.
* `recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete` - Unregister an apiKey from using for predict method.
* `recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_list` - List the registered apiKeys for use with predict method.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_collect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_import` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_list` - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_purge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_rejoin` - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_write` - Writes a single user event.
* `recommendationengine_projects_locations_catalogs_list` - Lists all the catalog configurations associated with the project.
* `recommendationengine_projects_locations_catalogs_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `recommendationengine_projects_locations_catalogs_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
