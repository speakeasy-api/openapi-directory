package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkWirelessRfProfileRequestBodyApBandSettings
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
public class CreateNetworkWirelessRfProfileRequestBodyApBandSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandOperationMode")
    public CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum bandOperationMode;
    public CreateNetworkWirelessRfProfileRequestBodyApBandSettings withBandOperationMode(CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum bandOperationMode) {
        this.bandOperationMode = bandOperationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandSteeringEnabled")
    public Boolean bandSteeringEnabled;
    public CreateNetworkWirelessRfProfileRequestBodyApBandSettings withBandSteeringEnabled(Boolean bandSteeringEnabled) {
        this.bandSteeringEnabled = bandSteeringEnabled;
        return this;
    }
}