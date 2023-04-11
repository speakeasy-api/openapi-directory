import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ClearBulkAssetTagsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class ClearBulkAssetTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * status message
     */
    statusMessage?: any;
}
