import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetActionTagListRequest extends SpeakeasyBase {
    /**
     * The number of tags to be returned per page
     */
    limit?: number;
    /**
     * The offset (index) of the first tag to return
     */
    offset?: number;
}
export declare class GetActionTagListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
