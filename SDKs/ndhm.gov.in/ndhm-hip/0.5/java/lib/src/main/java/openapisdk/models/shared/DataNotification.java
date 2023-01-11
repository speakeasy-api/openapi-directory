package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DataNotification {
    @JsonProperty("entries")
    public Object[] entries;
    public DataNotification withEntries(Object[] entries) {
        this.entries = entries;
        return this;
    }
    @JsonProperty("keyMaterial")
    public KeyMaterial keyMaterial;
    public DataNotification withKeyMaterial(KeyMaterial keyMaterial) {
        this.keyMaterial = keyMaterial;
        return this;
    }
    @JsonProperty("pageCount")
    public Long pageCount;
    public DataNotification withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonProperty("pageNumber")
    public Long pageNumber;
    public DataNotification withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonProperty("transactionId")
    public String transactionId;
    public DataNotification withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}