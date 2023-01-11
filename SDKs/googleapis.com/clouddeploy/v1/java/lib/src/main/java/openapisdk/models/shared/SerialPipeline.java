package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SerialPipeline
 * SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
**/
public class SerialPipeline {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stages")
    public Stage[] stages;
    public SerialPipeline withStages(Stage[] stages) {
        this.stages = stages;
        return this;
    }
}