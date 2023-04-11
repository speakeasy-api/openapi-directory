import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AppsVerifyCredentialsResponse extends SpeakeasyBase {
    /**
     * If the Authorization header was provided with a valid token, you should see your app returned as an Application entity.
     */
    application?: shared.Application;
    contentType: string;
    /**
     * If the Authorization header contains an invalid token, is malformed, or is not present, an error will be returned indicating an authorization failure.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
