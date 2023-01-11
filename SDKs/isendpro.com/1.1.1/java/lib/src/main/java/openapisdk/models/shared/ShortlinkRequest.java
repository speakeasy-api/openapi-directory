package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ShortlinkRequest {
    @JsonProperty("keyid")
    public String keyid;
    public ShortlinkRequest withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @JsonProperty("shortlink")
    public String shortlink;
    public ShortlinkRequest withShortlink(String shortlink) {
        this.shortlink = shortlink;
        return this;
    }
}