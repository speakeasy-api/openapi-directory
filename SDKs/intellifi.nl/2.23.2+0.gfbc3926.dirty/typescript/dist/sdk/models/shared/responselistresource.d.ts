import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A JSON object containing the status and the total amount of items in the newly added list
 */
export declare class ResponseListResource extends SpeakeasyBase {
    /**
     * Status code
     */
    status?: number;
    /**
     * Total items in the list
     */
    total?: number;
}
