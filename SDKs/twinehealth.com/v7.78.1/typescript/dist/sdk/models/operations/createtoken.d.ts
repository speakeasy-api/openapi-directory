import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTokenSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * List of related resources to include in the response
 */
export declare enum CreateTokenIncludeEnum {
    Groups = "groups",
    Organization = "organization"
}
export declare class CreateTokenRequest extends SpeakeasyBase {
    createTokenRequest: shared.CreateTokenRequest;
    /**
     * List of related resources to include in the response
     */
    include?: CreateTokenIncludeEnum;
}
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    createOrUpdateErrorResponse?: shared.CreateOrUpdateErrorResponse;
    /**
     * Created
     */
    createTokenResponse?: shared.CreateTokenResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
