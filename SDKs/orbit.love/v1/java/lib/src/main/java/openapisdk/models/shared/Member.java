package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Member {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bio")
    public String bio;
    public Member withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthday")
    public String birthday;
    public Member withBirthday(String birthday) {
        this.birthday = birthday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public Member withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devto")
    public String devto;
    public Member withDevto(String devto) {
        this.devto = devto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Member withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("github")
    public String github;
    public Member withGithub(String github) {
        this.github = github;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linkedin")
    public String linkedin;
    public Member withLinkedin(String linkedin) {
        this.linkedin = linkedin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public Member withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Member withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pronouns")
    public String pronouns;
    public Member withPronouns(String pronouns) {
        this.pronouns = pronouns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping_address")
    public String shippingAddress;
    public Member withShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public Member withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_list")
    public String tagList;
    public Member withTagList(String tagList) {
        this.tagList = tagList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String tags;
    public Member withTags(String tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags_to_add")
    public String tagsToAdd;
    public Member withTagsToAdd(String tagsToAdd) {
        this.tagsToAdd = tagsToAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teammate")
    public Boolean teammate;
    public Member withTeammate(Boolean teammate) {
        this.teammate = teammate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Member withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tshirt")
    public String tshirt;
    public Member withTshirt(String tshirt) {
        this.tshirt = tshirt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twitter")
    public String twitter;
    public Member withTwitter(String twitter) {
        this.twitter = twitter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Member withUrl(String url) {
        this.url = url;
        return this;
    }
}