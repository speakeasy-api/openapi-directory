import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Guaranteed tier definition.
 */
export declare class Guaranteed extends SpeakeasyBase {
    /**
     * Optional. Defines the minimum duration of the guarantee. If specified, the requested resources will only be provisioned if they can be allocated for at least the given duration.
     */
    minDuration?: string;
    /**
     * Optional. Specifies the request should be scheduled on reserved capacity.
     */
    reserved?: boolean;
}
