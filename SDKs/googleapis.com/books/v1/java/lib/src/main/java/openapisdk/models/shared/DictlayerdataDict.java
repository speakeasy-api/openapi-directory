package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictlayerdataDict {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public DictlayerdataDictSource source;
    public DictlayerdataDict withSource(DictlayerdataDictSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("words")
    public DictlayerdataDictWords[] words;
    public DictlayerdataDict withWords(DictlayerdataDictWords[] words) {
        this.words = words;
        return this;
    }
}