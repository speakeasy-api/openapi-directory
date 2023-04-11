import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchFlowRevisionServerList: readonly ["https://studio.twilio.com"];
export declare class FetchFlowRevisionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchFlowRevisionRequest extends SpeakeasyBase {
    /**
     * Specific Revision number or can be `LatestPublished` and `LatestRevision`.
     */
    revision: string;
    /**
     * The SID of the Flow resource to fetch.
     */
    sid: string;
}
export declare class FetchFlowRevisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV2FlowFlowRevision?: shared.StudioV2FlowFlowRevision;
}
