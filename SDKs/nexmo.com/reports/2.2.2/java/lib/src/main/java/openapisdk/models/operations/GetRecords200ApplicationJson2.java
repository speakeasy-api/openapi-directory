package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRecords200ApplicationJson2
 * SMS (Inbound)
**/
public class GetRecords200ApplicationJson2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetRecords200ApplicationJson2Links links;
    public GetRecords200ApplicationJson2 withLinks(GetRecords200ApplicationJson2Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public GetRecords200ApplicationJson2 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetRecords200ApplicationJson2 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direction")
    public GetRecords200ApplicationJson2DirectionEnum direction;
    public GetRecords200ApplicationJson2 withDirection(GetRecords200ApplicationJson2DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids_not_found")
    public String idsNotFound;
    public GetRecords200ApplicationJson2 withIdsNotFound(String idsNotFound) {
        this.idsNotFound = idsNotFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("include_message")
    public Boolean includeMessage;
    public GetRecords200ApplicationJson2 withIncludeMessage(Boolean includeMessage) {
        this.includeMessage = includeMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items_count")
    public Long itemsCount;
    public GetRecords200ApplicationJson2 withItemsCount(Long itemsCount) {
        this.itemsCount = itemsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public GetRecords200ApplicationJson2 withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public openapisdk.models.shared.ProductSmsEnum product;
    public GetRecords200ApplicationJson2 withProduct(openapisdk.models.shared.ProductSmsEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("received_at")
    public LocalDate receivedAt;
    public GetRecords200ApplicationJson2 withReceivedAt(LocalDate receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public openapisdk.models.shared.JsonSmsInboundWithBody[] records;
    public GetRecords200ApplicationJson2 withRecords(openapisdk.models.shared.JsonSmsInboundWithBody[] records) {
        this.records = records;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public GetRecords200ApplicationJson2 withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_status")
    public openapisdk.models.shared.RequestStatusEnum requestStatus;
    public GetRecords200ApplicationJson2 withRequestStatus(openapisdk.models.shared.RequestStatusEnum requestStatus) {
        this.requestStatus = requestStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_concatenated")
    public Boolean showConcatenated;
    public GetRecords200ApplicationJson2 withShowConcatenated(Boolean showConcatenated) {
        this.showConcatenated = showConcatenated;
        return this;
    }
}