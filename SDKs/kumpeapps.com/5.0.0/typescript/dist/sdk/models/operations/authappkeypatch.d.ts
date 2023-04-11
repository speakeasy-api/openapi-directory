import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthAppkeyPatchRequest extends SpeakeasyBase {
    /**
     * compromised app key
     */
    appKey: string;
    /**
     * Comments (like how was this compromised)
     */
    comments?: string;
}
export declare class AuthAppkeyPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * App key deactivated
     */
    inlineResponse202?: shared.InlineResponse202;
}
