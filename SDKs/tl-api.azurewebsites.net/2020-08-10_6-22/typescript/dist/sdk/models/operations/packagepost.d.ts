import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackagePostResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    /**
     * messageId that can use to get the status of import later on.!
     */
    defaultResponseDTOOfStatusDTO?: shared.DefaultResponseDTOOfStatusDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
