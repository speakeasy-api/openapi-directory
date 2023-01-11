import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTileV2LocationsTilesZxyPbfGetPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    z: number;
}
export declare class GetTileV2LocationsTilesZxyPbfGetQueryParams extends SpeakeasyBase {
    isAnalysis?: boolean;
    isMobile?: boolean;
    lastUpdatedFrom?: any;
    lastUpdatedTo?: any;
    location?: number[];
    parameter?: any;
    project?: number;
}
export declare class GetTileV2LocationsTilesZxyPbfGetRequest extends SpeakeasyBase {
    pathParams: GetTileV2LocationsTilesZxyPbfGetPathParams;
    queryParams: GetTileV2LocationsTilesZxyPbfGetQueryParams;
}
export declare class GetTileV2LocationsTilesZxyPbfGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
