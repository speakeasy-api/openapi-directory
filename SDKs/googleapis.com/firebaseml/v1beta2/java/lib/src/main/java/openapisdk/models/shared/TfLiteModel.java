package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TfLiteModel
 * Information that is specific to TfLite models.
**/
public class TfLiteModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("automlModel")
    public String automlModel;
    public TfLiteModel withAutomlModel(String automlModel) {
        this.automlModel = automlModel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsTfliteUri")
    public String gcsTfliteUri;
    public TfLiteModel withGcsTfliteUri(String gcsTfliteUri) {
        this.gcsTfliteUri = gcsTfliteUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeBytes")
    public String sizeBytes;
    public TfLiteModel withSizeBytes(String sizeBytes) {
        this.sizeBytes = sizeBytes;
        return this;
    }
}