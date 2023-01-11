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
 * Manifest
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 * 
**/
public class Manifest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public Manifest withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Manifest withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_id")
    public java.util.Map<String, Object> formId;
    public Manifest withFormId(java.util.Map<String, Object> formId) {
        this.formId = formId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest_download")
    public ManifestManifestDownload manifestDownload;
    public Manifest withManifestDownload(ManifestManifestDownload manifestDownload) {
        this.manifestDownload = manifestDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest_id")
    public java.util.Map<String, Object> manifestId;
    public Manifest withManifestId(java.util.Map<String, Object> manifestId) {
        this.manifestId = manifestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public Manifest withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipments")
    public Integer shipments;
    public Manifest withShipments(Integer shipments) {
        this.shipments = shipments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submission_id")
    public String submissionId;
    public Manifest withSubmissionId(String submissionId) {
        this.submissionId = submissionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public Manifest withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}