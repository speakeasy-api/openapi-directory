package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AggregateRequest
 * Next id: 10
**/
public class AggregateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregateBy")
    public AggregateBy[] aggregateBy;
    public AggregateRequest withAggregateBy(AggregateBy[] aggregateBy) {
        this.aggregateBy = aggregateBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketByActivitySegment")
    public BucketByActivity bucketByActivitySegment;
    public AggregateRequest withBucketByActivitySegment(BucketByActivity bucketByActivitySegment) {
        this.bucketByActivitySegment = bucketByActivitySegment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketByActivityType")
    public BucketByActivity bucketByActivityType;
    public AggregateRequest withBucketByActivityType(BucketByActivity bucketByActivityType) {
        this.bucketByActivityType = bucketByActivityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketBySession")
    public BucketBySession bucketBySession;
    public AggregateRequest withBucketBySession(BucketBySession bucketBySession) {
        this.bucketBySession = bucketBySession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketByTime")
    public BucketByTime bucketByTime;
    public AggregateRequest withBucketByTime(BucketByTime bucketByTime) {
        this.bucketByTime = bucketByTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTimeMillis")
    public String endTimeMillis;
    public AggregateRequest withEndTimeMillis(String endTimeMillis) {
        this.endTimeMillis = endTimeMillis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteredDataQualityStandard")
    public AggregateRequestFilteredDataQualityStandardEnum[] filteredDataQualityStandard;
    public AggregateRequest withFilteredDataQualityStandard(AggregateRequestFilteredDataQualityStandardEnum[] filteredDataQualityStandard) {
        this.filteredDataQualityStandard = filteredDataQualityStandard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTimeMillis")
    public String startTimeMillis;
    public AggregateRequest withStartTimeMillis(String startTimeMillis) {
        this.startTimeMillis = startTimeMillis;
        return this;
    }
}