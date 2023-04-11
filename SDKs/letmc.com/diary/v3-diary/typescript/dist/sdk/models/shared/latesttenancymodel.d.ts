import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedTenantModel } from "./linkedtenantmodel";
/**
 * Holds information on the most recent tenancy linked to the property.
 */
export declare class LatestTenancyModel extends SpeakeasyBase {
    /**
     * Access Arrangements
     */
    accessArrangements?: string;
    /**
     * Arrange access Mobile 1
     */
    accessMobile1?: string;
    /**
     * Arrange access Mobile 2
     */
    accessMobile2?: string;
    /**
     * Arrange access Mobile 3
     */
    accessMobile3?: string;
    /**
     * Arrange access contact name 1
     */
    accessName1?: string;
    /**
     * Arrange access contact name 2
     */
    accessName2?: string;
    /**
     * Arrange access contact name 3
     */
    accessName3?: string;
    /**
     * ETag
     */
    eTag?: string;
    /**
     * The end date of the Tenancy
     */
    endDate?: Date;
    /**
     * The fixed date of the Tenancy
     */
    fixedDate?: Date;
    /**
     * The unique global reference of the Tenancy
     */
    globalReference?: string;
    /**
     * Has the Tenancy ended?
     */
    isTenancyEnded?: boolean;
    /**
     * Is the tenancy Proposed?
     */
    isTenancyProposed?: boolean;
    /**
     * Is the tenancy signed?
     */
    isTenancySigned?: boolean;
    /**
     * A collection of tenants linked to the tenancy:-
     */
    linkedTenants?: LinkedTenantModel[];
    /**
     * OID
     */
    oid?: string;
    /**
     * The start date of the Tenancy
     */
    startDate?: Date;
}
