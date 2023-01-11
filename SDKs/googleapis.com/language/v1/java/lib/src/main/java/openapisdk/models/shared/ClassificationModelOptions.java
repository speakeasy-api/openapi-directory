package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassificationModelOptions
 * Model options available for classification requests.
**/
public class ClassificationModelOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v1Model")
    public java.util.Map<String, Object> v1Model;
    public ClassificationModelOptions withV1Model(java.util.Map<String, Object> v1Model) {
        this.v1Model = v1Model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v2Model")
    public V2Model v2Model;
    public ClassificationModelOptions withV2Model(V2Model v2Model) {
        this.v2Model = v2Model;
        return this;
    }
}