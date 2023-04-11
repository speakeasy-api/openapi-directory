import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateClassificationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createClassificationResponse?: shared.CreateClassificationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
