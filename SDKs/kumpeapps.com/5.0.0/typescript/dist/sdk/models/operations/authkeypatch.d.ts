import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AuthkeyPatchRequest extends SpeakeasyBase {
    /**
     * auth key to mark as compromised
     */
    authKey: string;
    /**
     * Comments (like how was this compromised)
     */
    comments?: string;
}
export declare class AuthkeyPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Auth key marked as compromised and locked
     */
    inlineResponse202?: shared.InlineResponse202;
}
