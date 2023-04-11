import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePayeeByIdV4Request extends SpeakeasyBase {
    /**
     * The UUID of the payee.
     */
    payeeId: string;
}
export declare class DeletePayeeByIdV4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
