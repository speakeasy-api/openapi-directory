import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data type and value of a parameter.
 */
export declare class GoogleCloudChannelV1Value extends SpeakeasyBase {
    /**
     * Represents a boolean value.
     */
    boolValue?: boolean;
    /**
     * Represents a double value.
     */
    doubleValue?: number;
    /**
     * Represents an int64 value.
     */
    int64Value?: string;
    /**
     * Represents an 'Any' proto value.
     */
    protoValue?: Record<string, any>;
    /**
     * Represents a string value.
     */
    stringValue?: string;
}
