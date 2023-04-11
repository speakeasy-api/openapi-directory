import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for kafka access
 */
export declare class KafkaConfig extends SpeakeasyBase {
    /**
     * Optional keypass
     */
    keyPass?: string;
    /**
     * Optional path to keystore
     */
    keyStore?: string;
    /**
     * URLs of the kafka servers
     */
    servers: string[];
    /**
     * Optional kafka topic (otoroshi-events by default)
     */
    topic?: string;
    /**
     * Optional path to trustore
     */
    trustore?: string;
}
