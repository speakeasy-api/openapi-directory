import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteBuildServerList: readonly ["https://serverless.twilio.com"];
export declare class DeleteBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteBuildRequest extends SpeakeasyBase {
    /**
     * The SID of the Service to delete the Build resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Build resource to delete.
     */
    sid: string;
}
export declare class DeleteBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
