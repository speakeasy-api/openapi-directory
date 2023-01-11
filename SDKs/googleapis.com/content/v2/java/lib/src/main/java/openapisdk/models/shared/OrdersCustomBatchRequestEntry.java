package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrdersCustomBatchRequestEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchId")
    public Long batchId;
    public OrdersCustomBatchRequestEntry withBatchId(Long batchId) {
        this.batchId = batchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancel")
    public OrdersCustomBatchRequestEntryCancel cancel;
    public OrdersCustomBatchRequestEntry withCancel(OrdersCustomBatchRequestEntryCancel cancel) {
        this.cancel = cancel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelLineItem")
    public OrdersCustomBatchRequestEntryCancelLineItem cancelLineItem;
    public OrdersCustomBatchRequestEntry withCancelLineItem(OrdersCustomBatchRequestEntryCancelLineItem cancelLineItem) {
        this.cancelLineItem = cancelLineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inStoreRefundLineItem")
    public OrdersCustomBatchRequestEntryInStoreRefundLineItem inStoreRefundLineItem;
    public OrdersCustomBatchRequestEntry withInStoreRefundLineItem(OrdersCustomBatchRequestEntryInStoreRefundLineItem inStoreRefundLineItem) {
        this.inStoreRefundLineItem = inStoreRefundLineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantId")
    public String merchantId;
    public OrdersCustomBatchRequestEntry withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public OrdersCustomBatchRequestEntry withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("method")
    public String method;
    public OrdersCustomBatchRequestEntry withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operationId")
    public String operationId;
    public OrdersCustomBatchRequestEntry withOperationId(String operationId) {
        this.operationId = operationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderId")
    public String orderId;
    public OrdersCustomBatchRequestEntry withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refund")
    public OrdersCustomBatchRequestEntryRefund refund;
    public OrdersCustomBatchRequestEntry withRefund(OrdersCustomBatchRequestEntryRefund refund) {
        this.refund = refund;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rejectReturnLineItem")
    public OrdersCustomBatchRequestEntryRejectReturnLineItem rejectReturnLineItem;
    public OrdersCustomBatchRequestEntry withRejectReturnLineItem(OrdersCustomBatchRequestEntryRejectReturnLineItem rejectReturnLineItem) {
        this.rejectReturnLineItem = rejectReturnLineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnLineItem")
    public OrdersCustomBatchRequestEntryReturnLineItem returnLineItem;
    public OrdersCustomBatchRequestEntry withReturnLineItem(OrdersCustomBatchRequestEntryReturnLineItem returnLineItem) {
        this.returnLineItem = returnLineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnRefundLineItem")
    public OrdersCustomBatchRequestEntryReturnRefundLineItem returnRefundLineItem;
    public OrdersCustomBatchRequestEntry withReturnRefundLineItem(OrdersCustomBatchRequestEntryReturnRefundLineItem returnRefundLineItem) {
        this.returnRefundLineItem = returnRefundLineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("setLineItemMetadata")
    public OrdersCustomBatchRequestEntrySetLineItemMetadata setLineItemMetadata;
    public OrdersCustomBatchRequestEntry withSetLineItemMetadata(OrdersCustomBatchRequestEntrySetLineItemMetadata setLineItemMetadata) {
        this.setLineItemMetadata = setLineItemMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipLineItems")
    public OrdersCustomBatchRequestEntryShipLineItems shipLineItems;
    public OrdersCustomBatchRequestEntry withShipLineItems(OrdersCustomBatchRequestEntryShipLineItems shipLineItems) {
        this.shipLineItems = shipLineItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateLineItemShippingDetails")
    public OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails updateLineItemShippingDetails;
    public OrdersCustomBatchRequestEntry withUpdateLineItemShippingDetails(OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails updateLineItemShippingDetails) {
        this.updateLineItemShippingDetails = updateLineItemShippingDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateShipment")
    public OrdersCustomBatchRequestEntryUpdateShipment updateShipment;
    public OrdersCustomBatchRequestEntry withUpdateShipment(OrdersCustomBatchRequestEntryUpdateShipment updateShipment) {
        this.updateShipment = updateShipment;
        return this;
    }
}