package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditUserAlt1RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bio")
    public String bio;
    public EditUserAlt1RequestBody withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content_filter")
    public String[] contentFilter;
    public EditUserAlt1RequestBody withContentFilter(String[] contentFilter) {
        this.contentFilter = contentFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public EditUserAlt1RequestBody withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public EditUserAlt1RequestBody withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EditUserAlt1RequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public EditUserAlt1RequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public EditUserAlt1RequestBodyVideos videos;
    public EditUserAlt1RequestBody withVideos(EditUserAlt1RequestBodyVideos videos) {
        this.videos = videos;
        return this;
    }
}