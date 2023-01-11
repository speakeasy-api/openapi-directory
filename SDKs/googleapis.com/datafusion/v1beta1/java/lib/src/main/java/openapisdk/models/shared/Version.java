package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Version
 * The Data Fusion version.
**/
public class Version {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableFeatures")
    public String[] availableFeatures;
    public Version withAvailableFeatures(String[] availableFeatures) {
        this.availableFeatures = availableFeatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultVersion")
    public Boolean defaultVersion;
    public Version withDefaultVersion(Boolean defaultVersion) {
        this.defaultVersion = defaultVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public VersionTypeEnum type;
    public Version withType(VersionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionNumber")
    public String versionNumber;
    public Version withVersionNumber(String versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}