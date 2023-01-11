package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetrieveConversation200ApplicationJson
 * Conversation Object
**/
public class RetrieveConversation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public openapisdk.models.shared.LinksConversation links;
    public RetrieveConversation200ApplicationJson withLinks(openapisdk.models.shared.LinksConversation links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_key")
    public String apiKey;
    public RetrieveConversation200ApplicationJson withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public RetrieveConversation200ApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public RetrieveConversation200ApplicationJsonMembers[] members;
    public RetrieveConversation200ApplicationJson withMembers(RetrieveConversation200ApplicationJsonMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RetrieveConversation200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numbers")
    public java.util.Map<String, Object> numbers;
    public RetrieveConversation200ApplicationJson withNumbers(java.util.Map<String, Object> numbers) {
        this.numbers = numbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public RetrieveConversation200ApplicationJsonProperties properties;
    public RetrieveConversation200ApplicationJson withProperties(RetrieveConversation200ApplicationJsonProperties properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence_number")
    public String sequenceNumber;
    public RetrieveConversation200ApplicationJson withSequenceNumber(String sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public openapisdk.models.shared.TimestampResConversation timestamp;
    public RetrieveConversation200ApplicationJson withTimestamp(openapisdk.models.shared.TimestampResConversation timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonProperty("uuid")
    public String uuid;
    public RetrieveConversation200ApplicationJson withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}