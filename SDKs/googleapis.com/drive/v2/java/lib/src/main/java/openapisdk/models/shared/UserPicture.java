package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserPicture
 * The user's profile picture.
**/
public class UserPicture {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UserPicture withUrl(String url) {
        this.url = url;
        return this;
    }
}