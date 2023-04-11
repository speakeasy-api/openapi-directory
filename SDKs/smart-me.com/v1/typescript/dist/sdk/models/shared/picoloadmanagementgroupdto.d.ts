import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DTO for the pico loadmanagement group
 */
export declare class PicoLoadmanagementGroupDto extends SpeakeasyBase {
    /**
     * The ID of the loadmanagement group
     */
    id?: string;
    /**
     * The max current of this loadmanagement group
     */
    maxCurrent?: number;
    /**
     * The name of the station
     */
    name?: string;
    /**
     * The number of assigned stations
     */
    numberOfStations?: number;
}
