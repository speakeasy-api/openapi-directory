import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllOptionsSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetAllOptionsRequest extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of Options
     */
    variantOptionsResponses?: shared.VariantOptionsResponse[];
}
