package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HolidaySchemeHolidaySchemeAccrualPayCodes
 * The holiday schemes' accrual pay codes
**/
public class HolidaySchemeHolidaySchemeAccrualPayCodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PayCode")
    public String[] payCode;
    public HolidaySchemeHolidaySchemeAccrualPayCodes withPayCode(String[] payCode) {
        this.payCode = payCode;
        return this;
    }
}