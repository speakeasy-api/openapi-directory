import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Offers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * offersLoungesByLocationGet - Lounges
     *
     * Lounge information
    **/
    offersLoungesByLocationGet(req: operations.OffersLoungesByLocationGetRequest, config?: AxiosRequestConfig): Promise<operations.OffersLoungesByLocationGetResponse>;
    /**
     * offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet - Seat Maps
     *
     * Cabin layout and seat characteristics.
    **/
    offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(req: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest, config?: AxiosRequestConfig): Promise<operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse>;
}
