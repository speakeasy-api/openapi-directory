import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateHookSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class CreateHookResponse extends SpeakeasyBase {
    contentType: string;
    hook?: shared.Hook;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
