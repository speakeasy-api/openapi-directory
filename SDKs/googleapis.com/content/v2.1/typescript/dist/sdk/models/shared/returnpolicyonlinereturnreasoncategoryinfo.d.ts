import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyOnlineReturnShippingFee } from "./returnpolicyonlinereturnshippingfee";
/**
 * The corresponding return label source.
 */
export declare enum ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum {
    ReturnLabelSourceUnspecified = "RETURN_LABEL_SOURCE_UNSPECIFIED",
    DownloadAndPrint = "DOWNLOAD_AND_PRINT",
    InTheBox = "IN_THE_BOX",
    CustomerResponsibility = "CUSTOMER_RESPONSIBILITY"
}
/**
 * The return reason category.
 */
export declare enum ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum {
    ReturnReasonCategoryUnspecified = "RETURN_REASON_CATEGORY_UNSPECIFIED",
    BuyerRemorse = "BUYER_REMORSE",
    ItemDefect = "ITEM_DEFECT"
}
/**
 * The return reason category info wrapper.
 */
export declare class ReturnPolicyOnlineReturnReasonCategoryInfo extends SpeakeasyBase {
    /**
     * The corresponding return label source.
     */
    returnLabelSource?: ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum;
    /**
     * The return reason category.
     */
    returnReasonCategory?: ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum;
    /**
     * The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.
     */
    returnShippingFee?: ReturnPolicyOnlineReturnShippingFee;
}
