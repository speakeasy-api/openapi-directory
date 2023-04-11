import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListHookResponse extends SpeakeasyBase {
    contentType: string;
    hookOutput?: shared.HookOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
