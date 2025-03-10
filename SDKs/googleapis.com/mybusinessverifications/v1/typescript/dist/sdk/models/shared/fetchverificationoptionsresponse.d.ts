import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationOption } from "./verificationoption";
/**
 * Response message for Verifications.FetchVerificationOptions.
 */
export declare class FetchVerificationOptionsResponse extends SpeakeasyBase {
    /**
     * The available verification options.
     */
    options?: VerificationOption[];
}
