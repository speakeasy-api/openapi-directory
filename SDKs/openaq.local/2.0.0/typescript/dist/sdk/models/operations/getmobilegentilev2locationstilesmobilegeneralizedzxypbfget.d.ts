import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    z: number;
}
export declare class GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams extends SpeakeasyBase {
    isAnalysis?: boolean;
    isMobile?: boolean;
    lastUpdatedFrom?: any;
    lastUpdatedTo?: any;
    location?: number[];
    parameter?: any;
    project?: number;
}
export declare class GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetRequest extends SpeakeasyBase {
    pathParams: GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetPathParams;
    queryParams: GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetQueryParams;
}
export declare class GetMobilegentileV2LocationsTilesMobileGeneralizedZxyPbfGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
