package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class HiuSubscription {
    @JsonProperty("hiu")
    public OrganizationRepresentation hiu;
    public HiuSubscription withHiu(OrganizationRepresentation hiu) {
        this.hiu = hiu;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public HiuSubscription withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("patient")
    public ConsentManagerPatientId patient;
    public HiuSubscription withPatient(ConsentManagerPatientId patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("sources")
    public HiuSubscriptionContext[] sources;
    public HiuSubscription withSources(HiuSubscriptionContext[] sources) {
        this.sources = sources;
        return this;
    }
}