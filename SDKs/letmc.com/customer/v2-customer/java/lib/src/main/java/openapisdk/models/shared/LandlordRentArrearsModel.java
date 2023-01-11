package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordRentArrearsModel
 * Landlord Rent Arrears.
**/
public class LandlordRentArrearsModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChaseNotes")
    public LandlordChaseNoteModel[] chaseNotes;
    public LandlordRentArrearsModel withChaseNotes(LandlordChaseNoteModel[] chaseNotes) {
        this.chaseNotes = chaseNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RentCollected")
    public Double rentCollected;
    public LandlordRentArrearsModel withRentCollected(Double rentCollected) {
        this.rentCollected = rentCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RentOutstanding")
    public LandlordRentOustandingItem[] rentOutstanding;
    public LandlordRentArrearsModel withRentOutstanding(LandlordRentOustandingItem[] rentOutstanding) {
        this.rentOutstanding = rentOutstanding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalRentArrears")
    public Double totalRentArrears;
    public LandlordRentArrearsModel withTotalRentArrears(Double totalRentArrears) {
        this.totalRentArrears = totalRentArrears;
        return this;
    }
}