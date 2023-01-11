package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PretargetingConfigList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public PretargetingConfig[] items;
    public PretargetingConfigList withItems(PretargetingConfig[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PretargetingConfigList withKind(String kind) {
        this.kind = kind;
        return this;
    }
}