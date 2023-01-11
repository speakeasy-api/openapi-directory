import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantSetsArchiveCollectionPathParams extends SpeakeasyBase {
    day: number;
    month: number;
    year: number;
}
export declare class GetVariantSetsArchiveCollectionQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVariantSetsArchiveCollectionRequest extends SpeakeasyBase {
    pathParams: GetVariantSetsArchiveCollectionPathParams;
    queryParams: GetVariantSetsArchiveCollectionQueryParams;
}
export declare class GetVariantSetsArchiveCollectionResponse extends SpeakeasyBase {
    contentType: string;
    pageOfVariantSets?: shared.PageOfVariantSets;
    statusCode: number;
}
