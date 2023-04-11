import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CheckReadyStatusResponse extends SpeakeasyBase {
    contentType: string;
    example13?: shared.Example13;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
