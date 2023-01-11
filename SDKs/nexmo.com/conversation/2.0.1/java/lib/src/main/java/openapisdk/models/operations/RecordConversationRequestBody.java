package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RecordConversationRequestBody {
    @JsonProperty("action")
    public openapisdk.models.shared.ActionEnum action;
    public RecordConversationRequestBody withAction(openapisdk.models.shared.ActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_method")
    public String eventMethod;
    public RecordConversationRequestBody withEventMethod(String eventMethod) {
        this.eventMethod = eventMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_url")
    public String[] eventUrl;
    public RecordConversationRequestBody withEventUrl(String[] eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public openapisdk.models.shared.FormatEnum format;
    public RecordConversationRequestBody withFormat(openapisdk.models.shared.FormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("split")
    public String split;
    public RecordConversationRequestBody withSplit(String split) {
        this.split = split;
        return this;
    }
}