import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIntegrationsTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * IntegrationsNotEnabled
     */
    error?: shared.ErrorT;
    /**
     * Token
     */
    integrationsToken?: shared.IntegrationsToken;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
