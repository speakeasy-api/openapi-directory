package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictlayerdataDictWordsExamplesSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attribution")
    public String attribution;
    public DictlayerdataDictWordsExamplesSource withAttribution(String attribution) {
        this.attribution = attribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public DictlayerdataDictWordsExamplesSource withUrl(String url) {
        this.url = url;
        return this;
    }
}