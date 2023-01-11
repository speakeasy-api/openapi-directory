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
 * ProcessBatchRequestBody
 * A process batch request body
**/
public class ProcessBatchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_format")
    public java.util.Map<String, Object> labelFormat;
    public ProcessBatchRequestBody withLabelFormat(java.util.Map<String, Object> labelFormat) {
        this.labelFormat = labelFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label_layout")
    public java.util.Map<String, Object> labelLayout;
    public ProcessBatchRequestBody withLabelLayout(java.util.Map<String, Object> labelLayout) {
        this.labelLayout = labelLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ship_date")
    public OffsetDateTime shipDate;
    public ProcessBatchRequestBody withShipDate(OffsetDateTime shipDate) {
        this.shipDate = shipDate;
        return this;
    }
}