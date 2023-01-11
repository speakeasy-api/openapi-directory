import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksListForSuitePathParams extends SpeakeasyBase {
    checkSuiteId: number;
    owner: string;
    repo: string;
}
export declare class ChecksListForSuiteQueryParams extends SpeakeasyBase {
    checkName?: string;
    filter?: shared.StatusEnum1;
    page?: number;
    perPage?: number;
    status?: shared.StatusEnum;
}
export declare class ChecksListForSuite200ApplicationJson extends SpeakeasyBase {
    checkRuns: shared.CheckRun[];
    totalCount: number;
}
export declare class ChecksListForSuiteRequest extends SpeakeasyBase {
    pathParams: ChecksListForSuitePathParams;
    queryParams: ChecksListForSuiteQueryParams;
}
export declare class ChecksListForSuiteResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    checksListForSuite200ApplicationJSONObject?: ChecksListForSuite200ApplicationJson;
}
