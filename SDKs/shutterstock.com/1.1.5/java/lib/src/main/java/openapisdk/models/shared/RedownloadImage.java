package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedownloadImage
 * Data required to redownload an image
**/
public class RedownloadImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_cookie")
    public Cookie authCookie;
    public RedownloadImage withAuthCookie(Cookie authCookie) {
        this.authCookie = authCookie;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_modal")
    public Boolean showModal;
    public RedownloadImage withShowModal(Boolean showModal) {
        this.showModal = showModal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public RedownloadImageSizeEnum size;
    public RedownloadImage withSize(RedownloadImageSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_code")
    public String verificationCode;
    public RedownloadImage withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
}