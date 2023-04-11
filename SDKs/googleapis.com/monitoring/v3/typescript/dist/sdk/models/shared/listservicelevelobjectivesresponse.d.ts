import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceLevelObjective } from "./servicelevelobjective";
/**
 * The ListServiceLevelObjectives response.
 */
export declare class ListServiceLevelObjectivesResponse extends SpeakeasyBase {
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * The ServiceLevelObjectives matching the specified filter.
     */
    serviceLevelObjectives?: ServiceLevelObjective[];
}
