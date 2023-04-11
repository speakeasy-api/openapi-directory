import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1DateRange } from "./googlecloudchannelv1daterange";
/**
 * Request message for CloudChannelReportsService.RunReportJob.
 */
export declare class GoogleCloudChannelV1RunReportJobRequest extends SpeakeasyBase {
    /**
     * A representation of usage or invoice date ranges.
     */
    dateRange?: GoogleCloudChannelV1DateRange;
    /**
     * Optional. A structured string that defines conditions on dimension columns to restrict the report output. Filters support logical operators (AND, OR, NOT) and conditional operators (=, !=, <, >, <=, and >=) using `column_id` as keys. For example: `(customer:"accounts/C123abc/customers/S456def" OR customer:"accounts/C123abc/customers/S789ghi") AND invoice_start_date.year >= 2022`
     */
    filter?: string;
    /**
     * Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US".
     */
    languageCode?: string;
}
