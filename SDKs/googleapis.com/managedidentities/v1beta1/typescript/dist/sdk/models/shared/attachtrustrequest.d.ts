import { SpeakeasyBase } from "../../../internal/utils";
import { TrustInput } from "./trust";
/**
 * Request message for AttachTrust
 */
export declare class AttachTrustRequestInput extends SpeakeasyBase {
    /**
     * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.
     */
    trust?: TrustInput;
}
