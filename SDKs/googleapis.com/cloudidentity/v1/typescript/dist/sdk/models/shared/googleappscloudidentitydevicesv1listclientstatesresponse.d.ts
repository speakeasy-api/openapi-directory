import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1ClientState } from "./googleappscloudidentitydevicesv1clientstate";
/**
 * Response message that is returned in ListClientStates.
 */
export declare class GoogleAppsCloudidentityDevicesV1ListClientStatesResponse extends SpeakeasyBase {
    /**
     * Client states meeting the list restrictions.
     */
    clientStates?: GoogleAppsCloudidentityDevicesV1ClientState[];
    /**
     * Token to retrieve the next page of results. Empty if there are no more results.
     */
    nextPageToken?: string;
}
