import { SpeakeasyBase } from "../../../internal/utils";
import { AppProfile } from "./appprofile";
/**
 * Response message for BigtableInstanceAdmin.ListAppProfiles.
 */
export declare class ListAppProfilesResponse extends SpeakeasyBase {
    /**
     * The list of requested app profiles.
     */
    appProfiles?: AppProfile[];
    /**
     * Locations from which AppProfile information could not be retrieved, due to an outage or some other transient condition. AppProfiles from these locations may be missing from `app_profiles`. Values are of the form `projects//locations/`
     */
    failedLocations?: string[];
    /**
     * Set if not all app profiles could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.
     */
    nextPageToken?: string;
}
