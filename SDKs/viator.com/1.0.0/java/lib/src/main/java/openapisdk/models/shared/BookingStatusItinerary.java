package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingStatusItinerary
 * **object** containing itinerary booking status information
**/
public class BookingStatusItinerary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amended")
    public Boolean amended;
    public BookingStatusItinerary withAmended(Boolean amended) {
        this.amended = amended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelled")
    public Boolean cancelled;
    public BookingStatusItinerary withCancelled(Boolean cancelled) {
        this.cancelled = cancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Boolean confirmed;
    public BookingStatusItinerary withConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Boolean failed;
    public BookingStatusItinerary withFailed(Boolean failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public BookingStatusItineraryLevelEnum level;
    public BookingStatusItinerary withLevel(BookingStatusItineraryLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending")
    public Boolean pending;
    public BookingStatusItinerary withPending(Boolean pending) {
        this.pending = pending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public BookingStatusItinerary withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public BookingStatusItinerary withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BookingStatusItineraryTypeEnum type;
    public BookingStatusItinerary withType(BookingStatusItineraryTypeEnum type) {
        this.type = type;
        return this;
    }
}