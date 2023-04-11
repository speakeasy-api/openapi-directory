import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV05WellKnownOpenidConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Causes:**
     *
     * @remarks
     *   * Invalid consent request id
     *
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    openIdConfiguration?: shared.OpenIdConfiguration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
