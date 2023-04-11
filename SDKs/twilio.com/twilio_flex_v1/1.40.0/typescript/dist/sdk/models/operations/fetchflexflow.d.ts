import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFlexFlowServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchFlexFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFlexFlowRequest extends SpeakeasyBase {
    /**
     * The SID of the Flex Flow resource to fetch.
     */
    sid: string;
}
export declare class FetchFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1FlexFlow?: shared.FlexV1FlexFlow;
}
