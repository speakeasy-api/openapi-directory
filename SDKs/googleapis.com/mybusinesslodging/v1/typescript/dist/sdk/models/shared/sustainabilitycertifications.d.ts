import { SpeakeasyBase } from "../../../internal/utils";
import { EcoCertification } from "./ecocertification";
/**
 * BREEAM certification.
 */
export declare enum SustainabilityCertificationsBreeamCertificationEnum {
    BreeamCertificationUnspecified = "BREEAM_CERTIFICATION_UNSPECIFIED",
    NoBreeamCertification = "NO_BREEAM_CERTIFICATION",
    BreeamPass = "BREEAM_PASS",
    BreeamGood = "BREEAM_GOOD",
    BreeamVeryGood = "BREEAM_VERY_GOOD",
    BreeamExcellent = "BREEAM_EXCELLENT",
    BreeamOutstanding = "BREEAM_OUTSTANDING"
}
/**
 * BREEAM certification exception.
 */
export declare enum SustainabilityCertificationsBreeamCertificationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * LEED certification. Deprecated: this field is no longer populated. LEED certification status is now provided directly by USGBC.
 */
export declare enum SustainabilityCertificationsLeedCertificationEnum {
    LeedCertificationUnspecified = "LEED_CERTIFICATION_UNSPECIFIED",
    NoLeedCertification = "NO_LEED_CERTIFICATION",
    LeedCertified = "LEED_CERTIFIED",
    LeedSilver = "LEED_SILVER",
    LeedGold = "LEED_GOLD",
    LeedPlatinum = "LEED_PLATINUM"
}
/**
 * LEED certification exception. Deprecated: this field is no longer populated. LEED certification status is now provided directly by USGBC.
 */
export declare enum SustainabilityCertificationsLeedCertificationExceptionEnum {
    ExceptionUnspecified = "EXCEPTION_UNSPECIFIED",
    UnderConstruction = "UNDER_CONSTRUCTION",
    DependentOnSeason = "DEPENDENT_ON_SEASON",
    DependentOnDayOfWeek = "DEPENDENT_ON_DAY_OF_WEEK"
}
/**
 * Sustainability certifications the hotel has been awarded.
 */
export declare class SustainabilityCertifications extends SpeakeasyBase {
    /**
     * BREEAM certification.
     */
    breeamCertification?: SustainabilityCertificationsBreeamCertificationEnum;
    /**
     * BREEAM certification exception.
     */
    breeamCertificationException?: SustainabilityCertificationsBreeamCertificationExceptionEnum;
    /**
     * The eco certificates awarded to the hotel.
     */
    ecoCertifications?: EcoCertification[];
    /**
     * LEED certification. Deprecated: this field is no longer populated. LEED certification status is now provided directly by USGBC.
     */
    leedCertification?: SustainabilityCertificationsLeedCertificationEnum;
    /**
     * LEED certification exception. Deprecated: this field is no longer populated. LEED certification status is now provided directly by USGBC.
     */
    leedCertificationException?: SustainabilityCertificationsLeedCertificationExceptionEnum;
}
