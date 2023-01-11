package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingCalculatepriceRequestBodyItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingCalculatepriceRequestBodyItems withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tourGradeCode")
    public String tourGradeCode;
    public BookingCalculatepriceRequestBodyItems withTourGradeCode(String tourGradeCode) {
        this.tourGradeCode = tourGradeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travelDate")
    public String travelDate;
    public BookingCalculatepriceRequestBodyItems withTravelDate(String travelDate) {
        this.travelDate = travelDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("travellers")
    public BookingCalculatepriceRequestBodyItemsTravellers[] travellers;
    public BookingCalculatepriceRequestBodyItems withTravellers(BookingCalculatepriceRequestBodyItemsTravellers[] travellers) {
        this.travellers = travellers;
        return this;
    }
}