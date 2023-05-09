# catalog

### Available Operations

* [addToCollection](#addtocollection) - Add items to catalog collections
* [createCollection](#createcollection) - Create catalog collections
* [deleteCollection](#deletecollection) - Delete catalog collections
* [deleteFromCollection](#deletefromcollection) - Remove items from catalog collection
* [getCollections](#getcollections) - List catalog collections
* [searchCatalog](#searchcatalog) - Search catalogs for assets
* [updateCollection](#updatecollection) - Update collection metadata

## addToCollection

This endpoint adds assets to a catalog collection. It also automatically adds the assets to the user's account's catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddToCollectionRequest;
import org.openapis.openapi.models.operations.AddToCollectionResponse;
import org.openapis.openapi.models.operations.AddToCollectionSecurity;
import org.openapis.openapi.models.shared.CreateCatalogCollectionItem;
import org.openapis.openapi.models.shared.CreateCatalogCollectionItemAsset;
import org.openapis.openapi.models.shared.CreateCatalogCollectionItems;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddToCollectionRequest req = new AddToCollectionRequest(                new CreateCatalogCollectionItems(                new org.openapis.openapi.models.shared.CreateCatalogCollectionItem[]{{
                                                add(new CreateCatalogCollectionItem(                new CreateCatalogCollectionItemAsset("pariatur") {{
                                                                    id = "028921cd-dc69-4260-9fb5-76b0d5f0d30c";
                                                                }};) {{
                                                    asset = new CreateCatalogCollectionItemAsset("saepe") {{
                                                        id = "59890afa-563e-4251-afe4-c8b711e5b7fd";
                                                        type = "sed";
                                                    }};
                                                }}),
                                                add(new CreateCatalogCollectionItem(                new CreateCatalogCollectionItemAsset("asperiores") {{
                                                                    id = "e49a8d9c-bf48-4633-b23f-9b77f3a41006";
                                                                }};) {{
                                                    asset = new CreateCatalogCollectionItemAsset("adipisci") {{
                                                        id = "5fbb2587-0532-402c-b3d5-fe9b90c28909";
                                                        type = "rerum";
                                                    }};
                                                }}),
                                                add(new CreateCatalogCollectionItem(                new CreateCatalogCollectionItemAsset("ad") {{
                                                                    id = "e6a95d8a-0d44-46ce-aaf7-a73cf3be453f";
                                                                }};) {{
                                                    asset = new CreateCatalogCollectionItemAsset("accusamus") {{
                                                        id = "74ebf692-80d1-4ba7-ba89-ebf737ae4203";
                                                        type = "optio";
                                                    }};
                                                }}),
                                            }});, "totam");            

            AddToCollectionResponse res = sdk.catalog.addToCollection(req, new AddToCollectionSecurity("nihil") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.catalogCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCollection

This endpoint creates a catalog collection and optionally adds assets. To add assets to the collection later, use `PATCH /v2/catalog/collections/{collection_id}/items`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCollectionResponse;
import org.openapis.openapi.models.operations.CreateCollectionSecurity;
import org.openapis.openapi.models.shared.CreateCatalogCollection;
import org.openapis.openapi.models.shared.CreateCatalogCollectionItem;
import org.openapis.openapi.models.shared.CreateCatalogCollectionItemAsset;
import org.openapis.openapi.models.shared.CreateCatalogCollectionVisibilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateCatalogCollection req = new CreateCatalogCollection("sit") {{
                items = new org.openapis.openapi.models.shared.CreateCatalogCollectionItem[]{{
                    add(new CreateCatalogCollectionItem(                new CreateCatalogCollectionItemAsset("nam") {{
                                        id = "f0cbb1e3-1b8b-490f-b443-a1108e0adcf4";
                                    }};) {{
                        asset = new CreateCatalogCollectionItemAsset("ullam") {{
                            id = "326b5a73-429c-4db1-a842-2bb679d23227";
                            type = "sunt";
                        }};
                    }}),
                    add(new CreateCatalogCollectionItem(                new CreateCatalogCollectionItemAsset("aut") {{
                                        id = "f5d2cff7-c70a-4456-a6d4-36813f16d9f5";
                                    }};) {{
                        asset = new CreateCatalogCollectionItemAsset("impedit") {{
                            id = "b921879f-ce95-43f7-bef7-fbc7abd74dd3";
                            type = "natus";
                        }};
                    }}),
                    add(new CreateCatalogCollectionItem(                new CreateCatalogCollectionItemAsset("eum") {{
                                        id = "6c8dd6b1-4429-4074-b477-8a7bd466d28c";
                                    }};) {{
                        asset = new CreateCatalogCollectionItemAsset("velit") {{
                            id = "fce6c556-146c-43e2-90fb-008c42e141aa";
                            type = "placeat";
                        }};
                    }}),
                }};
                visibility = CreateCatalogCollectionVisibilityEnum.PRIVATE_;
            }};            

            CreateCollectionResponse res = sdk.catalog.createCollection(req, new CreateCollectionSecurity("ipsa") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.catalogCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCollection

This endpoint deletes a catalog collection. It does not remove the assets from the user's account's catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCollectionRequest;
import org.openapis.openapi.models.operations.DeleteCollectionResponse;
import org.openapis.openapi.models.operations.DeleteCollectionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCollectionRequest req = new DeleteCollectionRequest("id");            

            DeleteCollectionResponse res = sdk.catalog.deleteCollection(req, new DeleteCollectionSecurity("quidem") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFromCollection

This endpoint removes assets from a catalog collection. It does not remove the assets from the user's account's catalog.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFromCollectionRequest;
import org.openapis.openapi.models.operations.DeleteFromCollectionResponse;
import org.openapis.openapi.models.operations.DeleteFromCollectionSecurity;
import org.openapis.openapi.models.shared.RemoveCatalogCollectionItem;
import org.openapis.openapi.models.shared.RemoveCatalogCollectionItems;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFromCollectionRequest req = new DeleteFromCollectionRequest(                new RemoveCatalogCollectionItems(                new org.openapis.openapi.models.shared.RemoveCatalogCollectionItem[]{{
                                                add(new RemoveCatalogCollectionItem("dolores") {{
                                                    id = "cdca4251-904e-4523-87e0-bc7178e4796f";
                                                }}),
                                            }});, "deserunt");            

            DeleteFromCollectionResponse res = sdk.catalog.deleteFromCollection(req, new DeleteFromCollectionSecurity("molestiae") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.catalogCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCollections

This endpoint returns a list of catalog collections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCollectionsRequest;
import org.openapis.openapi.models.operations.GetCollectionsResponse;
import org.openapis.openapi.models.operations.GetCollectionsSecurity;
import org.openapis.openapi.models.operations.GetCollectionsSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCollectionsRequest req = new GetCollectionsRequest() {{
                page = 35362L;
                perPage = 783648L;
                shared = false;
                sort = GetCollectionsSortEnum.NEWEST;
            }};            

            GetCollectionsResponse res = sdk.catalog.getCollections(req, new GetCollectionsSecurity("quas") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.catalogCollectionDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchCatalog

This endpoint searches for assets in the account's catalog. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCatalogAssetTypeEnum;
import org.openapis.openapi.models.operations.SearchCatalogRequest;
import org.openapis.openapi.models.operations.SearchCatalogResponse;
import org.openapis.openapi.models.operations.SearchCatalogSecurity;
import org.openapis.openapi.models.operations.SearchCatalogSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCatalogRequest req = new SearchCatalogRequest() {{
                assetType = new org.openapis.openapi.models.operations.SearchCatalogAssetTypeEnum[]{{
                    add(SearchCatalogAssetTypeEnum.IMAGE),
                    add(SearchCatalogAssetTypeEnum.ELEMENTS),
                    add(SearchCatalogAssetTypeEnum.IMAGE),
                }};
                collectionId = new String[]{{
                    add("mollitia"),
                    add("incidunt"),
                    add("atque"),
                }};
                page = 128860L;
                perPage = 325685L;
                query = "nisi";
                sort = SearchCatalogSortEnum.NEWEST;
            }};            

            SearchCatalogResponse res = sdk.catalog.searchCatalog(req, new SearchCatalogSecurity("sapiente") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.catalogCollectionItemDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCollection

This endpoint updates the metadata of a catalog collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCollectionRequest;
import org.openapis.openapi.models.operations.UpdateCollectionResponse;
import org.openapis.openapi.models.operations.UpdateCollectionSecurity;
import org.openapis.openapi.models.shared.UpdateCatalogCollection;
import org.openapis.openapi.models.shared.UpdateCatalogCollectionCoverAsset;
import org.openapis.openapi.models.shared.UpdateCatalogCollectionVisibilityEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCollectionRequest req = new UpdateCollectionRequest(                new UpdateCatalogCollection() {{
                                coverAsset = new UpdateCatalogCollectionCoverAsset("consequuntur");;
                                name = "Rose Turner";
                                visibility = UpdateCatalogCollectionVisibilityEnum.PRIVATE_;
                            }};, "esse");            

            UpdateCollectionResponse res = sdk.catalog.updateCollection(req, new UpdateCollectionSecurity("eveniet") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.catalogCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
