import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCommandsSendResponse extends SpeakeasyBase {
    /**
     * Command sent
     */
    command?: shared.Command;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
