package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PassThrough
 * Strategy where only signature and field values are verified
**/
public class PassThrough {
    @JsonProperty("type")
    public String type;
    public PassThrough withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("verificationSettings")
    public VerificationSettings verificationSettings;
    public PassThrough withVerificationSettings(VerificationSettings verificationSettings) {
        this.verificationSettings = verificationSettings;
        return this;
    }
}