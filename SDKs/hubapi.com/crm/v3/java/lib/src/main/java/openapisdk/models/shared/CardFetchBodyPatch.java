package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CardFetchBodyPatch
 * Variant of CardFetchBody with fields as optional for patches
**/
public class CardFetchBodyPatch {
    @JsonProperty("objectTypes")
    public CardObjectTypeBody[] objectTypes;
    public CardFetchBodyPatch withObjectTypes(CardObjectTypeBody[] objectTypes) {
        this.objectTypes = objectTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetUrl")
    public String targetUrl;
    public CardFetchBodyPatch withTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
        return this;
    }
}