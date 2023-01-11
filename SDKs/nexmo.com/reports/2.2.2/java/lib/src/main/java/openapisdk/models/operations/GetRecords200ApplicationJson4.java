package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRecords200ApplicationJson4
 * In App Voice
**/
public class GetRecords200ApplicationJson4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetRecords200ApplicationJson4Links links;
    public GetRecords200ApplicationJson4 withLinks(GetRecords200ApplicationJson4Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public GetRecords200ApplicationJson4 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetRecords200ApplicationJson4 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids_not_found")
    public String idsNotFound;
    public GetRecords200ApplicationJson4 withIdsNotFound(String idsNotFound) {
        this.idsNotFound = idsNotFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items_count")
    public Long itemsCount;
    public GetRecords200ApplicationJson4 withItemsCount(Long itemsCount) {
        this.itemsCount = itemsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public GetRecords200ApplicationJson4 withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public openapisdk.models.shared.ProductInAppVoiceEnum product;
    public GetRecords200ApplicationJson4 withProduct(openapisdk.models.shared.ProductInAppVoiceEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("received_at")
    public LocalDate receivedAt;
    public GetRecords200ApplicationJson4 withReceivedAt(LocalDate receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public openapisdk.models.shared.CsvInAppVoice[] records;
    public GetRecords200ApplicationJson4 withRecords(openapisdk.models.shared.CsvInAppVoice[] records) {
        this.records = records;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public GetRecords200ApplicationJson4 withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_status")
    public openapisdk.models.shared.RequestStatusEnum requestStatus;
    public GetRecords200ApplicationJson4 withRequestStatus(openapisdk.models.shared.RequestStatusEnum requestStatus) {
        this.requestStatus = requestStatus;
        return this;
    }
}