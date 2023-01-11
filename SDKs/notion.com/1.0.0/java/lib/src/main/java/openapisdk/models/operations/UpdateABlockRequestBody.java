package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateABlockRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paragraph")
    public UpdateABlockRequestBodyParagraph paragraph;
    public UpdateABlockRequestBody withParagraph(UpdateABlockRequestBodyParagraph paragraph) {
        this.paragraph = paragraph;
        return this;
    }
}