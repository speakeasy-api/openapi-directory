import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateModerationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createModerationResponse?: shared.CreateModerationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
