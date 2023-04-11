import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstancesSetNameRequest extends SpeakeasyBase {
    /**
     * The current name of this resource, used to prevent conflicts. Provide the latest name when making a request to change name.
     */
    currentName?: string;
    /**
     * The name to be applied to the instance. Needs to be RFC 1035 compliant.
     */
    name?: string;
}
