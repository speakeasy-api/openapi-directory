package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssistantListAssistantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistants")
    public openapisdk.models.shared.AutopilotV1Assistant[] assistants;
    public ListAssistantListAssistantResponse withAssistants(openapisdk.models.shared.AutopilotV1Assistant[] assistants) {
        this.assistants = assistants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListAssistantListAssistantResponseMeta meta;
    public ListAssistantListAssistantResponse withMeta(ListAssistantListAssistantResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}