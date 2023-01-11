package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LicenseVideo
 * Data required to license a video
**/
public class LicenseVideo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_cookie")
    public Cookie authCookie;
    public LicenseVideo withAuthCookie(Cookie authCookie) {
        this.authCookie = authCookie;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("editorial_acknowledgement")
    public Boolean editorialAcknowledgement;
    public LicenseVideo withEditorialAcknowledgement(Boolean editorialAcknowledgement) {
        this.editorialAcknowledgement = editorialAcknowledgement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public LicenseVideo withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public LicenseVideo withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("search_id")
    public String searchId;
    public LicenseVideo withSearchId(String searchId) {
        this.searchId = searchId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_modal")
    public Boolean showModal;
    public LicenseVideo withShowModal(Boolean showModal) {
        this.showModal = showModal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public LicenseVideoSizeEnum size;
    public LicenseVideo withSize(LicenseVideoSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscription_id")
    public String subscriptionId;
    public LicenseVideo withSubscriptionId(String subscriptionId) {
        this.subscriptionId = subscriptionId;
        return this;
    }
    @JsonProperty("video_id")
    public String videoId;
    public LicenseVideo withVideoId(String videoId) {
        this.videoId = videoId;
        return this;
    }
}