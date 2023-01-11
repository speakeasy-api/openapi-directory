package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCveList200ApplicationJsonData {
    @JsonProperty("CVEs")
    public openapisdk.models.shared.CveDetails[] cvEs;
    public GetCveList200ApplicationJsonData withCvEs(openapisdk.models.shared.CveDetails[] cvEs) {
        this.cvEs = cvEs;
        return this;
    }
}