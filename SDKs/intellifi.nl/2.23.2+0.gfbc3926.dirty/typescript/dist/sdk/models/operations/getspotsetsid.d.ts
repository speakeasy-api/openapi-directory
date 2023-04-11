import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpotsetsIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetSpotsetsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the spotset
     */
    spotSet?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
