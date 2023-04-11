import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProcessesListResponse extends SpeakeasyBase {
    contentType: string;
    process?: shared.Process;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
