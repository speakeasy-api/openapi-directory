import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePaginationRequestBody extends SpeakeasyBase {
    maxTotalHits?: number;
}
export declare class UpdatePaginationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
