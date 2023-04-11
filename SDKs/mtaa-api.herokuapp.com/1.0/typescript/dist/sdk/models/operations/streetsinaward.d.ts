import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StreetsInAWardRequest extends SpeakeasyBase {
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
     * Name of the Ward eg (Kiwira)
     */
    ward: string;
}
export declare class StreetsInAWardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
