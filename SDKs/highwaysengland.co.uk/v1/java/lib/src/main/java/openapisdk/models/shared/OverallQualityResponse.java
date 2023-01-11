package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OverallQualityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_quality")
    public Integer dataQuality;
    public OverallQualityResponse withDataQuality(Integer dataQuality) {
        this.dataQuality = dataQuality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public String endDate;
    public OverallQualityResponse withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_count")
    public Integer rowCount;
    public OverallQualityResponse withRowCount(Integer rowCount) {
        this.rowCount = rowCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sites")
    public String sites;
    public OverallQualityResponse withSites(String sites) {
        this.sites = sites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public String startDate;
    public OverallQualityResponse withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}