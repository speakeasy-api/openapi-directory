package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EntryContent {
    @JsonProperty("careContextReference")
    public String careContextReference;
    public EntryContent withCareContextReference(String careContextReference) {
        this.careContextReference = careContextReference;
        return this;
    }
    @JsonProperty("checksum")
    public String checksum;
    public EntryContent withChecksum(String checksum) {
        this.checksum = checksum;
        return this;
    }
    @JsonProperty("content")
    public String content;
    public EntryContent withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonProperty("media")
    public EntryContentMediaEnum media;
    public EntryContent withMedia(EntryContentMediaEnum media) {
        this.media = media;
        return this;
    }
}