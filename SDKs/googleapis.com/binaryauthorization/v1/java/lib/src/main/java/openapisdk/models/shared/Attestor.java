package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attestor
 * An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
**/
public class Attestor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Attestor withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Attestor withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Attestor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Attestor withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userOwnedGrafeasNote")
    public UserOwnedGrafeasNote userOwnedGrafeasNote;
    public Attestor withUserOwnedGrafeasNote(UserOwnedGrafeasNote userOwnedGrafeasNote) {
        this.userOwnedGrafeasNote = userOwnedGrafeasNote;
        return this;
    }
}