import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIdNameRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetIdNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getIdName2XXApplicationJSONObject?: Record<string, any>;
}
