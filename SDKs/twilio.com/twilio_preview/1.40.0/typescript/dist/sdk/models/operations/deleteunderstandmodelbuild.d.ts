import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUnderstandModelBuildRequest extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
