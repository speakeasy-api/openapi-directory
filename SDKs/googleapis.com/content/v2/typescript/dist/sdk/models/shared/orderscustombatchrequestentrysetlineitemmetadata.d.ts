import { SpeakeasyBase } from "../../../internal/utils";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";
export declare class OrdersCustomBatchRequestEntrySetLineItemMetadata extends SpeakeasyBase {
    annotations?: OrderMerchantProvidedAnnotation[];
    /**
     * The ID of the line item to set metadata. Either lineItemId or productId is required.
     */
    lineItemId?: string;
    /**
     * The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string;
}
