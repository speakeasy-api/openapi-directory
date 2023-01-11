package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaDeviceCheckConfig
 * An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v1beta1/projects.iosApps/patch).
**/
public class GoogleFirebaseAppcheckV1betaDeviceCheckConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyId")
    public String keyId;
    public GoogleFirebaseAppcheckV1betaDeviceCheckConfig withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFirebaseAppcheckV1betaDeviceCheckConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKey")
    public String privateKey;
    public GoogleFirebaseAppcheckV1betaDeviceCheckConfig withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKeySet")
    public Boolean privateKeySet;
    public GoogleFirebaseAppcheckV1betaDeviceCheckConfig withPrivateKeySet(Boolean privateKeySet) {
        this.privateKeySet = privateKeySet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenTtl")
    public String tokenTtl;
    public GoogleFirebaseAppcheckV1betaDeviceCheckConfig withTokenTtl(String tokenTtl) {
        this.tokenTtl = tokenTtl;
        return this;
    }
}