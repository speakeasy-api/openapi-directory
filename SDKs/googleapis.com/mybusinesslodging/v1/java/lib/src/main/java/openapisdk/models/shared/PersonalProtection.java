package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonalProtection
 * Personal protection measures implemented by the hotel during COVID-19.
**/
public class PersonalProtection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonAreasOfferSanitizingItems")
    public Boolean commonAreasOfferSanitizingItems;
    public PersonalProtection withCommonAreasOfferSanitizingItems(Boolean commonAreasOfferSanitizingItems) {
        this.commonAreasOfferSanitizingItems = commonAreasOfferSanitizingItems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commonAreasOfferSanitizingItemsException")
    public PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum commonAreasOfferSanitizingItemsException;
    public PersonalProtection withCommonAreasOfferSanitizingItemsException(PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum commonAreasOfferSanitizingItemsException) {
        this.commonAreasOfferSanitizingItemsException = commonAreasOfferSanitizingItemsException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faceMaskRequired")
    public Boolean faceMaskRequired;
    public PersonalProtection withFaceMaskRequired(Boolean faceMaskRequired) {
        this.faceMaskRequired = faceMaskRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("faceMaskRequiredException")
    public PersonalProtectionFaceMaskRequiredExceptionEnum faceMaskRequiredException;
    public PersonalProtection withFaceMaskRequiredException(PersonalProtectionFaceMaskRequiredExceptionEnum faceMaskRequiredException) {
        this.faceMaskRequiredException = faceMaskRequiredException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestRoomHygieneKitsAvailable")
    public Boolean guestRoomHygieneKitsAvailable;
    public PersonalProtection withGuestRoomHygieneKitsAvailable(Boolean guestRoomHygieneKitsAvailable) {
        this.guestRoomHygieneKitsAvailable = guestRoomHygieneKitsAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guestRoomHygieneKitsAvailableException")
    public PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum guestRoomHygieneKitsAvailableException;
    public PersonalProtection withGuestRoomHygieneKitsAvailableException(PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum guestRoomHygieneKitsAvailableException) {
        this.guestRoomHygieneKitsAvailableException = guestRoomHygieneKitsAvailableException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectiveEquipmentAvailable")
    public Boolean protectiveEquipmentAvailable;
    public PersonalProtection withProtectiveEquipmentAvailable(Boolean protectiveEquipmentAvailable) {
        this.protectiveEquipmentAvailable = protectiveEquipmentAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectiveEquipmentAvailableException")
    public PersonalProtectionProtectiveEquipmentAvailableExceptionEnum protectiveEquipmentAvailableException;
    public PersonalProtection withProtectiveEquipmentAvailableException(PersonalProtectionProtectiveEquipmentAvailableExceptionEnum protectiveEquipmentAvailableException) {
        this.protectiveEquipmentAvailableException = protectiveEquipmentAvailableException;
        return this;
    }
}