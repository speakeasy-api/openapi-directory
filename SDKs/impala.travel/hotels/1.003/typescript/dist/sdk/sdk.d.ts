import { Bookings } from "./bookings";
import { Hotels } from "./hotels";
import * as shared from "./models/shared";
import { RateCalendar } from "./ratecalendar";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://sandbox.impala.travel/v1", "https://api.impala.travel/v1"];
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
 * Add room selling to your app with ease, or expand your existing hotel portfolio. Access all the marketing material you need to sell a room, from hotel amenities to images. Constantly updated, ever expanding and always correct. Impala allows you to start selling hotel rooms and earn a commission with every booking in hours.
 *
 * @remarks
 *
 * Getting started is easy:
 *
 * > **1. Sign-up within seconds**: Head to the [Impala website](https://impala.travel), enter your details and receive your sandbox API key immediately (no credit card needed).
 *
 * > **2. Start building within minutes**: Build against a sandbox API with realistic test data. Use a [step-by-step walkthrough](https://impala.travel) to see what's possible. Check for available hotels and their rates. Make and manage fake bookings without any risk. Add room booking to your existing website or app, or start an online travel agency from scratch. [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/11303451-9b241872-9961-424d-9ef4-9d949534567d?action=collection%2Ffork&collection-url=entityId%3D11303451-9b241872-9961-424d-9ef4-9d949534567d%26entityType%3Dcollection%26workspaceId%3D5ae55f12-332c-4e7d-8acc-3e75df3b2ee2)
 *
 * > **3. Go live within hours**: Once your app or integration is ready for prime time, move to production within your Impala dashboard and start making real hotel bookings for your customers right away.
 *
 * Want to see how it all works? Watch [a 5-minute walkthrough](https://www.youtube.com/watch?v=7B3evCL3nrY) of the two API requests you need to make a booking, and a demo of one of our customer's apps.
 */
export declare class SDK {
    /**
     * Making and managing bookings.
     */
    bookings: Bookings;
    /**
     * Accessing hotel content, available rooms and rates.
     */
    hotels: Hotels;
    /**
     * Getting rates for future dates.
     */
    rateCalendar: RateCalendar;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
