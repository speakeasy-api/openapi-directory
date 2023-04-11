import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Site contact type.
 */
export declare enum SiteContactContactTypeEnum {
    SalesPerson = "SALES_PERSON",
    Trafficker = "TRAFFICKER"
}
/**
 * Site Contact
 */
export declare class SiteContact extends SpeakeasyBase {
    /**
     * Address of this site contact.
     */
    address?: string;
    /**
     * Site contact type.
     */
    contactType?: SiteContactContactTypeEnum;
    /**
     * Email address of this site contact. This is a required field.
     */
    email?: string;
    /**
     * First name of this site contact.
     */
    firstName?: string;
    /**
     * ID of this site contact. This is a read-only, auto-generated field.
     */
    id?: string;
    /**
     * Last name of this site contact.
     */
    lastName?: string;
    /**
     * Primary phone number of this site contact.
     */
    phone?: string;
    /**
     * Title or designation of this site contact.
     */
    title?: string;
}
