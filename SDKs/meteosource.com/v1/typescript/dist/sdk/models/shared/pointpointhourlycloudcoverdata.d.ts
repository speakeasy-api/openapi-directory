import { SpeakeasyBase } from "../../../internal/utils";
export declare class PointPointHourlyCloudCoverData extends SpeakeasyBase {
    /**
     * Percentage of sky covered by high clouds.
     *
     * @remarks
     * Unit: \%
     */
    high?: number;
    /**
     * Percentage of sky covered by low clouds.
     *
     * @remarks
     * Unit: \%
     */
    low?: number;
    /**
     * Percentage of sky covered by middle clouds.
     *
     * @remarks
     * Unit: \%
     */
    middle?: number;
    /**
     * Unit: \%
     */
    total?: number;
}
