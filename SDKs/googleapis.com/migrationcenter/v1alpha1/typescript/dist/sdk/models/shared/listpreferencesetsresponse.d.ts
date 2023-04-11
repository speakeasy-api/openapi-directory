import { SpeakeasyBase } from "../../../internal/utils";
import { PreferenceSet } from "./preferenceset";
/**
 * Response message for listing preference sets.
 */
export declare class ListPreferenceSetsResponse extends SpeakeasyBase {
    /**
     * A token identifying a page of results the server should return.
     */
    nextPageToken?: string;
    /**
     * The list of PreferenceSets
     */
    preferenceSets?: PreferenceSet[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
