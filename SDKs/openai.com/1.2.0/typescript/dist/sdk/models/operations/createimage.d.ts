import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    imagesResponse?: shared.ImagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
