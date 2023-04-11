import { SpeakeasyBase } from "../../../internal/utils";
import { V3DisruptionRoute } from "./v3disruptionroute";
import { V3DisruptionStop } from "./v3disruptionstop";
export declare class V3Disruption extends SpeakeasyBase {
    colour?: string;
    /**
     * Description of the disruption
     */
    description?: string;
    displayOnBoard?: boolean;
    displayStatus?: boolean;
    /**
     * Disruption information identifier
     */
    disruptionId?: number;
    /**
     * Status of the disruption (e.g. "Planned", "Current")
     */
    disruptionStatus?: string;
    /**
     * Type of disruption
     */
    disruptionType?: string;
    /**
     * Date and time at which disruption begins, in ISO 8601 UTC format
     */
    fromDate?: Date;
    /**
     * Date and time disruption information was last updated by PTV, in ISO 8601 UTC format
     */
    lastUpdated?: Date;
    /**
     * Date and time disruption information is published on PTV website, in ISO 8601 UTC format
     */
    publishedOn?: Date;
    /**
     * Route relevant to a disruption (if applicable)
     */
    routes?: V3DisruptionRoute[];
    /**
     * Stop relevant to a disruption (if applicable)
     */
    stops?: V3DisruptionStop[];
    /**
     * Headline title summarising disruption information
     */
    title?: string;
    /**
     * Date and time at which disruption ends, in ISO 8601 UTC format (returns null if unknown)
     */
    toDate?: Date;
    /**
     * URL of relevant article on PTV website
     */
    url?: string;
}
