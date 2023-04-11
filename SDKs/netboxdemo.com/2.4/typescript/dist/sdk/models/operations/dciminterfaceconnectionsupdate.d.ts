import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInterfaceConnectionsUpdateRequest extends SpeakeasyBase {
    writableInterfaceConnectionInput: shared.WritableInterfaceConnectionInput;
    /**
     * A unique integer value identifying this interface connection.
     */
    id: number;
}
export declare class DcimInterfaceConnectionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceConnection?: shared.InterfaceConnection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
