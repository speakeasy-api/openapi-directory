import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListContributorQueryParams extends SpeakeasyBase {
    aliases?: boolean;
    limit?: number;
    updatedAfter?: string;
}
export declare class ListContributorSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ListContributorRequest extends SpeakeasyBase {
    queryParams: ListContributorQueryParams;
    security: ListContributorSecurity;
}
export declare class ListContributorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listContributor200ApplicationJSONObject?: Record<string, any>;
}
