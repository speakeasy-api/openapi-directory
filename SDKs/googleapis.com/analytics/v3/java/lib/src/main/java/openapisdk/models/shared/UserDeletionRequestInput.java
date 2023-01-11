package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserDeletionRequestInput
 * JSON template for a user deletion request resource.
**/
public class UserDeletionRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firebaseProjectId")
    public String firebaseProjectId;
    public UserDeletionRequestInput withFirebaseProjectId(String firebaseProjectId) {
        this.firebaseProjectId = firebaseProjectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public UserDeletionRequestId id;
    public UserDeletionRequestInput withId(UserDeletionRequestId id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UserDeletionRequestInput withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyId")
    public String propertyId;
    public UserDeletionRequestInput withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public UserDeletionRequestInput withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}