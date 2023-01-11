package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AdCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adCode")
    public String adCode;
    public AdCode withAdCode(String adCode) {
        this.adCode = adCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public AdCode withKind(String kind) {
        this.kind = kind;
        return this;
    }
}