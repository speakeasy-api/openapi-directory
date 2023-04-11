import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppsRevokeGrantForApplicationRequest extends SpeakeasyBase {
    accessToken: string;
    /**
     * The client ID of the GitHub app.
     */
    clientId: string;
}
export declare class AppsRevokeGrantForApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
