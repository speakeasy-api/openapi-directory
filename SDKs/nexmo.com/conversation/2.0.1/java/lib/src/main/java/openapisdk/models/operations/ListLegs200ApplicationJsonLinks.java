package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListLegs200ApplicationJsonLinks {
    @JsonProperty("self")
    public ListLegs200ApplicationJsonLinksSelf self;
    public ListLegs200ApplicationJsonLinks withSelf(ListLegs200ApplicationJsonLinksSelf self) {
        this.self = self;
        return this;
    }
}