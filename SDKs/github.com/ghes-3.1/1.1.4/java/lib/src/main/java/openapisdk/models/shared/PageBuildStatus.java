package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PageBuildStatus
 * Page Build Status
**/
public class PageBuildStatus {
    @JsonProperty("status")
    public String status;
    public PageBuildStatus withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PageBuildStatus withUrl(String url) {
        this.url = url;
        return this;
    }
}