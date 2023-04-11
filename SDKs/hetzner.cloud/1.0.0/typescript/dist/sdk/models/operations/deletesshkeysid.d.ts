import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSshKeysIdRequest extends SpeakeasyBase {
    /**
     * ID of the SSH key
     */
    id: string;
}
export declare class DeleteSshKeysIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
