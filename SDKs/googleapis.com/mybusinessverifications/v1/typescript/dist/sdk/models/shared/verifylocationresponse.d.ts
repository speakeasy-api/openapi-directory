import { SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";
/**
 * Response message for Verifications.VerifyLocation.
 */
export declare class VerifyLocationResponse extends SpeakeasyBase {
    /**
     * A verification represents a verification attempt on a location.
     */
    verification?: Verification;
}
