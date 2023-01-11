package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Record
 * Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.
**/
public class Record {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectionPeriod")
    public CollectionPeriod collectionPeriod;
    public Record withCollectionPeriod(CollectionPeriod collectionPeriod) {
        this.collectionPeriod = collectionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public Key key;
    public Record withKey(Key key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public java.util.Map<String, Metric> metrics;
    public Record withMetrics(java.util.Map<String, Metric> metrics) {
        this.metrics = metrics;
        return this;
    }
}