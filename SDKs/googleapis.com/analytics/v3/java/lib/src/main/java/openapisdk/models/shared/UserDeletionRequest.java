package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * UserDeletionRequest
 * JSON template for a user deletion request resource.
**/
public class UserDeletionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("deletionRequestTime")
    public OffsetDateTime deletionRequestTime;
    public UserDeletionRequest withDeletionRequestTime(OffsetDateTime deletionRequestTime) {
        this.deletionRequestTime = deletionRequestTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firebaseProjectId")
    public String firebaseProjectId;
    public UserDeletionRequest withFirebaseProjectId(String firebaseProjectId) {
        this.firebaseProjectId = firebaseProjectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public UserDeletionRequestId id;
    public UserDeletionRequest withId(UserDeletionRequestId id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public UserDeletionRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyId")
    public String propertyId;
    public UserDeletionRequest withPropertyId(String propertyId) {
        this.propertyId = propertyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webPropertyId")
    public String webPropertyId;
    public UserDeletionRequest withWebPropertyId(String webPropertyId) {
        this.webPropertyId = webPropertyId;
        return this;
    }
}