import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request sent to MoveProject method.
 */
export declare class MoveProjectRequest extends SpeakeasyBase {
    /**
     * Required. The new parent to move the Project under.
     */
    destinationParent?: string;
}
