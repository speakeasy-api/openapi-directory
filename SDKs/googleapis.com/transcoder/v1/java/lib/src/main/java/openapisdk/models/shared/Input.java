package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Input
 * Input asset.
**/
public class Input {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public Input withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preprocessingConfig")
    public PreprocessingConfig preprocessingConfig;
    public Input withPreprocessingConfig(PreprocessingConfig preprocessingConfig) {
        this.preprocessingConfig = preprocessingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public Input withUri(String uri) {
        this.uri = uri;
        return this;
    }
}