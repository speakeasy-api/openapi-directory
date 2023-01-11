package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditEmbedPresetAlt1RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outro")
    public EditEmbedPresetAlt1RequestBodyOutroEnum outro;
    public EditEmbedPresetAlt1RequestBody withOutro(EditEmbedPresetAlt1RequestBodyOutroEnum outro) {
        this.outro = outro;
        return this;
    }
}