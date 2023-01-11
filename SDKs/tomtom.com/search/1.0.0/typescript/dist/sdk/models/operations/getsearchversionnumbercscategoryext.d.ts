import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberCsCategoryExtPathParams extends SpeakeasyBase {
    category: string;
    ext: shared.ExtEnum;
    versionNumber: number;
}
export declare class GetSearchVersionNumberCsCategoryExtQueryParams extends SpeakeasyBase {
    btmRight?: string;
    countrySet?: string;
    idxSet?: string;
    language?: string;
    lat?: number;
    limit?: number;
    lon?: number;
    ofs?: number;
    radius?: number;
    topLeft?: string;
    typeahead?: boolean;
    view?: shared.ViewEnum;
}
export declare class GetSearchVersionNumberCsCategoryExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberCsCategoryExtPathParams;
    queryParams: GetSearchVersionNumberCsCategoryExtQueryParams;
}
export declare class GetSearchVersionNumberCsCategoryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
