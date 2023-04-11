import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIndexesRequest extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class GetIndexesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
