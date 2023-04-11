import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiProofsRequest extends SpeakeasyBase {
    /**
     * The identity provider to be looked up. Currently only supports keybase (case-sensitive)
     */
    provider?: string;
    /**
     * The username on the selected identity provider
     */
    username?: string;
}
export declare class GetApiProofsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Found
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    identityProof?: shared.IdentityProof;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
