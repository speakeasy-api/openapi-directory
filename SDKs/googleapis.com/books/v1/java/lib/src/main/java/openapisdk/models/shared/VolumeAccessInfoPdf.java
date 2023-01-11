package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeAccessInfoPdf
 * Information about pdf content. (In LITE projection.)
**/
public class VolumeAccessInfoPdf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acsTokenLink")
    public String acsTokenLink;
    public VolumeAccessInfoPdf withAcsTokenLink(String acsTokenLink) {
        this.acsTokenLink = acsTokenLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadLink")
    public String downloadLink;
    public VolumeAccessInfoPdf withDownloadLink(String downloadLink) {
        this.downloadLink = downloadLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAvailable")
    public Boolean isAvailable;
    public VolumeAccessInfoPdf withIsAvailable(Boolean isAvailable) {
        this.isAvailable = isAvailable;
        return this;
    }
}