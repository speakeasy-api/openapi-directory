package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HiuSubscriptionEventContent {
    @JsonProperty("context")
    public EventCategoryDetail[] context;
    public HiuSubscriptionEventContent withContext(EventCategoryDetail[] context) {
        this.context = context;
        return this;
    }
    @JsonProperty("hip")
    public OrganizationRepresentation hip;
    public HiuSubscriptionEventContent withHip(OrganizationRepresentation hip) {
        this.hip = hip;
        return this;
    }
    @JsonProperty("patient")
    public ConsentManagerPatientId patient;
    public HiuSubscriptionEventContent withPatient(ConsentManagerPatientId patient) {
        this.patient = patient;
        return this;
    }
}