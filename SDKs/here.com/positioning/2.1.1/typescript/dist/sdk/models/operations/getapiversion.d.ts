import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiVersionResponse extends SpeakeasyBase {
    /**
     * Version of API
     */
    apiVersion?: shared.ApiVersion;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
