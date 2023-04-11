import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SnowExportAssetsJSONResponse extends SpeakeasyBase {
    /**
     * filtered asset results
     */
    assetServiceNows?: shared.AssetServiceNow[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
