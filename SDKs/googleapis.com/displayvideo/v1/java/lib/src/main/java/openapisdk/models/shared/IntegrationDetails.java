package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntegrationDetails
 * Integration details of an entry.
**/
public class IntegrationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public IntegrationDetails withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integrationCode")
    public String integrationCode;
    public IntegrationDetails withIntegrationCode(String integrationCode) {
        this.integrationCode = integrationCode;
        return this;
    }
}