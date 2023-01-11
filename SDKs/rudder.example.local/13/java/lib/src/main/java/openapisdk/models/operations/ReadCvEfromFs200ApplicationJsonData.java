package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReadCvEfromFs200ApplicationJsonData {
    @JsonProperty("CVEs")
    public Long cvEs;
    public ReadCvEfromFs200ApplicationJsonData withCvEs(Long cvEs) {
        this.cvEs = cvEs;
        return this;
    }
}