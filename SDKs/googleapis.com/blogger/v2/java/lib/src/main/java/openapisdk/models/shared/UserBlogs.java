package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserBlogs
 * The container of blogs for this user.
**/
public class UserBlogs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public UserBlogs withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
}