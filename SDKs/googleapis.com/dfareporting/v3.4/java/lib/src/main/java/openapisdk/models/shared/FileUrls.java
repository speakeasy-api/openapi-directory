package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileUrls
 * The URLs where the completed report file can be downloaded.
**/
public class FileUrls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiUrl")
    public String apiUrl;
    public FileUrls withApiUrl(String apiUrl) {
        this.apiUrl = apiUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browserUrl")
    public String browserUrl;
    public FileUrls withBrowserUrl(String browserUrl) {
        this.browserUrl = browserUrl;
        return this;
    }
}