package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Person {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aboutMe")
    public String aboutMe;
    public Person withAboutMe(String aboutMe) {
        this.aboutMe = aboutMe;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRange")
    public PersonAgeRange ageRange;
    public Person withAgeRange(PersonAgeRange ageRange) {
        this.ageRange = ageRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthday")
    public String birthday;
    public Person withBirthday(String birthday) {
        this.birthday = birthday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("braggingRights")
    public String braggingRights;
    public Person withBraggingRights(String braggingRights) {
        this.braggingRights = braggingRights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("circledByCount")
    public Integer circledByCount;
    public Person withCircledByCount(Integer circledByCount) {
        this.circledByCount = circledByCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cover")
    public PersonCover cover;
    public Person withCover(PersonCover cover) {
        this.cover = cover;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentLocation")
    public String currentLocation;
    public Person withCurrentLocation(String currentLocation) {
        this.currentLocation = currentLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Person withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public Person withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public PersonEmails[] emails;
    public Person withEmails(PersonEmails[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Person withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public Person withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Person withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public PersonImage image;
    public Person withImage(PersonImage image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPlusUser")
    public Boolean isPlusUser;
    public Person withIsPlusUser(Boolean isPlusUser) {
        this.isPlusUser = isPlusUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Person withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public Person withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public PersonName name;
    public Person withName(PersonName name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public Person withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public String objectType;
    public Person withObjectType(String objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occupation")
    public String occupation;
    public Person withOccupation(String occupation) {
        this.occupation = occupation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizations")
    public PersonOrganizations[] organizations;
    public Person withOrganizations(PersonOrganizations[] organizations) {
        this.organizations = organizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placesLived")
    public PersonPlacesLived[] placesLived;
    public Person withPlacesLived(PersonPlacesLived[] placesLived) {
        this.placesLived = placesLived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plusOneCount")
    public Integer plusOneCount;
    public Person withPlusOneCount(Integer plusOneCount) {
        this.plusOneCount = plusOneCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipStatus")
    public String relationshipStatus;
    public Person withRelationshipStatus(String relationshipStatus) {
        this.relationshipStatus = relationshipStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skills")
    public String skills;
    public Person withSkills(String skills) {
        this.skills = skills;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagline")
    public String tagline;
    public Person withTagline(String tagline) {
        this.tagline = tagline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Person withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public PersonUrls[] urls;
    public Person withUrls(PersonUrls[] urls) {
        this.urls = urls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified")
    public Boolean verified;
    public Person withVerified(Boolean verified) {
        this.verified = verified;
        return this;
    }
}