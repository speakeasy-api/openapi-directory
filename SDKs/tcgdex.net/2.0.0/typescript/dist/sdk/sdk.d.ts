import { Cards } from "./cards";
import { Filters } from "./filters";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.tcgdex.net/v2/{lang}"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * A Multilanguage Pokémon TCG Database with Cards Pictures and most of the informations contained on the cards.
 *
 * @remarks
 * You can find out more about TCGdex at [https://www.tcgdex.net](https://www.tcgdex.net) or on [Discord](https://discord.gg/NehYTAhsZE).
 *
 * @see {@link http://www.tcgdex.net/docs} - Find out more about TCGdex
 */
export declare class SDK {
    /**
     * Fetch cards globally
     */
    cards: Cards;
    /**
     * differents requests to filter cards
     */
    filters: Filters;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
