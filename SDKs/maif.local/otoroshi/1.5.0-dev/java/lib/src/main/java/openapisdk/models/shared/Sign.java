package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Sign
 * Strategy where signature and field values are verified, and then token si re-signed
**/
public class Sign {
    @JsonProperty("algoSettings")
    public Object algoSettings;
    public Sign withAlgoSettings(Object algoSettings) {
        this.algoSettings = algoSettings;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Sign withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("verificationSettings")
    public VerificationSettings verificationSettings;
    public Sign withVerificationSettings(VerificationSettings verificationSettings) {
        this.verificationSettings = verificationSettings;
        return this;
    }
}