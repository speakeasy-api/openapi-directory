import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DoNotDisturbRequest extends SpeakeasyBase {
    contentType: string;
}
export declare class DoNotDisturbResponse extends SpeakeasyBase {
    contentType: string;
    getcurrentstate?: shared.Getcurrentstate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
