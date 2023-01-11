package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class HipConsentNotificationNotificationConsentDetail {
    @JsonProperty("careContexts")
    public HipConsentNotificationNotificationConsentDetailCareContexts[] careContexts;
    public HipConsentNotificationNotificationConsentDetail withCareContexts(HipConsentNotificationNotificationConsentDetailCareContexts[] careContexts) {
        this.careContexts = careContexts;
        return this;
    }
    @JsonProperty("consentId")
    public String consentId;
    public HipConsentNotificationNotificationConsentDetail withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("consentManager")
    public HipConsentNotificationNotificationConsentDetailConsentManager consentManager;
    public HipConsentNotificationNotificationConsentDetail withConsentManager(HipConsentNotificationNotificationConsentDetailConsentManager consentManager) {
        this.consentManager = consentManager;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public HipConsentNotificationNotificationConsentDetail withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("hiTypes")
    public HiTypeEnumEnum[] hiTypes;
    public HipConsentNotificationNotificationConsentDetail withHiTypes(HiTypeEnumEnum[] hiTypes) {
        this.hiTypes = hiTypes;
        return this;
    }
    @JsonProperty("hip")
    public HipConsentNotificationNotificationConsentDetailHip hip;
    public HipConsentNotificationNotificationConsentDetail withHip(HipConsentNotificationNotificationConsentDetailHip hip) {
        this.hip = hip;
        return this;
    }
    @JsonProperty("patient")
    public ConsentManagerPatientId patient;
    public HipConsentNotificationNotificationConsentDetail withPatient(ConsentManagerPatientId patient) {
        this.patient = patient;
        return this;
    }
    @JsonProperty("permission")
    public Permission permission;
    public HipConsentNotificationNotificationConsentDetail withPermission(Permission permission) {
        this.permission = permission;
        return this;
    }
    @JsonProperty("purpose")
    public UsePurpose purpose;
    public HipConsentNotificationNotificationConsentDetail withPurpose(UsePurpose purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public String schemaVersion;
    public HipConsentNotificationNotificationConsentDetail withSchemaVersion(String schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
}