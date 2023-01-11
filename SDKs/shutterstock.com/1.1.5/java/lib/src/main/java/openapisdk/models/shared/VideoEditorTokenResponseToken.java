package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoEditorTokenResponseToken
 * The user access token
**/
public class VideoEditorTokenResponseToken {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationDate")
    public Double expirationDate;
    public VideoEditorTokenResponseToken withExpirationDate(Double expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public VideoEditorTokenResponseToken withValue(String value) {
        this.value = value;
        return this;
    }
}