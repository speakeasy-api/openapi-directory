package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateManagedShortLinkResponse
 * Response to create a short Dynamic Link.
**/
public class CreateManagedShortLinkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managedShortLink")
    public ManagedShortLink managedShortLink;
    public CreateManagedShortLinkResponse withManagedShortLink(ManagedShortLink managedShortLink) {
        this.managedShortLink = managedShortLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previewLink")
    public String previewLink;
    public CreateManagedShortLinkResponse withPreviewLink(String previewLink) {
        this.previewLink = previewLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warning")
    public DynamicLinkWarning[] warning;
    public CreateManagedShortLinkResponse withWarning(DynamicLinkWarning[] warning) {
        this.warning = warning;
        return this;
    }
}