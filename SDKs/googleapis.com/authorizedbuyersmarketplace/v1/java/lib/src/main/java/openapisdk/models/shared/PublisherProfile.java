package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PublisherProfile
 * The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.
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
    @JsonProperty("name")
    public String name;
    public PublisherProfile withName(String name) {
        this.name = name;
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
    @JsonProperty("pitchStatement")
    public String pitchStatement;
    public PublisherProfile withPitchStatement(String pitchStatement) {
        this.pitchStatement = pitchStatement;
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
    @JsonProperty("publisherCode")
    public String publisherCode;
    public PublisherProfile withPublisherCode(String publisherCode) {
        this.publisherCode = publisherCode;
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
    @JsonProperty("topHeadlines")
    public String[] topHeadlines;
    public PublisherProfile withTopHeadlines(String[] topHeadlines) {
        this.topHeadlines = topHeadlines;
        return this;
    }
}