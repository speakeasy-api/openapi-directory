package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Transform
 * Strategy where signature and field values are verified, trasnformed and then token si re-signed
**/
public class Transform {
    @JsonProperty("algoSettings")
    public Object algoSettings;
    public Transform withAlgoSettings(Object algoSettings) {
        this.algoSettings = algoSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformSettings")
    public TransformSettings transformSettings;
    public Transform withTransformSettings(TransformSettings transformSettings) {
        this.transformSettings = transformSettings;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Transform withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("verificationSettings")
    public VerificationSettings verificationSettings;
    public Transform withVerificationSettings(VerificationSettings verificationSettings) {
        this.verificationSettings = verificationSettings;
        return this;
    }
}