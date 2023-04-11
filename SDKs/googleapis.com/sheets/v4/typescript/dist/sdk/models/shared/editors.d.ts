import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The editors of a protected range.
 */
export declare class Editors extends SpeakeasyBase {
    /**
     * True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain.
     */
    domainUsersCanEdit?: boolean;
    /**
     * The email addresses of groups with edit access to the protected range.
     */
    groups?: string[];
    /**
     * The email addresses of users with edit access to the protected range.
     */
    users?: string[];
}
