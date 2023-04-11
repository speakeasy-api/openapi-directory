import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An entry for an Access Control list.
 */
export declare class AclEntry extends SpeakeasyBase {
    /**
     * The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    expirationTime?: string;
    /**
     * This is always `sql#aclEntry`.
     */
    kind?: string;
    /**
     * Optional. A label to identify this entry.
     */
    name?: string;
    /**
     * The allowlisted value for the access control list.
     */
    value?: string;
}
