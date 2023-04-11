import { SpeakeasyBase } from "../../../internal/utils";
import { PointPointMinutelyPrecipitationData } from "./pointpointminutelyprecipitationdata";
export declare class PointPointMinutely extends SpeakeasyBase {
    data: PointPointMinutelyPrecipitationData[];
    /**
     * Text summary about upcoming precipitation.
     *
     * @remarks
     * Unit: summary
     */
    summary?: string;
}
