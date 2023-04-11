import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails extends SpeakeasyBase {
    /**
     * Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.
     */
    deliverByDate?: string;
    /**
     * The ID of the line item to set metadata. Either lineItemId or productId is required.
     */
    lineItemId?: string;
    /**
     * The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.
     */
    productId?: string;
    /**
     * Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.
     */
    shipByDate?: string;
}
