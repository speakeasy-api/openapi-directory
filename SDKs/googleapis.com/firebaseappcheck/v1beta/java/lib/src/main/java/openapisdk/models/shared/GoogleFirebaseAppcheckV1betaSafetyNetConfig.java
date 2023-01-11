package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaSafetyNetConfig
 * An app's SafetyNet configuration object. This configuration controls certain properties of the `AppCheckToken` returned by ExchangeSafetyNetToken, such as its ttl. Note that your registered SHA-256 certificate fingerprints are used to validate tokens issued by SafetyNet; please register them via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.androidApps.sha/create).
**/
public class GoogleFirebaseAppcheckV1betaSafetyNetConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFirebaseAppcheckV1betaSafetyNetConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenTtl")
    public String tokenTtl;
    public GoogleFirebaseAppcheckV1betaSafetyNetConfig withTokenTtl(String tokenTtl) {
        this.tokenTtl = tokenTtl;
        return this;
    }
}