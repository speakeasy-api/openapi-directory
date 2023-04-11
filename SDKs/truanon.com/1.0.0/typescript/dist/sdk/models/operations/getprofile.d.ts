import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProfileRequest extends SpeakeasyBase {
    /**
     * This is your unique username or member ID
     */
    id?: string;
    /**
     * The service name given to you by TruAnon
     */
    service?: string;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
