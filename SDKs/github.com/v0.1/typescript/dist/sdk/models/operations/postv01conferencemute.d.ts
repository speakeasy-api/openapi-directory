import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV01ConferenceMuteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostV01ConferenceMuteResponse extends SpeakeasyBase {
    /**
     * Response
     */
    conferenceMuteResponse?: shared.ConferenceMuteResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
