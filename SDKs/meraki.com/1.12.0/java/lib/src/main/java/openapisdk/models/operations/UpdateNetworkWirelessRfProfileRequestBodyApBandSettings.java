package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessRfProfileRequestBodyApBandSettings
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
public class UpdateNetworkWirelessRfProfileRequestBodyApBandSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandOperationMode")
    public UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum bandOperationMode;
    public UpdateNetworkWirelessRfProfileRequestBodyApBandSettings withBandOperationMode(UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum bandOperationMode) {
        this.bandOperationMode = bandOperationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandSteeringEnabled")
    public Boolean bandSteeringEnabled;
    public UpdateNetworkWirelessRfProfileRequestBodyApBandSettings withBandSteeringEnabled(Boolean bandSteeringEnabled) {
        this.bandSteeringEnabled = bandSteeringEnabled;
        return this;
    }
}