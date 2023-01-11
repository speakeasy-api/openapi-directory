package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CalculateReachableRangePostDataParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowVignette")
    public String[] allowVignette;
    public CalculateReachableRangePostDataParameters withAllowVignette(String[] allowVignette) {
        this.allowVignette = allowVignette;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidAreas")
    public CalculateReachableRangePostDataParametersAvoidAreas avoidAreas;
    public CalculateReachableRangePostDataParameters withAvoidAreas(CalculateReachableRangePostDataParametersAvoidAreas avoidAreas) {
        this.avoidAreas = avoidAreas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidVignette")
    public String[] avoidVignette;
    public CalculateReachableRangePostDataParameters withAvoidVignette(String[] avoidVignette) {
        this.avoidVignette = avoidVignette;
        return this;
    }
}