import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimInterfaceConnectionsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this interface connection.
     */
    id: number;
}
export declare class DcimInterfaceConnectionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
