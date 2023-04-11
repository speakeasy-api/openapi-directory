import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Results per page {error_msg}
 */
export declare enum GetVariantSetsCollectionPerPageEnum {
    Two = "2",
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40",
    Fifty = "50"
}
export declare class GetVariantSetsCollectionRequest extends SpeakeasyBase {
    /**
     * Page number
     */
    page?: number;
    /**
     * Results per page {error_msg}
     */
    perPage?: GetVariantSetsCollectionPerPageEnum;
}
export declare class GetVariantSetsCollectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    pageOfVariantSets?: shared.PageOfVariantSets;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
