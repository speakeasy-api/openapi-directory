package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AggregateBucket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity")
    public Integer activity;
    public AggregateBucket withActivity(Integer activity) {
        this.activity = activity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public Dataset[] dataset;
    public AggregateBucket withDataset(Dataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeMillis")
    public String endTimeMillis;
    public AggregateBucket withEndTimeMillis(String endTimeMillis) {
        this.endTimeMillis = endTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("session")
    public Session session;
    public AggregateBucket withSession(Session session) {
        this.session = session;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeMillis")
    public String startTimeMillis;
    public AggregateBucket withStartTimeMillis(String startTimeMillis) {
        this.startTimeMillis = startTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AggregateBucketTypeEnum type;
    public AggregateBucket withType(AggregateBucketTypeEnum type) {
        this.type = type;
        return this;
    }
}