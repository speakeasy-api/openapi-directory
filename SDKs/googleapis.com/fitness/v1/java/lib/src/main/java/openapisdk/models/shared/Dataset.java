package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dataset
 * A dataset represents a projection container for data points. They do not carry any info of their own. Datasets represent a set of data points from a particular data source. A data point can be found in more than one dataset.
**/
public class Dataset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSourceId")
    public String dataSourceId;
    public Dataset withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxEndTimeNs")
    public String maxEndTimeNs;
    public Dataset withMaxEndTimeNs(String maxEndTimeNs) {
        this.maxEndTimeNs = maxEndTimeNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minStartTimeNs")
    public String minStartTimeNs;
    public Dataset withMinStartTimeNs(String minStartTimeNs) {
        this.minStartTimeNs = minStartTimeNs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public Dataset withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("point")
    public DataPoint[] point;
    public Dataset withPoint(DataPoint[] point) {
        this.point = point;
        return this;
    }
}