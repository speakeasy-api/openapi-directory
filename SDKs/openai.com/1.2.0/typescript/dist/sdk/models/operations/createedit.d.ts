import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateEditResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createEditResponse?: shared.CreateEditResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
