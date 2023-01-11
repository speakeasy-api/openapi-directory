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
 * CreateManifestByObjectRequestBody
 * A create manifest request body
**/
public class CreateManifestByObjectRequestBody {
    @JsonProperty("carrier_id")
    public String carrierId;
    public CreateManifestByObjectRequestBody withCarrierId(String carrierId) {
        this.carrierId = carrierId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excluded_label_ids")
    public String[] excludedLabelIds;
    public CreateManifestByObjectRequestBody withExcludedLabelIds(String[] excludedLabelIds) {
        this.excludedLabelIds = excludedLabelIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_ids")
    public String[] labelIds;
    public CreateManifestByObjectRequestBody withLabelIds(String[] labelIds) {
        this.labelIds = labelIds;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public CreateManifestByObjectRequestBody withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
    @JsonProperty("warehouse_id")
    public String warehouseId;
    public CreateManifestByObjectRequestBody withWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
        return this;
    }
}