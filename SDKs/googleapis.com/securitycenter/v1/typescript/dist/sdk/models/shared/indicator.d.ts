import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessSignature } from "./processsignature";
/**
 * Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. For more information, see [Indicator of compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise).
 */
export declare class Indicator extends SpeakeasyBase {
    /**
     * List of domains associated to the Finding.
     */
    domains?: string[];
    /**
     * The list of IP addresses that are associated with the finding.
     */
    ipAddresses?: string[];
    /**
     * The list of matched signatures indicating that the given process is present in the environment.
     */
    signatures?: ProcessSignature[];
    /**
     * The list of URIs associated to the Findings.
     */
    uris?: string[];
}
