package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyLinkSnippet
 * Basic information about a third party account link, including its type and type-specific information.
**/
public class ThirdPartyLinkSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelToStoreLink")
    public ChannelToStoreLinkDetails channelToStoreLink;
    public ThirdPartyLinkSnippet withChannelToStoreLink(ChannelToStoreLinkDetails channelToStoreLink) {
        this.channelToStoreLink = channelToStoreLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ThirdPartyLinkSnippetTypeEnum type;
    public ThirdPartyLinkSnippet withType(ThirdPartyLinkSnippetTypeEnum type) {
        this.type = type;
        return this;
    }
}