package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsightsConfig
 * Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.
**/
public class InsightsConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryInsightsEnabled")
    public Boolean queryInsightsEnabled;
    public InsightsConfig withQueryInsightsEnabled(Boolean queryInsightsEnabled) {
        this.queryInsightsEnabled = queryInsightsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryPlansPerMinute")
    public Integer queryPlansPerMinute;
    public InsightsConfig withQueryPlansPerMinute(Integer queryPlansPerMinute) {
        this.queryPlansPerMinute = queryPlansPerMinute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryStringLength")
    public Integer queryStringLength;
    public InsightsConfig withQueryStringLength(Integer queryStringLength) {
        this.queryStringLength = queryStringLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordApplicationTags")
    public Boolean recordApplicationTags;
    public InsightsConfig withRecordApplicationTags(Boolean recordApplicationTags) {
        this.recordApplicationTags = recordApplicationTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordClientAddress")
    public Boolean recordClientAddress;
    public InsightsConfig withRecordClientAddress(Boolean recordClientAddress) {
        this.recordClientAddress = recordClientAddress;
        return this;
    }
}