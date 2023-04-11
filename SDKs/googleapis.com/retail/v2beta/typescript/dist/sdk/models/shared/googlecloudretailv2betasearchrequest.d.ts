import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestBoostSpec } from "./googlecloudretailv2betasearchrequestboostspec";
import { GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec } from "./googlecloudretailv2betasearchrequestdynamicfacetspec";
import { GoogleCloudRetailV2betaSearchRequestFacetSpec } from "./googlecloudretailv2betasearchrequestfacetspec";
import { GoogleCloudRetailV2betaSearchRequestPersonalizationSpec } from "./googlecloudretailv2betasearchrequestpersonalizationspec";
import { GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec } from "./googlecloudretailv2betasearchrequestqueryexpansionspec";
import { GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec } from "./googlecloudretailv2betasearchrequestspellcorrectionspec";
import { GoogleCloudRetailV2betaUserInfo } from "./googlecloudretailv2betauserinfo";
/**
 * The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.
 */
export declare enum GoogleCloudRetailV2betaSearchRequestSearchModeEnum {
    SearchModeUnspecified = "SEARCH_MODE_UNSPECIFIED",
    ProductSearchOnly = "PRODUCT_SEARCH_ONLY",
    FacetedSearchOnly = "FACETED_SEARCH_ONLY"
}
/**
 * Request message for SearchService.Search method.
 */
export declare class GoogleCloudRetailV2betaSearchRequest extends SpeakeasyBase {
    /**
     * Represents the banner in request, for projects that combine banners. For example: a retailer can sell products under different banners like retailer-main, retailer-baby, retailer-meds, etc. under one project.
     */
    banner?: string;
    /**
     * Boost specification to boost certain items.
     */
    boostSpec?: GoogleCloudRetailV2betaSearchRequestBoostSpec;
    /**
     * The branch resource name, such as `projects/* /locations/global/catalogs/default_catalog/branches/0`. Use "default_branch" as the branch ID or leave this field empty, to search products under the default branch.
     */
    branch?: string;
    /**
     * The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.
     */
    canonicalFilter?: string;
    /**
     * The specifications of dynamically generated facets.
     */
    dynamicFacetSpec?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;
    /**
     * Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    facetSpecs?: GoogleCloudRetailV2betaSearchRequestFacetSpec[];
    /**
     * The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID_ARGUMENT is returned.
     */
    filter?: string;
    /**
     * The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.
     */
    labels?: Record<string, string>;
    /**
     * A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    offset?: number;
    /**
     * The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID_ARGUMENT is returned.
     */
    orderBy?: string;
    /**
     * The categories associated with a category page. Required for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"].
     */
    pageCategories?: string[];
    /**
     * Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID_ARGUMENT is returned.
     */
    pageSize?: number;
    /**
     * A page token SearchResponse.next_page_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    pageToken?: string;
    /**
     * The specification for personalization.
     */
    personalizationSpec?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;
    /**
     * Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page_categories.
     */
    query?: string;
    /**
     * Specification to determine under which conditions query expansion should occur.
     */
    queryExpansionSpec?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec;
    /**
     * The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.
     */
    searchMode?: GoogleCloudRetailV2betaSearchRequestSearchModeEnum;
    /**
     * The specification for query spell correction.
     */
    spellCorrectionSpec?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec;
    /**
     * Information of an end user.
     */
    userInfo?: GoogleCloudRetailV2betaUserInfo;
    /**
     * The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are: * colorFamilies * price * originalPrice * discount * variantId * inventory(place_id,price) * inventory(place_id,original_price) * inventory(place_id,attributes.key), where key is any key in the Product.local_inventories.attributes map. * attributes.key, where key is any key in the Product.attributes map. * pickupInStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "pickup-in-store". * shipToStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "ship-to-store". * sameDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "same-day-delivery". * nextDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "next-day-delivery". * customFulfillment1.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-1". * customFulfillment2.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-2". * customFulfillment3.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-3". * customFulfillment4.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-4". * customFulfillment5.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned.
     */
    variantRollupKeys?: string[];
    /**
     * Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    visitorId?: string;
}
