import { SpeakeasyBase } from "../../../internal/utils";
import { Dashboard } from "./dashboard";
/**
 * The ListDashboards request.
 */
export declare class ListDashboardsResponse extends SpeakeasyBase {
    /**
     * The list of requested dashboards.
     */
    dashboards?: Dashboard[];
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
}
