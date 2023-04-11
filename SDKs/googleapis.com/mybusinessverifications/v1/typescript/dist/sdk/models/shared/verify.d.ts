import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates that the location requires verification. Contains information about the current verification actions performed on the location.
 */
export declare class Verify extends SpeakeasyBase {
    /**
     * Indicates whether a verification process has already started, and can be completed by the location.
     */
    hasPendingVerification?: boolean;
}
