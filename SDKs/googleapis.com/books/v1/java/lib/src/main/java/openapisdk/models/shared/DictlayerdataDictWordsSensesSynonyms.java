package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictlayerdataDictWordsSensesSynonyms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public DictlayerdataDictWordsSensesSynonymsSource source;
    public DictlayerdataDictWordsSensesSynonyms withSource(DictlayerdataDictWordsSensesSynonymsSource source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public DictlayerdataDictWordsSensesSynonyms withText(String text) {
        this.text = text;
        return this;
    }
}