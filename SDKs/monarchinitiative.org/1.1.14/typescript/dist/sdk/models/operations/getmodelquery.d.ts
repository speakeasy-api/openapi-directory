import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetModelQueryRequest extends SpeakeasyBase {
    /**
     * string to search for in contributor of model
     */
    contributor?: string;
    /**
     * string to search for in title of model
     */
    title?: string;
}
export declare class GetModelQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
