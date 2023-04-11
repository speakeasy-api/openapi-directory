import { SpeakeasyBase } from "../../../internal/utils";
import { CounterStructuredNameAndMetadata } from "./counterstructurednameandmetadata";
import { DistributionUpdate } from "./distributionupdate";
import { FloatingPointList } from "./floatingpointlist";
import { FloatingPointMean } from "./floatingpointmean";
import { IntegerGauge } from "./integergauge";
import { IntegerList } from "./integerlist";
import { IntegerMean } from "./integermean";
import { NameAndKind } from "./nameandkind";
import { SplitInt64 } from "./splitint64";
import { StringList } from "./stringlist";
/**
 * An update to a Counter sent from a worker.
 */
export declare class CounterUpdate extends SpeakeasyBase {
    /**
     * Boolean value for And, Or.
     */
    boolean?: boolean;
    /**
     * True if this counter is reported as the total cumulative aggregate value accumulated since the worker started working on this WorkItem. By default this is false, indicating that this counter is reported as a delta.
     */
    cumulative?: boolean;
    /**
     * A metric value representing a distribution.
     */
    distribution?: DistributionUpdate;
    /**
     * Floating point value for Sum, Max, Min.
     */
    floatingPoint?: number;
    /**
     * A metric value representing a list of floating point numbers.
     */
    floatingPointList?: FloatingPointList;
    /**
     * A representation of a floating point mean metric contribution.
     */
    floatingPointMean?: FloatingPointMean;
    /**
     * A representation of an int64, n, that is immune to precision loss when encoded in JSON.
     */
    integer?: SplitInt64;
    /**
     * A metric value representing temporal values of a variable.
     */
    integerGauge?: IntegerGauge;
    /**
     * A metric value representing a list of integers.
     */
    integerList?: IntegerList;
    /**
     * A representation of an integer mean metric contribution.
     */
    integerMean?: IntegerMean;
    /**
     * Value for internally-defined counters used by the Dataflow service.
     */
    internal?: any;
    /**
     * Basic metadata about a counter.
     */
    nameAndKind?: NameAndKind;
    /**
     * The service-generated short identifier for this counter. The short_id -> (name, metadata) mapping is constant for the lifetime of a job.
     */
    shortId?: string;
    /**
     * A metric value representing a list of strings.
     */
    stringList?: StringList;
    /**
     * A single message which encapsulates structured name and metadata for a given counter.
     */
    structuredNameAndMetadata?: CounterStructuredNameAndMetadata;
}
