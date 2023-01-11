package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelSection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDetails")
    public ChannelSectionContentDetails contentDetails;
    public ChannelSection withContentDetails(ChannelSectionContentDetails contentDetails) {
        this.contentDetails = contentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public ChannelSection withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ChannelSection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ChannelSection withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizations")
    public java.util.Map<String, ChannelSectionLocalization> localizations;
    public ChannelSection withLocalizations(java.util.Map<String, ChannelSectionLocalization> localizations) {
        this.localizations = localizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public ChannelSectionSnippet snippet;
    public ChannelSection withSnippet(ChannelSectionSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targeting")
    public ChannelSectionTargeting targeting;
    public ChannelSection withTargeting(ChannelSectionTargeting targeting) {
        this.targeting = targeting;
        return this;
    }
}