package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-errorobject - Find more info on the official Spotify Web API Reference
**/
public class ErrorObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ErrorObject withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Integer status;
    public ErrorObject withStatus(Integer status) {
        this.status = status;
        return this;
    }
}