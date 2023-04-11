import { SpeakeasyBase } from "../../../internal/utils";
import { RefreshDataSourceObjectExecutionStatus } from "./refreshdatasourceobjectexecutionstatus";
/**
 * The response from refreshing one or multiple data source objects.
 */
export declare class RefreshDataSourceResponse extends SpeakeasyBase {
    /**
     * All the refresh status for the data source object references specified in the request. If is_all is specified, the field contains only those in failure status.
     */
    statuses?: RefreshDataSourceObjectExecutionStatus[];
}
