import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClientProfileForPamRequest extends SpeakeasyBase {
    /**
     * Client ID
     */
    clientId: number;
}
export declare class GetClientProfileForPamResponse extends SpeakeasyBase {
    /**
     * Client profile
     */
    clientProfile?: shared.ClientProfile;
    contentType: string;
    /**
     * ClientProfileNotFound
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
