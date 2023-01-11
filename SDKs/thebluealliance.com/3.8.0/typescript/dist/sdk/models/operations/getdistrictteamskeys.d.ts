import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictTeamsKeysPathParams extends SpeakeasyBase {
    districtKey: string;
}
export declare class GetDistrictTeamsKeysHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetDistrictTeamsKeysSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDistrictTeamsKeysRequest extends SpeakeasyBase {
    pathParams: GetDistrictTeamsKeysPathParams;
    headers: GetDistrictTeamsKeysHeaders;
    security: GetDistrictTeamsKeysSecurity;
}
export declare class GetDistrictTeamsKeysResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getDistrictTeamsKeys200ApplicationJSONStrings?: string[];
}
