import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NeighborhoodInAStreetRequest extends SpeakeasyBase {
    /**
     * Country name in lowercase eg( tanzania)
     */
    country: string;
    /**
     * Name of the District eg (Rungwe)
     */
    district: string;
    /**
     * Name of the region eg (Mbeya)
     */
    region: string;
    /**
     * Name of the Street eg (Ilundo)
     */
    street: string;
    /**
     * Name of the Ward eg (Kiwira)
     */
    ward: string;
}
export declare class NeighborhoodInAStreetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
