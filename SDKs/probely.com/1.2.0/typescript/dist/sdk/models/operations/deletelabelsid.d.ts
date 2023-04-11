import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteLabelsIdRequest extends SpeakeasyBase {
    /**
     * Object Id
     */
    id: string;
}
/**
 * Access token is missing or invalid
 */
export declare class DeleteLabelsId401ApplicationJSON extends SpeakeasyBase {
    detail?: string;
}
export declare class DeleteLabelsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Access token is missing or invalid
     */
    deleteLabelsId401ApplicationJSONObject?: DeleteLabelsId401ApplicationJSON;
}
