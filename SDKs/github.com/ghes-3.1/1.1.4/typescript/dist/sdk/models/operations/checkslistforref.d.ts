import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksListForRefPathParams extends SpeakeasyBase {
    owner: string;
    ref: string;
    repo: string;
}
export declare class ChecksListForRefQueryParams extends SpeakeasyBase {
    appId?: number;
    checkName?: string;
    filter?: shared.StatusEnum1;
    page?: number;
    perPage?: number;
    status?: shared.StatusEnum;
}
export declare class ChecksListForRef200ApplicationJson extends SpeakeasyBase {
    checkRuns: shared.CheckRun[];
    totalCount: number;
}
export declare class ChecksListForRefRequest extends SpeakeasyBase {
    pathParams: ChecksListForRefPathParams;
    queryParams: ChecksListForRefQueryParams;
}
export declare class ChecksListForRefResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    checksListForRef200ApplicationJSONObject?: ChecksListForRef200ApplicationJson;
}
