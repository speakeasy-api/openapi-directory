package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabaseRequestBodyProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Wine Pairing")
    public UpdateADatabaseRequestBodyPropertiesWinePairing winePairing;
    public UpdateADatabaseRequestBodyProperties withWinePairing(UpdateADatabaseRequestBodyPropertiesWinePairing winePairing) {
        this.winePairing = winePairing;
        return this;
    }
}