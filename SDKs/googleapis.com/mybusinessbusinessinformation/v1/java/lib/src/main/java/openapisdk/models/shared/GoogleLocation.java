package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleLocation
 * Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.
**/
public class GoogleLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public GoogleLocation withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestAdminRightsUri")
    public String requestAdminRightsUri;
    public GoogleLocation withRequestAdminRightsUri(String requestAdminRightsUri) {
        this.requestAdminRightsUri = requestAdminRightsUri;
        return this;
    }
}