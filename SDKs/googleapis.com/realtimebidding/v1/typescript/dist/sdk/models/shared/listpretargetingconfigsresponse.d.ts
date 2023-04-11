import { SpeakeasyBase } from "../../../internal/utils";
import { PretargetingConfig } from "./pretargetingconfig";
/**
 * A response containing pretargeting configurations.
 */
export declare class ListPretargetingConfigsResponse extends SpeakeasyBase {
    /**
     * A token which can be passed to a subsequent call to the `ListPretargetingConfigs` method to retrieve the next page of results in ListPretargetingConfigsRequest.pageToken.
     */
    nextPageToken?: string;
    /**
     * List of pretargeting configurations.
     */
    pretargetingConfigs?: PretargetingConfig[];
}
