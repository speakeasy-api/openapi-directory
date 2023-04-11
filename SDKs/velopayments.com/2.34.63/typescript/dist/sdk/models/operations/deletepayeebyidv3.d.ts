import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePayeeByIdV3Request extends SpeakeasyBase {
    /**
     * The UUID of the payee.
     */
    payeeId: string;
}
export declare class DeletePayeeByIdV3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
