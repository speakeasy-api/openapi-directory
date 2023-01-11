package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedownloadVideo
 * Data required to redownload a video
**/
public class RedownloadVideo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_cookie")
    public Cookie authCookie;
    public RedownloadVideo withAuthCookie(Cookie authCookie) {
        this.authCookie = authCookie;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_modal")
    public Boolean showModal;
    public RedownloadVideo withShowModal(Boolean showModal) {
        this.showModal = showModal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public RedownloadVideoSizeEnum size;
    public RedownloadVideo withSize(RedownloadVideoSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_code")
    public String verificationCode;
    public RedownloadVideo withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
}