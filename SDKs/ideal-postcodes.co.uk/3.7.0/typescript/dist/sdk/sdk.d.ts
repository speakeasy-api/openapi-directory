import { AddressSearch } from "./addresssearch";
import { Configs } from "./configs";
import { Emails } from "./emails";
import { Keys } from "./keys";
import { Licensees } from "./licensees";
import { PhoneNumbers } from "./phonenumbers";
import { PlaceSearch } from "./placesearch";
import { Uk } from "./uk";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.ideal-postcodes.co.uk/v1"];
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
 * # Getting Started
 *
 * @remarks
 *
 * ## Overview
 *
 * ### Access
 *
 * All API methods are either a `GET`, `POST` or `OPTIONS` request.
 *
 * The API communicates over both HTTPS and plain HTTP using IPv4 and IPv6.
 *
 * We recommend using HTTPS only although HTTP is available.
 *
 * We use appropriate HTTP status codes where possible to indicate the request status.
 *
 * ### Rate Limiting
 *
 * Each IP address is rate limited at 30 requests per second. Tripping the rate limit will result in a 503 response.
 *
 * The autocomplete API also has an additional rate limit.
 *
 * If you expect to breach the limit please contact us and we can move you to an endpoint with a higher limit.
 *
 * ### JSONP
 *
 * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests are supported. Include a `callback=` in your request as a query parameter. Your results return wrapped in a function designated by your request.
 *
 * ## Authentication
 *
 * Most requests require an **API key** for authentication. Authenticate by passing an `api_key` as part of the query string. For example:
 *
 * ```
 * api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=iddqd&q=parkside
 * ```
 *
 * Alternatively, authentication can be transmitted via the `Authorization` header using the following scheme:
 *
 * ```
 * Authorization: api_key="iddqd" [other_key="foo"]
 * ```
 *
 * ## Versioning
 *
 * This API is versioned with a simple prefix in the URL. The current version is `/v1/`. We will maintain backwards-compatibility by releasing breaking changes under a new version.
 *
 * Please note that the following changes are backwards-compatible:
 *
 * - Adding new properties to existing API responses
 * - Adding new API endpoints
 * - Adding new optional request parameters to existing API endpoints
 * - Changing the order of properties in existing API responses
 * - Changing the autocomplete address suggestion format
 *
 * ## Error Handling
 *
 * A successful lookup is accompanied with a HTTP status code of 200 and a response code of 2000 (found in the body).
 *
 * An error has occurred if the HTTP status code is not 200. Errors can range from a benign 404 (resource not found) to more urgent errors (your API Key ran out of credit, failed authentication, etc).
 *
 * ## Testing
 *
 * Each new account comes with a free test balance. Contact us if you need more for testing and integration.
 *
 * ### Community Key
 *
 * Our documentation and demos make heavy use of our community key `iddqd`. This allows for convenient access for trialing the API.
 *
 * Many restrictions on this key are relaxed to allow developers make test requests. This key has a limit of 15 lookups per IP address per day as well as a daily usage cap. If you hit any limit restrictions, you can continue testing the API by creating a key of your own and using our free test methods.
 *
 * Please be kind with the community key. We're trusting everyone to use it responsibly so that other developers may trial the API. Thank you!
 *
 * ## Metadata
 *
 * Requests that affect your balance may be annotated with arbitrary metadata. This data is stored along with your lookup history and can be queried at a later date via the API or the dashboard. We call the ability to label your requests [tagging](https://docs.ideal-postcodes.co.uk/docs/guides/tags).
 *
 * # Response Codes
 *
 * The API returns two indicators to help you to determine the status of each HTTP request.
 *
 * The first is the **HTTP Status**, which is found in the status-line of all HTTP requests. The API will return status codes that adhere to HTTP /1.1 Specifications wherever possible.
 *
 * `2XX` status codes indicates success while `4XX` and `5XX` indicate client and server errors respectively.
 *
 * The second is the **API response code**, which can be found in the `code` property of the response body. This code will provide a more specific reason if a failure has occurred and can point you in the right direction when debugging.
 *
 * Please use the glossary of code numbers and HTTP status codes below when debugging your requests.
 *
 * ## 200 Request Success
 *
 * | HTTP Code | API Code | Description                                  |
 * | --------- | -------- | -------------------------------------------- |
 * | 200       | 2000     | Success. Request was completed successfully. |
 *
 * ## 400 Bad Request
 *
 * The request could not be understood due to some input error.
 *
 * | HTTP Code | API Code | Description                                                                                                                           |
 * | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
 * | 400       | 4000     | Invalid syntax submitted. Some part of your request was malformed or did not match our specifications.                                |
 * | 400       | 4001     | Validation failed on your submitted data. Some of the data you provided did not meet our validation requirements, e.g. string length. |
 * | 400       | 4005     | Invalid start date. Please ensure start dates are provided as a UTC Timestamp in milliseconds.                                        |
 * | 400       | 4006     | Invalid end date. Please ensure end dates are provided as a UTC Timestamp in milliseconds.                                            |
 * | 400       | 4007     | Invalid date range. Check if your start and end dates are in the right order.                                                         |
 * | 400       | 4008     | Invalid date range. Check that your date range is 90 days or less.                                                                    |
 * | 400       | 4009     | Too many tags. Please specify no more than 3 tags to query.                                                                           |
 *
 * ## 401 Unauthorised
 *
 * Authorization credentials are not valid.
 *
 * | HTTP Code | API Code | Description                                                                                                                                                        |
 * | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | 401       | 4010     | Invalid Key. The `api_key` you provided is not valid.                                                                                                              |
 * | 401       | 4011     | Requesting URL not on whitelist. The cross domain request is not coming from a whitelisted URL. You can update or disable your allowed URLs via your Key settings. |
 * | 401       | 4012     | Failed user authentication. Invalid `user_token` presented.                                                                                                        |
 * | 401       | 4013     | Licensee Key is required. Sublicensed keys require you need to present licensee credentials via the `licensee` parameter.                                          |
 *
 * ## 402 Request Failed
 *
 * Your request is well-formed but are not able to complete your request for another reason.
 *
 * | HTTP Code | API Code | Description                                                                                                                                                                                                                                                        |
 * | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | 402       | 4020     | Key balance depleted. You're out of lookups on your API Key.                                                                                                                                                                                                       |
 * | 402       | 4021     | Limit reached. One of your lookup limits has been breached for today. This could either be your total daily limit on your key or the individual IP limit. You can either wait for for the limit to reset (after a day) or manually disable or increase your limit. |
 *
 * ## 404 Resource Not Found
 *
 * The resource you requested does not exist.
 *
 * | HTTP Code | API Code | Description                                                                                   |
 * | --------- | -------- | --------------------------------------------------------------------------------------------- |
 * | 404       | 4040     | Postcode not found. The postcode you have submitted does not exist.                           |
 * | 404       | 4041     | User not found. Your user could not be identified given the credentials you presented.        |
 * | 404       | 4042     | Key not found. Your key could not be identified given the credentials you presented.          |
 * | 404       | 4044     | No UDPRN found. No address is associated with the UDPRN queried                               |
 * | 404       | 4045     | No licensee found. Your licensee could not be identified given the credentials you presented. |
 * | 404       | 4046     | No UMPRN found. No Multiple Residence premise is associated with the UMPRN queried.           |
 *
 * ## 500 Server Error
 *
 * A error occurred on our server.
 *
 * | HTTP Code | API Code | Description                                                                                                                                                        |
 * | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 * | 500       | 5000     | An error occurred on our end. These errors are logged and queued so we can understand what went wrong. However, if you need speedy resolution please email support |
 * | 500       | 5001     | Akin to 5000.                                                                                                                                                      |
 * | 500       | 5002     | The server took too long to process on our end, so we aborted the request. You may retry the request.                                                              |
 *
 *
 * @see {@link https://docs.ideal-postcodes.co.uk} - More on our APIs, libraries with guides and examples
 */
export declare class SDK {
    /**
     * Global address autocomplete, for search-as-you-type
     */
    addressSearch: AddressSearch;
    /**
     * The Config resource allows users to assign serialised configuration data to API Keys. The payloads assigned to a Config object can later be retrieved to dynamically configure your integration.
     *
     * @remarks
     *
     * Useful if you need to configure your integration remotely rather than editing code in situ.
     *
     */
    configs: Configs;
    emails: Emails;
    /**
     * Monitor and manage API Keys
     */
    keys: Keys;
    /**
     * The Licensee resource represents an alternate legal End User of our data who may not be same entity as the owners of the account.
     *
     * @remarks
     *
     * The concept of Licensees underpins our sublicensing platform, which allows users to license multiple external organisations or individuals to access data under the same account.
     *
     * Sublicensing is ideal for platform vendors, who provide services to multiple clients who in turn each have their own users.
     *
     */
    licensees: Licensees;
    phoneNumbers: PhoneNumbers;
    /**
     * Global places search to identify geographical names and places
     */
    placeSearch: PlaceSearch;
    /**
     * UK Address and Postcode Search
     */
    uk: Uk;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
