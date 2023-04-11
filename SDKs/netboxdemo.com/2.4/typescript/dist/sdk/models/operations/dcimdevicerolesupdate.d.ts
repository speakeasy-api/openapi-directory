import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceRolesUpdateRequest extends SpeakeasyBase {
    deviceRoleInput: shared.DeviceRoleInput;
    /**
     * A unique integer value identifying this device role.
     */
    id: number;
}
export declare class DcimDeviceRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceRole?: shared.DeviceRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
