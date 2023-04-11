import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVariantSetItemRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetVariantSetItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    variantSet?: shared.VariantSet;
}
