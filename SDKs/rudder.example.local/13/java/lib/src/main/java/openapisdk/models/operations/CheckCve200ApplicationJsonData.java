package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CheckCve200ApplicationJsonData {
    @JsonProperty("cveChecks")
    public openapisdk.models.shared.CveCheck[] cveChecks;
    public CheckCve200ApplicationJsonData withCveChecks(openapisdk.models.shared.CveCheck[] cveChecks) {
        this.cveChecks = cveChecks;
        return this;
    }
}