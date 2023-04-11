import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUnderstandSampleServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandSampleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUnderstandSampleRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
    /**
     * The unique ID of the Task associated with this Sample.
     */
    taskSid: string;
}
export declare class DeleteUnderstandSampleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
