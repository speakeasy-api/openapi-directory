package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Account
 * Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.
**/
public class Account {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adultContent")
    public Boolean adultContent;
    public Account withAdultContent(Boolean adultContent) {
        this.adultContent = adultContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adwordsLinks")
    public AccountAdwordsLink[] adwordsLinks;
    public Account withAdwordsLinks(AccountAdwordsLink[] adwordsLinks) {
        this.adwordsLinks = adwordsLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("businessInformation")
    public AccountBusinessInformation businessInformation;
    public Account withBusinessInformation(AccountBusinessInformation businessInformation) {
        this.businessInformation = businessInformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleMyBusinessLink")
    public AccountGoogleMyBusinessLink googleMyBusinessLink;
    public Account withGoogleMyBusinessLink(AccountGoogleMyBusinessLink googleMyBusinessLink) {
        this.googleMyBusinessLink = googleMyBusinessLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Account withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Account withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Account withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewsUrl")
    public String reviewsUrl;
    public Account withReviewsUrl(String reviewsUrl) {
        this.reviewsUrl = reviewsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sellerId")
    public String sellerId;
    public Account withSellerId(String sellerId) {
        this.sellerId = sellerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public AccountUser[] users;
    public Account withUsers(AccountUser[] users) {
        this.users = users;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("websiteUrl")
    public String websiteUrl;
    public Account withWebsiteUrl(String websiteUrl) {
        this.websiteUrl = websiteUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("youtubeChannelLinks")
    public AccountYouTubeChannelLink[] youtubeChannelLinks;
    public Account withYoutubeChannelLinks(AccountYouTubeChannelLink[] youtubeChannelLinks) {
        this.youtubeChannelLinks = youtubeChannelLinks;
        return this;
    }
}