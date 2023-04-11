import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointDailyAllDayCloudCoverData extends SpeakeasyBase {
    /**
     * Percentage of sky covered by high clouds. (allday avg)
     *
     * @remarks
     * Unit: \%
     */
    high?: number;
    /**
     * Percentage of sky covered by low clouds. (allday avg)
     *
     * @remarks
     * Unit: \%
     */
    low?: number;
    /**
     * Percentage of sky covered by middle clouds. (allday avg)
     *
     * @remarks
     * Unit: \%
     */
    middle?: number;
    /**
     * Percentage of sky covered by clouds. (allday avg)
     *
     * @remarks
     * Unit: \%
     */
    total?: number;
}
