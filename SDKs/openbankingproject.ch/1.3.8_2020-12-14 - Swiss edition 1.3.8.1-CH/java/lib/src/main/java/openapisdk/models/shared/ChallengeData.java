package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChallengeData
 * It is contained in addition to the data element 'chosenScaMethod' if challenge data is needed for SCA.
 * In rare cases this attribute is also used in the context of the 'startAuthorisationWithPsuAuthentication' link.
 * 
**/
public class ChallengeData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalInformation")
    public String additionalInformation;
    public ChallengeData withAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String[] data;
    public ChallengeData withData(String[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public ChallengeData withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageLink")
    public String imageLink;
    public ChallengeData withImageLink(String imageLink) {
        this.imageLink = imageLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otpFormat")
    public ChallengeDataOtpFormatEnum otpFormat;
    public ChallengeData withOtpFormat(ChallengeDataOtpFormatEnum otpFormat) {
        this.otpFormat = otpFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otpMaxLength")
    public Long otpMaxLength;
    public ChallengeData withOtpMaxLength(Long otpMaxLength) {
        this.otpMaxLength = otpMaxLength;
        return this;
    }
}