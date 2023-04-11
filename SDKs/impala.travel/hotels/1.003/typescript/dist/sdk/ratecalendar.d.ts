import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Getting rates for future dates.
 */
export declare class RateCalendar {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List a rate plan (rate calendar) for a hotel (Beta endpoint).
     *
     * @remarks
     * Returns a single rate plan available for you for a hotel.
     *
     * Rate plans are products the hotel is offering. They typically consist of a combination of restrictiveness in case of cancellations or changes, the time they're bookable, minimum or maximum length of stay restrictions (e.g. week-long bookings), included components like breakfast or dinner and/or the conditions under which the room can be sold (e.g. private rates that can only be offered and sold to a closed user group behind login).
     *
     * Examples of rate plans:
     *
     * * Non-refundable room rate that includes breakfast
     * * Room-only rate with free cancellation up to 14 days before arrival
     *
     * This endpoint returns a singular available rate plan.
     */
    listRatePlanForHotelForRatePlanId(req: operations.ListRatePlanForHotelForRatePlanIdRequest, config?: AxiosRequestConfig): Promise<operations.ListRatePlanForHotelForRatePlanIdResponse>;
    /**
     * List all rate plans (rate calendar) for a hotel (Beta endpoint)
     *
     * @remarks
     * Returns a list of all rate plans available for you for a hotel.
     *
     * Rate plans are products the hotel is offering. They typically consist of a combination of restrictiveness in case of cancellations or changes, the time they're bookable, minimum or maximum length of stay restrictions (e.g. week-long bookings), included components like breakfast or dinner and/or the conditions under which the room can be sold (e.g. private rates that can only be offered and sold to a closed user group behind login).
     *
     * Examples of rate plans:
     *
     * * Non-refundable room rate that includes breakfast
     * * Room-only rate with free cancellation up to 14 days before arrival
     *
     * For each such rate plan this endpoint returns the room types it's available for, alongside prices for each date and occupancy that can be sold – or the information that the room isn't available (closed) for a certain date.
     *
     * For the vast majority of our customers, availability searches using the [List all hotels](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1hotels/get) endpoint are the best choice. It accepts the dates your guest is looking for and provides the rates to display.
     *
     * This endpoint can help augment this for two additional use cases:
     *
     * This endpoint allows you to query rate prices for all future dates in one go, making it a great choice to feed availability information and prices into your own system or displaying a rate calender to guide your guests to gain an overview of future availability and prices.
     */
    listRatePlansForHotel(req: operations.ListRatePlansForHotelRequest, config?: AxiosRequestConfig): Promise<operations.ListRatePlansForHotelResponse>;
}
