package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInsertionOrdersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertionOrders")
    public InsertionOrder[] insertionOrders;
    public ListInsertionOrdersResponse withInsertionOrders(InsertionOrder[] insertionOrders) {
        this.insertionOrders = insertionOrders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInsertionOrdersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}