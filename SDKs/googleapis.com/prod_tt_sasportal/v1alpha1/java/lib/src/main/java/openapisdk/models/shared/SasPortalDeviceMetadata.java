package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDeviceMetadata
 * Device data overridable by both SAS Portal and registration requests.
**/
public class SasPortalDeviceMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaModel")
    public String antennaModel;
    public SasPortalDeviceMetadata withAntennaModel(String antennaModel) {
        this.antennaModel = antennaModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonChannelGroup")
    public String commonChannelGroup;
    public SasPortalDeviceMetadata withCommonChannelGroup(String commonChannelGroup) {
        this.commonChannelGroup = commonChannelGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interferenceCoordinationGroup")
    public String interferenceCoordinationGroup;
    public SasPortalDeviceMetadata withInterferenceCoordinationGroup(String interferenceCoordinationGroup) {
        this.interferenceCoordinationGroup = interferenceCoordinationGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nrqzValidated")
    public Boolean nrqzValidated;
    public SasPortalDeviceMetadata withNrqzValidated(Boolean nrqzValidated) {
        this.nrqzValidated = nrqzValidated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nrqzValidation")
    public SasPortalNrqzValidation nrqzValidation;
    public SasPortalDeviceMetadata withNrqzValidation(SasPortalNrqzValidation nrqzValidation) {
        this.nrqzValidation = nrqzValidation;
        return this;
    }
}