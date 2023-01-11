package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransformDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TransformDefinition")
    public TransformDefinitionTransformDefinition transformDefinition;
    public TransformDefinition withTransformDefinition(TransformDefinitionTransformDefinition transformDefinition) {
        this.transformDefinition = transformDefinition;
        return this;
    }
}