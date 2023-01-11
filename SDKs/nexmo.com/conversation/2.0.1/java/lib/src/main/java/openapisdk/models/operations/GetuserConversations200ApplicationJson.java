package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetuserConversations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public GetuserConversations200ApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("href")
    public String href;
    public GetuserConversations200ApplicationJson withHref(String href) {
        this.href = href;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetuserConversations200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_url")
    public String imageUrl;
    public GetuserConversations200ApplicationJson withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_id")
    public String memberId;
    public GetuserConversations200ApplicationJson withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetuserConversations200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence_number")
    public Long sequenceNumber;
    public GetuserConversations200ApplicationJson withSequenceNumber(Long sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public openapisdk.models.shared.MemberStateEnum state;
    public GetuserConversations200ApplicationJson withState(openapisdk.models.shared.MemberStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public GetuserConversations200ApplicationJsonTimestamp timestamp;
    public GetuserConversations200ApplicationJson withTimestamp(GetuserConversations200ApplicationJsonTimestamp timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}