package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryTimeSeriesRequest
 * The QueryTimeSeries request.
**/
public class QueryTimeSeriesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Integer pageSize;
    public QueryTimeSeriesRequest withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public QueryTimeSeriesRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public QueryTimeSeriesRequest withQuery(String query) {
        this.query = query;
        return this;
    }
}