import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutVariantSetItemRequest extends SpeakeasyBase {
    id: string;
    variantSet: shared.VariantSet;
}
export declare class PutVariantSetItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
