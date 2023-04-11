import { SpeakeasyBase } from "../../../internal/utils";
import { TrustInput } from "./trust";
/**
 * Request message for ValidateTrust
 */
export declare class ValidateTrustRequestInput extends SpeakeasyBase {
    /**
     * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
     */
    trust?: TrustInput;
}
