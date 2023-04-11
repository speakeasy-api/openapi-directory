import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LocalesResponse extends SpeakeasyBase {
    contentType: string;
    example15s?: shared.Example15[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
