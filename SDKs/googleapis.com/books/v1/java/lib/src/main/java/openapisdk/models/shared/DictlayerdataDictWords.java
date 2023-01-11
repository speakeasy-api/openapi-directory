package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictlayerdataDictWords {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("derivatives")
    public DictlayerdataDictWordsDerivatives[] derivatives;
    public DictlayerdataDictWords withDerivatives(DictlayerdataDictWordsDerivatives[] derivatives) {
        this.derivatives = derivatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("examples")
    public DictlayerdataDictWordsExamples[] examples;
    public DictlayerdataDictWords withExamples(DictlayerdataDictWordsExamples[] examples) {
        this.examples = examples;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senses")
    public DictlayerdataDictWordsSenses[] senses;
    public DictlayerdataDictWords withSenses(DictlayerdataDictWordsSenses[] senses) {
        this.senses = senses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public DictlayerdataDictWordsSource source;
    public DictlayerdataDictWords withSource(DictlayerdataDictWordsSource source) {
        this.source = source;
        return this;
    }
}