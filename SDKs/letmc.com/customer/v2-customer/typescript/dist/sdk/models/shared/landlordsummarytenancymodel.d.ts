import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Landlord Summary - Landing Page.
 */
export declare class LandlordSummaryTenancyModel extends SpeakeasyBase {
    /**
     * Bomd
     */
    bond?: number;
    /**
     * The Tenancy Branch ID
     */
    branchID?: string;
    /**
     * Description.
     */
    description?: string;
    /**
     * User Friendly ID
     */
    globalReference?: string;
    /**
     * ID
     */
    id?: string;
    /**
     * Maintenance Jobs.
     */
    maintenanceJobs?: number;
    /**
     * State of the tenancy
     */
    managedRent?: boolean;
    /**
     * Display Property Address
     */
    propertyAddress?: string;
    /**
     * Rent
     */
    rent?: string;
    /**
     * Rent Arrears
     */
    rentArrears?: number;
    /**
     * Rent Arrears
     */
    rentCollected?: number;
    /**
     * Tenancy Property
     */
    tenancyProperty?: string;
    /**
     * State of the tenancy
     */
    tenancyState?: string;
}
