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