package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListLegs200ApplicationJsonEmbedded
 * A list of conversation objects. See the [get details of a specific conversation](#retrieveConversation) response fields for a description of the nested objects
**/
public class ListLegs200ApplicationJsonEmbedded {
    @JsonProperty("legs")
    public ListLegs200ApplicationJsonEmbeddedLegs[] legs;
    public ListLegs200ApplicationJsonEmbedded withLegs(ListLegs200ApplicationJsonEmbeddedLegs[] legs) {
        this.legs = legs;
        return this;
    }
}