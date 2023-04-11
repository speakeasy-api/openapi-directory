import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssetsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAssetsRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class GetAssetsResponse extends SpeakeasyBase {
    /**
     * array of assets
     */
    assets?: shared.Asset[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
