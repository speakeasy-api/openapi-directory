import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SourcesV1GetV1SourcesGetQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
    orderBy?: Record<string, any>;
    page?: number;
    sort?: Record<string, any>;
}
export declare class SourcesV1GetV1SourcesGetRequest extends SpeakeasyBase {
    queryParams: SourcesV1GetV1SourcesGetQueryParams;
}
export declare class SourcesV1GetV1SourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQResult?: shared.OpenAqResult;
    statusCode: number;
}
