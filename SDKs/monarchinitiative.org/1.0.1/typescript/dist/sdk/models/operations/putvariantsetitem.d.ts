import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutVariantSetItemPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutVariantSetItemRequest extends SpeakeasyBase {
    pathParams: PutVariantSetItemPathParams;
    request: shared.VariantSet;
}
export declare class PutVariantSetItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
