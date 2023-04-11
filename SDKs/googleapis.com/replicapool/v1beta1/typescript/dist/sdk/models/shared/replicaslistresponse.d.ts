import { SpeakeasyBase } from "../../../internal/utils";
import { Replica } from "./replica";
/**
 * Successful response
 */
export declare class ReplicasListResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: Replica[];
}
