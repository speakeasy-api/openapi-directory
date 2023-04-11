import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ContactModeratorsRequestBody extends SpeakeasyBase {
    /**
     * The body of the message.
     */
    message: string;
    /**
     * The subject of the message.
     */
    subject: string;
}
export declare class ContactModeratorsRequest extends SpeakeasyBase {
    requestBody: ContactModeratorsRequestBody;
    /**
     * The group ID of the group whose moderators will be contacted.
     */
    groupId: string;
}
export declare class ContactModeratorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
