import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Logging variant deployed on nodes.
 */
export declare enum LoggingVariantConfigVariantEnum {
    VariantUnspecified = "VARIANT_UNSPECIFIED",
    Default = "DEFAULT",
    MaxThroughput = "MAX_THROUGHPUT"
}
/**
 * LoggingVariantConfig specifies the behaviour of the logging component.
 */
export declare class LoggingVariantConfig extends SpeakeasyBase {
    /**
     * Logging variant deployed on nodes.
     */
    variant?: LoggingVariantConfigVariantEnum;
}
