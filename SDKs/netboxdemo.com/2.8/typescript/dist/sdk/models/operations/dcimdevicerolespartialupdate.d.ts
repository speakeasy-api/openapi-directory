import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimDeviceRolesPartialUpdateRequest extends SpeakeasyBase {
    deviceRoleInput: shared.DeviceRoleInput;
    /**
     * A unique integer value identifying this device role.
     */
    id: number;
}
export declare class DcimDeviceRolesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceRole?: shared.DeviceRole;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
