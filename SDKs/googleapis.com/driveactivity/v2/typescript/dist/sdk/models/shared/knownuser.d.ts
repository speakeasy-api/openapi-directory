import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A known user.
 */
export declare class KnownUser extends SpeakeasyBase {
    /**
     * True if this is the user making the request.
     */
    isCurrentUser?: boolean;
    /**
     * The identifier for this user that can be used with the People API to get more information. The format is `people/ACCOUNT_ID`. See https://developers.google.com/people/.
     */
    personName?: string;
}
