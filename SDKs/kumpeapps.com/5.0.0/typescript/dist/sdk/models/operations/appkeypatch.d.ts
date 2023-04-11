import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppkeyPatchRequest extends SpeakeasyBase {
    /**
     * compromised app key
     */
    appKey: string;
    /**
     * Comments (like how was this compromised)
     */
    comments?: string;
}
export declare class AppkeyPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * App key deactivated
     */
    inlineResponse202?: shared.InlineResponse202;
}
