package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictlayerdataDictWordsExamples {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public DictlayerdataDictWordsExamplesSource source;
    public DictlayerdataDictWordsExamples withSource(DictlayerdataDictWordsExamplesSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public DictlayerdataDictWordsExamples withText(String text) {
        this.text = text;
        return this;
    }
}