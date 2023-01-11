package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRecords200ApplicationJson10
 * ASR
**/
public class GetRecords200ApplicationJson10 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetRecords200ApplicationJson10Links links;
    public GetRecords200ApplicationJson10 withLinks(GetRecords200ApplicationJson10Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public GetRecords200ApplicationJson10 withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public GetRecords200ApplicationJson10 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ids_not_found")
    public String idsNotFound;
    public GetRecords200ApplicationJson10 withIdsNotFound(String idsNotFound) {
        this.idsNotFound = idsNotFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items_count")
    public Long itemsCount;
    public GetRecords200ApplicationJson10 withItemsCount(Long itemsCount) {
        this.itemsCount = itemsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public GetRecords200ApplicationJson10 withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public openapisdk.models.shared.ProductAsrEnum product;
    public GetRecords200ApplicationJson10 withProduct(openapisdk.models.shared.ProductAsrEnum product) {
        this.product = product;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("received_at")
    public LocalDate receivedAt;
    public GetRecords200ApplicationJson10 withReceivedAt(LocalDate receivedAt) {
        this.receivedAt = receivedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public openapisdk.models.shared.CsvAsr[] records;
    public GetRecords200ApplicationJson10 withRecords(openapisdk.models.shared.CsvAsr[] records) {
        this.records = records;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_id")
    public String requestId;
    public GetRecords200ApplicationJson10 withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_status")
    public openapisdk.models.shared.RequestStatusEnum requestStatus;
    public GetRecords200ApplicationJson10 withRequestStatus(openapisdk.models.shared.RequestStatusEnum requestStatus) {
        this.requestStatus = requestStatus;
        return this;
    }
}