package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseImage
 * Data required to license an image
**/
public class LicenseImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_cookie")
    public Cookie authCookie;
    public LicenseImage withAuthCookie(Cookie authCookie) {
        this.authCookie = authCookie;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_dimensions")
    public CustomSizeDimensions customDimensions;
    public LicenseImage withCustomDimensions(CustomSizeDimensions customDimensions) {
        this.customDimensions = customDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorial_acknowledgement")
    public Boolean editorialAcknowledgement;
    public LicenseImage withEditorialAcknowledgement(Boolean editorialAcknowledgement) {
        this.editorialAcknowledgement = editorialAcknowledgement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public LicenseImageFormatEnum format;
    public LicenseImage withFormat(LicenseImageFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("image_id")
    public String imageId;
    public LicenseImage withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public LicenseImage withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public LicenseImage withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_id")
    public String searchId;
    public LicenseImage withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_modal")
    public Boolean showModal;
    public LicenseImage withShowModal(Boolean showModal) {
        this.showModal = showModal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public LicenseImageSizeEnum size;
    public LicenseImage withSize(LicenseImageSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription_id")
    public String subscriptionId;
    public LicenseImage withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verification_code")
    public String verificationCode;
    public LicenseImage withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
}