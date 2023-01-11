package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictlayerdataDictWordsSensesDefinitionsExamples {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public DictlayerdataDictWordsSensesDefinitionsExamplesSource source;
    public DictlayerdataDictWordsSensesDefinitionsExamples withSource(DictlayerdataDictWordsSensesDefinitionsExamplesSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public DictlayerdataDictWordsSensesDefinitionsExamples withText(String text) {
        this.text = text;
        return this;
    }
}