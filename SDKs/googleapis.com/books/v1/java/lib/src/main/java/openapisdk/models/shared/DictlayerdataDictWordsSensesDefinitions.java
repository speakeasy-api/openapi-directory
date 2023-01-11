package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictlayerdataDictWordsSensesDefinitions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public String definition;
    public DictlayerdataDictWordsSensesDefinitions withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("examples")
    public DictlayerdataDictWordsSensesDefinitionsExamples[] examples;
    public DictlayerdataDictWordsSensesDefinitions withExamples(DictlayerdataDictWordsSensesDefinitionsExamples[] examples) {
        this.examples = examples;
        return this;
    }
}