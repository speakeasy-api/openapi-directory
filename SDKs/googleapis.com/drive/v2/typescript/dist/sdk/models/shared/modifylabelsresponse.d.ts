import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
 */
export declare class ModifyLabelsResponse extends SpeakeasyBase {
    /**
     * This is always drive#modifyLabelsResponse
     */
    kind?: string;
    /**
     * The list of labels which were added or updated by the request.
     */
    modifiedLabels?: Label[];
}
