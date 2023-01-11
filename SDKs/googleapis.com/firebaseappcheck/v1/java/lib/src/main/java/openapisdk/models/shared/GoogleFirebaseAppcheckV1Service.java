package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1Service
 * The enforcement configuration for a Firebase service supported by App Check.
**/
public class GoogleFirebaseAppcheckV1Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforcementMode")
    public GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum enforcementMode;
    public GoogleFirebaseAppcheckV1Service withEnforcementMode(GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum enforcementMode) {
        this.enforcementMode = enforcementMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFirebaseAppcheckV1Service withName(String name) {
        this.name = name;
        return this;
    }
}