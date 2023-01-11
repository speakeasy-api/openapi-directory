import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSingleReferenceReferencesEntryIdGetPathParams extends SpeakeasyBase {
    entryId: string;
}
export declare class GetSingleReferenceReferencesEntryIdGetQueryParams extends SpeakeasyBase {
    apiHint?: string;
    emailAddress?: string;
    include?: string;
    responseFields?: string;
    responseFormat?: string;
}
export declare class GetSingleReferenceReferencesEntryIdGetRequest extends SpeakeasyBase {
    pathParams: GetSingleReferenceReferencesEntryIdGetPathParams;
    queryParams: GetSingleReferenceReferencesEntryIdGetQueryParams;
}
export declare class GetSingleReferenceReferencesEntryIdGetResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    referenceResponseOne?: shared.ReferenceResponseOne;
    statusCode: number;
}
