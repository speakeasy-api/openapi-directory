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