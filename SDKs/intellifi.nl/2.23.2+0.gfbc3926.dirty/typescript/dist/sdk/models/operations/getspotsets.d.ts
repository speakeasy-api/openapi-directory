import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpotsetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the spotset
     */
    spotSet?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
