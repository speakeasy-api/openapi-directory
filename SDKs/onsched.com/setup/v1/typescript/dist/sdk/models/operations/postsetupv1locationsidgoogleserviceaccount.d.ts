import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1LocationsIdGoogleServiceAccountRequest extends SpeakeasyBase {
    /**
     * Generated Json Key file from Google
     */
    googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class PostSetupV1LocationsIdGoogleServiceAccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    googleServiceAccountCreds?: shared.GoogleServiceAccountCreds;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
