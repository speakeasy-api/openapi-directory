import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LogOutRequest extends SpeakeasyBase {
    /**
     * token
     */
    token: string;
}
export declare class LogOutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
