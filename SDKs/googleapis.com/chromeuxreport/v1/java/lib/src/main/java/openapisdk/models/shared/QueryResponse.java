package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryResponse
 * Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.
**/
public class QueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record")
    public Record record;
    public QueryResponse withRecord(Record record) {
        this.record = record;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urlNormalizationDetails")
    public UrlNormalization urlNormalizationDetails;
    public QueryResponse withUrlNormalizationDetails(UrlNormalization urlNormalizationDetails) {
        this.urlNormalizationDetails = urlNormalizationDetails;
        return this;
    }
}