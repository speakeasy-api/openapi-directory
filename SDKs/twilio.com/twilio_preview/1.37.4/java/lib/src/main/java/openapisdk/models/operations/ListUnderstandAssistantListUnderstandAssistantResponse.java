package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUnderstandAssistantListUnderstandAssistantResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistants")
    public openapisdk.models.shared.PreviewUnderstandAssistant[] assistants;
    public ListUnderstandAssistantListUnderstandAssistantResponse withAssistants(openapisdk.models.shared.PreviewUnderstandAssistant[] assistants) {
        this.assistants = assistants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUnderstandAssistantListUnderstandAssistantResponseMeta meta;
    public ListUnderstandAssistantListUnderstandAssistantResponse withMeta(ListUnderstandAssistantListUnderstandAssistantResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}