package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetManifestByIdResponseBody
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 * 
**/
public class GetManifestByIdResponseBody {
    @JsonProperty("carrier_id")
    public java.util.Map<String, Object> carrierId;
    public GetManifestByIdResponseBody withCarrierId(java.util.Map<String, Object> carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public GetManifestByIdResponseBody withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("form_id")
    public java.util.Map<String, Object> formId;
    public GetManifestByIdResponseBody withFormId(java.util.Map<String, Object> formId) {
        this.formId = formId;
        return this;
    }
    @JsonProperty("manifest_download")
    public GetManifestByIdResponseBodyManifestDownload manifestDownload;
    public GetManifestByIdResponseBody withManifestDownload(GetManifestByIdResponseBodyManifestDownload manifestDownload) {
        this.manifestDownload = manifestDownload;
        return this;
    }
    @JsonProperty("manifest_id")
    public java.util.Map<String, Object> manifestId;
    public GetManifestByIdResponseBody withManifestId(java.util.Map<String, Object> manifestId) {
        this.manifestId = manifestId;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public GetManifestByIdResponseBody withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("shipments")
    public Integer shipments;
    public GetManifestByIdResponseBody withShipments(Integer shipments) {
        this.shipments = shipments;
        return this;
    }
    @JsonProperty("submission_id")
    public String submissionId;
    public GetManifestByIdResponseBody withSubmissionId(String submissionId) {
        this.submissionId = submissionId;
        return this;
    }
    @JsonProperty("warehouse_id")
    public java.util.Map<String, Object> warehouseId;
    public GetManifestByIdResponseBody withWarehouseId(java.util.Map<String, Object> warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}