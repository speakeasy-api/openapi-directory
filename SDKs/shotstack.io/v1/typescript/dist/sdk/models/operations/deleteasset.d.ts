import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAssetSecurity extends SpeakeasyBase {
    developerKey: string;
}
export declare class DeleteAssetRequest extends SpeakeasyBase {
    /**
     * The id of the asset in UUID format
     */
    id: string;
}
export declare class DeleteAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
