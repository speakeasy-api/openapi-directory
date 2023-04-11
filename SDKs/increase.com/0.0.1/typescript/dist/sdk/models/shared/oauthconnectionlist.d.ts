import { SpeakeasyBase } from "../../../internal/utils";
import { OauthConnection } from "./oauthconnection";
/**
 * A list of OAuth Connection objects
 */
export declare class OauthConnectionList extends SpeakeasyBase {
    /**
     * The contents of the list.
     */
    data: OauthConnection[];
    /**
     * A pointer to a place in the list.
     */
    nextCursor: string;
}
