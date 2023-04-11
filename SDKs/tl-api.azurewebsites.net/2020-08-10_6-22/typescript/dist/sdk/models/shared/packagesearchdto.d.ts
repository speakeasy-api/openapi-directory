import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The PackageSearchDTO Class.
 *
 * @remarks
 * Contains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.
 *
 */
export declare class PackageSearchDTO extends SpeakeasyBase {
    /**
     * Active Status
     */
    activeStatus?: boolean;
    /**
     * sum of addon fees.
     *
     * @remarks
     * incoming values for this filed will ignore.
     *
     */
    addonFee?: number;
    /**
     * Boolean value to indicate wheather package is available in all the gyms.
     *
     * @remarks
     *
     */
    applyForAllGyms?: boolean;
    /**
     * Range of period a member is bound to the contract if he/she choose this package.
     *
     * @remarks
     *
     */
    bindingPeriod?: number;
    /**
     * Package created DateTime.
     *
     * @remarks
     *
     */
    createdDate?: Date;
    /**
     * Package created user.
     *
     * @remarks
     *
     */
    createdUser?: string;
    /**
     * Common descriptions about package.If there are more instructions can be stored as comma separated values.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * What are the facilities, features available for package.ex:- wifi, ACm etc.Can be stored as comma seperated values.
     *
     * @remarks
     *
     */
    features?: string;
    /**
     * No of months gym member can come without payments.
     *
     * @remarks
     *
     */
    freeMonths?: number;
    /**
     * Boolean value to indicate member can remove already added addons if he choose this package.
     *
     * @remarks
     *
     */
    memberCanRemoveAddOns?: boolean;
    /**
     * Package last modified DateTime.
     *
     * @remarks
     *
     */
    modifiedDate?: Date;
    /**
     * Package last modified user.
     *
     * @remarks
     *
     */
    modifiedUser?: string;
    /**
     * Monthly installment fee if package is not fixed visit.
     *
     * @remarks
     * addition of the servicefee and addon fees divided by binding period.
     *
     */
    monthlyFee?: number;
    /**
     * No of visits for fixed package
     */
    numberOfVisits?: number;
    packageId?: number;
    packageName?: string;
    packageNumber?: number;
    /**
     * Package type can be either fixed visit or unlimited.
     *
     * @remarks
     *
     */
    packageType?: string;
    /**
     * Registartion fee for the package at a gym.
     *
     * @remarks
     *
     */
    registrationFee?: number;
    /**
     * total Service charge of the package for entire period.
     *
     * @remarks
     *
     */
    serviceFee?: number;
    /**
     * Comma separated string values in case of need of maintain some labels kind of stuff relevant to the package.
     *
     * @remarks
     *
     */
    tags?: string;
    /**
     * total number of recode for particular search
     */
    totalCount?: number;
    /**
     * total price for the package including Addon fees, service fee and registration fee.
     *
     * @remarks
     * incoming values for this field will ignore.
     *
     */
    totalPrice?: number;
}
