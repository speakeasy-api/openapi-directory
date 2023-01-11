package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CisLineType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisLineType")
    public CisLineTypeCisLineType cisLineType;
    public CisLineType withCisLineType(CisLineTypeCisLineType cisLineType) {
        this.cisLineType = cisLineType;
        return this;
    }
}