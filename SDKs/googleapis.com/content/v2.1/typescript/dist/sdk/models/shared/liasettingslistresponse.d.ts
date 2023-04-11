import { SpeakeasyBase } from "../../../internal/utils";
import { LiaSettings } from "./liasettings";
/**
 * Successful response
 */
export declare class LiasettingsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListResponse`".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of LIA settings.
     */
    nextPageToken?: string;
    resources?: LiaSettings[];
}
