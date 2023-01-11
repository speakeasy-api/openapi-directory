package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLastCveCheck200ApplicationJsonData {
    @JsonProperty("CVEChecks")
    public openapisdk.models.shared.CveCheck[] cveChecks;
    public GetLastCveCheck200ApplicationJsonData withCveChecks(openapisdk.models.shared.CveCheck[] cveChecks) {
        this.cveChecks = cveChecks;
        return this;
    }
}