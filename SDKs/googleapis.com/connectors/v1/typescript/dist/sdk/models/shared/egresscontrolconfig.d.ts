import { SpeakeasyBase } from "../../../internal/utils";
import { ExtractionRules } from "./extractionrules";
/**
 * Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.
 */
export declare class EgressControlConfig extends SpeakeasyBase {
    /**
     * Static Comma separated backends which are common for all Connection resources. Supported formats for each backend are host:port or just host (host can be ip address or domain name).
     */
    backends?: string;
    /**
     * Extraction Rules to identity the backends from customer provided configuration in Connection resource.
     */
    extractionRules?: ExtractionRules;
}
