package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DictlayerdataDictWordsSource
 * The words with different meanings but not related words, e.g. "go" (game) and "go" (verb).
**/
public class DictlayerdataDictWordsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribution")
    public String attribution;
    public DictlayerdataDictWordsSource withAttribution(String attribution) {
        this.attribution = attribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public DictlayerdataDictWordsSource withUrl(String url) {
        this.url = url;
        return this;
    }
}