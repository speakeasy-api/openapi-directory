package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HolidaysHoliday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countryCode")
    public String countryCode;
    public HolidaysHoliday withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public HolidaysHoliday withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryGuaranteeDate")
    public String deliveryGuaranteeDate;
    public HolidaysHoliday withDeliveryGuaranteeDate(String deliveryGuaranteeDate) {
        this.deliveryGuaranteeDate = deliveryGuaranteeDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryGuaranteeHour")
    public String deliveryGuaranteeHour;
    public HolidaysHoliday withDeliveryGuaranteeHour(String deliveryGuaranteeHour) {
        this.deliveryGuaranteeHour = deliveryGuaranteeHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public HolidaysHoliday withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public HolidaysHoliday withType(String type) {
        this.type = type;
        return this;
    }
}