import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VirtualTariffsStatusForPropertyGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class VirtualTariffsStatusForPropertyGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    virtualTariffsStatusForPropertyGet200ApplicationJSONString?: string;
    /**
     * OK
     */
    virtualTariffsStatusForPropertyGet200ApplicationXMLString?: string;
    /**
     * OK
     */
    virtualTariffsStatusForPropertyGet200TextJSONString?: string;
    /**
     * OK
     */
    virtualTariffsStatusForPropertyGet200TextXMLString?: string;
}
