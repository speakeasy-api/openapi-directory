import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointDailyMorningCloudCoverData extends SpeakeasyBase {
    /**
     * Percentage of sky covered by high clouds. (morning avg)
     *
     * @remarks
     * Unit: \%
     */
    high?: number;
    /**
     * Percentage of sky covered by low clouds. (morning avg)
     *
     * @remarks
     * Unit: \%
     */
    low?: number;
    /**
     * Percentage of sky covered by middle clouds. (morning avg)
     *
     * @remarks
     * Unit: \%
     */
    middle?: number;
    /**
     * Percentage of sky covered by clouds. (morning avg)
     *
     * @remarks
     * Unit: \%
     */
    total?: number;
}
