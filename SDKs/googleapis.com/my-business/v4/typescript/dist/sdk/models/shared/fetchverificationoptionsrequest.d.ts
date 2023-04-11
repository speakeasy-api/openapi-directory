import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceBusinessContext } from "./servicebusinesscontext";
/**
 * Request message for Verifications.FetchVerificationOptions.
 */
export declare class FetchVerificationOptionsRequest extends SpeakeasyBase {
    /**
     * Additional data for service business verification.
     */
    context?: ServiceBusinessContext;
    /**
     * The BCP 47 language code representing the language that is to be used for the verification process. Available options vary by language.
     */
    languageCode?: string;
}
