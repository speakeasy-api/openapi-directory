package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserUsername200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@id")
    public String atId;
    public GetUserUsername200ApplicationJson withAtId(String atId) {
        this.atId = atId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public GetUserUsername200ApplicationJsonAddress address;
    public GetUserUsername200ApplicationJson withAddress(GetUserUsername200ApplicationJsonAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthdate")
    public String birthdate;
    public GetUserUsername200ApplicationJson withBirthdate(String birthdate) {
        this.birthdate = birthdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GetUserUsername200ApplicationJson withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_verified")
    public Boolean emailVerified;
    public GetUserUsername200ApplicationJson withEmailVerified(Boolean emailVerified) {
        this.emailVerified = emailVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family_name")
    public String familyName;
    public GetUserUsername200ApplicationJson withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public String gender;
    public GetUserUsername200ApplicationJson withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("given_name")
    public String givenName;
    public GetUserUsername200ApplicationJson withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public GetUserUsername200ApplicationJson withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("me")
    public String me;
    public GetUserUsername200ApplicationJson withMe(String me) {
        this.me = me;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public GetUserUsername200ApplicationJson withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetUserUsername200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public GetUserUsername200ApplicationJson withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public GetUserUsername200ApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public GetUserUsername200ApplicationJson withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number_verified")
    public Boolean phoneNumberVerified;
    public GetUserUsername200ApplicationJson withPhoneNumberVerified(Boolean phoneNumberVerified) {
        this.phoneNumberVerified = phoneNumberVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("picture")
    public String picture;
    public GetUserUsername200ApplicationJson withPicture(String picture) {
        this.picture = picture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_username")
    public String preferredUsername;
    public GetUserUsername200ApplicationJson withPreferredUsername(String preferredUsername) {
        this.preferredUsername = preferredUsername;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public String profile;
    public GetUserUsername200ApplicationJson withProfile(String profile) {
        this.profile = profile;
        return this;
    }
    @JsonProperty("sub")
    public String sub;
    public GetUserUsername200ApplicationJson withSub(String sub) {
        this.sub = sub;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public GetUserUsername200ApplicationJson withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public Double updatedAt;
    public GetUserUsername200ApplicationJson withUpdatedAt(Double updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webmail")
    public String webmail;
    public GetUserUsername200ApplicationJson withWebmail(String webmail) {
        this.webmail = webmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public GetUserUsername200ApplicationJson withWebsite(String website) {
        this.website = website;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoneinfo")
    public String zoneinfo;
    public GetUserUsername200ApplicationJson withZoneinfo(String zoneinfo) {
        this.zoneinfo = zoneinfo;
        return this;
    }
}