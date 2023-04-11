import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionResourceShowRequest extends SpeakeasyBase {
    /**
     * The id of the resource
     */
    id?: string;
    /**
     * Add tracking information to dataset
     */
    includeTracking?: boolean;
}
export declare class GetActionResourceShowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
