package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Bookshelf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access")
    public String access;
    public Bookshelf withAccess(String access) {
        this.access = access;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public Bookshelf withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Bookshelf withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public Bookshelf withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Bookshelf withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Bookshelf withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Bookshelf withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated")
    public String updated;
    public Bookshelf withUpdated(String updated) {
        this.updated = updated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeCount")
    public Integer volumeCount;
    public Bookshelf withVolumeCount(Integer volumeCount) {
        this.volumeCount = volumeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumesLastUpdated")
    public String volumesLastUpdated;
    public Bookshelf withVolumesLastUpdated(String volumesLastUpdated) {
        this.volumesLastUpdated = volumesLastUpdated;
        return this;
    }
}