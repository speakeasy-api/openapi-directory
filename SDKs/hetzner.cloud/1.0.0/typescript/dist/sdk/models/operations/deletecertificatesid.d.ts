import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCertificatesIdRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: number;
}
export declare class DeleteCertificatesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
