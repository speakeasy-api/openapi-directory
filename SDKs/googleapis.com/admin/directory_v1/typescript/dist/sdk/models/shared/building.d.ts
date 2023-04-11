import { SpeakeasyBase } from "../../../internal/utils";
import { BuildingAddress } from "./buildingaddress";
import { BuildingCoordinates } from "./buildingcoordinates";
/**
 * Public API: Resources.buildings
 */
export declare class Building extends SpeakeasyBase {
    /**
     * Public API: Resources.buildings
     */
    address?: BuildingAddress;
    /**
     * Unique identifier for the building. The maximum length is 100 characters.
     */
    buildingId?: string;
    /**
     * The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.
     */
    buildingName?: string;
    /**
     * Public API: Resources.buildings
     */
    coordinates?: BuildingCoordinates;
    /**
     * A brief description of the building. For example, "Chelsea Market".
     */
    description?: string;
    /**
     * ETag of the resource.
     */
    etags?: string;
    /**
     * The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.
     */
    floorNames?: string[];
    /**
     * Kind of resource this is.
     */
    kind?: string;
}
