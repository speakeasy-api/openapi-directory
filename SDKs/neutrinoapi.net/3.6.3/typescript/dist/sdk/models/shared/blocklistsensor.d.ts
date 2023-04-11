import { SpeakeasyBase } from "../../../internal/utils";
export declare class BlocklistSensor extends SpeakeasyBase {
    /**
     * The primary blocklist category this sensor belongs to
     */
    blocklist: string;
    /**
     * Contains details about the sensor source and what type of malicious activity was detected
     */
    description: string;
    /**
     * The sensor ID. This is a permanent and unique ID for each sensor
     */
    id: number;
}
