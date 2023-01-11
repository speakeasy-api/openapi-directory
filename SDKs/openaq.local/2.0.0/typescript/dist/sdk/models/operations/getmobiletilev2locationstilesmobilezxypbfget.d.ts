import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    z: number;
}
export declare class GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams extends SpeakeasyBase {
    dateFrom: any;
    dateTo: any;
    isAnalysis?: boolean;
    isMobile?: boolean;
    lastUpdatedFrom?: any;
    lastUpdatedTo?: any;
    location?: number[];
    parameter?: any;
    project?: number;
}
export declare class GetMobiletileV2LocationsTilesMobileZxyPbfGetRequest extends SpeakeasyBase {
    pathParams: GetMobiletileV2LocationsTilesMobileZxyPbfGetPathParams;
    queryParams: GetMobiletileV2LocationsTilesMobileZxyPbfGetQueryParams;
}
export declare class GetMobiletileV2LocationsTilesMobileZxyPbfGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
