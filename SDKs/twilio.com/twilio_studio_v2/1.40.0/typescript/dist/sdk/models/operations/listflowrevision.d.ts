import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFlowRevisionServerList: readonly ["https://studio.twilio.com"];
export declare class ListFlowRevisionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFlowRevisionRequest extends SpeakeasyBase {
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
    /**
     * The SID of the Flow resource to fetch.
     */
    sid: string;
}
export declare class ListFlowRevisionListFlowRevisionResponseMeta extends SpeakeasyBase {
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
export declare class ListFlowRevisionListFlowRevisionResponse extends SpeakeasyBase {
    meta?: ListFlowRevisionListFlowRevisionResponseMeta;
    revisions?: shared.StudioV2FlowFlowRevision[];
}
export declare class ListFlowRevisionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFlowRevisionResponse?: ListFlowRevisionListFlowRevisionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
