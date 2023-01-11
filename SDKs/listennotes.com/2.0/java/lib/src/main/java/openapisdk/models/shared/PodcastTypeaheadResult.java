package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PodcastTypeaheadResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicit_content")
    public Boolean explicitContent;
    public PodcastTypeaheadResult withExplicitContent(Boolean explicitContent) {
        this.explicitContent = explicitContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PodcastTypeaheadResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public PodcastTypeaheadResult withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher_highlighted")
    public String publisherHighlighted;
    public PodcastTypeaheadResult withPublisherHighlighted(String publisherHighlighted) {
        this.publisherHighlighted = publisherHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher_original")
    public String publisherOriginal;
    public PodcastTypeaheadResult withPublisherOriginal(String publisherOriginal) {
        this.publisherOriginal = publisherOriginal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnail")
    public String thumbnail;
    public PodcastTypeaheadResult withThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_highlighted")
    public String titleHighlighted;
    public PodcastTypeaheadResult withTitleHighlighted(String titleHighlighted) {
        this.titleHighlighted = titleHighlighted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title_original")
    public String titleOriginal;
    public PodcastTypeaheadResult withTitleOriginal(String titleOriginal) {
        this.titleOriginal = titleOriginal;
        return this;
    }
}