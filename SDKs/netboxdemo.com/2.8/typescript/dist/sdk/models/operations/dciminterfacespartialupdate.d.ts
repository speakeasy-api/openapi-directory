import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimInterfacesPartialUpdateRequest extends SpeakeasyBase {
    writableDeviceInterfaceInput: shared.WritableDeviceInterfaceInput;
    /**
     * A unique integer value identifying this interface.
     */
    id: number;
}
export declare class DcimInterfacesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceInterface?: shared.DeviceInterface;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
