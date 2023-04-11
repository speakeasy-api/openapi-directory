import { SpeakeasyBase } from "../../../internal/utils";
import { ValueData } from "./valuedata";
/**
 * API Container for a Meter Value
 */
export declare class ValuesData extends SpeakeasyBase {
    /**
     * The Date of the Value
     */
    date?: Date;
    /**
     * The ID of the device
     */
    deviceId?: string;
    /**
     * All values
     */
    values?: ValueData[];
}
