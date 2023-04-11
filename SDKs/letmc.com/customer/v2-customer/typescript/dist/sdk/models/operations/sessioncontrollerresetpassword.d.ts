import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SessionControllerResetPasswordRequest extends SpeakeasyBase {
    /**
     * The login Email Address.
     */
    email: string;
    /**
     * The unique client short-name
     */
    shortName: string;
}
export declare class SessionControllerResetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
