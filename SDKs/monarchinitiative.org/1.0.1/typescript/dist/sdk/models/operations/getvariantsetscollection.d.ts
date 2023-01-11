import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantSetsCollectionQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVariantSetsCollectionRequest extends SpeakeasyBase {
    queryParams: GetVariantSetsCollectionQueryParams;
}
export declare class GetVariantSetsCollectionResponse extends SpeakeasyBase {
    contentType: string;
    pageOfVariantSets?: shared.PageOfVariantSets;
    statusCode: number;
}
