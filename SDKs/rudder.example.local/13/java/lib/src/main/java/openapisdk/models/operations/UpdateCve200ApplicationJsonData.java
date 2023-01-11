package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCve200ApplicationJsonData {
    @JsonProperty("CVEs")
    public Long cvEs;
    public UpdateCve200ApplicationJsonData withCvEs(Long cvEs) {
        this.cvEs = cvEs;
        return this;
    }
}