import { SpeakeasyBase } from "../../../internal/utils";
import { TrustInput } from "./trust";
/**
 * Request message for AttachTrust
 */
export declare class AttachTrustRequestInput extends SpeakeasyBase {
    /**
     * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain. If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
     */
    trust?: TrustInput;
}
