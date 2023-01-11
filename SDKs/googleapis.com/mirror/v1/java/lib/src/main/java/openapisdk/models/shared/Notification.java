package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Notification
 * A notification delivered by the API.
**/
public class Notification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;
    public Notification withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemId")
    public String itemId;
    public Notification withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public String operation;
    public Notification withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userActions")
    public UserAction[] userActions;
    public Notification withUserActions(UserAction[] userActions) {
        this.userActions = userActions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userToken")
    public String userToken;
    public Notification withUserToken(String userToken) {
        this.userToken = userToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyToken")
    public String verifyToken;
    public Notification withVerifyToken(String verifyToken) {
        this.verifyToken = verifyToken;
        return this;
    }
}