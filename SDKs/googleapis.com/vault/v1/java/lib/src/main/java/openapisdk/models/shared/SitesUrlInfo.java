package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SitesUrlInfo
 * The published site URLs of new Google Sites to search
**/
public class SitesUrlInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public String[] urls;
    public SitesUrlInfo withUrls(String[] urls) {
        this.urls = urls;
        return this;
    }
}