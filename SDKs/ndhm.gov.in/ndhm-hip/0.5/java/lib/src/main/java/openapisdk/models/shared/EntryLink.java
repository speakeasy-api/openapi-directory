package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EntryLink {
    @JsonProperty("careContextReference")
    public String careContextReference;
    public EntryLink withCareContextReference(String careContextReference) {
        this.careContextReference = careContextReference;
        return this;
    }
    @JsonProperty("checksum")
    public String checksum;
    public EntryLink withChecksum(String checksum) {
        this.checksum = checksum;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public EntryLink withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("media")
    public EntryLinkMediaEnum media;
    public EntryLink withMedia(EntryLinkMediaEnum media) {
        this.media = media;
        return this;
    }
}