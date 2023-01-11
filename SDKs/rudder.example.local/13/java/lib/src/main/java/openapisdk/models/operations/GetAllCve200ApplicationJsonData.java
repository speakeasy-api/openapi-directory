package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllCve200ApplicationJsonData {
    @JsonProperty("CVEs")
    public openapisdk.models.shared.CveDetails[] cvEs;
    public GetAllCve200ApplicationJsonData withCvEs(openapisdk.models.shared.CveDetails[] cvEs) {
        this.cvEs = cvEs;
        return this;
    }
}