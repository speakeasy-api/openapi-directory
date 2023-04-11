import { SpeakeasyBase } from "../../../internal/utils";
import { PathReportDimensionValue } from "./pathreportdimensionvalue";
import { UvarFilter } from "./uvarfilter";
/**
 * Represents a DfaReporting event filter.
 */
export declare class EventFilter extends SpeakeasyBase {
    /**
     * Represents a PathReportDimensionValue resource.
     */
    dimensionFilter?: PathReportDimensionValue;
    /**
     * The kind of resource this is, in this case dfareporting#eventFilter.
     */
    kind?: string;
    /**
     * Defines the filtering on a single uvar.
     */
    uvarFilter?: UvarFilter;
}
