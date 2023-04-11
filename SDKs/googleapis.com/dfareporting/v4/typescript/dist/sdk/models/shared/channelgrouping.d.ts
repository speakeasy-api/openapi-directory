import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelGroupingRule } from "./channelgroupingrule";
/**
 * Represents a DfaReporting channel grouping.
 */
export declare class ChannelGrouping extends SpeakeasyBase {
    /**
     * ChannelGrouping fallback name.
     */
    fallbackName?: string;
    /**
     * The kind of resource this is, in this case dfareporting#channelGrouping.
     */
    kind?: string;
    /**
     * ChannelGrouping name.
     */
    name?: string;
    /**
     * The rules contained within this channel grouping.
     */
    rules?: ChannelGroupingRule[];
}
