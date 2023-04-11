import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Accessing hotel content, available rooms and rates.
 */
export declare class Hotels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all hotels
     *
     * @remarks
     * Returns a list of all hotels worldwide that can be booked through Impala.
     *
     * You can **filter** the results:
     *
     * * Adding `longitude`, `latitude` and a `radius` (in meters) query parameters will filter the results to hotels around this location.
     * * Adding `start` and `end` dates (in ISO 8601 notation, e.g. `2021-12-31`) for the expected arrival and departure dates of your guests will limit the results to hotels that have at least one room bookable for this timeframe.
     * * Adding `starRating`, `name` or `country` allows you to filter to hotels based on these values (e.g. `?starRating[gte]=4&name[like]=palace` for hotels with a rating of 4 or up with a name containing "palace")
     * * Adding `hotelIds` allows you to limit the results to include only hotels with the ids listed. Its value should be a comma-separated list of hotel ids (e.g. `?hotelIds[]=hotelIdA,hotelIdB`)
     *
     * * Adding `contractable` allows you to filter to hotels that you can directly negotiate with through our [deals feature](https://docs.impala.travel/docs/booking-api/ZG9jOjcyNjgzMTA-contracting-with-hotels). (e.g `?contractable=true` or `?contractable=false`)
     *
     * You can specify the **sorting order** in which hotels are returned:
     * * This is done by using the `sortBy` query parameter.
     * * Results can be sorted by `name` alphabetically, star `rating` and `distance_m` (in meters from the specified latitude/longitude location).
     * * The parameter allows for a comma-separated list of arguments with optional `:asc` (ascending, the default if the modifier is omitted) and `:desc` (descending) modifiers.
     *
     * If no hotels match your filter criteria, an empty array will be returned.
     */
    listHotels(req: operations.ListHotelsRequest, config?: AxiosRequestConfig): Promise<operations.ListHotelsResponse>;
    /**
     * Retrieve a hotel
     *
     * @remarks
     * Returns the full content, room types and rates for the specified hotel.
     *
     * When querying the hotels API you can query with or without dates. Where querying with dates requires providing valid values for the `start` and `end` parameters. Requests without these values will be considered a query without dates.
     *
     * **Querying without dates:**
     *
     * When you query without dates, the search result will include all properties that match your request. Including all content that is associated with those properties. However you will find that the `rates` attribute for each room will always be empty.
     *
     * **Querying with dates:**
     *
     * When you query with dates, the search result will include all properties that match your request, including all content that is associated with those properties. Rooms which do not have available prices for the provided dates will appear with an empty `rates` array.
     *
     * For rooms where there are available prices the `rates` array will include both the public rates of the hotel, along with prices that come from deals in which you are participating. This would include private deals which you have negotiated with a hotel, along with Impala deals which you have been verified for.
     *
     * Using the `rateId` of any of those rates, you can use the [Create a booking](https://docs.impala.travel/docs/booking-api/spec/openapi.seller.yaml/paths/~1bookings/post) endpoint to make a booking.
     */
    retrieveHotel(req: operations.RetrieveHotelRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveHotelResponse>;
}
