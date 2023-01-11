package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ConsentArtefactResponseConsentConsentDetail {
    @JsonProperty("careContexts")
    public ConsentArtefactResponseConsentConsentDetailCareContexts[] careContexts;
    public ConsentArtefactResponseConsentConsentDetail withCareContexts(ConsentArtefactResponseConsentConsentDetailCareContexts[] careContexts) {
        this.careContexts = careContexts;
        return this;
    }
    @JsonProperty("consentId")
    public String consentId;
    public ConsentArtefactResponseConsentConsentDetail withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("consentManager")
    public ConsentArtefactResponseConsentConsentDetailConsentManager consentManager;
    public ConsentArtefactResponseConsentConsentDetail withConsentManager(ConsentArtefactResponseConsentConsentDetailConsentManager consentManager) {
        this.consentManager = consentManager;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ConsentArtefactResponseConsentConsentDetail withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("hiTypes")
    public HiTypeEnumEnum[] hiTypes;
    public ConsentArtefactResponseConsentConsentDetail withHiTypes(HiTypeEnumEnum[] hiTypes) {
        this.hiTypes = hiTypes;
        return this;
    }
    @JsonProperty("hip")
    public ConsentArtefactResponseConsentConsentDetailHip hip;
    public ConsentArtefactResponseConsentConsentDetail withHip(ConsentArtefactResponseConsentConsentDetailHip hip) {
        this.hip = hip;
        return this;
    }
    @JsonProperty("hiu")
    public ConsentArtefactResponseConsentConsentDetailHiu hiu;
    public ConsentArtefactResponseConsentConsentDetail withHiu(ConsentArtefactResponseConsentConsentDetailHiu hiu) {
        this.hiu = hiu;
        return this;
    }
    @JsonProperty("patient")
    public ConsentManagerPatientId patient;
    public ConsentArtefactResponseConsentConsentDetail withPatient(ConsentManagerPatientId patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("permission")
    public Permission permission;
    public ConsentArtefactResponseConsentConsentDetail withPermission(Permission permission) {
        this.permission = permission;
        return this;
    }
    @JsonProperty("purpose")
    public UsePurpose purpose;
    public ConsentArtefactResponseConsentConsentDetail withPurpose(UsePurpose purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonProperty("requester")
    public Requester requester;
    public ConsentArtefactResponseConsentConsentDetail withRequester(Requester requester) {
        this.requester = requester;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public ConsentArtefactResponseConsentConsentDetail withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}