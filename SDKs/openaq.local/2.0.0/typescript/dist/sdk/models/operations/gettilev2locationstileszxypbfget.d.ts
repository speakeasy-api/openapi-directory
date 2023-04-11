import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTileV2LocationsTilesZXYPbfGetRequest extends SpeakeasyBase {
    isAnalysis?: boolean;
    isMobile?: boolean;
    lastUpdatedFrom?: any;
    lastUpdatedTo?: any;
    /**
     * limit data to location id
     */
    location?: number[];
    parameter?: any;
    project?: number;
    x: number;
    y: number;
    z: number;
}
export declare class GetTileV2LocationsTilesZXYPbfGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
