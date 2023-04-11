import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A token authorizing an admin to access an iframe.
 */
export declare class AdministratorWebToken extends SpeakeasyBase {
    /**
     * An opaque token to be passed to the Play front-end to generate an iframe.
     */
    token?: string;
}
