import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Response of getting account information.
 */
export declare class GetAccountInfoResponse extends SpeakeasyBase {
    /**
     * The fixed string "identitytoolkit#GetAccountInfoResponse".
     */
    kind?: string;
    /**
     * The info of the users.
     */
    users?: UserInfo[];
}
