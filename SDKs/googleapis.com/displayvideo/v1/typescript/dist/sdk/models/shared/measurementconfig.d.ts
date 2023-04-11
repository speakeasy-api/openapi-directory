import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Measurement settings of a partner.
 */
export declare class MeasurementConfig extends SpeakeasyBase {
    /**
     * Whether or not to report DV360 cost to CM360.
     */
    dv360ToCmCostReportingEnabled?: boolean;
    /**
     * Whether or not to include DV360 data in CM360 data transfer reports.
     */
    dv360ToCmDataSharingEnabled?: boolean;
}
