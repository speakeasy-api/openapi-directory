# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest(
    security=operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams(
        parent="enim",
    ),
    query_params=operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams(
        dollar_xgafv="1",
        access_token="voluptas",
        alt="json",
        callback="et",
        fields="id",
        key="dolorem",
        oauth_token="sit",
        pretty_print=True,
        quota_user="a",
        upload_type="nulla",
        upload_protocol="blanditiis",
    ),
    request=shared.GoogleCloudRecommendationengineV1beta1CatalogItem(
        category_hierarchies=[
            shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(
                categories=[
                    "corporis",
                    "recusandae",
                ],
            ),
        ],
        description="delectus",
        id="eos",
        item_attributes=shared.GoogleCloudRecommendationengineV1beta1FeatureMap(
            categorical_features={
                "culpa": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList(
                    value=[
                        "aut",
                        "consequatur",
                    ],
                ),
            },
            numerical_features={
                "odio": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(
                    value=[
                        34.200001,
                        40.200001,
                    ],
                ),
            },
        ),
        item_group_id="iste",
        language_code="et",
        product_metadata=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem(
            available_quantity="et",
            canonical_product_uri="laudantium",
            costs={
                "similique": 77.199997,
            },
            currency_code="incidunt",
            exact_price=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice(
                display_price=27.200001,
                original_price=64.099998,
            ),
            images=[
                shared.GoogleCloudRecommendationengineV1beta1Image(
                    height=8942292800023669852,
                    uri="autem",
                    width=5883357621257773236,
                ),
                shared.GoogleCloudRecommendationengineV1beta1Image(
                    height=478099075473941033,
                    uri="dolore",
                    width=7587515172654034190,
                ),
                shared.GoogleCloudRecommendationengineV1beta1Image(
                    height=8043303013086071262,
                    uri="ipsa",
                    width=1654514952870731982,
                ),
            ],
            price_range=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange(
                max=75.199997,
                min=32.099998,
            ),
            stock_state="IN_STOCK",
        ),
        tags=[
            "aut",
            "reprehenderit",
            "ea",
        ],
        title="dolorem",
    ),
)
    
res = s.projects.recommendationengine_projects_locations_catalogs_catalog_items_create(req)

if res.google_cloud_recommendationengine_v1beta1_catalog_item is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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
* `recommendationengine_projects_locations_catalogs_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
