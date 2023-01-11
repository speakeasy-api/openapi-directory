package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaceActionTypeMetadata
 * Metadata for supported place action types.
**/
public class PlaceActionTypeMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PlaceActionTypeMetadata withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeActionType")
    public PlaceActionTypeMetadataPlaceActionTypeEnum placeActionType;
    public PlaceActionTypeMetadata withPlaceActionType(PlaceActionTypeMetadataPlaceActionTypeEnum placeActionType) {
        this.placeActionType = placeActionType;
        return this;
    }
}