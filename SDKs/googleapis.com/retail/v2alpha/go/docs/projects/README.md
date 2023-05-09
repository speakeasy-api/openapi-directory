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
* [RetailProjectsLocationsCatalogsBranchesProductsPurge](#retailprojectslocationscatalogsbranchesproductspurge) - Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.
* [RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces](#retailprojectslocationscatalogsbranchesproductsremovefulfillmentplaces) - We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories](#retailprojectslocationscatalogsbranchesproductsremovelocalinventories) - Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
* [RetailProjectsLocationsCatalogsBranchesProductsSetInventory](#retailprojectslocationscatalogsbranchesproductssetinventory) - Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.
* [RetailProjectsLocationsCatalogsCompleteQuery](#retailprojectslocationscatalogscompletequery) - Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [RetailProjectsLocationsCatalogsCompletionDataImport](#retailprojectslocationscatalogscompletiondataimport) - Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* [RetailProjectsLocationsCatalogsControlsCreate](#retailprojectslocationscatalogscontrolscreate) - Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
* [RetailProjectsLocationsCatalogsControlsList](#retailprojectslocationscatalogscontrolslist) - Lists all Controls by their parent Catalog.
* [RetailProjectsLocationsCatalogsGetDefaultBranch](#retailprojectslocationscatalogsgetdefaultbranch) - Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
* [RetailProjectsLocationsCatalogsList](#retailprojectslocationscatalogslist) - Lists all the Catalogs associated with the project.
* [RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreate](#retailprojectslocationscatalogsmerchantcenteraccountlinkscreate) - Creates a MerchantCenterAccountLink.
* [RetailProjectsLocationsCatalogsMerchantCenterAccountLinksList](#retailprojectslocationscatalogsmerchantcenteraccountlinkslist) - Lists all MerchantCenterAccountLinks under the specified parent Catalog.
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2alphaCatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableOptionUnspecified.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnumExactSearchableEnabled.ToPointer(),
                FacetIntervals: []shared.GoogleCloudRetailV2alphaInterval{
                    shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(2645.55),
                        ExclusiveMinimum: sdk.Float64(1863.32),
                        Maximum: sdk.Float64(7742.34),
                        Minimum: sdk.Float64(7369.18),
                    },
                    shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(4561.5),
                        ExclusiveMinimum: sdk.Float64(2165.5),
                        Maximum: sdk.Float64(5684.34),
                        Minimum: sdk.Float64(1352.18),
                    },
                },
                IgnoredFacetValues: []shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                    shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                        EndTime: sdk.String("ad"),
                        StartTime: sdk.String("natus"),
                        Values: []string{
                            "iste",
                        },
                    },
                },
                IndexableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnumIndexableOptionUnspecified.ToPointer(),
                Key: sdk.String("natus"),
                RecommendationsFilteringOption: shared.GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringDisabled.ToPointer(),
                RetrievableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnumRetrievableDisabled.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnumSearchableDisabled.ToPointer(),
            },
        },
        AccessToken: sdk.String("fuga"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AttributesConfig: "corporis",
        Callback: sdk.String("iste"),
        Fields: sdk.String("iure"),
        Key: sdk.String("saepe"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("architecto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("reiciendis"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaAttributesConfig != nil {
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
        GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest: &shared.GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest{
            AttributeKeys: []string{
                "laborum",
                "dolores",
                "dolorem",
            },
        },
        AccessToken: sdk.String("corporis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AttributesConfig: "nobis",
        Callback: sdk.String("enim"),
        Fields: sdk.String("omnis"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("minima"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("accusantium"),
        UploadProtocol: sdk.String("iure"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse != nil {
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
        GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest: &shared.GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest{
            Key: sdk.String("doloribus"),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumJSON.ToPointer(),
        AttributesConfig: "mollitia",
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("culpa"),
        Key: sdk.String("consequuntur"),
        OauthToken: sdk.String("repellat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("mollitia"),
        UploadType: sdk.String("occaecati"),
        UploadProtocol: sdk.String("numquam"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaAttributesConfig != nil {
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
        GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2alphaCatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnumExactSearchableEnabled.ToPointer(),
                FacetIntervals: []shared.GoogleCloudRetailV2alphaInterval{
                    shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(6235.1),
                        ExclusiveMinimum: sdk.Float64(1589.69),
                        Maximum: sdk.Float64(3380.07),
                        Minimum: sdk.Float64(1103.75),
                    },
                },
                IgnoredFacetValues: []shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                    shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                        EndTime: sdk.String("animi"),
                        StartTime: sdk.String("enim"),
                        Values: []string{
                            "quo",
                        },
                    },
                    shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                        EndTime: sdk.String("sequi"),
                        StartTime: sdk.String("tenetur"),
                        Values: []string{
                            "id",
                            "possimus",
                        },
                    },
                    shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                        EndTime: sdk.String("aut"),
                        StartTime: sdk.String("quasi"),
                        Values: []string{
                            "temporibus",
                            "laborum",
                            "quasi",
                        },
                    },
                },
                IndexableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnumIndexableDisabled.ToPointer(),
                Key: sdk.String("voluptatibus"),
                RecommendationsFilteringOption: shared.GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringEnabled.ToPointer(),
                RetrievableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnumRetrievableEnabled.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnumSearchableEnabled.ToPointer(),
            },
            UpdateMask: sdk.String("voluptatibus"),
        },
        AccessToken: sdk.String("ipsa"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AttributesConfig: "voluptate",
        Callback: sdk.String("cum"),
        Fields: sdk.String("perferendis"),
        Key: sdk.String("doloremque"),
        OauthToken: sdk.String("reprehenderit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ut"),
        UploadType: sdk.String("maiores"),
        UploadProtocol: sdk.String("dicta"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaAttributesConfig != nil {
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
        GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest: &shared.GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest{
            AddTime: sdk.String("dolore"),
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "dicta",
                "harum",
            },
            Type: sdk.String("enim"),
        },
        AccessToken: sdk.String("accusamus"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("quae"),
        Key: sdk.String("ipsum"),
        OauthToken: sdk.String("quidem"),
        PrettyPrint: sdk.Bool(false),
        Product: "molestias",
        QuotaUser: sdk.String("excepturi"),
        UploadType: sdk.String("pariatur"),
        UploadProtocol: sdk.String("modi"),
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
        GoogleCloudRetailV2alphaAddLocalInventoriesRequest: &shared.GoogleCloudRetailV2alphaAddLocalInventoriesRequest{
            AddMask: sdk.String("rem"),
            AddTime: sdk.String("voluptates"),
            AllowMissing: sdk.Bool(false),
            LocalInventories: []shared.GoogleCloudRetailV2alphaLocalInventory{
                shared.GoogleCloudRetailV2alphaLocalInventory{
                    Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                        "sint": shared.GoogleCloudRetailV2alphaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                9292.97,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "enim",
                                "consequatur",
                            },
                        },
                        "est": shared.GoogleCloudRetailV2alphaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                1317.97,
                                6471.74,
                                7163.27,
                                8413.86,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "modi",
                                "qui",
                            },
                        },
                        "aliquid": shared.GoogleCloudRetailV2alphaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                5528.22,
                                201.07,
                                1649.4,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "ipsam",
                                "alias",
                                "fugit",
                                "dolorum",
                            },
                        },
                        "excepturi": shared.GoogleCloudRetailV2alphaCustomAttribute{
                            Indexable: sdk.Bool(false),
                            Numbers: []float64{
                                7037.37,
                                7351.94,
                            },
                            Searchable: sdk.Bool(false),
                            Text: []string{
                                "delectus",
                                "eum",
                            },
                        },
                    },
                    FulfillmentTypes: []string{
                        "eligendi",
                    },
                    PlaceID: sdk.String("sint"),
                    PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                        Cost: sdk.Float32(3960.98),
                        CurrencyCode: sdk.String("provident"),
                        OriginalPrice: sdk.Float32(8960.39),
                        Price: sdk.Float32(5722.52),
                        PriceEffectiveTime: sdk.String("officia"),
                        PriceExpireTime: sdk.String("dolor"),
                        PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                            OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(8915.55),
                                ExclusiveMinimum: sdk.Float64(9527.49),
                                Maximum: sdk.Float64(6800.56),
                                Minimum: sdk.Float64(4471.25),
                            },
                            Price: &shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(4491.98),
                                ExclusiveMinimum: sdk.Float64(8464.09),
                                Maximum: sdk.Float64(9785.71),
                                Minimum: sdk.Float64(6994.79),
                            },
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("dicta"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("cumque"),
        Fields: sdk.String("facere"),
        Key: sdk.String("ea"),
        OauthToken: sdk.String("aliquid"),
        PrettyPrint: sdk.Bool(false),
        Product: "laborum",
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("occaecati"),
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
        GoogleCloudRetailV2alphaProductInput: &shared.GoogleCloudRetailV2alphaProductInput{
            Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                "delectus": shared.GoogleCloudRetailV2alphaCustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        5884.65,
                        7252.55,
                        6596.69,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "deleniti",
                        "sapiente",
                        "amet",
                    },
                },
                "deserunt": shared.GoogleCloudRetailV2alphaCustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        4238.55,
                        6188.09,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "molestiae",
                        "perferendis",
                        "nihil",
                    },
                },
                "magnam": shared.GoogleCloudRetailV2alphaCustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        6601.74,
                        2879.91,
                        2900.77,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "natus",
                        "nobis",
                    },
                },
                "eum": shared.GoogleCloudRetailV2alphaCustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        1354.74,
                        1028.63,
                        2982.82,
                        923.73,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "ullam",
                        "provident",
                        "quos",
                    },
                },
            },
            Audience: &shared.GoogleCloudRetailV2alphaAudience{
                AgeGroups: []string{
                    "accusantium",
                    "mollitia",
                    "reiciendis",
                },
                Genders: []string{
                    "ad",
                    "eum",
                    "dolor",
                },
            },
            Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumBackorder.ToPointer(),
            AvailableQuantity: sdk.Int(141264),
            AvailableTime: sdk.String("nemo"),
            Brands: []string{
                "iure",
            },
            Categories: []string{
                "debitis",
                "eius",
                "maxime",
                "deleniti",
            },
            CollectionMemberIds: []string{
                "in",
                "architecto",
                "architecto",
            },
            ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                ColorFamilies: []string{
                    "ullam",
                    "expedita",
                    "nihil",
                    "repellat",
                },
                Colors: []string{
                    "sed",
                    "saepe",
                    "pariatur",
                    "accusantium",
                },
            },
            Conditions: []string{
                "praesentium",
            },
            Description: sdk.String("natus"),
            ExpireTime: sdk.String("magni"),
            FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                    PlaceIds: []string{
                        "illum",
                        "pariatur",
                        "maxime",
                        "ea",
                    },
                    Type: sdk.String("excepturi"),
                },
            },
            Gtin: sdk.String("odit"),
            ID: sdk.String("601fb576-b0d5-4f0d-b0c5-fbb258705320"),
            Images: []shared.GoogleCloudRetailV2alphaImage{
                shared.GoogleCloudRetailV2alphaImage{
                    Height: sdk.Int(793698),
                    URI: sdk.String("http://educated-surprise.info"),
                    Width: sdk.Int(944120),
                },
            },
            LanguageCode: sdk.String("recusandae"),
            Materials: []string{
                "facilis",
                "perspiciatis",
                "voluptatem",
            },
            Name: sdk.String("Bobby Kutch V"),
            Patterns: []string{
                "adipisci",
                "asperiores",
                "earum",
            },
            PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                Cost: sdk.Float32(2672.62),
                CurrencyCode: sdk.String("iste"),
                OriginalPrice: sdk.Float32(6790.91),
                Price: sdk.Float32(5356.33),
                PriceEffectiveTime: sdk.String("pariatur"),
                PriceExpireTime: sdk.String("provident"),
                PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                    OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(7508.44),
                        ExclusiveMinimum: sdk.Float64(7301.22),
                        Maximum: sdk.Float64(9644.9),
                        Minimum: sdk.Float64(3119.45),
                    },
                    Price: &shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(5542.42),
                        ExclusiveMinimum: sdk.Float64(3982.21),
                        Maximum: sdk.Float64(2123.9),
                        Minimum: sdk.Float64(2098.43),
                    },
                },
            },
            PrimaryProductID: sdk.String("dolor"),
            Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                shared.GoogleCloudRetailV2alphaPromotion{
                    PromotionID: sdk.String("ipsum"),
                },
            },
            PublishTime: sdk.String("hic"),
            Rating: &shared.GoogleCloudRetailV2alphaRating{
                AverageRating: sdk.Float32(5695.74),
                RatingCount: sdk.Int(739551),
                RatingHistogram: []int{
                    490459,
                    970237,
                },
            },
            RetrievableFields: sdk.String("amet"),
            Sizes: []string{
                "numquam",
                "veritatis",
                "ipsa",
            },
            Tags: []string{
                "iure",
            },
            Title: sdk.String("Ms."),
            TTL: sdk.String("quaerat"),
            Type: shared.GoogleCloudRetailV2alphaProductTypeEnumCollection.ToPointer(),
            URI: sdk.String("https://witty-gastronomy.name"),
        },
        AccessToken: sdk.String("eos"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sit"),
        Fields: sdk.String("fugiat"),
        Key: sdk.String("ab"),
        OauthToken: sdk.String("soluta"),
        Parent: "dolorum",
        PrettyPrint: sdk.Bool(false),
        ProductID: sdk.String("iusto"),
        QuotaUser: sdk.String("voluptate"),
        UploadType: sdk.String("dolorum"),
        UploadProtocol: sdk.String("deleniti"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaProduct != nil {
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
        GoogleCloudRetailV2alphaImportProductsRequestInput: &shared.GoogleCloudRetailV2alphaImportProductsRequestInput{
            ErrorsConfig: &shared.GoogleCloudRetailV2alphaImportErrorsConfig{
                GcsPrefix: sdk.String("necessitatibus"),
            },
            InputConfig: &shared.GoogleCloudRetailV2alphaProductInputConfigInput{
                BigQuerySource: &shared.GoogleCloudRetailV2alphaBigQuerySource{
                    DataSchema: sdk.String("distinctio"),
                    DatasetID: sdk.String("asperiores"),
                    GcsStagingDir: sdk.String("nihil"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(216897),
                        Month: sdk.Int(456015),
                        Year: sdk.Int(663078),
                    },
                    ProjectID: sdk.String("saepe"),
                    TableID: sdk.String("eius"),
                },
                GcsSource: &shared.GoogleCloudRetailV2alphaGcsSource{
                    DataSchema: sdk.String("aspernatur"),
                    InputUris: []string{
                        "amet",
                    },
                },
                ProductInlineSource: &shared.GoogleCloudRetailV2alphaProductInlineSourceInput{
                    Products: []shared.GoogleCloudRetailV2alphaProductInput{
                        shared.GoogleCloudRetailV2alphaProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                "ad": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        3834.64,
                                        6457.85,
                                        5883.17,
                                        3246.83,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "totam",
                                        "similique",
                                        "alias",
                                        "at",
                                    },
                                },
                                "quaerat": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        4254.51,
                                        7980.47,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "qui",
                                        "dolorum",
                                        "a",
                                        "esse",
                                    },
                                },
                                "harum": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        2155.07,
                                        7887.4,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "amet",
                                        "tempore",
                                        "accusamus",
                                        "numquam",
                                    },
                                },
                                "enim": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        9574.51,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "nihil",
                                        "sit",
                                        "expedita",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2alphaAudience{
                                AgeGroups: []string{
                                    "sed",
                                },
                                Genders: []string{
                                    "libero",
                                    "voluptas",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumPreorder.ToPointer(),
                            AvailableQuantity: sdk.Int(463575),
                            AvailableTime: sdk.String("ipsum"),
                            Brands: []string{
                                "qui",
                                "cupiditate",
                            },
                            Categories: []string{
                                "pariatur",
                                "soluta",
                                "dicta",
                                "laborum",
                            },
                            CollectionMemberIds: []string{
                                "incidunt",
                                "aspernatur",
                                "dolores",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                                ColorFamilies: []string{
                                    "facilis",
                                    "aliquid",
                                    "quam",
                                },
                                Colors: []string{
                                    "temporibus",
                                    "qui",
                                    "neque",
                                },
                            },
                            Conditions: []string{
                                "magni",
                            },
                            Description: sdk.String("odio"),
                            ExpireTime: sdk.String("sunt"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "hic",
                                        "voluptatem",
                                        "cumque",
                                    },
                                    Type: sdk.String("soluta"),
                                },
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "et",
                                        "saepe",
                                        "ipsum",
                                    },
                                    Type: sdk.String("veritatis"),
                                },
                            },
                            Gtin: sdk.String("nobis"),
                            ID: sdk.String("8b90f344-3a11-408e-8adc-f4b921879fce"),
                            Images: []shared.GoogleCloudRetailV2alphaImage{
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(338159),
                                    URI: sdk.String("http://wet-incident.biz"),
                                    Width: sdk.Int(878870),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(949319),
                                    URI: sdk.String("http://warm-race.net"),
                                    Width: sdk.Int(486160),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(630448),
                                    URI: sdk.String("https://trustworthy-landscape.biz"),
                                    Width: sdk.Int(844550),
                                },
                            },
                            LanguageCode: sdk.String("illum"),
                            Materials: []string{
                                "natus",
                            },
                            Name: sdk.String("Richard Wiza"),
                            Patterns: []string{
                                "porro",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                Cost: sdk.Float32(9818.3),
                                CurrencyCode: sdk.String("doloribus"),
                                OriginalPrice: sdk.Float32(4783.7),
                                Price: sdk.Float32(7535.7),
                                PriceEffectiveTime: sdk.String("ducimus"),
                                PriceExpireTime: sdk.String("alias"),
                                PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(6394.73),
                                        ExclusiveMinimum: sdk.Float64(2694.79),
                                        Maximum: sdk.Float64(3685.84),
                                        Minimum: sdk.Float64(4104.92),
                                    },
                                    Price: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(1369),
                                        ExclusiveMinimum: sdk.Float64(4282.24),
                                        Maximum: sdk.Float64(8221.18),
                                        Minimum: sdk.Float64(2978.42),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("ratione"),
                            Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("laudantium"),
                                },
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("dicta"),
                                },
                            },
                            PublishTime: sdk.String("dolor"),
                            Rating: &shared.GoogleCloudRetailV2alphaRating{
                                AverageRating: sdk.Float32(9807),
                                RatingCount: sdk.Int(97844),
                                RatingHistogram: []int{
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
                            Type: shared.GoogleCloudRetailV2alphaProductTypeEnumPrimary.ToPointer(),
                            URI: sdk.String("http://solid-curriculum.org"),
                        },
                        shared.GoogleCloudRetailV2alphaProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                "minima": shared.GoogleCloudRetailV2alphaCustomAttribute{
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
                            Audience: &shared.GoogleCloudRetailV2alphaAudience{
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
                            Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumPreorder.ToPointer(),
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
                            ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
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
                            FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "reprehenderit",
                                        "quidem",
                                        "fugiat",
                                    },
                                    Type: sdk.String("ut"),
                                },
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "suscipit",
                                        "assumenda",
                                    },
                                    Type: sdk.String("eos"),
                                },
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
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
                            Images: []shared.GoogleCloudRetailV2alphaImage{
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(174112),
                                    URI: sdk.String("https://lanky-apparel.net"),
                                    Width: sdk.Int(430402),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(556429),
                                    URI: sdk.String("https://cumbersome-mama.com"),
                                    Width: sdk.Int(681393),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(649463),
                                    URI: sdk.String("http://mixed-capon.biz"),
                                    Width: sdk.Int(392676),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
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
                            PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                Cost: sdk.Float32(6900.25),
                                CurrencyCode: sdk.String("molestiae"),
                                OriginalPrice: sdk.Float32(6996.22),
                                Price: sdk.Float32(5801.97),
                                PriceEffectiveTime: sdk.String("minima"),
                                PriceExpireTime: sdk.String("distinctio"),
                                PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(7567.79),
                                        ExclusiveMinimum: sdk.Float64(270.69),
                                        Maximum: sdk.Float64(6360.61),
                                        Minimum: sdk.Float64(7313.98),
                                    },
                                    Price: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(2400.2),
                                        ExclusiveMinimum: sdk.Float64(7669.64),
                                        Maximum: sdk.Float64(1605.38),
                                        Minimum: sdk.Float64(97.66),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("minus"),
                            Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("sapiente"),
                                },
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("consectetur"),
                                },
                            },
                            PublishTime: sdk.String("esse"),
                            Rating: &shared.GoogleCloudRetailV2alphaRating{
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
                            Type: shared.GoogleCloudRetailV2alphaProductTypeEnumTypeUnspecified.ToPointer(),
                            URI: sdk.String("http://brown-panpipe.name"),
                        },
                        shared.GoogleCloudRetailV2alphaProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                "tenetur": shared.GoogleCloudRetailV2alphaCustomAttribute{
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
                                "libero": shared.GoogleCloudRetailV2alphaCustomAttribute{
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
                            Audience: &shared.GoogleCloudRetailV2alphaAudience{
                                AgeGroups: []string{
                                    "ullam",
                                    "nisi",
                                },
                                Genders: []string{
                                    "voluptatum",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
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
                            ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
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
                            FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "laudantium",
                                    },
                                    Type: sdk.String("eum"),
                                },
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "ab",
                                        "corrupti",
                                        "non",
                                    },
                                    Type: sdk.String("voluptatem"),
                                },
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "occaecati",
                                    },
                                    Type: sdk.String("numquam"),
                                },
                            },
                            Gtin: sdk.String("impedit"),
                            ID: sdk.String("26071f93-f5f0-4642-9ac7-af515cc413aa"),
                            Images: []shared.GoogleCloudRetailV2alphaImage{
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(246063),
                                    URI: sdk.String("https://quaint-trek.name"),
                                    Width: sdk.Int(853940),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
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
                            PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                Cost: sdk.Float32(2326.27),
                                CurrencyCode: sdk.String("in"),
                                OriginalPrice: sdk.Float32(3485.19),
                                Price: sdk.Float32(9372.85),
                                PriceEffectiveTime: sdk.String("facere"),
                                PriceExpireTime: sdk.String("numquam"),
                                PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(9854.92),
                                        ExclusiveMinimum: sdk.Float64(3817.6),
                                        Maximum: sdk.Float64(9689.72),
                                        Minimum: sdk.Float64(6971.42),
                                    },
                                    Price: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(9049.49),
                                        ExclusiveMinimum: sdk.Float64(8970.71),
                                        Maximum: sdk.Float64(2965.56),
                                        Minimum: sdk.Float64(1210.59),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("asperiores"),
                            Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("non"),
                                },
                            },
                            PublishTime: sdk.String("amet"),
                            Rating: &shared.GoogleCloudRetailV2alphaRating{
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
                            Type: shared.GoogleCloudRetailV2alphaProductTypeEnumPrimary.ToPointer(),
                            URI: sdk.String("http://hasty-exocrine.net"),
                        },
                        shared.GoogleCloudRetailV2alphaProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                "adipisci": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1718.53,
                                        5039.34,
                                        4492.92,
                                        2962.42,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "officiis",
                                        "temporibus",
                                    },
                                },
                                "ullam": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        7383.91,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "quas",
                                        "hic",
                                        "nesciunt",
                                    },
                                },
                                "culpa": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        8672.9,
                                        5196.43,
                                        9402.1,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "nobis",
                                        "sit",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2alphaAudience{
                                AgeGroups: []string{
                                    "sed",
                                    "reiciendis",
                                    "explicabo",
                                },
                                Genders: []string{
                                    "facilis",
                                    "voluptate",
                                    "expedita",
                                    "ab",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumPreorder.ToPointer(),
                            AvailableQuantity: sdk.Int(292794),
                            AvailableTime: sdk.String("laborum"),
                            Brands: []string{
                                "in",
                            },
                            Categories: []string{
                                "quidem",
                                "explicabo",
                            },
                            CollectionMemberIds: []string{
                                "unde",
                                "architecto",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                                ColorFamilies: []string{
                                    "sapiente",
                                    "debitis",
                                },
                                Colors: []string{
                                    "reiciendis",
                                },
                            },
                            Conditions: []string{
                                "corrupti",
                            },
                            Description: sdk.String("maiores"),
                            ExpireTime: sdk.String("incidunt"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "eius",
                                        "necessitatibus",
                                        "ipsum",
                                    },
                                    Type: sdk.String("ea"),
                                },
                            },
                            Gtin: sdk.String("occaecati"),
                            ID: sdk.String("8f447f60-3e8b-4445-a80c-a55efd20e457"),
                            Images: []shared.GoogleCloudRetailV2alphaImage{
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(104627),
                                    URI: sdk.String("https://gray-libido.net"),
                                    Width: sdk.Int(386827),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(680515),
                                    URI: sdk.String("https://phony-use.net"),
                                    Width: sdk.Int(892863),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(204923),
                                    URI: sdk.String("https://good-natured-pate.net"),
                                    Width: sdk.Int(548361),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(879235),
                                    URI: sdk.String("http://monthly-chapter.biz"),
                                    Width: sdk.Int(856303),
                                },
                            },
                            LanguageCode: sdk.String("voluptatem"),
                            Materials: []string{
                                "expedita",
                                "magnam",
                                "consequatur",
                            },
                            Name: sdk.String("Brittany Bailey"),
                            Patterns: []string{
                                "corporis",
                                "et",
                                "blanditiis",
                                "ex",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                Cost: sdk.Float32(1536.27),
                                CurrencyCode: sdk.String("sit"),
                                OriginalPrice: sdk.Float32(4255.08),
                                Price: sdk.Float32(3426.11),
                                PriceEffectiveTime: sdk.String("saepe"),
                                PriceExpireTime: sdk.String("error"),
                                PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(85.11),
                                        ExclusiveMinimum: sdk.Float64(2790.68),
                                        Maximum: sdk.Float64(9688.65),
                                        Minimum: sdk.Float64(2097.5),
                                    },
                                    Price: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(6908.94),
                                        ExclusiveMinimum: sdk.Float64(1157.03),
                                        Maximum: sdk.Float64(994.16),
                                        Minimum: sdk.Float64(5771.4),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("labore"),
                            Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("atque"),
                                },
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("laborum"),
                                },
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("nam"),
                                },
                            },
                            PublishTime: sdk.String("tenetur"),
                            Rating: &shared.GoogleCloudRetailV2alphaRating{
                                AverageRating: sdk.Float32(3888.67),
                                RatingCount: sdk.Int(2703),
                                RatingHistogram: []int{
                                    647197,
                                },
                            },
                            RetrievableFields: sdk.String("voluptate"),
                            Sizes: []string{
                                "reiciendis",
                                "provident",
                                "repellendus",
                            },
                            Tags: []string{
                                "voluptates",
                                "perferendis",
                                "est",
                                "quidem",
                            },
                            Title: sdk.String("Ms."),
                            TTL: sdk.String("facere"),
                            Type: shared.GoogleCloudRetailV2alphaProductTypeEnumVariant.ToPointer(),
                            URI: sdk.String("https://pricey-fang.com"),
                        },
                    },
                },
            },
            NotificationPubsubTopic: sdk.String("quisquam"),
            ReconciliationMode: shared.GoogleCloudRetailV2alphaImportProductsRequestReconciliationModeEnumFull.ToPointer(),
            RequestID: sdk.String("quasi"),
            SkipDefaultBranchProtection: sdk.Bool(false),
            UpdateMask: sdk.String("atque"),
        },
        AccessToken: sdk.String("reprehenderit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("quidem"),
        OauthToken: sdk.String("maxime"),
        Parent: "et",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        UploadType: sdk.String("amet"),
        UploadProtocol: sdk.String("assumenda"),
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
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("officiis"),
        Fields: sdk.String("officiis"),
        Filter: sdk.String("accusamus"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("minima"),
        PageSize: sdk.Int64(133461),
        PageToken: sdk.String("ex"),
        Parent: "maiores",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corrupti"),
        ReadMask: sdk.String("at"),
        RequireTotalSize: sdk.Bool(false),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("blanditiis"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaListProductsResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsBranchesProductsPurge

Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

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
    res, err := s.Projects.RetailProjectsLocationsCatalogsBranchesProductsPurge(ctx, operations.RetailProjectsLocationsCatalogsBranchesProductsPurgeRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2alphaPurgeProductsRequest: &shared.GoogleCloudRetailV2alphaPurgeProductsRequest{
            Filter: sdk.String("repudiandae"),
            Force: sdk.Bool(false),
        },
        AccessToken: sdk.String("atque"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("sunt"),
        Fields: sdk.String("recusandae"),
        Key: sdk.String("dolorum"),
        OauthToken: sdk.String("repellendus"),
        Parent: "labore",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("reiciendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("repudiandae"),
    }, operations.RetailProjectsLocationsCatalogsBranchesProductsPurgeSecurity{
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest: &shared.GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest{
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "beatae",
            },
            RemoveTime: sdk.String("dolores"),
            Type: sdk.String("enim"),
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("molestias"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("saepe"),
        PrettyPrint: sdk.Bool(false),
        Product: "consequuntur",
        QuotaUser: sdk.String("occaecati"),
        UploadType: sdk.String("officiis"),
        UploadProtocol: sdk.String("perspiciatis"),
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
        GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest: &shared.GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest{
            AllowMissing: sdk.Bool(false),
            PlaceIds: []string{
                "eveniet",
            },
            RemoveTime: sdk.String("occaecati"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("quis"),
        Key: sdk.String("reprehenderit"),
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        Product: "illo",
        QuotaUser: sdk.String("corporis"),
        UploadType: sdk.String("quidem"),
        UploadProtocol: sdk.String("eveniet"),
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
        GoogleCloudRetailV2alphaSetInventoryRequestInput: &shared.GoogleCloudRetailV2alphaSetInventoryRequestInput{
            AllowMissing: sdk.Bool(false),
            Inventory: &shared.GoogleCloudRetailV2alphaProductInput{
                Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                    "doloremque": shared.GoogleCloudRetailV2alphaCustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            599.44,
                            5176.12,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "molestiae",
                        },
                    },
                    "eveniet": shared.GoogleCloudRetailV2alphaCustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            7398.84,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "necessitatibus",
                            "ratione",
                        },
                    },
                    "laborum": shared.GoogleCloudRetailV2alphaCustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            5289.4,
                            5230.06,
                            3044.46,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "repellat",
                            "alias",
                        },
                    },
                    "corporis": shared.GoogleCloudRetailV2alphaCustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            4706.49,
                            6490.78,
                            3782.45,
                        },
                        Searchable: sdk.Bool(false),
                        Text: []string{
                            "maiores",
                        },
                    },
                },
                Audience: &shared.GoogleCloudRetailV2alphaAudience{
                    AgeGroups: []string{
                        "dolores",
                        "id",
                        "minima",
                        "dolore",
                    },
                    Genders: []string{
                        "nesciunt",
                        "quae",
                        "recusandae",
                    },
                },
                Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumPreorder.ToPointer(),
                AvailableQuantity: sdk.Int(309251),
                AvailableTime: sdk.String("molestiae"),
                Brands: []string{
                    "ut",
                    "culpa",
                },
                Categories: []string{
                    "debitis",
                },
                CollectionMemberIds: []string{
                    "eum",
                    "nemo",
                    "recusandae",
                },
                ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                    ColorFamilies: []string{
                        "provident",
                        "quis",
                    },
                    Colors: []string{
                        "reiciendis",
                        "provident",
                    },
                },
                Conditions: []string{
                    "ullam",
                },
                Description: sdk.String("quasi"),
                ExpireTime: sdk.String("animi"),
                FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                    shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                        PlaceIds: []string{
                            "provident",
                            "possimus",
                            "animi",
                        },
                        Type: sdk.String("ex"),
                    },
                    shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                        PlaceIds: []string{
                            "accusantium",
                            "repellat",
                        },
                        Type: sdk.String("doloribus"),
                    },
                },
                Gtin: sdk.String("ullam"),
                ID: sdk.String("7bfaad4f-9efc-41b4-912c-1032648dc2f6"),
                Images: []shared.GoogleCloudRetailV2alphaImage{
                    shared.GoogleCloudRetailV2alphaImage{
                        Height: sdk.Int(325118),
                        URI: sdk.String("http://occasional-neighborhood.org"),
                        Width: sdk.Int(745398),
                    },
                },
                LanguageCode: sdk.String("hic"),
                Materials: []string{
                    "eaque",
                    "earum",
                    "perspiciatis",
                    "maiores",
                },
                Name: sdk.String("Gene Sauer"),
                Patterns: []string{
                    "cumque",
                },
                PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                    Cost: sdk.Float32(6849.35),
                    CurrencyCode: sdk.String("ratione"),
                    OriginalPrice: sdk.Float32(6567.62),
                    Price: sdk.Float32(8987.6),
                    PriceEffectiveTime: sdk.String("nulla"),
                    PriceExpireTime: sdk.String("consequatur"),
                    PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                        OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                            ExclusiveMaximum: sdk.Float64(972.58),
                            ExclusiveMinimum: sdk.Float64(902.33),
                            Maximum: sdk.Float64(4977.77),
                            Minimum: sdk.Float64(6191.83),
                        },
                        Price: &shared.GoogleCloudRetailV2alphaInterval{
                            ExclusiveMaximum: sdk.Float64(5810.82),
                            ExclusiveMinimum: sdk.Float64(3824.4),
                            Maximum: sdk.Float64(2415.57),
                            Minimum: sdk.Float64(965.62),
                        },
                    },
                },
                PrimaryProductID: sdk.String("magni"),
                Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                    shared.GoogleCloudRetailV2alphaPromotion{
                        PromotionID: sdk.String("nulla"),
                    },
                    shared.GoogleCloudRetailV2alphaPromotion{
                        PromotionID: sdk.String("necessitatibus"),
                    },
                    shared.GoogleCloudRetailV2alphaPromotion{
                        PromotionID: sdk.String("ipsa"),
                    },
                    shared.GoogleCloudRetailV2alphaPromotion{
                        PromotionID: sdk.String("tempora"),
                    },
                },
                PublishTime: sdk.String("nihil"),
                Rating: &shared.GoogleCloudRetailV2alphaRating{
                    AverageRating: sdk.Float32(4731.9),
                    RatingCount: sdk.Int(115834),
                    RatingHistogram: []int{
                        457059,
                        508390,
                    },
                },
                RetrievableFields: sdk.String("maiores"),
                Sizes: []string{
                    "vel",
                    "architecto",
                    "fugiat",
                    "doloremque",
                },
                Tags: []string{
                    "odio",
                },
                Title: sdk.String("Mrs."),
                TTL: sdk.String("esse"),
                Type: shared.GoogleCloudRetailV2alphaProductTypeEnumPrimary.ToPointer(),
                URI: sdk.String("http://icky-badge.net"),
            },
            SetMask: sdk.String("sunt"),
            SetTime: sdk.String("nostrum"),
        },
        AccessToken: sdk.String("fugiat"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("aliquid"),
        Fields: sdk.String("officia"),
        Key: sdk.String("suscipit"),
        Name: "Lisa Kemmer",
        OauthToken: sdk.String("id"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ab"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("possimus"),
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
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Catalog: "ad",
        Dataset: sdk.String("deleniti"),
        DeviceType: sdk.String("enim"),
        EnableAttributeSuggestions: sdk.Bool(false),
        Entity: sdk.String("vitae"),
        Fields: sdk.String("repellendus"),
        Key: sdk.String("ex"),
        LanguageCodes: []string{
            "ex",
            "ut",
            "ad",
            "expedita",
        },
        MaxSuggestions: sdk.Int64(29950),
        OauthToken: sdk.String("molestias"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("cum"),
        QuotaUser: sdk.String("aliquid"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("voluptatum"),
        VisitorID: sdk.String("omnis"),
    }, operations.RetailProjectsLocationsCatalogsCompleteQuerySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaCompleteQueryResponse != nil {
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
        GoogleCloudRetailV2alphaImportCompletionDataRequest: &shared.GoogleCloudRetailV2alphaImportCompletionDataRequest{
            InputConfig: &shared.GoogleCloudRetailV2alphaCompletionDataInputConfig{
                BigQuerySource: &shared.GoogleCloudRetailV2alphaBigQuerySource{
                    DataSchema: sdk.String("rerum"),
                    DatasetID: sdk.String("est"),
                    GcsStagingDir: sdk.String("culpa"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(29634),
                        Month: sdk.Int(959143),
                        Year: sdk.Int(889288),
                    },
                    ProjectID: sdk.String("architecto"),
                    TableID: sdk.String("fuga"),
                },
            },
            NotificationPubsubTopic: sdk.String("pariatur"),
        },
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("alias"),
        Fields: sdk.String("deleniti"),
        Key: sdk.String("earum"),
        OauthToken: sdk.String("ex"),
        Parent: "sapiente",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("nemo"),
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
        GoogleCloudRetailV2alphaControlInput: &shared.GoogleCloudRetailV2alphaControlInput{
            DisplayName: sdk.String("ratione"),
            FacetSpec: &shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec{
                EnableDynamicPosition: sdk.Bool(false),
                ExcludedFilterKeys: []string{
                    "perferendis",
                    "illum",
                },
                FacetKey: &shared.GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey{
                    CaseInsensitive: sdk.Bool(false),
                    Contains: []string{
                        "impedit",
                        "quibusdam",
                        "nam",
                    },
                    Intervals: []shared.GoogleCloudRetailV2alphaInterval{
                        shared.GoogleCloudRetailV2alphaInterval{
                            ExclusiveMaximum: sdk.Float64(6334.15),
                            ExclusiveMinimum: sdk.Float64(2228.64),
                            Maximum: sdk.Float64(3073.76),
                            Minimum: sdk.Float64(805.32),
                        },
                        shared.GoogleCloudRetailV2alphaInterval{
                            ExclusiveMaximum: sdk.Float64(5372.79),
                            ExclusiveMinimum: sdk.Float64(853.11),
                            Maximum: sdk.Float64(2745.75),
                            Minimum: sdk.Float64(2213.96),
                        },
                    },
                    Key: sdk.String("consequatur"),
                    OrderBy: sdk.String("architecto"),
                    Prefixes: []string{
                        "modi",
                    },
                    Query: sdk.String("fugit"),
                    RestrictedValues: []string{
                        "laudantium",
                    },
                    ReturnMinMax: sdk.Bool(false),
                },
                Limit: sdk.Int(65604),
            },
            Name: sdk.String("Janis Hills V"),
            Rule: &shared.GoogleCloudRetailV2alphaRule{
                BoostAction: &shared.GoogleCloudRetailV2alphaRuleBoostAction{
                    Boost: sdk.Float32(9111.98),
                    ProductsFilter: sdk.String("impedit"),
                },
                Condition: &shared.GoogleCloudRetailV2alphaCondition{
                    ActiveTimeRange: []shared.GoogleCloudRetailV2alphaConditionTimeRange{
                        shared.GoogleCloudRetailV2alphaConditionTimeRange{
                            EndTime: sdk.String("esse"),
                            StartTime: sdk.String("necessitatibus"),
                        },
                        shared.GoogleCloudRetailV2alphaConditionTimeRange{
                            EndTime: sdk.String("sed"),
                            StartTime: sdk.String("veniam"),
                        },
                        shared.GoogleCloudRetailV2alphaConditionTimeRange{
                            EndTime: sdk.String("nesciunt"),
                            StartTime: sdk.String("expedita"),
                        },
                        shared.GoogleCloudRetailV2alphaConditionTimeRange{
                            EndTime: sdk.String("eum"),
                            StartTime: sdk.String("vel"),
                        },
                    },
                    QueryTerms: []shared.GoogleCloudRetailV2alphaConditionQueryTerm{
                        shared.GoogleCloudRetailV2alphaConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("magnam"),
                        },
                        shared.GoogleCloudRetailV2alphaConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("exercitationem"),
                        },
                        shared.GoogleCloudRetailV2alphaConditionQueryTerm{
                            FullMatch: sdk.Bool(false),
                            Value: sdk.String("ab"),
                        },
                    },
                },
                DoNotAssociateAction: &shared.GoogleCloudRetailV2alphaRuleDoNotAssociateAction{
                    DoNotAssociateTerms: []string{
                        "autem",
                        "nobis",
                        "laboriosam",
                        "recusandae",
                    },
                    QueryTerms: []string{
                        "voluptatem",
                    },
                    Terms: []string{
                        "necessitatibus",
                        "quasi",
                    },
                },
                FilterAction: &shared.GoogleCloudRetailV2alphaRuleFilterAction{
                    Filter: sdk.String("nisi"),
                },
                IgnoreAction: &shared.GoogleCloudRetailV2alphaRuleIgnoreAction{
                    IgnoreTerms: []string{
                        "vero",
                        "est",
                        "harum",
                        "sequi",
                    },
                },
                OnewaySynonymsAction: &shared.GoogleCloudRetailV2alphaRuleOnewaySynonymsAction{
                    OnewayTerms: []string{
                        "repudiandae",
                        "optio",
                        "occaecati",
                        "nemo",
                    },
                    QueryTerms: []string{
                        "blanditiis",
                        "officia",
                    },
                    Synonyms: []string{
                        "numquam",
                        "nemo",
                    },
                },
                RedirectAction: &shared.GoogleCloudRetailV2alphaRuleRedirectAction{
                    RedirectURI: sdk.String("quos"),
                },
                ReplacementAction: &shared.GoogleCloudRetailV2alphaRuleReplacementAction{
                    QueryTerms: []string{
                        "aspernatur",
                        "ducimus",
                    },
                    ReplacementTerm: sdk.String("nesciunt"),
                    Term: sdk.String("fuga"),
                },
                TwowaySynonymsAction: &shared.GoogleCloudRetailV2alphaRuleTwowaySynonymsAction{
                    Synonyms: []string{
                        "incidunt",
                        "quasi",
                        "rem",
                    },
                },
            },
            SearchSolutionUseCase: []shared.GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnum{
                shared.GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified,
                shared.GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseSearch,
                shared.GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified,
                shared.GoogleCloudRetailV2alphaControlSearchSolutionUseCaseEnumSearchSolutionUseCaseUnspecified,
            },
            SolutionTypes: []shared.GoogleCloudRetailV2alphaControlSolutionTypesEnum{
                shared.GoogleCloudRetailV2alphaControlSolutionTypesEnumSolutionTypeRecommendation,
            },
        },
        AccessToken: sdk.String("reiciendis"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("alias"),
        ControlID: sdk.String("omnis"),
        Fields: sdk.String("eos"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("iste"),
        Parent: "magni",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("inventore"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("accusamus"),
    }, operations.RetailProjectsLocationsCatalogsControlsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaControl != nil {
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
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("delectus"),
        Fields: sdk.String("minima"),
        Filter: sdk.String("praesentium"),
        Key: sdk.String("maxime"),
        OauthToken: sdk.String("magnam"),
        PageSize: sdk.Int64(836364),
        PageToken: sdk.String("quos"),
        Parent: "commodi",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("commodi"),
        UploadProtocol: sdk.String("totam"),
    }, operations.RetailProjectsLocationsCatalogsControlsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaListControlsResponse != nil {
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
        AccessToken: sdk.String("modi"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vero"),
        Catalog: "voluptatem",
        Fields: sdk.String("ipsam"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quasi"),
        UploadType: sdk.String("non"),
        UploadProtocol: sdk.String("maiores"),
    }, operations.RetailProjectsLocationsCatalogsGetDefaultBranchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaGetDefaultBranchResponse != nil {
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
        AccessToken: sdk.String("sint"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("esse"),
        Key: sdk.String("nemo"),
        OauthToken: sdk.String("reprehenderit"),
        PageSize: sdk.Int64(667715),
        PageToken: sdk.String("quis"),
        Parent: "sint",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("accusamus"),
        UploadType: sdk.String("impedit"),
        UploadProtocol: sdk.String("hic"),
    }, operations.RetailProjectsLocationsCatalogsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaListCatalogsResponse != nil {
        // handle response
    }
}
```

## RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreate

Creates a MerchantCenterAccountLink.

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
    res, err := s.Projects.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreate(ctx, operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2alphaMerchantCenterAccountLinkInput: &shared.GoogleCloudRetailV2alphaMerchantCenterAccountLinkInput{
            BranchID: sdk.String("asperiores"),
            FeedFilters: []shared.GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter{
                shared.GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter{
                    PrimaryFeedID: sdk.String("voluptas"),
                    PrimaryFeedName: sdk.String("debitis"),
                },
                shared.GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter{
                    PrimaryFeedID: sdk.String("delectus"),
                    PrimaryFeedName: sdk.String("quae"),
                },
            },
            FeedLabel: sdk.String("minus"),
            LanguageCode: sdk.String("fuga"),
            MerchantCenterAccountID: sdk.String("laborum"),
        },
        AccessToken: sdk.String("consectetur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("atque"),
        Fields: sdk.String("ipsum"),
        Key: sdk.String("impedit"),
        OauthToken: sdk.String("magni"),
        Parent: "soluta",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("nam"),
        UploadProtocol: sdk.String("dolore"),
    }, operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksCreateSecurity{
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

## RetailProjectsLocationsCatalogsMerchantCenterAccountLinksList

Lists all MerchantCenterAccountLinks under the specified parent Catalog.

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
    res, err := s.Projects.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksList(ctx, operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("voluptate"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("dignissimos"),
        Fields: sdk.String("neque"),
        Key: sdk.String("quo"),
        OauthToken: sdk.String("deleniti"),
        Parent: "quibusdam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("voluptatibus"),
    }, operations.RetailProjectsLocationsCatalogsMerchantCenterAccountLinksListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse != nil {
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
        GoogleCloudRetailV2alphaModelInput: &shared.GoogleCloudRetailV2alphaModelInput{
            DisplayName: sdk.String("magnam"),
            FilteringOption: shared.GoogleCloudRetailV2alphaModelFilteringOptionEnumRecommendationsFilteringEnabled.ToPointer(),
            ModelFeaturesConfig: &shared.GoogleCloudRetailV2alphaModelModelFeaturesConfig{
                FrequentlyBoughtTogetherConfig: &shared.GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfig{
                    ContextProductsType: shared.GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfigContextProductsTypeEnumContextProductsTypeUnspecified.ToPointer(),
                },
            },
            Name: sdk.String("Wm Brakus"),
            OptimizationObjective: sdk.String("porro"),
            PageOptimizationConfig: &shared.GoogleCloudRetailV2alphaModelPageOptimizationConfig{
                PageOptimizationEventType: sdk.String("aliquam"),
                Panels: []shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel{
                    shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel{
                        Candidates: []shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate{
                            shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate{
                                ServingConfigID: sdk.String("accusantium"),
                            },
                        },
                        DefaultCandidate: &shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate{
                            ServingConfigID: sdk.String("vel"),
                        },
                        DisplayName: sdk.String("ea"),
                    },
                },
                Restriction: shared.GoogleCloudRetailV2alphaModelPageOptimizationConfigRestrictionEnumRestrictionUnspecified.ToPointer(),
            },
            PeriodicTuningState: shared.GoogleCloudRetailV2alphaModelPeriodicTuningStateEnumPeriodicTuningEnabled.ToPointer(),
            TrainingState: shared.GoogleCloudRetailV2alphaModelTrainingStateEnumPaused.ToPointer(),
            Type: sdk.String("eum"),
        },
        AccessToken: sdk.String("velit"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        DryRun: sdk.Bool(false),
        Fields: sdk.String("earum"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("impedit"),
        Parent: "voluptatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("itaque"),
        UploadProtocol: sdk.String("alias"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("itaque"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laborum"),
        Fields: sdk.String("non"),
        Key: sdk.String("dolor"),
        OauthToken: sdk.String("iusto"),
        PageSize: sdk.Int64(24753),
        PageToken: sdk.String("doloremque"),
        Parent: "consequatur",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("officia"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("ea"),
    }, operations.RetailProjectsLocationsCatalogsModelsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaListModelsResponse != nil {
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
            "facilis": "placeat",
            "perspiciatis": "expedita",
        },
        AccessToken: sdk.String("deleniti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("ullam"),
        Key: sdk.String("unde"),
        Name: "Lyle Russel",
        OauthToken: sdk.String("est"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("labore"),
    }, operations.RetailProjectsLocationsCatalogsModelsPauseSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaModel != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "consectetur": "vitae",
            "inventore": "dolorem",
            "ad": "qui",
            "iste": "ex",
        },
        AccessToken: sdk.String("nemo"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("rem"),
        Key: sdk.String("dolorum"),
        Name: "Beverly Abbott",
        OauthToken: sdk.String("quae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quae"),
        UploadType: sdk.String("modi"),
        UploadProtocol: sdk.String("neque"),
    }, operations.RetailProjectsLocationsCatalogsModelsResumeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaModel != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "et": "ipsum",
            "unde": "nulla",
            "distinctio": "maxime",
            "quia": "quia",
        },
        AccessToken: sdk.String("nostrum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("libero"),
        Fields: sdk.String("dicta"),
        Key: sdk.String("id"),
        Name: "Laurence Nienow",
        OauthToken: sdk.String("sit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("voluptates"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2alphaAddControlRequest: &shared.GoogleCloudRetailV2alphaAddControlRequest{
            ControlID: sdk.String("aperiam"),
        },
        AccessToken: sdk.String("totam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("distinctio"),
        Key: sdk.String("voluptatem"),
        OauthToken: sdk.String("autem"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("esse"),
        ServingConfig: "dolores",
        UploadType: sdk.String("assumenda"),
        UploadProtocol: sdk.String("beatae"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaServingConfig != nil {
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
        GoogleCloudRetailV2alphaServingConfig: &shared.GoogleCloudRetailV2alphaServingConfig{
            BoostControlIds: []string{
                "corrupti",
                "molestiae",
                "provident",
                "accusamus",
            },
            DisplayName: sdk.String("necessitatibus"),
            DiversityLevel: sdk.String("tempore"),
            DiversityType: shared.GoogleCloudRetailV2alphaServingConfigDiversityTypeEnumRuleBasedDiversity.ToPointer(),
            DoNotAssociateControlIds: []string{
                "autem",
                "ipsam",
            },
            DynamicFacetSpec: &shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnumEnabled.ToPointer(),
            },
            EnableCategoryFilterLevel: sdk.String("laudantium"),
            FacetControlIds: []string{
                "officiis",
                "voluptatibus",
            },
            FilterControlIds: []string{
                "at",
                "alias",
                "quia",
            },
            IgnoreControlIds: []string{
                "fuga",
                "repudiandae",
                "accusantium",
            },
            ModelID: sdk.String("expedita"),
            Name: sdk.String("Jesse Sporer"),
            OnewaySynonymsControlIds: []string{
                "explicabo",
            },
            PersonalizationSpec: &shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnumAuto.ToPointer(),
            },
            PriceRerankingLevel: sdk.String("error"),
            RedirectControlIds: []string{
                "adipisci",
                "recusandae",
                "similique",
                "ut",
            },
            ReplacementControlIds: []string{
                "quis",
                "beatae",
                "unde",
            },
            SolutionTypes: []shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum{
                shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnumSolutionTypeSearch,
                shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnumSolutionTypeRecommendation,
            },
            TwowaySynonymsControlIds: []string{
                "numquam",
            },
        },
        AccessToken: sdk.String("numquam"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("officia"),
        Key: sdk.String("dignissimos"),
        OauthToken: sdk.String("optio"),
        Parent: "necessitatibus",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("corporis"),
        ServingConfigID: sdk.String("qui"),
        UploadType: sdk.String("expedita"),
        UploadProtocol: sdk.String("voluptatum"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaServingConfig != nil {
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
        AccessToken: sdk.String("minima"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("enim"),
        Fields: sdk.String("neque"),
        Force: sdk.Bool(false),
        Key: sdk.String("in"),
        Name: "Andre Gleichner",
        OauthToken: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("maiores"),
        UploadType: sdk.String("tempore"),
        UploadProtocol: sdk.String("aperiam"),
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("occaecati"),
        Key: sdk.String("voluptas"),
        OauthToken: sdk.String("quo"),
        PageSize: sdk.Int64(242099),
        PageToken: sdk.String("minus"),
        Parent: "fuga",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nostrum"),
        UploadType: sdk.String("est"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaListServingConfigsResponse != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2alphaServingConfig: &shared.GoogleCloudRetailV2alphaServingConfig{
            BoostControlIds: []string{
                "vero",
                "odit",
                "repellat",
            },
            DisplayName: sdk.String("pariatur"),
            DiversityLevel: sdk.String("nemo"),
            DiversityType: shared.GoogleCloudRetailV2alphaServingConfigDiversityTypeEnumRuleBasedDiversity.ToPointer(),
            DoNotAssociateControlIds: []string{
                "odio",
            },
            DynamicFacetSpec: &shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnumModeUnspecified.ToPointer(),
            },
            EnableCategoryFilterLevel: sdk.String("in"),
            FacetControlIds: []string{
                "excepturi",
                "dolores",
            },
            FilterControlIds: []string{
                "veritatis",
                "ducimus",
                "voluptate",
            },
            IgnoreControlIds: []string{
                "itaque",
                "similique",
                "optio",
                "ex",
            },
            ModelID: sdk.String("quaerat"),
            Name: sdk.String("Cecelia Schroeder"),
            OnewaySynonymsControlIds: []string{
                "dolorem",
                "modi",
            },
            PersonalizationSpec: &shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnumModeUnspecified.ToPointer(),
            },
            PriceRerankingLevel: sdk.String("sint"),
            RedirectControlIds: []string{
                "sequi",
                "repudiandae",
                "cum",
                "dicta",
            },
            ReplacementControlIds: []string{
                "veniam",
                "animi",
                "dolores",
                "nam",
            },
            SolutionTypes: []shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnum{
                shared.GoogleCloudRetailV2alphaServingConfigSolutionTypesEnumSolutionTypeUnspecified,
            },
            TwowaySynonymsControlIds: []string{
                "nobis",
                "ipsa",
                "ducimus",
                "maiores",
            },
        },
        AccessToken: sdk.String("veritatis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("pariatur"),
        Key: sdk.String("libero"),
        Name: "Marion Hills",
        OauthToken: sdk.String("doloribus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("eligendi"),
        UpdateMask: sdk.String("sint"),
        UploadType: sdk.String("enim"),
        UploadProtocol: sdk.String("hic"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsPatchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaServingConfig != nil {
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
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2alphaPredictRequestInput: &shared.GoogleCloudRetailV2alphaPredictRequestInput{
            Filter: sdk.String("quas"),
            Labels: map[string]string{
                "molestias": "odio",
                "eaque": "saepe",
                "architecto": "quos",
            },
            PageSize: sdk.Int(614438),
            PageToken: sdk.String("assumenda"),
            Params: map[string]interface{}{
                "libero": "velit",
                "doloremque": "delectus",
                "impedit": "cum",
            },
            UserEvent: &shared.GoogleCloudRetailV2alphaUserEventInput{
                Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                    "adipisci": shared.GoogleCloudRetailV2alphaCustomAttribute{
                        Indexable: sdk.Bool(false),
                        Numbers: []float64{
                            6444.2,
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
                },
                AttributionToken: sdk.String("eligendi"),
                CartID: sdk.String("possimus"),
                CompletionDetail: &shared.GoogleCloudRetailV2alphaCompletionDetail{
                    CompletionAttributionToken: sdk.String("non"),
                    SelectedPosition: sdk.Int(298187),
                    SelectedSuggestion: sdk.String("itaque"),
                },
                Entity: sdk.String("sed"),
                EventTime: sdk.String("asperiores"),
                EventType: sdk.String("veniam"),
                ExperimentIds: []string{
                    "facere",
                },
                Filter: sdk.String("laudantium"),
                Offset: sdk.Int(140384),
                OrderBy: sdk.String("pariatur"),
                PageCategories: []string{
                    "exercitationem",
                },
                PageViewID: sdk.String("ab"),
                ProductDetails: []shared.GoogleCloudRetailV2alphaProductDetailInput{
                    shared.GoogleCloudRetailV2alphaProductDetailInput{
                        Product: &shared.GoogleCloudRetailV2alphaProductInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                "tempore": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
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
                                "nisi": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        7945.07,
                                        8152,
                                        7060.61,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "ad",
                                    },
                                },
                                "voluptatibus": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        1623.58,
                                        8915.81,
                                        2908.41,
                                        7009.28,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "reprehenderit",
                                    },
                                },
                            },
                            Audience: &shared.GoogleCloudRetailV2alphaAudience{
                                AgeGroups: []string{
                                    "neque",
                                    "iusto",
                                },
                                Genders: []string{
                                    "rem",
                                    "eligendi",
                                    "fugiat",
                                },
                            },
                            Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumPreorder.ToPointer(),
                            AvailableQuantity: sdk.Int(889448),
                            AvailableTime: sdk.String("ducimus"),
                            Brands: []string{
                                "dicta",
                            },
                            Categories: []string{
                                "porro",
                                "vitae",
                                "dignissimos",
                            },
                            CollectionMemberIds: []string{
                                "fugiat",
                                "ad",
                            },
                            ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                                ColorFamilies: []string{
                                    "enim",
                                },
                                Colors: []string{
                                    "iusto",
                                    "dignissimos",
                                    "libero",
                                    "illo",
                                },
                            },
                            Conditions: []string{
                                "incidunt",
                            },
                            Description: sdk.String("accusamus"),
                            ExpireTime: sdk.String("saepe"),
                            FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "eos",
                                        "reiciendis",
                                    },
                                    Type: sdk.String("earum"),
                                },
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "praesentium",
                                        "nemo",
                                    },
                                    Type: sdk.String("repellat"),
                                },
                                shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                    PlaceIds: []string{
                                        "sequi",
                                        "nihil",
                                        "deleniti",
                                        "illo",
                                    },
                                    Type: sdk.String("labore"),
                                },
                            },
                            Gtin: sdk.String("assumenda"),
                            ID: sdk.String("4c98e0c2-bb89-4eb7-9dad-636c600503d8"),
                            Images: []shared.GoogleCloudRetailV2alphaImage{
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(736853),
                                    URI: sdk.String("http://bumpy-butane.name"),
                                    Width: sdk.Int(40710),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(938412),
                                    URI: sdk.String("http://elementary-necessity.net"),
                                    Width: sdk.Int(897956),
                                },
                                shared.GoogleCloudRetailV2alphaImage{
                                    Height: sdk.Int(592880),
                                    URI: sdk.String("https://active-freckle.info"),
                                    Width: sdk.Int(930840),
                                },
                            },
                            LanguageCode: sdk.String("facilis"),
                            Materials: []string{
                                "aperiam",
                                "sint",
                                "accusamus",
                            },
                            Name: sdk.String("Mrs. Deanna Buckridge"),
                            Patterns: []string{
                                "a",
                            },
                            PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                Cost: sdk.Float32(2232.91),
                                CurrencyCode: sdk.String("occaecati"),
                                OriginalPrice: sdk.Float32(5398.13),
                                Price: sdk.Float32(1074.72),
                                PriceEffectiveTime: sdk.String("at"),
                                PriceExpireTime: sdk.String("labore"),
                                PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                    OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(7949.88),
                                        ExclusiveMinimum: sdk.Float64(4567.04),
                                        Maximum: sdk.Float64(323.56),
                                        Minimum: sdk.Float64(209.5),
                                    },
                                    Price: &shared.GoogleCloudRetailV2alphaInterval{
                                        ExclusiveMaximum: sdk.Float64(6985.58),
                                        ExclusiveMinimum: sdk.Float64(4116.15),
                                        Maximum: sdk.Float64(467.91),
                                        Minimum: sdk.Float64(4894.59),
                                    },
                                },
                            },
                            PrimaryProductID: sdk.String("repellat"),
                            Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                shared.GoogleCloudRetailV2alphaPromotion{
                                    PromotionID: sdk.String("porro"),
                                },
                            },
                            PublishTime: sdk.String("provident"),
                            Rating: &shared.GoogleCloudRetailV2alphaRating{
                                AverageRating: sdk.Float32(2313.82),
                                RatingCount: sdk.Int(753240),
                                RatingHistogram: []int{
                                    235834,
                                    744101,
                                },
                            },
                            RetrievableFields: sdk.String("natus"),
                            Sizes: []string{
                                "officia",
                                "amet",
                                "tenetur",
                                "aspernatur",
                            },
                            Tags: []string{
                                "itaque",
                                "illum",
                                "laborum",
                                "dignissimos",
                            },
                            Title: sdk.String("Dr."),
                            TTL: sdk.String("qui"),
                            Type: shared.GoogleCloudRetailV2alphaProductTypeEnumTypeUnspecified.ToPointer(),
                            URI: sdk.String("https://colorless-caption.info"),
                        },
                        Quantity: sdk.Int(471457),
                    },
                },
                PurchaseTransaction: &shared.GoogleCloudRetailV2alphaPurchaseTransaction{
                    Cost: sdk.Float32(2527),
                    CurrencyCode: sdk.String("ab"),
                    ID: sdk.String("1faf4b75-44e4-472e-8028-57a5b40463a7"),
                    Revenue: sdk.Float32(8532.46),
                    Tax: sdk.Float32(3451.38),
                },
                ReferrerURI: sdk.String("molestiae"),
                SearchQuery: sdk.String("veniam"),
                SessionID: sdk.String("reiciendis"),
                URI: sdk.String("http://famous-aftermath.com"),
                UserInfo: &shared.GoogleCloudRetailV2alphaUserInfo{
                    DirectUserRequest: sdk.Bool(false),
                    IPAddress: sdk.String("eveniet"),
                    UserAgent: sdk.String("odio"),
                    UserID: sdk.String("commodi"),
                },
                VisitorID: sdk.String("numquam"),
            },
            ValidateOnly: sdk.Bool(false),
        },
        AccessToken: sdk.String("dolorum"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("voluptate"),
        Fields: sdk.String("consectetur"),
        Key: sdk.String("nesciunt"),
        OauthToken: sdk.String("quaerat"),
        Placement: "itaque",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("minus"),
        UploadType: sdk.String("sunt"),
        UploadProtocol: sdk.String("distinctio"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsPredictSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaPredictResponse != nil {
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
        GoogleCloudRetailV2alphaRemoveControlRequest: &shared.GoogleCloudRetailV2alphaRemoveControlRequest{
            ControlID: sdk.String("quas"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("amet"),
        Fields: sdk.String("autem"),
        Key: sdk.String("fuga"),
        OauthToken: sdk.String("alias"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("rem"),
        ServingConfig: "aut",
        UploadType: sdk.String("quos"),
        UploadProtocol: sdk.String("laudantium"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsRemoveControlSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaServingConfig != nil {
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
        GoogleCloudRetailV2alphaSearchRequest: &shared.GoogleCloudRetailV2alphaSearchRequest{
            BoostSpec: &shared.GoogleCloudRetailV2alphaSearchRequestBoostSpec{
                ConditionBoostSpecs: []shared.GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec{
                    shared.GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec{
                        Boost: sdk.Float32(607.78),
                        Condition: sdk.String("eaque"),
                    },
                },
                SkipBoostSpecValidation: sdk.Bool(false),
            },
            Branch: sdk.String("saepe"),
            CanonicalFilter: sdk.String("delectus"),
            DynamicFacetSpec: &shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec{
                Mode: shared.GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnumDisabled.ToPointer(),
            },
            Entity: sdk.String("nulla"),
            FacetSpecs: []shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec{
                shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec{
                    EnableDynamicPosition: sdk.Bool(false),
                    ExcludedFilterKeys: []string{
                        "voluptatem",
                    },
                    FacetKey: &shared.GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey{
                        CaseInsensitive: sdk.Bool(false),
                        Contains: []string{
                            "eveniet",
                        },
                        Intervals: []shared.GoogleCloudRetailV2alphaInterval{
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(279.82),
                                ExclusiveMinimum: sdk.Float64(2783.25),
                                Maximum: sdk.Float64(1854.48),
                                Minimum: sdk.Float64(1858.97),
                            },
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(8959.12),
                                ExclusiveMinimum: sdk.Float64(6915.08),
                                Maximum: sdk.Float64(1267.27),
                                Minimum: sdk.Float64(1089.03),
                            },
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(3979.88),
                                ExclusiveMinimum: sdk.Float64(2646.49),
                                Maximum: sdk.Float64(7600.49),
                                Minimum: sdk.Float64(9750.95),
                            },
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(5629.48),
                                ExclusiveMinimum: sdk.Float64(6394.63),
                                Maximum: sdk.Float64(7304.78),
                                Minimum: sdk.Float64(5206.78),
                            },
                        },
                        Key: sdk.String("sequi"),
                        OrderBy: sdk.String("aliquid"),
                        Prefixes: []string{
                            "impedit",
                            "ducimus",
                        },
                        Query: sdk.String("odit"),
                        RestrictedValues: []string{
                            "reiciendis",
                        },
                        ReturnMinMax: sdk.Bool(false),
                    },
                    Limit: sdk.Int(997918),
                },
                shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec{
                    EnableDynamicPosition: sdk.Bool(false),
                    ExcludedFilterKeys: []string{
                        "laborum",
                        "natus",
                        "accusamus",
                        "doloremque",
                    },
                    FacetKey: &shared.GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey{
                        CaseInsensitive: sdk.Bool(false),
                        Contains: []string{
                            "rerum",
                            "recusandae",
                        },
                        Intervals: []shared.GoogleCloudRetailV2alphaInterval{
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(2516.27),
                                ExclusiveMinimum: sdk.Float64(5245.77),
                                Maximum: sdk.Float64(1578.84),
                                Minimum: sdk.Float64(3542.25),
                            },
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(7868.6),
                                ExclusiveMinimum: sdk.Float64(1202.77),
                                Maximum: sdk.Float64(9730.17),
                                Minimum: sdk.Float64(7549.01),
                            },
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(620.35),
                                ExclusiveMinimum: sdk.Float64(8850.22),
                                Maximum: sdk.Float64(1000.02),
                                Minimum: sdk.Float64(1002.51),
                            },
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(3178.98),
                                ExclusiveMinimum: sdk.Float64(7589.85),
                                Maximum: sdk.Float64(5259.51),
                                Minimum: sdk.Float64(170.6),
                            },
                        },
                        Key: sdk.String("facilis"),
                        OrderBy: sdk.String("reiciendis"),
                        Prefixes: []string{
                            "iste",
                            "dicta",
                            "quos",
                            "ullam",
                        },
                        Query: sdk.String("dolore"),
                        RestrictedValues: []string{
                            "itaque",
                            "maxime",
                        },
                        ReturnMinMax: sdk.Bool(false),
                    },
                    Limit: sdk.Int(265905),
                },
                shared.GoogleCloudRetailV2alphaSearchRequestFacetSpec{
                    EnableDynamicPosition: sdk.Bool(false),
                    ExcludedFilterKeys: []string{
                        "assumenda",
                    },
                    FacetKey: &shared.GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey{
                        CaseInsensitive: sdk.Bool(false),
                        Contains: []string{
                            "doloribus",
                            "impedit",
                            "porro",
                            "accusamus",
                        },
                        Intervals: []shared.GoogleCloudRetailV2alphaInterval{
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(9691.68),
                                ExclusiveMinimum: sdk.Float64(660.74),
                                Maximum: sdk.Float64(5734.44),
                                Minimum: sdk.Float64(4724.14),
                            },
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(4584.12),
                                ExclusiveMinimum: sdk.Float64(4382.56),
                                Maximum: sdk.Float64(4850.31),
                                Minimum: sdk.Float64(2027.96),
                            },
                            shared.GoogleCloudRetailV2alphaInterval{
                                ExclusiveMaximum: sdk.Float64(8955.13),
                                ExclusiveMinimum: sdk.Float64(4235.88),
                                Maximum: sdk.Float64(2086.83),
                                Minimum: sdk.Float64(3577.58),
                            },
                        },
                        Key: sdk.String("voluptas"),
                        OrderBy: sdk.String("consequuntur"),
                        Prefixes: []string{
                            "reprehenderit",
                            "distinctio",
                            "eius",
                        },
                        Query: sdk.String("ipsa"),
                        RestrictedValues: []string{
                            "maiores",
                            "accusantium",
                            "veniam",
                        },
                        ReturnMinMax: sdk.Bool(false),
                    },
                    Limit: sdk.Int(906232),
                },
            },
            Filter: sdk.String("neque"),
            Labels: map[string]string{
                "aliquam": "quos",
                "doloribus": "fugiat",
                "est": "delectus",
                "velit": "vitae",
            },
            Offset: sdk.Int(201096),
            OrderBy: sdk.String("similique"),
            PageCategories: []string{
                "repellat",
            },
            PageSize: sdk.Int(363214),
            PageToken: sdk.String("doloribus"),
            PersonalizationSpec: &shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec{
                Mode: shared.GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnumDisabled.ToPointer(),
            },
            Query: sdk.String("unde"),
            QueryExpansionSpec: &shared.GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec{
                Condition: shared.GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnumConditionUnspecified.ToPointer(),
                PinUnexpandedResults: sdk.Bool(false),
            },
            RelevanceThreshold: shared.GoogleCloudRetailV2alphaSearchRequestRelevanceThresholdEnumRelevanceThresholdUnspecified.ToPointer(),
            SearchMode: shared.GoogleCloudRetailV2alphaSearchRequestSearchModeEnumProductSearchOnly.ToPointer(),
            SpellCorrectionSpec: &shared.GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec{
                Mode: shared.GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnumSuggestionOnly.ToPointer(),
            },
            UserInfo: &shared.GoogleCloudRetailV2alphaUserInfo{
                DirectUserRequest: sdk.Bool(false),
                IPAddress: sdk.String("optio"),
                UserAgent: sdk.String("alias"),
                UserID: sdk.String("quidem"),
            },
            VariantRollupKeys: []string{
                "commodi",
            },
            VisitorID: sdk.String("sapiente"),
        },
        AccessToken: sdk.String("consequuntur"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("officia"),
        Key: sdk.String("sint"),
        OauthToken: sdk.String("ut"),
        Placement: "numquam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("tenetur"),
        UploadType: sdk.String("adipisci"),
        UploadProtocol: sdk.String("libero"),
    }, operations.RetailProjectsLocationsCatalogsServingConfigsSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaSearchResponse != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        GoogleCloudRetailV2alphaSetDefaultBranchRequest: &shared.GoogleCloudRetailV2alphaSetDefaultBranchRequest{
            BranchID: sdk.String("minima"),
            Force: sdk.Bool(false),
            Note: sdk.String("ex"),
        },
        AccessToken: sdk.String("minus"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("beatae"),
        Catalog: "hic",
        Fields: sdk.String("nisi"),
        Key: sdk.String("quisquam"),
        OauthToken: sdk.String("dolor"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ducimus"),
        UploadType: sdk.String("fuga"),
        UploadProtocol: sdk.String("minima"),
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
        AccessToken: sdk.String("qui"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("magni"),
        Ets: sdk.String("incidunt"),
        Fields: sdk.String("adipisci"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("dolor"),
        Parent: "exercitationem",
        PrebuiltRule: sdk.String("expedita"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("facilis"),
        RawJSON: sdk.String("impedit"),
        UploadType: sdk.String("sit"),
        UploadProtocol: sdk.String("nemo"),
        URI: sdk.String("https://cultured-cupboard.name"),
        UserEvent: sdk.String("modi"),
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
        GoogleCloudRetailV2alphaImportUserEventsRequestInput: &shared.GoogleCloudRetailV2alphaImportUserEventsRequestInput{
            ErrorsConfig: &shared.GoogleCloudRetailV2alphaImportErrorsConfig{
                GcsPrefix: sdk.String("quod"),
            },
            InputConfig: &shared.GoogleCloudRetailV2alphaUserEventInputConfigInput{
                BigQuerySource: &shared.GoogleCloudRetailV2alphaBigQuerySource{
                    DataSchema: sdk.String("itaque"),
                    DatasetID: sdk.String("a"),
                    GcsStagingDir: sdk.String("quisquam"),
                    PartitionDate: &shared.GoogleTypeDate{
                        Day: sdk.Int(316550),
                        Month: sdk.Int(987759),
                        Year: sdk.Int(826806),
                    },
                    ProjectID: sdk.String("officiis"),
                    TableID: sdk.String("architecto"),
                },
                GcsSource: &shared.GoogleCloudRetailV2alphaGcsSource{
                    DataSchema: sdk.String("alias"),
                    InputUris: []string{
                        "ipsa",
                        "nobis",
                        "necessitatibus",
                    },
                },
                UserEventInlineSource: &shared.GoogleCloudRetailV2alphaUserEventInlineSourceInput{
                    UserEvents: []shared.GoogleCloudRetailV2alphaUserEventInput{
                        shared.GoogleCloudRetailV2alphaUserEventInput{
                            Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                "vel": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                    Indexable: sdk.Bool(false),
                                    Numbers: []float64{
                                        8927.08,
                                        3548.21,
                                        1035.78,
                                    },
                                    Searchable: sdk.Bool(false),
                                    Text: []string{
                                        "perferendis",
                                    },
                                },
                            },
                            AttributionToken: sdk.String("veritatis"),
                            CartID: sdk.String("provident"),
                            CompletionDetail: &shared.GoogleCloudRetailV2alphaCompletionDetail{
                                CompletionAttributionToken: sdk.String("cumque"),
                                SelectedPosition: sdk.Int(435531),
                                SelectedSuggestion: sdk.String("quibusdam"),
                            },
                            Entity: sdk.String("quod"),
                            EventTime: sdk.String("nemo"),
                            EventType: sdk.String("recusandae"),
                            ExperimentIds: []string{
                                "magnam",
                            },
                            Filter: sdk.String("dignissimos"),
                            Offset: sdk.Int(388404),
                            OrderBy: sdk.String("sed"),
                            PageCategories: []string{
                                "natus",
                                "provident",
                            },
                            PageViewID: sdk.String("cum"),
                            ProductDetails: []shared.GoogleCloudRetailV2alphaProductDetailInput{
                                shared.GoogleCloudRetailV2alphaProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2alphaProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                            "quidem": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    3895.48,
                                                    6017.14,
                                                    2637.67,
                                                    5951.98,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "cum",
                                                    "aspernatur",
                                                    "libero",
                                                    "nam",
                                                },
                                            },
                                            "incidunt": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7972.54,
                                                    6646.66,
                                                    9044.4,
                                                    4230.54,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "nesciunt",
                                                    "illum",
                                                    "nemo",
                                                    "illum",
                                                },
                                            },
                                            "facilis": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    6495.34,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "recusandae",
                                                    "distinctio",
                                                    "pariatur",
                                                    "ad",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2alphaAudience{
                                            AgeGroups: []string{
                                                "laborum",
                                                "eveniet",
                                                "laborum",
                                                "incidunt",
                                            },
                                            Genders: []string{
                                                "ipsam",
                                                "alias",
                                                "suscipit",
                                                "deserunt",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumOutOfStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(672889),
                                        AvailableTime: sdk.String("est"),
                                        Brands: []string{
                                            "labore",
                                            "quo",
                                            "perferendis",
                                        },
                                        Categories: []string{
                                            "aliquid",
                                        },
                                        CollectionMemberIds: []string{
                                            "quaerat",
                                            "eligendi",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                                            ColorFamilies: []string{
                                                "nostrum",
                                                "officiis",
                                                "unde",
                                                "nulla",
                                            },
                                            Colors: []string{
                                                "mollitia",
                                                "magnam",
                                                "nostrum",
                                            },
                                        },
                                        Conditions: []string{
                                            "corrupti",
                                            "fuga",
                                        },
                                        Description: sdk.String("facere"),
                                        ExpireTime: sdk.String("impedit"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "quod",
                                                    "laboriosam",
                                                    "doloremque",
                                                },
                                                Type: sdk.String("voluptatem"),
                                            },
                                        },
                                        Gtin: sdk.String("facere"),
                                        ID: sdk.String("ec001ac8-02e2-4ec0-9ff8-f0f816ff3477"),
                                        Images: []shared.GoogleCloudRetailV2alphaImage{
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(94697),
                                                URI: sdk.String("http://tubby-mirror.com"),
                                                Width: sdk.Int(185816),
                                            },
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(771241),
                                                URI: sdk.String("http://female-burrito.com"),
                                                Width: sdk.Int(357639),
                                            },
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(701441),
                                                URI: sdk.String("http://pink-hepatitis.com"),
                                                Width: sdk.Int(664197),
                                            },
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(388169),
                                                URI: sdk.String("http://narrow-blackberry.info"),
                                                Width: sdk.Int(62688),
                                            },
                                        },
                                        LanguageCode: sdk.String("similique"),
                                        Materials: []string{
                                            "quam",
                                            "magni",
                                        },
                                        Name: sdk.String("Toby Monahan"),
                                        Patterns: []string{
                                            "quis",
                                            "cupiditate",
                                            "aliquam",
                                            "excepturi",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                            Cost: sdk.Float32(9804.1),
                                            CurrencyCode: sdk.String("laudantium"),
                                            OriginalPrice: sdk.Float32(2439.04),
                                            Price: sdk.Float32(9717.64),
                                            PriceEffectiveTime: sdk.String("amet"),
                                            PriceExpireTime: sdk.String("nemo"),
                                            PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                                    ExclusiveMaximum: sdk.Float64(574.7),
                                                    ExclusiveMinimum: sdk.Float64(7879.16),
                                                    Maximum: sdk.Float64(9484.44),
                                                    Minimum: sdk.Float64(5552.94),
                                                },
                                                Price: &shared.GoogleCloudRetailV2alphaInterval{
                                                    ExclusiveMaximum: sdk.Float64(4760.03),
                                                    ExclusiveMinimum: sdk.Float64(3956.34),
                                                    Maximum: sdk.Float64(9890.33),
                                                    Minimum: sdk.Float64(9554.66),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("nobis"),
                                        Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("accusantium"),
                                            },
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("dicta"),
                                            },
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("minus"),
                                            },
                                        },
                                        PublishTime: sdk.String("commodi"),
                                        Rating: &shared.GoogleCloudRetailV2alphaRating{
                                            AverageRating: sdk.Float32(9087.34),
                                            RatingCount: sdk.Int(781582),
                                            RatingHistogram: []int{
                                                693747,
                                                265930,
                                                916341,
                                            },
                                        },
                                        RetrievableFields: sdk.String("fugit"),
                                        Sizes: []string{
                                            "sequi",
                                            "eligendi",
                                        },
                                        Tags: []string{
                                            "esse",
                                            "blanditiis",
                                            "sint",
                                            "repellat",
                                        },
                                        Title: sdk.String("Dr."),
                                        TTL: sdk.String("animi"),
                                        Type: shared.GoogleCloudRetailV2alphaProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("https://tired-pea.info"),
                                    },
                                    Quantity: sdk.Int(246577),
                                },
                                shared.GoogleCloudRetailV2alphaProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2alphaProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                            "enim": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    9029.79,
                                                    4299.97,
                                                    9220.94,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "officia",
                                                },
                                            },
                                            "impedit": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    5021.06,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "quisquam",
                                                    "eos",
                                                },
                                            },
                                            "nobis": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    7935.68,
                                                    1543.89,
                                                    3006.51,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "quod",
                                                    "quos",
                                                },
                                            },
                                            "corrupti": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    4733.26,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "laborum",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2alphaAudience{
                                            AgeGroups: []string{
                                                "perferendis",
                                                "necessitatibus",
                                            },
                                            Genders: []string{
                                                "molestias",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumInStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(125811),
                                        AvailableTime: sdk.String("maiores"),
                                        Brands: []string{
                                            "odit",
                                        },
                                        Categories: []string{
                                            "veniam",
                                            "ipsam",
                                            "eaque",
                                            "exercitationem",
                                        },
                                        CollectionMemberIds: []string{
                                            "nihil",
                                            "ad",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                                            ColorFamilies: []string{
                                                "tenetur",
                                                "quis",
                                            },
                                            Colors: []string{
                                                "nemo",
                                                "suscipit",
                                                "pariatur",
                                                "sit",
                                            },
                                        },
                                        Conditions: []string{
                                            "repellendus",
                                            "perferendis",
                                            "id",
                                        },
                                        Description: sdk.String("sapiente"),
                                        ExpireTime: sdk.String("sed"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "repudiandae",
                                                    "architecto",
                                                    "adipisci",
                                                    "pariatur",
                                                },
                                                Type: sdk.String("harum"),
                                            },
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "voluptatibus",
                                                    "iure",
                                                },
                                                Type: sdk.String("explicabo"),
                                            },
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "soluta",
                                                    "dolorum",
                                                    "velit",
                                                    "earum",
                                                },
                                                Type: sdk.String("praesentium"),
                                            },
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "non",
                                                    "quasi",
                                                    "mollitia",
                                                },
                                                Type: sdk.String("accusamus"),
                                            },
                                        },
                                        Gtin: sdk.String("harum"),
                                        ID: sdk.String("c0b80a69-24d3-4b2e-8fcc-8f895010f5dd"),
                                        Images: []shared.GoogleCloudRetailV2alphaImage{
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(866135),
                                                URI: sdk.String("http://well-worn-petal.com"),
                                                Width: sdk.Int(552646),
                                            },
                                        },
                                        LanguageCode: sdk.String("aperiam"),
                                        Materials: []string{
                                            "voluptates",
                                            "ad",
                                        },
                                        Name: sdk.String("Rosalie Lynch"),
                                        Patterns: []string{
                                            "aliquid",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                            Cost: sdk.Float32(5131.85),
                                            CurrencyCode: sdk.String("est"),
                                            OriginalPrice: sdk.Float32(2213.29),
                                            Price: sdk.Float32(4008.79),
                                            PriceEffectiveTime: sdk.String("consectetur"),
                                            PriceExpireTime: sdk.String("cumque"),
                                            PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                                    ExclusiveMaximum: sdk.Float64(5259.17),
                                                    ExclusiveMinimum: sdk.Float64(5277.15),
                                                    Maximum: sdk.Float64(4985.34),
                                                    Minimum: sdk.Float64(2375.23),
                                                },
                                                Price: &shared.GoogleCloudRetailV2alphaInterval{
                                                    ExclusiveMaximum: sdk.Float64(9279.59),
                                                    ExclusiveMinimum: sdk.Float64(2713.06),
                                                    Maximum: sdk.Float64(5034.49),
                                                    Minimum: sdk.Float64(2580.59),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("sequi"),
                                        Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("sit"),
                                            },
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("rerum"),
                                            },
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("veritatis"),
                                            },
                                        },
                                        PublishTime: sdk.String("tenetur"),
                                        Rating: &shared.GoogleCloudRetailV2alphaRating{
                                            AverageRating: sdk.Float32(4198.58),
                                            RatingCount: sdk.Int(694088),
                                            RatingHistogram: []int{
                                                781193,
                                                646491,
                                                168926,
                                            },
                                        },
                                        RetrievableFields: sdk.String("nihil"),
                                        Sizes: []string{
                                            "animi",
                                            "commodi",
                                        },
                                        Tags: []string{
                                            "fuga",
                                        },
                                        Title: sdk.String("Mr."),
                                        TTL: sdk.String("dolore"),
                                        Type: shared.GoogleCloudRetailV2alphaProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("http://pastel-foam.net"),
                                    },
                                    Quantity: sdk.Int(810302),
                                },
                                shared.GoogleCloudRetailV2alphaProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2alphaProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                            "occaecati": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    752.77,
                                                    4691.7,
                                                    782.46,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "ipsam",
                                                    "quasi",
                                                    "cumque",
                                                },
                                            },
                                            "dicta": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    8132.24,
                                                    7079.83,
                                                    1053.72,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "delectus",
                                                    "labore",
                                                    "expedita",
                                                    "corrupti",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2alphaAudience{
                                            AgeGroups: []string{
                                                "atque",
                                                "officiis",
                                                "cum",
                                            },
                                            Genders: []string{
                                                "sapiente",
                                                "quo",
                                                "incidunt",
                                                "quod",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumPreorder.ToPointer(),
                                        AvailableQuantity: sdk.Int(781491),
                                        AvailableTime: sdk.String("id"),
                                        Brands: []string{
                                            "occaecati",
                                            "libero",
                                            "quo",
                                        },
                                        Categories: []string{
                                            "hic",
                                            "maxime",
                                        },
                                        CollectionMemberIds: []string{
                                            "soluta",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                                            ColorFamilies: []string{
                                                "pariatur",
                                            },
                                            Colors: []string{
                                                "recusandae",
                                                "veritatis",
                                                "aut",
                                                "laudantium",
                                            },
                                        },
                                        Conditions: []string{
                                            "dolor",
                                            "voluptates",
                                        },
                                        Description: sdk.String("tempora"),
                                        ExpireTime: sdk.String("magni"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "voluptatem",
                                                },
                                                Type: sdk.String("eum"),
                                            },
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "eum",
                                                    "reprehenderit",
                                                    "voluptatum",
                                                    "blanditiis",
                                                },
                                                Type: sdk.String("nihil"),
                                            },
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "rerum",
                                                    "deserunt",
                                                    "atque",
                                                },
                                                Type: sdk.String("nostrum"),
                                            },
                                        },
                                        Gtin: sdk.String("atque"),
                                        ID: sdk.String("1a58208c-54fe-4fa9-895f-2eac5565d307"),
                                        Images: []shared.GoogleCloudRetailV2alphaImage{
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(990369),
                                                URI: sdk.String("https://upbeat-legend.com"),
                                                Width: sdk.Int(144179),
                                            },
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(25190),
                                                URI: sdk.String("http://unrealistic-charge.name"),
                                                Width: sdk.Int(122744),
                                            },
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(200190),
                                                URI: sdk.String("https://quirky-embellishment.name"),
                                                Width: sdk.Int(266680),
                                            },
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(122085),
                                                URI: sdk.String("https://fabulous-lychee.com"),
                                                Width: sdk.Int(872991),
                                            },
                                        },
                                        LanguageCode: sdk.String("dolorem"),
                                        Materials: []string{
                                            "aspernatur",
                                            "inventore",
                                            "sequi",
                                            "fugit",
                                        },
                                        Name: sdk.String("Moses Beatty Jr."),
                                        Patterns: []string{
                                            "nulla",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                            Cost: sdk.Float32(3165.41),
                                            CurrencyCode: sdk.String("illo"),
                                            OriginalPrice: sdk.Float32(2987.5),
                                            Price: sdk.Float32(9618.42),
                                            PriceEffectiveTime: sdk.String("numquam"),
                                            PriceExpireTime: sdk.String("optio"),
                                            PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                                    ExclusiveMaximum: sdk.Float64(7505.37),
                                                    ExclusiveMinimum: sdk.Float64(4044.22),
                                                    Maximum: sdk.Float64(9980.23),
                                                    Minimum: sdk.Float64(651.18),
                                                },
                                                Price: &shared.GoogleCloudRetailV2alphaInterval{
                                                    ExclusiveMaximum: sdk.Float64(5339.78),
                                                    ExclusiveMinimum: sdk.Float64(7116.15),
                                                    Maximum: sdk.Float64(9442.03),
                                                    Minimum: sdk.Float64(5698.34),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("aliquid"),
                                        Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("beatae"),
                                            },
                                        },
                                        PublishTime: sdk.String("similique"),
                                        Rating: &shared.GoogleCloudRetailV2alphaRating{
                                            AverageRating: sdk.Float32(4087.74),
                                            RatingCount: sdk.Int(657301),
                                            RatingHistogram: []int{
                                                945419,
                                                493407,
                                            },
                                        },
                                        RetrievableFields: sdk.String("esse"),
                                        Sizes: []string{
                                            "laudantium",
                                            "esse",
                                            "eveniet",
                                        },
                                        Tags: []string{
                                            "velit",
                                            "officiis",
                                            "eius",
                                            "rerum",
                                        },
                                        Title: sdk.String("Dr."),
                                        TTL: sdk.String("dignissimos"),
                                        Type: shared.GoogleCloudRetailV2alphaProductTypeEnumPrimary.ToPointer(),
                                        URI: sdk.String("http://sniveling-granny.info"),
                                    },
                                    Quantity: sdk.Int(704402),
                                },
                                shared.GoogleCloudRetailV2alphaProductDetailInput{
                                    Product: &shared.GoogleCloudRetailV2alphaProductInput{
                                        Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                                            "ut": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                                Indexable: sdk.Bool(false),
                                                Numbers: []float64{
                                                    1039.88,
                                                    5069.66,
                                                },
                                                Searchable: sdk.Bool(false),
                                                Text: []string{
                                                    "dolor",
                                                    "expedita",
                                                    "libero",
                                                    "iste",
                                                },
                                            },
                                        },
                                        Audience: &shared.GoogleCloudRetailV2alphaAudience{
                                            AgeGroups: []string{
                                                "minus",
                                            },
                                            Genders: []string{
                                                "temporibus",
                                                "sint",
                                                "iusto",
                                            },
                                        },
                                        Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumInStock.ToPointer(),
                                        AvailableQuantity: sdk.Int(881189),
                                        AvailableTime: sdk.String("aperiam"),
                                        Brands: []string{
                                            "laudantium",
                                            "tempora",
                                            "quae",
                                            "omnis",
                                        },
                                        Categories: []string{
                                            "rem",
                                            "tenetur",
                                            "deleniti",
                                            "modi",
                                        },
                                        CollectionMemberIds: []string{
                                            "architecto",
                                            "aliquam",
                                            "labore",
                                            "maiores",
                                        },
                                        ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                                            ColorFamilies: []string{
                                                "saepe",
                                            },
                                            Colors: []string{
                                                "esse",
                                            },
                                        },
                                        Conditions: []string{
                                            "facere",
                                            "quisquam",
                                            "cumque",
                                            "aliquam",
                                        },
                                        Description: sdk.String("dolorum"),
                                        ExpireTime: sdk.String("deserunt"),
                                        FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "sequi",
                                                    "porro",
                                                    "laborum",
                                                    "nobis",
                                                },
                                                Type: sdk.String("quibusdam"),
                                            },
                                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                                PlaceIds: []string{
                                                    "aut",
                                                    "ipsam",
                                                    "officia",
                                                },
                                                Type: sdk.String("cupiditate"),
                                            },
                                        },
                                        Gtin: sdk.String("reprehenderit"),
                                        ID: sdk.String("2e056728-227b-42d3-8947-0bf7a4fa87cf"),
                                        Images: []shared.GoogleCloudRetailV2alphaImage{
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(247767),
                                                URI: sdk.String("http://quixotic-gateway.org"),
                                                Width: sdk.Int(657862),
                                            },
                                            shared.GoogleCloudRetailV2alphaImage{
                                                Height: sdk.Int(925994),
                                                URI: sdk.String("http://exciting-theism.net"),
                                                Width: sdk.Int(983275),
                                            },
                                        },
                                        LanguageCode: sdk.String("laboriosam"),
                                        Materials: []string{
                                            "optio",
                                        },
                                        Name: sdk.String("Ashley Bruen Sr."),
                                        Patterns: []string{
                                            "rerum",
                                        },
                                        PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                                            Cost: sdk.Float32(4467.93),
                                            CurrencyCode: sdk.String("nostrum"),
                                            OriginalPrice: sdk.Float32(8369.91),
                                            Price: sdk.Float32(1869.37),
                                            PriceEffectiveTime: sdk.String("dolor"),
                                            PriceExpireTime: sdk.String("nisi"),
                                            PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                                OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                                    ExclusiveMaximum: sdk.Float64(4939.45),
                                                    ExclusiveMinimum: sdk.Float64(9713.6),
                                                    Maximum: sdk.Float64(9296.19),
                                                    Minimum: sdk.Float64(1147.67),
                                                },
                                                Price: &shared.GoogleCloudRetailV2alphaInterval{
                                                    ExclusiveMaximum: sdk.Float64(6672.15),
                                                    ExclusiveMinimum: sdk.Float64(330.93),
                                                    Maximum: sdk.Float64(7980.79),
                                                    Minimum: sdk.Float64(7961.17),
                                                },
                                            },
                                        },
                                        PrimaryProductID: sdk.String("quos"),
                                        Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("maiores"),
                                            },
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("odio"),
                                            },
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("provident"),
                                            },
                                            shared.GoogleCloudRetailV2alphaPromotion{
                                                PromotionID: sdk.String("sapiente"),
                                            },
                                        },
                                        PublishTime: sdk.String("aperiam"),
                                        Rating: &shared.GoogleCloudRetailV2alphaRating{
                                            AverageRating: sdk.Float32(6277.17),
                                            RatingCount: sdk.Int(197982),
                                            RatingHistogram: []int{
                                                404774,
                                                832944,
                                                601277,
                                            },
                                        },
                                        RetrievableFields: sdk.String("alias"),
                                        Sizes: []string{
                                            "sequi",
                                            "commodi",
                                            "labore",
                                            "expedita",
                                        },
                                        Tags: []string{
                                            "quisquam",
                                            "sunt",
                                        },
                                        Title: sdk.String("Mrs."),
                                        TTL: sdk.String("nulla"),
                                        Type: shared.GoogleCloudRetailV2alphaProductTypeEnumCollection.ToPointer(),
                                        URI: sdk.String("https://prickly-savannah.org"),
                                    },
                                    Quantity: sdk.Int(91120),
                                },
                            },
                            PurchaseTransaction: &shared.GoogleCloudRetailV2alphaPurchaseTransaction{
                                Cost: sdk.Float32(5559.38),
                                CurrencyCode: sdk.String("blanditiis"),
                                ID: sdk.String("b1c4ee2c-8c6c-4e61-9fee-b1c7cbdb6eec"),
                                Revenue: sdk.Float32(4695.88),
                                Tax: sdk.Float32(3109.3),
                            },
                            ReferrerURI: sdk.String("ipsum"),
                            SearchQuery: sdk.String("ducimus"),
                            SessionID: sdk.String("laudantium"),
                            URI: sdk.String("https://practical-catcher.biz"),
                            UserInfo: &shared.GoogleCloudRetailV2alphaUserInfo{
                                DirectUserRequest: sdk.Bool(false),
                                IPAddress: sdk.String("sequi"),
                                UserAgent: sdk.String("beatae"),
                                UserID: sdk.String("iusto"),
                            },
                            VisitorID: sdk.String("esse"),
                        },
                    },
                },
            },
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("cupiditate"),
        OauthToken: sdk.String("illo"),
        Parent: "exercitationem",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("illum"),
        UploadProtocol: sdk.String("fugit"),
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
        GoogleCloudRetailV2alphaPurgeUserEventsRequest: &shared.GoogleCloudRetailV2alphaPurgeUserEventsRequest{
            Filter: sdk.String("dolorum"),
            Force: sdk.Bool(false),
        },
        AccessToken: sdk.String("repellat"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("illum"),
        Fields: sdk.String("quibusdam"),
        Key: sdk.String("commodi"),
        OauthToken: sdk.String("esse"),
        Parent: "explicabo",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        UploadType: sdk.String("temporibus"),
        UploadProtocol: sdk.String("optio"),
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
        GoogleCloudRetailV2alphaRejoinUserEventsRequest: &shared.GoogleCloudRetailV2alphaRejoinUserEventsRequest{
            UserEventRejoinScope: shared.GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnumUnjoinedEvents.ToPointer(),
        },
        AccessToken: sdk.String("exercitationem"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("repudiandae"),
        Fields: sdk.String("aspernatur"),
        Key: sdk.String("sapiente"),
        OauthToken: sdk.String("neque"),
        Parent: "officia",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        UploadType: sdk.String("harum"),
        UploadProtocol: sdk.String("ducimus"),
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
        GoogleCloudRetailV2alphaUserEventInput: &shared.GoogleCloudRetailV2alphaUserEventInput{
            Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                "laudantium": shared.GoogleCloudRetailV2alphaCustomAttribute{
                    Indexable: sdk.Bool(false),
                    Numbers: []float64{
                        5468.68,
                        4748.85,
                    },
                    Searchable: sdk.Bool(false),
                    Text: []string{
                        "iure",
                        "ab",
                    },
                },
            },
            AttributionToken: sdk.String("quaerat"),
            CartID: sdk.String("amet"),
            CompletionDetail: &shared.GoogleCloudRetailV2alphaCompletionDetail{
                CompletionAttributionToken: sdk.String("sapiente"),
                SelectedPosition: sdk.Int(357984),
                SelectedSuggestion: sdk.String("est"),
            },
            Entity: sdk.String("iure"),
            EventTime: sdk.String("quisquam"),
            EventType: sdk.String("provident"),
            ExperimentIds: []string{
                "nam",
                "nemo",
                "enim",
            },
            Filter: sdk.String("ipsam"),
            Offset: sdk.Int(328954),
            OrderBy: sdk.String("tempora"),
            PageCategories: []string{
                "corrupti",
            },
            PageViewID: sdk.String("doloremque"),
            ProductDetails: []shared.GoogleCloudRetailV2alphaProductDetailInput{
                shared.GoogleCloudRetailV2alphaProductDetailInput{
                    Product: &shared.GoogleCloudRetailV2alphaProductInput{
                        Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                            "doloremque": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    7512.98,
                                    6283.14,
                                    7837.64,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "nisi",
                                    "cumque",
                                    "soluta",
                                    "fugiat",
                                },
                            },
                            "laboriosam": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    3153.87,
                                    9790.11,
                                    2354.82,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "maxime",
                                    "cupiditate",
                                    "voluptatem",
                                    "provident",
                                },
                            },
                        },
                        Audience: &shared.GoogleCloudRetailV2alphaAudience{
                            AgeGroups: []string{
                                "accusantium",
                            },
                            Genders: []string{
                                "repellat",
                                "omnis",
                            },
                        },
                        Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                        AvailableQuantity: sdk.Int(425817),
                        AvailableTime: sdk.String("cum"),
                        Brands: []string{
                            "possimus",
                            "fugit",
                            "ipsam",
                        },
                        Categories: []string{
                            "sequi",
                            "voluptatum",
                        },
                        CollectionMemberIds: []string{
                            "error",
                        },
                        ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                            ColorFamilies: []string{
                                "tempora",
                                "voluptate",
                                "eius",
                            },
                            Colors: []string{
                                "aperiam",
                                "voluptates",
                                "possimus",
                            },
                        },
                        Conditions: []string{
                            "voluptatem",
                        },
                        Description: sdk.String("repudiandae"),
                        ExpireTime: sdk.String("corporis"),
                        FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "aliquam",
                                },
                                Type: sdk.String("blanditiis"),
                            },
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "maiores",
                                    "asperiores",
                                    "autem",
                                    "nesciunt",
                                },
                                Type: sdk.String("cupiditate"),
                            },
                        },
                        Gtin: sdk.String("animi"),
                        ID: sdk.String("910abdca-b626-4766-96e1-ec00221b335d"),
                        Images: []shared.GoogleCloudRetailV2alphaImage{
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(601626),
                                URI: sdk.String("https://silly-refrigerator.biz"),
                                Width: sdk.Int(890112),
                            },
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(751381),
                                URI: sdk.String("https://tangible-pinot.name"),
                                Width: sdk.Int(845365),
                            },
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(27400),
                                URI: sdk.String("https://gigantic-endive.name"),
                                Width: sdk.Int(875693),
                            },
                        },
                        LanguageCode: sdk.String("earum"),
                        Materials: []string{
                            "ipsum",
                        },
                        Name: sdk.String("Laura Goodwin"),
                        Patterns: []string{
                            "officia",
                            "ex",
                            "architecto",
                        },
                        PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                            Cost: sdk.Float32(9535.64),
                            CurrencyCode: sdk.String("laborum"),
                            OriginalPrice: sdk.Float32(842.88),
                            Price: sdk.Float32(8018.16),
                            PriceEffectiveTime: sdk.String("a"),
                            PriceExpireTime: sdk.String("qui"),
                            PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                    ExclusiveMaximum: sdk.Float64(349.89),
                                    ExclusiveMinimum: sdk.Float64(4151.25),
                                    Maximum: sdk.Float64(5389.44),
                                    Minimum: sdk.Float64(5199.85),
                                },
                                Price: &shared.GoogleCloudRetailV2alphaInterval{
                                    ExclusiveMaximum: sdk.Float64(9456.37),
                                    ExclusiveMinimum: sdk.Float64(4518.07),
                                    Maximum: sdk.Float64(4617.54),
                                    Minimum: sdk.Float64(7998.3),
                                },
                            },
                        },
                        PrimaryProductID: sdk.String("vitae"),
                        Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("reiciendis"),
                            },
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("quod"),
                            },
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("voluptate"),
                            },
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("inventore"),
                            },
                        },
                        PublishTime: sdk.String("facere"),
                        Rating: &shared.GoogleCloudRetailV2alphaRating{
                            AverageRating: sdk.Float32(8049.36),
                            RatingCount: sdk.Int(681578),
                            RatingHistogram: []int{
                                405789,
                            },
                        },
                        RetrievableFields: sdk.String("consectetur"),
                        Sizes: []string{
                            "sed",
                            "animi",
                            "sequi",
                            "eligendi",
                        },
                        Tags: []string{
                            "perferendis",
                            "laborum",
                            "omnis",
                        },
                        Title: sdk.String("Ms."),
                        TTL: sdk.String("tenetur"),
                        Type: shared.GoogleCloudRetailV2alphaProductTypeEnumCollection.ToPointer(),
                        URI: sdk.String("http://equal-deployment.net"),
                    },
                    Quantity: sdk.Int(850196),
                },
                shared.GoogleCloudRetailV2alphaProductDetailInput{
                    Product: &shared.GoogleCloudRetailV2alphaProductInput{
                        Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                            "tenetur": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    3712.95,
                                    4562.22,
                                    6757.55,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "voluptates",
                                    "eum",
                                    "quasi",
                                },
                            },
                            "quas": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    4169.34,
                                    7807.89,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "mollitia",
                                    "quidem",
                                },
                            },
                            "explicabo": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    8600.27,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "natus",
                                },
                            },
                            "illum": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    7710.78,
                                    6018.03,
                                    2814.54,
                                    8145.85,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "doloribus",
                                    "recusandae",
                                },
                            },
                        },
                        Audience: &shared.GoogleCloudRetailV2alphaAudience{
                            AgeGroups: []string{
                                "facere",
                                "dignissimos",
                                "iste",
                                "provident",
                            },
                            Genders: []string{
                                "sint",
                            },
                        },
                        Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumAvailabilityUnspecified.ToPointer(),
                        AvailableQuantity: sdk.Int(49456),
                        AvailableTime: sdk.String("eum"),
                        Brands: []string{
                            "laborum",
                            "autem",
                        },
                        Categories: []string{
                            "explicabo",
                            "fugiat",
                            "doloremque",
                            "voluptatem",
                        },
                        CollectionMemberIds: []string{
                            "velit",
                        },
                        ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                            ColorFamilies: []string{
                                "quis",
                                "velit",
                            },
                            Colors: []string{
                                "quas",
                            },
                        },
                        Conditions: []string{
                            "recusandae",
                            "cumque",
                            "doloremque",
                            "totam",
                        },
                        Description: sdk.String("iure"),
                        ExpireTime: sdk.String("maiores"),
                        FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "veritatis",
                                },
                                Type: sdk.String("necessitatibus"),
                            },
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "dicta",
                                    "ipsam",
                                    "consequuntur",
                                },
                                Type: sdk.String("cumque"),
                            },
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "non",
                                    "beatae",
                                    "sunt",
                                },
                                Type: sdk.String("molestias"),
                            },
                        },
                        Gtin: sdk.String("beatae"),
                        ID: sdk.String("67b8e3c8-db03-4408-96d3-64ffd455906d"),
                        Images: []shared.GoogleCloudRetailV2alphaImage{
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(154840),
                                URI: sdk.String("http://dreary-stack.biz"),
                                Width: sdk.Int(523109),
                            },
                        },
                        LanguageCode: sdk.String("officiis"),
                        Materials: []string{
                            "neque",
                            "corporis",
                            "quod",
                        },
                        Name: sdk.String("Nichole Marks"),
                        Patterns: []string{
                            "sapiente",
                        },
                        PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                            Cost: sdk.Float32(2172.79),
                            CurrencyCode: sdk.String("consequatur"),
                            OriginalPrice: sdk.Float32(7428.99),
                            Price: sdk.Float32(8981.55),
                            PriceEffectiveTime: sdk.String("sequi"),
                            PriceExpireTime: sdk.String("recusandae"),
                            PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                    ExclusiveMaximum: sdk.Float64(2863.29),
                                    ExclusiveMinimum: sdk.Float64(2406.24),
                                    Maximum: sdk.Float64(1667.41),
                                    Minimum: sdk.Float64(456.77),
                                },
                                Price: &shared.GoogleCloudRetailV2alphaInterval{
                                    ExclusiveMaximum: sdk.Float64(1726.96),
                                    ExclusiveMinimum: sdk.Float64(8488.6),
                                    Maximum: sdk.Float64(4815.53),
                                    Minimum: sdk.Float64(1689.76),
                                },
                            },
                        },
                        PrimaryProductID: sdk.String("beatae"),
                        Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("ad"),
                            },
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("voluptate"),
                            },
                        },
                        PublishTime: sdk.String("vel"),
                        Rating: &shared.GoogleCloudRetailV2alphaRating{
                            AverageRating: sdk.Float32(3249.99),
                            RatingCount: sdk.Int(24548),
                            RatingHistogram: []int{
                                388333,
                                311247,
                            },
                        },
                        RetrievableFields: sdk.String("quasi"),
                        Sizes: []string{
                            "dignissimos",
                            "doloremque",
                            "assumenda",
                        },
                        Tags: []string{
                            "facere",
                            "sed",
                            "inventore",
                        },
                        Title: sdk.String("Dr."),
                        TTL: sdk.String("unde"),
                        Type: shared.GoogleCloudRetailV2alphaProductTypeEnumVariant.ToPointer(),
                        URI: sdk.String("https://aching-dame.com"),
                    },
                    Quantity: sdk.Int(761927),
                },
                shared.GoogleCloudRetailV2alphaProductDetailInput{
                    Product: &shared.GoogleCloudRetailV2alphaProductInput{
                        Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                            "debitis": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    8061.24,
                                    922.64,
                                    1073.01,
                                    6620.68,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "quos",
                                },
                            },
                            "ratione": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    2704.77,
                                    1773.37,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "voluptatem",
                                    "suscipit",
                                    "laudantium",
                                },
                            },
                        },
                        Audience: &shared.GoogleCloudRetailV2alphaAudience{
                            AgeGroups: []string{
                                "laudantium",
                                "ullam",
                                "aut",
                            },
                            Genders: []string{
                                "officia",
                            },
                        },
                        Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumInStock.ToPointer(),
                        AvailableQuantity: sdk.Int(361371),
                        AvailableTime: sdk.String("accusamus"),
                        Brands: []string{
                            "sapiente",
                            "esse",
                        },
                        Categories: []string{
                            "quidem",
                        },
                        CollectionMemberIds: []string{
                            "praesentium",
                            "tempora",
                            "ipsam",
                            "officiis",
                        },
                        ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                            ColorFamilies: []string{
                                "magni",
                            },
                            Colors: []string{
                                "est",
                            },
                        },
                        Conditions: []string{
                            "veritatis",
                        },
                        Description: sdk.String("error"),
                        ExpireTime: sdk.String("voluptatibus"),
                        FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "dolorum",
                                    "quibusdam",
                                    "earum",
                                },
                                Type: sdk.String("excepturi"),
                            },
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "molestiae",
                                    "impedit",
                                },
                                Type: sdk.String("error"),
                            },
                        },
                        Gtin: sdk.String("animi"),
                        ID: sdk.String("867bc424-2666-4581-addc-a8ef51fcb4c5"),
                        Images: []shared.GoogleCloudRetailV2alphaImage{
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(219279),
                                URI: sdk.String("https://spirited-bottle.com"),
                                Width: sdk.Int(779823),
                            },
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(840017),
                                URI: sdk.String("https://pure-sprinkles.com"),
                                Width: sdk.Int(879208),
                            },
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(810982),
                                URI: sdk.String("http://plastic-vol.org"),
                                Width: sdk.Int(813975),
                            },
                        },
                        LanguageCode: sdk.String("nobis"),
                        Materials: []string{
                            "molestias",
                            "aut",
                            "temporibus",
                            "tenetur",
                        },
                        Name: sdk.String("Marjorie Lockman"),
                        Patterns: []string{
                            "reiciendis",
                            "iste",
                        },
                        PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                            Cost: sdk.Float32(2261.96),
                            CurrencyCode: sdk.String("occaecati"),
                            OriginalPrice: sdk.Float32(157.38),
                            Price: sdk.Float32(7712.89),
                            PriceEffectiveTime: sdk.String("minima"),
                            PriceExpireTime: sdk.String("quos"),
                            PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                    ExclusiveMaximum: sdk.Float64(5025.09),
                                    ExclusiveMinimum: sdk.Float64(5599.37),
                                    Maximum: sdk.Float64(283.62),
                                    Minimum: sdk.Float64(5917.74),
                                },
                                Price: &shared.GoogleCloudRetailV2alphaInterval{
                                    ExclusiveMaximum: sdk.Float64(5592.48),
                                    ExclusiveMinimum: sdk.Float64(2184.13),
                                    Maximum: sdk.Float64(8742.83),
                                    Minimum: sdk.Float64(6834.9),
                                },
                            },
                        },
                        PrimaryProductID: sdk.String("facilis"),
                        Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("error"),
                            },
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("recusandae"),
                            },
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("a"),
                            },
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("consectetur"),
                            },
                        },
                        PublishTime: sdk.String("sapiente"),
                        Rating: &shared.GoogleCloudRetailV2alphaRating{
                            AverageRating: sdk.Float32(9776.41),
                            RatingCount: sdk.Int(824267),
                            RatingHistogram: []int{
                                607742,
                                966652,
                                487765,
                                974703,
                            },
                        },
                        RetrievableFields: sdk.String("aut"),
                        Sizes: []string{
                            "omnis",
                            "similique",
                        },
                        Tags: []string{
                            "modi",
                            "facere",
                            "neque",
                            "quis",
                        },
                        Title: sdk.String("Ms."),
                        TTL: sdk.String("sed"),
                        Type: shared.GoogleCloudRetailV2alphaProductTypeEnumPrimary.ToPointer(),
                        URI: sdk.String("https://thorough-respite.com"),
                    },
                    Quantity: sdk.Int(967047),
                },
                shared.GoogleCloudRetailV2alphaProductDetailInput{
                    Product: &shared.GoogleCloudRetailV2alphaProductInput{
                        Attributes: map[string]shared.GoogleCloudRetailV2alphaCustomAttribute{
                            "vero": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    5556.63,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "architecto",
                                },
                            },
                            "praesentium": shared.GoogleCloudRetailV2alphaCustomAttribute{
                                Indexable: sdk.Bool(false),
                                Numbers: []float64{
                                    8548,
                                    3136.95,
                                },
                                Searchable: sdk.Bool(false),
                                Text: []string{
                                    "laudantium",
                                    "modi",
                                },
                            },
                        },
                        Audience: &shared.GoogleCloudRetailV2alphaAudience{
                            AgeGroups: []string{
                                "accusamus",
                                "nulla",
                            },
                            Genders: []string{
                                "quibusdam",
                                "praesentium",
                                "enim",
                                "animi",
                            },
                        },
                        Availability: shared.GoogleCloudRetailV2alphaProductAvailabilityEnumOutOfStock.ToPointer(),
                        AvailableQuantity: sdk.Int(61498),
                        AvailableTime: sdk.String("eum"),
                        Brands: []string{
                            "eveniet",
                            "laboriosam",
                        },
                        Categories: []string{
                            "blanditiis",
                        },
                        CollectionMemberIds: []string{
                            "illum",
                            "reiciendis",
                            "placeat",
                        },
                        ColorInfo: &shared.GoogleCloudRetailV2alphaColorInfo{
                            ColorFamilies: []string{
                                "consequatur",
                            },
                            Colors: []string{
                                "quia",
                            },
                        },
                        Conditions: []string{
                            "voluptas",
                            "quo",
                            "laudantium",
                        },
                        Description: sdk.String("dignissimos"),
                        ExpireTime: sdk.String("omnis"),
                        FulfillmentInfo: []shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "dolorem",
                                },
                                Type: sdk.String("quidem"),
                            },
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "debitis",
                                    "vitae",
                                },
                                Type: sdk.String("dolor"),
                            },
                            shared.GoogleCloudRetailV2alphaFulfillmentInfo{
                                PlaceIds: []string{
                                    "atque",
                                    "ut",
                                },
                                Type: sdk.String("asperiores"),
                            },
                        },
                        Gtin: sdk.String("reprehenderit"),
                        ID: sdk.String("ae12c689-1f82-4ce1-9571-72305377dcfa"),
                        Images: []shared.GoogleCloudRetailV2alphaImage{
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(587539),
                                URI: sdk.String("https://worthwhile-offence.info"),
                                Width: sdk.Int(349087),
                            },
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(915145),
                                URI: sdk.String("http://glittering-harbour.info"),
                                Width: sdk.Int(522824),
                            },
                            shared.GoogleCloudRetailV2alphaImage{
                                Height: sdk.Int(397268),
                                URI: sdk.String("http://ordinary-chalet.org"),
                                Width: sdk.Int(600185),
                            },
                        },
                        LanguageCode: sdk.String("cumque"),
                        Materials: []string{
                            "repellendus",
                        },
                        Name: sdk.String("Kim Hansen Sr."),
                        Patterns: []string{
                            "facere",
                        },
                        PriceInfo: &shared.GoogleCloudRetailV2alphaPriceInfo{
                            Cost: sdk.Float32(9371.23),
                            CurrencyCode: sdk.String("laborum"),
                            OriginalPrice: sdk.Float32(1180.2),
                            Price: sdk.Float32(327.37),
                            PriceEffectiveTime: sdk.String("odit"),
                            PriceExpireTime: sdk.String("aliquid"),
                            PriceRange: &shared.GoogleCloudRetailV2alphaPriceInfoPriceRange{
                                OriginalPrice: &shared.GoogleCloudRetailV2alphaInterval{
                                    ExclusiveMaximum: sdk.Float64(8626.66),
                                    ExclusiveMinimum: sdk.Float64(3184.5),
                                    Maximum: sdk.Float64(2542.88),
                                    Minimum: sdk.Float64(1031.93),
                                },
                                Price: &shared.GoogleCloudRetailV2alphaInterval{
                                    ExclusiveMaximum: sdk.Float64(6659.52),
                                    ExclusiveMinimum: sdk.Float64(3098.52),
                                    Maximum: sdk.Float64(8167.26),
                                    Minimum: sdk.Float64(1123.91),
                                },
                            },
                        },
                        PrimaryProductID: sdk.String("omnis"),
                        Promotions: []shared.GoogleCloudRetailV2alphaPromotion{
                            shared.GoogleCloudRetailV2alphaPromotion{
                                PromotionID: sdk.String("sapiente"),
                            },
                        },
                        PublishTime: sdk.String("officiis"),
                        Rating: &shared.GoogleCloudRetailV2alphaRating{
                            AverageRating: sdk.Float32(7088.83),
                            RatingCount: sdk.Int(156843),
                            RatingHistogram: []int{
                                487839,
                            },
                        },
                        RetrievableFields: sdk.String("quas"),
                        Sizes: []string{
                            "distinctio",
                        },
                        Tags: []string{
                            "quod",
                            "eligendi",
                            "sit",
                            "possimus",
                        },
                        Title: sdk.String("Miss"),
                        TTL: sdk.String("distinctio"),
                        Type: shared.GoogleCloudRetailV2alphaProductTypeEnumCollection.ToPointer(),
                        URI: sdk.String("https://short-eel.name"),
                    },
                    Quantity: sdk.Int(272635),
                },
            },
            PurchaseTransaction: &shared.GoogleCloudRetailV2alphaPurchaseTransaction{
                Cost: sdk.Float32(4580.21),
                CurrencyCode: sdk.String("doloremque"),
                ID: sdk.String("8fb4e391-e6bc-4158-84c4-e54599ea3422"),
                Revenue: sdk.Float32(3804.5),
                Tax: sdk.Float32(588.08),
            },
            ReferrerURI: sdk.String("eveniet"),
            SearchQuery: sdk.String("sint"),
            SessionID: sdk.String("nobis"),
            URI: sdk.String("http://another-address.net"),
            UserInfo: &shared.GoogleCloudRetailV2alphaUserInfo{
                DirectUserRequest: sdk.Bool(false),
                IPAddress: sdk.String("recusandae"),
                UserAgent: sdk.String("voluptate"),
                UserID: sdk.String("deleniti"),
            },
            VisitorID: sdk.String("est"),
        },
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("quos"),
        Key: sdk.String("maiores"),
        OauthToken: sdk.String("quidem"),
        Parent: "in",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("culpa"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("fuga"),
        WriteAsync: sdk.Bool(false),
    }, operations.RetailProjectsLocationsCatalogsUserEventsWriteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaUserEvent != nil {
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("eligendi"),
        Fields: sdk.String("officiis"),
        Key: sdk.String("dignissimos"),
        Name: "Paula Senger V",
        OauthToken: sdk.String("esse"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("ratione"),
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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("hic"),
        Filter: sdk.String("ducimus"),
        Key: sdk.String("consequuntur"),
        Name: "Pam Cremin I",
        OauthToken: sdk.String("explicabo"),
        PageSize: sdk.Int64(6203),
        PageToken: sdk.String("amet"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consequatur"),
        UploadType: sdk.String("fugiat"),
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
