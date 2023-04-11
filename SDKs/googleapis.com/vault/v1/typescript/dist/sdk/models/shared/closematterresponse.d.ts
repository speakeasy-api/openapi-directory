import { SpeakeasyBase } from "../../../internal/utils";
import { Matter } from "./matter";
/**
 * Response to a CloseMatterRequest.
 */
export declare class CloseMatterResponse extends SpeakeasyBase {
    /**
     * Represents a matter. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
     */
    matter?: Matter;
}
