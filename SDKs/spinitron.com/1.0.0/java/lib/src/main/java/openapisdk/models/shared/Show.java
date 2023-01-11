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
 * Show
 * A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.
**/
public class Show {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public ShowLinks links;
    public Show withLinks(ShowLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public Show withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Show withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Show withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end")
    public OffsetDateTime end;
    public Show withEnd(OffsetDateTime end) {
        this.end = end;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hide_dj")
    public Boolean hideDj;
    public Show withHideDj(Boolean hideDj) {
        this.hideDj = hideDj;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Show withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Show withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("one_off")
    public Boolean oneOff;
    public Show withOneOff(Boolean oneOff) {
        this.oneOff = oneOff;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("since")
    public Long since;
    public Show withSince(Long since) {
        this.since = since;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start")
    public OffsetDateTime start;
    public Show withStart(OffsetDateTime start) {
        this.start = start;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Show withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Show withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Show withUrl(String url) {
        this.url = url;
        return this;
    }
}