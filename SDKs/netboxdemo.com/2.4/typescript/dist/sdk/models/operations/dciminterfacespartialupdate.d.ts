import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInterfacesPartialUpdateRequest extends SpeakeasyBase {
    writableInterfaceInput: shared.WritableInterfaceInput;
    /**
     * A unique integer value identifying this interface.
     */
    id: number;
}
export declare class DcimInterfacesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
