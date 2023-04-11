import { SpeakeasyBase } from "../../../internal/utils";
import { TypeT } from "./type";
/**
 * A response that returns all Types supported by Deployment Manager
 */
export declare class TypesListResponse extends SpeakeasyBase {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string;
    /**
     * Output only. A list of resource types supported by Deployment Manager.
     */
    types?: TypeT[];
}
