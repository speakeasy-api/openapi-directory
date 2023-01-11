package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChannelSectionSnippet
 * Basic details about a channel section, including title, style and position.
**/
public class ChannelSectionSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelId")
    public String channelId;
    public ChannelSectionSnippet withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguage")
    public String defaultLanguage;
    public ChannelSectionSnippet withDefaultLanguage(String defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localized")
    public ChannelSectionLocalization localized;
    public ChannelSectionSnippet withLocalized(ChannelSectionLocalization localized) {
        this.localized = localized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public ChannelSectionSnippet withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("style")
    public ChannelSectionSnippetStyleEnum style;
    public ChannelSectionSnippet withStyle(ChannelSectionSnippetStyleEnum style) {
        this.style = style;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ChannelSectionSnippet withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ChannelSectionSnippetTypeEnum type;
    public ChannelSectionSnippet withType(ChannelSectionSnippetTypeEnum type) {
        this.type = type;
        return this;
    }
}