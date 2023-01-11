package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImageVersion
 * ImageVersion information
**/
public class ImageVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationDisabled")
    public Boolean creationDisabled;
    public ImageVersion withCreationDisabled(Boolean creationDisabled) {
        this.creationDisabled = creationDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageVersionId")
    public String imageVersionId;
    public ImageVersion withImageVersionId(String imageVersionId) {
        this.imageVersionId = imageVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefault")
    public Boolean isDefault;
    public ImageVersion withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("releaseDate")
    public Date releaseDate;
    public ImageVersion withReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedPythonVersions")
    public String[] supportedPythonVersions;
    public ImageVersion withSupportedPythonVersions(String[] supportedPythonVersions) {
        this.supportedPythonVersions = supportedPythonVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeDisabled")
    public Boolean upgradeDisabled;
    public ImageVersion withUpgradeDisabled(Boolean upgradeDisabled) {
        this.upgradeDisabled = upgradeDisabled;
        return this;
    }
}