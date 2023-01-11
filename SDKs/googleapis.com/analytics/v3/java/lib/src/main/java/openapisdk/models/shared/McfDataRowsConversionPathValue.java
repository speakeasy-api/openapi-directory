package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class McfDataRowsConversionPathValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interactionType")
    public String interactionType;
    public McfDataRowsConversionPathValue withInteractionType(String interactionType) {
        this.interactionType = interactionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeValue")
    public String nodeValue;
    public McfDataRowsConversionPathValue withNodeValue(String nodeValue) {
        this.nodeValue = nodeValue;
        return this;
    }
}