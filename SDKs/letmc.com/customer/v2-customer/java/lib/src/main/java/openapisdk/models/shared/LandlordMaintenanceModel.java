package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LandlordMaintenanceModel
 * Landlord Maintenance
**/
public class LandlordMaintenanceModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jobs")
    public LandlordMaintenanceJobModel[] jobs;
    public LandlordMaintenanceModel withJobs(LandlordMaintenanceJobModel[] jobs) {
        this.jobs = jobs;
        return this;
    }
}