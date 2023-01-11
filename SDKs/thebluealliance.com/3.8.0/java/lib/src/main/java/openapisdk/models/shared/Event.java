package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public Event withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public Event withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public Event withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public DistrictList district;
    public Event withDistrict(DistrictList district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("division_keys")
    public String[] divisionKeys;
    public Event withDivisionKeys(String[] divisionKeys) {
        this.divisionKeys = divisionKeys;
        return this;
    }
    @JsonProperty("end_date")
    public LocalDate endDate;
    public Event withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonProperty("event_code")
    public String eventCode;
    public Event withEventCode(String eventCode) {
        this.eventCode = eventCode;
        return this;
    }
    @JsonProperty("event_type")
    public Long eventType;
    public Event withEventType(Long eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonProperty("event_type_string")
    public String eventTypeString;
    public Event withEventTypeString(String eventTypeString) {
        this.eventTypeString = eventTypeString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_event_code")
    public String firstEventCode;
    public Event withFirstEventCode(String firstEventCode) {
        this.firstEventCode = firstEventCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_event_id")
    public String firstEventId;
    public Event withFirstEventId(String firstEventId) {
        this.firstEventId = firstEventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmaps_place_id")
    public String gmapsPlaceId;
    public Event withGmapsPlaceId(String gmapsPlaceId) {
        this.gmapsPlaceId = gmapsPlaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gmaps_url")
    public String gmapsUrl;
    public Event withGmapsUrl(String gmapsUrl) {
        this.gmapsUrl = gmapsUrl;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public Event withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lat")
    public Double lat;
    public Event withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lng")
    public Double lng;
    public Event withLng(Double lng) {
        this.lng = lng;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_name")
    public String locationName;
    public Event withLocationName(String locationName) {
        this.locationName = locationName;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Event withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_event_key")
    public String parentEventKey;
    public Event withParentEventKey(String parentEventKey) {
        this.parentEventKey = parentEventKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playoff_type")
    public Long playoffType;
    public Event withPlayoffType(Long playoffType) {
        this.playoffType = playoffType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playoff_type_string")
    public String playoffTypeString;
    public Event withPlayoffTypeString(String playoffTypeString) {
        this.playoffTypeString = playoffTypeString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postal_code")
    public String postalCode;
    public Event withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_name")
    public String shortName;
    public Event withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
    @JsonProperty("start_date")
    public LocalDate startDate;
    public Event withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_prov")
    public String stateProv;
    public Event withStateProv(String stateProv) {
        this.stateProv = stateProv;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Event withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webcasts")
    public Webcast[] webcasts;
    public Event withWebcasts(Webcast[] webcasts) {
        this.webcasts = webcasts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public Event withWebsite(String website) {
        this.website = website;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("week")
    public Long week;
    public Event withWeek(Long week) {
        this.week = week;
        return this;
    }
    @JsonProperty("year")
    public Long year;
    public Event withYear(Long year) {
        this.year = year;
        return this;
    }
}