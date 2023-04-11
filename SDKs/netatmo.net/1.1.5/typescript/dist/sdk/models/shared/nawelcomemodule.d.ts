import { SpeakeasyBase } from "../../../internal/utils";
export declare class NAWelcomeModule extends SpeakeasyBase {
    /**
     * remaining battery percentage
     */
    batteryPercent?: number;
    /**
     * mac address of the module
     */
    id?: string;
    /**
     * Timestamp of last move detected by the module
     */
    lastActivity?: number;
    /**
     * name of the module (given by the user)
     */
    name?: string;
    /**
     * Radio status
     */
    rf?: string;
    /**
     * status of the module
     */
    status?: string;
    /**
     * NACamDoorTag for tags
     */
    type?: string;
}
