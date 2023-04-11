import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StatusResponse extends SpeakeasyBase {
    contentType: string;
    example110?: shared.Example110;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
