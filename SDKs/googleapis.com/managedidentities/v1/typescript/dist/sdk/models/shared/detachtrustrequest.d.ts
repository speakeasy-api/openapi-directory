import { SpeakeasyBase } from "../../../internal/utils";
import { TrustInput } from "./trust";
/**
 * Request message for DetachTrust
 */
export declare class DetachTrustRequestInput extends SpeakeasyBase {
    /**
     * Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain. If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
     */
    trust?: TrustInput;
}
