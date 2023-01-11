package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class ImageUrl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
@SpeakeasyMetadata("form:name=url")
    public String url;
    public ImageUrl withUrl(String url) {
        this.url = url;
        return this;
    }
}