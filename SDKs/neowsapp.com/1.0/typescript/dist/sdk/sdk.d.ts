import { Feed } from "./feed";
import { Neo } from "./neo";
import { Neosentry } from "./neosentry";
import { Stats } from "./stats";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://www.neowsapp.com/"];
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
 * A web service for near earth objects. All the data is from the <a href="http://neo.jpl.nasa.gov/" target="_blank">NASA JPL Asteroid team</a>.
 *
 * @remarks
 *
 *
 *
 * NeoWs is proud to power AsteroidTracker on <a href="https://itunes.apple.com/us/app/asteroid-tracker/id689684901?mt=8" target="_blank">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.vitruviussoftware.bunifish.asteroidtracker&feature" target="_blank">Android</a> as well as related apps.
 *
 *  Follow us on <a href="https://twitter.com/AsteroidTracker" target="_blank">Twitter</a>
 */
export declare class SDK {
    /**
     * Operations with NearEarthObjects
     */
    feed: Feed;
    /**
     * Operations with NearEarthObjects
     */
    neo: Neo;
    /**
     * Operations with Sentry NearEarthObjects
     */
    neosentry: Neosentry;
    /**
     * Stats on Near Earth Object data sets
     */
    stats: Stats;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
