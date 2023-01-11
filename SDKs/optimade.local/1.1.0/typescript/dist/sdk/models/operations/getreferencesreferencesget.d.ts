import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReferencesReferencesGetQueryParams extends SpeakeasyBase {
    apiHint?: string;
    emailAddress?: string;
    filter?: string;
    include?: string;
    pageAbove?: number;
    pageBelow?: number;
    pageCursor?: number;
    pageLimit?: number;
    pageNumber?: number;
    pageOffset?: number;
    responseFields?: string;
    responseFormat?: string;
    sort?: string;
}
export declare class GetReferencesReferencesGetRequest extends SpeakeasyBase {
    queryParams: GetReferencesReferencesGetQueryParams;
}
export declare class GetReferencesReferencesGetResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    referenceResponseMany?: shared.ReferenceResponseMany;
    statusCode: number;
}
