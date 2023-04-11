import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Api container for the charging station history
 */
export declare class PicoChargingHistoryData extends SpeakeasyBase {
    /**
     * The duration in seconds
     */
    duration?: number;
    /**
     * The energy used (in kWh)
     */
    energyUsed?: number;
    /**
     * The starttime of the charging (in UTC)
     */
    startTime?: Date;
}
