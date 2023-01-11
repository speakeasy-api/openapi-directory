package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagespeedApiLoadingExperienceV5
 * The CrUX loading experience object that contains CrUX data breakdowns.
**/
public class PagespeedApiLoadingExperienceV5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PagespeedApiLoadingExperienceV5 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initial_url")
    public String initialUrl;
    public PagespeedApiLoadingExperienceV5 withInitialUrl(String initialUrl) {
        this.initialUrl = initialUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public java.util.Map<String, UserPageLoadMetricV5> metrics;
    public PagespeedApiLoadingExperienceV5 withMetrics(java.util.Map<String, UserPageLoadMetricV5> metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin_fallback")
    public Boolean originFallback;
    public PagespeedApiLoadingExperienceV5 withOriginFallback(Boolean originFallback) {
        this.originFallback = originFallback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overall_category")
    public String overallCategory;
    public PagespeedApiLoadingExperienceV5 withOverallCategory(String overallCategory) {
        this.overallCategory = overallCategory;
        return this;
    }
}