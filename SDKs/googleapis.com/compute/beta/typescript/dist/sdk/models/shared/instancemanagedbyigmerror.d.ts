import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceManagedByIgmErrorInstanceActionDetails } from "./instancemanagedbyigmerrorinstanceactiondetails";
import { InstanceManagedByIgmErrorManagedInstanceError } from "./instancemanagedbyigmerrormanagedinstanceerror";
export declare class InstanceManagedByIgmError extends SpeakeasyBase {
    error?: InstanceManagedByIgmErrorManagedInstanceError;
    instanceActionDetails?: InstanceManagedByIgmErrorInstanceActionDetails;
    /**
     * [Output Only] The time that this error occurred. This value is in RFC3339 text format.
     */
    timestamp?: string;
}
