package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CohortGroup
 * Defines a cohort group. For example: "cohortGroup": { "cohorts": [{ "name": "cohort 1", "type": "FIRST_VISIT_DATE", "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" } },{ "name": "cohort 2" "type": "FIRST_VISIT_DATE" "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" } }] }
**/
public class CohortGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cohorts")
    public Cohort[] cohorts;
    public CohortGroup withCohorts(Cohort[] cohorts) {
        this.cohorts = cohorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifetimeValue")
    public Boolean lifetimeValue;
    public CohortGroup withLifetimeValue(Boolean lifetimeValue) {
        this.lifetimeValue = lifetimeValue;
        return this;
    }
}