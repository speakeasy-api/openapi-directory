import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleGetMeasureUnitsRequest extends SpeakeasyBase {
    /**
     * type of the measure unit (all, item, service)
     */
    type?: string;
}
export declare class ArticleGetMeasureUnitsResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDTOOfStatusDTO?: shared.DefaultResponseDTOOfStatusDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
