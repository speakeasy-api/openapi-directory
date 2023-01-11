package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HolidaySchemeHolidayScheme {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccrualPayCodes")
    public HolidaySchemeHolidaySchemeAccrualPayCodes accrualPayCodes;
    public HolidaySchemeHolidayScheme withAccrualPayCodes(HolidaySchemeHolidaySchemeAccrualPayCodes accrualPayCodes) {
        this.accrualPayCodes = accrualPayCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowNegativeBalance")
    public Boolean allowNegativeBalance;
    public HolidaySchemeHolidayScheme withAllowNegativeBalance(Boolean allowNegativeBalance) {
        this.allowNegativeBalance = allowNegativeBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnualEntitlementWeeks")
    public Double annualEntitlementWeeks;
    public HolidaySchemeHolidayScheme withAnnualEntitlementWeeks(Double annualEntitlementWeeks) {
        this.annualEntitlementWeeks = annualEntitlementWeeks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BankHolidayInclusive")
    public Boolean bankHolidayInclusive;
    public HolidaySchemeHolidayScheme withBankHolidayInclusive(Boolean bankHolidayInclusive) {
        this.bankHolidayInclusive = bankHolidayInclusive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Code")
    public String code;
    public HolidaySchemeHolidayScheme withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EffectiveDate")
    public LocalDate effectiveDate;
    public HolidaySchemeHolidayScheme withEffectiveDate(LocalDate effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCarryOverDays")
    public Double maxCarryOverDays;
    public HolidaySchemeHolidayScheme withMaxCarryOverDays(Double maxCarryOverDays) {
        this.maxCarryOverDays = maxCarryOverDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Revision")
    public Integer revision;
    public HolidaySchemeHolidayScheme withRevision(Integer revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeCeasedDate")
    public LocalDate schemeCeasedDate;
    public HolidaySchemeHolidayScheme withSchemeCeasedDate(LocalDate schemeCeasedDate) {
        this.schemeCeasedDate = schemeCeasedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeKey")
    public String schemeKey;
    public HolidaySchemeHolidayScheme withSchemeKey(String schemeKey) {
        this.schemeKey = schemeKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemeName")
    public String schemeName;
    public HolidaySchemeHolidayScheme withSchemeName(String schemeName) {
        this.schemeName = schemeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("YearStartDay")
    public Integer yearStartDay;
    public HolidaySchemeHolidayScheme withYearStartDay(Integer yearStartDay) {
        this.yearStartDay = yearStartDay;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("YearStartMonth")
    public Integer yearStartMonth;
    public HolidaySchemeHolidayScheme withYearStartMonth(Integer yearStartMonth) {
        this.yearStartMonth = yearStartMonth;
        return this;
    }
}