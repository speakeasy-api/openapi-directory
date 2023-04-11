import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the summary of a vehicle background check
 */
export declare class VehicleSummary extends SpeakeasyBase {
    /**
     * Number of passengers allowed to travel in the vehicle
     */
    capacity?: number;
    /**
     * Vehicle color
     */
    color?: string;
    /**
     * Vehicle license plate
     */
    licensePlate?: string;
    /**
     * Vehicle manufacturer
     */
    manufacturer?: string;
    /**
     * Vehicle model
     */
    model?: string;
    /**
     * Vehicle door count
     */
    numberOfDoors?: number;
    /**
     * Expiration date of the vehicle compulsory insurance
     */
    obligatoryInsuranceExpirationDate?: Date;
    /**
     * Status of the vehicle compulsory insurances
     */
    obligatoryInsuranceStatus?: string;
    /**
     * Vehicle service type
     */
    serviceType?: string;
    /**
     * Vehicle category
     */
    vehicleCategory?: string;
    /**
     * Vehicle ID
     */
    vehicleId?: string;
    /**
     * Vehicle type
     */
    vehicleType?: string;
    /**
     * Vehicle model year
     */
    year?: number;
}
