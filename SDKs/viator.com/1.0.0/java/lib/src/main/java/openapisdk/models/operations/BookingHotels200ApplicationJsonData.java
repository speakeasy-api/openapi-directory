package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingHotels200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public BookingHotels200ApplicationJsonData withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public BookingHotels200ApplicationJsonData withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public BookingHotels200ApplicationJsonData withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationId")
    public Long destinationId;
    public BookingHotels200ApplicationJsonData withDestinationId(Long destinationId) {
        this.destinationId = destinationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotelString")
    public String hotelString;
    public BookingHotels200ApplicationJsonData withHotelString(String hotelString) {
        this.hotelString = hotelString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BookingHotels200ApplicationJsonData withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public BookingHotels200ApplicationJsonData withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public BookingHotels200ApplicationJsonData withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BookingHotels200ApplicationJsonData withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public BookingHotels200ApplicationJsonData withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public BookingHotels200ApplicationJsonData withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postcode")
    public String postcode;
    public BookingHotels200ApplicationJsonData withPostcode(String postcode) {
        this.postcode = postcode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCodes")
    public String[] productCodes;
    public BookingHotels200ApplicationJsonData withProductCodes(String[] productCodes) {
        this.productCodes = productCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public BookingHotels200ApplicationJsonData withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}