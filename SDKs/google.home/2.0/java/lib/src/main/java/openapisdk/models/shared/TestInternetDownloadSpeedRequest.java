package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TestInternetDownloadSpeedRequest {
    @JsonProperty("url")
    public String url;
    public TestInternetDownloadSpeedRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}