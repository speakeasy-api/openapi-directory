import { SpeakeasyBase } from "../../../internal/utils";
import { Trust } from "./trust";
export declare class ValidateTrustRequest extends SpeakeasyBase {
    /**
     * Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
     */
    trust?: Trust;
}
