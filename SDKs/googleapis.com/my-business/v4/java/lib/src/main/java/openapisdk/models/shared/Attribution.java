package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attribution
 * Attribution information for customer media items, such as the contributor's name and profile picture.
**/
public class Attribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileName")
    public String profileName;
    public Attribution withProfileName(String profileName) {
        this.profileName = profileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilePhotoUrl")
    public String profilePhotoUrl;
    public Attribution withProfilePhotoUrl(String profilePhotoUrl) {
        this.profilePhotoUrl = profilePhotoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileUrl")
    public String profileUrl;
    public Attribution withProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("takedownUrl")
    public String takedownUrl;
    public Attribution withTakedownUrl(String takedownUrl) {
        this.takedownUrl = takedownUrl;
        return this;
    }
}