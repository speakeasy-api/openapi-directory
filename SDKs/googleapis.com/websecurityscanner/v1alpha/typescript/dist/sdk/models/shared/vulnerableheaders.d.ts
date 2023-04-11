import { SpeakeasyBase } from "../../../internal/utils";
import { Header } from "./header";
/**
 * Information about vulnerable or missing HTTP Headers.
 */
export declare class VulnerableHeaders extends SpeakeasyBase {
    /**
     * List of vulnerable headers.
     */
    headers?: Header[];
    /**
     * List of missing headers.
     */
    missingHeaders?: Header[];
}
