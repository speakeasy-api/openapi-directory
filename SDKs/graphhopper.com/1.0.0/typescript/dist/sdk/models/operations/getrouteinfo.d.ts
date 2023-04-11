import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRouteInfoResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Coverage Information
     */
    infoResponse?: shared.InfoResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
