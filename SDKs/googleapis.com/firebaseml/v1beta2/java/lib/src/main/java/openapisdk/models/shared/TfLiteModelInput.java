package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TfLiteModelInput
 * Information that is specific to TfLite models.
**/
public class TfLiteModelInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automlModel")
    public String automlModel;
    public TfLiteModelInput withAutomlModel(String automlModel) {
        this.automlModel = automlModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsTfliteUri")
    public String gcsTfliteUri;
    public TfLiteModelInput withGcsTfliteUri(String gcsTfliteUri) {
        this.gcsTfliteUri = gcsTfliteUri;
        return this;
    }
}