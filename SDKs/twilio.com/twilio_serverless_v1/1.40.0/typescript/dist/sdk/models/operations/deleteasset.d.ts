import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteAssetServerList: readonly ["https://serverless.twilio.com"];
export declare class DeleteAssetSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteAssetRequest extends SpeakeasyBase {
    /**
     * The SID of the Service to delete the Asset resource from.
     */
    serviceSid: string;
    /**
     * The SID that identifies the Asset resource to delete.
     */
    sid: string;
}
export declare class DeleteAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
