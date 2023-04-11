import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains compliance information about a security standard indicating unmet recommendations.
 */
export declare class Compliance extends SpeakeasyBase {
    /**
     * Policies within the standard/benchmark e.g. A.12.4.1
     */
    ids?: string[];
    /**
     * Refers to industry wide standards or benchmarks e.g. "cis", "pci", "owasp", etc.
     */
    standard?: string;
    /**
     * Version of the standard/benchmark e.g. 1.1
     */
    version?: string;
}
