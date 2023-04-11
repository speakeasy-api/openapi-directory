import { SpeakeasyBase } from "../../../internal/utils";
import { Election } from "./election";
/**
 * The list of elections available for this version of the API.
 */
export declare class ElectionsQueryResponse extends SpeakeasyBase {
    /**
     * A list of available elections
     */
    elections?: Election[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse".
     */
    kind?: string;
}
