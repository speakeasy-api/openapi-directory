import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryCancel } from "./orderscustombatchrequestentrycancel";
import { OrdersCustomBatchRequestEntryCancelLineItem } from "./orderscustombatchrequestentrycancellineitem";
import { OrdersCustomBatchRequestEntryInStoreRefundLineItem } from "./orderscustombatchrequestentryinstorerefundlineitem";
import { OrdersCustomBatchRequestEntryRefund } from "./orderscustombatchrequestentryrefund";
import { OrdersCustomBatchRequestEntryRejectReturnLineItem } from "./orderscustombatchrequestentryrejectreturnlineitem";
import { OrdersCustomBatchRequestEntryReturnLineItem } from "./orderscustombatchrequestentryreturnlineitem";
import { OrdersCustomBatchRequestEntryReturnRefundLineItem } from "./orderscustombatchrequestentryreturnrefundlineitem";
import { OrdersCustomBatchRequestEntrySetLineItemMetadata } from "./orderscustombatchrequestentrysetlineitemmetadata";
import { OrdersCustomBatchRequestEntryShipLineItems } from "./orderscustombatchrequestentryshiplineitems";
import { OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails } from "./orderscustombatchrequestentryupdatelineitemshippingdetails";
import { OrdersCustomBatchRequestEntryUpdateShipment } from "./orderscustombatchrequestentryupdateshipment";
export declare class OrdersCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    cancel?: OrdersCustomBatchRequestEntryCancel;
    cancelLineItem?: OrdersCustomBatchRequestEntryCancelLineItem;
    inStoreRefundLineItem?: OrdersCustomBatchRequestEntryInStoreRefundLineItem;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The merchant order ID. Required for `updateMerchantOrderId` and `getByMerchantOrderId` methods.
     */
    merchantOrderId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`acknowledge`" - "`cancel`" - "`cancelLineItem`" - "`get`" - "`getByMerchantOrderId`" - "`inStoreRefundLineItem`" - "`refund`" - "`rejectReturnLineItem`" - "`returnLineItem`" - "`returnRefundLineItem`" - "`setLineItemMetadata`" - "`shipLineItems`" - "`updateLineItemShippingDetails`" - "`updateMerchantOrderId`" - "`updateShipment`"
     */
    method?: string;
    /**
     * The ID of the operation. Unique across all operations for a given order. Required for all methods beside `get` and `getByMerchantOrderId`.
     */
    operationId?: string;
    /**
     * The ID of the order. Required for all methods beside `getByMerchantOrderId`.
     */
    orderId?: string;
    refund?: OrdersCustomBatchRequestEntryRefund;
    rejectReturnLineItem?: OrdersCustomBatchRequestEntryRejectReturnLineItem;
    returnLineItem?: OrdersCustomBatchRequestEntryReturnLineItem;
    returnRefundLineItem?: OrdersCustomBatchRequestEntryReturnRefundLineItem;
    setLineItemMetadata?: OrdersCustomBatchRequestEntrySetLineItemMetadata;
    shipLineItems?: OrdersCustomBatchRequestEntryShipLineItems;
    updateLineItemShippingDetails?: OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails;
    updateShipment?: OrdersCustomBatchRequestEntryUpdateShipment;
}
