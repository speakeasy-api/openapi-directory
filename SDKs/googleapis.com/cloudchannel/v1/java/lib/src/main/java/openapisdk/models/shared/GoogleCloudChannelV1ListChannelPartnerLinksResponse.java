package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ListChannelPartnerLinksResponse
 * Response message for CloudChannelService.ListChannelPartnerLinks.
**/
public class GoogleCloudChannelV1ListChannelPartnerLinksResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelPartnerLinks")
    public GoogleCloudChannelV1ChannelPartnerLink[] channelPartnerLinks;
    public GoogleCloudChannelV1ListChannelPartnerLinksResponse withChannelPartnerLinks(GoogleCloudChannelV1ChannelPartnerLink[] channelPartnerLinks) {
        this.channelPartnerLinks = channelPartnerLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudChannelV1ListChannelPartnerLinksResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}