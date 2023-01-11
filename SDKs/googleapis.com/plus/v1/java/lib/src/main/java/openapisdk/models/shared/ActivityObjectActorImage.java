package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityObjectActorImage
 * The image representation of the original actor.
**/
public class ActivityObjectActorImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ActivityObjectActorImage withUrl(String url) {
        this.url = url;
        return this;
    }
}