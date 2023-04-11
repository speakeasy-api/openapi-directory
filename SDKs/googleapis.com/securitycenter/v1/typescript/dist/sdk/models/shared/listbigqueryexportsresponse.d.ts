import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1BigQueryExport } from "./googlecloudsecuritycenterv1bigqueryexport";
/**
 * Response message for listing BigQuery exports.
 */
export declare class ListBigQueryExportsResponse extends SpeakeasyBase {
    /**
     * The BigQuery exports from the specified parent.
     */
    bigQueryExports?: GoogleCloudSecuritycenterV1BigQueryExport[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
