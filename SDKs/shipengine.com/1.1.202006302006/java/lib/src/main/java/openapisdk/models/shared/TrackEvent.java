package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TrackEvent
 * A track event
**/
public class TrackEvent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("carrier_occurred_at")
    public OffsetDateTime carrierOccurredAt;
    public TrackEvent withCarrierOccurredAt(OffsetDateTime carrierOccurredAt) {
        this.carrierOccurredAt = carrierOccurredAt;
        return this;
    }
    @JsonProperty("city_locality")
    public String cityLocality;
    public TrackEvent withCityLocality(String cityLocality) {
        this.cityLocality = cityLocality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public TrackEvent withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_code")
    public String countryCode;
    public TrackEvent withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TrackEvent withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_code")
    public String eventCode;
    public TrackEvent withEventCode(String eventCode) {
        this.eventCode = eventCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public TrackEvent withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public TrackEvent withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("occurred_at")
    public OffsetDateTime occurredAt;
    public TrackEvent withOccurredAt(OffsetDateTime occurredAt) {
        this.occurredAt = occurredAt;
        return this;
    }
    @JsonProperty("postal_code")
    public String postalCode;
    public TrackEvent withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signer")
    public String signer;
    public TrackEvent withSigner(String signer) {
        this.signer = signer;
        return this;
    }
    @JsonProperty("state_province")
    public String stateProvince;
    public TrackEvent withStateProvince(String stateProvince) {
        this.stateProvince = stateProvince;
        return this;
    }
}