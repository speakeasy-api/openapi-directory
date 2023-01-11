package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LiasettingsListPosDataProvidersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public LiasettingsListPosDataProvidersResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posDataProviders")
    public PosDataProviders[] posDataProviders;
    public LiasettingsListPosDataProvidersResponse withPosDataProviders(PosDataProviders[] posDataProviders) {
        this.posDataProviders = posDataProviders;
        return this;
    }
}