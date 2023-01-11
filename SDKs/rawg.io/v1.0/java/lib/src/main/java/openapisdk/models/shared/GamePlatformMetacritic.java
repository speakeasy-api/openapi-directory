package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GamePlatformMetacritic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metascore")
    public Long metascore;
    public GamePlatformMetacritic withMetascore(Long metascore) {
        this.metascore = metascore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GamePlatformMetacritic withUrl(String url) {
        this.url = url;
        return this;
    }
}