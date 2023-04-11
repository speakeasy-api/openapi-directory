import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCommandsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    command?: shared.Command;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
