import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1Room } from "./googlehomeenterprisesdmv1room";
/**
 * Response message for SmartDeviceManagementService.ListRooms
 */
export declare class GoogleHomeEnterpriseSdmV1ListRoomsResponse extends SpeakeasyBase {
    /**
     * The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of rooms.
     */
    rooms?: GoogleHomeEnterpriseSdmV1Room[];
}
