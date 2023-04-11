import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CargoShipmentTrackingByAWBPrefixAndAWBNumberGetSecurity extends SpeakeasyBase {
    auth: string;
}
export declare class CargoShipmentTrackingByAWBPrefixAndAWBNumberGetRequest extends SpeakeasyBase {
    /**
     * http header: application/json or application/xml (Acceptable values are: "application/json", "application/xml")
     */
    accept: string;
    /**
     * aWBNumber : The Air Waybill Number , format : [0-9]{8} e.g. 08002050
     */
    aWBNumber: string;
    /**
     * aWBPrefix : Represents the airline that is the owner of this AWB, i.e. "020" = Lufthansa Cargo, format : [0-9]{3} e.g. 020
     */
    aWBPrefix: string;
}
export declare class CargoShipmentTrackingByAWBPrefixAndAWBNumberGetResponse extends SpeakeasyBase {
    cargoShipmentTrackingByAWBPrefixAndAWBNumberGet200ApplicationJSONObject?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
