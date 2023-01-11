package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Userinfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Userinfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family_name")
    public String familyName;
    public Userinfo withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public Userinfo withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("given_name")
    public String givenName;
    public Userinfo withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hd")
    public String hd;
    public Userinfo withHd(String hd) {
        this.hd = hd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Userinfo withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public Userinfo withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public Userinfo withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Userinfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("picture")
    public String picture;
    public Userinfo withPicture(String picture) {
        this.picture = picture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verified_email")
    public Boolean verifiedEmail;
    public Userinfo withVerifiedEmail(Boolean verifiedEmail) {
        this.verifiedEmail = verifiedEmail;
        return this;
    }
}