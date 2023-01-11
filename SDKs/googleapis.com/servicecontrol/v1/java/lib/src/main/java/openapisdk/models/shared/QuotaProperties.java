package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuotaProperties
 * Represents the properties needed for quota operations.
**/
public class QuotaProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quotaMode")
    public QuotaPropertiesQuotaModeEnum quotaMode;
    public QuotaProperties withQuotaMode(QuotaPropertiesQuotaModeEnum quotaMode) {
        this.quotaMode = quotaMode;
        return this;
    }
}