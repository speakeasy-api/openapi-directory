package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Video
 * This class defines an entitlement data on the Publish API
**/
public class Video {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embedUrl")
    public String embedUrl;
    public Video withEmbedUrl(String embedUrl) {
        this.embedUrl = embedUrl;
        return this;
    }
    @JsonProperty("licensingInformation")
    public LicensingInformation licensingInformation;
    public Video withLicensingInformation(LicensingInformation licensingInformation) {
        this.licensingInformation = licensingInformation;
        return this;
    }
    @JsonProperty("source")
    public Source source;
    public Video withSource(Source source) {
        this.source = source;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Video withUrl(String url) {
        this.url = url;
        return this;
    }
}