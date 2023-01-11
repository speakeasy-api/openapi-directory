package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1Column
 * The definition of a report column. Specifies the data properties in the corresponding position of the report rows.
**/
public class GoogleCloudChannelV1Column {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnId")
    public String columnId;
    public GoogleCloudChannelV1Column withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public GoogleCloudChannelV1ColumnDataTypeEnum dataType;
    public GoogleCloudChannelV1Column withDataType(GoogleCloudChannelV1ColumnDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudChannelV1Column withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}