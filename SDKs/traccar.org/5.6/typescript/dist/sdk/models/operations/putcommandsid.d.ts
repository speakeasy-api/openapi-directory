import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCommandsIdRequest extends SpeakeasyBase {
    command: shared.Command;
    id: number;
}
export declare class PutCommandsIdResponse extends SpeakeasyBase {
    /**
     * OK
     */
    command?: shared.Command;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
