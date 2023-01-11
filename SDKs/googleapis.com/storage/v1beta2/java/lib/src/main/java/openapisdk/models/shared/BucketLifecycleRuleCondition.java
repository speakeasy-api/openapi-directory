package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketLifecycleRuleCondition
 * The condition(s) under which the action will be taken.
**/
public class BucketLifecycleRuleCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("age")
    public Integer age;
    public BucketLifecycleRuleCondition withAge(Integer age) {
        this.age = age;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBefore")
    public LocalDate createdBefore;
    public BucketLifecycleRuleCondition withCreatedBefore(LocalDate createdBefore) {
        this.createdBefore = createdBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isLive")
    public Boolean isLive;
    public BucketLifecycleRuleCondition withIsLive(Boolean isLive) {
        this.isLive = isLive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numNewerVersions")
    public Integer numNewerVersions;
    public BucketLifecycleRuleCondition withNumNewerVersions(Integer numNewerVersions) {
        this.numNewerVersions = numNewerVersions;
        return this;
    }
}