import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class StartPageToken extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "drive#startPageToken".
     */
    kind?: string;
    /**
     * The starting page token for listing changes.
     */
    startPageToken?: string;
}
