import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedFetchSchedule } from "./datafeedfetchschedule";
import { DatafeedFormat } from "./datafeedformat";
import { DatafeedTarget } from "./datafeedtarget";
/**
 * Datafeed configuration data.
 */
export declare class Datafeed extends SpeakeasyBase {
    /**
     * The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
     */
    attributeLanguage?: string;
    /**
     * Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`"
     */
    contentType?: string;
    /**
     * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
     */
    fetchSchedule?: DatafeedFetchSchedule;
    /**
     * Required. The filename of the feed. All feeds must have a unique file name.
     */
    fileName?: string;
    format?: DatafeedFormat;
    /**
     * Required for update. The ID of the data feed.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`"
     */
    kind?: string;
    /**
     * Required for insert. A descriptive name of the data feed.
     */
    name?: string;
    /**
     * The targets this feed should apply to (country, language, destinations).
     */
    targets?: DatafeedTarget[];
}
