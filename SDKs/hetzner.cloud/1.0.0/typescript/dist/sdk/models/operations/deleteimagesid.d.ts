import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteImagesIdRequest extends SpeakeasyBase {
    /**
     * ID of the Image
     */
    id: number;
}
export declare class DeleteImagesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
