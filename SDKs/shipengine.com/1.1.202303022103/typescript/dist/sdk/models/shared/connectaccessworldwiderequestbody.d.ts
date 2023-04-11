import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Access Worldwide account information request body
 */
export declare class ConnectAccessWorldwideRequestBody extends SpeakeasyBase {
    /**
     * The nickname associated with the carrier connection
     */
    nickname: string;
    /**
     * Access Worldwide Password
     */
    password: string;
    /**
     * Access Worldwide Username
     */
    username: string;
}
