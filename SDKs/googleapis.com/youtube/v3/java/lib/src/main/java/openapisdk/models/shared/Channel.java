package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Channel
 * A *channel* resource contains information about a YouTube channel.
**/
public class Channel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditDetails")
    public ChannelAuditDetails auditDetails;
    public Channel withAuditDetails(ChannelAuditDetails auditDetails) {
        this.auditDetails = auditDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brandingSettings")
    public ChannelBrandingSettings brandingSettings;
    public Channel withBrandingSettings(ChannelBrandingSettings brandingSettings) {
        this.brandingSettings = brandingSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentDetails")
    public ChannelContentDetails contentDetails;
    public Channel withContentDetails(ChannelContentDetails contentDetails) {
        this.contentDetails = contentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentOwnerDetails")
    public ChannelContentOwnerDetails contentOwnerDetails;
    public Channel withContentOwnerDetails(ChannelContentOwnerDetails contentOwnerDetails) {
        this.contentOwnerDetails = contentOwnerDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversionPings")
    public ChannelConversionPings conversionPings;
    public Channel withConversionPings(ChannelConversionPings conversionPings) {
        this.conversionPings = conversionPings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Channel withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Channel withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Channel withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localizations")
    public java.util.Map<String, ChannelLocalization> localizations;
    public Channel withLocalizations(java.util.Map<String, ChannelLocalization> localizations) {
        this.localizations = localizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public ChannelSnippet snippet;
    public Channel withSnippet(ChannelSnippet snippet) {
        this.snippet = snippet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistics")
    public ChannelStatistics statistics;
    public Channel withStatistics(ChannelStatistics statistics) {
        this.statistics = statistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ChannelStatus status;
    public Channel withStatus(ChannelStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicDetails")
    public ChannelTopicDetails topicDetails;
    public Channel withTopicDetails(ChannelTopicDetails topicDetails) {
        this.topicDetails = topicDetails;
        return this;
    }
}