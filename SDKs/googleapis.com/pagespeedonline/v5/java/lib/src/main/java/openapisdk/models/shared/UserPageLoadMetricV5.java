package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserPageLoadMetricV5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public UserPageLoadMetricV5 withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distributions")
    public Bucket[] distributions;
    public UserPageLoadMetricV5 withDistributions(Bucket[] distributions) {
        this.distributions = distributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formFactor")
    public String formFactor;
    public UserPageLoadMetricV5 withFormFactor(String formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("median")
    public Integer median;
    public UserPageLoadMetricV5 withMedian(Integer median) {
        this.median = median;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metricId")
    public String metricId;
    public UserPageLoadMetricV5 withMetricId(String metricId) {
        this.metricId = metricId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentile")
    public Integer percentile;
    public UserPageLoadMetricV5 withPercentile(Integer percentile) {
        this.percentile = percentile;
        return this;
    }
}