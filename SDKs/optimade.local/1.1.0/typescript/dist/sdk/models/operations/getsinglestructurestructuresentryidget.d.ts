import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSingleStructureStructuresEntryIdGetPathParams extends SpeakeasyBase {
    entryId: string;
}
export declare class GetSingleStructureStructuresEntryIdGetQueryParams extends SpeakeasyBase {
    apiHint?: string;
    emailAddress?: string;
    include?: string;
    responseFields?: string;
    responseFormat?: string;
}
export declare class GetSingleStructureStructuresEntryIdGetRequest extends SpeakeasyBase {
    pathParams: GetSingleStructureStructuresEntryIdGetPathParams;
    queryParams: GetSingleStructureStructuresEntryIdGetQueryParams;
}
export declare class GetSingleStructureStructuresEntryIdGetResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    structureResponseOne?: shared.StructureResponseOne;
}
