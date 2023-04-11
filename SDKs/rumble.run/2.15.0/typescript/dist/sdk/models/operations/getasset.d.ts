import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssetSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAssetRequest extends SpeakeasyBase {
    /**
     * UUID of the asset to retrieve
     */
    assetId: string;
}
export declare class GetAssetResponse extends SpeakeasyBase {
    /**
     * asset details
     */
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
