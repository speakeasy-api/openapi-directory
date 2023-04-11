import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUnderstandFieldServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandFieldSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUnderstandFieldRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid: string;
}
export declare class DeleteUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
