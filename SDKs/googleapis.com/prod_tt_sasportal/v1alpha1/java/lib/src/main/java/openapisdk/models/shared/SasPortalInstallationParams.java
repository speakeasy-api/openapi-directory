package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalInstallationParams
 * Information about the device installation parameters.
**/
public class SasPortalInstallationParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaAzimuth")
    public Integer antennaAzimuth;
    public SasPortalInstallationParams withAntennaAzimuth(Integer antennaAzimuth) {
        this.antennaAzimuth = antennaAzimuth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaBeamwidth")
    public Integer antennaBeamwidth;
    public SasPortalInstallationParams withAntennaBeamwidth(Integer antennaBeamwidth) {
        this.antennaBeamwidth = antennaBeamwidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaDowntilt")
    public Integer antennaDowntilt;
    public SasPortalInstallationParams withAntennaDowntilt(Integer antennaDowntilt) {
        this.antennaDowntilt = antennaDowntilt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaGain")
    public Integer antennaGain;
    public SasPortalInstallationParams withAntennaGain(Integer antennaGain) {
        this.antennaGain = antennaGain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antennaModel")
    public String antennaModel;
    public SasPortalInstallationParams withAntennaModel(String antennaModel) {
        this.antennaModel = antennaModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpeCbsdIndication")
    public Boolean cpeCbsdIndication;
    public SasPortalInstallationParams withCpeCbsdIndication(Boolean cpeCbsdIndication) {
        this.cpeCbsdIndication = cpeCbsdIndication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eirpCapability")
    public Integer eirpCapability;
    public SasPortalInstallationParams withEirpCapability(Integer eirpCapability) {
        this.eirpCapability = eirpCapability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Double height;
    public SasPortalInstallationParams withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heightType")
    public SasPortalInstallationParamsHeightTypeEnum heightType;
    public SasPortalInstallationParams withHeightType(SasPortalInstallationParamsHeightTypeEnum heightType) {
        this.heightType = heightType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("horizontalAccuracy")
    public Double horizontalAccuracy;
    public SasPortalInstallationParams withHorizontalAccuracy(Double horizontalAccuracy) {
        this.horizontalAccuracy = horizontalAccuracy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indoorDeployment")
    public Boolean indoorDeployment;
    public SasPortalInstallationParams withIndoorDeployment(Boolean indoorDeployment) {
        this.indoorDeployment = indoorDeployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public SasPortalInstallationParams withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public SasPortalInstallationParams withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verticalAccuracy")
    public Double verticalAccuracy;
    public SasPortalInstallationParams withVerticalAccuracy(Double verticalAccuracy) {
        this.verticalAccuracy = verticalAccuracy;
        return this;
    }
}