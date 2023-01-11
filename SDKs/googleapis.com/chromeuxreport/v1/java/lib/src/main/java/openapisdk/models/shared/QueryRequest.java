package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryRequest
 * Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.
**/
public class QueryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveConnectionType")
    public String effectiveConnectionType;
    public QueryRequest withEffectiveConnectionType(String effectiveConnectionType) {
        this.effectiveConnectionType = effectiveConnectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formFactor")
    public QueryRequestFormFactorEnum formFactor;
    public QueryRequest withFormFactor(QueryRequestFormFactorEnum formFactor) {
        this.formFactor = formFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public String[] metrics;
    public QueryRequest withMetrics(String[] metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public String origin;
    public QueryRequest withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public QueryRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}