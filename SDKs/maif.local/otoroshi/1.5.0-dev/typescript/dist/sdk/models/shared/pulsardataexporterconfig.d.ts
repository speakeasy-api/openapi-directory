import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for kafka access
 */
export declare class PulsarDataExporterConfig extends SpeakeasyBase {
    /**
     * Namespace
     */
    namespace: string;
    /**
     * Tenant
     */
    tenant: string;
    /**
     * Topic
     */
    topic: string;
    /**
     * URI of the pulsar server
     */
    uri: string[];
}
