package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ChannelSnippet
 * Basic details about a channel, including title, description and thumbnails.
**/
public class ChannelSnippet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public ChannelSnippet withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customUrl")
    public String customUrl;
    public ChannelSnippet withCustomUrl(String customUrl) {
        this.customUrl = customUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLanguage")
    public String defaultLanguage;
    public ChannelSnippet withDefaultLanguage(String defaultLanguage) {
        this.defaultLanguage = defaultLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ChannelSnippet withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localized")
    public ChannelLocalization localized;
    public ChannelSnippet withLocalized(ChannelLocalization localized) {
        this.localized = localized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("publishedAt")
    public OffsetDateTime publishedAt;
    public ChannelSnippet withPublishedAt(OffsetDateTime publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnails")
    public ThumbnailDetails thumbnails;
    public ChannelSnippet withThumbnails(ThumbnailDetails thumbnails) {
        this.thumbnails = thumbnails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ChannelSnippet withTitle(String title) {
        this.title = title;
        return this;
    }
}