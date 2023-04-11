import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFlexFlowServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListFlexFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFlexFlowRequest extends SpeakeasyBase {
    /**
     * The `friendly_name` of the Flex Flow resources to read.
     */
    friendlyName?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListFlexFlowListFlexFlowResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListFlexFlowListFlexFlowResponse extends SpeakeasyBase {
    flexFlows?: shared.FlexV1FlexFlow[];
    meta?: ListFlexFlowListFlexFlowResponseMeta;
}
export declare class ListFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFlexFlowResponse?: ListFlexFlowListFlexFlowResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
