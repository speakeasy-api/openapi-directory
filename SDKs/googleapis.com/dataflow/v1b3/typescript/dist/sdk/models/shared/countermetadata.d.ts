import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Counter aggregation kind.
 */
export declare enum CounterMetadataKindEnum {
    Invalid = "INVALID",
    Sum = "SUM",
    Max = "MAX",
    Min = "MIN",
    Mean = "MEAN",
    Or = "OR",
    And = "AND",
    Set = "SET",
    Distribution = "DISTRIBUTION",
    LatestValue = "LATEST_VALUE"
}
/**
 * System defined Units, see above enum.
 */
export declare enum CounterMetadataStandardUnitsEnum {
    Bytes = "BYTES",
    BytesPerSec = "BYTES_PER_SEC",
    Milliseconds = "MILLISECONDS",
    Microseconds = "MICROSECONDS",
    Nanoseconds = "NANOSECONDS",
    TimestampMsec = "TIMESTAMP_MSEC",
    TimestampUsec = "TIMESTAMP_USEC",
    TimestampNsec = "TIMESTAMP_NSEC"
}
/**
 * CounterMetadata includes all static non-name non-value counter attributes.
 */
export declare class CounterMetadata extends SpeakeasyBase {
    /**
     * Human-readable description of the counter semantics.
     */
    description?: string;
    /**
     * Counter aggregation kind.
     */
    kind?: CounterMetadataKindEnum;
    /**
     * A string referring to the unit type.
     */
    otherUnits?: string;
    /**
     * System defined Units, see above enum.
     */
    standardUnits?: CounterMetadataStandardUnitsEnum;
}
