import { SpeakeasyBase } from "../../../internal/utils";
export declare class BusinessHourInputModel extends SpeakeasyBase {
    /**
     * endTime is entered in military format. e.g. 1800 = 6pm end, 2400 = midnight end of day.
     *
     * @remarks
     * For 24 hours enter startTime = 0 and endTime = 2400
     */
    endTime?: number;
    /**
     * If true then available for 24 hours. startTime must be zero and endTime must be 2400.
     */
    is24Hours?: boolean;
    /**
     * If false, then not available entire day, starTime and endTime must both be zero. If true, then available between startTime and endTime.
     */
    isOpen?: boolean;
    /**
     * startTime is entered in military format. e.g. 0 = midnight start, 900 = 9am start
     */
    startTime?: number;
}
