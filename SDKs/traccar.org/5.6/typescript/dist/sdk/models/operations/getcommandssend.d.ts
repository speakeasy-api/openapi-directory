import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommandsSendRequest extends SpeakeasyBase {
    /**
     * Standard users can use this only with _deviceId_s, they have access to
     */
    deviceId?: number;
}
export declare class GetCommandsSendResponse extends SpeakeasyBase {
    /**
     * OK
     */
    commands?: shared.Command[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
