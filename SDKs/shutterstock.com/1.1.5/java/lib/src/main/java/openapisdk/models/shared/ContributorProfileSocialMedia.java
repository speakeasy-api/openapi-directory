package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContributorProfileSocialMedia
 * Contributor profile social media links
**/
public class ContributorProfileSocialMedia {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("facebook")
    public String facebook;
    public ContributorProfileSocialMedia withFacebook(String facebook) {
        this.facebook = facebook;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("google_plus")
    public String googlePlus;
    public ContributorProfileSocialMedia withGooglePlus(String googlePlus) {
        this.googlePlus = googlePlus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedin")
    public String linkedin;
    public ContributorProfileSocialMedia withLinkedin(String linkedin) {
        this.linkedin = linkedin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pinterest")
    public String pinterest;
    public ContributorProfileSocialMedia withPinterest(String pinterest) {
        this.pinterest = pinterest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tumblr")
    public String tumblr;
    public ContributorProfileSocialMedia withTumblr(String tumblr) {
        this.tumblr = tumblr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter")
    public String twitter;
    public ContributorProfileSocialMedia withTwitter(String twitter) {
        this.twitter = twitter;
        return this;
    }
}