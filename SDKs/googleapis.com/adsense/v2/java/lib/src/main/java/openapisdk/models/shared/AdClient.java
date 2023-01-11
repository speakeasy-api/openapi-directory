package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdClient
 * Representation of an ad client. An ad client represents a user's subscription with a specific AdSense product.
**/
public class AdClient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AdClient withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public AdClient withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportingDimensionId")
    public String reportingDimensionId;
    public AdClient withReportingDimensionId(String reportingDimensionId) {
        this.reportingDimensionId = reportingDimensionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AdClientStateEnum state;
    public AdClient withState(AdClientStateEnum state) {
        this.state = state;
        return this;
    }
}