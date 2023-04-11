import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUnderstandQueryServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteUnderstandQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUnderstandQueryRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
     */
    assistantSid: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid: string;
}
export declare class DeleteUnderstandQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
