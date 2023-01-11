import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SourcesGetV2SourcesGetQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    orderBy?: Record<string, any>;
    page?: number;
    sort?: Record<string, any>;
    sourceId?: number[];
    sourceName?: string[];
    sourceSlug?: string[];
}
export declare class SourcesGetV2SourcesGetRequest extends SpeakeasyBase {
    queryParams: SourcesGetV2SourcesGetQueryParams;
}
export declare class SourcesGetV2SourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    openAQResult?: shared.OpenAqResult;
    statusCode: number;
}
