import { Deprecated } from "./deprecated";
import { Healthyhomecoach } from "./healthyhomecoach";
import { Partner } from "./partner";
import { Public } from "./public";
import { Station } from "./station";
import { Thermostat } from "./thermostat";
import { Welcome } from "./welcome";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.netatmo.net/api"];
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
 * <h3>Welcome to the Netatmo swagger on-line documentation !</h3>
 *
 * @remarks
 * This site is a complement to the official <a href="https://dev.netatmo.com/">Netatmo developper documentation</a> using swagger to bring interactivity and easy testing of requests with the "try it" button (authenticate with the authorization code OAuth2 flow by clicking the authenticate button in the methods). You can find the source code for this site can be found in the project <a href="https://github.com/cbornet/netatmo-swagger-ui">netatmo-swagger-ui</a>. You can also use the online <a href="./swagger.json">swagger declaration</a> file to generate code or static documentation (see <a href="https://github.com/cbornet/netatmo-swagger-api">netatmo-swagger-api</a>).
 *
 *
 * @see {@link https://dev.netatmo.com/dev/resources/technical/reference} - Netatmo reference API documentation
 */
export declare class SDK {
    /**
     * These methods are no longer maintained nor supported
     */
    deprecated: Deprecated;
    /**
     * Healthy Home Coach specific methods
     */
    healthyhomecoach: Healthyhomecoach;
    /**
     * Partner API specific methods
     */
    partner: Partner;
    /**
     * Public stations specific methods
     */
    public: Public;
    /**
     * Weather station specific methods
     */
    station: Station;
    /**
     * Thermostat specific methods
     */
    thermostat: Thermostat;
    /**
     * Welcome specific methods
     */
    welcome: Welcome;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
