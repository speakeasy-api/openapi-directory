import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTerminalCheckoutSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateTerminalCheckoutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTerminalCheckoutResponse?: shared.CreateTerminalCheckoutResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
