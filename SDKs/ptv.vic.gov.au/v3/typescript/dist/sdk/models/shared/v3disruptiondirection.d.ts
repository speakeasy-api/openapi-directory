import { SpeakeasyBase } from "../../../internal/utils";
export declare class V3DisruptionDirection extends SpeakeasyBase {
    /**
     * Direction of travel identifier
     */
    directionId?: number;
    /**
     * Name of direction of travel
     */
    directionName?: string;
    /**
     * Route and direction of travel combination identifier
     */
    routeDirectionId?: number;
    /**
     * Time of service to which disruption applies, in 24 hour clock format (HH:MM:SS) AEDT/AEST; returns null if disruption applies to multiple (or no) services
     */
    serviceTime?: string;
}
