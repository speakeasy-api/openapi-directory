import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The license type that was used in OS adaptation.
 */
export declare enum AppliedLicenseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    None = "NONE",
    Payg = "PAYG",
    Byol = "BYOL"
}
/**
 * AppliedLicense holds the license data returned by adaptation module report.
 */
export declare class AppliedLicense extends SpeakeasyBase {
    /**
     * The OS license returned from the adaptation module's report.
     */
    osLicense?: string;
    /**
     * The license type that was used in OS adaptation.
     */
    type?: AppliedLicenseTypeEnum;
}
