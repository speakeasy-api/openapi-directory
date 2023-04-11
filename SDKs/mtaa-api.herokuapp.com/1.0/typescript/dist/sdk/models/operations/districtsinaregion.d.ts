import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistrictsInARegionRequest extends SpeakeasyBase {
    /**
     * Country name in lowercase eg( tanzania)
     */
    country: string;
    /**
     * Name of the region eg (Mbeya)
     */
    region: string;
}
export declare class DistrictsInARegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
