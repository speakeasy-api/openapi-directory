import { SpeakeasyBase } from "../../../internal/utils";
import { FilteredBidDetailRow } from "./filteredbiddetailrow";
/**
 * The type of detail that the detail IDs represent.
 */
export declare enum ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum {
    DetailTypeUnspecified = "DETAIL_TYPE_UNSPECIFIED",
    CreativeAttribute = "CREATIVE_ATTRIBUTE",
    Vendor = "VENDOR",
    SensitiveCategory = "SENSITIVE_CATEGORY",
    ProductCategory = "PRODUCT_CATEGORY",
    DisapprovalReason = "DISAPPROVAL_REASON",
    PolicyTopic = "POLICY_TOPIC",
    AtpVendor = "ATP_VENDOR",
    VendorDomain = "VENDOR_DOMAIN",
    GvlId = "GVL_ID"
}
/**
 * Response message for listing all details associated with a given filtered bid reason.
 */
export declare class ListCreativeStatusBreakdownByDetailResponse extends SpeakeasyBase {
    /**
     * The type of detail that the detail IDs represent.
     */
    detailType?: ListCreativeStatusBreakdownByDetailResponseDetailTypeEnum;
    /**
     * List of rows, with counts of bids with a given creative status aggregated by detail.
     */
    filteredBidDetailRows?: FilteredBidDetailRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByDetailRequest.pageToken field in the subsequent call to the filteredBids.details.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
