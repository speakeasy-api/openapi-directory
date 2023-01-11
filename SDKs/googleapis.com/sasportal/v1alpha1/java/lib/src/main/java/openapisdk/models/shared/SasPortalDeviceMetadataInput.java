package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDeviceMetadataInput
 * Device data overridable by both SAS Portal and registration requests.
**/
public class SasPortalDeviceMetadataInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaModel")
    public String antennaModel;
    public SasPortalDeviceMetadataInput withAntennaModel(String antennaModel) {
        this.antennaModel = antennaModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonChannelGroup")
    public String commonChannelGroup;
    public SasPortalDeviceMetadataInput withCommonChannelGroup(String commonChannelGroup) {
        this.commonChannelGroup = commonChannelGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interferenceCoordinationGroup")
    public String interferenceCoordinationGroup;
    public SasPortalDeviceMetadataInput withInterferenceCoordinationGroup(String interferenceCoordinationGroup) {
        this.interferenceCoordinationGroup = interferenceCoordinationGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nrqzValidation")
    public SasPortalNrqzValidation nrqzValidation;
    public SasPortalDeviceMetadataInput withNrqzValidation(SasPortalNrqzValidation nrqzValidation) {
        this.nrqzValidation = nrqzValidation;
        return this;
    }
}