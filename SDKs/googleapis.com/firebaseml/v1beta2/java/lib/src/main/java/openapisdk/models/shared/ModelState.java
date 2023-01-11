package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModelState
 * State common to all model types. Includes publishing and validation information.
**/
public class ModelState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published")
    public Boolean published;
    public ModelState withPublished(Boolean published) {
        this.published = published;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationError")
    public Status validationError;
    public ModelState withValidationError(Status validationError) {
        this.validationError = validationError;
        return this;
    }
}