import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceRolesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device role.
     */
    id: number;
}
export declare class DcimDeviceRolesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceRole?: shared.DeviceRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
