import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Offers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lounges
     *
     * @remarks
     * Lounge information
     */
    offersLoungesByLocationGet(req: operations.OffersLoungesByLocationGetRequest, security: operations.OffersLoungesByLocationGetSecurity, config?: AxiosRequestConfig): Promise<operations.OffersLoungesByLocationGetResponse>;
    /**
     * Seat Maps
     *
     * @remarks
     * Cabin layout and seat characteristics.
     */
    offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet(req: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest, security: operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity, config?: AxiosRequestConfig): Promise<operations.OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse>;
}
