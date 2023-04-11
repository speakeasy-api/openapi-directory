import { SpeakeasyBase } from "../../../internal/utils";
export declare class KeyUsageResultDailyCount extends SpeakeasyBase {
    count: number;
    date: string;
}
export declare class KeyUsageResult extends SpeakeasyBase {
    /**
     * An array of objects representing number of paid lookups made on specific days, ordered by date. Each object contains a `date` attribute, which represents the day and a `count` attribute, which represents the number of paid lookups made on that day.
     *
     * @remarks
     *
     */
    dailyCount: KeyUsageResultDailyCount[];
    /**
     * End date in ISO 8601 format.
     */
    end: string;
    /**
     * Start date in ISO 8601 format.
     */
    start: string;
    /**
     * Total of paid lookups performed in specified period.
     */
    total: number;
}
