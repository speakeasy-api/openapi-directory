import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A First Mile account information request body
 */
export declare class ConnectFirstmileRequestBody extends SpeakeasyBase {
    /**
     * A string that uniquely identifies the mailer
     */
    mailerId: string;
    /**
     * Nickname
     */
    nickname: string;
    /**
     * Password
     */
    password: string;
    /**
     * Profile name
     */
    profileName?: string;
}
