package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TaxSettingsUpdateRequest {
    @JsonProperty("taxationMode")
    public TaxSettingsUpdateRequestTaxationModeEnum taxationMode;
    public TaxSettingsUpdateRequest withTaxationMode(TaxSettingsUpdateRequestTaxationModeEnum taxationMode) {
        this.taxationMode = taxationMode;
        return this;
    }
}