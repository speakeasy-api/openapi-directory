package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DictlayerdataCommon {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public DictlayerdataCommon withTitle(String title) {
        this.title = title;
        return this;
    }
}