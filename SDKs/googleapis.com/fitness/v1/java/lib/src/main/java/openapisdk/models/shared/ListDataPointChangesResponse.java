package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDataPointChangesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public ListDataPointChangesResponse withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedDataPoint")
    public DataPoint[] deletedDataPoint;
    public ListDataPointChangesResponse withDeletedDataPoint(DataPoint[] deletedDataPoint) {
        this.deletedDataPoint = deletedDataPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertedDataPoint")
    public DataPoint[] insertedDataPoint;
    public ListDataPointChangesResponse withInsertedDataPoint(DataPoint[] insertedDataPoint) {
        this.insertedDataPoint = insertedDataPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDataPointChangesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}