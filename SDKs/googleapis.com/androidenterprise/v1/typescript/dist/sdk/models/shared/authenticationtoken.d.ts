import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.
 */
export declare class AuthenticationToken extends SpeakeasyBase {
    /**
     * The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated.
     */
    token?: string;
}
