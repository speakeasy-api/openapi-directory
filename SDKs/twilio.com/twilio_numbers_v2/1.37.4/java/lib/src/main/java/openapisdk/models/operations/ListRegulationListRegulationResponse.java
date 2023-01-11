package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRegulationListRegulationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListRegulationListRegulationResponseMeta meta;
    public ListRegulationListRegulationResponse withMeta(ListRegulationListRegulationResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceRegulation[] results;
    public ListRegulationListRegulationResponse withResults(openapisdk.models.shared.NumbersV2RegulatoryComplianceRegulation[] results) {
        this.results = results;
        return this;
    }
}