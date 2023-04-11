import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity extends SpeakeasyBase {
    hapikey?: string;
    oauth2Legacy?: string;
    privateAppsLegacy?: string;
}
export declare class PostVisitorIdentificationV3TokensCreateGenerateTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    identificationTokenResponse?: shared.IdentificationTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
