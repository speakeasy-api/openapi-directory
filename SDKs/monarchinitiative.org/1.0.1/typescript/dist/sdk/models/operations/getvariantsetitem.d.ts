import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantSetItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVariantSetItemRequest extends SpeakeasyBase {
    pathParams: GetVariantSetItemPathParams;
}
export declare class GetVariantSetItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variantSet?: shared.VariantSet;
}
