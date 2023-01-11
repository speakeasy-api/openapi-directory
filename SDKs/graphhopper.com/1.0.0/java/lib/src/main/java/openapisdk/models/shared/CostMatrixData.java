package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CostMatrixData
 * JSON data of matrix response
**/
public class CostMatrixData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distances")
    public Double[][] distances;
    public CostMatrixData withDistances(Double[][] distances) {
        this.distances = distances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public CostMatrixDataInfo info;
    public CostMatrixData withInfo(CostMatrixDataInfo info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("times")
    public Long[][] times;
    public CostMatrixData withTimes(Long[][] times) {
        this.times = times;
        return this;
    }
}