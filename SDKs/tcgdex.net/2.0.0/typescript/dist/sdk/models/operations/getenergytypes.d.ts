import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEnergyTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * list the different Energy types an Energy card can have
     */
    getEnergyTypes200ApplicationJSONStrings?: string[];
}
