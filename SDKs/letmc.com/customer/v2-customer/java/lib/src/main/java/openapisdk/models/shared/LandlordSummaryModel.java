package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LandlordSummaryModel
 * Landlord Summary - Landing Page.
**/
public class LandlordSummaryModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountBalance")
    public Double accountBalance;
    public LandlordSummaryModel withAccountBalance(Double accountBalance) {
        this.accountBalance = accountBalance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastPayment")
    public OffsetDateTime lastPayment;
    public LandlordSummaryModel withLastPayment(OffsetDateTime lastPayment) {
        this.lastPayment = lastPayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tenancies")
    public LandlordSummaryTenancyModel[] tenancies;
    public LandlordSummaryModel withTenancies(LandlordSummaryTenancyModel[] tenancies) {
        this.tenancies = tenancies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalRentArrears")
    public Double totalRentArrears;
    public LandlordSummaryModel withTotalRentArrears(Double totalRentArrears) {
        this.totalRentArrears = totalRentArrears;
        return this;
    }
}