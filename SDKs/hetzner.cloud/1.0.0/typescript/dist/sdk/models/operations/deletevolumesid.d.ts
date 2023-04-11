import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteVolumesIdRequest extends SpeakeasyBase {
    /**
     * ID of the Volume
     */
    id: string;
}
export declare class DeleteVolumesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
