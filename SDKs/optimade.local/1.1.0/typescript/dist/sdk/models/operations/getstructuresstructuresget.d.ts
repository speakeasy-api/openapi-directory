import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStructuresStructuresGetQueryParams extends SpeakeasyBase {
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
export declare class GetStructuresStructuresGetRequest extends SpeakeasyBase {
    queryParams: GetStructuresStructuresGetQueryParams;
}
export declare class GetStructuresStructuresGetResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    structureResponseMany?: shared.StructureResponseMany;
}
