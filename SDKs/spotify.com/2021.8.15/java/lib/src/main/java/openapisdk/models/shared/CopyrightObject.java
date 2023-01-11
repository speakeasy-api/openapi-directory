package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CopyrightObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-copyrightobject - Find more info on the official Spotify Web API Reference
**/
public class CopyrightObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public CopyrightObject withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CopyrightObject withType(String type) {
        this.type = type;
        return this;
    }
}