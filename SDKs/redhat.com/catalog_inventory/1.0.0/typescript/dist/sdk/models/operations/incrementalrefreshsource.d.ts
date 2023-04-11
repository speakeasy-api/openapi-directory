import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IncrementalRefreshSourceRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: string;
}
export declare class IncrementalRefreshSourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
