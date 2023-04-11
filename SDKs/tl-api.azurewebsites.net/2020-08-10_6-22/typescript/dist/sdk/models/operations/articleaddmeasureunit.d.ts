import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleAddMeasureUnitResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDTOOfStatusDTO?: shared.DefaultResponseDTOOfStatusDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
