import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGiftCardActivitySecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateGiftCardActivityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGiftCardActivityResponse?: shared.CreateGiftCardActivityResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
