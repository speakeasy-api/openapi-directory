import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DcimDeviceRolesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this device role.
     */
    id: number;
}
export declare class DcimDeviceRolesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
