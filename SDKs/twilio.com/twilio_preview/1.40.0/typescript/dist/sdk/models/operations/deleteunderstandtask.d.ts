import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUnderstandTaskServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandTaskSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUnderstandTaskRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class DeleteUnderstandTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
