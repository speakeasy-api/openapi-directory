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
    @JsonProperty("customTimeBefore")
    public LocalDate customTimeBefore;
    public BucketLifecycleRuleCondition withCustomTimeBefore(LocalDate customTimeBefore) {
        this.customTimeBefore = customTimeBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daysSinceCustomTime")
    public Integer daysSinceCustomTime;
    public BucketLifecycleRuleCondition withDaysSinceCustomTime(Integer daysSinceCustomTime) {
        this.daysSinceCustomTime = daysSinceCustomTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("daysSinceNoncurrentTime")
    public Integer daysSinceNoncurrentTime;
    public BucketLifecycleRuleCondition withDaysSinceNoncurrentTime(Integer daysSinceNoncurrentTime) {
        this.daysSinceNoncurrentTime = daysSinceNoncurrentTime;
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
    @JsonProperty("matchesPattern")
    public String matchesPattern;
    public BucketLifecycleRuleCondition withMatchesPattern(String matchesPattern) {
        this.matchesPattern = matchesPattern;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchesPrefix")
    public String[] matchesPrefix;
    public BucketLifecycleRuleCondition withMatchesPrefix(String[] matchesPrefix) {
        this.matchesPrefix = matchesPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchesStorageClass")
    public String[] matchesStorageClass;
    public BucketLifecycleRuleCondition withMatchesStorageClass(String[] matchesStorageClass) {
        this.matchesStorageClass = matchesStorageClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchesSuffix")
    public String[] matchesSuffix;
    public BucketLifecycleRuleCondition withMatchesSuffix(String[] matchesSuffix) {
        this.matchesSuffix = matchesSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noncurrentTimeBefore")
    public LocalDate noncurrentTimeBefore;
    public BucketLifecycleRuleCondition withNoncurrentTimeBefore(LocalDate noncurrentTimeBefore) {
        this.noncurrentTimeBefore = noncurrentTimeBefore;
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