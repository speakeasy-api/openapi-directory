package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketLifecycle
 * The bucket's lifecycle configuration. See object lifecycle management for more information.
**/
public class BucketLifecycle {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rule")
    public BucketLifecycleRule[] rule;
    public BucketLifecycle withRule(BucketLifecycleRule[] rule) {
        this.rule = rule;
        return this;
    }
}