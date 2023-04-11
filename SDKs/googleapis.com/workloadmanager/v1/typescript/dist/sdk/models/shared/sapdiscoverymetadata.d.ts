import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message describing SAP discovery system metadata
 */
export declare class SapDiscoveryMetadata extends SpeakeasyBase {
    /**
     * Customer region string for customer's use. Does not represent GCP region.
     */
    customerRegion?: string;
    /**
     * Customer defined, something like "E-commerce pre prod"
     */
    definedSystem?: string;
    /**
     * Should be "prod", "QA", "dev", "staging", etc.
     */
    environmentType?: string;
    /**
     * This sap product name
     */
    sapProduct?: string;
}
