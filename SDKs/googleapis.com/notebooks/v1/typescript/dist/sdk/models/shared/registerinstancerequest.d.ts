import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for registering a notebook instance.
 */
export declare class RegisterInstanceRequest extends SpeakeasyBase {
    /**
     * Required. User defined unique ID of this instance. The `instance_id` must be 1 to 63 characters long and contain only lowercase letters, numeric characters, and dashes. The first character must be a lowercase letter and the last character cannot be a dash.
     */
    instanceId?: string;
}
