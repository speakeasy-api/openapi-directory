# Projects

### Available Operations

* [RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute](#retailprojectslocationscatalogsattributesconfigaddcatalogattribute) - Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
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
        GoogleCloudRetailV2AddCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2CatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnumExactSearchableEnabled.ToPointer(),
                IndexableOption: shared.GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableDisabled.ToPointer(),
                Key: sdk.String("placeat"),
                RetrievableOption: shared.GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnumRetrievableEnabled.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableEnabled.ToPointer(),
            },
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AttributesConfig: "recusandae",
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("ab"),
        Key: sdk.String("quis"),
        OauthToken: sdk.String("veritatis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("perferendis"),
        UploadProtocol: sdk.String("ipsam"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2AttributesConfig != nil {
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
        GoogleCloudRetailV2RemoveCatalogAttributeRequest: &shared.GoogleCloudRetailV2RemoveCatalogAttributeRequest{
            Key: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("quo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AttributesConfig: "at",
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2AttributesConfig != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2CatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableDisabled.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnumExactSearchableOptionUnspecified.ToPointer(),
                IndexableOption: shared.GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableDisabled.ToPointer(),
                Key: sdk.String("officia"),
                RetrievableOption: shared.GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnumRetrievableEnabled.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableOptionUnspecified.ToPointer(),
            },
            UpdateMask: sdk.String("deleniti"),
        },
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumProto.ToPointer(),
        AttributesConfig: "totam",
        Callback: sdk.String("beatae"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("modi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("qui"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("cum"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2AttributesConfig != nil {
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
        GoogleCloudRetailV2AddFulfillmentPlacesRequest: &shared.GoogleCloudRetailV2AddFulfillmentPlacesRequest{
            AddTime: sdk.String("ipsum"),
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "aspernatur",
                "perferendis",
                "ad",
            },
            Type: sdk.String("natus"),
        },
        AccessToken: sdk.String("sed"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolor"),
        Fields: sdk.String("natus"),
        Key: sdk.String("laboriosam"),
        OauthToken: sdk.String("hic"),
        PrettyPrint: sdk.Bool(false),
        Product: "saepe",
        QuotaUser: sdk.String("fuga"),
        UploadType: sdk.String("in"),
        UploadProtocol: sdk.String("corporis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2AddLocalInventoriesRequest: &shared.GoogleCloudRetailV2AddLocalInventoriesRequest{
            AddMask: sdk.String("iure"),
            AddTime: sdk.String("saepe"),
            AllowMissing: sdk.Bool(false),
            LocalInventories: []shared.GoogleCloudRetailV2LocalInventory{
                shared.GoogleCloudRetailV2LocalInventory{
                    Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                        "ipsa": shared.GoogleCloudRetailV2CustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                6667.67,
                                6531.4,
                                6706.38,
                                1709.09,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "corporis",
                            },
                        },
                    },
                    FulfillmentTypes: []string{
                        "nobis",
                    },
                    PlaceID: sdk.String("enim"),
                    PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                        Cost: sdk.Float32(6078.31),
                        CurrencyCode: sdk.String("nemo"),
                        OriginalPrice: sdk.Float32(3250.47),
                        Price: sdk.Float32(5701.97),
                        PriceEffectiveTime: sdk.String("accusantium"),
                        PriceExpireTime: sdk.String("iure"),
                        PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                            OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                ExclusiveMaximum: sdk.Float64(6342.74),
                                ExclusiveMinimum: sdk.Float64(9883.74),
                                Maximum: sdk.Float64(9589.5),
                                Minimum: sdk.Float64(1020.44),
                            },
                            Price: &shared.GoogleCloudRetailV2Interval{
                                ExclusiveMaximum: sdk.Float64(6527.9),
                                ExclusiveMinimum: sdk.Float64(2088.76),
                                Maximum: sdk.Float64(6350.59),
                                Minimum: sdk.Float64(1613.09),
                            },
                        },
                    },
                },
                shared.GoogleCloudRetailV2LocalInventory{
                    Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                        "mollitia": shared.GoogleCloudRetailV2CustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                2532.91,
                                4143.69,
                                4663.11,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "velit",
                                "error",
                            },
                        },
                        "quia": shared.GoogleCloudRetailV2CustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                1103.75,
                                6747.52,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "enim",
                                "odit",
                                "quo",
                            },
                        },
                        "sequi": shared.GoogleCloudRetailV2CustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                3687.25,
                                6625.27,
                                8209.94,
                                135.71,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "error",
                            },
                        },
                        "temporibus": shared.GoogleCloudRetailV2CustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                960.98,
                                9719.45,
                                9764.6,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "nihil",
                                "praesentium",
                                "voluptatibus",
                                "ipsa",
                            },
                        },
                    },
                    FulfillmentTypes: []string{
                        "voluptate",
                        "cum",
                        "perferendis",
                    },
                    PlaceID: sdk.String("doloremque"),
                    PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                        Cost: sdk.Float32(4417.11),
                        CurrencyCode: sdk.String("ut"),
                        OriginalPrice: sdk.Float32(9795.87),
                        Price: sdk.Float32(1201.96),
                        PriceEffectiveTime: sdk.String("corporis"),
                        PriceExpireTime: sdk.String("dolore"),
                        PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                            OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                ExclusiveMaximum: sdk.Float64(4808.94),
                                ExclusiveMinimum: sdk.Float64(1187.27),
                                Maximum: sdk.Float64(6886.61),
                                Minimum: sdk.Float64(3179.83),
                            },
                            Price: &shared.GoogleCloudRetailV2Interval{
                                ExclusiveMaximum: sdk.Float64(8804.76),
                                ExclusiveMinimum: sdk.Float64(4142.63),
                                Maximum: sdk.Float64(9182.36),
                                Minimum: sdk.Float64(641.47),
                            },
                        },
                    },
                },
                shared.GoogleCloudRetailV2LocalInventory{
                    Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                        "quidem": shared.GoogleCloudRetailV2CustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                5666.02,
                                8651.03,
                                2653.89,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "rem",
                                "voluptates",
                                "quasi",
                            },
                        },
                    },
                    FulfillmentTypes: []string{
                        "sint",
                        "veritatis",
                        "itaque",
                        "incidunt",
                    },
                    PlaceID: sdk.String("enim"),
                    PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                        Cost: sdk.Float32(93.56),
                        CurrencyCode: sdk.String("est"),
                        OriginalPrice: sdk.Float32(8423.42),
                        Price: sdk.Float32(1317.97),
                        PriceEffectiveTime: sdk.String("deserunt"),
                        PriceExpireTime: sdk.String("distinctio"),
                        PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                            OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                ExclusiveMaximum: sdk.Float64(8413.86),
                                ExclusiveMinimum: sdk.Float64(2894.06),
                                Maximum: sdk.Float64(2647.3),
                                Minimum: sdk.Float64(1831.91),
                            },
                            Price: &shared.GoogleCloudRetailV2Interval{
                                ExclusiveMaximum: sdk.Float64(3978.21),
                                ExclusiveMinimum: sdk.Float64(5865.13),
                                Maximum: sdk.Float64(5528.22),
                                Minimum: sdk.Float64(201.07),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("magni"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsam"),
        Fields: sdk.String("alias"),
        Key: sdk.String("fugit"),
        OauthToken: sdk.String("dolorum"),
        PrettyPrint: sdk.Bool(false),
        Product: "excepturi",
        QuotaUser: sdk.String("tempora"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("tempore"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2ProductInput: &shared.GoogleCloudRetailV2ProductInput{
            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                "eum": shared.GoogleCloudRetailV2CustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        7561.07,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "aliquid",
                        "provident",
                        "necessitatibus",
                    },
                },
                "sint": shared.GoogleCloudRetailV2CustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        2230.81,
                        8915.55,
                        9527.49,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "in",
                        "in",
                        "illum",
                    },
                },
                "maiores": shared.GoogleCloudRetailV2CustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        1162.02,
                        2974.37,
                        7670.24,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "ea",
                        "aliquid",
                        "laborum",
                        "accusamus",
                    },
                },
                "non": shared.GoogleCloudRetailV2CustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        3132.18,
                        8817.36,
                        9654.17,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "provident",
                        "nam",
                        "id",
                    },
                },
            },
            Audience: &shared.GoogleCloudRetailV2Audience{
                AgeGroups: []string{
                    "deleniti",
                    "sapiente",
                    "amet",
                },
                Genders: []string{
                    "nisi",
                    "vel",
                    "natus",
                },
            },
            Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumPreorder.ToPointer(),
            AvailableQuantity: sdk.Int(474867),
            AvailableTime: sdk.String("perferendis"),
            Brands: []string{
                "magnam",
                "distinctio",
            },
            Categories: []string{
                "labore",
                "labore",
                "suscipit",
            },
            CollectionMemberIds: []string{
                "nobis",
                "eum",
                "vero",
            },
            ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                ColorFamilies: []string{
                    "architecto",
                },
                Colors: []string{
                    "et",
                    "excepturi",
                },
            },
            Conditions: []string{
                "provident",
                "quos",
            },
            Description: sdk.String("sint"),
            ExpireTime: sdk.String("accusantium"),
            FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                shared.GoogleCloudRetailV2FulfillmentInfo{
                    PlaceIds: []string{
                        "mollitia",
                        "ad",
                        "eum",
                        "dolor",
                    },
                    Type: sdk.String("necessitatibus"),
                },
                shared.GoogleCloudRetailV2FulfillmentInfo{
                    PlaceIds: []string{
                        "nemo",
                    },
                    Type: sdk.String("quasi"),
                },
                shared.GoogleCloudRetailV2FulfillmentInfo{
                    PlaceIds: []string{
                        "doloribus",
                        "debitis",
                    },
                    Type: sdk.String("eius"),
                },
            },
            Gtin: sdk.String("maxime"),
            ID: sdk.String("8b711e5b-7fd2-4ed0-a892-1cddc692601f"),
            Images: []shared.GoogleCloudRetailV2Image{
                shared.GoogleCloudRetailV2Image{
                    Height: sdk.Int(373291),
                    URI: sdk.String("http://impolite-rat.com"),
                    Width: sdk.Int(866383),
                },
                shared.GoogleCloudRetailV2Image{
                    Height: sdk.Int(365496),
                    URI: sdk.String("https://affectionate-stonework.biz"),
                    Width: sdk.Int(11714),
                },
                shared.GoogleCloudRetailV2Image{
                    Height: sdk.Int(764912),
                    URI: sdk.String("http://wasteful-rectangle.net"),
                    Width: sdk.Int(171629),
                },
            },
            LanguageCode: sdk.String("quis"),
            Materials: []string{
                "dignissimos",
                "eaque",
                "quis",
            },
            Name: sdk.String("Ruby Auer"),
            Patterns: []string{
                "dolor",
                "vero",
            },
            PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                Cost: sdk.Float32(3453.52),
                CurrencyCode: sdk.String("hic"),
                OriginalPrice: sdk.Float32(9280.82),
                Price: sdk.Float32(6082.53),
                PriceEffectiveTime: sdk.String("facilis"),
                PriceExpireTime: sdk.String("perspiciatis"),
                PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                    OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                        ExclusiveMaximum: sdk.Float64(318.38),
                        ExclusiveMinimum: sdk.Float64(7836.45),
                        Maximum: sdk.Float64(1646.94),
                        Minimum: sdk.Float64(5000.26),
                    },
                    Price: &shared.GoogleCloudRetailV2Interval{
                        ExclusiveMaximum: sdk.Float64(6214.79),
                        ExclusiveMinimum: sdk.Float64(503.7),
                        Maximum: sdk.Float64(5772.29),
                        Minimum: sdk.Float64(6990.98),
                    },
                },
            },
            PrimaryProductID: sdk.String("adipisci"),
            Promotions: []shared.GoogleCloudRetailV2Promotion{
                shared.GoogleCloudRetailV2Promotion{
                    PromotionID: sdk.String("earum"),
                },
                shared.GoogleCloudRetailV2Promotion{
                    PromotionID: sdk.String("modi"),
                },
                shared.GoogleCloudRetailV2Promotion{
                    PromotionID: sdk.String("iste"),
                },
                shared.GoogleCloudRetailV2Promotion{
                    PromotionID: sdk.String("dolorum"),
                },
            },
            PublishTime: sdk.String("deleniti"),
            Rating: &shared.GoogleCloudRetailV2Rating{
                AverageRating: sdk.Float32(8642.82),
                RatingCount: sdk.Int(589910),
                RatingHistogram: []int{
                    730122,
                    964490,
                    311945,
                    554242,
                },
            },
            RetrievableFields: sdk.String("aliquid"),
            Sizes: []string{
                "dolorem",
            },
            Tags: []string{
                "qui",
            },
            Title: sdk.String("Mrs."),
            TTL: sdk.String("hic"),
            Type: shared.GoogleCloudRetailV2ProductTypeEnumVariant.ToPointer(),
            URI: sdk.String("https://jam-packed-kingdom.org"),
        },
        AccessToken: sdk.String("amet"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("numquam"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("ipsa"),
        OauthToken: sdk.String("ipsa"),
        Parent: "iure",
        PrettyPrint: sdk.Bool(false),
        ProductID: sdk.String("odio"),
        QuotaUser: sdk.String("quaerat"),
        UploadType: sdk.String("accusamus"),
        UploadProtocol: sdk.String("quidem"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2Product != nil {
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
        GoogleCloudRetailV2ImportProductsRequestInput: &shared.GoogleCloudRetailV2ImportProductsRequestInput{
            ErrorsConfig: &shared.GoogleCloudRetailV2ImportErrorsConfig{
                GcsPrefix: sdk.String("voluptas"),
            },
            InputConfig: &shared.GoogleCloudRetailV2ProductInputConfigInput{
                BigQuerySource: &shared.GoogleCloudRetailV2BigQuerySource{
                    DataSchema: sdk.String("natus"),
                    DatasetID: sdk.String("eos"),
                    GcsStagingDir: sdk.String("atque"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(24678),
                        Month: sdk.Int(854614),
                        Year: sdk.Int(67249),
                    },
                    ProjectID: sdk.String("soluta"),
                    TableID: sdk.String("dolorum"),
                },
                GcsSource: &shared.GoogleCloudRetailV2GcsSource{
                    DataSchema: sdk.String("iusto"),
                    InputUris: []string{
                        "dolorum",
                        "deleniti",
                    },
                },
                ProductInlineSource: &shared.GoogleCloudRetailV2ProductInlineSourceInput{
                    Products: []shared.GoogleCloudRetailV2ProductInput{
                        shared.GoogleCloudRetailV2ProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "distinctio": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        4694.97,
                                        2168.97,
                                        4560.15,
                                        6630.78,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "eius",
                                        "aspernatur",
                                        "perferendis",
                                        "amet",
                                    },
                                },
                                "optio": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        3200.17,
                                        9044.25,
                                        3834.64,
                                        6457.85,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "minima",
                                        "repellendus",
                                        "totam",
                                    },
                                },
                                "similique": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        8726.51,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "tempora",
                                        "vel",
                                    },
                                },
                                "quod": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1856.36,
                                        6798.8,
                                        9527.92,
                                        4561.3,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "iusto",
                                        "ipsum",
                                        "quisquam",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2Audience{
                                AgeGroups: []string{
                                    "amet",
                                    "tempore",
                                    "accusamus",
                                    "numquam",
                                },
                                Genders: []string{
                                    "dolorem",
                                    "sapiente",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumOutOfStock.ToPointer(),
                            AvailableQuantity: sdk.Int(471752),
                            AvailableTime: sdk.String("sit"),
                            Brands: []string{
                                "neque",
                                "sed",
                                "vel",
                            },
                            Categories: []string{
                                "voluptas",
                                "deserunt",
                                "quam",
                            },
                            CollectionMemberIds: []string{
                                "incidunt",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                ColorFamilies: []string{
                                    "cupiditate",
                                },
                                Colors: []string{
                                    "pariatur",
                                    "soluta",
                                    "dicta",
                                    "laborum",
                                },
                            },
                            Conditions: []string{
                                "incidunt",
                                "aspernatur",
                                "dolores",
                            },
                            Description: sdk.String("distinctio"),
                            ExpireTime: sdk.String("facilis"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "molestias",
                                        "temporibus",
                                    },
                                    Type: sdk.String("qui"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "fugit",
                                    },
                                    Type: sdk.String("magni"),
                                },
                            },
                            Gtin: sdk.String("odio"),
                            ID: sdk.String("15bf0cbb-1e31-4b8b-90f3-443a1108e0ad"),
                            Images: []shared.GoogleCloudRetailV2Image{
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(984330),
                                    URI: sdk.String("http://rosy-nanoparticle.biz"),
                                    Width: sdk.Int(63955),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(512393),
                                    URI: sdk.String("http://obese-western.net"),
                                    Width: sdk.Int(876506),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(606476),
                                    URI: sdk.String("http://eager-vivo.info"),
                                    Width: sdk.Int(231701),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(878870),
                                    URI: sdk.String("https://liquid-underweight.net"),
                                    Width: sdk.Int(799203),
                                },
                            },
                            LanguageCode: sdk.String("odio"),
                            Materials: []string{
                                "facilis",
                                "vero",
                                "ducimus",
                            },
                            Name: sdk.String("Rosemarie Stanton"),
                            Patterns: []string{
                                "aut",
                                "voluptatibus",
                                "exercitationem",
                                "nulla",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                Cost: sdk.Float32(1481.41),
                                CurrencyCode: sdk.String("porro"),
                                OriginalPrice: sdk.Float32(9818.3),
                                Price: sdk.Float32(9850.33),
                                PriceEffectiveTime: sdk.String("iusto"),
                                PriceExpireTime: sdk.String("eligendi"),
                                PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(4973.91),
                                        ExclusiveMinimum: sdk.Float64(40.48),
                                        Maximum: sdk.Float64(6394.73),
                                        Minimum: sdk.Float64(2694.79),
                                    },
                                    Price: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(3685.84),
                                        ExclusiveMinimum: sdk.Float64(4104.92),
                                        Maximum: sdk.Float64(1369),
                                        Minimum: sdk.Float64(4282.24),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("possimus"),
                            Promotions: []shared.GoogleCloudRetailV2Promotion{
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("ratione"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("ex"),
                                },
                            },
                            PublishTime: sdk.String("laudantium"),
                            Rating: &shared.GoogleCloudRetailV2Rating{
                                AverageRating: sdk.Float32(1206.57),
                                RatingCount: sdk.Int(224317),
                                RatingHistogram: []int{
                                    97844,
                                    406120,
                                    862192,
                                    569211,
                                },
                            },
                            RetrievableFields: sdk.String("voluptatibus"),
                            Sizes: []string{
                                "sapiente",
                                "quisquam",
                            },
                            Tags: []string{
                                "ea",
                                "impedit",
                                "corporis",
                                "veniam",
                            },
                            Title: sdk.String("Mrs."),
                            TTL: sdk.String("inventore"),
                            Type: shared.GoogleCloudRetailV2ProductTypeEnumPrimary.ToPointer(),
                            URI: sdk.String("http://solid-curriculum.org"),
                        },
                        shared.GoogleCloudRetailV2ProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "minima": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        9528.71,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "aut",
                                        "aut",
                                        "deleniti",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2Audience{
                                AgeGroups: []string{
                                    "aliquam",
                                    "fugit",
                                    "accusamus",
                                    "inventore",
                                },
                                Genders: []string{
                                    "et",
                                    "dolorum",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumPreorder.ToPointer(),
                            AvailableQuantity: sdk.Int(810424),
                            AvailableTime: sdk.String("velit"),
                            Brands: []string{
                                "autem",
                                "nobis",
                            },
                            Categories: []string{
                                "assumenda",
                                "nulla",
                                "voluptas",
                            },
                            CollectionMemberIds: []string{
                                "quasi",
                                "tempora",
                                "numquam",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                ColorFamilies: []string{
                                    "provident",
                                },
                                Colors: []string{
                                    "molestiae",
                                },
                            },
                            Conditions: []string{
                                "odio",
                                "eius",
                            },
                            Description: sdk.String("esse"),
                            ExpireTime: sdk.String("esse"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "reprehenderit",
                                        "quidem",
                                        "fugiat",
                                    },
                                    Type: sdk.String("ut"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "suscipit",
                                        "assumenda",
                                    },
                                    Type: sdk.String("eos"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "quisquam",
                                        "veritatis",
                                        "ipsa",
                                    },
                                    Type: sdk.String("id"),
                                },
                            },
                            Gtin: sdk.String("quidem"),
                            ID: sdk.String("3cdca425-1904-4e52-bc7e-0bc7178e4796"),
                            Images: []shared.GoogleCloudRetailV2Image{
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(174112),
                                    URI: sdk.String("https://lanky-apparel.net"),
                                    Width: sdk.Int(430402),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(556429),
                                    URI: sdk.String("https://cumbersome-mama.com"),
                                    Width: sdk.Int(681393),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(649463),
                                    URI: sdk.String("http://mixed-capon.biz"),
                                    Width: sdk.Int(392676),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(147014),
                                    URI: sdk.String("https://cumbersome-community.com"),
                                    Width: sdk.Int(903984),
                                },
                            },
                            LanguageCode: sdk.String("occaecati"),
                            Materials: []string{
                                "et",
                                "esse",
                                "eveniet",
                            },
                            Name: sdk.String("Patrick Koch"),
                            Patterns: []string{
                                "aliquid",
                                "quasi",
                                "saepe",
                                "vel",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                Cost: sdk.Float32(6900.25),
                                CurrencyCode: sdk.String("molestiae"),
                                OriginalPrice: sdk.Float32(6996.22),
                                Price: sdk.Float32(5801.97),
                                PriceEffectiveTime: sdk.String("minima"),
                                PriceExpireTime: sdk.String("distinctio"),
                                PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(7567.79),
                                        ExclusiveMinimum: sdk.Float64(270.69),
                                        Maximum: sdk.Float64(6360.61),
                                        Minimum: sdk.Float64(7313.98),
                                    },
                                    Price: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(2400.2),
                                        ExclusiveMinimum: sdk.Float64(7669.64),
                                        Maximum: sdk.Float64(1605.38),
                                        Minimum: sdk.Float64(97.66),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("minus"),
                            Promotions: []shared.GoogleCloudRetailV2Promotion{
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("sapiente"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("consectetur"),
                                },
                            },
                            PublishTime: sdk.String("esse"),
                            Rating: &shared.GoogleCloudRetailV2Rating{
                                AverageRating: sdk.Float32(5034.27),
                                RatingCount: sdk.Int(590984),
                                RatingHistogram: []int{
                                    857723,
                                    557811,
                                    457223,
                                    97468,
                                },
                            },
                            RetrievableFields: sdk.String("a"),
                            Sizes: []string{
                                "sint",
                                "pariatur",
                                "possimus",
                            },
                            Tags: []string{
                                "eveniet",
                            },
                            Title: sdk.String("Dr."),
                            TTL: sdk.String("facere"),
                            Type: shared.GoogleCloudRetailV2ProductTypeEnumTypeUnspecified.ToPointer(),
                            URI: sdk.String("http://brown-panpipe.name"),
                        },
                        shared.GoogleCloudRetailV2ProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "tenetur": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        9367.47,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "in",
                                        "eius",
                                    },
                                },
                                "libero": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        7422.38,
                                        333.04,
                                        3069.86,
                                        9589.83,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "ullam",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2Audience{
                                AgeGroups: []string{
                                    "ullam",
                                    "nisi",
                                },
                                Genders: []string{
                                    "voluptatum",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                            AvailableQuantity: sdk.Int(845358),
                            AvailableTime: sdk.String("ex"),
                            Brands: []string{
                                "itaque",
                                "dolorum",
                                "architecto",
                            },
                            Categories: []string{
                                "tenetur",
                                "quasi",
                                "at",
                            },
                            CollectionMemberIds: []string{
                                "voluptate",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                ColorFamilies: []string{
                                    "minima",
                                },
                                Colors: []string{
                                    "consectetur",
                                },
                            },
                            Conditions: []string{
                                "iste",
                            },
                            Description: sdk.String("temporibus"),
                            ExpireTime: sdk.String("accusantium"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "laudantium",
                                    },
                                    Type: sdk.String("eum"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "ab",
                                        "corrupti",
                                        "non",
                                    },
                                    Type: sdk.String("voluptatem"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "occaecati",
                                    },
                                    Type: sdk.String("numquam"),
                                },
                            },
                            Gtin: sdk.String("impedit"),
                            ID: sdk.String("26071f93-f5f0-4642-9ac7-af515cc413aa"),
                            Images: []shared.GoogleCloudRetailV2Image{
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(246063),
                                    URI: sdk.String("https://quaint-trek.name"),
                                    Width: sdk.Int(853940),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(424089),
                                    URI: sdk.String("http://mysterious-highway.biz"),
                                    Width: sdk.Int(822560),
                                },
                            },
                            LanguageCode: sdk.String("facilis"),
                            Materials: []string{
                                "commodi",
                                "in",
                                "corporis",
                            },
                            Name: sdk.String("Mack Hettinger"),
                            Patterns: []string{
                                "cum",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                Cost: sdk.Float32(2326.27),
                                CurrencyCode: sdk.String("in"),
                                OriginalPrice: sdk.Float32(3485.19),
                                Price: sdk.Float32(9372.85),
                                PriceEffectiveTime: sdk.String("facere"),
                                PriceExpireTime: sdk.String("numquam"),
                                PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(9854.92),
                                        ExclusiveMinimum: sdk.Float64(3817.6),
                                        Maximum: sdk.Float64(9689.72),
                                        Minimum: sdk.Float64(6971.42),
                                    },
                                    Price: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(9049.49),
                                        ExclusiveMinimum: sdk.Float64(8970.71),
                                        Maximum: sdk.Float64(2965.56),
                                        Minimum: sdk.Float64(1210.59),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("asperiores"),
                            Promotions: []shared.GoogleCloudRetailV2Promotion{
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("non"),
                                },
                            },
                            PublishTime: sdk.String("amet"),
                            Rating: &shared.GoogleCloudRetailV2Rating{
                                AverageRating: sdk.Float32(1059.06),
                                RatingCount: sdk.Int(489509),
                                RatingHistogram: []int{
                                    891523,
                                    233420,
                                    358107,
                                    689768,
                                },
                            },
                            RetrievableFields: sdk.String("laboriosam"),
                            Sizes: []string{
                                "voluptates",
                            },
                            Tags: []string{
                                "vitae",
                                "accusamus",
                                "similique",
                            },
                            Title: sdk.String("Mrs."),
                            TTL: sdk.String("aspernatur"),
                            Type: shared.GoogleCloudRetailV2ProductTypeEnumPrimary.ToPointer(),
                            URI: sdk.String("http://hasty-exocrine.net"),
                        },
                    },
                },
            },
            NotificationPubsubTopic: sdk.String("dolorum"),
            ReconciliationMode: shared.GoogleCloudRetailV2ImportProductsRequestReconciliationModeEnumReconciliationModeUnspecified.ToPointer(),
            RequestID: sdk.String("minus"),
            UpdateMask: sdk.String("dolores"),
        },
        AccessToken: sdk.String("blanditiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolore"),
        Fields: sdk.String("aliquam"),
        Key: sdk.String("officiis"),
        OauthToken: sdk.String("temporibus"),
        Parent: "ullam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("cum"),
        UploadProtocol: sdk.String("blanditiis"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("hic"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("corrupti"),
        Filter: sdk.String("pariatur"),
        Key: sdk.String("totam"),
        OauthToken: sdk.String("hic"),
        PageSize: sdk.Int64(348783),
        PageToken: sdk.String("nobis"),
        Parent: "sit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rerum"),
        ReadMask: sdk.String("sed"),
        UploadType: sdk.String("reiciendis"),
        UploadProtocol: sdk.String("explicabo"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ListProductsResponse != nil {
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
        GoogleCloudRetailV2RemoveFulfillmentPlacesRequest: &shared.GoogleCloudRetailV2RemoveFulfillmentPlacesRequest{
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "voluptate",
                "expedita",
                "ab",
            },
            RemoveTime: sdk.String("iste"),
            Type: sdk.String("dolore"),
        },
        AccessToken: sdk.String("laborum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("in"),
        Fields: sdk.String("commodi"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("explicabo"),
        PrettyPrint: sdk.Bool(false),
        Product: "voluptas",
        QuotaUser: sdk.String("unde"),
        UploadType: sdk.String("architecto"),
        UploadProtocol: sdk.String("suscipit"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2RemoveLocalInventoriesRequest: &shared.GoogleCloudRetailV2RemoveLocalInventoriesRequest{
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "illo",
                "reiciendis",
                "perferendis",
                "corrupti",
            },
            RemoveTime: sdk.String("maiores"),
        },
        AccessToken: sdk.String("incidunt"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("provident"),
        Fields: sdk.String("eius"),
        Key: sdk.String("necessitatibus"),
        OauthToken: sdk.String("ipsum"),
        PrettyPrint: sdk.Bool(false),
        Product: "ea",
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("voluptatibus"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2SetInventoryRequestInput: &shared.GoogleCloudRetailV2SetInventoryRequestInput{
            AllowMissing: sdk.Bool(false),
            Inventory: &shared.GoogleCloudRetailV2ProductInput{
                Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                    "voluptate": shared.GoogleCloudRetailV2CustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            4017.13,
                            254.97,
                            2484.13,
                            8880.44,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "facilis",
                            "quaerat",
                            "incidunt",
                        },
                    },
                    "ipsam": shared.GoogleCloudRetailV2CustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            5249.7,
                            265.22,
                            7505.95,
                            6256.37,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "minima",
                            "recusandae",
                        },
                    },
                },
                Audience: &shared.GoogleCloudRetailV2Audience{
                    AgeGroups: []string{
                        "nulla",
                        "magni",
                        "aperiam",
                        "saepe",
                    },
                    Genders: []string{
                        "veniam",
                        "in",
                    },
                },
                Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumBackorder.ToPointer(),
                AvailableQuantity: sdk.Int(104627),
                AvailableTime: sdk.String("laudantium"),
                Brands: []string{
                    "praesentium",
                    "cum",
                },
                Categories: []string{
                    "dolorum",
                    "voluptatum",
                },
                CollectionMemberIds: []string{
                    "hic",
                    "expedita",
                    "debitis",
                },
                ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                    ColorFamilies: []string{
                        "dolorum",
                    },
                    Colors: []string{
                        "officia",
                        "dolorum",
                    },
                },
                Conditions: []string{
                    "accusamus",
                    "tempora",
                    "atque",
                },
                Description: sdk.String("fugit"),
                ExpireTime: sdk.String("ut"),
                FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                    shared.GoogleCloudRetailV2FulfillmentInfo{
                        PlaceIds: []string{
                            "culpa",
                        },
                        Type: sdk.String("expedita"),
                    },
                    shared.GoogleCloudRetailV2FulfillmentInfo{
                        PlaceIds: []string{
                            "consequatur",
                            "esse",
                        },
                        Type: sdk.String("ipsam"),
                    },
                    shared.GoogleCloudRetailV2FulfillmentInfo{
                        PlaceIds: []string{
                            "voluptatum",
                        },
                        Type: sdk.String("quas"),
                    },
                    shared.GoogleCloudRetailV2FulfillmentInfo{
                        PlaceIds: []string{
                            "corporis",
                            "et",
                            "blanditiis",
                            "ex",
                        },
                        Type: sdk.String("sed"),
                    },
                },
                Gtin: sdk.String("sit"),
                ID: sdk.String("65e904f3-b119-44b8-abf6-03a79f9dfe0a"),
                Images: []shared.GoogleCloudRetailV2Image{
                    shared.GoogleCloudRetailV2Image{
                        Height: sdk.Int(440666),
                        URI: sdk.String("https://reasonable-lever.name"),
                        Width: sdk.Int(333965),
                    },
                    shared.GoogleCloudRetailV2Image{
                        Height: sdk.Int(29100),
                        URI: sdk.String("https://vacant-borrowing.name"),
                        Width: sdk.Int(442036),
                    },
                    shared.GoogleCloudRetailV2Image{
                        Height: sdk.Int(991142),
                        URI: sdk.String("https://hidden-probability.net"),
                        Width: sdk.Int(90885),
                    },
                },
                LanguageCode: sdk.String("esse"),
                Materials: []string{
                    "assumenda",
                },
                Name: sdk.String("Leah Mueller"),
                Patterns: []string{
                    "natus",
                    "minima",
                    "aspernatur",
                    "ex",
                },
                PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                    Cost: sdk.Float32(9805.81),
                    CurrencyCode: sdk.String("corrupti"),
                    OriginalPrice: sdk.Float32(8717.86),
                    Price: sdk.Float32(6216.93),
                    PriceEffectiveTime: sdk.String("blanditiis"),
                    PriceExpireTime: sdk.String("suscipit"),
                    PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                        OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                            ExclusiveMaximum: sdk.Float64(9223.48),
                            ExclusiveMinimum: sdk.Float64(5421.29),
                            Maximum: sdk.Float64(5413.81),
                            Minimum: sdk.Float64(1209.19),
                        },
                        Price: &shared.GoogleCloudRetailV2Interval{
                            ExclusiveMaximum: sdk.Float64(9233.06),
                            ExclusiveMinimum: sdk.Float64(6806.97),
                            Maximum: sdk.Float64(8298.98),
                            Minimum: sdk.Float64(2871.19),
                        },
                    },
                },
                PrimaryProductID: sdk.String("reiciendis"),
                Promotions: []shared.GoogleCloudRetailV2Promotion{
                    shared.GoogleCloudRetailV2Promotion{
                        PromotionID: sdk.String("repudiandae"),
                    },
                },
                PublishTime: sdk.String("dicta"),
                Rating: &shared.GoogleCloudRetailV2Rating{
                    AverageRating: sdk.Float32(360.33),
                    RatingCount: sdk.Int(106429),
                    RatingHistogram: []int{
                        316488,
                    },
                },
                RetrievableFields: sdk.String("laboriosam"),
                Sizes: []string{
                    "a",
                },
                Tags: []string{
                    "magnam",
                    "saepe",
                    "consequuntur",
                },
                Title: sdk.String("Ms."),
                TTL: sdk.String("officiis"),
                Type: shared.GoogleCloudRetailV2ProductTypeEnumVariant.ToPointer(),
                URI: sdk.String("http://enraged-timber.name"),
            },
            SetMask: sdk.String("consequuntur"),
            SetTime: sdk.String("fugit"),
        },
        AccessToken: sdk.String("id"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("reprehenderit"),
        Fields: sdk.String("error"),
        Key: sdk.String("illo"),
        Name: "Melody Vandervort",
        OauthToken: sdk.String("doloremque"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("totam"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("qui"),
        Catalog: "cum",
        Dataset: sdk.String("iure"),
        DeviceType: sdk.String("necessitatibus"),
        Entity: sdk.String("ratione"),
        Fields: sdk.String("laborum"),
        Key: sdk.String("distinctio"),
        LanguageCodes: []string{
            "rem",
            "aliquam",
            "ad",
        },
        MaxSuggestions: sdk.Int64(997963),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("corporis"),
        QuotaUser: sdk.String("perspiciatis"),
        UploadType: sdk.String("nihil"),
        UploadProtocol: sdk.String("mollitia"),
        VisitorID: sdk.String("voluptas"),
    }, operations.RetailProjectsLocationsCatalogsCompleteQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2CompleteQueryResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2ImportCompletionDataRequest: &shared.GoogleCloudRetailV2ImportCompletionDataRequest{
            InputConfig: &shared.GoogleCloudRetailV2CompletionDataInputConfig{
                BigQuerySource: &shared.GoogleCloudRetailV2BigQuerySource{
                    DataSchema: sdk.String("maiores"),
                    DatasetID: sdk.String("reiciendis"),
                    GcsStagingDir: sdk.String("dolores"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(663866),
                        Month: sdk.Int(327988),
                        Year: sdk.Int(293144),
                    },
                    ProjectID: sdk.String("dolorum"),
                    TableID: sdk.String("nesciunt"),
                },
            },
            NotificationPubsubTopic: sdk.String("quae"),
        },
        AccessToken: sdk.String("recusandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("molestiae"),
        Key: sdk.String("ex"),
        OauthToken: sdk.String("ut"),
        Parent: "culpa",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("adipisci"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("laudantium"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2ControlInput: &shared.GoogleCloudRetailV2ControlInput{
            DisplayName: sdk.String("nemo"),
            Name: sdk.String("Cory Medhurst"),
            Rule: &shared.GoogleCloudRetailV2Rule{
                BoostAction: &shared.GoogleCloudRetailV2RuleBoostAction{
                    Boost: sdk.Float32(9704.94),
                    ProductsFilter: sdk.String("provident"),
                },
                Condition: &shared.GoogleCloudRetailV2Condition{
                    ActiveTimeRange: []shared.GoogleCloudRetailV2ConditionTimeRange{
                        shared.GoogleCloudRetailV2ConditionTimeRange{
                            EndTime: sdk.String("ullam"),
                            StartTime: sdk.String("quasi"),
                        },
                    },
                    QueryTerms: []shared.GoogleCloudRetailV2ConditionQueryTerm{
                        shared.GoogleCloudRetailV2ConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("nostrum"),
                        },
                        shared.GoogleCloudRetailV2ConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("mollitia"),
                        },
                        shared.GoogleCloudRetailV2ConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("provident"),
                        },
                    },
                },
                DoNotAssociateAction: &shared.GoogleCloudRetailV2RuleDoNotAssociateAction{
                    DoNotAssociateTerms: []string{
                        "animi",
                        "ex",
                        "aliquid",
                        "accusantium",
                    },
                    QueryTerms: []string{
                        "doloribus",
                        "ullam",
                        "in",
                        "nam",
                    },
                    Terms: []string{
                        "officia",
                        "laborum",
                        "placeat",
                        "modi",
                    },
                },
                FilterAction: &shared.GoogleCloudRetailV2RuleFilterAction{
                    Filter: sdk.String("voluptatibus"),
                },
                IgnoreAction: &shared.GoogleCloudRetailV2RuleIgnoreAction{
                    IgnoreTerms: []string{
                        "officiis",
                        "sapiente",
                        "cumque",
                    },
                },
                OnewaySynonymsAction: &shared.GoogleCloudRetailV2RuleOnewaySynonymsAction{
                    OnewayTerms: []string{
                        "rerum",
                    },
                    QueryTerms: []string{
                        "quis",
                        "inventore",
                    },
                    Synonyms: []string{
                        "cumque",
                    },
                },
                RedirectAction: &shared.GoogleCloudRetailV2RuleRedirectAction{
                    RedirectURI: sdk.String("quae"),
                },
                ReplacementAction: &shared.GoogleCloudRetailV2RuleReplacementAction{
                    QueryTerms: []string{
                        "velit",
                    },
                    ReplacementTerm: sdk.String("aspernatur"),
                    Term: sdk.String("eum"),
                },
                TwowaySynonymsAction: &shared.GoogleCloudRetailV2RuleTwowaySynonymsAction{
                    Synonyms: []string{
                        "rem",
                        "at",
                    },
                },
            },
            SearchSolutionUseCase: []shared.GoogleCloudRetailV2ControlSearchSolutionUseCaseEnum{
                shared.GoogleCloudRetailV2ControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified,
                shared.GoogleCloudRetailV2ControlSearchSolutionUseCaseEnumSearchSolutionUseCaseBrowse,
                shared.GoogleCloudRetailV2ControlSearchSolutionUseCaseEnumSearchSolutionUseCaseSearch,
                shared.GoogleCloudRetailV2ControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified,
            },
            SolutionTypes: []shared.GoogleCloudRetailV2ControlSolutionTypesEnum{
                shared.GoogleCloudRetailV2ControlSolutionTypesEnumSolutionTypeUnspecified,
                shared.GoogleCloudRetailV2ControlSolutionTypesEnumSolutionTypeRecommendation,
            },
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("soluta"),
        ControlID: sdk.String("hic"),
        Fields: sdk.String("illum"),
        Key: sdk.String("eaque"),
        OauthToken: sdk.String("earum"),
        Parent: "perspiciatis",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("debitis"),
        UploadProtocol: sdk.String("aliquid"),
    }, operations.RetailProjectsLocationsCatalogsControlsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2Control != nil {
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
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("fugit"),
        Fields: sdk.String("cumque"),
        Filter: sdk.String("fuga"),
        Key: sdk.String("ratione"),
        OauthToken: sdk.String("animi"),
        PageSize: sdk.Int64(898760),
        PageToken: sdk.String("nulla"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("et"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.RetailProjectsLocationsCatalogsControlsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ListControlsResponse != nil {
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
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("adipisci"),
        Catalog: "quasi",
        Fields: sdk.String("magni"),
        Key: sdk.String("doloribus"),
        OauthToken: sdk.String("nulla"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("necessitatibus"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.RetailProjectsLocationsCatalogsGetDefaultBranchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2GetDefaultBranchResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("iusto"),
        Fields: sdk.String("esse"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("maiores"),
        PageSize: sdk.Int64(967260),
        PageToken: sdk.String("vel"),
        Parent: "architecto",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.RetailProjectsLocationsCatalogsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ListCatalogsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2ModelInput: &shared.GoogleCloudRetailV2ModelInput{
            DisplayName: sdk.String("tempora"),
            FilteringOption: shared.GoogleCloudRetailV2ModelFilteringOptionEnumRecommendationsFilteringDisabled.ToPointer(),
            ModelFeaturesConfig: &shared.GoogleCloudRetailV2ModelModelFeaturesConfig{
                FrequentlyBoughtTogetherConfig: &shared.GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig{
                    ContextProductsType: shared.GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnumSingleContextProduct.ToPointer(),
                },
            },
            Name: sdk.String("Jeanne Beer II"),
            OptimizationObjective: sdk.String("fugiat"),
            PeriodicTuningState: shared.GoogleCloudRetailV2ModelPeriodicTuningStateEnumAllTuningDisabled.ToPointer(),
            TrainingState: shared.GoogleCloudRetailV2ModelTrainingStateEnumPaused.ToPointer(),
            Type: sdk.String("officia"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("perferendis"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("eum"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("iste"),
        Parent: "id",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("possimus"),
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
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("ad"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("enim"),
        PageSize: sdk.Int64(110477),
        PageToken: sdk.String("repellendus"),
        Parent: "ex",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quo"),
        UploadType: sdk.String("ex"),
        UploadProtocol: sdk.String("ut"),
    }, operations.RetailProjectsLocationsCatalogsModelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ListModelsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "voluptatem": "molestias",
            "cum": "aliquid",
            "beatae": "voluptatum",
        },
        AccessToken: sdk.String("omnis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("rerum"),
        Fields: sdk.String("est"),
        Key: sdk.String("culpa"),
        Name: "Miss Miranda Towne",
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatem"),
        UploadType: sdk.String("alias"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.RetailProjectsLocationsCatalogsModelsPauseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2Model != nil {
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
            "sapiente": "rem",
            "minus": "nemo",
        },
        AccessToken: sdk.String("asperiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("ullam"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("illum"),
        Name: "Myron Spinka",
        OauthToken: sdk.String("culpa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolor"),
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.RetailProjectsLocationsCatalogsModelsResumeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2Model != nil {
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
            "tempora": "dolor",
        },
        AccessToken: sdk.String("consequatur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("modi"),
        Key: sdk.String("fugit"),
        Name: "Marsha Bergstrom",
        OauthToken: sdk.String("ipsam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequuntur"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("quas"),
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
        GoogleCloudRetailV2AddControlRequest: &shared.GoogleCloudRetailV2AddControlRequest{
            ControlID: sdk.String("impedit"),
        },
        AccessToken: sdk.String("officiis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("necessitatibus"),
        Fields: sdk.String("sed"),
        Key: sdk.String("veniam"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("expedita"),
        ServingConfig: "eum",
        UploadType: sdk.String("vel"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ServingConfig != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2ServingConfig: &shared.GoogleCloudRetailV2ServingConfig{
            BoostControlIds: []string{
                "ab",
                "porro",
            },
            DisplayName: sdk.String("autem"),
            DiversityLevel: sdk.String("nobis"),
            DiversityType: shared.GoogleCloudRetailV2ServingConfigDiversityTypeEnumRuleBasedDiversity.ToPointer(),
            DoNotAssociateControlIds: []string{
                "consequuntur",
                "voluptatem",
                "exercitationem",
                "necessitatibus",
            },
            DynamicFacetSpec: &shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnumModeUnspecified.ToPointer(),
            },
            EnableCategoryFilterLevel: sdk.String("nisi"),
            FacetControlIds: []string{
                "vero",
                "est",
                "harum",
                "sequi",
            },
            FilterControlIds: []string{
                "repudiandae",
                "optio",
                "occaecati",
                "nemo",
            },
            IgnoreControlIds: []string{
                "blanditiis",
                "officia",
            },
            ModelID: sdk.String("voluptas"),
            Name: sdk.String("Ida Lubowitz"),
            OnewaySynonymsControlIds: []string{
                "nesciunt",
                "fuga",
            },
            PersonalizationSpec: &shared.GoogleCloudRetailV2SearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnumAuto.ToPointer(),
            },
            PriceRerankingLevel: sdk.String("incidunt"),
            RedirectControlIds: []string{
                "rem",
            },
            ReplacementControlIds: []string{
                "dicta",
                "nisi",
                "consequuntur",
                "consectetur",
            },
            SolutionTypes: []shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnum{
                shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnumSolutionTypeRecommendation,
            },
            TwowaySynonymsControlIds: []string{
                "soluta",
                "alias",
                "omnis",
                "eos",
            },
        },
        AccessToken: sdk.String("occaecati"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Fields: sdk.String("inventore"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("accusamus"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("distinctio"),
        ServingConfigID: sdk.String("omnis"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("minima"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ServingConfig != nil {
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
        AccessToken: sdk.String("maxime"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("temporibus"),
        Fields: sdk.String("quos"),
        Key: sdk.String("commodi"),
        Name: "Leslie Lebsack",
        OauthToken: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vero"),
        UploadType: sdk.String("voluptatem"),
        UploadProtocol: sdk.String("ipsam"),
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
        AccessToken: sdk.String("alias"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("non"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("enim"),
        OauthToken: sdk.String("sint"),
        PageSize: sdk.Int64(858778),
        PageToken: sdk.String("deserunt"),
        Parent: "esse",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nemo"),
        UploadType: sdk.String("reprehenderit"),
        UploadProtocol: sdk.String("est"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ListServingConfigsResponse != nil {
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
        GoogleCloudRetailV2ServingConfig: &shared.GoogleCloudRetailV2ServingConfig{
            BoostControlIds: []string{
                "accusamus",
                "impedit",
                "hic",
            },
            DisplayName: sdk.String("necessitatibus"),
            DiversityLevel: sdk.String("asperiores"),
            DiversityType: shared.GoogleCloudRetailV2ServingConfigDiversityTypeEnumRuleBasedDiversity.ToPointer(),
            DoNotAssociateControlIds: []string{
                "debitis",
                "delectus",
            },
            DynamicFacetSpec: &shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnumModeUnspecified.ToPointer(),
            },
            EnableCategoryFilterLevel: sdk.String("minus"),
            FacetControlIds: []string{
                "laborum",
                "consectetur",
                "velit",
            },
            FilterControlIds: []string{
                "ipsum",
                "impedit",
                "magni",
            },
            IgnoreControlIds: []string{
                "repudiandae",
                "nam",
                "dolore",
            },
            ModelID: sdk.String("iusto"),
            Name: sdk.String("Lillian Kunde"),
            OnewaySynonymsControlIds: []string{
                "quibusdam",
                "iure",
                "odit",
            },
            PersonalizationSpec: &shared.GoogleCloudRetailV2SearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnumDisabled.ToPointer(),
            },
            PriceRerankingLevel: sdk.String("vel"),
            RedirectControlIds: []string{
                "quibusdam",
                "inventore",
            },
            ReplacementControlIds: []string{
                "libero",
                "architecto",
                "voluptatibus",
                "quia",
            },
            SolutionTypes: []shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnum{
                shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnumSolutionTypeUnspecified,
                shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnumSolutionTypeUnspecified,
                shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnumSolutionTypeUnspecified,
                shared.GoogleCloudRetailV2ServingConfigSolutionTypesEnumSolutionTypeUnspecified,
            },
            TwowaySynonymsControlIds: []string{
                "ea",
                "beatae",
            },
        },
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eum"),
        Fields: sdk.String("velit"),
        Key: sdk.String("ut"),
        Name: "Merle Carroll",
        OauthToken: sdk.String("iste"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UpdateMask: sdk.String("alias"),
        UploadType: sdk.String("nisi"),
        UploadProtocol: sdk.String("itaque"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ServingConfig != nil {
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
        GoogleCloudRetailV2PredictRequestInput: &shared.GoogleCloudRetailV2PredictRequestInput{
            Filter: sdk.String("laborum"),
            Labels: map[string]string{
                "dolor": "iusto",
                "sit": "doloremque",
            },
            PageSize: sdk.Int(7468),
            PageToken: sdk.String("officia"),
            Params: map[string]interface{}{
                "ea": "quidem",
                "voluptas": "facilis",
                "placeat": "perspiciatis",
                "expedita": "deleniti",
            },
            UserEvent: &shared.GoogleCloudRetailV2UserEventInput{
                Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                    "voluptate": shared.GoogleCloudRetailV2CustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            6001.93,
                            8975.43,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "impedit",
                            "ipsam",
                            "corporis",
                        },
                    },
                    "est": shared.GoogleCloudRetailV2CustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            4568.85,
                            2885.7,
                            850.66,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "consectetur",
                            "vitae",
                            "inventore",
                            "dolorem",
                        },
                    },
                    "ad": shared.GoogleCloudRetailV2CustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            6113.28,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "nemo",
                            "soluta",
                        },
                    },
                    "libero": shared.GoogleCloudRetailV2CustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            6780.6,
                            4876.76,
                            1446.91,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "magni",
                        },
                    },
                },
                AttributionToken: sdk.String("vel"),
                CartID: sdk.String("quae"),
                CompletionDetail: &shared.GoogleCloudRetailV2CompletionDetail{
                    CompletionAttributionToken: sdk.String("quae"),
                    SelectedPosition: sdk.Int(264333),
                    SelectedSuggestion: sdk.String("neque"),
                },
                Entity: sdk.String("exercitationem"),
                EventTime: sdk.String("itaque"),
                EventType: sdk.String("et"),
                ExperimentIds: []string{
                    "unde",
                },
                Filter: sdk.String("nulla"),
                Offset: sdk.Int(714376),
                OrderBy: sdk.String("maxime"),
                PageCategories: []string{
                    "quia",
                },
                PageViewID: sdk.String("nostrum"),
                ProductDetails: []shared.GoogleCloudRetailV2ProductDetailInput{
                    shared.GoogleCloudRetailV2ProductDetailInput{
                        Product: &shared.GoogleCloudRetailV2ProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "dicta": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        7278.88,
                                        8544.6,
                                        6374.62,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "placeat",
                                        "sit",
                                        "iusto",
                                    },
                                },
                                "ipsa": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        800.61,
                                        493.48,
                                        5171.37,
                                        2928.88,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "distinctio",
                                        "voluptatem",
                                        "autem",
                                        "esse",
                                    },
                                },
                                "dolores": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1072.1,
                                        6686.06,
                                        8173.39,
                                        5459.18,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "provident",
                                        "accusamus",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2Audience{
                                AgeGroups: []string{
                                    "tempore",
                                    "sint",
                                    "ea",
                                    "autem",
                                },
                                Genders: []string{
                                    "rerum",
                                    "laudantium",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumInStock.ToPointer(),
                            AvailableQuantity: sdk.Int(889060),
                            AvailableTime: sdk.String("voluptatibus"),
                            Brands: []string{
                                "at",
                                "alias",
                                "quia",
                            },
                            Categories: []string{
                                "fuga",
                                "repudiandae",
                                "accusantium",
                            },
                            CollectionMemberIds: []string{
                                "officiis",
                                "eos",
                                "quibusdam",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                ColorFamilies: []string{
                                    "praesentium",
                                    "odit",
                                },
                                Colors: []string{
                                    "corporis",
                                },
                            },
                            Conditions: []string{
                                "earum",
                                "adipisci",
                                "recusandae",
                            },
                            Description: sdk.String("similique"),
                            ExpireTime: sdk.String("ut"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "beatae",
                                        "unde",
                                    },
                                    Type: sdk.String("molestiae"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "cupiditate",
                                        "fugit",
                                        "numquam",
                                        "numquam",
                                    },
                                    Type: sdk.String("nesciunt"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "officia",
                                        "dignissimos",
                                        "optio",
                                        "necessitatibus",
                                    },
                                    Type: sdk.String("corporis"),
                                },
                            },
                            Gtin: sdk.String("qui"),
                            ID: sdk.String("b895c537-c645-44ef-b0b3-4896c3ca5acf"),
                            Images: []shared.GoogleCloudRetailV2Image{
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(878601),
                                    URI: sdk.String("http://zany-subsidy.info"),
                                    Width: sdk.Int(441321),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(45234),
                                    URI: sdk.String("http://general-idiom.info"),
                                    Width: sdk.Int(567846),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(172195),
                                    URI: sdk.String("https://bossy-landscape.info"),
                                    Width: sdk.Int(866789),
                                },
                            },
                            LanguageCode: sdk.String("itaque"),
                            Materials: []string{
                                "optio",
                                "ex",
                                "quaerat",
                            },
                            Name: sdk.String("Cecelia Schroeder"),
                            Patterns: []string{
                                "dolorem",
                                "modi",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                Cost: sdk.Float32(593.83),
                                CurrencyCode: sdk.String("sint"),
                                OriginalPrice: sdk.Float32(8760.27),
                                Price: sdk.Float32(1949.01),
                                PriceEffectiveTime: sdk.String("repudiandae"),
                                PriceExpireTime: sdk.String("cum"),
                                PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(1201.2),
                                        ExclusiveMinimum: sdk.Float64(9369.28),
                                        Maximum: sdk.Float64(3344.74),
                                        Minimum: sdk.Float64(6592.68),
                                    },
                                    Price: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(1753.72),
                                        ExclusiveMinimum: sdk.Float64(7249.94),
                                        Maximum: sdk.Float64(1158.98),
                                        Minimum: sdk.Float64(1644.88),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("necessitatibus"),
                            Promotions: []shared.GoogleCloudRetailV2Promotion{
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("ipsa"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("ducimus"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("maiores"),
                                },
                            },
                            PublishTime: sdk.String("veritatis"),
                            Rating: &shared.GoogleCloudRetailV2Rating{
                                AverageRating: sdk.Float32(964.5),
                                RatingCount: sdk.Int(386447),
                                RatingHistogram: []int{
                                    729448,
                                    566506,
                                    578210,
                                    367917,
                                },
                            },
                            RetrievableFields: sdk.String("aliquam"),
                            Sizes: []string{
                                "doloribus",
                                "eligendi",
                            },
                            Tags: []string{
                                "enim",
                                "hic",
                                "animi",
                            },
                            Title: sdk.String("Ms."),
                            TTL: sdk.String("totam"),
                            Type: shared.GoogleCloudRetailV2ProductTypeEnumVariant.ToPointer(),
                            URI: sdk.String("http://austere-thermals.com"),
                        },
                        Quantity: sdk.Int(554645),
                    },
                    shared.GoogleCloudRetailV2ProductDetailInput{
                        Product: &shared.GoogleCloudRetailV2ProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "assumenda": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        7255.74,
                                        2440.32,
                                        385.57,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "impedit",
                                        "cum",
                                        "ipsum",
                                        "adipisci",
                                    },
                                },
                                "saepe": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        429.24,
                                        3397.56,
                                        3330.72,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "architecto",
                                        "cupiditate",
                                        "molestiae",
                                    },
                                },
                                "eligendi": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        2514.64,
                                        2981.87,
                                        9322.96,
                                        1509.35,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "veniam",
                                        "consequuntur",
                                        "facere",
                                        "laudantium",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2Audience{
                                AgeGroups: []string{
                                    "pariatur",
                                },
                                Genders: []string{
                                    "exercitationem",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                            AvailableQuantity: sdk.Int(242637),
                            AvailableTime: sdk.String("facilis"),
                            Brands: []string{
                                "nisi",
                                "voluptatibus",
                                "quaerat",
                            },
                            Categories: []string{
                                "distinctio",
                                "nisi",
                                "quis",
                            },
                            CollectionMemberIds: []string{
                                "libero",
                                "minus",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                ColorFamilies: []string{
                                    "facilis",
                                    "ipsum",
                                    "ad",
                                    "voluptatibus",
                                },
                                Colors: []string{
                                    "consequuntur",
                                    "debitis",
                                    "labore",
                                    "rerum",
                                },
                            },
                            Conditions: []string{
                                "reprehenderit",
                            },
                            Description: sdk.String("nostrum"),
                            ExpireTime: sdk.String("neque"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "rem",
                                        "eligendi",
                                        "fugiat",
                                    },
                                    Type: sdk.String("unde"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "ducimus",
                                        "dolor",
                                        "dicta",
                                        "error",
                                    },
                                    Type: sdk.String("porro"),
                                },
                            },
                            Gtin: sdk.String("vitae"),
                            ID: sdk.String("77d525f7-7b11-44ee-b52f-f785fc37814d"),
                            Images: []shared.GoogleCloudRetailV2Image{
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(790463),
                                    URI: sdk.String("https://male-trailpatrol.com"),
                                    Width: sdk.Int(805264),
                                },
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(136357),
                                    URI: sdk.String("https://rural-mid-course.name"),
                                    Width: sdk.Int(922299),
                                },
                            },
                            LanguageCode: sdk.String("rerum"),
                            Materials: []string{
                                "corporis",
                                "vero",
                            },
                            Name: sdk.String("Marcos Kerluke"),
                            Patterns: []string{
                                "commodi",
                                "aut",
                                "voluptatem",
                                "ad",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                Cost: sdk.Float32(609.95),
                                CurrencyCode: sdk.String("amet"),
                                OriginalPrice: sdk.Float32(8493.2),
                                Price: sdk.Float32(5068.63),
                                PriceEffectiveTime: sdk.String("quidem"),
                                PriceExpireTime: sdk.String("cum"),
                                PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(2304.11),
                                        ExclusiveMinimum: sdk.Float64(976.76),
                                        Maximum: sdk.Float64(1181.26),
                                        Minimum: sdk.Float64(5149.22),
                                    },
                                    Price: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(407.1),
                                        ExclusiveMinimum: sdk.Float64(9384.12),
                                        Maximum: sdk.Float64(4797.07),
                                        Minimum: sdk.Float64(2286.46),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("provident"),
                            Promotions: []shared.GoogleCloudRetailV2Promotion{
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("necessitatibus"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("provident"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("repudiandae"),
                                },
                            },
                            PublishTime: sdk.String("consequatur"),
                            Rating: &shared.GoogleCloudRetailV2Rating{
                                AverageRating: sdk.Float32(3662.44),
                                RatingCount: sdk.Int(475826),
                                RatingHistogram: []int{
                                    708771,
                                    545779,
                                    43975,
                                    574092,
                                },
                            },
                            RetrievableFields: sdk.String("accusamus"),
                            Sizes: []string{
                                "totam",
                            },
                            Tags: []string{
                                "voluptatem",
                            },
                            Title: sdk.String("Mrs."),
                            TTL: sdk.String("dolor"),
                            Type: shared.GoogleCloudRetailV2ProductTypeEnumTypeUnspecified.ToPointer(),
                            URI: sdk.String("https://edible-mukluk.name"),
                        },
                        Quantity: sdk.Int(107472),
                    },
                    shared.GoogleCloudRetailV2ProductDetailInput{
                        Product: &shared.GoogleCloudRetailV2ProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "labore": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        4567.04,
                                        323.56,
                                        209.5,
                                        6985.58,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "aperiam",
                                        "dignissimos",
                                    },
                                },
                                "repellat": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        7841.15,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "consectetur",
                                        "eligendi",
                                        "dignissimos",
                                    },
                                },
                                "consectetur": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        6205,
                                        8398.07,
                                        6396.22,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "tenetur",
                                    },
                                },
                                "aspernatur": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        9310.77,
                                        8483.46,
                                        6707.62,
                                        4904.2,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "qui",
                                        "consectetur",
                                        "repellat",
                                        "explicabo",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2Audience{
                                AgeGroups: []string{
                                    "exercitationem",
                                },
                                Genders: []string{
                                    "non",
                                    "ab",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                            AvailableQuantity: sdk.Int(943851),
                            AvailableTime: sdk.String("deserunt"),
                            Brands: []string{
                                "non",
                                "distinctio",
                                "in",
                                "exercitationem",
                            },
                            Categories: []string{
                                "numquam",
                                "repudiandae",
                            },
                            CollectionMemberIds: []string{
                                "in",
                                "explicabo",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                ColorFamilies: []string{
                                    "rem",
                                    "aperiam",
                                    "odit",
                                    "deleniti",
                                },
                                Colors: []string{
                                    "voluptate",
                                    "similique",
                                },
                            },
                            Conditions: []string{
                                "libero",
                                "magnam",
                            },
                            Description: sdk.String("sit"),
                            ExpireTime: sdk.String("modi"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "mollitia",
                                    },
                                    Type: sdk.String("dignissimos"),
                                },
                                shared.GoogleCloudRetailV2FulfillmentInfo{
                                    PlaceIds: []string{
                                        "nostrum",
                                        "molestiae",
                                        "veniam",
                                        "reiciendis",
                                    },
                                    Type: sdk.String("ab"),
                                },
                            },
                            Gtin: sdk.String("modi"),
                            ID: sdk.String("00e764ad-7334-4ec1-b781-b36a08088d10"),
                            Images: []shared.GoogleCloudRetailV2Image{
                                shared.GoogleCloudRetailV2Image{
                                    Height: sdk.Int(904827),
                                    URI: sdk.String("https://prime-strawman.name"),
                                    Width: sdk.Int(152027),
                                },
                            },
                            LanguageCode: sdk.String("voluptatem"),
                            Materials: []string{
                                "eveniet",
                            },
                            Name: sdk.String("Mark Gottlieb"),
                            Patterns: []string{
                                "harum",
                                "explicabo",
                                "beatae",
                                "aliquid",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                Cost: sdk.Float32(2646.49),
                                CurrencyCode: sdk.String("optio"),
                                OriginalPrice: sdk.Float32(9750.95),
                                Price: sdk.Float32(5629.48),
                                PriceEffectiveTime: sdk.String("officia"),
                                PriceExpireTime: sdk.String("libero"),
                                PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(5206.78),
                                        ExclusiveMinimum: sdk.Float64(1928.46),
                                        Maximum: sdk.Float64(3979.19),
                                        Minimum: sdk.Float64(4120.52),
                                    },
                                    Price: &shared.GoogleCloudRetailV2Interval{
                                        ExclusiveMaximum: sdk.Float64(7745.01),
                                        ExclusiveMinimum: sdk.Float64(4983.88),
                                        Maximum: sdk.Float64(1409.57),
                                        Minimum: sdk.Float64(2436.23),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("reiciendis"),
                            Promotions: []shared.GoogleCloudRetailV2Promotion{
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("nulla"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("laborum"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("natus"),
                                },
                                shared.GoogleCloudRetailV2Promotion{
                                    PromotionID: sdk.String("accusamus"),
                                },
                            },
                            PublishTime: sdk.String("doloremque"),
                            Rating: &shared.GoogleCloudRetailV2Rating{
                                AverageRating: sdk.Float32(3929.67),
                                RatingCount: sdk.Int(700856),
                                RatingHistogram: []int{
                                    913285,
                                    251627,
                                    524577,
                                    157884,
                                },
                            },
                            RetrievableFields: sdk.String("ullam"),
                            Sizes: []string{
                                "dicta",
                                "voluptatibus",
                                "eligendi",
                                "quae",
                            },
                            Tags: []string{
                                "architecto",
                                "architecto",
                                "enim",
                                "optio",
                            },
                            Title: sdk.String("Ms."),
                            TTL: sdk.String("perferendis"),
                            Type: shared.GoogleCloudRetailV2ProductTypeEnumVariant.ToPointer(),
                            URI: sdk.String("https://well-documented-order.com"),
                        },
                        Quantity: sdk.Int(552439),
                    },
                },
                PurchaseTransaction: &shared.GoogleCloudRetailV2PurchaseTransaction{
                    Cost: sdk.Float32(3563.15),
                    CurrencyCode: sdk.String("dolore"),
                    ID: sdk.String("4ec42def-cce8-4f19-b777-3e63562a7b40"),
                    Revenue: sdk.Float32(5220.62),
                    Tax: sdk.Float32(9781.54),
                },
                ReferrerURI: sdk.String("accusantium"),
                SearchQuery: sdk.String("veniam"),
                SessionID: sdk.String("saepe"),
                URI: sdk.String("http://subdued-encyclopedia.name"),
                UserInfo: &shared.GoogleCloudRetailV2UserInfo{
                    DirectUserRequest: sdk.Bool(false),
                    IPAddress: sdk.String("doloribus"),
                    UserAgent: sdk.String("fugiat"),
                    UserID: sdk.String("est"),
                },
                VisitorID: sdk.String("delectus"),
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("nesciunt"),
        Fields: sdk.String("similique"),
        Key: sdk.String("illo"),
        OauthToken: sdk.String("repellat"),
        Placement: "nemo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("possimus"),
        UploadProtocol: sdk.String("unde"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsPredictSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2PredictResponse != nil {
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
        GoogleCloudRetailV2RemoveControlRequest: &shared.GoogleCloudRetailV2RemoveControlRequest{
            ControlID: sdk.String("explicabo"),
        },
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("optio"),
        Fields: sdk.String("alias"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("nesciunt"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("commodi"),
        ServingConfig: "sapiente",
        UploadType: sdk.String("consequuntur"),
        UploadProtocol: sdk.String("veniam"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2ServingConfig != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2SearchRequest: &shared.GoogleCloudRetailV2SearchRequest{
            BoostSpec: &shared.GoogleCloudRetailV2SearchRequestBoostSpec{
                ConditionBoostSpecs: []shared.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec{
                    shared.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec{
                        Boost: sdk.Float32(5750.62),
                        Condition: sdk.String("ut"),
                    },
                    shared.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec{
                        Boost: sdk.Float32(2567.68),
                        Condition: sdk.String("tenetur"),
                    },
                    shared.GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec{
                        Boost: sdk.Float32(2367.9),
                        Condition: sdk.String("libero"),
                    },
                },
                SkipBoostSpecValidation: sdk.Bool(false),
            },
            Branch: sdk.String("in"),
            CanonicalFilter: sdk.String("minima"),
            DynamicFacetSpec: &shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnumDisabled.ToPointer(),
            },
            Entity: sdk.String("minus"),
            FacetSpecs: []shared.GoogleCloudRetailV2SearchRequestFacetSpec{
                shared.GoogleCloudRetailV2SearchRequestFacetSpec{
                    EnableDynamicPosition: sdk.Bool(false),
                    ExcludedFilterKeys: []string{
                        "hic",
                    },
                    FacetKey: &shared.GoogleCloudRetailV2SearchRequestFacetSpecFacetKey{
                        CaseInsensitive: sdk.Bool(false),
                        Contains: []string{
                            "quisquam",
                            "dolor",
                        },
                        Intervals: []shared.GoogleCloudRetailV2Interval{
                            shared.GoogleCloudRetailV2Interval{
                                ExclusiveMaximum: sdk.Float64(6837.27),
                                ExclusiveMinimum: sdk.Float64(3269.03),
                                Maximum: sdk.Float64(1024.46),
                                Minimum: sdk.Float64(1814.76),
                            },
                            shared.GoogleCloudRetailV2Interval{
                                ExclusiveMaximum: sdk.Float64(3970.26),
                                ExclusiveMinimum: sdk.Float64(1662.89),
                                Maximum: sdk.Float64(2766.5),
                                Minimum: sdk.Float64(2404.9),
                            },
                        },
                        Key: sdk.String("praesentium"),
                        OrderBy: sdk.String("dolor"),
                        Prefixes: []string{
                            "expedita",
                            "facilis",
                        },
                        Query: sdk.String("impedit"),
                        RestrictedValues: []string{
                            "nemo",
                        },
                        ReturnMinMax: sdk.Bool(false),
                    },
                    Limit: sdk.Int(633987),
                },
            },
            Filter: sdk.String("consequuntur"),
            Labels: map[string]string{
                "deserunt": "modi",
            },
            Offset: sdk.Int(332831),
            OrderBy: sdk.String("quod"),
            PageCategories: []string{
                "a",
                "quisquam",
                "enim",
                "doloribus",
            },
            PageSize: sdk.Int(826806),
            PageToken: sdk.String("officiis"),
            PersonalizationSpec: &shared.GoogleCloudRetailV2SearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnumModeUnspecified.ToPointer(),
            },
            Query: sdk.String("alias"),
            QueryExpansionSpec: &shared.GoogleCloudRetailV2SearchRequestQueryExpansionSpec{
                Condition: shared.GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnumDisabled.ToPointer(),
                PinUnexpandedResults: sdk.Bool(false),
            },
            SearchMode: shared.GoogleCloudRetailV2SearchRequestSearchModeEnumSearchModeUnspecified.ToPointer(),
            SpellCorrectionSpec: &shared.GoogleCloudRetailV2SearchRequestSpellCorrectionSpec{
                Mode: shared.GoogleCloudRetailV2SearchRequestSpellCorrectionSpecModeEnumAuto.ToPointer(),
            },
            UserInfo: &shared.GoogleCloudRetailV2UserInfo{
                DirectUserRequest: sdk.Bool(false),
                IPAddress: sdk.String("necessitatibus"),
                UserAgent: sdk.String("quia"),
                UserID: sdk.String("dicta"),
            },
            VariantRollupKeys: []string{
                "perspiciatis",
                "debitis",
            },
            VisitorID: sdk.String("ullam"),
        },
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perferendis"),
        Fields: sdk.String("veritatis"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("cumque"),
        Placement: "iure",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("nemo"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2SearchResponse != nil {
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
        GoogleCloudRetailV2SetDefaultBranchRequest: &shared.GoogleCloudRetailV2SetDefaultBranchRequest{
            BranchID: sdk.String("velit"),
            Force: sdk.Bool(false),
            Note: sdk.String("magnam"),
        },
        AccessToken: sdk.String("dignissimos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sed"),
        Catalog: "odio",
        Fields: sdk.String("natus"),
        Key: sdk.String("provident"),
        OauthToken: sdk.String("cum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("doloribus"),
        UploadType: sdk.String("facilis"),
        UploadProtocol: sdk.String("quidem"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("modi"),
        Ets: sdk.String("perspiciatis"),
        Fields: sdk.String("hic"),
        Key: sdk.String("cum"),
        OauthToken: sdk.String("aspernatur"),
        Parent: "libero",
        PrebuiltRule: sdk.String("nam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("incidunt"),
        RawJSON: sdk.String("recusandae"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("id"),
        URI: sdk.String("https://impressionable-scrip.biz"),
        UserEvent: sdk.String("illum"),
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
        GoogleCloudRetailV2ImportUserEventsRequestInput: &shared.GoogleCloudRetailV2ImportUserEventsRequestInput{
            ErrorsConfig: &shared.GoogleCloudRetailV2ImportErrorsConfig{
                GcsPrefix: sdk.String("illum"),
            },
            InputConfig: &shared.GoogleCloudRetailV2UserEventInputConfigInput{
                BigQuerySource: &shared.GoogleCloudRetailV2BigQuerySource{
                    DataSchema: sdk.String("facilis"),
                    DatasetID: sdk.String("non"),
                    GcsStagingDir: sdk.String("mollitia"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(827051),
                        Month: sdk.Int(927977),
                        Year: sdk.Int(718981),
                    },
                    ProjectID: sdk.String("pariatur"),
                    TableID: sdk.String("ad"),
                },
                GcsSource: &shared.GoogleCloudRetailV2GcsSource{
                    DataSchema: sdk.String("facere"),
                    InputUris: []string{
                        "eveniet",
                        "laborum",
                        "incidunt",
                    },
                },
                UserEventInlineSource: &shared.GoogleCloudRetailV2UserEventInlineSourceInput{
                    UserEvents: []shared.GoogleCloudRetailV2UserEventInput{
                        shared.GoogleCloudRetailV2UserEventInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "alias": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        6472.1,
                                        5604.51,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "est",
                                        "occaecati",
                                        "labore",
                                    },
                                },
                                "quo": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1435.28,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "magnam",
                                        "quaerat",
                                    },
                                },
                            },
                            AttributionToken: sdk.String("eligendi"),
                            CartID: sdk.String("hic"),
                            CompletionDetail: &shared.GoogleCloudRetailV2CompletionDetail{
                                CompletionAttributionToken: sdk.String("nostrum"),
                                SelectedPosition: sdk.Int(888265),
                                SelectedSuggestion: sdk.String("unde"),
                            },
                            Entity: sdk.String("nulla"),
                            EventTime: sdk.String("error"),
                            EventType: sdk.String("mollitia"),
                            ExperimentIds: []string{
                                "nostrum",
                                "esse",
                            },
                            Filter: sdk.String("corrupti"),
                            Offset: sdk.Int(684799),
                            OrderBy: sdk.String("facere"),
                            PageCategories: []string{
                                "quasi",
                                "deserunt",
                                "quod",
                                "laboriosam",
                            },
                            PageViewID: sdk.String("doloremque"),
                            ProductDetails: []shared.GoogleCloudRetailV2ProductDetailInput{
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "necessitatibus": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    93.75,
                                                    510.07,
                                                    1023.9,
                                                    6271.61,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "blanditiis",
                                                    "quae",
                                                    "magni",
                                                    "officiis",
                                                },
                                            },
                                            "sed": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7732.59,
                                                    559.81,
                                                    5676.93,
                                                    9509.56,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "laudantium",
                                                    "maiores",
                                                    "alias",
                                                    "asperiores",
                                                },
                                            },
                                            "rem": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    3805.95,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "doloribus",
                                                    "velit",
                                                    "eius",
                                                    "esse",
                                                },
                                            },
                                            "in": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    946.97,
                                                    2036.21,
                                                    8766.49,
                                                    5663.12,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "qui",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "beatae",
                                                "incidunt",
                                                "dicta",
                                                "odit",
                                            },
                                            Genders: []string{
                                                "rerum",
                                                "alias",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumPreorder.ToPointer(),
                                        AvailableQuantity: sdk.Int(424854),
                                        AvailableTime: sdk.String("accusantium"),
                                        Brands: []string{
                                            "laboriosam",
                                            "ex",
                                            "quas",
                                        },
                                        Categories: []string{
                                            "ullam",
                                        },
                                        CollectionMemberIds: []string{
                                            "similique",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                            ColorFamilies: []string{
                                                "quam",
                                                "magni",
                                            },
                                            Colors: []string{
                                                "delectus",
                                                "omnis",
                                                "sed",
                                            },
                                        },
                                        Conditions: []string{
                                            "maxime",
                                        },
                                        Description: sdk.String("quis"),
                                        ExpireTime: sdk.String("cupiditate"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "maiores",
                                                    "laudantium",
                                                    "velit",
                                                },
                                                Type: sdk.String("reiciendis"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "nemo",
                                                },
                                                Type: sdk.String("ipsa"),
                                            },
                                        },
                                        Gtin: sdk.String("quisquam"),
                                        ID: sdk.String("f876ffb9-01c6-4ecb-b4e2-43cf789ffafe"),
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(643419),
                                                URI: sdk.String("http://every-target.biz"),
                                                Width: sdk.Int(638609),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(902979),
                                                URI: sdk.String("http://valid-appearance.name"),
                                                Width: sdk.Int(770128),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(97896),
                                                URI: sdk.String("https://faint-semicolon.biz"),
                                                Width: sdk.Int(748023),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(620054),
                                                URI: sdk.String("https://critical-elephant.info"),
                                                Width: sdk.Int(800799),
                                            },
                                        },
                                        LanguageCode: sdk.String("quos"),
                                        Materials: []string{
                                            "amet",
                                            "molestiae",
                                            "amet",
                                        },
                                        Name: sdk.String("Edwin Bahringer V"),
                                        Patterns: []string{
                                            "sunt",
                                            "maiores",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(2050.11),
                                            CurrencyCode: sdk.String("odit"),
                                            OriginalPrice: sdk.Float32(9368.45),
                                            Price: sdk.Float32(3305.96),
                                            PriceEffectiveTime: sdk.String("ipsam"),
                                            PriceExpireTime: sdk.String("eaque"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(3503.87),
                                                    ExclusiveMinimum: sdk.Float64(3312.69),
                                                    Maximum: sdk.Float64(4699.94),
                                                    Minimum: sdk.Float64(3203.26),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(3941.61),
                                                    ExclusiveMinimum: sdk.Float64(9468.08),
                                                    Maximum: sdk.Float64(3382.81),
                                                    Minimum: sdk.Float64(8451.54),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("nemo"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("pariatur"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("sit"),
                                            },
                                        },
                                        PublishTime: sdk.String("quidem"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
                                            AverageRating: sdk.Float32(8310.31),
                                            RatingCount: sdk.Int(17768),
                                            RatingHistogram: []int{
                                                958146,
                                                152364,
                                                823572,
                                            },
                                        },
                                        RetrievableFields: sdk.String("repellat"),
                                        Sizes: []string{
                                            "architecto",
                                            "adipisci",
                                            "pariatur",
                                            "harum",
                                        },
                                        Tags: []string{
                                            "voluptatibus",
                                            "iure",
                                        },
                                        Title: sdk.String("Mr."),
                                        TTL: sdk.String("minus"),
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumVariant.ToPointer(),
                                        URI: sdk.String("https://esteemed-twist.name"),
                                    },
                                    Quantity: sdk.Int(621140),
                                },
                            },
                            PurchaseTransaction: &shared.GoogleCloudRetailV2PurchaseTransaction{
                                Cost: sdk.Float32(2524.73),
                                CurrencyCode: sdk.String("quasi"),
                                ID: sdk.String("aebc0b80-a692-44d3-b2ec-fcc8f895010f"),
                                Revenue: sdk.Float32(3421.04),
                                Tax: sdk.Float32(8698.48),
                            },
                            ReferrerURI: sdk.String("possimus"),
                            SearchQuery: sdk.String("neque"),
                            SessionID: sdk.String("pariatur"),
                            URI: sdk.String("http://well-worn-petal.com"),
                            UserInfo: &shared.GoogleCloudRetailV2UserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("quos"),
                                UserAgent: sdk.String("aperiam"),
                                UserID: sdk.String("non"),
                            },
                            VisitorID: sdk.String("voluptates"),
                        },
                        shared.GoogleCloudRetailV2UserEventInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "aliquam": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        5579.87,
                                        1624.5,
                                        9824.45,
                                        815.81,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "laudantium",
                                        "est",
                                    },
                                },
                                "dolor": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        2323.16,
                                        7681.95,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "voluptatum",
                                        "ducimus",
                                        "adipisci",
                                    },
                                },
                            },
                            AttributionToken: sdk.String("recusandae"),
                            CartID: sdk.String("tempora"),
                            CompletionDetail: &shared.GoogleCloudRetailV2CompletionDetail{
                                CompletionAttributionToken: sdk.String("blanditiis"),
                                SelectedPosition: sdk.Int(258059),
                                SelectedSuggestion: sdk.String("sequi"),
                            },
                            Entity: sdk.String("voluptatum"),
                            EventTime: sdk.String("sit"),
                            EventType: sdk.String("rerum"),
                            ExperimentIds: []string{
                                "tenetur",
                            },
                            Filter: sdk.String("autem"),
                            Offset: sdk.Int(694088),
                            OrderBy: sdk.String("totam"),
                            PageCategories: []string{
                                "deserunt",
                                "magni",
                                "nihil",
                                "voluptas",
                            },
                            PageViewID: sdk.String("animi"),
                            ProductDetails: []shared.GoogleCloudRetailV2ProductDetailInput{
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "fuga": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    2958.92,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "aliquam",
                                                    "iste",
                                                    "ullam",
                                                    "eligendi",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "voluptas",
                                                "occaecati",
                                                "unde",
                                                "illo",
                                            },
                                            Genders: []string{
                                                "inventore",
                                                "libero",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumInStock.ToPointer(),
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
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
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
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "maxime",
                                                    "accusantium",
                                                    "soluta",
                                                    "fugit",
                                                },
                                                Type: sdk.String("pariatur"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
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
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(642234),
                                                URI: sdk.String("https://slippery-osprey.biz"),
                                                Width: sdk.Int(985379),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(156098),
                                                URI: sdk.String("https://pristine-sailor.info"),
                                                Width: sdk.Int(313590),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(430235),
                                                URI: sdk.String("http://thin-contention.com"),
                                                Width: sdk.Int(487148),
                                            },
                                            shared.GoogleCloudRetailV2Image{
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
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(1220.85),
                                            CurrencyCode: sdk.String("impedit"),
                                            OriginalPrice: sdk.Float32(2596),
                                            Price: sdk.Float32(5283.2),
                                            PriceEffectiveTime: sdk.String("ipsa"),
                                            PriceExpireTime: sdk.String("at"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(2098.6),
                                                    ExclusiveMinimum: sdk.Float64(9998.54),
                                                    Maximum: sdk.Float64(1323.05),
                                                    Minimum: sdk.Float64(802.84),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(1932.36),
                                                    ExclusiveMinimum: sdk.Float64(1430.78),
                                                    Maximum: sdk.Float64(6854.67),
                                                    Minimum: sdk.Float64(9431.03),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("eaque"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("architecto"),
                                            },
                                        },
                                        PublishTime: sdk.String("aperiam"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
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
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("https://humongous-check.com"),
                                    },
                                    Quantity: sdk.Int(627341),
                                },
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "animi": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    9454.19,
                                                    4934.07,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "animi",
                                                    "laudantium",
                                                },
                                            },
                                            "esse": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    9351.61,
                                                    2464.02,
                                                    8847.65,
                                                    2633.46,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "itaque",
                                                    "dignissimos",
                                                    "ipsam",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "impedit",
                                            },
                                            Genders: []string{
                                                "quis",
                                                "facilis",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumInStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(284885),
                                        AvailableTime: sdk.String("quaerat"),
                                        Brands: []string{
                                            "praesentium",
                                        },
                                        Categories: []string{
                                            "dolor",
                                            "expedita",
                                            "libero",
                                            "iste",
                                        },
                                        CollectionMemberIds: []string{
                                            "minus",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                            ColorFamilies: []string{
                                                "temporibus",
                                                "sint",
                                                "iusto",
                                            },
                                            Colors: []string{
                                                "accusamus",
                                                "aperiam",
                                            },
                                        },
                                        Conditions: []string{
                                            "laudantium",
                                            "tempora",
                                            "quae",
                                            "omnis",
                                        },
                                        Description: sdk.String("illum"),
                                        ExpireTime: sdk.String("rem"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "modi",
                                                    "earum",
                                                    "architecto",
                                                },
                                                Type: sdk.String("aliquam"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "maiores",
                                                    "sequi",
                                                },
                                                Type: sdk.String("saepe"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "esse",
                                                },
                                                Type: sdk.String("debitis"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "quisquam",
                                                    "cumque",
                                                    "aliquam",
                                                    "dolorum",
                                                },
                                                Type: sdk.String("deserunt"),
                                            },
                                        },
                                        Gtin: sdk.String("ad"),
                                        ID: sdk.String("f3cabd90-5a97-42e0-9672-8227b2d30947"),
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(718119),
                                                URI: sdk.String("https://juvenile-plant.biz"),
                                                Width: sdk.Int(964201),
                                            },
                                        },
                                        LanguageCode: sdk.String("culpa"),
                                        Materials: []string{
                                            "iusto",
                                            "quod",
                                            "voluptatibus",
                                        },
                                        Name: sdk.String("Sheila Hermann"),
                                        Patterns: []string{
                                            "animi",
                                            "recusandae",
                                            "corporis",
                                            "non",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(9003.68),
                                            CurrencyCode: sdk.String("distinctio"),
                                            OriginalPrice: sdk.Float32(9832.75),
                                            Price: sdk.Float32(3865.38),
                                            PriceEffectiveTime: sdk.String("voluptatem"),
                                            PriceExpireTime: sdk.String("optio"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(1936.23),
                                                    ExclusiveMinimum: sdk.Float64(1257.07),
                                                    Maximum: sdk.Float64(1122.5),
                                                    Minimum: sdk.Float64(9730.96),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(423.64),
                                                    ExclusiveMinimum: sdk.Float64(1494.98),
                                                    Maximum: sdk.Float64(2277.41),
                                                    Minimum: sdk.Float64(6995.36),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("in"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("temporibus"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("ratione"),
                                            },
                                        },
                                        PublishTime: sdk.String("dolor"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
                                            AverageRating: sdk.Float32(3908.54),
                                            RatingCount: sdk.Int(493945),
                                            RatingHistogram: []int{
                                                929619,
                                                114767,
                                                667215,
                                                33093,
                                            },
                                        },
                                        RetrievableFields: sdk.String("quod"),
                                        Sizes: []string{
                                            "quos",
                                            "possimus",
                                            "maiores",
                                            "odio",
                                        },
                                        Tags: []string{
                                            "sapiente",
                                            "aperiam",
                                            "similique",
                                        },
                                        Title: sdk.String("Mr."),
                                        TTL: sdk.String("provident"),
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumPrimary.ToPointer(),
                                        URI: sdk.String("https://outlandish-abbreviation.net"),
                                    },
                                    Quantity: sdk.Int(196700),
                                },
                            },
                            PurchaseTransaction: &shared.GoogleCloudRetailV2PurchaseTransaction{
                                Cost: sdk.Float32(4130.86),
                                CurrencyCode: sdk.String("labore"),
                                ID: sdk.String("b7c15dfb-ace1-488b-9c4e-e2c8c6ce611f"),
                                Revenue: sdk.Float32(9308.77),
                                Tax: sdk.Float32(8754.52),
                            },
                            ReferrerURI: sdk.String("quidem"),
                            SearchQuery: sdk.String("illo"),
                            SessionID: sdk.String("quo"),
                            URI: sdk.String("http://spotless-rage.net"),
                            UserInfo: &shared.GoogleCloudRetailV2UserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("cum"),
                                UserAgent: sdk.String("suscipit"),
                                UserID: sdk.String("saepe"),
                            },
                            VisitorID: sdk.String("earum"),
                        },
                        shared.GoogleCloudRetailV2UserEventInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "nihil": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        2159.59,
                                        4984.35,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "rerum",
                                        "deserunt",
                                        "odit",
                                    },
                                },
                                "ad": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1068.06,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "esse",
                                        "magnam",
                                    },
                                },
                                "odio": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        7714.06,
                                        5862.77,
                                        724.22,
                                        3486.65,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "illum",
                                        "fugit",
                                        "maxime",
                                    },
                                },
                                "dolorum": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        3419.83,
                                        8473.08,
                                        8450.86,
                                        4144.56,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "explicabo",
                                        "consectetur",
                                    },
                                },
                            },
                            AttributionToken: sdk.String("temporibus"),
                            CartID: sdk.String("optio"),
                            CompletionDetail: &shared.GoogleCloudRetailV2CompletionDetail{
                                CompletionAttributionToken: sdk.String("ipsa"),
                                SelectedPosition: sdk.Int(978655),
                                SelectedSuggestion: sdk.String("exercitationem"),
                            },
                            Entity: sdk.String("culpa"),
                            EventTime: sdk.String("repudiandae"),
                            EventType: sdk.String("aspernatur"),
                            ExperimentIds: []string{
                                "neque",
                                "officia",
                                "suscipit",
                                "harum",
                            },
                            Filter: sdk.String("ducimus"),
                            Offset: sdk.Int(42454),
                            OrderBy: sdk.String("perferendis"),
                            PageCategories: []string{
                                "iusto",
                                "corrupti",
                                "molestiae",
                            },
                            PageViewID: sdk.String("quis"),
                            ProductDetails: []shared.GoogleCloudRetailV2ProductDetailInput{
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "quaerat": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    9569.42,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "est",
                                                    "iure",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "provident",
                                                "laudantium",
                                                "nam",
                                                "nemo",
                                            },
                                            Genders: []string{
                                                "ipsam",
                                                "minima",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumInStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(19691),
                                        AvailableTime: sdk.String("corrupti"),
                                        Brands: []string{
                                            "fugiat",
                                        },
                                        Categories: []string{
                                            "doloremque",
                                            "cum",
                                        },
                                        CollectionMemberIds: []string{
                                            "similique",
                                            "porro",
                                            "impedit",
                                            "nisi",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                            ColorFamilies: []string{
                                                "soluta",
                                                "fugiat",
                                                "laboriosam",
                                                "nam",
                                            },
                                            Colors: []string{
                                                "maiores",
                                                "consectetur",
                                            },
                                        },
                                        Conditions: []string{
                                            "maxime",
                                            "cupiditate",
                                            "voluptatem",
                                            "provident",
                                        },
                                        Description: sdk.String("adipisci"),
                                        ExpireTime: sdk.String("accusantium"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "omnis",
                                                    "explicabo",
                                                    "vel",
                                                    "cum",
                                                },
                                                Type: sdk.String("id"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "fugit",
                                                    "ipsam",
                                                    "nostrum",
                                                    "sequi",
                                                },
                                                Type: sdk.String("voluptatum"),
                                            },
                                        },
                                        Gtin: sdk.String("quasi"),
                                        ID: sdk.String("9b474b0e-d20e-4562-88ff-f639a910abdc"),
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(733763),
                                                URI: sdk.String("http://costly-gerbil.info"),
                                                Width: sdk.Int(393122),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(397160),
                                                URI: sdk.String("https://hilarious-syrup.com"),
                                                Width: sdk.Int(929067),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(790305),
                                                URI: sdk.String("http://acceptable-colonisation.com"),
                                                Width: sdk.Int(112224),
                                            },
                                        },
                                        LanguageCode: sdk.String("quidem"),
                                        Materials: []string{
                                            "amet",
                                        },
                                        Name: sdk.String("Angel Lakin"),
                                        Patterns: []string{
                                            "tempore",
                                            "amet",
                                            "debitis",
                                            "nobis",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(9890.89),
                                            CurrencyCode: sdk.String("temporibus"),
                                            OriginalPrice: sdk.Float32(6628.57),
                                            Price: sdk.Float32(5420.17),
                                            PriceEffectiveTime: sdk.String("quibusdam"),
                                            PriceExpireTime: sdk.String("sit"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(7780.39),
                                                    ExclusiveMinimum: sdk.Float64(3299.73),
                                                    Maximum: sdk.Float64(3075.32),
                                                    Minimum: sdk.Float64(5911.43),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(8756.93),
                                                    ExclusiveMinimum: sdk.Float64(9380.94),
                                                    Maximum: sdk.Float64(427.63),
                                                    Minimum: sdk.Float64(2175.04),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("alias"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("tempora"),
                                            },
                                        },
                                        PublishTime: sdk.String("perspiciatis"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
                                            AverageRating: sdk.Float32(4620.97),
                                            RatingCount: sdk.Int(541009),
                                            RatingHistogram: []int{
                                                406493,
                                                101770,
                                                953564,
                                            },
                                        },
                                        RetrievableFields: sdk.String("laborum"),
                                        Sizes: []string{
                                            "quod",
                                        },
                                        Tags: []string{
                                            "qui",
                                            "accusantium",
                                            "commodi",
                                            "atque",
                                        },
                                        Title: sdk.String("Ms."),
                                        TTL: sdk.String("tenetur"),
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumPrimary.ToPointer(),
                                        URI: sdk.String("http://starchy-browser.org"),
                                    },
                                    Quantity: sdk.Int(968689),
                                },
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "voluptate": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    8156.11,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "fuga",
                                                    "ab",
                                                    "ex",
                                                    "consectetur",
                                                },
                                            },
                                            "maiores": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    6571.41,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "eligendi",
                                                },
                                            },
                                            "voluptatum": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    6716.9,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "nihil",
                                                    "tenetur",
                                                    "sapiente",
                                                },
                                            },
                                            "velit": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    2502.98,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "illum",
                                                    "at",
                                                    "tenetur",
                                                    "molestias",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "esse",
                                                "laborum",
                                            },
                                            Genders: []string{
                                                "voluptates",
                                                "eum",
                                                "quasi",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumOutOfStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(484942),
                                        AvailableTime: sdk.String("commodi"),
                                        Brands: []string{
                                            "aliquid",
                                            "mollitia",
                                            "quidem",
                                            "explicabo",
                                        },
                                        Categories: []string{
                                            "nulla",
                                        },
                                        CollectionMemberIds: []string{
                                            "natus",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                            ColorFamilies: []string{
                                                "a",
                                                "impedit",
                                                "unde",
                                                "ut",
                                            },
                                            Colors: []string{
                                                "voluptas",
                                                "doloribus",
                                                "recusandae",
                                                "quisquam",
                                            },
                                        },
                                        Conditions: []string{
                                            "dignissimos",
                                            "iste",
                                            "provident",
                                            "dolor",
                                        },
                                        Description: sdk.String("sint"),
                                        ExpireTime: sdk.String("aperiam"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "laboriosam",
                                                    "laborum",
                                                },
                                                Type: sdk.String("autem"),
                                            },
                                        },
                                        Gtin: sdk.String("assumenda"),
                                        ID: sdk.String("2d000355-338c-4ec0-86fa-21e9152cb311"),
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(107042),
                                                URI: sdk.String("http://lively-recliner.name"),
                                                Width: sdk.Int(900676),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(218783),
                                                URI: sdk.String("https://mundane-steam.net"),
                                                Width: sdk.Int(32945),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(249803),
                                                URI: sdk.String("http://active-liner.net"),
                                                Width: sdk.Int(415953),
                                            },
                                        },
                                        LanguageCode: sdk.String("quibusdam"),
                                        Materials: []string{
                                            "voluptas",
                                        },
                                        Name: sdk.String("Lana West"),
                                        Patterns: []string{
                                            "ullam",
                                            "perspiciatis",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(37.09),
                                            CurrencyCode: sdk.String("ex"),
                                            OriginalPrice: sdk.Float32(8450.78),
                                            Price: sdk.Float32(1168.67),
                                            PriceEffectiveTime: sdk.String("quia"),
                                            PriceExpireTime: sdk.String("commodi"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(2041.44),
                                                    ExclusiveMinimum: sdk.Float64(8436.59),
                                                    Maximum: sdk.Float64(2552.64),
                                                    Minimum: sdk.Float64(5231.09),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(8846.22),
                                                    ExclusiveMinimum: sdk.Float64(6084.02),
                                                    Maximum: sdk.Float64(2064.51),
                                                    Minimum: sdk.Float64(3598.74),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("quod"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("placeat"),
                                            },
                                        },
                                        PublishTime: sdk.String("excepturi"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
                                            AverageRating: sdk.Float32(9270.21),
                                            RatingCount: sdk.Int(551778),
                                            RatingHistogram: []int{
                                                956130,
                                            },
                                        },
                                        RetrievableFields: sdk.String("ipsum"),
                                        Sizes: []string{
                                            "soluta",
                                        },
                                        Tags: []string{
                                            "sequi",
                                            "recusandae",
                                            "labore",
                                            "adipisci",
                                        },
                                        Title: sdk.String("Mr."),
                                        TTL: sdk.String("aperiam"),
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumTypeUnspecified.ToPointer(),
                                        URI: sdk.String("https://leading-clerk.com"),
                                    },
                                    Quantity: sdk.Int(396884),
                                },
                            },
                            PurchaseTransaction: &shared.GoogleCloudRetailV2PurchaseTransaction{
                                Cost: sdk.Float32(3216.97),
                                CurrencyCode: sdk.String("voluptate"),
                                ID: sdk.String("65066418-70d9-4d21-b9ad-030c4ecc11a0"),
                                Revenue: sdk.Float32(5515.76),
                                Tax: sdk.Float32(1917.24),
                            },
                            ReferrerURI: sdk.String("iure"),
                            SearchQuery: sdk.String("tempora"),
                            SessionID: sdk.String("eos"),
                            URI: sdk.String("https://anchored-gigantism.name"),
                            UserInfo: &shared.GoogleCloudRetailV2UserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("facilis"),
                                UserAgent: sdk.String("laudantium"),
                                UserID: sdk.String("ullam"),
                            },
                            VisitorID: sdk.String("aut"),
                        },
                        shared.GoogleCloudRetailV2UserEventInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                "officia": shared.GoogleCloudRetailV2CustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        3613.71,
                                        8843.25,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "sapiente",
                                        "esse",
                                    },
                                },
                            },
                            AttributionToken: sdk.String("neque"),
                            CartID: sdk.String("quidem"),
                            CompletionDetail: &shared.GoogleCloudRetailV2CompletionDetail{
                                CompletionAttributionToken: sdk.String("quisquam"),
                                SelectedPosition: sdk.Int(506245),
                                SelectedSuggestion: sdk.String("tempora"),
                            },
                            Entity: sdk.String("ipsam"),
                            EventTime: sdk.String("officiis"),
                            EventType: sdk.String("sequi"),
                            ExperimentIds: []string{
                                "voluptatem",
                            },
                            Filter: sdk.String("est"),
                            Offset: sdk.Int(226181),
                            OrderBy: sdk.String("veritatis"),
                            PageCategories: []string{
                                "voluptatibus",
                                "numquam",
                                "rerum",
                            },
                            PageViewID: sdk.String("dolorum"),
                            ProductDetails: []shared.GoogleCloudRetailV2ProductDetailInput{
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "excepturi": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    4768.01,
                                                    7738.33,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "animi",
                                                    "voluptatum",
                                                    "aliquid",
                                                },
                                            },
                                            "nihil": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7594.51,
                                                    2796.73,
                                                    1782.01,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "dolores",
                                                    "aliquid",
                                                },
                                            },
                                            "eum": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    3207.48,
                                                    5522.87,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "suscipit",
                                                },
                                            },
                                            "quibusdam": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7716.03,
                                                    6329.39,
                                                    5439.22,
                                                    9139.09,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "nemo",
                                                    "illo",
                                                    "doloribus",
                                                    "cumque",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "modi",
                                                "cumque",
                                                "ipsam",
                                            },
                                            Genders: []string{
                                                "ipsum",
                                                "accusamus",
                                                "quisquam",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                                        AvailableQuantity: sdk.Int(144240),
                                        AvailableTime: sdk.String("quo"),
                                        Brands: []string{
                                            "mollitia",
                                            "id",
                                            "quibusdam",
                                            "ipsa",
                                        },
                                        Categories: []string{
                                            "placeat",
                                            "quam",
                                            "similique",
                                            "delectus",
                                        },
                                        CollectionMemberIds: []string{
                                            "facere",
                                            "nobis",
                                            "at",
                                            "molestias",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                            ColorFamilies: []string{
                                                "temporibus",
                                            },
                                            Colors: []string{
                                                "incidunt",
                                                "numquam",
                                                "corrupti",
                                                "similique",
                                            },
                                        },
                                        Conditions: []string{
                                            "esse",
                                            "reiciendis",
                                        },
                                        Description: sdk.String("iste"),
                                        ExpireTime: sdk.String("amet"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "impedit",
                                                },
                                                Type: sdk.String("minima"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "blanditiis",
                                                    "quas",
                                                    "voluptatem",
                                                },
                                                Type: sdk.String("provident"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "ipsum",
                                                    "vero",
                                                    "fuga",
                                                },
                                                Type: sdk.String("facilis"),
                                            },
                                        },
                                        Gtin: sdk.String("maiores"),
                                        ID: sdk.String("9ef3ffdd-9f7f-4079-af4d-35724cdb0f4d"),
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(555663),
                                                URI: sdk.String("http://busy-lever.info"),
                                                Width: sdk.Int(854800),
                                            },
                                        },
                                        LanguageCode: sdk.String("enim"),
                                        Materials: []string{
                                            "laudantium",
                                            "modi",
                                        },
                                        Name: sdk.String("Eloise Stoltenberg"),
                                        Patterns: []string{
                                            "enim",
                                            "animi",
                                            "unde",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(614.98),
                                            CurrencyCode: sdk.String("eum"),
                                            OriginalPrice: sdk.Float32(3414.05),
                                            Price: sdk.Float32(9090.93),
                                            PriceEffectiveTime: sdk.String("laboriosam"),
                                            PriceExpireTime: sdk.String("ratione"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(5054.73),
                                                    ExclusiveMinimum: sdk.Float64(6977.29),
                                                    Maximum: sdk.Float64(8486.49),
                                                    Minimum: sdk.Float64(9703.76),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(8095.67),
                                                    ExclusiveMinimum: sdk.Float64(1752.75),
                                                    Maximum: sdk.Float64(97.77),
                                                    Minimum: sdk.Float64(2019.66),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("quia"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("voluptas"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("quo"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("laudantium"),
                                            },
                                        },
                                        PublishTime: sdk.String("dignissimos"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
                                            AverageRating: sdk.Float32(6069.89),
                                            RatingCount: sdk.Int(609687),
                                            RatingHistogram: []int{
                                                212682,
                                            },
                                        },
                                        RetrievableFields: sdk.String("quidem"),
                                        Sizes: []string{
                                            "debitis",
                                            "vitae",
                                        },
                                        Tags: []string{
                                            "ad",
                                        },
                                        Title: sdk.String("Ms."),
                                        TTL: sdk.String("ut"),
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("http://practical-troop.com"),
                                    },
                                    Quantity: sdk.Int(181267),
                                },
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "ex": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    6155.97,
                                                    1120.14,
                                                    9465.58,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "aspernatur",
                                                    "eligendi",
                                                    "repudiandae",
                                                },
                                            },
                                            "dicta": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    3562.56,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "inventore",
                                                    "voluptate",
                                                },
                                            },
                                            "sed": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    524.97,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "amet",
                                                    "voluptate",
                                                },
                                            },
                                            "voluptate": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7914.21,
                                                    9550.65,
                                                    6863.01,
                                                    5189.26,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "at",
                                                    "doloribus",
                                                    "omnis",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "exercitationem",
                                                "voluptates",
                                            },
                                            Genders: []string{
                                                "quis",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumOutOfStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(426481),
                                        AvailableTime: sdk.String("rem"),
                                        Brands: []string{
                                            "aperiam",
                                            "perspiciatis",
                                        },
                                        Categories: []string{
                                            "itaque",
                                        },
                                        CollectionMemberIds: []string{
                                            "cumque",
                                            "dolor",
                                            "repellendus",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                            ColorFamilies: []string{
                                                "minus",
                                                "minima",
                                                "a",
                                                "beatae",
                                            },
                                            Colors: []string{
                                                "veritatis",
                                            },
                                        },
                                        Conditions: []string{
                                            "earum",
                                            "laborum",
                                            "dicta",
                                            "voluptatem",
                                        },
                                        Description: sdk.String("odit"),
                                        ExpireTime: sdk.String("aliquid"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "numquam",
                                                    "architecto",
                                                },
                                                Type: sdk.String("est"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "facere",
                                                    "vitae",
                                                },
                                                Type: sdk.String("omnis"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "sapiente",
                                                },
                                                Type: sdk.String("officiis"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "quia",
                                                    "vitae",
                                                    "odio",
                                                },
                                                Type: sdk.String("quas"),
                                            },
                                        },
                                        Gtin: sdk.String("ipsa"),
                                        ID: sdk.String("bccc0dbb-ddb4-4847-88fb-4e391e6bc158"),
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(286486),
                                                URI: sdk.String("https://firsthand-tussle.info"),
                                                Width: sdk.Int(256813),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(314733),
                                                URI: sdk.String("https://nutritious-tripod.net"),
                                                Width: sdk.Int(234845),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(268749),
                                                URI: sdk.String("http://colossal-gem.com"),
                                                Width: sdk.Int(910410),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(575753),
                                                URI: sdk.String("https://dental-appreciation.com"),
                                                Width: sdk.Int(773262),
                                            },
                                        },
                                        LanguageCode: sdk.String("recusandae"),
                                        Materials: []string{
                                            "deleniti",
                                            "est",
                                        },
                                        Name: sdk.String("Mamie Spinka"),
                                        Patterns: []string{
                                            "in",
                                            "culpa",
                                            "doloremque",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(6813.36),
                                            CurrencyCode: sdk.String("dicta"),
                                            OriginalPrice: sdk.Float32(1039.01),
                                            Price: sdk.Float32(3816.54),
                                            PriceEffectiveTime: sdk.String("eligendi"),
                                            PriceExpireTime: sdk.String("officiis"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(4909.56),
                                                    ExclusiveMinimum: sdk.Float64(1480.38),
                                                    Maximum: sdk.Float64(1887.82),
                                                    Minimum: sdk.Float64(8239.9),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(3115.48),
                                                    ExclusiveMinimum: sdk.Float64(149.76),
                                                    Maximum: sdk.Float64(6205.34),
                                                    Minimum: sdk.Float64(4573.89),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("delectus"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("ratione"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("ipsa"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("debitis"),
                                            },
                                        },
                                        PublishTime: sdk.String("iste"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
                                            AverageRating: sdk.Float32(6467.76),
                                            RatingCount: sdk.Int(944405),
                                            RatingHistogram: []int{
                                                160260,
                                                370195,
                                            },
                                        },
                                        RetrievableFields: sdk.String("libero"),
                                        Sizes: []string{
                                            "omnis",
                                        },
                                        Tags: []string{
                                            "qui",
                                        },
                                        Title: sdk.String("Mr."),
                                        TTL: sdk.String("consequatur"),
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumTypeUnspecified.ToPointer(),
                                        URI: sdk.String("http://thorough-magnitude.biz"),
                                    },
                                    Quantity: sdk.Int(942780),
                                },
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "deserunt": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7143,
                                                    4802.95,
                                                    4938.65,
                                                    5920.88,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "assumenda",
                                                    "sunt",
                                                    "odit",
                                                },
                                            },
                                            "vero": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7607.93,
                                                    988.05,
                                                    9981.99,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "magnam",
                                                    "perspiciatis",
                                                    "amet",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "sunt",
                                                "nemo",
                                                "delectus",
                                            },
                                            Genders: []string{
                                                "porro",
                                                "quaerat",
                                                "magni",
                                                "cumque",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumOutOfStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(448482),
                                        AvailableTime: sdk.String("commodi"),
                                        Brands: []string{
                                            "sed",
                                            "minus",
                                            "consequuntur",
                                            "possimus",
                                        },
                                        Categories: []string{
                                            "harum",
                                            "aliquam",
                                            "eligendi",
                                            "hic",
                                        },
                                        CollectionMemberIds: []string{
                                            "illo",
                                            "nobis",
                                            "esse",
                                            "nisi",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                            ColorFamilies: []string{
                                                "sequi",
                                            },
                                            Colors: []string{
                                                "reiciendis",
                                            },
                                        },
                                        Conditions: []string{
                                            "numquam",
                                            "vitae",
                                            "maiores",
                                        },
                                        Description: sdk.String("nam"),
                                        ExpireTime: sdk.String("architecto"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "eos",
                                                    "dolorem",
                                                    "hic",
                                                    "repellendus",
                                                },
                                                Type: sdk.String("nam"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "magnam",
                                                },
                                                Type: sdk.String("pariatur"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "autem",
                                                    "tempore",
                                                    "recusandae",
                                                },
                                                Type: sdk.String("nostrum"),
                                            },
                                        },
                                        Gtin: sdk.String("officia"),
                                        ID: sdk.String("685998e2-2ae2-40da-96fc-2b271a289c57"),
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(523156),
                                                URI: sdk.String("http://exhausted-treasury.name"),
                                                Width: sdk.Int(58567),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(302905),
                                                URI: sdk.String("http://noxious-squatter.biz"),
                                                Width: sdk.Int(163673),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(159469),
                                                URI: sdk.String("http://impartial-full.info"),
                                                Width: sdk.Int(584199),
                                            },
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(268109),
                                                URI: sdk.String("http://compassionate-discussion.com"),
                                                Width: sdk.Int(486944),
                                            },
                                        },
                                        LanguageCode: sdk.String("sit"),
                                        Materials: []string{
                                            "tempora",
                                            "delectus",
                                            "quam",
                                        },
                                        Name: sdk.String("Wm Dicki"),
                                        Patterns: []string{
                                            "maiores",
                                            "accusantium",
                                            "sed",
                                            "eos",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(1622.51),
                                            CurrencyCode: sdk.String("quis"),
                                            OriginalPrice: sdk.Float32(1146.81),
                                            Price: sdk.Float32(5774.96),
                                            PriceEffectiveTime: sdk.String("labore"),
                                            PriceExpireTime: sdk.String("fugiat"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(6959.74),
                                                    ExclusiveMinimum: sdk.Float64(3502.02),
                                                    Maximum: sdk.Float64(3327.77),
                                                    Minimum: sdk.Float64(2679.88),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(954.56),
                                                    ExclusiveMinimum: sdk.Float64(618.89),
                                                    Maximum: sdk.Float64(6299.02),
                                                    Minimum: sdk.Float64(8213.04),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("quo"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("ex"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("sint"),
                                            },
                                        },
                                        PublishTime: sdk.String("est"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
                                            AverageRating: sdk.Float32(9835.56),
                                            RatingCount: sdk.Int(589031),
                                            RatingHistogram: []int{
                                                643644,
                                            },
                                        },
                                        RetrievableFields: sdk.String("fugit"),
                                        Sizes: []string{
                                            "quo",
                                            "molestiae",
                                        },
                                        Tags: []string{
                                            "facere",
                                            "impedit",
                                            "cupiditate",
                                            "deleniti",
                                        },
                                        Title: sdk.String("Mr."),
                                        TTL: sdk.String("maiores"),
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumTypeUnspecified.ToPointer(),
                                        URI: sdk.String("http://mad-nurse.name"),
                                    },
                                    Quantity: sdk.Int(63369),
                                },
                                shared.GoogleCloudRetailV2ProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2ProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                                            "ea": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7225,
                                                    2253.83,
                                                    2387.39,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "hic",
                                                    "similique",
                                                    "fuga",
                                                    "consectetur",
                                                },
                                            },
                                            "labore": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7689.99,
                                                    2400.27,
                                                    831.64,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "voluptatibus",
                                                    "magnam",
                                                    "aperiam",
                                                },
                                            },
                                            "ducimus": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    8981.97,
                                                    2528.54,
                                                    9873.62,
                                                    7578.24,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "alias",
                                                    "impedit",
                                                    "numquam",
                                                    "aspernatur",
                                                },
                                            },
                                            "nobis": shared.GoogleCloudRetailV2CustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    5323.36,
                                                    9682.86,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "ullam",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2Audience{
                                            AgeGroups: []string{
                                                "consequuntur",
                                                "voluptas",
                                            },
                                            Genders: []string{
                                                "excepturi",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumOutOfStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(667977),
                                        AvailableTime: sdk.String("perferendis"),
                                        Brands: []string{
                                            "impedit",
                                            "ducimus",
                                            "nisi",
                                            "nisi",
                                        },
                                        Categories: []string{
                                            "fugit",
                                        },
                                        CollectionMemberIds: []string{
                                            "maxime",
                                            "maxime",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                                            ColorFamilies: []string{
                                                "accusantium",
                                                "ea",
                                                "impedit",
                                            },
                                            Colors: []string{
                                                "optio",
                                                "est",
                                                "inventore",
                                            },
                                        },
                                        Conditions: []string{
                                            "repellendus",
                                        },
                                        Description: sdk.String("sit"),
                                        ExpireTime: sdk.String("dolores"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "perspiciatis",
                                                },
                                                Type: sdk.String("magni"),
                                            },
                                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                                PlaceIds: []string{
                                                    "alias",
                                                    "quidem",
                                                },
                                                Type: sdk.String("deleniti"),
                                            },
                                        },
                                        Gtin: sdk.String("possimus"),
                                        ID: sdk.String("5722dd89-5b8b-4cf2-8db9-59693352f745"),
                                        Images: []shared.GoogleCloudRetailV2Image{
                                            shared.GoogleCloudRetailV2Image{
                                                Height: sdk.Int(240836),
                                                URI: sdk.String("https://oblong-dialect.org"),
                                                Width: sdk.Int(473386),
                                            },
                                        },
                                        LanguageCode: sdk.String("quas"),
                                        Materials: []string{
                                            "saepe",
                                            "amet",
                                            "distinctio",
                                            "vel",
                                        },
                                        Name: sdk.String("Jackie Douglas"),
                                        Patterns: []string{
                                            "ullam",
                                            "dolorum",
                                            "soluta",
                                            "cum",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                                            Cost: sdk.Float32(4498.8),
                                            CurrencyCode: sdk.String("delectus"),
                                            OriginalPrice: sdk.Float32(4121.81),
                                            Price: sdk.Float32(4144.38),
                                            PriceEffectiveTime: sdk.String("fugit"),
                                            PriceExpireTime: sdk.String("ullam"),
                                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(3545.54),
                                                    ExclusiveMinimum: sdk.Float64(438.62),
                                                    Maximum: sdk.Float64(6678.04),
                                                    Minimum: sdk.Float64(1842.04),
                                                },
                                                Price: &shared.GoogleCloudRetailV2Interval{
                                                    ExclusiveMaximum: sdk.Float64(5087.73),
                                                    ExclusiveMinimum: sdk.Float64(2371.89),
                                                    Maximum: sdk.Float64(5191.32),
                                                    Minimum: sdk.Float64(1835.04),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("deserunt"),
                                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("incidunt"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("deleniti"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("dolor"),
                                            },
                                            shared.GoogleCloudRetailV2Promotion{
                                                PromotionID: sdk.String("est"),
                                            },
                                        },
                                        PublishTime: sdk.String("reiciendis"),
                                        Rating: &shared.GoogleCloudRetailV2Rating{
                                            AverageRating: sdk.Float32(8204.62),
                                            RatingCount: sdk.Int(137831),
                                            RatingHistogram: []int{
                                                80998,
                                            },
                                        },
                                        RetrievableFields: sdk.String("minima"),
                                        Sizes: []string{
                                            "facilis",
                                            "deserunt",
                                            "nisi",
                                        },
                                        Tags: []string{
                                            "voluptatem",
                                            "illo",
                                        },
                                        Title: sdk.String("Ms."),
                                        TTL: sdk.String("incidunt"),
                                        Type: shared.GoogleCloudRetailV2ProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("http://ill-informed-workbench.biz"),
                                    },
                                    Quantity: sdk.Int(695408),
                                },
                            },
                            PurchaseTransaction: &shared.GoogleCloudRetailV2PurchaseTransaction{
                                Cost: sdk.Float32(9895.26),
                                CurrencyCode: sdk.String("eum"),
                                ID: sdk.String("ae591bc8-bdef-4361-ab63-c205fda84077"),
                                Revenue: sdk.Float32(2640.73),
                                Tax: sdk.Float32(6839.8),
                            },
                            ReferrerURI: sdk.String("iure"),
                            SearchQuery: sdk.String("deleniti"),
                            SessionID: sdk.String("officia"),
                            URI: sdk.String("https://quirky-criticism.biz"),
                            UserInfo: &shared.GoogleCloudRetailV2UserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("illum"),
                                UserAgent: sdk.String("sit"),
                                UserID: sdk.String("molestias"),
                            },
                            VisitorID: sdk.String("voluptas"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("expedita"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("maiores"),
        Fields: sdk.String("ea"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("delectus"),
        Parent: "accusamus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("consequatur"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2PurgeUserEventsRequest: &shared.GoogleCloudRetailV2PurgeUserEventsRequest{
            Filter: sdk.String("voluptates"),
            Force: sdk.Bool(false),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quaerat"),
        Fields: sdk.String("numquam"),
        Key: sdk.String("non"),
        OauthToken: sdk.String("cum"),
        Parent: "incidunt",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("dolores"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("nihil"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2RejoinUserEventsRequest: &shared.GoogleCloudRetailV2RejoinUserEventsRequest{
            UserEventRejoinScope: shared.GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnumJoinedEvents.ToPointer(),
        },
        AccessToken: sdk.String("excepturi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quisquam"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("repellendus"),
        OauthToken: sdk.String("cum"),
        Parent: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("est"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("similique"),
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
        GoogleCloudRetailV2UserEventInput: &shared.GoogleCloudRetailV2UserEventInput{
            Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                "recusandae": shared.GoogleCloudRetailV2CustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        6617.64,
                        1409.17,
                        804.67,
                        6122.38,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "explicabo",
                        "ullam",
                        "atque",
                    },
                },
            },
            AttributionToken: sdk.String("doloribus"),
            CartID: sdk.String("pariatur"),
            CompletionDetail: &shared.GoogleCloudRetailV2CompletionDetail{
                CompletionAttributionToken: sdk.String("aut"),
                SelectedPosition: sdk.Int(630286),
                SelectedSuggestion: sdk.String("iste"),
            },
            Entity: sdk.String("eveniet"),
            EventTime: sdk.String("nam"),
            EventType: sdk.String("animi"),
            ExperimentIds: []string{
                "voluptate",
                "voluptatibus",
            },
            Filter: sdk.String("quam"),
            Offset: sdk.Int(859537),
            OrderBy: sdk.String("dolorem"),
            PageCategories: []string{
                "a",
                "perferendis",
                "quaerat",
                "excepturi",
            },
            PageViewID: sdk.String("aliquid"),
            ProductDetails: []shared.GoogleCloudRetailV2ProductDetailInput{
                shared.GoogleCloudRetailV2ProductDetailInput{
                    Product: &shared.GoogleCloudRetailV2ProductInput{
                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                            "illum": shared.GoogleCloudRetailV2CustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    6328.5,
                                    1167.05,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "ratione",
                                    "vitae",
                                    "quisquam",
                                },
                            },
                        },
                        Audience: &shared.GoogleCloudRetailV2Audience{
                            AgeGroups: []string{
                                "nihil",
                                "culpa",
                                "temporibus",
                            },
                            Genders: []string{
                                "ad",
                                "cupiditate",
                                "suscipit",
                                "reiciendis",
                            },
                        },
                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumBackorder.ToPointer(),
                        AvailableQuantity: sdk.Int(961607),
                        AvailableTime: sdk.String("ab"),
                        Brands: []string{
                            "possimus",
                            "praesentium",
                            "neque",
                        },
                        Categories: []string{
                            "animi",
                            "debitis",
                        },
                        CollectionMemberIds: []string{
                            "voluptatem",
                            "quisquam",
                            "vitae",
                        },
                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                            ColorFamilies: []string{
                                "architecto",
                                "sint",
                                "eligendi",
                                "occaecati",
                            },
                            Colors: []string{
                                "tempore",
                                "officia",
                            },
                        },
                        Conditions: []string{
                            "unde",
                            "quas",
                            "laboriosam",
                        },
                        Description: sdk.String("ducimus"),
                        ExpireTime: sdk.String("voluptatum"),
                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                PlaceIds: []string{
                                    "dolor",
                                    "hic",
                                    "iure",
                                },
                                Type: sdk.String("sint"),
                            },
                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                PlaceIds: []string{
                                    "iste",
                                    "cupiditate",
                                },
                                Type: sdk.String("ab"),
                            },
                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                PlaceIds: []string{
                                    "a",
                                    "dolor",
                                    "voluptatum",
                                },
                                Type: sdk.String("molestias"),
                            },
                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                PlaceIds: []string{
                                    "repudiandae",
                                    "eaque",
                                    "consectetur",
                                    "autem",
                                },
                                Type: sdk.String("vitae"),
                            },
                        },
                        Gtin: sdk.String("numquam"),
                        ID: sdk.String("448c7977-a0ef-42f5-b602-8efeef934152"),
                        Images: []shared.GoogleCloudRetailV2Image{
                            shared.GoogleCloudRetailV2Image{
                                Height: sdk.Int(820866),
                                URI: sdk.String("http://vicious-care.info"),
                                Width: sdk.Int(248425),
                            },
                            shared.GoogleCloudRetailV2Image{
                                Height: sdk.Int(962497),
                                URI: sdk.String("http://stained-calm.info"),
                                Width: sdk.Int(463044),
                            },
                            shared.GoogleCloudRetailV2Image{
                                Height: sdk.Int(850953),
                                URI: sdk.String("https://possible-platter.info"),
                                Width: sdk.Int(72473),
                            },
                            shared.GoogleCloudRetailV2Image{
                                Height: sdk.Int(451926),
                                URI: sdk.String("http://which-dollop.biz"),
                                Width: sdk.Int(362693),
                            },
                        },
                        LanguageCode: sdk.String("est"),
                        Materials: []string{
                            "maxime",
                            "delectus",
                            "laboriosam",
                            "laboriosam",
                        },
                        Name: sdk.String("Fannie Nitzsche"),
                        Patterns: []string{
                            "tempore",
                            "culpa",
                            "fugiat",
                        },
                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                            Cost: sdk.Float32(780.74),
                            CurrencyCode: sdk.String("atque"),
                            OriginalPrice: sdk.Float32(3232.15),
                            Price: sdk.Float32(9594.2),
                            PriceEffectiveTime: sdk.String("voluptates"),
                            PriceExpireTime: sdk.String("ut"),
                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                    ExclusiveMaximum: sdk.Float64(2010.05),
                                    ExclusiveMinimum: sdk.Float64(667.56),
                                    Maximum: sdk.Float64(8435.91),
                                    Minimum: sdk.Float64(3843.54),
                                },
                                Price: &shared.GoogleCloudRetailV2Interval{
                                    ExclusiveMaximum: sdk.Float64(6963.24),
                                    ExclusiveMinimum: sdk.Float64(9640.93),
                                    Maximum: sdk.Float64(3663.24),
                                    Minimum: sdk.Float64(7639.34),
                                },
                            },
                        },
                        PrimaryProductID: sdk.String("voluptatum"),
                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                            shared.GoogleCloudRetailV2Promotion{
                                PromotionID: sdk.String("atque"),
                            },
                        },
                        PublishTime: sdk.String("maiores"),
                        Rating: &shared.GoogleCloudRetailV2Rating{
                            AverageRating: sdk.Float32(7140.54),
                            RatingCount: sdk.Int(702418),
                            RatingHistogram: []int{
                                799236,
                                133076,
                                53869,
                            },
                        },
                        RetrievableFields: sdk.String("impedit"),
                        Sizes: []string{
                            "ex",
                            "odio",
                            "delectus",
                        },
                        Tags: []string{
                            "ut",
                            "distinctio",
                            "eius",
                            "eos",
                        },
                        Title: sdk.String("Mrs."),
                        TTL: sdk.String("repudiandae"),
                        Type: shared.GoogleCloudRetailV2ProductTypeEnumVariant.ToPointer(),
                        URI: sdk.String("https://unlawful-glacier.biz"),
                    },
                    Quantity: sdk.Int(227706),
                },
                shared.GoogleCloudRetailV2ProductDetailInput{
                    Product: &shared.GoogleCloudRetailV2ProductInput{
                        Attributes: map[string]shared.GoogleCloudRetailV2CustomAttribute{
                            "porro": shared.GoogleCloudRetailV2CustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    9707.03,
                                    4543.34,
                                    7355.21,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "omnis",
                                    "possimus",
                                },
                            },
                            "tenetur": shared.GoogleCloudRetailV2CustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    7115.72,
                                    4813.07,
                                    4564.73,
                                    6873.52,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "quod",
                                    "ratione",
                                },
                            },
                        },
                        Audience: &shared.GoogleCloudRetailV2Audience{
                            AgeGroups: []string{
                                "vero",
                                "dolore",
                                "nam",
                            },
                            Genders: []string{
                                "maiores",
                                "cupiditate",
                                "illo",
                            },
                        },
                        Availability: shared.GoogleCloudRetailV2ProductAvailabilityEnumBackorder.ToPointer(),
                        AvailableQuantity: sdk.Int(314724),
                        AvailableTime: sdk.String("eaque"),
                        Brands: []string{
                            "eveniet",
                            "delectus",
                        },
                        Categories: []string{
                            "provident",
                            "aut",
                            "dolorum",
                        },
                        CollectionMemberIds: []string{
                            "tempora",
                            "nam",
                        },
                        ColorInfo: &shared.GoogleCloudRetailV2ColorInfo{
                            ColorFamilies: []string{
                                "odio",
                                "nostrum",
                            },
                            Colors: []string{
                                "veritatis",
                                "autem",
                                "earum",
                                "minima",
                            },
                        },
                        Conditions: []string{
                            "possimus",
                            "nesciunt",
                        },
                        Description: sdk.String("corrupti"),
                        ExpireTime: sdk.String("nostrum"),
                        FulfillmentInfo: []shared.GoogleCloudRetailV2FulfillmentInfo{
                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                PlaceIds: []string{
                                    "maxime",
                                },
                                Type: sdk.String("numquam"),
                            },
                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                PlaceIds: []string{
                                    "eligendi",
                                    "autem",
                                    "adipisci",
                                },
                                Type: sdk.String("sunt"),
                            },
                            shared.GoogleCloudRetailV2FulfillmentInfo{
                                PlaceIds: []string{
                                    "occaecati",
                                    "provident",
                                    "necessitatibus",
                                },
                                Type: sdk.String("fugit"),
                            },
                        },
                        Gtin: sdk.String("autem"),
                        ID: sdk.String("ced8f9fd-b941-40f6-bbbf-817837b01afd"),
                        Images: []shared.GoogleCloudRetailV2Image{
                            shared.GoogleCloudRetailV2Image{
                                Height: sdk.Int(461853),
                                URI: sdk.String("https://meaty-hemp.biz"),
                                Width: sdk.Int(286464),
                            },
                            shared.GoogleCloudRetailV2Image{
                                Height: sdk.Int(121118),
                                URI: sdk.String("https://pastel-swivel.net"),
                                Width: sdk.Int(275006),
                            },
                            shared.GoogleCloudRetailV2Image{
                                Height: sdk.Int(287503),
                                URI: sdk.String("https://long-term-cutting.org"),
                                Width: sdk.Int(337149),
                            },
                            shared.GoogleCloudRetailV2Image{
                                Height: sdk.Int(33323),
                                URI: sdk.String("http://energetic-worm.com"),
                                Width: sdk.Int(571498),
                            },
                        },
                        LanguageCode: sdk.String("possimus"),
                        Materials: []string{
                            "asperiores",
                            "quasi",
                            "consequuntur",
                        },
                        Name: sdk.String("Della Trantow II"),
                        Patterns: []string{
                            "itaque",
                        },
                        PriceInfo: &shared.GoogleCloudRetailV2PriceInfo{
                            Cost: sdk.Float32(6254.18),
                            CurrencyCode: sdk.String("expedita"),
                            OriginalPrice: sdk.Float32(6227.89),
                            Price: sdk.Float32(8120.75),
                            PriceEffectiveTime: sdk.String("temporibus"),
                            PriceExpireTime: sdk.String("voluptate"),
                            PriceRange: &shared.GoogleCloudRetailV2PriceInfoPriceRange{
                                OriginalPrice: &shared.GoogleCloudRetailV2Interval{
                                    ExclusiveMaximum: sdk.Float64(9354.93),
                                    ExclusiveMinimum: sdk.Float64(3272.63),
                                    Maximum: sdk.Float64(1419.86),
                                    Minimum: sdk.Float64(1383.06),
                                },
                                Price: &shared.GoogleCloudRetailV2Interval{
                                    ExclusiveMaximum: sdk.Float64(2593.74),
                                    ExclusiveMinimum: sdk.Float64(6253.78),
                                    Maximum: sdk.Float64(4274.61),
                                    Minimum: sdk.Float64(6798.35),
                                },
                            },
                        },
                        PrimaryProductID: sdk.String("alias"),
                        Promotions: []shared.GoogleCloudRetailV2Promotion{
                            shared.GoogleCloudRetailV2Promotion{
                                PromotionID: sdk.String("ab"),
                            },
                            shared.GoogleCloudRetailV2Promotion{
                                PromotionID: sdk.String("sunt"),
                            },
                            shared.GoogleCloudRetailV2Promotion{
                                PromotionID: sdk.String("amet"),
                            },
                            shared.GoogleCloudRetailV2Promotion{
                                PromotionID: sdk.String("cum"),
                            },
                        },
                        PublishTime: sdk.String("iusto"),
                        Rating: &shared.GoogleCloudRetailV2Rating{
                            AverageRating: sdk.Float32(5465.4),
                            RatingCount: sdk.Int(251522),
                            RatingHistogram: []int{
                                876682,
                                752919,
                            },
                        },
                        RetrievableFields: sdk.String("minima"),
                        Sizes: []string{
                            "recusandae",
                            "architecto",
                            "voluptatibus",
                        },
                        Tags: []string{
                            "in",
                            "repellat",
                        },
                        Title: sdk.String("Mrs."),
                        TTL: sdk.String("cumque"),
                        Type: shared.GoogleCloudRetailV2ProductTypeEnumPrimary.ToPointer(),
                        URI: sdk.String("https://somber-training.biz"),
                    },
                    Quantity: sdk.Int(729386),
                },
            },
            PurchaseTransaction: &shared.GoogleCloudRetailV2PurchaseTransaction{
                Cost: sdk.Float32(3805.83),
                CurrencyCode: sdk.String("illum"),
                ID: sdk.String("7696ff3c-5747-4501-b57e-44f51f8b084c"),
                Revenue: sdk.Float32(2244.31),
                Tax: sdk.Float32(1231.79),
            },
            ReferrerURI: sdk.String("omnis"),
            SearchQuery: sdk.String("quam"),
            SessionID: sdk.String("officiis"),
            URI: sdk.String("http://new-custody.name"),
            UserInfo: &shared.GoogleCloudRetailV2UserInfo{
                DirectUserRequest: sdk.Bool(false),
                IPAddress: sdk.String("odit"),
                UserAgent: sdk.String("incidunt"),
                UserID: sdk.String("corporis"),
            },
            VisitorID: sdk.String("quaerat"),
        },
        AccessToken: sdk.String("suscipit"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("tenetur"),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("modi"),
        OauthToken: sdk.String("corrupti"),
        Parent: "nihil",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eius"),
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("fugit"),
        WriteAsync: sdk.Bool(false),
    }, operations.RetailProjectsLocationsCatalogsUserEventsWriteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2UserEvent != nil {
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
        AccessToken: sdk.String("ipsam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("porro"),
        Fields: sdk.String("labore"),
        Key: sdk.String("perspiciatis"),
        Name: "Lois Dibbert",
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("aliquid"),
        UploadProtocol: sdk.String("cum"),
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
        AccessToken: sdk.String("rem"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("corporis"),
        Filter: sdk.String("repellendus"),
        Key: sdk.String("aut"),
        Name: "Jeannette Mante",
        OauthToken: sdk.String("officiis"),
        PageSize: sdk.Int64(961576),
        PageToken: sdk.String("magni"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("sit"),
        UploadType: sdk.String("velit"),
        UploadProtocol: sdk.String("voluptatum"),
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
