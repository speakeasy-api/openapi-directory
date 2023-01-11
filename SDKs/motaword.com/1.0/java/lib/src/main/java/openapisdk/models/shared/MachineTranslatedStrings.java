package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MachineTranslatedStrings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public Monetary cost;
    public MachineTranslatedStrings withCost(Monetary cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strings")
    public ClientStringWithTranslations[] strings;
    public MachineTranslatedStrings withStrings(ClientStringWithTranslations[] strings) {
        this.strings = strings;
        return this;
    }
}