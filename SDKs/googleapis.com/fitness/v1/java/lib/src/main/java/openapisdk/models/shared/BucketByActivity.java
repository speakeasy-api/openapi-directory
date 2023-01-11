package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BucketByActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityDataSourceId")
    public String activityDataSourceId;
    public BucketByActivity withActivityDataSourceId(String activityDataSourceId) {
        this.activityDataSourceId = activityDataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minDurationMillis")
    public String minDurationMillis;
    public BucketByActivity withMinDurationMillis(String minDurationMillis) {
        this.minDurationMillis = minDurationMillis;
        return this;
    }
}