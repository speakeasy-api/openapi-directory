import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClusterConfigurationRouting extends SpeakeasyBase {
    /**
     * Cost per meter (travel distance)
     */
    costPerMeter?: number;
    /**
     * Cost per second (travel time)
     */
    costPerSecond?: number;
    /**
     * The routing profile for which the travel times and distances should be calculated. Other profiles are listed [here](#section/Map-Data-and-Routing-Profiles/OpenStreetMap)
     */
    profile?: string;
}
