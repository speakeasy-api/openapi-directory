import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetModelPropertiesRequest extends SpeakeasyBase {
    /**
     * string to search for in contributor of model
     */
    contributor?: string;
    /**
     * string to search for in title of model
     */
    title?: string;
}
export declare class GetModelPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
