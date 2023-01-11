package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppEdit
 * Represents an edit of an app. An edit allows clients to make multiple changes before committing them in one operation.
**/
public class AppEdit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expiryTimeSeconds")
    public String expiryTimeSeconds;
    public AppEdit withExpiryTimeSeconds(String expiryTimeSeconds) {
        this.expiryTimeSeconds = expiryTimeSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AppEdit withId(String id) {
        this.id = id;
        return this;
    }
}