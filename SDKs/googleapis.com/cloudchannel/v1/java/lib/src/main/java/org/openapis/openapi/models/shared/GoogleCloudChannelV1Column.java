/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GoogleCloudChannelV1Column - The definition of a report column. Specifies the data properties in the corresponding position of the report rows.
 */
public class GoogleCloudChannelV1Column {
    /**
     * The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnId")
    public String columnId;

    public GoogleCloudChannelV1Column withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    
    /**
     * The type of the values for this column.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public GoogleCloudChannelV1ColumnDataTypeEnum dataType;

    public GoogleCloudChannelV1Column withDataType(GoogleCloudChannelV1ColumnDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    
    /**
     * The column's display name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;

    public GoogleCloudChannelV1Column withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    
    public GoogleCloudChannelV1Column(){}
}
