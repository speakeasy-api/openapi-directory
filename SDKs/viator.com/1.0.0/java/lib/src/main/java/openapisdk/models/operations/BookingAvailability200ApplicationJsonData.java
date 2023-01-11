package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BookingAvailability200ApplicationJsonData
 * **object** detailing available tourgrades for the specified age bands and date range for this product
**/
public class BookingAvailability200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availability")
    public BookingAvailability200ApplicationJsonDataAvailability[] availability;
    public BookingAvailability200ApplicationJsonData withAvailability(BookingAvailability200ApplicationJsonDataAvailability[] availability) {
        this.availability = availability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstAvailableDate")
    public String firstAvailableDate;
    public BookingAvailability200ApplicationJsonData withFirstAvailableDate(String firstAvailableDate) {
        this.firstAvailableDate = firstAvailableDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAvailableDate")
    public String lastAvailableDate;
    public BookingAvailability200ApplicationJsonData withLastAvailableDate(String lastAvailableDate) {
        this.lastAvailableDate = lastAvailableDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public BookingAvailability200ApplicationJsonData withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
}