package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransitTable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCodeGroupNames")
    public String[] postalCodeGroupNames;
    public TransitTable withPostalCodeGroupNames(String[] postalCodeGroupNames) {
        this.postalCodeGroupNames = postalCodeGroupNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public TransitTableTransitTimeRow[] rows;
    public TransitTable withRows(TransitTableTransitTimeRow[] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitTimeLabels")
    public String[] transitTimeLabels;
    public TransitTable withTransitTimeLabels(String[] transitTimeLabels) {
        this.transitTimeLabels = transitTimeLabels;
        return this;
    }
}