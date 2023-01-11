package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosDataProviders {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PosDataProviders withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posDataProviders")
    public PosDataProvidersPosDataProvider[] posDataProviders;
    public PosDataProviders withPosDataProviders(PosDataProvidersPosDataProvider[] posDataProviders) {
        this.posDataProviders = posDataProviders;
        return this;
    }
}