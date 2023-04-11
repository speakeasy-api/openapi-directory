import { SpeakeasyBase } from "../../../internal/utils";
import { GymDTO } from "./gymdto";
import { PackageItemDTO } from "./packageitemdto";
/**
 * The PackageDTO Class.
 *
 * @remarks
 * Contains relevant fields of Package DTO by masking actual Package entity's fields in application.
 *
 */
export declare class PackageDTO extends SpeakeasyBase {
    /**
     * Extra articles list added to the given package.
     *
     * @remarks
     *
     */
    addOns?: PackageItemDTO[];
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
     * Gyms list where this package is available.
     *
     * @remarks
     *
     */
    availableGyms?: GymDTO[];
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
     * Common descriptions about package.If there are more instructions
     *
     * @remarks
     *              can be stored as comma separated values.
     *
     */
    description?: string;
    /**
     * End date of the package.After that package is not valid for use.
     *
     * @remarks
     *
     */
    endDate?: Date;
    /**
     * No of months the fixed package is valid for sale
     *
     * @remarks
     *
     */
    expireInMonths?: number;
    /**
     * What are the facilities, features available for package.ex:- wifi,
     *
     * @remarks
     * ACm etc.Can be stored as comma seperated values.
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
     * Instruction to the gym members relevant to the package.
     *
     * @remarks
     *              If there are more instructions can be stored as comma seperated values.
     *
     */
    instructionsToGymUsers?: string;
    /**
     * Instruction to the MRM members relevant to the package.
     *
     * @remarks
     *              If there are more instructions can be stored as comma seperated values.
     *
     */
    instructionsToWebUsers?: string;
    /**
     * Boolean value to indicate this package is still active or not.
     *
     * @remarks
     *
     */
    isActive?: boolean;
    /**
     * Boolean value to indicate ATG transaction from bank is applicable or not.
     *
     * @remarks
     *
     */
    isAtg?: boolean;
    /**
     * Boolean value to indicate the contract will auto renew after expiration
     *
     * @remarks
     *              if this package would be chosen.
     *
     */
    isAutoRenew?: boolean;
    /**
     * Boolean value to indicate if the first month charges is free.
     *
     * @remarks
     *
     */
    isFirstMonthFree?: boolean;
    /**
     * Boolean value to indicate this package has registration fee or not.
     *
     * @remarks
     *
     */
    isRegistrationFee?: boolean;
    /**
     * Boolean value to indicate rest amount is applicable or not.
     *
     * @remarks
     *
     */
    isRestAmount?: boolean;
    /**
     * Boolean value to indicate package is visible in Mobile App or not.
     *
     * @remarks
     *
     */
    isShownInMobile?: boolean;
    /**
     * Boolean value to indicate package can be sponsored or not by other party.
     *
     * @remarks
     *
     */
    isSponsorPackage?: boolean;
    /**
     * If a member join the gym middle of a month via this package,
     *
     * @remarks
     *              what is the maximum amount of price can be neglected from payment from the member.
     *
     */
    maximumGiveAwayRestAmount?: number;
    /**
     * Boolean value to indicate member can add extra addons he wish if he choose this package.
     *
     * @remarks
     *
     */
    memberCanAddAddOns?: boolean;
    /**
     * Boolean value to indicate if member can leave from contract within
     *
     * @remarks
     *              free period if he/she choose this package.
     *
     */
    memberCanLeaveWithinFreePeriod?: boolean;
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
     *              read only
     *
     */
    monthlyFee?: number;
    /**
     * Next Package the contract continue after the binding period of this package.
     *
     * @remarks
     *
     */
    nextPackageNumber?: number;
    /**
     * Maximum Number of installment a member can divide the package price/cost to pay.
     *
     * @remarks
     *
     */
    numberOfInstallments?: number;
    /**
     * If package is fixed visit type, then how many visits are available for this package.
     *
     * @remarks
     *
     */
    numberOfVisits?: number;
    packageId?: number;
    packageName: string;
    packageNumber?: string;
    /**
     * Package type can be either fixed visit or unlimited.
     *
     * @remarks
     *
     */
    packageType: string;
    /**
     * Cost/Price of the single visit to gym.
     *
     * @remarks
     *
     */
    perVisitPrice?: number;
    /**
     * Registartion fee for the package at a gym.
     *
     * @remarks
     *              read only
     *
     */
    registrationFee: number;
    /**
     * total Service charge of the package for entire period.
     *
     * @remarks
     *
     */
    serviceFee: number;
    /**
     * Boolean value to show this package in MRM system or not.
     *
     * @remarks
     *
     */
    shownInWeb?: boolean;
    /**
     * Start date of the package.
     *
     * @remarks
     *
     */
    startDate?: Date;
    /**
     * Comma separated string values in case of need of maintain some labels kind of
     *
     * @remarks
     *              stuff relevant to the package.
     *
     */
    tags?: string;
    /**
     * total price for the package including Addon fees, service fee and registration fee.
     *
     * @remarks
     * incoming values for this field will ignore.
     *
     */
    totalPrice?: number;
}
