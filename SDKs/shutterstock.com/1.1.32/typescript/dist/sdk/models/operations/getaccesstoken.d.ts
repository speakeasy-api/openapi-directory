import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccessTokenResponse extends SpeakeasyBase {
    /**
     * OK
     */
    accessTokenDetails?: shared.AccessTokenDetails;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
