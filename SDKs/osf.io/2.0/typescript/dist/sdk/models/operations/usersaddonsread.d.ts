import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersAddonsReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the addon provider.
     */
    provider: string;
    /**
     * The unique identifier of the user.
     */
    userId: string;
}
/**
 * The properties of the user addon entity.
 */
export declare class UsersAddonsReadUserAddonAttributes extends SpeakeasyBase {
    /**
     * Whether or not the user has access to this user addon.
     */
    userHasAuth: boolean;
}
/**
 * URLs to alternative representations of the user addon entity.
 */
export declare class UsersAddonsReadUserAddonLinks extends SpeakeasyBase {
    /**
     * A dictionary with addon_account id as key, an array of connected nodes and link to user account as value
     */
    accounts?: Record<string, any>;
    /**
     * The canonical API endpoint to this user addon.
     */
    self?: string;
}
/**
 * OK
 */
export declare class UsersAddonsReadUserAddon extends SpeakeasyBase {
    /**
     * The properties of the user addon entity.
     */
    attributes: UsersAddonsReadUserAddonAttributes;
    /**
     * The unique identifier of the user addon entity.
     */
    id: string;
    /**
     * URLs to alternative representations of the user addon entity.
     */
    links: UsersAddonsReadUserAddonLinks;
    /**
     * The type identifier of the user addon entity (`user_addons`).
     */
    type: string;
}
export declare class UsersAddonsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
