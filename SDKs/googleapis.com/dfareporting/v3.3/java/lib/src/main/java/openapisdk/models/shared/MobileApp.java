package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MobileApp
 * Contains information about a mobile app. Used as a landing page deep link.
**/
public class MobileApp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directory")
    public MobileAppDirectoryEnum directory;
    public MobileApp withDirectory(MobileAppDirectoryEnum directory) {
        this.directory = directory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MobileApp withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public MobileApp withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherName")
    public String publisherName;
    public MobileApp withPublisherName(String publisherName) {
        this.publisherName = publisherName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public MobileApp withTitle(String title) {
        this.title = title;
        return this;
    }
}