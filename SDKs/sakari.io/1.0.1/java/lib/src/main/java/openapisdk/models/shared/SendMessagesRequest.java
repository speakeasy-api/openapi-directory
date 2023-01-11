package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendMessagesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public ContactRequest[] contacts;
    public SendMessagesRequest withContacts(ContactRequest[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationStrategy")
    public String conversationStrategy;
    public SendMessagesRequest withConversationStrategy(String conversationStrategy) {
        this.conversationStrategy = conversationStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversations")
    public String[] conversations;
    public SendMessagesRequest withConversations(String[] conversations) {
        this.conversations = conversations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public SendMessagesRequestFilters filters;
    public SendMessagesRequest withFilters(SendMessagesRequestFilters filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public SendMessagesRequestMedia[] media;
    public SendMessagesRequest withMedia(SendMessagesRequestMedia[] media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public String template;
    public SendMessagesRequest withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SendMessagesRequestTypeEnum type;
    public SendMessagesRequest withType(SendMessagesRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}