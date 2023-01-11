package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PsuData
 * PSU Data for Update PSU authentication.
**/
public class PsuData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalEncryptedPassword")
    public String additionalEncryptedPassword;
    public PsuData withAdditionalEncryptedPassword(String additionalEncryptedPassword) {
        this.additionalEncryptedPassword = additionalEncryptedPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalPassword")
    public String additionalPassword;
    public PsuData withAdditionalPassword(String additionalPassword) {
        this.additionalPassword = additionalPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedPassword")
    public String encryptedPassword;
    public PsuData withEncryptedPassword(String encryptedPassword) {
        this.encryptedPassword = encryptedPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public PsuData withPassword(String password) {
        this.password = password;
        return this;
    }
}