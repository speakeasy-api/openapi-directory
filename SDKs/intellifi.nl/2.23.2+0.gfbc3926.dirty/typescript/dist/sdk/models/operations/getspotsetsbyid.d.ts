import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpotSetsByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    id: string;
}
export declare class GetSpotSetsByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A JSON object containing the spotset
     */
    spotSet?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
