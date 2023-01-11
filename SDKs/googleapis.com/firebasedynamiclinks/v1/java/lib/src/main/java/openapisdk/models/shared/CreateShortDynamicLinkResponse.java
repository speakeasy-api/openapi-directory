package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateShortDynamicLinkResponse
 * Response to create a short Dynamic Link.
**/
public class CreateShortDynamicLinkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewLink")
    public String previewLink;
    public CreateShortDynamicLinkResponse withPreviewLink(String previewLink) {
        this.previewLink = previewLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortLink")
    public String shortLink;
    public CreateShortDynamicLinkResponse withShortLink(String shortLink) {
        this.shortLink = shortLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public DynamicLinkWarning[] warning;
    public CreateShortDynamicLinkResponse withWarning(DynamicLinkWarning[] warning) {
        this.warning = warning;
        return this;
    }
}