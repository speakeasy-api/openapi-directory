package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery_receipts")
    public openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt[] deliveryReceipts;
    public ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse withDeliveryReceipts(openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt[] deliveryReceipts) {
        this.deliveryReceipts = deliveryReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta meta;
    public ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse withMeta(ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}