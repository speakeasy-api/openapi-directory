import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a single branch of a client.
 */
export declare class AdvertisingBranchModel extends SpeakeasyBase {
    /**
     * Branch address line 1.
     */
    address1?: string;
    /**
     * Branch address line 2.
     */
    address2?: string;
    /**
     * Branch address line 3.
     */
    address3?: string;
    /**
     * Branch address line 4.
     */
    address4?: string;
    /**
     * The relevant company name, if not the one specified on the branch then the one on company.
     */
    companyName?: string;
    /**
     * County
     */
    county?: string;
    /**
     * Branch email address.
     */
    eMailAddress?: string;
    /**
     * A unique identifier defining the object and change revision.
     */
    eTag?: string;
    /**
     * Branch fax phone number.
     */
    faxPhone?: string;
    /**
     * Branch land phone number.
     */
    landPhone?: string;
    /**
     * The branch name.
     */
    name?: string;
    /**
     * The unique Object ID (OID).
     */
    oid?: string;
    /**
     * Branch address postcode.
     */
    postcode?: string;
    /**
     * Branch web address.
     */
    webAddress?: string;
}
