package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeAccessInfoEpub
 * Information about epub content. (In LITE projection.)
**/
public class VolumeAccessInfoEpub {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acsTokenLink")
    public String acsTokenLink;
    public VolumeAccessInfoEpub withAcsTokenLink(String acsTokenLink) {
        this.acsTokenLink = acsTokenLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadLink")
    public String downloadLink;
    public VolumeAccessInfoEpub withDownloadLink(String downloadLink) {
        this.downloadLink = downloadLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAvailable")
    public Boolean isAvailable;
    public VolumeAccessInfoEpub withIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
        return this;
    }
}