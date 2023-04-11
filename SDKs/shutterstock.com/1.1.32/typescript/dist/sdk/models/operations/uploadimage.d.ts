import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UploadImageSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class UploadImageResponse extends SpeakeasyBase {
    /**
     * Created
     */
    computerVisionImageCreateResponse?: shared.ComputerVisionImageCreateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
