package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Combined Age")
    public CombinedAge combinedAge;
    public ReportResponse withCombinedAge(CombinedAge combinedAge) {
        this.combinedAge = combinedAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sex")
    public Sex sex;
    public ReportResponse withSex(Sex sex) {
        this.sex = sex;
        return this;
    }
}