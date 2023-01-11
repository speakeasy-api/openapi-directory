package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ConversationParticipant
 * The call participant speaking for a given utterance.
**/
public class GoogleCloudContactcenterinsightsV1ConversationParticipant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowParticipant")
    public String dialogflowParticipant;
    public GoogleCloudContactcenterinsightsV1ConversationParticipant withDialogflowParticipant(String dialogflowParticipant) {
        this.dialogflowParticipant = dialogflowParticipant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dialogflowParticipantName")
    public String dialogflowParticipantName;
    public GoogleCloudContactcenterinsightsV1ConversationParticipant withDialogflowParticipantName(String dialogflowParticipantName) {
        this.dialogflowParticipantName = dialogflowParticipantName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("obfuscatedExternalUserId")
    public String obfuscatedExternalUserId;
    public GoogleCloudContactcenterinsightsV1ConversationParticipant withObfuscatedExternalUserId(String obfuscatedExternalUserId) {
        this.obfuscatedExternalUserId = obfuscatedExternalUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum role;
    public GoogleCloudContactcenterinsightsV1ConversationParticipant withRole(GoogleCloudContactcenterinsightsV1ConversationParticipantRoleEnum role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public GoogleCloudContactcenterinsightsV1ConversationParticipant withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}