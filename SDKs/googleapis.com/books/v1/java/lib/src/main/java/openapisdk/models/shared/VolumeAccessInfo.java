package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeAccessInfo
 * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
**/
public class VolumeAccessInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessViewStatus")
    public String accessViewStatus;
    public VolumeAccessInfo withAccessViewStatus(String accessViewStatus) {
        this.accessViewStatus = accessViewStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public VolumeAccessInfo withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("downloadAccess")
    public DownloadAccessRestriction downloadAccess;
    public VolumeAccessInfo withDownloadAccess(DownloadAccessRestriction downloadAccess) {
        this.downloadAccess = downloadAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driveImportedContentLink")
    public String driveImportedContentLink;
    public VolumeAccessInfo withDriveImportedContentLink(String driveImportedContentLink) {
        this.driveImportedContentLink = driveImportedContentLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("embeddable")
    public Boolean embeddable;
    public VolumeAccessInfo withEmbeddable(Boolean embeddable) {
        this.embeddable = embeddable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("epub")
    public VolumeAccessInfoEpub epub;
    public VolumeAccessInfo withEpub(VolumeAccessInfoEpub epub) {
        this.epub = epub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("explicitOfflineLicenseManagement")
    public Boolean explicitOfflineLicenseManagement;
    public VolumeAccessInfo withExplicitOfflineLicenseManagement(Boolean explicitOfflineLicenseManagement) {
        this.explicitOfflineLicenseManagement = explicitOfflineLicenseManagement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf")
    public VolumeAccessInfoPdf pdf;
    public VolumeAccessInfo withPdf(VolumeAccessInfoPdf pdf) {
        this.pdf = pdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicDomain")
    public Boolean publicDomain;
    public VolumeAccessInfo withPublicDomain(Boolean publicDomain) {
        this.publicDomain = publicDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quoteSharingAllowed")
    public Boolean quoteSharingAllowed;
    public VolumeAccessInfo withQuoteSharingAllowed(Boolean quoteSharingAllowed) {
        this.quoteSharingAllowed = quoteSharingAllowed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textToSpeechPermission")
    public String textToSpeechPermission;
    public VolumeAccessInfo withTextToSpeechPermission(String textToSpeechPermission) {
        this.textToSpeechPermission = textToSpeechPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewOrderUrl")
    public String viewOrderUrl;
    public VolumeAccessInfo withViewOrderUrl(String viewOrderUrl) {
        this.viewOrderUrl = viewOrderUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewability")
    public String viewability;
    public VolumeAccessInfo withViewability(String viewability) {
        this.viewability = viewability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webReaderLink")
    public String webReaderLink;
    public VolumeAccessInfo withWebReaderLink(String webReaderLink) {
        this.webReaderLink = webReaderLink;
        return this;
    }
}