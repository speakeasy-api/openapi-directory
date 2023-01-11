package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ZippedScreenshotsSuccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ZippedScreenshotsSuccess withUrl(String url) {
        this.url = url;
        return this;
    }
}