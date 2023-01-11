package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CardObjectTypeBody {
    @JsonProperty("name")
    public CardObjectTypeBodyNameEnum name;
    public CardObjectTypeBody withName(CardObjectTypeBodyNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonProperty("propertiesToSend")
    public String[] propertiesToSend;
    public CardObjectTypeBody withPropertiesToSend(String[] propertiesToSend) {
        this.propertiesToSend = propertiesToSend;
        return this;
    }
}