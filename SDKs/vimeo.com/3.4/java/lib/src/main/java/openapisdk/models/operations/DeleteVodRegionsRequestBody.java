package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteVodRegionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public String[] countries;
    public DeleteVodRegionsRequestBody withCountries(String[] countries) {
        this.countries = countries;
        return this;
    }
}