package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxSettingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationUuid")
    public String organizationUuid;
    public TaxSettingsResponse withOrganizationUuid(String organizationUuid) {
        this.organizationUuid = organizationUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxationMode")
    public TaxSettingsResponseTaxationModeEnum taxationMode;
    public TaxSettingsResponse withTaxationMode(TaxSettingsResponseTaxationModeEnum taxationMode) {
        this.taxationMode = taxationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxationType")
    public TaxSettingsResponseTaxationTypeEnum taxationType;
    public TaxSettingsResponse withTaxationType(TaxSettingsResponseTaxationTypeEnum taxationType) {
        this.taxationType = taxationType;
        return this;
    }
}