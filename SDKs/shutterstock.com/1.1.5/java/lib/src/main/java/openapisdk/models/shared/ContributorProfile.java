package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ContributorProfile
 * Contributor profile data
**/
public class ContributorProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("about")
    public String about;
    public ContributorProfile withAbout(String about) {
        this.about = about;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contributor_type")
    public String[] contributorType;
    public ContributorProfile withContributorType(String[] contributorType) {
        this.contributorType = contributorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public ContributorProfile withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equipment")
    public String[] equipment;
    public ContributorProfile withEquipment(String[] equipment) {
        this.equipment = equipment;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ContributorProfile withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public ContributorProfile withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portfolio_url")
    public String portfolioUrl;
    public ContributorProfile withPortfolioUrl(String portfolioUrl) {
        this.portfolioUrl = portfolioUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social_media")
    public ContributorProfileSocialMedia socialMedia;
    public ContributorProfile withSocialMedia(ContributorProfileSocialMedia socialMedia) {
        this.socialMedia = socialMedia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("styles")
    public String[] styles;
    public ContributorProfile withStyles(String[] styles) {
        this.styles = styles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjects")
    public String[] subjects;
    public ContributorProfile withSubjects(String[] subjects) {
        this.subjects = subjects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public ContributorProfile withWebsite(String website) {
        this.website = website;
        return this;
    }
}