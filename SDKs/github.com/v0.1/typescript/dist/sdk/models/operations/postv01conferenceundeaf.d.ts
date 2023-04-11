import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceUndeafSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceUndeafResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceUndeafResponse?: shared.ConferenceUndeafResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
