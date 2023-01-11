import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContributorPathParams extends SpeakeasyBase {
    contributorId: string;
}
export declare class GetContributorQueryParams extends SpeakeasyBase {
    aliases?: boolean;
}
export declare class GetContributorSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class GetContributorRequest extends SpeakeasyBase {
    pathParams: GetContributorPathParams;
    queryParams: GetContributorQueryParams;
    security: GetContributorSecurity;
}
export declare class GetContributorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getContributor200ApplicationJSONObject?: Record<string, any>;
}
