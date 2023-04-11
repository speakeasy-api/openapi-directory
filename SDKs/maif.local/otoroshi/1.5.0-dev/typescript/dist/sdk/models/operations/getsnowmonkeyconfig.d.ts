import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSnowMonkeyConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    snowMonkeyConfig?: shared.SnowMonkeyConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
