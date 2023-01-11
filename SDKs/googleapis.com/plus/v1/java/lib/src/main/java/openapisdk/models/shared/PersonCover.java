package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonCover
 * The cover photo content.
**/
public class PersonCover {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverInfo")
    public PersonCoverCoverInfo coverInfo;
    public PersonCover withCoverInfo(PersonCoverCoverInfo coverInfo) {
        this.coverInfo = coverInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverPhoto")
    public PersonCoverCoverPhoto coverPhoto;
    public PersonCover withCoverPhoto(PersonCoverCoverPhoto coverPhoto) {
        this.coverPhoto = coverPhoto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("layout")
    public String layout;
    public PersonCover withLayout(String layout) {
        this.layout = layout;
        return this;
    }
}