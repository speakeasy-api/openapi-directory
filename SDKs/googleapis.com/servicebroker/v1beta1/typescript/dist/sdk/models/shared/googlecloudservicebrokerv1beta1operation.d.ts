import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a long running operation, which conforms to OpenService API.
 */
export declare class GoogleCloudServicebrokerV1beta1Operation extends SpeakeasyBase {
    /**
     * Optional description of the Operation state.
     */
    description?: string;
    /**
     * The state of the operation.
     *
     * @remarks
     * Valid values are: "in progress", "succeeded", and "failed".
     */
    state?: string;
}
