import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceListMembersSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceListMembersResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceListMembersResponse?: shared.ConferenceListMembersResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
