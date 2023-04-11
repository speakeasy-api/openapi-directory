import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Outstanding Rent
 */
export declare class LandlordRentOustandingItem extends SpeakeasyBase {
    /**
     * Days since the tenant went into arrears
     */
    debtDays?: number;
    /**
     * Outstanding Rent
     */
    outstandingRent?: number;
    /**
     * Property
     */
    property?: string;
    /**
     * Tenant
     */
    tenant?: string;
    /**
     * TenantID
     */
    tenantID?: string;
}
