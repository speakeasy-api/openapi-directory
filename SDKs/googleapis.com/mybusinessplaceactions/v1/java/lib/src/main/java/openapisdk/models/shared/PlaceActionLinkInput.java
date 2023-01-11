package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaceActionLinkInput
 * Represents a place action link and its attributes.
**/
public class PlaceActionLinkInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPreferred")
    public Boolean isPreferred;
    public PlaceActionLinkInput withIsPreferred(Boolean isPreferred) {
        this.isPreferred = isPreferred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlaceActionLinkInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeActionType")
    public PlaceActionLinkPlaceActionTypeEnum placeActionType;
    public PlaceActionLinkInput withPlaceActionType(PlaceActionLinkPlaceActionTypeEnum placeActionType) {
        this.placeActionType = placeActionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PlaceActionLinkInput withUri(String uri) {
        this.uri = uri;
        return this;
    }
}