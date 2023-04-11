import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Commitment for a particular license resource.
 */
export declare class LicenseResourceCommitment extends SpeakeasyBase {
    /**
     * The number of licenses purchased.
     */
    amount?: string;
    /**
     * Specifies the core range of the instance for which this license applies.
     */
    coresPerLicense?: string;
    /**
     * Any applicable license URI.
     */
    license?: string;
}
