package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedShortLink
 * Managed Short Link.
**/
public class ManagedShortLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public ManagedShortLink withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flaggedAttribute")
    public ManagedShortLinkFlaggedAttributeEnum[] flaggedAttribute;
    public ManagedShortLink withFlaggedAttribute(ManagedShortLinkFlaggedAttributeEnum[] flaggedAttribute) {
        this.flaggedAttribute = flaggedAttribute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public DynamicLinkInfo info;
    public ManagedShortLink withInfo(DynamicLinkInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public ManagedShortLink withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkName")
    public String linkName;
    public ManagedShortLink withLinkName(String linkName) {
        this.linkName = linkName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public ManagedShortLinkVisibilityEnum visibility;
    public ManagedShortLink withVisibility(ManagedShortLinkVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}