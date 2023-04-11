import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RenewTokenSecurity extends SpeakeasyBase {
    oauth2ClientSecret: string;
}
export declare class RenewTokenRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    renewTokenRequest: shared.RenewTokenRequest;
    /**
     * Your application ID, available from the [developer dashboard](https://developer.squareup.com/apps).
     */
    clientId: string;
}
export declare class RenewTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    renewTokenResponse?: shared.RenewTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
