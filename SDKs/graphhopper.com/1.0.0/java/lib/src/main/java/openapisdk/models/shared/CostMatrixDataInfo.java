package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CostMatrixDataInfo
 * Additional information for your request
**/
public class CostMatrixDataInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("copyrights")
    public String[] copyrights;
    public CostMatrixDataInfo withCopyrights(String[] copyrights) {
        this.copyrights = copyrights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("took")
    public Double took;
    public CostMatrixDataInfo withTook(Double took) {
        this.took = took;
        return this;
    }
}