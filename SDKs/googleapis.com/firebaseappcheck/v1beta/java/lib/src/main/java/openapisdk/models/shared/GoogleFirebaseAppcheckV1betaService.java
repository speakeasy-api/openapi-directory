package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaService
 * The enforcement configuration for a Firebase service supported by App Check.
**/
public class GoogleFirebaseAppcheckV1betaService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcementMode")
    public GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum enforcementMode;
    public GoogleFirebaseAppcheckV1betaService withEnforcementMode(GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum enforcementMode) {
        this.enforcementMode = enforcementMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFirebaseAppcheckV1betaService withName(String name) {
        this.name = name;
        return this;
    }
}