import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity extends SpeakeasyBase {
    auth: string;
}
/**
 * Product code for requested service and specials : 3-letter eg: YNZ
 */
export declare enum CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum {
    Fan = "FAN",
    Fco = "FCO",
    Fcp = "FCP",
    Fdg = "FDG",
    Ftf = "FTF",
    Fun = "FUN",
    Fwn = "FWN",
    Yco = "YCO",
    Ycp = "YCP",
    Ydg = "YDG",
    Ynb = "YNB",
    Ynz = "YNZ",
    Ytf = "YTF",
    Yun = "YUN",
    Zxb = "ZXB",
    Zxf = "ZXF",
    Zxr = "ZXR"
}
export declare class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * Arrival airport : 3-letter IATA airport code, e.g. HKG.
     */
    destination: string;
    /**
     * Departure date in the local time of the departure airport. Based on LAT (Latest Acceptance Time). format : yyyy-MM-dd eg : 2017-07-15
     */
    fromDate: string;
    /**
     * Departure Airport : 3-letter IATA airport code, e.g. FRA.
     */
    origin: string;
    /**
     * Product code for requested service and specials : 3-letter eg: YNZ
     */
    productCode: CargoGetRouteFromDateProductCodeByOriginAndDestinationGetProductCodeEnum;
}
export declare class CargoGetRouteFromDateProductCodeByOriginAndDestinationGetResponse extends SpeakeasyBase {
    cargoGetRouteFromDateProductCodeByOriginAndDestinationGet200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
