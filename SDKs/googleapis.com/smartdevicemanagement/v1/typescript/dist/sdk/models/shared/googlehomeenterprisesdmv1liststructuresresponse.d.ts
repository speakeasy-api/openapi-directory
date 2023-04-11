import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleHomeEnterpriseSdmV1Structure } from "./googlehomeenterprisesdmv1structure";
/**
 * Response message for SmartDeviceManagementService.ListStructures
 */
export declare class GoogleHomeEnterpriseSdmV1ListStructuresResponse extends SpeakeasyBase {
    /**
     * The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of structures.
     */
    structures?: GoogleHomeEnterpriseSdmV1Structure[];
}
