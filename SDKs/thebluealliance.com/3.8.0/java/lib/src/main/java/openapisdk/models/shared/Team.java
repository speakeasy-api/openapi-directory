package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Team {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public Team withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Team withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Team withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmaps_place_id")
    public String gmapsPlaceId;
    public Team withGmapsPlaceId(String gmapsPlaceId) {
        this.gmapsPlaceId = gmapsPlaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmaps_url")
    public String gmapsUrl;
    public Team withGmapsUrl(String gmapsUrl) {
        this.gmapsUrl = gmapsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_championship")
    public java.util.Map<String, Object> homeChampionship;
    public Team withHomeChampionship(java.util.Map<String, Object> homeChampionship) {
        this.homeChampionship = homeChampionship;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public Team withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public Team withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Double lng;
    public Team withLng(Double lng) {
        this.lng = lng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_name")
    public String locationName;
    public Team withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("motto")
    public String motto;
    public Team withMotto(String motto) {
        this.motto = motto;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Team withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public Team withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public Team withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rookie_year")
    public Long rookieYear;
    public Team withRookieYear(Long rookieYear) {
        this.rookieYear = rookieYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("school_name")
    public String schoolName;
    public Team withSchoolName(String schoolName) {
        this.schoolName = schoolName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_prov")
    public String stateProv;
    public Team withStateProv(String stateProv) {
        this.stateProv = stateProv;
        return this;
    }
    @JsonProperty("team_number")
    public Long teamNumber;
    public Team withTeamNumber(Long teamNumber) {
        this.teamNumber = teamNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public Team withWebsite(String website) {
        this.website = website;
        return this;
    }
}