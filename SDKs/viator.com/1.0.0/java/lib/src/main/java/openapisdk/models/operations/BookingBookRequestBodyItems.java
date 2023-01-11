package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingBookRequestBodyItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingQuestionAnswers")
    public BookingBookRequestBodyItemsBookingQuestionAnswers[] bookingQuestionAnswers;
    public BookingBookRequestBodyItems withBookingQuestionAnswers(BookingBookRequestBodyItemsBookingQuestionAnswers[] bookingQuestionAnswers) {
        this.bookingQuestionAnswers = bookingQuestionAnswers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotelId")
    public String hotelId;
    public BookingBookRequestBodyItems withHotelId(String hotelId) {
        this.hotelId = hotelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageOptionCode")
    public String languageOptionCode;
    public BookingBookRequestBodyItems withLanguageOptionCode(String languageOptionCode) {
        this.languageOptionCode = languageOptionCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partnerItemDetail")
    public BookingBookRequestBodyItemsPartnerItemDetail partnerItemDetail;
    public BookingBookRequestBodyItems withPartnerItemDetail(BookingBookRequestBodyItemsPartnerItemDetail partnerItemDetail) {
        this.partnerItemDetail = partnerItemDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupPoint")
    public String pickupPoint;
    public BookingBookRequestBodyItems withPickupPoint(String pickupPoint) {
        this.pickupPoint = pickupPoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingBookRequestBodyItems withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialRequirements")
    public String specialRequirements;
    public BookingBookRequestBodyItems withSpecialRequirements(String specialRequirements) {
        this.specialRequirements = specialRequirements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeCode")
    public String tourGradeCode;
    public BookingBookRequestBodyItems withTourGradeCode(String tourGradeCode) {
        this.tourGradeCode = tourGradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelDate")
    public String travelDate;
    public BookingBookRequestBodyItems withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travellers")
    public BookingBookRequestBodyItemsTravellers[] travellers;
    public BookingBookRequestBodyItems withTravellers(BookingBookRequestBodyItemsTravellers[] travellers) {
        this.travellers = travellers;
        return this;
    }
}