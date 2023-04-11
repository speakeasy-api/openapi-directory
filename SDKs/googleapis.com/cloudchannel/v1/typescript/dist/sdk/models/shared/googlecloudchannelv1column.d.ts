import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the values for this column.
 */
export declare enum GoogleCloudChannelV1ColumnDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    String = "STRING",
    Int = "INT",
    Decimal = "DECIMAL",
    Money = "MONEY",
    Date = "DATE",
    DateTime = "DATE_TIME"
}
/**
 * The definition of a report column. Specifies the data properties in the corresponding position of the report rows.
 */
export declare class GoogleCloudChannelV1Column extends SpeakeasyBase {
    /**
     * The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports.
     */
    columnId?: string;
    /**
     * The type of the values for this column.
     */
    dataType?: GoogleCloudChannelV1ColumnDataTypeEnum;
    /**
     * The column's display name.
     */
    displayName?: string;
}
