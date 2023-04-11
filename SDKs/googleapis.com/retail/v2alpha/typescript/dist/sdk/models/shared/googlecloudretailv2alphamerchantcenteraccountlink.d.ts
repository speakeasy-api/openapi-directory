import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter } from "./googlecloudretailv2alphamerchantcenteraccountlinkmerchantcenterfeedfilter";
/**
 * Output only. Represents the state of the link.
 */
export declare enum GoogleCloudRetailV2alphaMerchantCenterAccountLinkStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE",
    Failed = "FAILED"
}
/**
 * Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch. LINT.IfChange(MerchantCenterAccountLink)
 */
export declare class GoogleCloudRetailV2alphaMerchantCenterAccountLink extends SpeakeasyBase {
    /**
     * Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch id can only have one linked merchant center account id.
     */
    branchId?: string;
    /**
     * Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.
     */
    feedFilters?: GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter[];
    /**
     * The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`.
     */
    feedLabel?: string;
    /**
     * Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/* /locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`.
     */
    id?: string;
    /**
     * Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`.
     */
    languageCode?: string;
    /**
     * Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.
     */
    merchantCenterAccountId?: string;
    /**
     * Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/* /locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.
     */
    name?: string;
    /**
     * Output only. GCP project ID.
     */
    projectId?: string;
    /**
     * Output only. Represents the state of the link.
     */
    state?: GoogleCloudRetailV2alphaMerchantCenterAccountLinkStateEnum;
}
/**
 * Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch. LINT.IfChange(MerchantCenterAccountLink)
 */
export declare class GoogleCloudRetailV2alphaMerchantCenterAccountLinkInput extends SpeakeasyBase {
    /**
     * Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch id can only have one linked merchant center account id.
     */
    branchId?: string;
    /**
     * Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.
     */
    feedFilters?: GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter[];
    /**
     * The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`.
     */
    feedLabel?: string;
    /**
     * Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`.
     */
    languageCode?: string;
    /**
     * Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.
     */
    merchantCenterAccountId?: string;
}
