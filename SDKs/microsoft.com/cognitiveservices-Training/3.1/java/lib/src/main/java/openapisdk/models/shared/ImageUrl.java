package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * ImageUrl
 * Image url.
**/
public class ImageUrl {
    @JsonProperty("url")
@SpeakeasyMetadata("form:name=url")
    public String url;
    public ImageUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}