import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LatestGetV2LatestLocationIdGetPathParams extends SpeakeasyBase {
    locationId: number;
}
export declare class LatestGetV2LatestLocationIdGetQueryParams extends SpeakeasyBase {
    city?: string[];
    coordinates?: string;
    country?: string[];
    countryId?: string;
    dumpRaw?: boolean;
    entity?: shared.EntityTypesEnum;
    hasGeo?: boolean;
    isAnalysis?: boolean;
    isMobile?: boolean;
    limit?: number;
    location?: any[];
    manufacturerName?: string[];
    modelName?: string[];
    offset?: number;
    orderBy?: Record<string, any>;
    page?: number;
    parameter?: any[];
    parameterId?: number;
    radius?: number;
    sensorType?: shared.SensorTypesEnum;
    sort?: Record<string, any>;
    sourceName?: string[];
    unit?: string[];
}
export declare class LatestGetV2LatestLocationIdGetRequest extends SpeakeasyBase {
    pathParams: LatestGetV2LatestLocationIdGetPathParams;
    queryParams: LatestGetV2LatestLocationIdGetQueryParams;
}
export declare class LatestGetV2LatestLocationIdGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQResult?: shared.OpenAqResult;
    statusCode: number;
}
