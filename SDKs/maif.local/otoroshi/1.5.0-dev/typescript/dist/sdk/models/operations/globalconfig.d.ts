import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GlobalConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    globalConfig?: shared.GlobalConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
