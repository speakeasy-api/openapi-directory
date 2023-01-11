package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EcoCertification
 * An eco certificate awarded to the hotel.
**/
public class EcoCertification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awarded")
    public Boolean awarded;
    public EcoCertification withAwarded(Boolean awarded) {
        this.awarded = awarded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awardedException")
    public EcoCertificationAwardedExceptionEnum awardedException;
    public EcoCertification withAwardedException(EcoCertificationAwardedExceptionEnum awardedException) {
        this.awardedException = awardedException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ecoCertificate")
    public EcoCertificationEcoCertificateEnum ecoCertificate;
    public EcoCertification withEcoCertificate(EcoCertificationEcoCertificateEnum ecoCertificate) {
        this.ecoCertificate = ecoCertificate;
        return this;
    }
}