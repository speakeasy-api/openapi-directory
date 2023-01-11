package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonCoverCoverInfo
 * Extra information about the cover photo.
**/
public class PersonCoverCoverInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("leftImageOffset")
    public Integer leftImageOffset;
    public PersonCoverCoverInfo withLeftImageOffset(Integer leftImageOffset) {
        this.leftImageOffset = leftImageOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topImageOffset")
    public Integer topImageOffset;
    public PersonCoverCoverInfo withTopImageOffset(Integer topImageOffset) {
        this.topImageOffset = topImageOffset;
        return this;
    }
}