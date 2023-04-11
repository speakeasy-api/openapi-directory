import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the pre-receive environment.
     */
    preReceiveEnvironmentId: number;
}
export declare class EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
