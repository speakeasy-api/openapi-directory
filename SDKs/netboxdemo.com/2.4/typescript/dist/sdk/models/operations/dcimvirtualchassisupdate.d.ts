import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimVirtualChassisUpdateRequest extends SpeakeasyBase {
    writableVirtualChassisInput: shared.WritableVirtualChassisInput;
    /**
     * A unique integer value identifying this virtual chassis.
     */
    id: number;
}
export declare class DcimVirtualChassisUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    virtualChassis?: shared.VirtualChassis;
}
