package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MinimizedContact
 * Minimized contact measures implemented by the hotel during COVID-19.
**/
public class MinimizedContact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactlessCheckinCheckout")
    public Boolean contactlessCheckinCheckout;
    public MinimizedContact withContactlessCheckinCheckout(Boolean contactlessCheckinCheckout) {
        this.contactlessCheckinCheckout = contactlessCheckinCheckout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactlessCheckinCheckoutException")
    public MinimizedContactContactlessCheckinCheckoutExceptionEnum contactlessCheckinCheckoutException;
    public MinimizedContact withContactlessCheckinCheckoutException(MinimizedContactContactlessCheckinCheckoutExceptionEnum contactlessCheckinCheckoutException) {
        this.contactlessCheckinCheckoutException = contactlessCheckinCheckoutException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digitalGuestRoomKeys")
    public Boolean digitalGuestRoomKeys;
    public MinimizedContact withDigitalGuestRoomKeys(Boolean digitalGuestRoomKeys) {
        this.digitalGuestRoomKeys = digitalGuestRoomKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("digitalGuestRoomKeysException")
    public MinimizedContactDigitalGuestRoomKeysExceptionEnum digitalGuestRoomKeysException;
    public MinimizedContact withDigitalGuestRoomKeysException(MinimizedContactDigitalGuestRoomKeysExceptionEnum digitalGuestRoomKeysException) {
        this.digitalGuestRoomKeysException = digitalGuestRoomKeysException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("housekeepingScheduledRequestOnly")
    public Boolean housekeepingScheduledRequestOnly;
    public MinimizedContact withHousekeepingScheduledRequestOnly(Boolean housekeepingScheduledRequestOnly) {
        this.housekeepingScheduledRequestOnly = housekeepingScheduledRequestOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("housekeepingScheduledRequestOnlyException")
    public MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum housekeepingScheduledRequestOnlyException;
    public MinimizedContact withHousekeepingScheduledRequestOnlyException(MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum housekeepingScheduledRequestOnlyException) {
        this.housekeepingScheduledRequestOnlyException = housekeepingScheduledRequestOnlyException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noHighTouchItemsCommonAreas")
    public Boolean noHighTouchItemsCommonAreas;
    public MinimizedContact withNoHighTouchItemsCommonAreas(Boolean noHighTouchItemsCommonAreas) {
        this.noHighTouchItemsCommonAreas = noHighTouchItemsCommonAreas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noHighTouchItemsCommonAreasException")
    public MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum noHighTouchItemsCommonAreasException;
    public MinimizedContact withNoHighTouchItemsCommonAreasException(MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum noHighTouchItemsCommonAreasException) {
        this.noHighTouchItemsCommonAreasException = noHighTouchItemsCommonAreasException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noHighTouchItemsGuestRooms")
    public Boolean noHighTouchItemsGuestRooms;
    public MinimizedContact withNoHighTouchItemsGuestRooms(Boolean noHighTouchItemsGuestRooms) {
        this.noHighTouchItemsGuestRooms = noHighTouchItemsGuestRooms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noHighTouchItemsGuestRoomsException")
    public MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum noHighTouchItemsGuestRoomsException;
    public MinimizedContact withNoHighTouchItemsGuestRoomsException(MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum noHighTouchItemsGuestRoomsException) {
        this.noHighTouchItemsGuestRoomsException = noHighTouchItemsGuestRoomsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plasticKeycardsDisinfected")
    public Boolean plasticKeycardsDisinfected;
    public MinimizedContact withPlasticKeycardsDisinfected(Boolean plasticKeycardsDisinfected) {
        this.plasticKeycardsDisinfected = plasticKeycardsDisinfected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plasticKeycardsDisinfectedException")
    public MinimizedContactPlasticKeycardsDisinfectedExceptionEnum plasticKeycardsDisinfectedException;
    public MinimizedContact withPlasticKeycardsDisinfectedException(MinimizedContactPlasticKeycardsDisinfectedExceptionEnum plasticKeycardsDisinfectedException) {
        this.plasticKeycardsDisinfectedException = plasticKeycardsDisinfectedException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomBookingsBuffer")
    public Boolean roomBookingsBuffer;
    public MinimizedContact withRoomBookingsBuffer(Boolean roomBookingsBuffer) {
        this.roomBookingsBuffer = roomBookingsBuffer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roomBookingsBufferException")
    public MinimizedContactRoomBookingsBufferExceptionEnum roomBookingsBufferException;
    public MinimizedContact withRoomBookingsBufferException(MinimizedContactRoomBookingsBufferExceptionEnum roomBookingsBufferException) {
        this.roomBookingsBufferException = roomBookingsBufferException;
        return this;
    }
}