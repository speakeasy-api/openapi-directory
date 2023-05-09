# Projects

### Available Operations

* [RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute](#retailprojectslocationscatalogsattributesconfigaddcatalogattribute) - Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
* [RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes](#retailprojectslocationscatalogsattributesconfigbatchremovecatalogattributes) - Removes all specified CatalogAttributes from the AttributesConfig.
* [RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute](#retailprojectslocationscatalogsattributesconfigremovecatalogattribute) - Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
* [RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute](#retailprojectslocationscatalogsattributesconfigreplacecatalogattribute) - Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
* [RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces](#retailprojectslocationscatalogsbranchesproductsaddfulfillmentplaces) - We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventories](#retailprojectslocationscatalogsbranchesproductsaddlocalinventories) - Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [RetailProjectsLocationsCatalogsBranchesProductsCreate](#retailprojectslocationscatalogsbranchesproductscreate) - Creates a Product.
* [RetailProjectsLocationsCatalogsBranchesProductsImport](#retailprojectslocationscatalogsbranchesproductsimport) - Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
* [RetailProjectsLocationsCatalogsBranchesProductsList](#retailprojectslocationscatalogsbranchesproductslist) - Gets a list of Products.
* [RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces](#retailprojectslocationscatalogsbranchesproductsremovefulfillmentplaces) - We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories](#retailprojectslocationscatalogsbranchesproductsremovelocalinventories) - Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [RetailProjectsLocationsCatalogsBranchesProductsSetInventory](#retailprojectslocationscatalogsbranchesproductssetinventory) - Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.
* [RetailProjectsLocationsCatalogsCompleteQuery](#retailprojectslocationscatalogscompletequery) - Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [RetailProjectsLocationsCatalogsCompletionDataImport](#retailprojectslocationscatalogscompletiondataimport) - Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [RetailProjectsLocationsCatalogsControlsCreate](#retailprojectslocationscatalogscontrolscreate) - Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
* [RetailProjectsLocationsCatalogsControlsList](#retailprojectslocationscatalogscontrolslist) - Lists all Controls by their parent Catalog.
* [RetailProjectsLocationsCatalogsGetDefaultBranch](#retailprojectslocationscatalogsgetdefaultbranch) - Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
* [RetailProjectsLocationsCatalogsList](#retailprojectslocationscatalogslist) - Lists all the Catalogs associated with the project.
* [RetailProjectsLocationsCatalogsModelsCreate](#retailprojectslocationscatalogsmodelscreate) - Creates a new model.
* [RetailProjectsLocationsCatalogsModelsList](#retailprojectslocationscatalogsmodelslist) - Lists all the models linked to this event store.
* [RetailProjectsLocationsCatalogsModelsPause](#retailprojectslocationscatalogsmodelspause) - Pauses the training of an existing model.
* [RetailProjectsLocationsCatalogsModelsResume](#retailprojectslocationscatalogsmodelsresume) - Resumes the training of an existing model.
* [RetailProjectsLocationsCatalogsModelsTune](#retailprojectslocationscatalogsmodelstune) - Tunes an existing model.
* [RetailProjectsLocationsCatalogsServingConfigsAddControl](#retailprojectslocationscatalogsservingconfigsaddcontrol) - Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
* [RetailProjectsLocationsCatalogsServingConfigsCreate](#retailprojectslocationscatalogsservingconfigscreate) - Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
* [RetailProjectsLocationsCatalogsServingConfigsDelete](#retailprojectslocationscatalogsservingconfigsdelete) - Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
* [RetailProjectsLocationsCatalogsServingConfigsList](#retailprojectslocationscatalogsservingconfigslist) - Lists all ServingConfigs linked to this catalog.
* [RetailProjectsLocationsCatalogsServingConfigsPatch](#retailprojectslocationscatalogsservingconfigspatch) - Updates a ServingConfig.
* [RetailProjectsLocationsCatalogsServingConfigsPredict](#retailprojectslocationscatalogsservingconfigspredict) - Makes a recommendation prediction.
* [RetailProjectsLocationsCatalogsServingConfigsRemoveControl](#retailprojectslocationscatalogsservingconfigsremovecontrol) - Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
* [RetailProjectsLocationsCatalogsServingConfigsSearch](#retailprojectslocationscatalogsservingconfigssearch) - Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [RetailProjectsLocationsCatalogsSetDefaultBranch](#retailprojectslocationscatalogssetdefaultbranch) - Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
* [RetailProjectsLocationsCatalogsUserEventsCollect](#retailprojectslocationscatalogsusereventscollect) - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* [RetailProjectsLocationsCatalogsUserEventsImport](#retailprojectslocationscatalogsusereventsimport) - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
* [RetailProjectsLocationsCatalogsUserEventsPurge](#retailprojectslocationscatalogsusereventspurge) - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* [RetailProjectsLocationsCatalogsUserEventsRejoin](#retailprojectslocationscatalogsusereventsrejoin) - Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
* [RetailProjectsLocationsCatalogsUserEventsWrite](#retailprojectslocationscatalogsusereventswrite) - Writes a single user event.
* [RetailProjectsOperationsGet](#retailprojectsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [RetailProjectsOperationsList](#retailprojectsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute

Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(ctx, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaAddCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2betaAddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2betaCatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnumExactSearchableDisabled.ToPointer(),
                IndexableOption: shared.GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnumIndexableDisabled.ToPointer(),
                Key: sdk.String("voluptatum"),
                RecommendationsFilteringOption: shared.GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringDisabled.ToPointer(),
                RetrievableOption: shared.GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnumRetrievableEnabled.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnumSearchableEnabled.ToPointer(),
            },
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumProto.ToPointer(),
        AttributesConfig: "ab",
        Callback: sdk.String("quis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("perferendis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsam"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("sapiente"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaAttributesConfig != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes

Removes all specified CatalogAttributes from the AttributesConfig.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes(ctx, operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest: &shared.GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest{
            AttributeKeys: []string{
                "at",
            },
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumProto.ToPointer(),
        AttributesConfig: "molestiae",
        Callback: sdk.String("quod"),
        Fields: sdk.String("quod"),
        Key: sdk.String("esse"),
        OauthToken: sdk.String("totam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute

Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute(ctx, operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaRemoveCatalogAttributeRequest: &shared.GoogleCloudRetailV2betaRemoveCatalogAttributeRequest{
            Key: sdk.String("officia"),
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AttributesConfig: "deleniti",
        Callback: sdk.String("hic"),
        Fields: sdk.String("optio"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("beatae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        UploadType: sdk.String("molestiae"),
        UploadProtocol: sdk.String("modi"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaAttributesConfig != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute

Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute(ctx, operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2betaCatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableDisabled.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnumExactSearchableDisabled.ToPointer(),
                IndexableOption: shared.GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnumIndexableEnabled.ToPointer(),
                Key: sdk.String("ipsum"),
                RecommendationsFilteringOption: shared.GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringDisabled.ToPointer(),
                RetrievableOption: shared.GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnumRetrievableOptionUnspecified.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnumSearchableOptionUnspecified.ToPointer(),
            },
            UpdateMask: sdk.String("ad"),
        },
        AccessToken: sdk.String("natus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AttributesConfig: "iste",
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("saepe"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("in"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaAttributesConfig != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces

We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaAddFulfillmentPlacesRequest: &shared.GoogleCloudRetailV2betaAddFulfillmentPlacesRequest{
            AddTime: sdk.String("iste"),
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "saepe",
                "quidem",
            },
            Type: sdk.String("architecto"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("est"),
        Fields: sdk.String("mollitia"),
        Key: sdk.String("laborum"),
        OauthToken: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        Product: "dolorem",
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("explicabo"),
        UploadProtocol: sdk.String("nobis"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlacesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventories

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventories(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaAddLocalInventoriesRequest: &shared.GoogleCloudRetailV2betaAddLocalInventoriesRequest{
            AddMask: sdk.String("omnis"),
            AddTime: sdk.String("nemo"),
            AllowMissing: sdk.Bool(false),
            LocalInventories: []shared.GoogleCloudRetailV2betaLocalInventory{
                shared.GoogleCloudRetailV2betaLocalInventory{
                    Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                        "accusantium": shared.GoogleCloudRetailV2betaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                6342.74,
                                9883.74,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "architecto",
                                "mollitia",
                                "dolorem",
                                "culpa",
                            },
                        },
                        "consequuntur": shared.GoogleCloudRetailV2betaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                6531.08,
                                5818.5,
                                2532.91,
                                4143.69,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "molestiae",
                                "velit",
                            },
                        },
                        "error": shared.GoogleCloudRetailV2betaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                3380.07,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "laborum",
                            },
                        },
                    },
                    FulfillmentTypes: []string{
                        "enim",
                        "odit",
                        "quo",
                    },
                    PlaceID: sdk.String("sequi"),
                    PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                        Cost: sdk.Float32(9495.72),
                        CurrencyCode: sdk.String("ipsam"),
                        OriginalPrice: sdk.Float32(6625.27),
                        Price: sdk.Float32(8209.94),
                        PriceEffectiveTime: sdk.String("aut"),
                        PriceExpireTime: sdk.String("quasi"),
                        PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                            OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(6228.46),
                                ExclusiveMinimum: sdk.Float64(8379.45),
                                Maximum: sdk.Float64(6736.6),
                                Minimum: sdk.Float64(960.98),
                            },
                            Price: &shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(9719.45),
                                ExclusiveMinimum: sdk.Float64(9764.6),
                                Maximum: sdk.Float64(8781.94),
                                Minimum: sdk.Float64(4686.51),
                            },
                        },
                    },
                },
                shared.GoogleCloudRetailV2betaLocalInventory{
                    Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                        "voluptatibus": shared.GoogleCloudRetailV2betaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                6048.46,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "cum",
                                "perferendis",
                            },
                        },
                        "doloremque": shared.GoogleCloudRetailV2betaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                2828.07,
                                9795.87,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "corporis",
                            },
                        },
                        "dolore": shared.GoogleCloudRetailV2betaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                1187.27,
                                6886.61,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "accusamus",
                                "commodi",
                            },
                        },
                    },
                    FulfillmentTypes: []string{
                        "quae",
                        "ipsum",
                        "quidem",
                        "molestias",
                    },
                    PlaceID: sdk.String("excepturi"),
                    PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                        Cost: sdk.Float32(8651.03),
                        CurrencyCode: sdk.String("modi"),
                        OriginalPrice: sdk.Float32(5089.69),
                        Price: sdk.Float32(5232.48),
                        PriceEffectiveTime: sdk.String("voluptates"),
                        PriceExpireTime: sdk.String("quasi"),
                        PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                            OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(9211.58),
                                ExclusiveMinimum: sdk.Float64(5759.47),
                                Maximum: sdk.Float64(831.12),
                                Minimum: sdk.Float64(9292.97),
                            },
                            Price: &shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(2777.18),
                                ExclusiveMinimum: sdk.Float64(3185.69),
                                Maximum: sdk.Float64(93.56),
                                Minimum: sdk.Float64(6674.11),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        Product: "modi",
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventoriesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsCreate

Creates a Product.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsCreate(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaProductInput: &shared.GoogleCloudRetailV2betaProductInput{
            Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                "magni": shared.GoogleCloudRetailV2betaCustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        3698.08,
                        46.95,
                        1464.41,
                        6778.17,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "tempora",
                        "facilis",
                        "tempore",
                    },
                },
            },
            Audience: &shared.GoogleCloudRetailV2betaAudience{
                AgeGroups: []string{
                    "delectus",
                    "eum",
                },
                Genders: []string{
                    "eligendi",
                },
            },
            Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumOutOfStock.ToPointer(),
            AvailableQuantity: sdk.Int(396098),
            AvailableTime: sdk.String("provident"),
            Brands: []string{
                "sint",
                "officia",
                "dolor",
                "debitis",
            },
            Categories: []string{
                "dolorum",
                "in",
                "in",
                "illum",
            },
            CollectionMemberIds: []string{
                "rerum",
                "dicta",
                "magnam",
                "cumque",
            },
            ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                ColorFamilies: []string{
                    "ea",
                    "aliquid",
                    "laborum",
                    "accusamus",
                },
                Colors: []string{
                    "occaecati",
                },
            },
            Conditions: []string{
                "accusamus",
                "delectus",
            },
            Description: sdk.String("quidem"),
            ExpireTime: sdk.String("provident"),
            FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                    PlaceIds: []string{
                        "blanditiis",
                        "deleniti",
                        "sapiente",
                    },
                    Type: sdk.String("amet"),
                },
                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                    PlaceIds: []string{
                        "nisi",
                        "vel",
                        "natus",
                    },
                    Type: sdk.String("omnis"),
                },
                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                    PlaceIds: []string{
                        "perferendis",
                        "nihil",
                    },
                    Type: sdk.String("magnam"),
                },
            },
            Gtin: sdk.String("distinctio"),
            ID: sdk.String("a4469b6e-2141-4959-890a-fa563e2516fe"),
            Images: []shared.GoogleCloudRetailV2betaImage{
                shared.GoogleCloudRetailV2betaImage{
                    Height: sdk.Int(806194),
                    URI: sdk.String("https://rotating-identification.com"),
                    Width: sdk.Int(99569),
                },
                shared.GoogleCloudRetailV2betaImage{
                    Height: sdk.Int(919483),
                    URI: sdk.String("http://safe-interconnection.org"),
                    Width: sdk.Int(841140),
                },
            },
            LanguageCode: sdk.String("sed"),
            Materials: []string{
                "pariatur",
                "accusantium",
                "consequuntur",
                "praesentium",
            },
            Name: sdk.String("Victor Casper"),
            Patterns: []string{
                "maxime",
                "ea",
                "excepturi",
                "odit",
            },
            PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                Cost: sdk.Float32(4071.83),
                CurrencyCode: sdk.String("accusantium"),
                OriginalPrice: sdk.Float32(691.67),
                Price: sdk.Float32(9825.75),
                PriceEffectiveTime: sdk.String("quidem"),
                PriceExpireTime: sdk.String("ipsam"),
                PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                    OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                        ExclusiveMaximum: sdk.Float64(4535.43),
                        ExclusiveMinimum: sdk.Float64(4200.75),
                        Maximum: sdk.Float64(7220.56),
                        Minimum: sdk.Float64(505.88),
                    },
                    Price: &shared.GoogleCloudRetailV2betaInterval{
                        ExclusiveMaximum: sdk.Float64(8663.83),
                        ExclusiveMinimum: sdk.Float64(3654.96),
                        Maximum: sdk.Float64(9755.22),
                        Minimum: sdk.Float64(166.27),
                    },
                },
            },
            PrimaryProductID: sdk.String("fugiat"),
            Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                shared.GoogleCloudRetailV2betaPromotion{
                    PromotionID: sdk.String("aut"),
                },
            },
            PublishTime: sdk.String("cumque"),
            Rating: &shared.GoogleCloudRetailV2betaRating{
                AverageRating: sdk.Float32(3599.78),
                RatingCount: sdk.Int(944124),
                RatingHistogram: []int{
                    749999,
                    171629,
                    339404,
                },
            },
            RetrievableFields: sdk.String("totam"),
            Sizes: []string{
                "eaque",
                "quis",
            },
            Tags: []string{
                "eos",
            },
            Title: sdk.String("Mr."),
            TTL: sdk.String("dolores"),
            Type: shared.GoogleCloudRetailV2betaProductTypeEnumCollection.ToPointer(),
            URI: sdk.String("http://educated-surprise.info"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("facilis"),
        Key: sdk.String("perspiciatis"),
        OauthToken: sdk.String("voluptatem"),
        Parent: "porro",
        PrettyPrint: sdk.Bool(false),
        ProductID: sdk.String("consequuntur"),
        QuotaUser: sdk.String("blanditiis"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("eaque"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaProduct != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsImport

Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsImport(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaImportProductsRequestInput: &shared.GoogleCloudRetailV2betaImportProductsRequestInput{
            ErrorsConfig: &shared.GoogleCloudRetailV2betaImportErrorsConfig{
                GcsPrefix: sdk.String("rerum"),
            },
            InputConfig: &shared.GoogleCloudRetailV2betaProductInputConfigInput{
                BigQuerySource: &shared.GoogleCloudRetailV2betaBigQuerySource{
                    DataSchema: sdk.String("adipisci"),
                    DatasetID: sdk.String("asperiores"),
                    GcsStagingDir: sdk.String("earum"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(267262),
                        Month: sdk.Int(613966),
                        Year: sdk.Int(679091),
                    },
                    ProjectID: sdk.String("deleniti"),
                    TableID: sdk.String("pariatur"),
                },
                GcsSource: &shared.GoogleCloudRetailV2betaGcsSource{
                    DataSchema: sdk.String("provident"),
                    InputUris: []string{
                        "libero",
                        "delectus",
                        "quaerat",
                        "quos",
                    },
                },
                ProductInlineSource: &shared.GoogleCloudRetailV2betaProductInlineSourceInput{
                    Products: []shared.GoogleCloudRetailV2betaProductInput{
                        shared.GoogleCloudRetailV2betaProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                                "dolorem": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1861.93,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "hic",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2betaAudience{
                                AgeGroups: []string{
                                    "cum",
                                    "voluptate",
                                    "dignissimos",
                                },
                                Genders: []string{
                                    "amet",
                                    "dolorum",
                                    "numquam",
                                    "veritatis",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                            AvailableQuantity: sdk.Int(56418),
                            AvailableTime: sdk.String("iure"),
                            Brands: []string{
                                "quaerat",
                                "accusamus",
                            },
                            Categories: []string{
                                "voluptatibus",
                                "voluptas",
                                "natus",
                            },
                            CollectionMemberIds: []string{
                                "atque",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                                ColorFamilies: []string{
                                    "fugiat",
                                },
                                Colors: []string{
                                    "soluta",
                                },
                            },
                            Conditions: []string{
                                "iusto",
                                "voluptate",
                                "dolorum",
                            },
                            Description: sdk.String("deleniti"),
                            ExpireTime: sdk.String("omnis"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "asperiores",
                                        "nihil",
                                        "ipsum",
                                    },
                                    Type: sdk.String("voluptate"),
                                },
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "saepe",
                                        "eius",
                                        "aspernatur",
                                    },
                                    Type: sdk.String("perferendis"),
                                },
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "optio",
                                    },
                                    Type: sdk.String("accusamus"),
                                },
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "saepe",
                                        "suscipit",
                                    },
                                    Type: sdk.String("deserunt"),
                                },
                            },
                            Gtin: sdk.String("provident"),
                            ID: sdk.String("5d8a0d44-6ce2-4af7-a73c-f3be453f870b"),
                            Images: []shared.GoogleCloudRetailV2betaImage{
                                shared.GoogleCloudRetailV2betaImage{
                                    Height: sdk.Int(153694),
                                    URI: sdk.String("http://self-assured-gale.name"),
                                    Width: sdk.Int(463575),
                                },
                            },
                            LanguageCode: sdk.String("ipsum"),
                            Materials: []string{
                                "qui",
                                "cupiditate",
                            },
                            Name: sdk.String("Miss Jody Rogahn"),
                            Patterns: []string{
                                "aspernatur",
                                "dolores",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                                Cost: sdk.Float32(7168.6),
                                CurrencyCode: sdk.String("facilis"),
                                OriginalPrice: sdk.Float32(3960.6),
                                Price: sdk.Float32(4631.5),
                                PriceEffectiveTime: sdk.String("molestias"),
                                PriceExpireTime: sdk.String("temporibus"),
                                PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                        ExclusiveMaximum: sdk.Float64(1832.8),
                                        ExclusiveMinimum: sdk.Float64(2048.65),
                                        Maximum: sdk.Float64(1448.47),
                                        Minimum: sdk.Float64(1649.59),
                                    },
                                    Price: &shared.GoogleCloudRetailV2betaInterval{
                                        ExclusiveMaximum: sdk.Float64(4880.56),
                                        ExclusiveMinimum: sdk.Float64(1248.33),
                                        Maximum: sdk.Float64(3556.13),
                                        Minimum: sdk.Float64(7220.81),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("hic"),
                            Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                                shared.GoogleCloudRetailV2betaPromotion{
                                    PromotionID: sdk.String("cumque"),
                                },
                            },
                            PublishTime: sdk.String("soluta"),
                            Rating: &shared.GoogleCloudRetailV2betaRating{
                                AverageRating: sdk.Float32(7486.64),
                                RatingCount: sdk.Int(92596),
                                RatingHistogram: []int{
                                    217450,
                                    83422,
                                    749255,
                                    552193,
                                },
                            },
                            RetrievableFields: sdk.String("tempore"),
                            Sizes: []string{
                                "aperiam",
                                "delectus",
                                "dolorem",
                            },
                            Tags: []string{
                                "labore",
                                "adipisci",
                            },
                            Title: sdk.String("Miss"),
                            TTL: sdk.String("architecto"),
                            Type: shared.GoogleCloudRetailV2betaProductTypeEnumTypeUnspecified.ToPointer(),
                            URI: sdk.String("http://narrow-tritone.com"),
                        },
                        shared.GoogleCloudRetailV2betaProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                                "repellendus": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        9843.3,
                                        2817.3,
                                        7034.95,
                                        5864.1,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "quae",
                                    },
                                },
                                "laudantium": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        5804.47,
                                        9774.96,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "vero",
                                        "omnis",
                                        "quis",
                                        "ipsum",
                                    },
                                },
                                "delectus": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        2317.01,
                                        8788.7,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "dignissimos",
                                        "hic",
                                        "distinctio",
                                        "quod",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2betaAudience{
                                AgeGroups: []string{
                                    "similique",
                                    "facilis",
                                },
                                Genders: []string{
                                    "ducimus",
                                    "dolore",
                                    "quibusdam",
                                    "illum",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                            AvailableQuantity: sdk.Int(617877),
                            AvailableTime: sdk.String("impedit"),
                            Brands: []string{
                                "voluptatibus",
                            },
                            Categories: []string{
                                "nulla",
                                "fugit",
                            },
                            CollectionMemberIds: []string{
                                "maiores",
                                "doloribus",
                                "iusto",
                                "eligendi",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                                ColorFamilies: []string{
                                    "alias",
                                    "officia",
                                },
                                Colors: []string{
                                    "ipsam",
                                    "ea",
                                },
                            },
                            Conditions: []string{
                                "vel",
                            },
                            Description: sdk.String("possimus"),
                            ExpireTime: sdk.String("magnam"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "laudantium",
                                        "dicta",
                                    },
                                    Type: sdk.String("dolor"),
                                },
                            },
                            Gtin: sdk.String("maiores"),
                            ID: sdk.String("16d9f5fc-e6c5-4561-86c3-e250fb008c42"),
                            Images: []shared.GoogleCloudRetailV2betaImage{
                                shared.GoogleCloudRetailV2betaImage{
                                    Height: sdk.Int(79522),
                                    URI: sdk.String("http://breakable-pomegranate.net"),
                                    Width: sdk.Int(810424),
                                },
                                shared.GoogleCloudRetailV2betaImage{
                                    Height: sdk.Int(245367),
                                    URI: sdk.String("http://important-ring.name"),
                                    Width: sdk.Int(829603),
                                },
                                shared.GoogleCloudRetailV2betaImage{
                                    Height: sdk.Int(860552),
                                    URI: sdk.String("http://scrawny-booty.biz"),
                                    Width: sdk.Int(256139),
                                },
                                shared.GoogleCloudRetailV2betaImage{
                                    Height: sdk.Int(131482),
                                    URI: sdk.String("https://aware-jackal.biz"),
                                    Width: sdk.Int(487935),
                                },
                            },
                            LanguageCode: sdk.String("eius"),
                            Materials: []string{
                                "esse",
                                "rem",
                            },
                            Name: sdk.String("Mitchell Predovic"),
                            Patterns: []string{
                                "suscipit",
                                "assumenda",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                                Cost: sdk.Float32(1811.51),
                                CurrencyCode: sdk.String("praesentium"),
                                OriginalPrice: sdk.Float32(7885.46),
                                Price: sdk.Float32(863.77),
                                PriceEffectiveTime: sdk.String("ipsa"),
                                PriceExpireTime: sdk.String("id"),
                                PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                        ExclusiveMaximum: sdk.Float64(6969.97),
                                        ExclusiveMinimum: sdk.Float64(2065.94),
                                        Maximum: sdk.Float64(7786.96),
                                        Minimum: sdk.Float64(8472.76),
                                    },
                                    Price: &shared.GoogleCloudRetailV2betaInterval{
                                        ExclusiveMaximum: sdk.Float64(7774.08),
                                        ExclusiveMinimum: sdk.Float64(6813.59),
                                        Maximum: sdk.Float64(2594.22),
                                        Minimum: sdk.Float64(1783.67),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("voluptas"),
                            Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                                shared.GoogleCloudRetailV2betaPromotion{
                                    PromotionID: sdk.String("cupiditate"),
                                },
                            },
                            PublishTime: sdk.String("consequatur"),
                            Rating: &shared.GoogleCloudRetailV2betaRating{
                                AverageRating: sdk.Float32(2728.22),
                                RatingCount: sdk.Int(892050),
                                RatingHistogram: []int{
                                    133465,
                                    197054,
                                },
                            },
                            RetrievableFields: sdk.String("quo"),
                            Sizes: []string{
                                "recusandae",
                                "aperiam",
                            },
                            Tags: []string{
                                "quod",
                                "dignissimos",
                                "inventore",
                            },
                            Title: sdk.String("Ms."),
                            TTL: sdk.String("totam"),
                            Type: shared.GoogleCloudRetailV2betaProductTypeEnumCollection.ToPointer(),
                            URI: sdk.String("http://likely-mortality.info"),
                        },
                    },
                },
            },
            NotificationPubsubTopic: sdk.String("sapiente"),
            ReconciliationMode: shared.GoogleCloudRetailV2betaImportProductsRequestReconciliationModeEnumReconciliationModeUnspecified.ToPointer(),
            RequestID: sdk.String("deserunt"),
            UpdateMask: sdk.String("molestiae"),
        },
        AccessToken: sdk.String("accusantium"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("quas"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("consequuntur"),
        Parent: "deleniti",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugit"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("mollitia"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsList

Gets a list of Products.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsList(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("minima"),
        Fields: sdk.String("nisi"),
        Filter: sdk.String("fugit"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("consequuntur"),
        PageSize: sdk.Int64(187131),
        PageToken: sdk.String("explicabo"),
        Parent: "saepe",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        ReadMask: sdk.String("atque"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("esse"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaListProductsResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces

We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest: &shared.GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest{
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "veritatis",
                "esse",
                "quod",
                "nam",
            },
            RemoveTime: sdk.String("vero"),
            Type: sdk.String("aliquid"),
        },
        AccessToken: sdk.String("quasi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("harum"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("rerum"),
        PrettyPrint: sdk.Bool(false),
        Product: "occaecati",
        QuotaUser: sdk.String("minima"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("eligendi"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlacesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories

Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaRemoveLocalInventoriesRequest: &shared.GoogleCloudRetailV2betaRemoveLocalInventoriesRequest{
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "tempore",
                "adipisci",
                "cumque",
            },
            RemoveTime: sdk.String("consequuntur"),
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("sapiente"),
        Key: sdk.String("consectetur"),
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        Product: "blanditiis",
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("a"),
        UploadProtocol: sdk.String("nulla"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventoriesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsSetInventory

Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsSetInventory(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventoryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaSetInventoryRequestInput: &shared.GoogleCloudRetailV2betaSetInventoryRequestInput{
            AllowMissing: sdk.Bool(false),
            Inventory: &shared.GoogleCloudRetailV2betaProductInput{
                Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                    "quasi": shared.GoogleCloudRetailV2betaCustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            6216.79,
                            5757.51,
                            8630.23,
                            8207.67,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "eveniet",
                        },
                    },
                    "asperiores": shared.GoogleCloudRetailV2betaCustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            850.01,
                            1594.14,
                            944.58,
                            6288.99,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "aliquid",
                            "tenetur",
                            "quae",
                        },
                    },
                },
                Audience: &shared.GoogleCloudRetailV2betaAudience{
                    AgeGroups: []string{
                        "vel",
                        "in",
                        "eius",
                        "libero",
                    },
                    Genders: []string{
                        "soluta",
                        "accusantium",
                        "aliquam",
                        "sapiente",
                    },
                },
                Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                AvailableQuantity: sdk.Int(355369),
                AvailableTime: sdk.String("reprehenderit"),
                Brands: []string{
                    "nisi",
                    "aut",
                },
                Categories: []string{
                    "qui",
                    "quibusdam",
                    "ex",
                },
                CollectionMemberIds: []string{
                    "itaque",
                    "dolorum",
                    "architecto",
                },
                ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                    ColorFamilies: []string{
                        "tenetur",
                        "quasi",
                        "at",
                    },
                    Colors: []string{
                        "voluptate",
                    },
                },
                Conditions: []string{
                    "minima",
                },
                Description: sdk.String("veritatis"),
                ExpireTime: sdk.String("consectetur"),
                FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                    shared.GoogleCloudRetailV2betaFulfillmentInfo{
                        PlaceIds: []string{
                            "temporibus",
                            "accusantium",
                            "rem",
                        },
                        Type: sdk.String("aut"),
                    },
                },
                Gtin: sdk.String("laudantium"),
                ID: sdk.String("6a184039-4c26-4071-b93f-5f0642dac7af"),
                Images: []shared.GoogleCloudRetailV2betaImage{
                    shared.GoogleCloudRetailV2betaImage{
                        Height: sdk.Int(65304),
                        URI: sdk.String("http://spanish-show-stopper.biz"),
                        Width: sdk.Int(70447),
                    },
                    shared.GoogleCloudRetailV2betaImage{
                        Height: sdk.Int(241418),
                        URI: sdk.String("https://pushy-gender.biz"),
                        Width: sdk.Int(633931),
                    },
                },
                LanguageCode: sdk.String("est"),
                Materials: []string{
                    "totam",
                    "fugiat",
                    "vel",
                    "ducimus",
                },
                Name: sdk.String("Cecil Grant"),
                Patterns: []string{
                    "commodi",
                    "in",
                    "corporis",
                },
                PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                    Cost: sdk.Float32(9689.04),
                    CurrencyCode: sdk.String("assumenda"),
                    OriginalPrice: sdk.Float32(3631.61),
                    Price: sdk.Float32(9249.67),
                    PriceEffectiveTime: sdk.String("aliquid"),
                    PriceExpireTime: sdk.String("aperiam"),
                    PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                        OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                            ExclusiveMaximum: sdk.Float64(7386.83),
                            ExclusiveMinimum: sdk.Float64(2326.27),
                            Maximum: sdk.Float64(4490.83),
                            Minimum: sdk.Float64(3485.19),
                        },
                        Price: &shared.GoogleCloudRetailV2betaInterval{
                            ExclusiveMaximum: sdk.Float64(9372.85),
                            ExclusiveMinimum: sdk.Float64(8149.67),
                            Maximum: sdk.Float64(2572.33),
                            Minimum: sdk.Float64(9854.92),
                        },
                    },
                },
                PrimaryProductID: sdk.String("suscipit"),
                Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                    shared.GoogleCloudRetailV2betaPromotion{
                        PromotionID: sdk.String("quidem"),
                    },
                    shared.GoogleCloudRetailV2betaPromotion{
                        PromotionID: sdk.String("saepe"),
                    },
                    shared.GoogleCloudRetailV2betaPromotion{
                        PromotionID: sdk.String("necessitatibus"),
                    },
                    shared.GoogleCloudRetailV2betaPromotion{
                        PromotionID: sdk.String("dolore"),
                    },
                },
                PublishTime: sdk.String("sunt"),
                Rating: &shared.GoogleCloudRetailV2betaRating{
                    AverageRating: sdk.Float32(9920.12),
                    RatingCount: sdk.Int(241545),
                    RatingHistogram: []int{
                        228263,
                    },
                },
                RetrievableFields: sdk.String("beatae"),
                Sizes: []string{
                    "a",
                    "debitis",
                },
                Tags: []string{
                    "corporis",
                },
                Title: sdk.String("Miss"),
                TTL: sdk.String("laboriosam"),
                Type: shared.GoogleCloudRetailV2betaProductTypeEnumTypeUnspecified.ToPointer(),
                URI: sdk.String("https://self-assured-bull.org"),
            },
            SetMask: sdk.String("similique"),
            SetTime: sdk.String("tempora"),
        },
        AccessToken: sdk.String("aspernatur"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("voluptas"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("minima"),
        Name: "Wilbur Ferry",
        OauthToken: sdk.String("blanditiis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("in"),
        UploadType: sdk.String("dolore"),
        UploadProtocol: sdk.String("aliquam"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsSetInventorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsCompleteQuery

Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsCompleteQuery(ctx, operations.RetailProjectsLocationsCatalogsCompleteQueryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("temporibus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Catalog: "cum",
        Dataset: sdk.String("blanditiis"),
        DeviceType: sdk.String("quas"),
        Entity: sdk.String("hic"),
        Fields: sdk.String("nesciunt"),
        Key: sdk.String("culpa"),
        LanguageCodes: []string{
            "pariatur",
            "totam",
            "hic",
        },
        MaxSuggestions: sdk.Int64(348783),
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("sit"),
        QuotaUser: sdk.String("rerum"),
        UploadType: sdk.String("sed"),
        UploadProtocol: sdk.String("reiciendis"),
        VisitorID: sdk.String("explicabo"),
    }, operations.RetailProjectsLocationsCatalogsCompleteQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaCompleteQueryResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsCompletionDataImport

Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsCompletionDataImport(ctx, operations.RetailProjectsLocationsCatalogsCompletionDataImportRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaImportCompletionDataRequest: &shared.GoogleCloudRetailV2betaImportCompletionDataRequest{
            InputConfig: &shared.GoogleCloudRetailV2betaCompletionDataInputConfig{
                BigQuerySource: &shared.GoogleCloudRetailV2betaBigQuerySource{
                    DataSchema: sdk.String("facilis"),
                    DatasetID: sdk.String("voluptate"),
                    GcsStagingDir: sdk.String("expedita"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(70869),
                        Month: sdk.Int(611749),
                        Year: sdk.Int(292794),
                    },
                    ProjectID: sdk.String("laborum"),
                    TableID: sdk.String("sed"),
                },
            },
            NotificationPubsubTopic: sdk.String("in"),
        },
        AccessToken: sdk.String("commodi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("explicabo"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("unde"),
        OauthToken: sdk.String("architecto"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sapiente"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("illo"),
    }, operations.RetailProjectsLocationsCatalogsCompletionDataImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsControlsCreate

Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsControlsCreate(ctx, operations.RetailProjectsLocationsCatalogsControlsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaControlInput: &shared.GoogleCloudRetailV2betaControlInput{
            DisplayName: sdk.String("perferendis"),
            FacetSpec: &shared.GoogleCloudRetailV2betaSearchRequestFacetSpec{
                EnableDynamicPosition: sdk.Bool(false),
                ExcludedFilterKeys: []string{
                    "maiores",
                    "incidunt",
                    "sed",
                },
                FacetKey: &shared.GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey{
                    CaseInsensitive: sdk.Bool(false),
                    Contains: []string{
                        "eius",
                        "necessitatibus",
                        "ipsum",
                    },
                    Intervals: []shared.GoogleCloudRetailV2betaInterval{
                        shared.GoogleCloudRetailV2betaInterval{
                            ExclusiveMaximum: sdk.Float64(5799.12),
                            ExclusiveMinimum: sdk.Float64(5520.78),
                            Maximum: sdk.Float64(9757.52),
                            Minimum: sdk.Float64(2716.53),
                        },
                        shared.GoogleCloudRetailV2betaInterval{
                            ExclusiveMaximum: sdk.Float64(2730.09),
                            ExclusiveMinimum: sdk.Float64(4554.44),
                            Maximum: sdk.Float64(9700.76),
                            Minimum: sdk.Float64(4017.13),
                        },
                    },
                    Key: sdk.String("sit"),
                    OrderBy: sdk.String("non"),
                    Prefixes: []string{
                        "praesentium",
                        "facilis",
                        "quaerat",
                        "incidunt",
                    },
                    Query: sdk.String("ipsam"),
                    RestrictedValues: []string{
                        "rem",
                        "sit",
                        "nobis",
                        "error",
                    },
                    ReturnMinMax: sdk.Bool(false),
                },
                Limit: sdk.Int(333507),
            },
            Name: sdk.String("Sophie Wisoky"),
            Rule: &shared.GoogleCloudRetailV2betaRule{
                BoostAction: &shared.GoogleCloudRetailV2betaRuleBoostAction{
                    Boost: sdk.Float32(486.9),
                    ProductsFilter: sdk.String("saepe"),
                },
                Condition: &shared.GoogleCloudRetailV2betaCondition{
                    ActiveTimeRange: []shared.GoogleCloudRetailV2betaConditionTimeRange{
                        shared.GoogleCloudRetailV2betaConditionTimeRange{
                            EndTime: sdk.String("veniam"),
                            StartTime: sdk.String("in"),
                        },
                        shared.GoogleCloudRetailV2betaConditionTimeRange{
                            EndTime: sdk.String("officiis"),
                            StartTime: sdk.String("beatae"),
                        },
                    },
                    QueryTerms: []shared.GoogleCloudRetailV2betaConditionQueryTerm{
                        shared.GoogleCloudRetailV2betaConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("exercitationem"),
                        },
                        shared.GoogleCloudRetailV2betaConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("praesentium"),
                        },
                        shared.GoogleCloudRetailV2betaConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("cum"),
                        },
                    },
                },
                DoNotAssociateAction: &shared.GoogleCloudRetailV2betaRuleDoNotAssociateAction{
                    DoNotAssociateTerms: []string{
                        "dolorum",
                        "voluptatum",
                    },
                    QueryTerms: []string{
                        "hic",
                        "expedita",
                        "debitis",
                    },
                    Terms: []string{
                        "dolorum",
                    },
                },
                FilterAction: &shared.GoogleCloudRetailV2betaRuleFilterAction{
                    Filter: sdk.String("nostrum"),
                },
                IgnoreAction: &shared.GoogleCloudRetailV2betaRuleIgnoreAction{
                    IgnoreTerms: []string{
                        "dolorum",
                        "corrupti",
                        "accusamus",
                    },
                },
                OnewaySynonymsAction: &shared.GoogleCloudRetailV2betaRuleOnewaySynonymsAction{
                    OnewayTerms: []string{
                        "atque",
                        "fugit",
                    },
                    QueryTerms: []string{
                        "fugiat",
                        "voluptatem",
                    },
                    Synonyms: []string{
                        "expedita",
                        "magnam",
                        "consequatur",
                    },
                },
                RedirectAction: &shared.GoogleCloudRetailV2betaRuleRedirectAction{
                    RedirectURI: sdk.String("esse"),
                },
                ReplacementAction: &shared.GoogleCloudRetailV2betaRuleReplacementAction{
                    QueryTerms: []string{
                        "sit",
                        "voluptatum",
                    },
                    ReplacementTerm: sdk.String("quas"),
                    Term: sdk.String("repudiandae"),
                },
                TwowaySynonymsAction: &shared.GoogleCloudRetailV2betaRuleTwowaySynonymsAction{
                    Synonyms: []string{
                        "et",
                        "blanditiis",
                    },
                },
            },
            SearchSolutionUseCase: []shared.GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnum{
                shared.GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified,
                shared.GoogleCloudRetailV2betaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified,
            },
            SolutionTypes: []shared.GoogleCloudRetailV2betaControlSolutionTypesEnum{
                shared.GoogleCloudRetailV2betaControlSolutionTypesEnumSolutionTypeRecommendation,
                shared.GoogleCloudRetailV2betaControlSolutionTypesEnumSolutionTypeSearch,
            },
        },
        AccessToken: sdk.String("error"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("incidunt"),
        ControlID: sdk.String("reiciendis"),
        Fields: sdk.String("dolorem"),
        Key: sdk.String("harum"),
        OauthToken: sdk.String("dicta"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("labore"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.RetailProjectsLocationsCatalogsControlsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaControl != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsControlsList

Lists all Controls by their parent Catalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsControlsList(ctx, operations.RetailProjectsLocationsCatalogsControlsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("laboriosam"),
        Filter: sdk.String("alias"),
        Key: sdk.String("amet"),
        OauthToken: sdk.String("deserunt"),
        PageSize: sdk.Int64(454860),
        PageToken: sdk.String("unde"),
        Parent: "reiciendis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("provident"),
        UploadType: sdk.String("repellendus"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.RetailProjectsLocationsCatalogsControlsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaListControlsResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsGetDefaultBranch

Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsGetDefaultBranch(ctx, operations.RetailProjectsLocationsCatalogsGetDefaultBranchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("perferendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quidem"),
        Catalog: "reprehenderit",
        Fields: sdk.String("facere"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("praesentium"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("veniam"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.RetailProjectsLocationsCatalogsGetDefaultBranchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaGetDefaultBranchResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsList

Lists all the Catalogs associated with the project.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsList(ctx, operations.RetailProjectsLocationsCatalogsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("reprehenderit"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("totam"),
        PageSize: sdk.Int64(383103),
        PageToken: sdk.String("quidem"),
        Parent: "maxime",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("et"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("amet"),
    }, operations.RetailProjectsLocationsCatalogsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaListCatalogsResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsModelsCreate

Creates a new model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsModelsCreate(ctx, operations.RetailProjectsLocationsCatalogsModelsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaModelInput: &shared.GoogleCloudRetailV2betaModelInput{
            DisplayName: sdk.String("ea"),
            FilteringOption: shared.GoogleCloudRetailV2betaModelFilteringOptionEnumRecommendationsFilteringDisabled.ToPointer(),
            ModelFeaturesConfig: &shared.GoogleCloudRetailV2betaModelModelFeaturesConfig{
                FrequentlyBoughtTogetherConfig: &shared.GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfig{
                    ContextProductsType: shared.GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnumSingleContextProduct.ToPointer(),
                },
            },
            Name: sdk.String("Frankie Thompson"),
            OptimizationObjective: sdk.String("aspernatur"),
            PeriodicTuningState: shared.GoogleCloudRetailV2betaModelPeriodicTuningStateEnumPeriodicTuningDisabled.ToPointer(),
            TrainingState: shared.GoogleCloudRetailV2betaModelTrainingStateEnumTraining.ToPointer(),
            Type: sdk.String("corrupti"),
        },
        AccessToken: sdk.String("at"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("blanditiis"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("repudiandae"),
        OauthToken: sdk.String("atque"),
        Parent: "atque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sunt"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("dolorum"),
    }, operations.RetailProjectsLocationsCatalogsModelsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsModelsList

Lists all the models linked to this event store.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsModelsList(ctx, operations.RetailProjectsLocationsCatalogsModelsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("doloremque"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("accusantium"),
        PageSize: sdk.Int64(106429),
        PageToken: sdk.String("dolores"),
        Parent: "enim",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laboriosam"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("a"),
    }, operations.RetailProjectsLocationsCatalogsModelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaListModelsResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsModelsPause

Pauses the training of an existing model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsModelsPause(ctx, operations.RetailProjectsLocationsCatalogsModelsPauseRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "saepe": "consequuntur",
            "occaecati": "officiis",
        },
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("occaecati"),
        Name: "Beverly Olson",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        UploadType: sdk.String("corporis"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.RetailProjectsLocationsCatalogsModelsPauseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaModel != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsModelsResume

Resumes the training of an existing model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsModelsResume(ctx, operations.RetailProjectsLocationsCatalogsModelsResumeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "vero": "doloremque",
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("quae"),
        Key: sdk.String("molestiae"),
        Name: "Clarence Ritchie",
        OauthToken: sdk.String("ratione"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("distinctio"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.RetailProjectsLocationsCatalogsModelsResumeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaModel != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsModelsTune

Tunes an existing model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsModelsTune(ctx, operations.RetailProjectsLocationsCatalogsModelsTuneRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RequestBody: map[string]interface{}{
            "ad": "repellat",
            "alias": "corporis",
        },
        AccessToken: sdk.String("perspiciatis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("alias"),
        Name: "Dominick Daniel",
        OauthToken: sdk.String("dolore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        UploadType: sdk.String("nesciunt"),
        UploadProtocol: sdk.String("quae"),
    }, operations.RetailProjectsLocationsCatalogsModelsTuneSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsServingConfigsAddControl

Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsServingConfigsAddControl(ctx, operations.RetailProjectsLocationsCatalogsServingConfigsAddControlRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaAddControlRequest: &shared.GoogleCloudRetailV2betaAddControlRequest{
            ControlID: sdk.String("omnis"),
        },
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("ex"),
        Fields: sdk.String("ut"),
        Key: sdk.String("culpa"),
        OauthToken: sdk.String("adipisci"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        ServingConfig: "laudantium",
        UploadType: sdk.String("eum"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaServingConfig != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsServingConfigsCreate

Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsServingConfigsCreate(ctx, operations.RetailProjectsLocationsCatalogsServingConfigsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaServingConfig: &shared.GoogleCloudRetailV2betaServingConfig{
            BoostControlIds: []string{
                "provident",
                "quis",
            },
            DisplayName: sdk.String("eum"),
            DiversityLevel: sdk.String("reiciendis"),
            DiversityType: shared.GoogleCloudRetailV2betaServingConfigDiversityTypeEnumRuleBasedDiversity.ToPointer(),
            DoNotAssociateControlIds: []string{
                "ullam",
            },
            DynamicFacetSpec: &shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnumModeUnspecified.ToPointer(),
            },
            EnableCategoryFilterLevel: sdk.String("animi"),
            FacetControlIds: []string{
                "mollitia",
                "provident",
            },
            FilterControlIds: []string{
                "animi",
                "ex",
                "aliquid",
                "accusantium",
            },
            IgnoreControlIds: []string{
                "doloribus",
                "ullam",
                "in",
                "nam",
            },
            ModelID: sdk.String("earum"),
            Name: sdk.String("Neal Schulist"),
            OnewaySynonymsControlIds: []string{
                "officiis",
                "sapiente",
                "cumque",
            },
            PersonalizationSpec: &shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnumModeUnspecified.ToPointer(),
            },
            PriceRerankingLevel: sdk.String("rerum"),
            RedirectControlIds: []string{
                "quis",
                "inventore",
            },
            ReplacementControlIds: []string{
                "cumque",
            },
            SolutionTypes: []shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnum{
                shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnumSolutionTypeUnspecified,
            },
            TwowaySynonymsControlIds: []string{
                "aspernatur",
            },
        },
        AccessToken: sdk.String("eum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("at"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("eos"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eum"),
        ServingConfigID: sdk.String("dicta"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaServingConfig != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsServingConfigsDelete

Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsServingConfigsDelete(ctx, operations.RetailProjectsLocationsCatalogsServingConfigsDeleteRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        Fields: sdk.String("hic"),
        Key: sdk.String("illum"),
        Name: "Sonja Metz",
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("porro"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsDeleteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsServingConfigsList

Lists all ServingConfigs linked to this catalog.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsServingConfigsList(ctx, operations.RetailProjectsLocationsCatalogsServingConfigsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("cumque"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ratione"),
        Fields: sdk.String("animi"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("nulla"),
        PageSize: sdk.Int64(8931),
        PageToken: sdk.String("quasi"),
        Parent: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("natus"),
        UploadProtocol: sdk.String("occaecati"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaListServingConfigsResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsServingConfigsPatch

Updates a ServingConfig.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsServingConfigsPatch(ctx, operations.RetailProjectsLocationsCatalogsServingConfigsPatchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaServingConfig: &shared.GoogleCloudRetailV2betaServingConfig{
            BoostControlIds: []string{
                "quasi",
            },
            DisplayName: sdk.String("magni"),
            DiversityLevel: sdk.String("doloribus"),
            DiversityType: shared.GoogleCloudRetailV2betaServingConfigDiversityTypeEnumDataDrivenDiversity.ToPointer(),
            DoNotAssociateControlIds: []string{
                "ipsa",
                "tempora",
                "nihil",
                "molestiae",
            },
            DynamicFacetSpec: &shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnumModeUnspecified.ToPointer(),
            },
            EnableCategoryFilterLevel: sdk.String("iusto"),
            FacetControlIds: []string{
                "praesentium",
                "maiores",
            },
            FilterControlIds: []string{
                "vel",
                "architecto",
                "fugiat",
                "doloremque",
            },
            IgnoreControlIds: []string{
                "odio",
            },
            ModelID: sdk.String("tempora"),
            Name: sdk.String("Carla Feil MD"),
            OnewaySynonymsControlIds: []string{
                "nostrum",
            },
            PersonalizationSpec: &shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnumDisabled.ToPointer(),
            },
            PriceRerankingLevel: sdk.String("expedita"),
            RedirectControlIds: []string{
                "officia",
                "suscipit",
            },
            ReplacementControlIds: []string{
                "perferendis",
                "eum",
            },
            SolutionTypes: []shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnum{
                shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnumSolutionTypeRecommendation,
                shared.GoogleCloudRetailV2betaServingConfigSolutionTypesEnumSolutionTypeRecommendation,
            },
            TwowaySynonymsControlIds: []string{
                "error",
            },
        },
        AccessToken: sdk.String("possimus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("mollitia"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("libero"),
        Name: "Dr. Cassandra Halvorson",
        OauthToken: sdk.String("quo"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ex"),
        UpdateMask: sdk.String("ut"),
        UploadType: sdk.String("ad"),
        UploadProtocol: sdk.String("expedita"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaServingConfig != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsServingConfigsPredict

Makes a recommendation prediction.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsServingConfigsPredict(ctx, operations.RetailProjectsLocationsCatalogsServingConfigsPredictRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaPredictRequestInput: &shared.GoogleCloudRetailV2betaPredictRequestInput{
            Filter: sdk.String("molestias"),
            Labels: map[string]string{
                "aliquid": "beatae",
                "voluptatum": "omnis",
                "veritatis": "rerum",
            },
            PageSize: sdk.Int(665678),
            PageToken: sdk.String("culpa"),
            Params: map[string]interface{}{
                "sapiente": "officiis",
            },
            UserEvent: &shared.GoogleCloudRetailV2betaUserEventInput{
                Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                    "fuga": shared.GoogleCloudRetailV2betaCustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            8913.15,
                            291.9,
                            12.07,
                            5349.17,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "ex",
                            "sapiente",
                            "rem",
                            "minus",
                        },
                    },
                },
                AttributionToken: sdk.String("nemo"),
                CartID: sdk.String("asperiores"),
                CompletionDetail: &shared.GoogleCloudRetailV2betaCompletionDetail{
                    CompletionAttributionToken: sdk.String("ratione"),
                    SelectedPosition: sdk.Int(355225),
                    SelectedSuggestion: sdk.String("perferendis"),
                },
                Entity: sdk.String("illum"),
                EventTime: sdk.String("totam"),
                EventType: sdk.String("impedit"),
                ExperimentIds: []string{
                    "nam",
                    "ipsam",
                    "culpa",
                    "dolor",
                },
                Filter: sdk.String("aliquam"),
                Offset: sdk.Int(80532),
                OrderBy: sdk.String("deleniti"),
                PageCategories: []string{
                    "tempora",
                },
                PageViewID: sdk.String("dolor"),
                ProductDetails: []shared.GoogleCloudRetailV2betaProductDetailInput{
                    shared.GoogleCloudRetailV2betaProductDetailInput{
                        Product: &shared.GoogleCloudRetailV2betaProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                                "sit": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1442.86,
                                        661.49,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "quae",
                                        "dolor",
                                        "fugiat",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2betaAudience{
                                AgeGroups: []string{
                                    "consequuntur",
                                    "ipsa",
                                },
                                Genders: []string{
                                    "eveniet",
                                    "impedit",
                                    "officiis",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumOutOfStock.ToPointer(),
                            AvailableQuantity: sdk.Int(897277),
                            AvailableTime: sdk.String("sed"),
                            Brands: []string{
                                "nesciunt",
                                "expedita",
                            },
                            Categories: []string{
                                "vel",
                                "voluptatum",
                            },
                            CollectionMemberIds: []string{
                                "exercitationem",
                                "ab",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                                ColorFamilies: []string{
                                    "autem",
                                    "nobis",
                                    "laboriosam",
                                    "recusandae",
                                },
                                Colors: []string{
                                    "voluptatem",
                                },
                            },
                            Conditions: []string{
                                "necessitatibus",
                                "quasi",
                            },
                            Description: sdk.String("nisi"),
                            ExpireTime: sdk.String("at"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "harum",
                                        "sequi",
                                        "doloribus",
                                    },
                                    Type: sdk.String("repudiandae"),
                                },
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "occaecati",
                                        "nemo",
                                        "voluptate",
                                        "blanditiis",
                                    },
                                    Type: sdk.String("officia"),
                                },
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "numquam",
                                        "nemo",
                                    },
                                    Type: sdk.String("quos"),
                                },
                                shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "aspernatur",
                                        "ducimus",
                                    },
                                    Type: sdk.String("nesciunt"),
                                },
                            },
                            Gtin: sdk.String("fuga"),
                            ID: sdk.String("8418d162-309f-4b09-a992-1aefb9f58c4d"),
                            Images: []shared.GoogleCloudRetailV2betaImage{
                                shared.GoogleCloudRetailV2betaImage{
                                    Height: sdk.Int(415280),
                                    URI: sdk.String("https://impassioned-local.org"),
                                    Width: sdk.Int(267207),
                                },
                                shared.GoogleCloudRetailV2betaImage{
                                    Height: sdk.Int(722184),
                                    URI: sdk.String("https://ancient-funding.info"),
                                    Width: sdk.Int(1383),
                                },
                                shared.GoogleCloudRetailV2betaImage{
                                    Height: sdk.Int(93894),
                                    URI: sdk.String("http://wonderful-evaluator.name"),
                                    Width: sdk.Int(858778),
                                },
                            },
                            LanguageCode: sdk.String("deserunt"),
                            Materials: []string{
                                "nemo",
                                "reprehenderit",
                            },
                            Name: sdk.String("Alvin Marquardt"),
                            Patterns: []string{
                                "necessitatibus",
                                "asperiores",
                                "ex",
                                "voluptas",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                                Cost: sdk.Float32(8953.46),
                                CurrencyCode: sdk.String("delectus"),
                                OriginalPrice: sdk.Float32(650.82),
                                Price: sdk.Float32(7918.8),
                                PriceEffectiveTime: sdk.String("fuga"),
                                PriceExpireTime: sdk.String("laborum"),
                                PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                        ExclusiveMaximum: sdk.Float64(2310.7),
                                        ExclusiveMinimum: sdk.Float64(2448.89),
                                        Maximum: sdk.Float64(5388.69),
                                        Minimum: sdk.Float64(2164.57),
                                    },
                                    Price: &shared.GoogleCloudRetailV2betaInterval{
                                        ExclusiveMaximum: sdk.Float64(7730.35),
                                        ExclusiveMinimum: sdk.Float64(1660.47),
                                        Maximum: sdk.Float64(7465.85),
                                        Minimum: sdk.Float64(9227.57),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("nam"),
                            Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                                shared.GoogleCloudRetailV2betaPromotion{
                                    PromotionID: sdk.String("iusto"),
                                },
                                shared.GoogleCloudRetailV2betaPromotion{
                                    PromotionID: sdk.String("voluptate"),
                                },
                            },
                            PublishTime: sdk.String("sequi"),
                            Rating: &shared.GoogleCloudRetailV2betaRating{
                                AverageRating: sdk.Float32(4939.58),
                                RatingCount: sdk.Int(205566),
                                RatingHistogram: []int{
                                    535468,
                                    844235,
                                    437814,
                                    139072,
                                },
                            },
                            RetrievableFields: sdk.String("voluptatibus"),
                            Sizes: []string{
                                "magnam",
                                "quibusdam",
                            },
                            Tags: []string{
                                "facere",
                            },
                            Title: sdk.String("Miss"),
                            TTL: sdk.String("architecto"),
                            Type: shared.GoogleCloudRetailV2betaProductTypeEnumCollection.ToPointer(),
                            URI: sdk.String("http://sour-emergency.biz"),
                        },
                        Quantity: sdk.Int(75359),
                    },
                },
                PurchaseTransaction: &shared.GoogleCloudRetailV2betaPurchaseTransaction{
                    Cost: sdk.Float32(365.61),
                    CurrencyCode: sdk.String("vel"),
                    ID: sdk.String("61e96349-e1cf-49e0-ae3a-437000ae6b6b"),
                    Revenue: sdk.Float32(8093.65),
                    Tax: sdk.Float32(5960.65),
                },
                ReferrerURI: sdk.String("expedita"),
                SearchQuery: sdk.String("deleniti"),
                SessionID: sdk.String("a"),
                URI: sdk.String("http://grim-noun.org"),
                UserInfo: &shared.GoogleCloudRetailV2betaUserInfo{
                    DirectUserRequest: sdk.Bool(false),
                    IPAddress: sdk.String("animi"),
                    UserAgent: sdk.String("impedit"),
                    UserID: sdk.String("ipsam"),
                },
                VisitorID: sdk.String("corporis"),
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("est"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("esse"),
        Fields: sdk.String("labore"),
        Key: sdk.String("veritatis"),
        OauthToken: sdk.String("vero"),
        Placement: "consectetur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vitae"),
        UploadType: sdk.String("inventore"),
        UploadProtocol: sdk.String("dolorem"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsPredictSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaPredictResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsServingConfigsRemoveControl

Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsServingConfigsRemoveControl(ctx, operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaRemoveControlRequest: &shared.GoogleCloudRetailV2betaRemoveControlRequest{
            ControlID: sdk.String("qui"),
        },
        AccessToken: sdk.String("iste"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nemo"),
        Fields: sdk.String("soluta"),
        Key: sdk.String("libero"),
        OauthToken: sdk.String("rem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolorum"),
        ServingConfig: "odio",
        UploadType: sdk.String("fugit"),
        UploadProtocol: sdk.String("alias"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaServingConfig != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsServingConfigsSearch

Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsServingConfigsSearch(ctx, operations.RetailProjectsLocationsCatalogsServingConfigsSearchRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaSearchRequest: &shared.GoogleCloudRetailV2betaSearchRequest{
            BoostSpec: &shared.GoogleCloudRetailV2betaSearchRequestBoostSpec{
                ConditionBoostSpecs: []shared.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec{
                    shared.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec{
                        Boost: sdk.Float32(644.35),
                        Condition: sdk.String("quae"),
                    },
                    shared.GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec{
                        Boost: sdk.Float32(2643.33),
                        Condition: sdk.String("neque"),
                    },
                },
                SkipBoostSpecValidation: sdk.Bool(false),
            },
            Branch: sdk.String("exercitationem"),
            CanonicalFilter: sdk.String("itaque"),
            DynamicFacetSpec: &shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnumModeUnspecified.ToPointer(),
            },
            Entity: sdk.String("ipsum"),
            FacetSpecs: []shared.GoogleCloudRetailV2betaSearchRequestFacetSpec{
                shared.GoogleCloudRetailV2betaSearchRequestFacetSpec{
                    EnableDynamicPosition: sdk.Bool(false),
                    ExcludedFilterKeys: []string{
                        "distinctio",
                        "maxime",
                        "quia",
                        "quia",
                    },
                    FacetKey: &shared.GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey{
                        CaseInsensitive: sdk.Bool(false),
                        Contains: []string{
                            "omnis",
                            "libero",
                        },
                        Intervals: []shared.GoogleCloudRetailV2betaInterval{
                            shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(6633.18),
                                ExclusiveMinimum: sdk.Float64(7278.88),
                                Maximum: sdk.Float64(8544.6),
                                Minimum: sdk.Float64(6374.62),
                            },
                        },
                        Key: sdk.String("quos"),
                        OrderBy: sdk.String("placeat"),
                        Prefixes: []string{
                            "iusto",
                        },
                        Query: sdk.String("ipsa"),
                        RestrictedValues: []string{
                            "inventore",
                            "aperiam",
                            "totam",
                            "dolore",
                        },
                        ReturnMinMax: sdk.Bool(false),
                    },
                    Limit: sdk.Int(755106),
                },
                shared.GoogleCloudRetailV2betaSearchRequestFacetSpec{
                    EnableDynamicPosition: sdk.Bool(false),
                    ExcludedFilterKeys: []string{
                        "voluptatem",
                        "autem",
                        "esse",
                    },
                    FacetKey: &shared.GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey{
                        CaseInsensitive: sdk.Bool(false),
                        Contains: []string{
                            "assumenda",
                        },
                        Intervals: []shared.GoogleCloudRetailV2betaInterval{
                            shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(6686.06),
                                ExclusiveMinimum: sdk.Float64(8173.39),
                                Maximum: sdk.Float64(5459.18),
                                Minimum: sdk.Float64(4731.43),
                            },
                        },
                        Key: sdk.String("provident"),
                        OrderBy: sdk.String("accusamus"),
                        Prefixes: []string{
                            "tempore",
                            "sint",
                            "ea",
                            "autem",
                        },
                        Query: sdk.String("ipsam"),
                        RestrictedValues: []string{
                            "laudantium",
                            "corporis",
                            "officiis",
                        },
                        ReturnMinMax: sdk.Bool(false),
                    },
                    Limit: sdk.Int(972912),
                },
                shared.GoogleCloudRetailV2betaSearchRequestFacetSpec{
                    EnableDynamicPosition: sdk.Bool(false),
                    ExcludedFilterKeys: []string{
                        "at",
                        "alias",
                        "quia",
                    },
                    FacetKey: &shared.GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey{
                        CaseInsensitive: sdk.Bool(false),
                        Contains: []string{
                            "fuga",
                            "repudiandae",
                            "accusantium",
                        },
                        Intervals: []shared.GoogleCloudRetailV2betaInterval{
                            shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(8852.08),
                                ExclusiveMinimum: sdk.Float64(1770.05),
                                Maximum: sdk.Float64(8448.54),
                                Minimum: sdk.Float64(4835.18),
                            },
                            shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(5101.28),
                                ExclusiveMinimum: sdk.Float64(1403.16),
                                Maximum: sdk.Float64(1276.88),
                                Minimum: sdk.Float64(3589.95),
                            },
                            shared.GoogleCloudRetailV2betaInterval{
                                ExclusiveMaximum: sdk.Float64(6214.73),
                                ExclusiveMinimum: sdk.Float64(9371.17),
                                Maximum: sdk.Float64(2393.37),
                                Minimum: sdk.Float64(9233.06),
                            },
                        },
                        Key: sdk.String("similique"),
                        OrderBy: sdk.String("ut"),
                        Prefixes: []string{
                            "quis",
                            "beatae",
                            "unde",
                        },
                        Query: sdk.String("molestiae"),
                        RestrictedValues: []string{
                            "cupiditate",
                            "fugit",
                            "numquam",
                            "numquam",
                        },
                        ReturnMinMax: sdk.Bool(false),
                    },
                    Limit: sdk.Int(201010),
                },
            },
            Filter: sdk.String("at"),
            Labels: map[string]string{
                "dignissimos": "optio",
                "necessitatibus": "corporis",
                "qui": "expedita",
            },
            Offset: sdk.Int(532669),
            OrderBy: sdk.String("cupiditate"),
            PageCategories: []string{
                "placeat",
                "enim",
            },
            PageSize: sdk.Int(204072),
            PageToken: sdk.String("in"),
            PersonalizationSpec: &shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnumDisabled.ToPointer(),
            },
            Query: sdk.String("eum"),
            QueryExpansionSpec: &shared.GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec{
                Condition: shared.GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnumConditionUnspecified.ToPointer(),
                PinUnexpandedResults: sdk.Bool(false),
            },
            SearchMode: shared.GoogleCloudRetailV2betaSearchRequestSearchModeEnumProductSearchOnly.ToPointer(),
            SpellCorrectionSpec: &shared.GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec{
                Mode: shared.GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnumModeUnspecified.ToPointer(),
            },
            UserInfo: &shared.GoogleCloudRetailV2betaUserInfo{
                DirectUserRequest: sdk.Bool(false),
                IPAddress: sdk.String("voluptates"),
                UserAgent: sdk.String("maiores"),
                UserID: sdk.String("tempore"),
            },
            VariantRollupKeys: []string{
                "libero",
            },
            VisitorID: sdk.String("ratione"),
        },
        AccessToken: sdk.String("labore"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("occaecati"),
        Fields: sdk.String("voluptas"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("velit"),
        Placement: "minus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("nostrum"),
        UploadProtocol: sdk.String("est"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaSearchResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsSetDefaultBranch

Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsSetDefaultBranch(ctx, operations.RetailProjectsLocationsCatalogsSetDefaultBranchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaSetDefaultBranchRequest: &shared.GoogleCloudRetailV2betaSetDefaultBranchRequest{
            BranchID: sdk.String("delectus"),
            Force: sdk.Bool(false),
            Note: sdk.String("tempore"),
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("repellat"),
        Catalog: "pariatur",
        Fields: sdk.String("nemo"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("aperiam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("odio"),
        UploadType: sdk.String("minima"),
        UploadProtocol: sdk.String("in"),
    }, operations.RetailProjectsLocationsCatalogsSetDefaultBranchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleProtobufEmpty != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsUserEventsCollect

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsUserEventsCollect(ctx, operations.RetailProjectsLocationsCatalogsUserEventsCollectRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("error"),
        Ets: sdk.String("veritatis"),
        Fields: sdk.String("ducimus"),
        Key: sdk.String("voluptate"),
        OauthToken: sdk.String("pariatur"),
        Parent: "itaque",
        PrebuiltRule: sdk.String("similique"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("optio"),
        RawJSON: sdk.String("ex"),
        UploadType: sdk.String("quaerat"),
        UploadProtocol: sdk.String("commodi"),
        URI: sdk.String("https://striped-program.info"),
        UserEvent: sdk.String("quam"),
    }, operations.RetailProjectsLocationsCatalogsUserEventsCollectSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsUserEventsImport

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsUserEventsImport(ctx, operations.RetailProjectsLocationsCatalogsUserEventsImportRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaImportUserEventsRequestInput: &shared.GoogleCloudRetailV2betaImportUserEventsRequestInput{
            ErrorsConfig: &shared.GoogleCloudRetailV2betaImportErrorsConfig{
                GcsPrefix: sdk.String("modi"),
            },
            InputConfig: &shared.GoogleCloudRetailV2betaUserEventInputConfigInput{
                BigQuerySource: &shared.GoogleCloudRetailV2betaBigQuerySource{
                    DataSchema: sdk.String("ipsa"),
                    DatasetID: sdk.String("sint"),
                    GcsStagingDir: sdk.String("vero"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(194901),
                        Month: sdk.Int(918547),
                        Year: sdk.Int(741232),
                    },
                    ProjectID: sdk.String("dicta"),
                    TableID: sdk.String("earum"),
                },
                GcsSource: &shared.GoogleCloudRetailV2betaGcsSource{
                    DataSchema: sdk.String("veniam"),
                    InputUris: []string{
                        "dolores",
                        "nam",
                        "dicta",
                    },
                },
                UserEventInlineSource: &shared.GoogleCloudRetailV2betaUserEventInlineSourceInput{
                    UserEvents: []shared.GoogleCloudRetailV2betaUserEventInput{
                        shared.GoogleCloudRetailV2betaUserEventInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                                "nobis": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        4973.57,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "veritatis",
                                        "quasi",
                                        "laboriosam",
                                        "pariatur",
                                    },
                                },
                                "libero": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        5782.1,
                                        3679.17,
                                        3063.82,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "doloribus",
                                        "eligendi",
                                    },
                                },
                                "sint": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        9449.5,
                                        6573.19,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "totam",
                                        "molestias",
                                        "odio",
                                    },
                                },
                                "eaque": shared.GoogleCloudRetailV2betaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1040.78,
                                        5546.45,
                                        6144.38,
                                        8268.62,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "libero",
                                        "velit",
                                        "doloremque",
                                    },
                                },
                            },
                            AttributionToken: sdk.String("delectus"),
                            CartID: sdk.String("impedit"),
                            CompletionDetail: &shared.GoogleCloudRetailV2betaCompletionDetail{
                                CompletionAttributionToken: sdk.String("cum"),
                                SelectedPosition: sdk.Int(216870),
                                SelectedSuggestion: sdk.String("adipisci"),
                            },
                            Entity: sdk.String("saepe"),
                            EventTime: sdk.String("deserunt"),
                            EventType: sdk.String("doloremque"),
                            ExperimentIds: []string{
                                "veniam",
                                "libero",
                            },
                            Filter: sdk.String("architecto"),
                            Offset: sdk.Int(584593),
                            OrderBy: sdk.String("molestiae"),
                            PageCategories: []string{
                                "possimus",
                                "non",
                                "magnam",
                                "itaque",
                            },
                            PageViewID: sdk.String("sed"),
                            ProductDetails: []shared.GoogleCloudRetailV2betaProductDetailInput{
                                shared.GoogleCloudRetailV2betaProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2betaProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                                            "consequuntur": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    5129.05,
                                                    1403.84,
                                                    8634.77,
                                                    2273.62,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "ab",
                                                    "velit",
                                                },
                                            },
                                            "facilis": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    3952.33,
                                                    9775.18,
                                                    3108.4,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "distinctio",
                                                    "nisi",
                                                    "quis",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2betaAudience{
                                            AgeGroups: []string{
                                                "libero",
                                                "minus",
                                            },
                                            Genders: []string{
                                                "facilis",
                                                "ipsum",
                                                "ad",
                                                "voluptatibus",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumBackorder.ToPointer(),
                                        AvailableQuantity: sdk.Int(162358),
                                        AvailableTime: sdk.String("debitis"),
                                        Brands: []string{
                                            "rerum",
                                            "eos",
                                        },
                                        Categories: []string{
                                            "nostrum",
                                            "neque",
                                        },
                                        CollectionMemberIds: []string{
                                            "est",
                                            "rem",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                                            ColorFamilies: []string{
                                                "fugiat",
                                                "unde",
                                                "officiis",
                                                "ducimus",
                                            },
                                            Colors: []string{
                                                "dicta",
                                            },
                                        },
                                        Conditions: []string{
                                            "porro",
                                            "vitae",
                                            "dignissimos",
                                        },
                                        Description: sdk.String("esse"),
                                        ExpireTime: sdk.String("fugiat"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "enim",
                                                },
                                                Type: sdk.String("delectus"),
                                            },
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "dignissimos",
                                                    "libero",
                                                },
                                                Type: sdk.String("illo"),
                                            },
                                        },
                                        Gtin: sdk.String("ab"),
                                        ID: sdk.String("4eeb52ff-785f-4c37-814d-4c98e0c2bb89"),
                                        Images: []shared.GoogleCloudRetailV2betaImage{
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(700045),
                                                URI: sdk.String("http://gruesome-surge.name"),
                                                Width: sdk.Int(833982),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(434827),
                                                URI: sdk.String("http://immediate-savings.info"),
                                                Width: sdk.Int(12171),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(32055),
                                                URI: sdk.String("http://baggy-cultivar.org"),
                                                Width: sdk.Int(506863),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(695526),
                                                URI: sdk.String("https://embarrassed-botany.com"),
                                                Width: sdk.Int(514922),
                                            },
                                        },
                                        LanguageCode: sdk.String("doloremque"),
                                        Materials: []string{
                                            "iusto",
                                            "amet",
                                            "provident",
                                            "dolorum",
                                        },
                                        Name: sdk.String("Mrs. Terrence Waelchi"),
                                        Patterns: []string{
                                            "facilis",
                                            "corrupti",
                                            "aperiam",
                                            "sint",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                                            Cost: sdk.Float32(8795.22),
                                            CurrencyCode: sdk.String("eos"),
                                            OriginalPrice: sdk.Float32(5200.81),
                                            Price: sdk.Float32(1158.61),
                                            PriceEffectiveTime: sdk.String("voluptatem"),
                                            PriceExpireTime: sdk.String("velit"),
                                            PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                                    ExclusiveMaximum: sdk.Float64(2244.13),
                                                    ExclusiveMinimum: sdk.Float64(1242.89),
                                                    Maximum: sdk.Float64(9536.76),
                                                    Minimum: sdk.Float64(2232.91),
                                                },
                                                Price: &shared.GoogleCloudRetailV2betaInterval{
                                                    ExclusiveMaximum: sdk.Float64(5823.2),
                                                    ExclusiveMinimum: sdk.Float64(5398.13),
                                                    Maximum: sdk.Float64(1074.72),
                                                    Minimum: sdk.Float64(8682.55),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("labore"),
                                        Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("esse"),
                                            },
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("voluptatem"),
                                            },
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("perferendis"),
                                            },
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("rerum"),
                                            },
                                        },
                                        PublishTime: sdk.String("ea"),
                                        Rating: &shared.GoogleCloudRetailV2betaRating{
                                            AverageRating: sdk.Float32(467.91),
                                            RatingCount: sdk.Int(489459),
                                            RatingHistogram: []int{
                                                243678,
                                                784115,
                                                588639,
                                                231382,
                                            },
                                        },
                                        RetrievableFields: sdk.String("eligendi"),
                                        Sizes: []string{
                                            "consectetur",
                                            "soluta",
                                        },
                                        Tags: []string{
                                            "temporibus",
                                            "officia",
                                            "amet",
                                        },
                                        Title: sdk.String("Dr."),
                                        TTL: sdk.String("aspernatur"),
                                        Type: shared.GoogleCloudRetailV2betaProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("https://these-pliers.info"),
                                    },
                                    Quantity: sdk.Int(876285),
                                },
                                shared.GoogleCloudRetailV2betaProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2betaProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                                            "consectetur": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    1286.96,
                                                    1293.55,
                                                    3503.25,
                                                    4714.57,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "ab",
                                                    "illo",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2betaAudience{
                                            AgeGroups: []string{
                                                "deserunt",
                                                "delectus",
                                                "non",
                                                "distinctio",
                                            },
                                            Genders: []string{
                                                "exercitationem",
                                                "labore",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumInStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(921193),
                                        AvailableTime: sdk.String("modi"),
                                        Brands: []string{
                                            "explicabo",
                                            "accusamus",
                                        },
                                        Categories: []string{
                                            "aperiam",
                                            "odit",
                                            "deleniti",
                                        },
                                        CollectionMemberIds: []string{
                                            "voluptate",
                                            "similique",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                                            ColorFamilies: []string{
                                                "libero",
                                                "magnam",
                                            },
                                            Colors: []string{
                                                "modi",
                                            },
                                        },
                                        Conditions: []string{
                                            "nesciunt",
                                            "mollitia",
                                        },
                                        Description: sdk.String("dignissimos"),
                                        ExpireTime: sdk.String("fugiat"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "veniam",
                                                    "reiciendis",
                                                },
                                                Type: sdk.String("ab"),
                                            },
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "aut",
                                                    "aut",
                                                },
                                                Type: sdk.String("eveniet"),
                                            },
                                        },
                                        Gtin: sdk.String("odio"),
                                        ID: sdk.String("64ad7334-ec1b-4781-b36a-08088d100efa"),
                                        Images: []shared.GoogleCloudRetailV2betaImage{
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(640907),
                                                URI: sdk.String("http://ample-aardvark.org"),
                                                Width: sdk.Int(941668),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(27982),
                                                URI: sdk.String("http://dense-commodity.org"),
                                                Width: sdk.Int(691508),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(126727),
                                                URI: sdk.String("http://hungry-direction.net"),
                                                Width: sdk.Int(975095),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(562948),
                                                URI: sdk.String("https://self-assured-lobster.biz"),
                                                Width: sdk.Int(397919),
                                            },
                                        },
                                        LanguageCode: sdk.String("ea"),
                                        Materials: []string{
                                            "ducimus",
                                            "odit",
                                            "velit",
                                            "reiciendis",
                                        },
                                        Name: sdk.String("Drew Osinski"),
                                        Patterns: []string{
                                            "nisi",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                                            Cost: sdk.Float32(7008.56),
                                            CurrencyCode: sdk.String("recusandae"),
                                            OriginalPrice: sdk.Float32(9132.85),
                                            Price: sdk.Float32(2516.27),
                                            PriceEffectiveTime: sdk.String("rem"),
                                            PriceExpireTime: sdk.String("quia"),
                                            PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                                    ExclusiveMaximum: sdk.Float64(3542.25),
                                                    ExclusiveMinimum: sdk.Float64(7868.6),
                                                    Maximum: sdk.Float64(1202.77),
                                                    Minimum: sdk.Float64(9730.17),
                                                },
                                                Price: &shared.GoogleCloudRetailV2betaInterval{
                                                    ExclusiveMaximum: sdk.Float64(7549.01),
                                                    ExclusiveMinimum: sdk.Float64(620.35),
                                                    Maximum: sdk.Float64(8850.22),
                                                    Minimum: sdk.Float64(1000.02),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("architecto"),
                                        Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("optio"),
                                            },
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("rem"),
                                            },
                                        },
                                        PublishTime: sdk.String("perferendis"),
                                        Rating: &shared.GoogleCloudRetailV2betaRating{
                                            AverageRating: sdk.Float32(7042.71),
                                            RatingCount: sdk.Int(967055),
                                            RatingHistogram: []int{
                                                615058,
                                                117819,
                                                552439,
                                                356315,
                                            },
                                        },
                                        RetrievableFields: sdk.String("dolore"),
                                        Sizes: []string{
                                            "itaque",
                                            "maxime",
                                        },
                                        Tags: []string{
                                            "consequuntur",
                                            "assumenda",
                                        },
                                        Title: sdk.String("Dr."),
                                        TTL: sdk.String("doloribus"),
                                        Type: shared.GoogleCloudRetailV2betaProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("https://understated-livestock.org"),
                                    },
                                    Quantity: sdk.Int(66074),
                                },
                                shared.GoogleCloudRetailV2betaProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2betaProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                                            "nihil": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    4382.56,
                                                    4850.31,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "debitis",
                                                },
                                            },
                                            "vel": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    3577.58,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "consequuntur",
                                                    "officia",
                                                },
                                            },
                                            "reprehenderit": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    2628,
                                                    563.72,
                                                    5220.62,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "accusantium",
                                                    "veniam",
                                                    "saepe",
                                                    "neque",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2betaAudience{
                                            AgeGroups: []string{
                                                "aliquam",
                                                "quos",
                                                "doloribus",
                                                "fugiat",
                                            },
                                            Genders: []string{
                                                "delectus",
                                                "velit",
                                                "vitae",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumInStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(630832),
                                        AvailableTime: sdk.String("illo"),
                                        Brands: []string{
                                            "nemo",
                                            "doloribus",
                                            "possimus",
                                            "unde",
                                        },
                                        Categories: []string{
                                            "explicabo",
                                            "ipsam",
                                        },
                                        CollectionMemberIds: []string{
                                            "optio",
                                            "alias",
                                            "quidem",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                                            ColorFamilies: []string{
                                                "commodi",
                                            },
                                            Colors: []string{
                                                "consequuntur",
                                                "veniam",
                                                "debitis",
                                                "officia",
                                            },
                                        },
                                        Conditions: []string{
                                            "ut",
                                            "numquam",
                                            "tenetur",
                                        },
                                        Description: sdk.String("adipisci"),
                                        ExpireTime: sdk.String("libero"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "ex",
                                                    "minus",
                                                },
                                                Type: sdk.String("ab"),
                                            },
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "hic",
                                                },
                                                Type: sdk.String("nisi"),
                                            },
                                        },
                                        Gtin: sdk.String("quisquam"),
                                        ID: sdk.String("37a51262-4383-45bb-805a-23a45cefc5fd"),
                                        Images: []shared.GoogleCloudRetailV2betaImage{
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(103990),
                                                URI: sdk.String("http://polite-bait.net"),
                                                Width: sdk.Int(898193),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(155978),
                                                URI: sdk.String("http://inborn-nightmare.org"),
                                                Width: sdk.Int(354821),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(103578),
                                                URI: sdk.String("http://aggravating-bin.name"),
                                                Width: sdk.Int(765833),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(435531),
                                                URI: sdk.String("https://standard-fortnight.org"),
                                                Width: sdk.Int(246772),
                                            },
                                        },
                                        LanguageCode: sdk.String("magnam"),
                                        Materials: []string{
                                            "laboriosam",
                                            "sed",
                                        },
                                        Name: sdk.String("Faye McKenzie"),
                                        Patterns: []string{
                                            "quidem",
                                            "itaque",
                                            "laboriosam",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                                            Cost: sdk.Float32(6017.14),
                                            CurrencyCode: sdk.String("modi"),
                                            OriginalPrice: sdk.Float32(5951.98),
                                            Price: sdk.Float32(9446.26),
                                            PriceEffectiveTime: sdk.String("cum"),
                                            PriceExpireTime: sdk.String("aspernatur"),
                                            PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                                    ExclusiveMaximum: sdk.Float64(7257.84),
                                                    ExclusiveMinimum: sdk.Float64(7202.66),
                                                    Maximum: sdk.Float64(2791.72),
                                                    Minimum: sdk.Float64(9253.95),
                                                },
                                                Price: &shared.GoogleCloudRetailV2betaInterval{
                                                    ExclusiveMaximum: sdk.Float64(7972.54),
                                                    ExclusiveMinimum: sdk.Float64(6646.66),
                                                    Maximum: sdk.Float64(9044.4),
                                                    Minimum: sdk.Float64(4230.54),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("quo"),
                                        Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("illum"),
                                            },
                                        },
                                        PublishTime: sdk.String("nemo"),
                                        Rating: &shared.GoogleCloudRetailV2betaRating{
                                            AverageRating: sdk.Float32(8487.22),
                                            RatingCount: sdk.Int(706872),
                                            RatingHistogram: []int{
                                                649534,
                                            },
                                        },
                                        RetrievableFields: sdk.String("assumenda"),
                                        Sizes: []string{
                                            "distinctio",
                                            "pariatur",
                                            "ad",
                                            "facere",
                                        },
                                        Tags: []string{
                                            "eveniet",
                                            "laborum",
                                            "incidunt",
                                        },
                                        Title: sdk.String("Dr."),
                                        TTL: sdk.String("ipsam"),
                                        Type: shared.GoogleCloudRetailV2betaProductTypeEnumTypeUnspecified.ToPointer(),
                                        URI: sdk.String("http://pretty-migrant.net"),
                                    },
                                    Quantity: sdk.Int(668218),
                                },
                                shared.GoogleCloudRetailV2betaProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2betaProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                                            "labore": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    194.62,
                                                    1435.28,
                                                    3992.22,
                                                    3013.09,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "eligendi",
                                                    "hic",
                                                },
                                            },
                                            "nostrum": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    6036.5,
                                                    8603.11,
                                                    6213.93,
                                                    6530,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "nostrum",
                                                    "esse",
                                                },
                                            },
                                            "corrupti": shared.GoogleCloudRetailV2betaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    8152.25,
                                                    7736.59,
                                                    986.1,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "quod",
                                                    "laboriosam",
                                                    "doloremque",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2betaAudience{
                                            AgeGroups: []string{
                                                "facere",
                                            },
                                            Genders: []string{
                                                "maxime",
                                                "consequatur",
                                                "eaque",
                                                "architecto",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumPreorder.ToPointer(),
                                        AvailableQuantity: sdk.Int(783274),
                                        AvailableTime: sdk.String("blanditiis"),
                                        Brands: []string{
                                            "magni",
                                        },
                                        Categories: []string{
                                            "sed",
                                            "necessitatibus",
                                            "impedit",
                                            "ipsa",
                                        },
                                        CollectionMemberIds: []string{
                                            "a",
                                            "maiores",
                                            "laudantium",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                                            ColorFamilies: []string{
                                                "alias",
                                                "asperiores",
                                                "rem",
                                                "dicta",
                                            },
                                            Colors: []string{
                                                "earum",
                                                "doloribus",
                                            },
                                        },
                                        Conditions: []string{
                                            "eius",
                                        },
                                        Description: sdk.String("esse"),
                                        ExpireTime: sdk.String("in"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "neque",
                                                },
                                                Type: sdk.String("vero"),
                                            },
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "accusantium",
                                                    "qui",
                                                    "impedit",
                                                },
                                                Type: sdk.String("beatae"),
                                            },
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "dicta",
                                                    "odit",
                                                },
                                                Type: sdk.String("corporis"),
                                            },
                                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "alias",
                                                    "error",
                                                    "vel",
                                                },
                                                Type: sdk.String("accusantium"),
                                            },
                                        },
                                        Gtin: sdk.String("id"),
                                        ID: sdk.String("668151a4-72af-4923-8594-9f83f350cf87"),
                                        Images: []shared.GoogleCloudRetailV2betaImage{
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(989033),
                                                URI: sdk.String("https://shrill-normalization.com"),
                                                Width: sdk.Int(118917),
                                            },
                                            shared.GoogleCloudRetailV2betaImage{
                                                Height: sdk.Int(795546),
                                                URI: sdk.String("http://unwelcome-seaside.net"),
                                                Width: sdk.Int(693747),
                                            },
                                        },
                                        LanguageCode: sdk.String("modi"),
                                        Materials: []string{
                                            "fugit",
                                            "eius",
                                            "sequi",
                                            "eligendi",
                                        },
                                        Name: sdk.String("Claude Kutch"),
                                        Patterns: []string{
                                            "animi",
                                            "maiores",
                                            "itaque",
                                            "nulla",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                                            Cost: sdk.Float32(6434.19),
                                            CurrencyCode: sdk.String("corporis"),
                                            OriginalPrice: sdk.Float32(2465.77),
                                            Price: sdk.Float32(8877.01),
                                            PriceEffectiveTime: sdk.String("enim"),
                                            PriceExpireTime: sdk.String("officia"),
                                            PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                                    ExclusiveMaximum: sdk.Float64(9029.79),
                                                    ExclusiveMinimum: sdk.Float64(4299.97),
                                                    Maximum: sdk.Float64(9220.94),
                                                    Minimum: sdk.Float64(357.42),
                                                },
                                                Price: &shared.GoogleCloudRetailV2betaInterval{
                                                    ExclusiveMaximum: sdk.Float64(6378.4),
                                                    ExclusiveMinimum: sdk.Float64(7701.28),
                                                    Maximum: sdk.Float64(978.96),
                                                    Minimum: sdk.Float64(5021.06),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("eius"),
                                        Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("eos"),
                                            },
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("nobis"),
                                            },
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("natus"),
                                            },
                                            shared.GoogleCloudRetailV2betaPromotion{
                                                PromotionID: sdk.String("minus"),
                                            },
                                        },
                                        PublishTime: sdk.String("quia"),
                                        Rating: &shared.GoogleCloudRetailV2betaRating{
                                            AverageRating: sdk.Float32(3006.51),
                                            RatingCount: sdk.Int(440847),
                                            RatingHistogram: []int{
                                                552440,
                                                548846,
                                                227870,
                                                473326,
                                            },
                                        },
                                        RetrievableFields: sdk.String("amet"),
                                        Sizes: []string{
                                            "modi",
                                            "perferendis",
                                            "necessitatibus",
                                        },
                                        Tags: []string{
                                            "molestias",
                                        },
                                        Title: sdk.String("Mrs."),
                                        TTL: sdk.String("sunt"),
                                        Type: shared.GoogleCloudRetailV2betaProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("http://constant-tuxedo.biz"),
                                    },
                                    Quantity: sdk.Int(373106),
                                },
                            },
                            PurchaseTransaction: &shared.GoogleCloudRetailV2betaPurchaseTransaction{
                                Cost: sdk.Float32(510.53),
                                CurrencyCode: sdk.String("exercitationem"),
                                ID: sdk.String("5756f5d5-6d0b-4d0a-b2df-e13db4f62cba"),
                                Revenue: sdk.Float32(2425.31),
                                Tax: sdk.Float32(9378.65),
                            },
                            ReferrerURI: sdk.String("praesentium"),
                            SearchQuery: sdk.String("error"),
                            SessionID: sdk.String("non"),
                            URI: sdk.String("http://prickly-tailor.net"),
                            UserInfo: &shared.GoogleCloudRetailV2betaUserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("cumque"),
                                UserAgent: sdk.String("doloremque"),
                                UserID: sdk.String("expedita"),
                            },
                            VisitorID: sdk.String("corrupti"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("eaque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("magni"),
        OauthToken: sdk.String("tempora"),
        Parent: "possimus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("rerum"),
        UploadProtocol: sdk.String("sed"),
    }, operations.RetailProjectsLocationsCatalogsUserEventsImportSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsUserEventsPurge

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsUserEventsPurge(ctx, operations.RetailProjectsLocationsCatalogsUserEventsPurgeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2betaPurgeUserEventsRequest: &shared.GoogleCloudRetailV2betaPurgeUserEventsRequest{
            Filter: sdk.String("optio"),
            Force: sdk.Bool(false),
        },
        AccessToken: sdk.String("delectus"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("quos"),
        Key: sdk.String("asperiores"),
        OauthToken: sdk.String("voluptatum"),
        Parent: "iste",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("illo"),
    }, operations.RetailProjectsLocationsCatalogsUserEventsPurgeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsUserEventsRejoin

Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsUserEventsRejoin(ctx, operations.RetailProjectsLocationsCatalogsUserEventsRejoinRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaRejoinUserEventsRequest: &shared.GoogleCloudRetailV2betaRejoinUserEventsRequest{
            UserEventRejoinScope: shared.GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnumUnjoinedEvents.ToPointer(),
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("possimus"),
        Fields: sdk.String("neque"),
        Key: sdk.String("pariatur"),
        OauthToken: sdk.String("vel"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("quos"),
    }, operations.RetailProjectsLocationsCatalogsUserEventsRejoinSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsUserEventsWrite

Writes a single user event.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsUserEventsWrite(ctx, operations.RetailProjectsLocationsCatalogsUserEventsWriteRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2betaUserEventInput: &shared.GoogleCloudRetailV2betaUserEventInput{
            Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                "voluptates": shared.GoogleCloudRetailV2betaCustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        3050.47,
                        7881.65,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "consequuntur",
                        "maiores",
                        "inventore",
                    },
                },
                "aliquid": shared.GoogleCloudRetailV2betaCustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        6658.72,
                        2213.29,
                        4008.79,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "cumque",
                    },
                },
            },
            AttributionToken: sdk.String("rem"),
            CartID: sdk.String("voluptatum"),
            CompletionDetail: &shared.GoogleCloudRetailV2betaCompletionDetail{
                CompletionAttributionToken: sdk.String("ducimus"),
                SelectedPosition: sdk.Int(237523),
                SelectedSuggestion: sdk.String("recusandae"),
            },
            Entity: sdk.String("tempora"),
            EventTime: sdk.String("blanditiis"),
            EventType: sdk.String("numquam"),
            ExperimentIds: []string{
                "voluptatum",
            },
            Filter: sdk.String("sit"),
            Offset: sdk.Int(703189),
            OrderBy: sdk.String("veritatis"),
            PageCategories: []string{
                "autem",
                "quidem",
                "totam",
                "porro",
            },
            PageViewID: sdk.String("deserunt"),
            ProductDetails: []shared.GoogleCloudRetailV2betaProductDetailInput{
                shared.GoogleCloudRetailV2betaProductDetailInput{
                    Product: &shared.GoogleCloudRetailV2betaProductInput{
                        Attributes: map[string]shared.GoogleCloudRetailV2betaCustomAttribute{
                            "voluptas": shared.GoogleCloudRetailV2betaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    4137.8,
                                    7.16,
                                    6863.8,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "dolore",
                                },
                            },
                            "maxime": shared.GoogleCloudRetailV2betaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    6137.02,
                                    3558.89,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "placeat",
                                    "voluptas",
                                    "occaecati",
                                    "unde",
                                },
                            },
                        },
                        Audience: &shared.GoogleCloudRetailV2betaAudience{
                            AgeGroups: []string{
                                "nihil",
                            },
                            Genders: []string{
                                "libero",
                            },
                        },
                        Availability: shared.GoogleCloudRetailV2betaProductAvailabilityEnumInStock.ToPointer(),
                        AvailableQuantity: sdk.Int(97659),
                        AvailableTime: sdk.String("cumque"),
                        Brands: []string{
                            "harum",
                        },
                        Categories: []string{
                            "facilis",
                            "beatae",
                            "cumque",
                            "delectus",
                        },
                        CollectionMemberIds: []string{
                            "expedita",
                            "corrupti",
                        },
                        ColorInfo: &shared.GoogleCloudRetailV2betaColorInfo{
                            ColorFamilies: []string{
                                "atque",
                                "officiis",
                                "cum",
                            },
                            Colors: []string{
                                "sapiente",
                                "quo",
                                "incidunt",
                                "quod",
                            },
                        },
                        Conditions: []string{
                            "porro",
                            "id",
                            "excepturi",
                            "occaecati",
                        },
                        Description: sdk.String("libero"),
                        ExpireTime: sdk.String("quo"),
                        FulfillmentInfo: []shared.GoogleCloudRetailV2betaFulfillmentInfo{
                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                PlaceIds: []string{
                                    "maxime",
                                    "accusantium",
                                    "soluta",
                                    "fugit",
                                },
                                Type: sdk.String("pariatur"),
                            },
                            shared.GoogleCloudRetailV2betaFulfillmentInfo{
                                PlaceIds: []string{
                                    "recusandae",
                                    "veritatis",
                                    "aut",
                                    "laudantium",
                                },
                                Type: sdk.String("iusto"),
                            },
                        },
                        Gtin: sdk.String("dolor"),
                        ID: sdk.String("e42b006d-6788-478b-a858-1a58208c54fe"),
                        Images: []shared.GoogleCloudRetailV2betaImage{
                            shared.GoogleCloudRetailV2betaImage{
                                Height: sdk.Int(642234),
                                URI: sdk.String("https://slippery-osprey.biz"),
                                Width: sdk.Int(985379),
                            },
                            shared.GoogleCloudRetailV2betaImage{
                                Height: sdk.Int(156098),
                                URI: sdk.String("https://pristine-sailor.info"),
                                Width: sdk.Int(313590),
                            },
                            shared.GoogleCloudRetailV2betaImage{
                                Height: sdk.Int(430235),
                                URI: sdk.String("http://thin-contention.com"),
                                Width: sdk.Int(487148),
                            },
                            shared.GoogleCloudRetailV2betaImage{
                                Height: sdk.Int(794306),
                                URI: sdk.String("https://variable-tolerance.name"),
                                Width: sdk.Int(118349),
                            },
                        },
                        LanguageCode: sdk.String("fugit"),
                        Materials: []string{
                            "aliquid",
                        },
                        Name: sdk.String("Mrs. Louis Lind"),
                        Patterns: []string{
                            "aliquam",
                            "deserunt",
                            "modi",
                        },
                        PriceInfo: &shared.GoogleCloudRetailV2betaPriceInfo{
                            Cost: sdk.Float32(1220.85),
                            CurrencyCode: sdk.String("impedit"),
                            OriginalPrice: sdk.Float32(2596),
                            Price: sdk.Float32(5283.2),
                            PriceEffectiveTime: sdk.String("ipsa"),
                            PriceExpireTime: sdk.String("at"),
                            PriceRange: &shared.GoogleCloudRetailV2betaPriceInfoPriceRange{
                                OriginalPrice: &shared.GoogleCloudRetailV2betaInterval{
                                    ExclusiveMaximum: sdk.Float64(2098.6),
                                    ExclusiveMinimum: sdk.Float64(9998.54),
                                    Maximum: sdk.Float64(1323.05),
                                    Minimum: sdk.Float64(802.84),
                                },
                                Price: &shared.GoogleCloudRetailV2betaInterval{
                                    ExclusiveMaximum: sdk.Float64(1932.36),
                                    ExclusiveMinimum: sdk.Float64(1430.78),
                                    Maximum: sdk.Float64(6854.67),
                                    Minimum: sdk.Float64(9431.03),
                                },
                            },
                        },
                        PrimaryProductID: sdk.String("eaque"),
                        Promotions: []shared.GoogleCloudRetailV2betaPromotion{
                            shared.GoogleCloudRetailV2betaPromotion{
                                PromotionID: sdk.String("architecto"),
                            },
                        },
                        PublishTime: sdk.String("aperiam"),
                        Rating: &shared.GoogleCloudRetailV2betaRating{
                            AverageRating: sdk.Float32(1341.73),
                            RatingCount: sdk.Int(860362),
                            RatingHistogram: []int{
                                73574,
                                298750,
                            },
                        },
                        RetrievableFields: sdk.String("delectus"),
                        Sizes: []string{
                            "optio",
                            "nobis",
                        },
                        Tags: []string{
                            "repellat",
                            "quae",
                        },
                        Title: sdk.String("Ms."),
                        TTL: sdk.String("expedita"),
                        Type: shared.GoogleCloudRetailV2betaProductTypeEnumCollection.ToPointer(),
                        URI: sdk.String("https://humongous-check.com"),
                    },
                    Quantity: sdk.Int(627341),
                },
            },
            PurchaseTransaction: &shared.GoogleCloudRetailV2betaPurchaseTransaction{
                Cost: sdk.Float32(4087.74),
                CurrencyCode: sdk.String("animi"),
                ID: sdk.String("4f77a87e-e3e4-4be7-92c6-5b34418e3bb9"),
                Revenue: sdk.Float32(749.21),
                Tax: sdk.Float32(7924.99),
            },
            ReferrerURI: sdk.String("quos"),
            SearchQuery: sdk.String("temporibus"),
            SessionID: sdk.String("sint"),
            URI: sdk.String("http://front-synod.com"),
            UserInfo: &shared.GoogleCloudRetailV2betaUserInfo{
                DirectUserRequest: sdk.Bool(false),
                IPAddress: sdk.String("voluptates"),
                UserAgent: sdk.String("laudantium"),
                UserID: sdk.String("tempora"),
            },
            VisitorID: sdk.String("quae"),
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("rem"),
        Fields: sdk.String("tenetur"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("modi"),
        Parent: "earum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("labore"),
        WriteAsync: sdk.Bool(false),
    }, operations.RetailProjectsLocationsCatalogsUserEventsWriteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaUserEvent != nil {
        // handle response
    }
}
```

## RetailProjectsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsOperationsGet(ctx, operations.RetailProjectsOperationsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("consequatur"),
        Fields: sdk.String("esse"),
        Key: sdk.String("debitis"),
        Name: "Devin Runte",
        OauthToken: sdk.String("deserunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ad"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("sequi"),
    }, operations.RetailProjectsOperationsGetSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
}
```

## RetailProjectsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsOperationsList(ctx, operations.RetailProjectsOperationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("omnis"),
        Filter: sdk.String("aut"),
        Key: sdk.String("ipsam"),
        Name: "Kent Kihn",
        OauthToken: sdk.String("accusantium"),
        PageSize: sdk.Int64(321473),
        PageToken: sdk.String("nisi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("quia"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.RetailProjectsOperationsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningListOperationsResponse != nil {
        // handle response
    }
}
```
