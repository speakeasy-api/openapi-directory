package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConsentRequestConsent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("careContexts")
    public CareContextDefinition[] careContexts;
    public ConsentRequestConsent withCareContexts(CareContextDefinition[] careContexts) {
        this.careContexts = careContexts;
        return this;
    }
    @JsonProperty("hiTypes")
    public HiTypeEnumEnum[] hiTypes;
    public ConsentRequestConsent withHiTypes(HiTypeEnumEnum[] hiTypes) {
        this.hiTypes = hiTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hip")
    public ConsentRequestConsentHip hip;
    public ConsentRequestConsent withHip(ConsentRequestConsentHip hip) {
        this.hip = hip;
        return this;
    }
    @JsonProperty("hiu")
    public ConsentRequestConsentHiu hiu;
    public ConsentRequestConsent withHiu(ConsentRequestConsentHiu hiu) {
        this.hiu = hiu;
        return this;
    }
    @JsonProperty("patient")
    public ConsentRequestConsentPatient patient;
    public ConsentRequestConsent withPatient(ConsentRequestConsentPatient patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("permission")
    public Permission permission;
    public ConsentRequestConsent withPermission(Permission permission) {
        this.permission = permission;
        return this;
    }
    @JsonProperty("purpose")
    public UsePurpose purpose;
    public ConsentRequestConsent withPurpose(UsePurpose purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonProperty("requester")
    public Requester requester;
    public ConsentRequestConsent withRequester(Requester requester) {
        this.requester = requester;
        return this;
    }
}