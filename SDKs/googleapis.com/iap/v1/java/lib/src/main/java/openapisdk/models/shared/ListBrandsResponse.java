package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListBrandsResponse
 * Response message for ListBrands.
**/
public class ListBrandsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brands")
    public Brand[] brands;
    public ListBrandsResponse withBrands(Brand[] brands) {
        this.brands = brands;
        return this;
    }
}