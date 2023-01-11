package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketLogging
 * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
**/
public class BucketLogging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logBucket")
    public String logBucket;
    public BucketLogging withLogBucket(String logBucket) {
        this.logBucket = logBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logObjectPrefix")
    public String logObjectPrefix;
    public BucketLogging withLogObjectPrefix(String logObjectPrefix) {
        this.logObjectPrefix = logObjectPrefix;
        return this;
    }
}