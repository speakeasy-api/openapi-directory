package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventSimple {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public EventSimple withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public EventSimple withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public DistrictList district;
    public EventSimple withDistrict(DistrictList district) {
        this.district = district;
        return this;
    }
    @JsonProperty("end_date")
    public LocalDate endDate;
    public EventSimple withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonProperty("event_code")
    public String eventCode;
    public EventSimple withEventCode(String eventCode) {
        this.eventCode = eventCode;
        return this;
    }
    @JsonProperty("event_type")
    public Long eventType;
    public EventSimple withEventType(Long eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonProperty("key")
    public String key;
    public EventSimple withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public EventSimple withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("start_date")
    public LocalDate startDate;
    public EventSimple withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state_prov")
    public String stateProv;
    public EventSimple withStateProv(String stateProv) {
        this.stateProv = stateProv;
        return this;
    }
    @JsonProperty("year")
    public Long year;
    public EventSimple withYear(Long year) {
        this.year = year;
        return this;
    }
}