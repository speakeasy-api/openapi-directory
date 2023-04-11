import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateBulkAssetTagsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateBulkAssetTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * status message
     */
    statusMessage?: any;
}
