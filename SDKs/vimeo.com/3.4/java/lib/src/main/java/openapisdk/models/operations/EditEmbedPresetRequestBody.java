package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditEmbedPresetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outro")
    public EditEmbedPresetRequestBodyOutroEnum outro;
    public EditEmbedPresetRequestBody withOutro(EditEmbedPresetRequestBodyOutroEnum outro) {
        this.outro = outro;
        return this;
    }
}