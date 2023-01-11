package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConversationMessageReceiptListConversationMessageReceiptResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delivery_receipts")
    public openapisdk.models.shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt[] deliveryReceipts;
    public ListConversationMessageReceiptListConversationMessageReceiptResponse withDeliveryReceipts(openapisdk.models.shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt[] deliveryReceipts) {
        this.deliveryReceipts = deliveryReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListConversationMessageReceiptListConversationMessageReceiptResponseMeta meta;
    public ListConversationMessageReceiptListConversationMessageReceiptResponse withMeta(ListConversationMessageReceiptListConversationMessageReceiptResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}