import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeMachinePointDailyStatsPrecipitationData extends SpeakeasyBase {
    /**
     * Long-term average daily precipitation amount.
     *
     * @remarks
     * Units: metric = mm/day, us = inches per day, uk = mm/day, ca = mm/day
     */
    avg?: number;
    /**
     * Long-term average precipitation probability.
     *
     * @remarks
     * Unit: \%
     */
    probability?: number;
}
