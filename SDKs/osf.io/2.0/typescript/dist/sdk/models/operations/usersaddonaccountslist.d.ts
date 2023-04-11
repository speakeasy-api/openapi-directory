import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersAddonAccountsListRequest extends SpeakeasyBase {
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
 * The properties of the addon account entity.
 */
export declare class UsersAddonAccountsListAddonAccountAttributes extends SpeakeasyBase {
    /**
     * The user's display name on the third-party service
     */
    displayName: string;
    /**
     * The link to user's profile on third-party service
     */
    profileUrl?: string;
    /**
     * The short name of the third-party service
     */
    provider: string;
}
/**
 * URLs to alternative representations of the addon account entity.
 */
export declare class UsersAddonAccountsListAddonAccountLinks extends SpeakeasyBase {
    /**
     * The canonical api endpoint of this addon account
     */
    self?: string;
}
export declare class UsersAddonAccountsListAddonAccount extends SpeakeasyBase {
    /**
     * The properties of the addon account entity.
     */
    attributes: UsersAddonAccountsListAddonAccountAttributes;
    /**
     * The unique identifier of the addon account entity.
     */
    id: string;
    /**
     * URLs to alternative representations of the addon account entity.
     */
    links: UsersAddonAccountsListAddonAccountLinks;
    /**
     * The type identifier of the addon account entity (`external_accounts`).
     */
    type: string;
}
export declare class UsersAddonAccountsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
