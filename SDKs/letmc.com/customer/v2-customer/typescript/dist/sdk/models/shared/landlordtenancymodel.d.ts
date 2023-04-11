import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordLettingsInspectionModel } from "./landlordlettingsinspectionmodel";
import { LandlordMaintenanceCertificateModel } from "./landlordmaintenancecertificatemodel";
import { LandlordMaintenancePreferenceModel } from "./landlordmaintenancepreferencemodel";
import { LettingsLandlordDocument } from "./lettingslandlorddocument";
/**
 * Landlord Tenancy Model.
 */
export declare class LandlordTenancyModel extends SpeakeasyBase {
    /**
     * Actual End Date
     */
    actualEndDate?: Date;
    /**
     * Beds
     */
    beds?: number;
    /**
     * Bond
     */
    bond?: number;
    /**
     * The tenancy branch ID:-
     */
    branchID?: string;
    /**
     * Maintenance Certificates.
     */
    certificates?: LandlordMaintenanceCertificateModel[];
    /**
     * Tenancy documents:-
     */
    documents?: LettingsLandlordDocument[];
    /**
     * Fixed Date
     */
    fixedDate?: Date;
    /**
     * User Friendly ID
     */
    globalReference?: string;
    /**
     * ID
     */
    id?: string;
    /**
     * Inspections
     */
    inspections?: LandlordLettingsInspectionModel[];
    /**
     * State of the tenancy
     */
    managedRent?: boolean;
    /**
     * Maintenance Preferences.
     */
    preferences?: LandlordMaintenancePreferenceModel[];
    /**
     * Previous Rent Amount
     */
    previousRentAmount?: number;
    /**
     * Display Property Address
     */
    propertyAddress?: string;
    /**
     * Rent
     */
    rent?: string;
    /**
     * Rent Amount
     */
    rentAmount?: number;
    /**
     * Start Date
     */
    startDate?: Date;
    /**
     * Tenancy Property
     */
    tenancyProperty?: string;
    /**
     * State of the tenancy
     */
    tenancyState?: string;
    /**
     * Tenants
     */
    tenants?: string[];
}
