import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Country where this set of rules applies. Use "all" if the check type searches by name by relying on international databases
 */
export declare enum CreateConfigInputCountryEnum {
    All = "ALL",
    Br = "BR",
    Cl = "CL",
    Co = "CO",
    Cr = "CR",
    Ec = "EC",
    Mx = "MX",
    Pe = "PE",
    Ar = "AR"
}
/**
 * Represents paramaters required to create a score configuration
 */
export declare class CreateConfigInput extends SpeakeasyBase {
    /**
     * Country where this set of rules applies. Use "all" if the check type searches by name by relying on international databases
     */
    country: CreateConfigInputCountryEnum;
    /**
     * Affiliation and insurance weight for score calculation. From 0 to 1
     */
    datasetAffiliationsAndInsurances?: number;
    /**
     * Alert in media weight for score calculation. From 0 to 1
     */
    datasetAlertInMedia?: number;
    /**
     * Business background weight for score calculation. From 0 to 1
     */
    datasetBusinessBackground?: number;
    /**
     * Criminal record weight for score calculation. From 0 to 1
     */
    datasetCriminalRecord?: number;
    /**
     * Driving license weight for score calculation. From 0 to 1
     */
    datasetDrivingLicenses?: number;
    /**
     * International background weight for score calculation. From 0 to 1
     */
    datasetInternationalBackground?: number;
    /**
     * Legal background weight for score calculation. From 0 to 1
     */
    datasetLegalBackground?: number;
    /**
     * Personal identity weight for score calculation. From 0 to 1
     */
    datasetPersonalIdentity?: number;
    /**
     * Professional background weight for score calculation. From 0 to 1
     */
    datasetProfessionalBackground?: number;
    /**
     * Taxes and financial background weight for score calculation. From 0 to 1
     */
    datasetTaxesAndFinances?: number;
    /**
     * Traffic fines weight for score calculation. From 0 to 1
     */
    datasetTrafficFines?: number;
    /**
     * Vehicle information weight for score calculation. From 0 to 1
     */
    datasetVehicleInformation?: number;
    /**
     * Vehicle certificate background weight for score calculation. From 0 to 1
     */
    datasetVehiclePermits?: number;
    /**
     * Score configuration name. It cannot be person, vehicle, or company
     */
    type: string;
}
