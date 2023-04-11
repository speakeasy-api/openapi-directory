import { SpeakeasyBase } from "../../../internal/utils";
import { SecretMgmtLinks } from "./secretmgmtlinks";
/**
 * Secret created
 */
export declare class SecretInfo extends SpeakeasyBase {
    /**
     * Links related to this resource
     */
    links?: SecretMgmtLinks;
    /**
     * Creation date/time for this secret
     */
    createdAt?: string;
    /**
     * Secret ID
     */
    id?: string;
}
