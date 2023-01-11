package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PlaceActionLink
 * Represents a place action link and its attributes.
**/
public class PlaceActionLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public PlaceActionLink withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEditable")
    public Boolean isEditable;
    public PlaceActionLink withIsEditable(Boolean isEditable) {
        this.isEditable = isEditable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPreferred")
    public Boolean isPreferred;
    public PlaceActionLink withIsPreferred(Boolean isPreferred) {
        this.isPreferred = isPreferred;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PlaceActionLink withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeActionType")
    public PlaceActionLinkPlaceActionTypeEnum placeActionType;
    public PlaceActionLink withPlaceActionType(PlaceActionLinkPlaceActionTypeEnum placeActionType) {
        this.placeActionType = placeActionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerType")
    public PlaceActionLinkProviderTypeEnum providerType;
    public PlaceActionLink withProviderType(PlaceActionLinkProviderTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public PlaceActionLink withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PlaceActionLink withUri(String uri) {
        this.uri = uri;
        return this;
    }
}