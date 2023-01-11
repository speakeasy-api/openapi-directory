package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublisherProfile
 * Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.
**/
public class PublisherProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audienceDescription")
    public String audienceDescription;
    public PublisherProfile withAudienceDescription(String audienceDescription) {
        this.audienceDescription = audienceDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buyerPitchStatement")
    public String buyerPitchStatement;
    public PublisherProfile withBuyerPitchStatement(String buyerPitchStatement) {
        this.buyerPitchStatement = buyerPitchStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDealsContact")
    public String directDealsContact;
    public PublisherProfile withDirectDealsContact(String directDealsContact) {
        this.directDealsContact = directDealsContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public PublisherProfile withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public String[] domains;
    public PublisherProfile withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googlePlusUrl")
    public String googlePlusUrl;
    public PublisherProfile withGooglePlusUrl(String googlePlusUrl) {
        this.googlePlusUrl = googlePlusUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isParent")
    public Boolean isParent;
    public PublisherProfile withIsParent(Boolean isParent) {
        this.isParent = isParent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logoUrl")
    public String logoUrl;
    public PublisherProfile withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediaKitUrl")
    public String mediaKitUrl;
    public PublisherProfile withMediaKitUrl(String mediaKitUrl) {
        this.mediaKitUrl = mediaKitUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileApps")
    public PublisherProfileMobileApplication[] mobileApps;
    public PublisherProfile withMobileApps(PublisherProfileMobileApplication[] mobileApps) {
        this.mobileApps = mobileApps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overview")
    public String overview;
    public PublisherProfile withOverview(String overview) {
        this.overview = overview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programmaticDealsContact")
    public String programmaticDealsContact;
    public PublisherProfile withProgrammaticDealsContact(String programmaticDealsContact) {
        this.programmaticDealsContact = programmaticDealsContact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherProfileId")
    public String publisherProfileId;
    public PublisherProfile withPublisherProfileId(String publisherProfileId) {
        this.publisherProfileId = publisherProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateCardInfoUrl")
    public String rateCardInfoUrl;
    public PublisherProfile withRateCardInfoUrl(String rateCardInfoUrl) {
        this.rateCardInfoUrl = rateCardInfoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("samplePageUrl")
    public String samplePageUrl;
    public PublisherProfile withSamplePageUrl(String samplePageUrl) {
        this.samplePageUrl = samplePageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seller")
    public Seller seller;
    public PublisherProfile withSeller(Seller seller) {
        this.seller = seller;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topHeadlines")
    public String[] topHeadlines;
    public PublisherProfile withTopHeadlines(String[] topHeadlines) {
        this.topHeadlines = topHeadlines;
        return this;
    }
}