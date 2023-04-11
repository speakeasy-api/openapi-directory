import { Authinfo } from "./authinfo";
import { Blobs } from "./blobs";
import { Events } from "./events";
import { Items } from "./items";
import { Keys } from "./keys";
import { Kvpairs } from "./kvpairs";
import { Locationrules } from "./locationrules";
import { Locations } from "./locations";
import * as shared from "./models/shared";
import { Presences } from "./presences";
import { Services } from "./services";
import { Sets } from "./sets";
import { Spots } from "./spots";
import { Spotsets } from "./spotsets";
import { Subscriptions } from "./subscriptions";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://{protocol}://{customer}.intellifi.{tld}/api"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * This document describes the [Intellifi Brain](https://intellifi.zendesk.com/hc/en-us/categories/360000685454)
 *
 * @remarks
 * Web API specification using the [OpenAPI specification](https://github.com/OAI/OpenAPI-Specification).
 *
 * The Brain Web API is a RESTful API that allows you to interact with the
 * [Intellifi devices](https://intellifi.zendesk.com/hc/en-us/categories/360000685434) and
 * services in a powerful and simple way. Our end-to-end solution allows you to
 * localize your items/assets based on technologies such as RFID and Bluetooth.
 *
 * # Try it out!
 *
 * The API can be tried out and tested using the ['api-doc/tryitout' endpoint on this site](./tryitout/).
 * This UI allows anyone to visualize and interact with the API’s resources without having any of the implementation logic in place.
 * It’s automatically generated from this Specification, with the visual documentation making it easy for back end implementation and client side consumption.
 *
 * # Authentication
 *
 * Applications are required to provide some form of authentication to the API
 * for every secured endpoint. The Brain offers two forms of authentication.
 *
 * - API key (Via an HTTP request header or URL parameter)
 * - Session cookie
 *
 * <!-- ReDoc-Inject: <security-definitions> -->
 *
 * # See also
 *
 * - About Intellifi and what we do: [intellifi.nl](https://intellifi.nl)
 * - Technical and background information: [intellifi.zendesk.com](https://intellifi.zendesk.com)
 *
 *
 * @see {@link https://intellifi.zendesk.com} - Find out more
 */
export declare class SDK {
    /**
     * Read-only route providing information about how the requesting client is authenticated on the API, as well as corresponding permissions.
     *
     * @remarks
     *
     */
    authinfo: Authinfo;
    /**
     * The `blobs` resource provides a service for storing binary objects on the Brain, e.g. images.
     *
     * @remarks
     * Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.
     *
     * See also the `kvpairs` resource.
     *
     */
    blobs: Blobs;
    /**
     * The `events` resource temporarily holds Brain events that match an event subscription in the `subscriptions` resource.
     *
     * @remarks
     * The subscription determines how long the events are held.
     *
     * See also the `subscriptions` resource.
     *
     *
     * @see {@link https://intellifi.zendesk.com/hc/en-us/sections/360001588534}
     */
    events: Events;
    /**
     * The `items` resource contains data about things that can be tracked using the Brain.
     *
     * @remarks
     * When an item is detected for the first time by a device connected to the Brain, it will be added to this resource.
     * It will then be updated with information about where the item currently is, or where it has been seen for the last time.
     *
     *
     * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360007502554}
     */
    items: Items;
    /**
     * The `keys` resource contains the access keys used to authenticate requests to this API.
     *
     * @remarks
     *
     * Note that this resource is only accessible for administrator users logged into the Brain Management Console.
     * It is not possible to access this resource using API key authentication.
     * This resource is therefore irrelevant to most applications.
     *
     */
    keys: Keys;
    /**
     * The `kvpairs` resource provides a service for storing generic JSON key/value pairs on the Brain.
     *
     * @remarks
     * Intended for applications that interact with the Brain but do not or cannot have their own (centralized) persistent storage.
     *
     * See also the `blobs` resource.
     *
     */
    kvpairs: Kvpairs;
    /**
     * Location rules are directives for the localization engine that may be useful for certain solutions.
     *
     * @remarks
     *
     */
    locationrules: Locationrules;
    /**
     * The `locations` resource is an abstraction for the area around a physical location that items can be localized at.
     *
     * @remarks
     *
     *
     * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360007502554}
     */
    locations: Locations;
    /**
     * The `presences` resource is an abstraction for the detection of an item (from the `items` resource) at a location (from the `locations` resource).
     *
     * @remarks
     * Presences are always kept current by the Brain, i.e. if the hold time of a presence expires it is simply removed from the resource.
     *
     *
     * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360008309313}
     */
    presences: Presences;
    /**
     * The Brain consists of several software components with their own responsibilities, referred to as "services".
     *
     * @remarks
     * Some of these services have status information and/or configuration that can be managed using the `services` resource.
     *
     */
    services: Services;
    /**
     * It can be useful to group items or Smartspots in a list. The `sets` resource can be used to create and manage such list sets.
     *
     * @remarks
     * Sets can be utilized in various Brain Management Console utilities and can also be useful in custom Brain applications.
     *
     *
     * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360007824993}
     */
    sets: Sets;
    /**
     * The `spots` resource contains representations of Smartspot devices that have connected to this Brain at least once.
     *
     * @remarks
     * It is possible to configure Smartspots through this resource.
     *
     * Smartspots also have their own locally stored sets, referred to as "spotsets".
     * Spotsets can be created and managed within a single spot instance or by using `spotsets` resource.
     * Created or updated spotsets are automatically synced between Smartspot and server.
     *
     *
     * @see {@link https://intellifi.zendesk.com/hc/en-us/categories/360000685434}
     */
    spots: Spots;
    /**
     * The `spotsets` resource contains a collection of set definitons for each Smartspot and allows for remote mananagement.
     *
     * @remarks
     * Spotsets are stored and used on the Smartspot locally and synced between Smartspot and server.
     * Spotsets primarly are used as an input for Sense&Control.
     *
     *
     * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360009282834}
     */
    spotsets: Spotsets;
    /**
     * The `subscriptions` resource contains rules to store and/or deliver events from the Brain event system.
     *
     * @remarks
     *
     * See also the `events` resource.
     *
     *
     * @see {@link https://intellifi.zendesk.com/hc/en-us/sections/360001588534}
     */
    subscriptions: Subscriptions;
    /**
     * The `users` resource contains the user accounts that can log into the Brain Management Console.
     *
     * @remarks
     *
     * Note that this resource is only accessible for administrator users logged into the Brain Management Console.
     * It is not possible to access this resource using API key authentication.
     * This resource is therefore irrelevant to most applications.
     *
     */
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
