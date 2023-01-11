package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingStatusItem
 * **object** containing item booking status information
**/
public class BookingStatusItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amended")
    public Boolean amended;
    public BookingStatusItem withAmended(Boolean amended) {
        this.amended = amended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancelled")
    public Boolean cancelled;
    public BookingStatusItem withCancelled(Boolean cancelled) {
        this.cancelled = cancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confirmed")
    public Boolean confirmed;
    public BookingStatusItem withConfirmed(Boolean confirmed) {
        this.confirmed = confirmed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Boolean failed;
    public BookingStatusItem withFailed(Boolean failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public BookingStatusItemLevelEnum level;
    public BookingStatusItem withLevel(BookingStatusItemLevelEnum level) {
        this.level = level;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending")
    public Boolean pending;
    public BookingStatusItem withPending(Boolean pending) {
        this.pending = pending;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Long status;
    public BookingStatusItem withStatus(Long status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public BookingStatusItem withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public BookingStatusItemTypeEnum type;
    public BookingStatusItem withType(BookingStatusItemTypeEnum type) {
        this.type = type;
        return this;
    }
}