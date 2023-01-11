package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UrlDownloadSize
 * The URL-level breakdown for the download size.
**/
public class UrlDownloadSize {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadSizeKb")
    public Integer downloadSizeKb;
    public UrlDownloadSize withDownloadSizeKb(Integer downloadSizeKb) {
        this.downloadSizeKb = downloadSizeKb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("normalizedUrl")
    public String normalizedUrl;
    public UrlDownloadSize withNormalizedUrl(String normalizedUrl) {
        this.normalizedUrl = normalizedUrl;
        return this;
    }
}