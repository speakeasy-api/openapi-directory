import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFlowServerList: readonly ["https://studio.twilio.com"];
export declare class FetchFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFlowRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow resource to fetch.
     */
    sid: string;
}
export declare class FetchFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2Flow?: shared.StudioV2Flow;
}
