package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SpotUpdateAntennaReportLocationsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antenna_number")
    public Long antennaNumber;
    public SpotUpdateAntennaReportLocationsInput withAntennaNumber(Long antennaNumber) {
        this.antennaNumber = antennaNumber;
        return this;
    }
}