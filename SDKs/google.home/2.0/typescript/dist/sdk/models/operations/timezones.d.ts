import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TimezonesResponse extends SpeakeasyBase {
    contentType: string;
    example14s?: shared.Example14[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
