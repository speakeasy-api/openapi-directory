import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sequence's parent is a schema.
 */
export declare class SequenceEntity extends SpeakeasyBase {
    /**
     * Indicates number of entries to cache / precreate.
     */
    cache?: string;
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * Indicates whether the sequence value should cycle through.
     */
    cycle?: boolean;
    /**
     * Increment value for the sequence.
     */
    increment?: string;
    /**
     * Maximum number for the sequence represented as bytes to accommodate large. numbers
     */
    maxValue?: string;
    /**
     * Minimum number for the sequence represented as bytes to accommodate large. numbers
     */
    minValue?: string;
    /**
     * Start number for the sequence represented as bytes to accommodate large. numbers
     */
    startValue?: string;
}
